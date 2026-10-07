# Settings Checklist: Account-Level and Campaign-Level

This reference provides the complete settings checklist for Google Ads account audits. For each setting: the correct value, what happens when it is wrong, and how to verify it.

---

## Account-Level Settings

### Auto-Tagging

- **Location:** Account Settings > Auto-tagging
- **Correct value:** ON
- **What it does:** Automatically appends a `gclid` parameter to landing page URLs when users click ads
- **Risk if OFF:** GA4 cannot match Google Ads clicks to site sessions. Attribution breaks. Audience sharing between GA4 and Google Ads fails. Conversion import from GA4 becomes unreliable.
- **Common reason it's OFF:** Manual UTM tagging preference, or turned off during a troubleshooting session and never restored
- **Resolution:** Turn ON. If the site has URL-sensitive redirects that strip parameters, investigate redirect configuration rather than disabling auto-tagging.

### Tracking Template and Final URL Suffix

- **Location:** Account Settings > Tracking
- **Correct value:** Properly structured UTM parameters in the final URL suffix (e.g., `utm_source=google&utm_medium=cpc&utm_campaign={campaignid}`)
- **What to verify:**
  - URL suffix is present and uses correct ValueTrack parameters
  - No duplicate UTM parameters between auto-tagging and manual tagging
  - Tracking template (if used) does not break landing page URLs
  - Third-party tracking redirects (if used) function correctly and do not add latency
- **Risk if wrong:** Attribution gaps in third-party analytics platforms, broken landing pages from malformed URLs, slow redirects increasing bounce rate

### Auto-Apply Recommendations

- **Location:** Account Settings > Recommendations > Auto-apply
- **Correct value:** OFF for all categories, or very selectively enabled
- **What it does:** Allows Google to automatically implement its recommendations without human review
- **Categories to watch:**
  - "Add keywords" (CRITICAL: Google adds broad match keywords that may be irrelevant)
  - "Adjust bids" (Google changes bid strategies or targets)
  - "Adjust budgets" (Google increases daily budgets)
  - "Create assets" (Google generates ad copy automatically)
  - "Use optimized targeting" (Google expands audience targeting)
- **Risk if ON:** Budget increases without approval, irrelevant keywords added, bid strategies changed, ad copy created without brand review
- **Verification:** Check the Recommendations page for "Auto-applied" badge. Review change history for auto-applied changes in the past 90 days.

### Account-Level Negative Keywords

- **Location:** Tools > Shared Library > Negative keyword lists
- **What to verify:**
  - At least one negative keyword list exists
  - Lists are applied to relevant campaigns
  - Lists are actively maintained (check last updated date)
  - Common universal negatives are present (jobs, careers, salary, free, DIY, etc. as appropriate)
- **Risk if missing:** Every campaign independently responsible for negative keywords. Common waste terms slip through. New campaigns launch without baseline protection.

### Linked Accounts

- **Location:** Tools > Data Manager > Data sources (or Admin > Linked accounts)
- **Required links by business type:**

| Link | eCommerce | Lead Gen | Local | SaaS |
|---|---|---|---|---|
| GA4 | Required | Required | Required | Required |
| Merchant Center | Required | N/A | N/A | N/A |
| YouTube | Recommended | Recommended | Recommended | Recommended |
| Search Console | Recommended | Recommended | Recommended | Recommended |
| Google Business Profile | Optional | Optional | Required | N/A |

- **Verification:** Check each linked account shows "Active" status. A linked account showing "Needs attention" or "Not linked" requires investigation.
- **Impact details:** See `data-connections.md` for feature-by-feature breakdown of what each link enables.

### Conversion Goals (Account Default)

- **Location:** Goals > Conversions > Summary
- **What to verify:**
  - Default conversion goals align with business objectives
  - Primary conversions are set as "Primary" (included in bidding)
  - Secondary/observation conversions are set as "Secondary" (excluded from bidding)
  - No duplicate conversion actions tracking the same event
  - No removed or paused conversion actions still receiving data
- **Risk if wrong:** Smart Bidding optimizes toward the wrong actions. Reported conversion volume is inflated or deflated. Campaign performance comparisons are unreliable.

---

## Campaign-Level Settings

These settings must be checked for **every campaign**. A single misconfigured campaign can silently drain budget.

### Location Targeting Method

- **Location:** Campaign Settings > Locations > Location options
- **Options:**
  - **"Presence: People in or regularly in your targeted locations"** (recommended for most businesses, especially local services)
  - **"Presence or interest: People in, regularly in, or who've shown interest in your targeted locations"** (includes people researching the location from elsewhere)
- **When "Presence or interest" is appropriate:** Tourism, real estate, relocation services, nationally shipped eCommerce
- **When "Presence" is required:** Local services, restaurants, brick-and-mortar retail, any business that cannot serve remote customers
- **Risk if wrong:** A local plumber targeting "Denver" with "Presence or interest" shows ads to people in New York who searched "Denver plumbers" out of curiosity. Budget wasted on clicks that cannot convert.
- **How common:** This is one of the single most frequent and expensive settings errors. Google defaults to "Presence or interest."

### Language Targeting

- **Location:** Campaign Settings > Languages
- **Correct value:** Match the language(s) your landing pages are written in and your audience speaks
- **Common errors:**
  - Targeting only English when the local population includes significant non-English speakers
  - Targeting "All languages" when landing pages only exist in one language
- **Note:** Language targeting matches the user's browser/device language setting, not the language of the search query

### Network Settings

- **Location:** Campaign Settings > Networks
- **Search campaigns:**
  - Search Partners: Optional. Check performance separately. Some accounts see good ROI, others see waste.
  - Display Network: Should be **OFF** for Search campaigns. Google calls this "Search Network with Display select." It sends Search budget to Display placements at typically much lower quality.
- **Display campaigns:** Display Network only (Google Display Network)
- **Risk if wrong:** Search budget diverted to Display placements with 0.1% CTR and minimal conversions. Often accounts for 10-30% of Search campaign spend with near-zero return.

### Ad Rotation

- **Location:** Campaign Settings > Ad rotation
- **Options:**
  - **"Optimize: Prefer best performing ads"** (Google's default, recommended for most situations)
  - **"Do not optimize: Rotate ads indefinitely"** (equal rotation, useful during A/B testing)
- **When to use "Do not optimize":** Only during active ad copy testing when you need equal impression distribution to reach statistical significance
- **Risk if wrong:** "Do not optimize" left on after testing gives underperforming ads equal impressions indefinitely. "Optimize" during early testing phases starves new ad variations before they reach significance.

### Ad Schedule / Dayparting

- **Location:** Campaign Settings > Ad schedule
- **What to verify:**
  - Schedule aligns with business operating hours (especially for call-driven businesses)
  - Bid adjustments are set for high-value and low-value time periods
  - Time zone is correct
  - Weekend vs. weekday performance has been evaluated
- **Risk if wrong:** Budget spent during hours when no one answers the phone. Equal spend across 24 hours when 80% of conversions happen during business hours.

### Device Targeting

- **Location:** Campaign Settings > Devices (bid adjustments)
- **What to verify:**
  - Mobile bid adjustment reflects actual mobile conversion performance
  - Desktop vs. mobile vs. tablet performance has been reviewed
  - Landing pages are mobile-optimized before investing in mobile traffic
- **Common pattern:** Mobile traffic is high-volume but low-conversion for many B2B and high-consideration purchases. A -30% to -50% mobile bid adjustment is common for these verticals.
- **Risk if wrong:** Full budget allocation to devices with poor conversion rates

### IP Exclusions

- **Location:** Campaign Settings > Additional settings > IP exclusions
- **What to verify:**
  - Office/internal IPs are excluded (prevents employees from triggering ad clicks)
  - Known competitor IPs are excluded if identified
  - Maximum 500 IP exclusions per campaign
- **Note:** IP exclusions are less effective than they once were due to dynamic IPs and VPN usage. They are still worth implementing for known static office IPs.

### Dynamic Search Ads Settings

- **Location:** Campaign Settings > Dynamic Search Ads (if enabled)
- **What to verify:**
  - Page feed is configured (preferred over "all pages" targeting)
  - Exclusion URLs are set for pages that should not receive traffic (careers, blog, privacy policy, etc.)
  - Category targets are reviewed and refined
- **Risk if wrong:** DSA generates headlines from irrelevant pages, sends traffic to non-converting URLs, creates brand-inappropriate ad copy

### Final URL Expansion (PMax and Demand Gen)

- **Location:** Campaign Settings > Final URL expansion
- **What to verify:**
  - URL exclusion list is configured to prevent traffic to irrelevant pages
  - If Final URL expansion is OFF, ensure the asset group URLs are correctly set
  - Review actual landing page URLs in reporting to identify unexpected destinations
- **Risk if wrong:** PMax sends traffic to blog posts, about pages, careers pages, or other non-converting URLs. This is one of the most common PMax settings issues.

### Brand Restrictions (PMax)

- **Location:** Campaign Settings > Brand restrictions (PMax only)
- **What to verify:**
  - Brand exclusion list is configured to prevent PMax from cannibalizing branded Search campaigns
  - Competitor brand terms are excluded if not intentionally targeted
- **Risk if wrong:** PMax claims credit for branded conversions that would have come through cheaper branded Search campaigns. Inflates PMax ROAS while increasing total account cost.
- **Note:** Brand restrictions became available in 2023 and are now considered essential for any account running both PMax and branded Search campaigns.
