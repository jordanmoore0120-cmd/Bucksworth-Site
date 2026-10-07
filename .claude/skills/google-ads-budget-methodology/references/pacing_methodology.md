# Budget Pacing Methodology

Reference file for daily, monthly, and seasonal budget pacing. Loaded by budget-methodology.

## Daily Budget Pacing

Google Ads uses "standard" delivery by default, which spreads budget throughout the day based on expected traffic patterns. Key behaviors:

- Google may spend up to 2x the daily budget on any given day if it detects high-opportunity traffic.
- Monthly spend will not exceed daily budget multiplied by 30.4 (average days per month).
- "Accelerated" delivery was removed for most campaign types. Standard delivery is now the only option for Search and Shopping campaigns.

**Monitoring intraday pacing:**
- If a campaign exhausts its budget by midday, it is missing afternoon and evening traffic entirely.
- Check the hour-of-day report: a sharp drop in impressions during business hours signals budget exhaustion.
- For lead gen accounts, missing evening hours (6 PM to 10 PM) can mean missing high-intent residential searchers.
- For eCommerce, missing evening hours can mean missing peak purchase windows.

**Daily spend vs. daily budget:**
- If daily spend equals daily budget on 5+ of 7 days, the campaign is budget-capped.
- If daily spend is consistently 20%+ below daily budget, the campaign is not constrained. Possible causes: bids too low, targeting too narrow, low search volume, or ad disapprovals.

## Monthly Pacing Analysis

Track cumulative spend vs. target monthly budget throughout the month.

**How to run a pacing check:**
1. Calculate the target daily run rate: monthly budget divided by days in the month.
2. Calculate actual daily run rate: total spend to date divided by days elapsed.
3. Compare: if actual run rate exceeds target by 10%+, the account is over-pacing. If below target by 10%+, the account is under-pacing.
4. Project end-of-month spend: actual daily run rate multiplied by remaining days, plus spend to date.

**Common causes of under-pacing:**
- Bids set too low to win auctions
- Targeting too narrow (small audiences, few keywords)
- Low search volume for the targeted terms
- Budget set higher than market demand supports
- Ad disapprovals or policy violations reducing eligible impressions
- Seasonal demand trough

**Common causes of over-pacing:**
- Highly competitive terms driving up CPCs
- Broad match keywords capturing more queries than expected
- Seasonal demand surge
- New competitor entry driving auction pressure
- Budget set below market demand

**Corrective actions:**
- Under-pacing: review bids, expand targeting, check ad status, or reduce budget to match actual demand (reallocate surplus).
- Over-pacing: review search terms for waste, tighten targeting, adjust bids, or increase budget if the performance justifies it.

## Budget Cap Detection

Three signals that a campaign is budget-capped:

1. **"Limited by budget" indicator**: Google Ads shows this status in the campaign view. It means Google estimates the campaign could spend more if budget were higher.
2. **Lost IS (Budget) above 10%**: the campaign is missing impressions specifically because budget runs out. This is the most reliable quantitative signal.
3. **Spend equals budget most days**: if daily spend matches daily budget on 5+ of 7 days, the campaign is consistently capped.

When a campaign is budget-capped AND performing well (meeting or exceeding KPI targets), it is a candidate for budget increase or reallocation.

When a campaign is budget-capped AND performing poorly, the problem is not budget. The problem is efficiency. Fix efficiency first.

## Shared Budget Management

Google Ads shared budgets pool a single budget across multiple campaigns. The campaigns draw from the pool as needed.

**Benefits:**
- Simplifies budget management for accounts with many campaigns.
- Allows Google to shift spend toward higher-opportunity campaigns automatically.

**Risks:**
- One high-volume campaign can consume most of the shared budget, starving smaller campaigns.
- Less control over per-campaign spend allocation.
- Harder to analyze per-campaign budget constraints.

**Best practices:**
- Monitor per-campaign spend within shared budgets weekly.
- If a high-priority campaign is consistently underfunded within a shared budget, separate it into an individual budget.
- Do not include brand and non-brand campaigns in the same shared budget. Brand campaigns will consume most of the budget due to higher volume and quality scores.
- Do not include PMax in shared budgets. PMax's multi-channel distribution makes shared budget management unpredictable.

## Seasonal Budget Planning

Demand for most products and services varies by season. Budget should anticipate these patterns, not react to them.

**Building a seasonal budget calendar:**
1. Pull monthly performance data for the past 12-24 months.
2. Identify seasonal patterns: which months have higher demand (more impressions, more conversions)?
3. Calculate a seasonal index for each month: that month's conversions divided by the monthly average. A month with 120% of average gets a 1.2 index.
4. Apply the seasonal index to the annual budget: multiply monthly base budget by the seasonal index.

**Key principles:**
- Budget should be in place before demand arrives. If Q4 is peak, increase budgets in late September, not mid-November.
- Reduce budgets proactively in known low-demand periods. Do not let inefficient campaigns spend during troughs just because budget is available.
- Review and update the seasonal calendar annually. Seasonal patterns can shift due to market changes, new products, or competitive dynamics.

**Day-of-week patterns:**
- Some businesses see consistent day-of-week patterns (e.g., B2B accounts peak Tuesday through Thursday, eCommerce peaks on weekends).
- Google's standard delivery handles some of this automatically, but budget caps can prevent it from working.
- If day-of-week patterns are strong, consider ad scheduling adjustments alongside budget management.
