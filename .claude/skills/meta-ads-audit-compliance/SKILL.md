---
name: meta-ads-audit-compliance
description: Audit Meta Ads accounts for privacy, policy, data-handling, and platform compliance risks.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `audit-compliance`-style names, e.g. `google-ads-mine-search-terms`.

# Audit Compliance

## Purpose

Audit Meta Ads accounts for privacy, legal, policy, and platform compliance before issues cause disapprovals, restrictions, or shutdowns.

Compliance spans:
1. **Ad policy:** special ad categories, restricted content, personal attributes, landing pages.
2. **Privacy:** GDPR/CCPA, consent, privacy policy, cookie/opt-out controls.
3. **Data handling:** custom audiences, CAPI data flow, retention, deduplication.
4. **Platform health:** account quality, verification, payments, admin security.

## Dependencies

At Step 0, load:

| Dependency | Purpose |
|---|---|
| `compliance_methodology` | Compliance framework, regulations, checklists |
| `account_conventions` | Account config: special categories, GDPR/CCPA, business model, geos |

Confirm data source method and state which checks are automated vs manual.

## Workflow

### 1. Special Ad Category Check

Categories requiring declaration:

| Category | Applies When | Key Restrictions |
|---|---|---|
| Housing | Sales, rentals, mortgages, home insurance | No age/gender/zip targeting; no lookalikes |
| Credit | Credit cards, loans, financing, insurance | No age/gender/zip targeting; no lookalikes |
| Employment | Jobs or career opportunities | No age/gender/zip targeting; no lookalikes |
| Social Issues/Elections/Politics | Political or social-issue ads | Disclaimer and restricted targeting |

Check that campaign settings match ad content, targeting restrictions are enforced, political disclaimers appear where needed, and similar campaigns use categories consistently. Red flags include mixed category declarations for similar offers, wrong-category overrestriction, and ad copy likely to trigger Meta classifiers.

### 2. Privacy Configuration

**GDPR/EU-EEA:** verify consent before tracking, consent mode, data processing agreement, compliant cookie banner, retention policy, erasure process, and lawful basis.

**CCPA/California:** verify Limited Data Use for CA users, Global Privacy Control/Do Not Sell handling, privacy-policy disclosure of Meta data sharing, and opt-out mechanisms.

**CAPI:** verify data processing options, LDU where applicable, deletion process, event payload minimization, and deduplication.

Priority rules:
- `gdpr_applicable: true` without consent mode/consent mechanism = P0.
- `ccpa_applicable: true` without LDU/opt-out handling = P0.
- If neither applies, confirm geo targeting does not include EU/EEA or California.

### 3. Ad Review and Account Quality

Check active/pending ads for approved, in review, not approved, partially approved, and account quality warnings. For each disapproved ad document name/ID, stated reason, policy reference when available, whether it looks valid or false positive, recommended fix, and appeal vs revise decision.

Common disapproval areas: personal attributes, before/after or transformation claims, misleading claims or fake UI, nonfunctional landing pages, prohibited content, circumventing systems, and discriminatory targeting.

### 4. Data Sharing Audit

Custom audience checks:
- Consent basis for customer list use.
- List freshness and retention window, ideally <=180 days unless justified.
- Appropriate hashing/upload method.
- No unnecessary fields.
- Audience size above platform minimums.

CAPI checks:
- Necessary event parameters only.
- Appropriate match keys.
- Browser/server deduplication via `event_id`.
- No test events in production.
- Error rate below 5% in Events Manager diagnostics when available.

### 5. Master Compliance Checklist

Rate each item `Compliant`, `At Risk`, `Non-Compliant`, or `N/A`, with priority and owner when relevant:

| # | Category | Item |
|---|---|---|
| 1 | Policy | Ads comply with Meta Advertising Standards |
| 2 | Policy | Special Ad Categories correctly declared |
| 3 | Policy | No disapproved ads active or pending |
| 4 | Policy | Ad copy avoids personal attributes |
| 5 | Policy | Landing pages functional and policy-compliant |
| 6 | Privacy | GDPR consent mechanism in place if applicable |
| 7 | Privacy | CCPA LDU/opt-out signals implemented if applicable |
| 8 | Privacy | Privacy policy covers Meta data sharing |
| 9 | Privacy | Cookie banner compliant where required |
| 10 | Privacy | Meta Pixel consent mode configured |
| 11 | Data | Custom audiences have consent basis |
| 12 | Data | Customer lists refreshed within retention window |
| 13 | Data | CAPI data processing options configured |
| 14 | Data | CAPI sends no unnecessary user data |
| 15 | Data | Event deduplication works |
| 16 | Account | Business verification complete |
| 17 | Account | Account Quality above risk threshold |
| 18 | Account | Payment method current |
| 19 | Account | 2FA enabled for admins |
| 20 | Account | Access roles are appropriate |

## Output Contract

```markdown
# Meta Ads Compliance Audit Report

**Account:** [Name] | **Account ID:** [act_XXXXX]
**Audit Date:** [Today]

## Compliance Score
**Overall: [X/20 items compliant]**

| Category | Compliant | At Risk | Non-Compliant | N/A |
|---|---:|---:|---:|---:|
| Ad Policy | | | | |
| Privacy | | | | |
| Data Handling | | | | |
| Account Health | | | | |

## Executive Summary
[2-3 sentences: posture, biggest risk, urgent fix]

## Non-Compliant Items
| # | Item | Issue | Risk | Remediation | Owner | Deadline |
|---|---|---|---|---|---|---|

## At-Risk Items
[table]

## Special Ad Category Status
Current setting, recommendation, and rationale.

## Privacy Compliance Detail
GDPR and CCPA status with evidence.

## Ad Disapproval Summary
Counts plus disapproved-ad detail.

## Data Handling Assessment
Custom audience and CAPI findings.

## Remediation Plan
### P0: Fix Today
### P1: Fix This Week
### P2: Fix This Month

## Next Audit
Recommended cadence and date.
```

## Regulation Quick Reference

- **GDPR:** applies to EU/EEA residents; requires explicit tracking consent; Meta consent signals may be required; penalties can be significant.
- **CCPA:** applies to California residents; requires opt-out/Do Not Sell handling; Limited Data Use restricts Meta processing for CA users.
- **Meta standards:** prohibit illegal products/services, discriminatory practices, misleading content, personal-attribute targeting in copy, adult/sensational content, and circumvention.
