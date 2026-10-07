# GDPR / CCPA Compliance Checklist for Meta Ads

## Purpose

Production-ready compliance checklist for advertisers running Meta Ads in GDPR (EU/EEA/UK) and CCPA/CPRA (California) jurisdictions. Use this to audit current compliance and prepare for new market launches. Referenced by the compliance-methodology SKILL.md and audit-compliance action skill.

---

## GDPR Compliance Checklist

### Legal Foundation

- [ ] **Lawful basis documented.** You have identified your legal basis for processing personal data for advertising (consent or legitimate interest). For most Meta Ads use cases, consent is the appropriate basis.
- [ ] **Data Processing Agreement (DPA) with Meta.** Meta's standard Terms of Service include DPA provisions for EU data processing. Confirm your acceptance of Meta's Data Processing Terms in Business Settings > Data Sources.
- [ ] **Privacy policy updated.** Your privacy policy explicitly mentions:
  - [ ] Use of Meta Pixel for tracking and advertising
  - [ ] Use of Conversions API for server-side data sharing
  - [ ] Purpose of data collection (advertising, optimization, measurement)
  - [ ] What data is shared with Meta (hashed email, phone, IP, browsing behavior)
  - [ ] How users can opt out or request data deletion
  - [ ] Cookie usage and third-party tracking
- [ ] **Data Protection Officer (DPO) designated** (required if processing personal data at scale or as a core business activity).
- [ ] **Records of processing activities (ROPA) maintained.** Document data flows between your systems and Meta, including what data is sent, how often, and for what purpose.

### Consent Management

- [ ] **Consent Management Platform (CMP) implemented.** Using a TCF 2.2-compliant CMP (OneTrust, Cookiebot, Osano, Termly, or Didomi).
- [ ] **Consent obtained before tracking.** Meta Pixel does not fire until the user grants consent.
  - [ ] Test by visiting your site with cookies cleared. The pixel should not fire until you click "Accept."
  - [ ] Verify in browser DevTools > Network tab: no requests to `facebook.com` or `connect.facebook.net` before consent.
- [ ] **Granular consent categories offered.** CMP provides separate toggles for:
  - [ ] Strictly necessary cookies (always on)
  - [ ] Analytics cookies
  - [ ] Marketing/advertising cookies (Meta falls here)
  - [ ] Personalization cookies
- [ ] **Consent signal passed to Meta.** Using Meta Consent Mode or CMP integration to communicate consent status.
  - [ ] When consent is granted: full pixel + CAPI tracking activates
  - [ ] When consent is denied: Meta uses modeled conversions only
- [ ] **Consent records stored.** CMP stores consent timestamps, choices, and versions for a minimum of 3 years.
- [ ] **Consent refresh mechanism.** CMP re-prompts users after a defined period (12 months recommended for GDPR).
- [ ] **No pre-checked consent boxes.** Consent must be an affirmative action (opt-in, not opt-out).

### TCF 2.2 Compliance

- [ ] **CMP is IAB TCF 2.2 registered.** Verify at iabeurope.eucmp_list.
- [ ] **Meta is listed as a vendor.** Meta (Facebook) should appear in your CMP's vendor list.
- [ ] **Required purposes consented:**
  - [ ] Purpose 1: Store and/or access information on a device
  - [ ] Purpose 3: Create profiles for personalised advertising
  - [ ] Purpose 4: Use profiles to select personalised advertising
  - [ ] Purpose 5: Create profiles to personalise content
  - [ ] Purpose 7: Measure advertising performance
  - [ ] Purpose 10: Develop and improve services

### User Rights

- [ ] **Right to erasure process.** You can remove a user from:
  - [ ] Custom Audiences (customer list-based)
  - [ ] Your CRM/database (source data for Custom Audiences)
  - [ ] CAPI event data (stop sending their data to Meta)
  - [ ] Timeline: within 30 days of request
- [ ] **Right to access process.** You can provide a user with:
  - [ ] What data you hold about them
  - [ ] What data you share with Meta
  - [ ] How their data is used for advertising
  - [ ] Timeline: within 30 days of request
- [ ] **Right to object process.** You can stop processing a user's data for advertising upon request.
- [ ] **Data subject request intake mechanism.** Email address, web form, or CMP-based request flow published on your site.

### CAPI-Specific GDPR Compliance

- [ ] **CAPI events respect consent status.** Server-side events are only sent with full user data when consent has been granted.
- [ ] **Consent-denied events sent with restricted parameters.** When consent is denied:
  - [ ] Do not send hashed email, phone, or other PII
  - [ ] You may send anonymized event data for modeled conversions (consult your DPO)
  - [ ] Pass consent_status parameter to Meta
- [ ] **Data minimization applied.** Only send user parameters necessary for the stated purpose (matching and optimization). Do not send unnecessary personal data.

---

## CCPA / CPRA Compliance Checklist

### Applicability Confirmation

- [ ] **CCPA applies to your business.** At least one of:
  - [ ] Annual revenue >$25 million
  - [ ] Process data of 100,000+ California consumers/households
  - [ ] Derive 50%+ of revenue from selling/sharing personal information
- [ ] **If CCPA does not apply, document why** (for audit trail).

### Disclosures and Notices

- [ ] **"Do Not Sell or Share My Personal Information" link** visible on your website (typically in footer).
- [ ] **Privacy policy discloses:**
  - [ ] Categories of personal information collected (identifiers, browsing history, commercial information)
  - [ ] Categories of personal information shared with Meta for advertising
  - [ ] Business purpose for sharing (targeted advertising, measurement)
  - [ ] Consumer rights under CCPA/CPRA
  - [ ] How to submit data requests
- [ ] **"Notice at Collection" provided.** At or before the point of data collection, inform users what data is collected and why.

### Consumer Rights

- [ ] **Right to know process.** Respond to verified consumer requests within 45 days with:
  - [ ] Categories of personal information collected
  - [ ] Sources of personal information
  - [ ] Business purpose for collection
  - [ ] Categories of third parties with whom data is shared
  - [ ] Specific pieces of personal information collected (if requested)
- [ ] **Right to delete process.** Upon verified request, delete consumer's personal information within 45 days.
  - [ ] Remove from Custom Audiences
  - [ ] Remove from CRM/database
  - [ ] Stop sending their data via CAPI
  - [ ] Notify Meta to delete their data (via Business Manager data deletion request)
- [ ] **Right to opt out process.** Consumer can opt out of "sale" or "sharing" of personal information.
  - [ ] Meta advertising pixel + CAPI data sharing qualifies as "sharing" under CPRA
  - [ ] Must honor opt-out immediately

### Global Privacy Control (GPC)

- [ ] **GPC signal detection implemented.** Your website detects the `Sec-GPC: 1` header or `navigator.globalPrivacyControl` JavaScript API.
- [ ] **GPC treated as valid opt-out request.** When GPC is detected:
  - [ ] Do not fire Meta Pixel for that user
  - [ ] Do not send CAPI events with PII for that user
  - [ ] Apply Limited Data Use (LDU) flag if sending any events
- [ ] **No re-consent prompt after GPC.** GPC is a legally binding signal; do not ask the user to override it.

### Limited Data Use (LDU) Implementation

- [ ] **LDU flag applied for opted-out California users.** When a California user opts out:
  - [ ] Set `data_processing_options` to `['LDU']` in CAPI event payload
  - [ ] Set `data_processing_options_country` to `1` (US)
  - [ ] Set `data_processing_options_state` to `1000` (California)
- [ ] **LDU not applied universally.** Only apply to opted-out California users (do not apply to all US traffic).
- [ ] **LDU events verified in Events Manager.** Check that LDU-flagged events appear correctly.

---

## Cross-Regulation Checklist

### Both GDPR and CCPA

- [ ] **Audience data is first-party only.** Custom Audiences are built from users who directly interacted with your business (not purchased lists or scraped data).
- [ ] **Customer lists refreshed within 30 days.** Stale lists may contain users who have since opted out or requested deletion.
- [ ] **Custom Audiences older than 180 days deleted.** Meta auto-expires them, but confirm manually.
- [ ] **No sensitive data categories sent to Meta.** Do not send:
  - [ ] Health or medical information
  - [ ] Financial account numbers
  - [ ] Social security numbers
  - [ ] Precise geolocation (fine-grained GPS)
  - [ ] Racial or ethnic origin
  - [ ] Political opinions
  - [ ] Religious beliefs
  - [ ] Sexual orientation
  - [ ] Genetic or biometric data
- [ ] **Retention policy documented.** Define how long you retain advertising-related personal data and when it's purged.
- [ ] **Vendor agreements current.** DPAs with Meta, analytics providers, CMP provider, and any data processors are signed and current.

### Account-Level Compliance

- [ ] **Domain verified in Business Manager.** Required for link ownership and branded content.
- [ ] **Business verification completed.** Required for certain ad types and higher spending limits.
- [ ] **Two-factor authentication enabled** on all Business Manager admin accounts.
- [ ] **Account Quality dashboard clean.** No active policy violations, restrictions, or pending issues.
- [ ] **Ad Library compliance.** All active ads are visible in Meta's Ad Library (required for political/social issue ads; good practice for all).

---

## Audit Schedule

| Check | Frequency | Owner | Notes |
|-------|-----------|-------|-------|
| CMP functioning correctly | Weekly | Marketing/Dev | Spot-check consent flow in EU + CA |
| Privacy policy accuracy | Quarterly | Legal/Marketing | Update when data practices change |
| Data subject requests processed | Ongoing (within 30/45 days) | Legal/Ops | Track requests and response times |
| Custom Audience freshness | Monthly (1st and 15th) | Marketing | Refresh lists, purge stale audiences |
| CAPI data parameters review | Quarterly | Marketing/Dev | Confirm only necessary data is sent |
| DPA/vendor agreement review | Annually | Legal | Ensure all agreements are current |
| CMP vendor list update | Quarterly | Marketing/Dev | Add new vendors, remove inactive |
| Employee training | Annually | HR/Legal | All marketing team members trained |
| Incident response plan tested | Annually | Legal/IT | Simulated data breach response |

---

## Quick Reference: What to Do When...

| Situation | Action |
|-----------|--------|
| User requests data deletion | Remove from Custom Audiences + CRM + CAPI within 30 days (GDPR) or 45 days (CCPA) |
| User opts out via GPC | Apply LDU flag, stop pixel/CAPI PII sharing for that user immediately |
| New EU market launch | Verify CMP covers the market, check local GDPR implementation nuances |
| Meta requests DPA update | Review changes with legal, sign within 30 days |
| Ad disapproved for personal attributes | Rephrase ad copy to be about the product, not the user's characteristics |
| Audit finds non-compliant Custom Audience | Delete the audience immediately, investigate the data source |
| CAPI sending unsanctioned data | Audit CAPI implementation, remove unnecessary parameters, document the fix |
