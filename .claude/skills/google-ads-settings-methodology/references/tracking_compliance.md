# Conversion Tracking and Privacy Compliance

This reference provides the complete conversion tracking audit framework and privacy compliance requirements for Google Ads accounts.

---

## Conversion Action Audit

For each conversion action in the account, verify the following attributes. Pull conversion action configuration from the Google Ads API using the `conversion_action` resource.

### Name and Category

- **Verify:** Name is descriptive and follows a consistent naming convention
- **Verify:** Category matches the actual user action (purchase, lead, signup, page view, etc.)
- **Common error:** Generic names like "Website conversion" that make it impossible to distinguish actions in reporting
- **Best practice:** Include the source and action type in the name (e.g., "Website - Form Submit - Contact Us", "Website - Purchase - Shopify")

### Count Setting

- **"One" (one conversion per click):** Use for leads, form submissions, phone calls, signups. Prevents double-counting when a user submits a form multiple times or refreshes a thank-you page.
- **"Every" (every conversion per click):** Use for purchases, transactions, bookings. Every distinct transaction should count.

**Impact of wrong count setting:**
- Lead action set to "Every": One user submitting a form 3 times counts as 3 conversions. Inflates conversion volume by 1.5-3x in typical lead gen accounts. Reported CPA appears 50-70% lower than reality. Smart Bidding optimizes toward users who submit multiple times rather than unique leads.
- Purchase action set to "One": Only the first purchase per click-session counts. Repeat purchases from the same ad click are lost. Underreports revenue and conversion volume.

### Attribution Model

- **Data-Driven Attribution (DDA):** Default for all new conversion actions since 2025. Recommended for all accounts regardless of size. Uses machine learning to distribute credit across touchpoints.
- **Last Click:** Available as an alternative. Assigns 100% of credit to the last-clicked ad. Useful for comparison or accounts with very low conversion volume where DDA may not have enough signal.
- **Deprecated models (auto-migrated to DDA in September 2025):**
  - First Click
  - Linear
  - Time Decay
  - Position-Based
- **Audit action:** If any conversion action still shows a deprecated model name, it was auto-migrated to DDA. Verify the UI reflects DDA. No action needed unless the account manager specifically wants Last Click.

### Attribution Window

- **Click-through window:** How many days after an ad click a conversion can be attributed
  - Default: 30 days
  - Range: 1-90 days
- **View-through window:** How many days after an ad impression (without click) a conversion can be attributed
  - Default: 1 day
  - Range: 1-30 days

**Window recommendations by business type:**

| Business Type | Click-Through Window | View-Through Window |
|---|---|---|
| eCommerce (low AOV) | 30 days | 1 day |
| eCommerce (high AOV) | 60 days | 1-3 days |
| Lead gen (short cycle) | 30 days | 1 day |
| Lead gen (long cycle, B2B) | 60-90 days | 1 day |
| SaaS (free trial) | 30-60 days (match trial length + buffer) | 1 day |
| Local services | 30 days | 1 day |

**Common error:** Using the 30-day default for B2B accounts with 90-day sales cycles. Conversions that happen on day 45 are never attributed to the ad click, making campaigns appear to underperform.

### Include in "Conversions" Column

- **Primary conversion actions:** Set to "Yes" (included in the Conversions column and used by Smart Bidding)
- **Secondary/observation conversion actions:** Set to "No" (tracked in "All conversions" but excluded from the main Conversions column and Smart Bidding)

**What should be secondary:**
- Micro-conversions used for monitoring only (page views, scroll depth, time on site)
- Duplicate conversion tracking from multiple sources (e.g., both Google Ads tag and GA4 import tracking the same event)
- Legacy conversion actions that are no longer the primary business goal

**Common error:** All conversion actions set to "Primary." Smart Bidding then optimizes for a blend of page views, form submits, and purchases simultaneously, diluting optimization toward low-value actions.

### Value Assignment

- **Dynamic value:** Required for eCommerce. Transaction value passed from the site (e.g., order total from Shopify, WooCommerce). Enables value-based bidding (tROAS).
- **Static value:** Appropriate for lead gen where each lead has an estimated value (e.g., $50 per lead based on close rate and deal size). Enables value-based bidding with weighted leads.
- **No value:** Prevents value-based bidding entirely. Limits Smart Bidding to tCPA or max conversions.

---

## Consent Mode V2

### Regulatory Context

Consent Mode V2 became mandatory for Google Ads accounts serving users in the European Economic Area (EEA) and the United Kingdom as of July 21, 2025. This is not optional for accounts with EEA/UK traffic.

### Required Consent Signals

Four consent signals must be implemented:

| Signal | Controls | Impact if Missing |
|---|---|---|
| `ad_storage` | Cookies for advertising | No remarketing, no conversion tracking via cookies |
| `analytics_storage` | Cookies for analytics | No GA4 session data, no audience building |
| `ad_user_data` | Sending user data to Google for advertising | No customer match, no enhanced conversions |
| `ad_personalization` | Personalized advertising | No remarketing, no similar audiences |

### Implementation Modes

- **Basic Consent Mode:** Google tags do not fire at all until consent is granted. Full data loss for non-consenting users.
- **Advanced Consent Mode:** Google tags fire cookieless pings even when consent is denied. These pings allow Google to model conversions and behavior for non-consenting users. Recovers approximately 30-50% of data that would otherwise be lost.

**Recommendation:** Always implement Advanced Consent Mode. The modeling capability significantly improves data quality and Smart Bidding performance in regions with high consent denial rates (typically 30-60% of EEA users deny consent).

### Consent Management Platform (CMP) Requirement

- A CMP must be deployed to collect user consent before tags fire
- The CMP must integrate with Google's consent framework to pass signals correctly
- Google maintains a list of certified CMPs (CMP Partner Program)
- Common CMPs: Cookiebot, OneTrust, Usercentrics, Didomi, CookieYes

### Verification Steps

1. Check Google Tag settings for consent mode implementation
2. Verify all four consent signals are present in tag configuration
3. Confirm CMP is deployed and functioning on the website
4. Check Google Ads conversion reporting for "Modeled conversions" data (indicates Advanced Consent Mode is working)
5. Review the Diagnostics page in Google Ads for consent-related warnings

### Impact of Non-Compliance

- Loss of remarketing audiences for EEA/UK users
- Loss of conversion tracking for EEA/UK users (conversions not recorded)
- Loss of demographic and interest reporting for EEA/UK traffic
- Potential regulatory fines under GDPR (up to 4% of annual global revenue)
- Google may restrict account features for non-compliant accounts

---

## Enhanced Conversions

### Enhanced Conversions for Web

- **What it does:** When a user converts on your website, Enhanced Conversions hashes first-party data (email address, phone number, name, address) and sends it to Google. Google matches this hashed data against signed-in user data to improve attribution accuracy.
- **Impact:** Recovers approximately 5-10% more conversions that would otherwise be lost due to cookie restrictions, cross-device journeys, or privacy browser settings
- **Implementation options:**
  - Google Tag (gtag.js): automatic detection of form fields
  - Google Tag Manager: manual or automatic variable mapping
  - Google Ads API: server-side implementation
- **Recommendation:** Enable for all accounts. No downside. Improves conversion data quality.

### Enhanced Conversions for Leads

- **What it does:** When a lead converts on your website, the hashed lead data (typically email) is stored. When that lead later converts offline (becomes a customer, reaches a sales stage), the offline conversion is imported and matched to the original ad click via the hashed data.
- **Required for:** Lead gen accounts that import offline conversions (CRM data, sales pipeline stages)
- **Implementation:** Requires passing a hashed email or phone number at the time of web conversion, then including the same identifier when importing offline conversions
- **Impact:** Significantly improves offline conversion attribution accuracy. Without it, offline conversion import relies solely on `gclid` matching, which degrades over time.

---

## U.S. State Privacy Laws (2025-2026)

### Current Landscape

No federal privacy law exists in the United States as of 2026. Privacy is regulated at the state level:

| State | Law | Effective |
|---|---|---|
| California | CPRA (California Privacy Rights Act) | January 2023 |
| Colorado | CPA (Colorado Privacy Act) | July 2023 |
| Virginia | VCDPA (Virginia Consumer Data Protection Act) | January 2023 |
| Connecticut | CTDPA (Connecticut Data Privacy Act) | July 2023 |
| Indiana | ICDPA | January 2026 |
| Kentucky | KCDPA | January 2026 |
| Rhode Island | RIDPA | January 2026 |

Additional states are passing laws for 2026-2027 enforcement.

### Practical Impact on Google Ads

- U.S. state privacy laws do not require Consent Mode in the same way as GDPR/EEA regulations
- However, many require honoring opt-out signals (Global Privacy Control, Do Not Sell)
- Proactive implementation of consent mechanisms is recommended for future-proofing
- Google's Restricted Data Processing (RDP) mode handles California compliance automatically when enabled
- Accounts with nationwide U.S. traffic should consider implementing consent infrastructure now rather than retrofitting as each state law takes effect

### Verification Steps

1. Check if Restricted Data Processing is enabled for California users
2. Verify Global Privacy Control (GPC) signals are being respected
3. Review privacy policy for compliance with applicable state laws
4. Confirm data retention settings align with state requirements
