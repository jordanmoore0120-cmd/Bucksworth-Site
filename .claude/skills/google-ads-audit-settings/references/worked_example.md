# Worked Example: DataPulse (Fictional SaaS Company)

This example walks through a complete settings audit for a fictional SaaS company to demonstrate how findings are identified, classified, and resolved.

---

## Account Context

- **Company:** DataPulse (B2B SaaS, analytics platform)
- **Business type:** SaaS, product-led growth with sales-assisted enterprise tier
- **Account maturity:** Developing (15-30 conversions/month)
- **Monthly spend:** $18,000
- **Primary conversion:** Free trial signup
- **Secondary goal:** Demo request (enterprise)
- **Sales cycle:** 14-day free trial, 30-60 day enterprise sales cycle
- **Target geography:** United States only
- **CRM:** HubSpot

---

## Audit Findings

### Account-Level Settings

| Setting | Current Value | Recommended | Status | Notes |
|---|---|---|---|---|
| Auto-tagging | ON | ON | OK | Correctly configured |
| Tracking template | Not set | UTM suffix | Warning | No UTM parameters for HubSpot attribution |
| Auto-apply recommendations | ON (5 categories) | OFF | Critical | "Add keywords" and "Adjust budgets" are enabled |
| Negative keyword lists | 1 list, 12 terms | Expand and apply to all campaigns | Warning | List only applied to 2 of 5 campaigns |
| Default conversion goals | 4 Primary actions | 2 Primary, 2 Secondary | Critical | Page view and newsletter signup are Primary |

**Finding detail: Auto-apply recommendations (Critical)**

The account has auto-apply enabled for five categories including "Add keywords" and "Adjust budgets." In the last 90 days, Google auto-applied 23 keyword additions, 8 of which are broad match terms unrelated to analytics software (e.g., "data entry jobs," "free reporting tools"). Google also increased daily budgets on two campaigns by a combined $45/day without review.

Resolution:
1. Navigate to Settings > Recommendations > Auto-apply
2. Disable all categories, or enable only "Remove redundant keywords" and "Remove conflicting negative keywords"
3. Review and remove the 8 irrelevant auto-added keywords
4. Reset budgets to intended levels

---

### Campaign-Level Settings

#### Campaign: "US - Search - Analytics Software - Broad"

| Setting | Current Value | Recommended | Status | Notes |
|---|---|---|---|---|
| Location targeting | Presence or interest | Presence | Critical | U.S.-only business showing ads to international users researching U.S. analytics market |
| Display Network | ON | OFF | Warning | 12% of campaign spend ($216/mo) going to Display with 0.02% CTR |
| Ad rotation | Optimize | Optimize | OK | |
| Ad schedule | None | Business hours + buffer | Warning | B2B SaaS, most trials start during work hours |
| Mobile bid adj. | +0% | -25% | Warning | Mobile trial completion rate is 60% below desktop |

**Finding detail: Location targeting (Critical)**

The campaign targets "United States" with location method set to "Presence or interest." DataPulse only serves U.S. customers. The "or interest" setting means users in India, UK, Brazil, or anywhere else who search for "analytics software US" or "best analytics tools America" will see the ads.

Estimated waste: Based on geographic reports, approximately 22% of clicks come from users outside the U.S. At $18,000/month total spend, this campaign's share is roughly $6,000/month, meaning approximately $1,320/month is spent on clicks from users who cannot become customers.

Resolution:
1. Navigate to Campaign Settings > Locations > Location options
2. Change from "Presence or interest" to "Presence: People in or regularly in your targeted locations"
3. Review geographic performance report to confirm international clicks stop

#### Campaign: "US - Search - Demo Request - Enterprise"

| Setting | Current Value | Recommended | Status | Notes |
|---|---|---|---|---|
| Location targeting | Presence | Presence | OK | |
| Display Network | OFF | OFF | OK | |
| Ad rotation | Do not optimize | Optimize | Warning | No active test, rotation wastes impressions on weak ads |
| Ad schedule | 9am-6pm M-F | 8am-7pm M-F | OK | Reasonable for enterprise B2B |

*(Remaining 3 campaigns checked, all OK on critical settings)*

---

### Conversion Tracking

| Name | Category | Count | Model | Window | Include | Value | Status | Notes |
|---|---|---|---|---|---|---|---|---|
| Free Trial Signup | Signup | Every | DDA | 30d | Yes | None | Critical | Count should be "One" |
| Demo Request | Lead | Every | DDA | 30d | Yes | None | Critical | Count should be "One" |
| Page View - Pricing | Page View | One | DDA | 30d | Yes | None | Critical | Should be Secondary |
| Newsletter Signup | Other | One | DDA | 30d | No | None | OK | Correctly set as Secondary |

**Finding detail: Count settings (Critical)**

Both "Free Trial Signup" and "Demo Request" use "Every" count. Analysis of conversion data shows:
- Free Trial Signup: 47 conversions reported in last 30 days, but CRM shows 31 unique trial signups. Inflation ratio: 1.52x.
- Demo Request: 12 conversions reported, CRM shows 8 unique demo requests. Inflation ratio: 1.5x.

The account reports a CPA of $305 based on 59 total conversions. Corrected for duplicates (39 unique conversions), actual CPA is $462. This is a 51% underreporting of true CPA.

Smart Bidding is also optimizing toward users who submit forms multiple times, not toward unique high-quality leads.

Resolution:
1. Navigate to Goals > Conversions > Free Trial Signup > Edit settings
2. Change Count from "Every" to "One"
3. Repeat for Demo Request
4. Note: reported conversion volume will drop ~35% after this change. This is correct. Notify stakeholders before making the change to avoid alarm.

**Finding detail: Pricing page view as Primary (Critical)**

"Page View - Pricing" is set as a Primary conversion action. This means Smart Bidding treats a pricing page visit with the same weight as a free trial signup. The bidding algorithm is optimizing for a blend of pricing page views and actual conversions, diluting its ability to find users who will actually sign up.

Resolution:
1. Navigate to Goals > Conversions > Page View - Pricing
2. Change from Primary to Secondary
3. The action will continue tracking in "All conversions" but will no longer influence Smart Bidding

---

### Privacy Compliance

| Requirement | Status | Impact if Not Addressed | Priority |
|---|---|---|---|
| Consent Mode V2 | Not applicable (U.S. only) | N/A | N/A |
| Enhanced Conversions for Web | Not enabled | Missing ~5-10% of trial signup attributions | Warning |
| Enhanced Conversions for Leads | Not enabled | Cannot match HubSpot closed-won deals to ad clicks | Warning |
| Restricted Data Processing (CA) | Not enabled | Non-compliant with CPRA for California users | Warning |

---

### Data Connections

| Connection | Status | Required/Recommended | Impact if Missing |
|---|---|---|---|
| GA4 | Linked (GA4-987654321) | Required | N/A |
| Merchant Center | Not applicable | N/A | N/A |
| YouTube | Not linked | Recommended | Cannot build video remarketing audiences |
| Search Console | Not linked | Recommended | No organic vs. paid keyword insights |
| GBP | Not applicable | N/A | N/A |
| CRM (HubSpot) | Not linked | Required | No offline conversion data for Smart Bidding |
| Data Manager | Not configured | Required | No Customer Match audiences |

**Finding detail: CRM not linked (Critical for this account type)**

DataPulse uses HubSpot as its CRM with full pipeline tracking. However, no offline conversion import is configured. Smart Bidding optimizes for trial signups without any signal about which trials convert to paid customers. A trial signup from a Fortune 500 company is weighted the same as a trial from a student exploring free tools.

Resolution:
1. Enable Enhanced Conversions for Leads (captures hashed email at trial signup)
2. Configure HubSpot offline conversion import (native integration or Zapier)
3. Create a "Qualified Lead" or "Closed Won" offline conversion action
4. Set the offline action as Primary with a value reflecting average deal size
5. After 30 days of data, transition bidding to optimize for qualified leads rather than trial signups

---

## Summary Dashboard

**Account:** DataPulse (CID: 123-456-7890)
**Audit Date:** 2026-03-15
**Business Type:** SaaS (PLG + Enterprise)
**Maturity Level:** Developing

### Findings Overview

| Severity | Count |
|---|---|
| Critical | 6 |
| Warning | 7 |
| OK | 9 |
| **Total Checked** | **22** |

### Top 3 Highest-Impact Issues

1. **Conversion count settings (Critical):** "Every" count on trial and demo actions inflates reported conversions by ~52%, making CPA appear $157 lower than reality ($305 reported vs. $462 actual). Smart Bidding optimizes toward duplicate submitters.
2. **Auto-apply recommendations (Critical):** Google auto-added 23 keywords and increased budgets without review in the last 90 days. At least 8 added keywords are irrelevant, and budget was increased by ~$1,350/month without approval.
3. **Location targeting (Critical):** "Presence or interest" on the primary Search campaign sends ~22% of clicks to international users who cannot become customers. Estimated waste: $1,320/month.

### Recommended Priority Order

1. Fix conversion count settings (immediate impact on data accuracy and Smart Bidding signal quality)
2. Disable auto-apply recommendations and clean up auto-added keywords (stop ongoing unauthorized changes)
3. Change location targeting to "Presence" (eliminate geographic waste)
4. Set "Page View - Pricing" to Secondary (stop diluting Smart Bidding signals)
5. Configure HubSpot offline conversion import (enable lead quality optimization)
6. Enable Enhanced Conversions (recover lost attribution data)
7. Address remaining Warning items

### Estimated Impact

Addressing the 6 Critical findings would eliminate approximately $2,670/month in wasted spend, correct conversion reporting that is currently inflated by ~52%, and provide Smart Bidding with accurate optimization signals. The CRM integration (item 5) would additionally shift optimization from trial volume to lead quality, which typically improves SQL rates by 15-30% within 60-90 days.
