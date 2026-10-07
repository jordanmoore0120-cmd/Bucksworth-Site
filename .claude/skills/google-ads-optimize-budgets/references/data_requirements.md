# Data Requirements for Budget Optimization

Reference file specifying GAQL queries and data collection requirements for the optimize_budgets skill.

## Required GAQL Queries

### Query 1: Campaign Budgets and Performance (30 days)

```sql
SELECT
  campaign.id,
  campaign.name,
  campaign.status,
  campaign.advertising_channel_type,
  campaign.bidding_strategy_type,
  campaign_budget.amount_micros,
  campaign_budget.type,
  campaign_budget.has_recommended_budget,
  campaign_budget.recommended_budget_amount_micros,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.impressions,
  metrics.clicks
FROM campaign
WHERE segments.date DURING LAST_30_DAYS
  AND campaign.status = 'ENABLED'
```

This query returns campaign-level spend, budget, and performance data. Use `campaign_budget.type` to identify shared vs. individual budgets. The `has_recommended_budget` and `recommended_budget_amount_micros` fields show Google's own budget recommendations (useful as a reference point, not as a prescription).

### Query 2: Impression Share and Lost IS (30 days)

```sql
SELECT
  campaign.id,
  campaign.name,
  metrics.search_impression_share,
  metrics.search_budget_lost_impression_share,
  metrics.search_rank_lost_impression_share,
  metrics.content_impression_share,
  metrics.content_budget_lost_impression_share,
  metrics.content_rank_lost_impression_share
FROM campaign
WHERE segments.date DURING LAST_30_DAYS
  AND campaign.status = 'ENABLED'
```

Note: impression share metrics are available for Search and Display campaigns. Shopping campaigns report `shopping_impression_share`. PMax does not report impression share.

For Shopping campaigns, use:
```sql
SELECT
  campaign.id,
  campaign.name,
  metrics.search_impression_share,
  metrics.search_budget_lost_impression_share,
  metrics.search_rank_lost_impression_share
FROM shopping_performance_view
WHERE segments.date DURING LAST_30_DAYS
```

### Query 3: Daily Spend by Campaign (28 days)

```sql
SELECT
  campaign.id,
  campaign.name,
  segments.date,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value
FROM campaign
WHERE segments.date DURING LAST_30_DAYS
  AND campaign.status = 'ENABLED'
ORDER BY segments.date DESC
```

This query provides daily spend data for pacing analysis and budget cap detection. Compare each day's spend to the daily budget to identify budget-capped days.

### Query 4: Shared Budget Details

```sql
SELECT
  campaign_budget.id,
  campaign_budget.name,
  campaign_budget.amount_micros,
  campaign_budget.type,
  campaign_budget.reference_count
FROM campaign_budget
WHERE campaign_budget.type = 'SHARED'
```

Cross-reference with Query 1 to identify which campaigns share budgets.

### Query 5: Weekly Performance Trend (8 weeks, for PMax marginal efficiency)

```sql
SELECT
  campaign.id,
  campaign.name,
  segments.week,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.impressions
FROM campaign
WHERE segments.date DURING LAST_90_DAYS
  AND campaign.status = 'ENABLED'
  AND campaign.advertising_channel_type = 'PERFORMANCE_MAX'
ORDER BY segments.week DESC
```

Use this to plot spend vs. CPA/ROAS over time for PMax campaigns where impression share is not available.

## Optional Queries

### Query 6: Extended Performance (60 days, for trend analysis)

Same as Query 1 but with `LAST_60_DAYS` date range. Useful for identifying performance trends and seasonal patterns.

### Query 7: Hour-of-Day Performance (14 days)

```sql
SELECT
  campaign.id,
  campaign.name,
  segments.hour,
  metrics.impressions,
  metrics.cost_micros
FROM campaign
WHERE segments.date DURING LAST_14_DAYS
  AND campaign.status = 'ENABLED'
```

Use this to detect intraday budget exhaustion. If impressions drop to zero in afternoon/evening hours, the campaign is running out of budget mid-day.

## CSV/Manual Data Alternatives

If GAQL access is unavailable, the following data can be collected from the Google Ads UI or exported as CSV:

**From the Campaigns tab:**
- Campaign name, status, type
- Daily budget
- Conversions, cost, ROAS or CPA
- Impression share, Lost IS (Budget), Lost IS (Rank)
- "Limited by budget" indicator

**From the Budget report:**
- Monthly spend vs. budget over time
- Recommended budget

**From custom reports:**
- Daily spend by campaign (date range: last 28 days)
- Weekly spend by campaign (date range: last 8 weeks)

## Column Normalization

When processing query results:

- Convert `cost_micros` to currency by dividing by 1,000,000
- Convert `amount_micros` (budget) to currency by dividing by 1,000,000
- Calculate CPA: cost / conversions (handle division by zero for campaigns with zero conversions)
- Calculate ROAS: conversions_value / cost (handle division by zero for campaigns with zero cost)
- Impression share values are returned as fractions (0.45 = 45%). Convert to percentages for display.
- Lost IS values follow the same convention.

## Data Quality Checks

Before proceeding with analysis, verify:

1. **Conversion tracking is active**: at least some campaigns have conversions > 0. If all campaigns show zero conversions, flag this as a blocking issue.
2. **Budget data is present**: `campaign_budget.amount_micros` should be non-null for all enabled campaigns.
3. **Impression share data is available**: Search and Shopping campaigns should return IS data. If IS fields are null, the campaign may not have enough impressions for Google to calculate IS (too small).
4. **Date range is complete**: daily data should span the full requested period without gaps.
5. **Currency consistency**: all campaigns in the account use the same currency (set at account level). Confirm from account-conventions.
