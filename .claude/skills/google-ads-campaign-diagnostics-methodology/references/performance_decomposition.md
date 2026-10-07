# Performance Decomposition

Framework for breaking down campaign performance into its component stages, isolating which stage is responsible for observed changes, and avoiding misdiagnosis.

## Funnel Stage Analysis

### Stage 1: Impressions (Visibility)

**Question:** Are you showing up?

**Key metrics:** Impression count, Search Impression Share, Lost IS (budget), Lost IS (rank), Eligible impressions

**Diagnostic implications if impressions dropped:**
- Lost IS (budget) increased: budget is the constraint
- Lost IS (rank) increased: Quality Score or bid is the constraint
- Both stable but impressions dropped: targeting narrowed, or search volume declined (seasonal/market)
- Sudden drop to near-zero: campaign paused, disapproved, or billing issue

**Normal variance:** Impressions can fluctuate 5-15% WoW without indicating a problem, especially for smaller campaigns or those in competitive auctions.

**Red flag threshold:** >20% WoW impression decline warrants investigation.

### Stage 2: Clicks (Engagement)

**Question:** Are people clicking your ads?

**Key metrics:** Clicks, CTR, Average Position (via top/absolute top impression rate)

**Diagnostic implications if clicks dropped:**
- Impressions stable + CTR dropped: creative issue (fatigue, disapproval, or competitor creative outperforming)
- Impressions dropped + CTR stable: visibility issue (budget, bids, or targeting), not creative
- Both dropped: likely an auction or targeting shift affecting both reach and relevance

**Normal variance:** CTR fluctuations of 0.5-1.0 percentage points WoW are common for Search. Display CTR is inherently volatile.

**Red flag threshold:** CTR decline >15% WoW for Search campaigns. For Display/Video, use 4-week rolling averages.

### Stage 3: Visits (Traffic Quality)

**Question:** Are clicks becoming real sessions?

**Key metrics:** GA4 sessions vs Google Ads clicks, Bounce rate, Engaged sessions rate

**Diagnostic implications if visit quality dropped:**
- Clicks up but sessions flat: tracking discrepancy or bot traffic
- Bounce rate spiked: landing page issue, message mismatch, or targeting pulling wrong audience
- Engaged sessions dropped: page load speed, mobile experience, or content relevance issue

**Normal variance:** A 5-10% gap between Google Ads clicks and GA4 sessions is normal (different attribution, bounces before page load, etc.).

**Red flag threshold:** Gap exceeding 25% between clicks and sessions. Bounce rate increase >10 percentage points WoW.

### Stage 4: Conversions (Action)

**Question:** Are visitors converting?

**Key metrics:** Conversions, Conversion rate, Cost per conversion, Conversion by conversion time vs interaction time

**Diagnostic implications if conversions dropped:**
- Conversion rate dropped + traffic quality stable: landing page, offer, tracking, or qualification issue
- Conversion count dropped + conversion rate stable: traffic volume issue (upstream problem)
- Conversions dropped to zero: almost always a tracking issue, not a campaign issue

**Normal variance:** Conversion rate fluctuations of 10-15% WoW are common for campaigns with low volume (<50 conversions/month).

**Red flag threshold:** >25% conversion rate decline WoW for campaigns with 50+ monthly conversions.

### Stage 5: Value (Quality)

**Question:** Are conversions valuable?

**Key metrics:** Conversion value, ROAS, Average order value (eCommerce), Lead quality scores (lead gen)

**Diagnostic implications if value dropped:**
- Conversion count stable + value dropped: lower-value conversions (product mix shift, smaller orders, lower-quality leads)
- ROAS dropped + CPA stable: the issue is on the value side, not the cost side
- Average order value dropped: often a promotional period or audience mix shift

**Normal variance:** AOV can fluctuate 10-20% WoW based on product mix and promotions.

**Red flag threshold:** ROAS decline >20% that persists for 2+ weeks.

## Rate vs Volume Decomposition

The most important diagnostic technique for any aggregate KPI change. Every aggregate metric (CPA, ROAS, CPC) is a ratio. When a ratio changes, you must determine which component moved.

### CPA Decomposition

```
CPA = Total Cost / Total Conversions
```

| Scenario | Cost | Conversions | Root Cause Direction |
|----------|------|-------------|---------------------|
| A | Stable | Dropped | Conversion-side: landing page, tracking, offer, qualification |
| B | Increased | Stable | Cost-side: CPC inflation, targeting expansion, competition |
| C | Increased | Dropped | Both: prioritize larger mover |
| D | Dropped | Dropped more | Conversion-side dominates despite lower spend |

### ROAS Decomposition

```
ROAS = Conversion Value / Total Cost
```

| Scenario | Value | Cost | Root Cause Direction |
|----------|-------|------|---------------------|
| A | Dropped | Stable | Value-side: product mix, AOV decline, lower-quality conversions |
| B | Stable | Increased | Cost-side: CPC inflation, competition, budget increase without proportional return |
| C | Dropped | Increased | Both: prioritize larger mover |

### CPC Decomposition

```
CPC = Total Cost / Total Clicks
```

| Scenario | Cost | Clicks | Root Cause Direction |
|----------|------|--------|---------------------|
| A | Increased | Stable | Auction pressure: competition, Quality Score decline |
| B | Stable | Dropped | Visibility issue: budget constraint, targeting narrowed |

### How to Apply

1. Pull the raw numbers (not just the ratio) for current and comparison periods
2. Calculate the percentage change for each component
3. Identify which component moved more
4. Direct your investigation toward that component

## Variance Context: WoW vs MoM vs YoY

### When to Use Each Comparison

| Comparison | Best For | Watch Out For |
|------------|----------|---------------|
| WoW | Detecting sudden changes, monitoring after a change | Day-of-week effects, holidays, normal noise |
| MoM | Identifying trends, evaluating strategy changes | Seasonality within months, different month lengths |
| YoY | Seasonality baseline, long-term trend | Year-over-year market changes, account changes |

### Variance Thresholds

| WoW Change | Interpretation | Action |
|------------|---------------|--------|
| <10% | Normal variance | Do not over-react. Monitor but do not intervene. |
| 10-20% | Possible signal | Investigate. May be real, may be noise. Check for correlating changes. |
| >20% | Significant | Requires diagnosis. Something changed. |
| >50% | Critical | Almost certainly a specific cause. Check measurement first. |

**Important:** These thresholds apply to campaigns with sufficient volume. Low-volume campaigns require different treatment.

## Statistical Guidance for Small Campaigns

### Volume Thresholds

| Weekly Volume | Reliable Comparison Period | Notes |
|---------------|--------------------------|-------|
| <20 clicks | 4-week rolling average | Single-week data is noise |
| 20-50 clicks | 2-week rolling average | WoW is unreliable |
| 50-200 clicks | WoW is directional | Confirm with 2-week trend |
| 200+ clicks | WoW is reliable | Standard analysis applies |

| Monthly Conversions | Reliable Comparison Period | Notes |
|---------------------|--------------------------|-------|
| <10 | Quarterly | Monthly data is noise for conversion metrics |
| 10-30 | MoM | WoW conversion data is unreliable |
| 30-50 | 2-week rolling | WoW is directional only |
| 50+ | WoW is reliable | Standard analysis applies |

### Common Small-Campaign Mistakes

1. **Diagnosing a single bad week as a "problem."** With 5 conversions per week, going from 5 to 3 is a 40% drop that may be entirely random.
2. **Making bid changes based on insufficient data.** Smart bidding needs 15-30 conversions per month minimum. Manual adjustments need similar volume to be meaningful.
3. **Comparing two noisy periods and drawing conclusions.** If both periods have high variance, the comparison is meaningless.

### Recommended Approach for Low-Volume Campaigns

- Use longer comparison windows (4-week rolling or MoM)
- Focus on directional trends rather than precise percentage changes
- Weight conversion rate changes less heavily (high variance)
- Look for corroborating signals across multiple metrics before concluding there is a real problem
- When in doubt, wait another week for more data before acting
