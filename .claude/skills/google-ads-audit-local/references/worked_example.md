# Worked Example: BrightSmile Dental (Fictional)

## Account Overview

**Business:** BrightSmile Dental, a multi-location dental practice
**Locations:** 3 offices in a mid-size metro area
- Location A: Downtown (urban core)
- Location B: Northside (suburban)
- Location C: Eastside (suburban/rural fringe)

**Account ID:** 123-456-7890
**Monthly spend:** $8,500
**Business model:** Lead generation (appointment bookings via phone and online form)
**Maturity level:** Developing

---

## Step 0: Dependencies Loaded

Account config confirms:
- `has_gbp`: true (3 locations linked)
- `local_config`: radius targeting, 30-mile radius on all locations
- Business model: lead generation
- Primary conversion: phone calls and form submissions
- LSA: not active, but eligible (dental is an LSA category)

---

## Step 2: GBP Integration Check

### Findings

**GBP Linking:**
- All 3 locations linked to Google Ads account. Status: good.
- Location extensions enabled on 2 of 3 Search campaigns (Campaign C missing).

**Review Scores:**
| Location | Score | Reviews | Status |
|---|---|---|---|
| Location A (Downtown) | 4.6 | 87 | Strong |
| Location B (Northside) | 3.8 | 23 | Below threshold |
| Location C (Eastside) | 3.6 | 11 | Below threshold |

**GBP Completeness:**
- Location A: 35 photos, weekly posts, Q&A populated. Well maintained.
- Location B: 8 photos, no posts in 60 days, Q&A empty. Neglected.
- Location C: 4 photos, no posts ever, Q&A empty, hours not updated for holidays. Neglected.

### Classified Findings
- `[WARNING]` Location B review score 3.8, below 4.0 threshold. Impacts ad trust signals and would hurt LSA ranking.
- `[WARNING]` Location C review score 3.6 with only 11 reviews. Significant disadvantage for any local ad format.
- `[WARNING]` Location extensions not enabled on Campaign C (serving Location C area).
- `[OPPORTUNITY]` Locations B and C have fewer than 20 photos each. Upload target: 20+ per location.
- `[OPPORTUNITY]` Locations B and C have no GBP posts. Start weekly posting cadence.
- `[OPPORTUNITY]` Q&A sections empty on B and C. Pre-populate with 10 common dental questions.

---

## Step 3: Location Targeting Audit

### "Presence" vs "Presence or Interest"

| Campaign | Setting | Status |
|---|---|---|
| Campaign A (Downtown) | Presence or interest | INCORRECT |
| Campaign B (Northside) | Presence or interest | INCORRECT |
| Campaign C (Eastside) | Presence or interest | INCORRECT |

All three campaigns use the default "Presence or interest" setting. BrightSmile is a local-only dental practice. Patients must physically visit the office. "Presence or interest" is incorrect for all campaigns.

**Impact analysis from geographic report:**
- 15% of total clicks ($1,275/month) came from users 100+ miles away
- 0 conversions from users outside a 25-mile radius in the last 90 days
- Estimated annual waste: $15,300

### Radius Evaluation

| Campaign | Current Radius | Recommended | Rationale |
|---|---|---|---|
| Campaign A (Downtown) | 30 miles | 10 miles | Urban location. 85% of conversions within 8 miles. 30 miles reaches into suburban territory served by other locations. |
| Campaign B (Northside) | 30 miles | 18 miles | Suburban. 75% of conversions within 15 miles. Some patients willing to drive further in suburbs. |
| Campaign C (Eastside) | 30 miles | 22 miles | Suburban/rural fringe. Fewer dental options nearby, patients drive further. |

**Overlap issue:** With 30-mile radii on all locations, Campaign A and Campaign B overlap significantly. Users in the overlap zone may see ads for both locations, causing internal competition and inflated CPCs.

### Geographic Performance Highlights

| Zip Code | Campaign | Spend (30d) | Conversions | CPA | Action |
|---|---|---|---|---|---|
| 60601 | A | $1,200 | 18 | $66.67 | Strong. Increase bid. |
| 60614 | A | $450 | 0 | N/A | Zero conversions. Exclude. |
| 60625 | B | $380 | 5 | $76.00 | Solid. Maintain. |
| 60660 | A/B overlap | $520 | 2 | $260.00 | Overlap. Assign to nearest location only. |

### Classified Findings
- `[CRITICAL]` All campaigns set to "Presence or interest." 15% of clicks from outside service area. Estimated $1,275/month waste.
- `[WARNING]` 30-mile radius on Downtown location is 3x wider than recommended for urban dental. Pulls in irrelevant suburban traffic.
- `[WARNING]` Campaign A and B radius overlap creates internal competition in shared zip codes.
- `[WARNING]` Zip code 60614 has $450 spend and zero conversions over 30 days. Candidate for exclusion.
- `[OPPORTUNITY]` No nested radius bid adjustments in place. Inner-ring patients convert at higher rates.

---

## Step 4: Offline Conversion Status

### Current Tracking
- Online form submissions: tracked (primary conversion action)
- Google forwarding call tracking: active on Campaign A and B, not Campaign C
- Call duration threshold: 60 seconds (default)
- Third-party call tracking: none
- Store visit tracking: not eligible (3 locations, below volume threshold)
- Offline conversion import: not configured
- Enhanced conversions for leads: not active

### Assessment
**Completeness level: Basic**

The account tracks form submissions and call starts (via Google forwarding), but has no visibility into call quality. A 60-second call to a dental office could be a patient booking an appointment or a vendor sales pitch. Without call recording or scoring, Smart Bidding optimizes for all 60-second calls equally.

No CRM integration means the account cannot distinguish between a form submission that books a cleaning and one that never responds to follow-up.

### Classified Findings
- `[CRITICAL]` Smart Bidding (tCPA) is active but optimizing on incomplete data. No call quality signal, no CRM feedback loop.
- `[WARNING]` Call tracking not enabled on Campaign C. Phone calls from Eastside area are untracked.
- `[WARNING]` No third-party call tracking. Cannot assess whether calls are qualified appointments or spam/vendor calls.
- `[OPPORTUNITY]` Enhanced conversions for leads would improve match rate for form submissions.
- `[OPPORTUNITY]` If average patient lifetime value is known, stage-based values (lead, booked, attended) would improve tCPA optimization.

---

## Step 5: Local Campaign Evaluation

### Campaign Types
| Campaign | Type | Monthly Spend | Conversions | CPA |
|---|---|---|---|---|
| Campaign A (Downtown) | Search | $3,500 | 42 | $83.33 |
| Campaign B (Northside) | Search | $3,000 | 28 | $107.14 |
| Campaign C (Eastside) | Search | $2,000 | 12 | $166.67 |

All three campaigns are Search only. No PMax, no LSA, no Display.

### Keyword Strategy
- "dentist near me" keywords present in all campaigns. Good.
- City-level keywords present ("dentist [city name]"). Good.
- No neighborhood-level keywords for Downtown (missed opportunity in dense urban area).
- No "emergency dentist" or "same day dental" variants (missed high-intent segment).
- Broad match keywords used on Campaign C with lowest conversion volume. High-risk match type for a low-data campaign.

### Extensions
- Location extensions: active on A and B, missing on C
- Call extensions: active on A and B, missing on C
- Sitelinks: present but generic across all campaigns (not location-specific)

### Classified Findings
- `[WARNING]` LSA not active despite eligibility. Location A has strong reviews (4.6, 87 reviews) and would likely rank well.
- `[WARNING]` Campaign C missing both location and call extensions. Ads appear without address or phone number.
- `[WARNING]` Broad match keywords on Campaign C (lowest volume campaign). Likely generating irrelevant traffic.
- `[OPPORTUNITY]` No neighborhood-level keywords for Downtown location (e.g., "dentist [neighborhood]").
- `[OPPORTUNITY]` Emergency dental keywords not covered. High-intent, high-value segment.
- `[OPPORTUNITY]` Sitelinks are generic. Location-specific sitelinks (hours, directions, location-specific services) would improve relevance.

---

## Step 6: LSA Review

LSA is not active. This section documents the recommendation to launch.

**LSA Readiness Assessment:**
- Eligible category: Yes (dental)
- Location A review score: 4.6 (strong, competitive for LSA)
- Location B review score: 3.8 (marginal, would rank poorly)
- Location C review score: 3.6 (weak, not recommended for LSA launch)

**Recommendation:** Launch LSA for Location A only. Review scores on B and C need to reach 4.0+ before LSA launch for those locations.

---

## Summary Dashboard

### Overall Local Readiness: 4/10

| Category | Status | Score |
|---|---|---|
| GBP Integration | Partially optimized (A strong, B/C weak) | 5/10 |
| Location Targeting | Incorrect on all campaigns | 2/10 |
| Offline Tracking | Basic (forms + forwarding calls only) | 3/10 |
| Campaign Types | Search only, missing LSA opportunity | 4/10 |
| LSA | Not active, eligible | 3/10 |

### Top 3 Priorities
1. **Fix location targeting method on all campaigns.** Change from "Presence or interest" to "Presence." Estimated savings: $1,275/month ($15,300/year).
2. **Reduce Downtown radius from 30 to 10 miles and resolve overlap.** Eliminates internal competition and reduces irrelevant suburban traffic.
3. **Launch LSA for Location A.** Strong reviews (4.6, 87 reviews) position it well. Adds incremental leads above Search results.

### Budget Analysis
- Estimated waste from targeting issues: $1,275/month
- Estimated missed conversions from tracking gaps: 8-12/month (untracked calls on Campaign C)
- Recommended next investment: redirect $1,275 saved from targeting fixes into LSA budget for Location A
