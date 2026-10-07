# Data Requirements for Performance Analysis

Reference file specifying GAQL queries and data collection requirements for the performance_analysis skill.

## Required GAQL Queries

### Query 1: Account-Level Metrics (Current Period)

```sql
SELECT
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.impressions,
  metrics.clicks,
  metrics.ctr,
  metrics.average_cpc,
  metrics.conversions_from_interactions_rate
FROM customer
WHERE segments.date BETWEEN '{current_start}' AND '{current_end}'
```

Replace `{current_start}` and `{current_end}` with the reporting period dates from account-conventions config. Format: YYYY-MM-DD.

### Query 2: Account-Level Metrics (Comparison Period)

```sql
SELECT
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.impressions,
  metrics.clicks,
  metrics.ctr,
  metrics.average_cpc,
  metrics.conversions_from_interactions_rate
FROM customer
WHERE segments.date BETWEEN '{comparison_start}' AND '{comparison_end}'
```

Same structure as Query 1 but with the comparison period dates.

### Query 3: Campaign-Level Metrics (Current Period)

```sql
SELECT
  campaign.id,
  campaign.name,
  campaign.status,
  campaign.advertising_channel_type,
  campaign.bidding_strategy_type,
  campaign_budget.amount_micros,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.impressions,
  metrics.clicks,
  metrics.ctr,
  metrics.average_cpc,
  metrics.search_impression_share,
  metrics.search_budget_lost_impression_share,
  metrics.search_rank_lost_impression_share
FROM campaign
WHERE segments.date BETWEEN '{current_start}' AND '{current_end}'
  AND campaign.status = 'ENABLED'
```

### Query 4: Campaign-Level Metrics (Comparison Period)

```sql
SELECT
  campaign.id,
  campaign.name,
  campaign.status,
  campaign.advertising_channel_type,
  campaign.bidding_strategy_type,
  campaign_budget.amount_micros,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.impressions,
  metrics.clicks,
  metrics.ctr,
  metrics.average_cpc,
  metrics.search_impression_share,
  metrics.search_budget_lost_impression_share,
  metrics.search_rank_lost_impression_share
FROM campaign
WHERE segments.date BETWEEN '{comparison_start}' AND '{comparison_end}'
  AND campaign.status = 'ENABLED'
```

### Query 5: Weekly Campaign Metrics (4-Week Rolling Trend)

```sql
SELECT
  campaign.id,
  campaign.name,
  segments.week,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.impressions,
  metrics.clicks,
  metrics.search_impression_share,
  metrics.search_budget_lost_impression_share,
  metrics.search_rank_lost_impression_share
FROM campaign
WHERE segments.date DURING LAST_30_DAYS
  AND campaign.status = 'ENABLED'
ORDER BY segments.week DESC
```

This query returns weekly aggregates for trend analysis. The 30-day window captures 4 full or near-full weeks.

### Query 6: Conversion Actions Summary

```sql
SELECT
  conversion_action.id,
  conversion_action.name,
  conversion_action.status,
  conversion_action.category,
  conversion_action.counting_type,
  conversion_action.include_in_conversions_metric
FROM conversion_action
WHERE conversion_action.status = 'ENABLED'
```

Note: Do NOT include `metrics.conversions` in a conversion_action query. The Google Ads API does not support metrics on the conversion_action resource. Pull conversion volumes from account-level or campaign-level queries instead.

## Optional Queries

### Query 7: Device Segment Breakdown (Current Period)

```sql
SELECT
  campaign.id,
  campaign.name,
  segments.device,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.impressions,
  metrics.clicks
FROM campaign
WHERE segments.date BETWEEN '{current_start}' AND '{current_end}'
  AND campaign.status = 'ENABLED'
```

Use when device performance varies significantly or when the user requests device-level detail.

### Query 8: Geographic Segment Breakdown (Current Period)

```sql
SELECT
  campaign.id,
  campaign.name,
  geographic_view.country_criterion_id,
  geographic_view.location_type,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.impressions,
  metrics.clicks
FROM geographic_view
WHERE segments.date BETWEEN '{current_start}' AND '{current_end}'
  AND campaign.status = 'ENABLED'
```

Use for local business accounts or when geographic performance is relevant to the analysis.

## CSV/Manual Data Alternatives

If GAQL access is unavailable, the following data can be collected from the Google Ads UI or exported as CSV:

**From the Campaigns tab (set date range to current period):**
- Campaign name, status, type, bidding strategy
- Daily budget
- Cost, conversions, conversion value
- CPA or ROAS (add column in UI)
- Impression share, Lost IS (Budget), Lost IS (Rank)
- CTR, avg CPC, conversion rate

**For comparison period:**
- Same export with the comparison date range applied

**For trend analysis:**
- Custom report: campaign-level metrics segmented by week for the past 4 weeks

**From the Overview tab:**
- Account-level summary metrics for quick snapshot

## Column Normalization

When processing query results:

- Convert `cost_micros` to currency by dividing by 1,000,000
- Convert `amount_micros` (budget) to currency by dividing by 1,000,000
- Calculate CPA: cost / conversions (handle division by zero)
- Calculate ROAS: conversions_value / cost (handle division by zero)
- Impression share values are returned as fractions (0.45 = 45%). Convert to percentages for display.
- CTR is returned as a fraction. Convert to percentage.
- Average CPC is returned in micros. Divide by 1,000,000.

## Period Calculation

Read the `reporting.period` field from account-conventions config:

| Config Value | Current Period | Comparison Period |
|---|---|---|
| `thu_wed` | Most recent Thursday to Wednesday | Prior Thursday to Wednesday |
| `mon_sun` | Most recent Monday to Sunday | Prior Monday to Sunday |
| `custom` | Use `custom_period_start` to determine boundaries | Same-length period immediately prior |

If `reporting.comparison` is set to `prior_year`, the comparison period is the same calendar dates from the prior year (not the prior period).

If `reporting.comparison` is set to `both`, produce both prior period and prior year comparisons.

## Data Quality Checks

Before proceeding with analysis, verify:

1. **Conversion tracking is active**: at least some campaigns have conversions > 0. If all campaigns show zero conversions, flag as a blocking issue.
2. **Date range completeness**: daily data should span the full requested period without gaps.
3. **Currency consistency**: confirm currency matches account-conventions config.
4. **Campaign filter applied**: if account-conventions specifies `special_handling_notes` with campaign filtering rules, apply them before analysis.
5. **IS data availability**: Search and Shopping campaigns should return IS data. PMax does not report IS. Flag any Search campaigns with null IS (may indicate very low volume).
