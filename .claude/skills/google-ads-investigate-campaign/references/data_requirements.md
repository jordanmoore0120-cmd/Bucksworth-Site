# Data Requirements for Campaign Investigation

GAQL queries and data specifications for the investigate-campaign skill. All queries assume the Google Ads API v20 and use the standard ADC authentication pattern from account-conventions.

## Period Definitions

Every investigation requires two periods:

- **Problem Period:** The timeframe where performance degraded. Usually the most recent 7 or 14 days.
- **Comparison Period:** The baseline. Usually the 7 or 14 days immediately prior to the problem period.

For YoY seasonality checks, use the same calendar dates from the prior year.

For low-volume campaigns (<50 clicks/week), use 28-day periods instead of 7-day.

## Query 1: Campaign Performance Metrics

Pull for both problem period and comparison period.

```sql
SELECT
  campaign.id,
  campaign.name,
  campaign.status,
  campaign.advertising_channel_type,
  campaign.bidding_strategy_type,
  metrics.impressions,
  metrics.clicks,
  metrics.ctr,
  metrics.average_cpc,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.cost_per_conversion,
  metrics.conversions_from_interactions_rate,
  metrics.value_per_conversion,
  metrics.search_impression_share,
  metrics.search_budget_lost_impression_share,
  metrics.search_rank_lost_impression_share,
  metrics.search_top_impression_share,
  metrics.search_absolute_top_impression_share
FROM campaign
WHERE campaign.id = {CAMPAIGN_ID}
  AND segments.date BETWEEN '{START_DATE}' AND '{END_DATE}'
```

**Key derived metrics to calculate:**
- ROAS = conversions_value / (cost_micros / 1,000,000)
- CPA = (cost_micros / 1,000,000) / conversions
- Total cost = cost_micros / 1,000,000

## Query 2: Daily Performance (for trend analysis)

```sql
SELECT
  segments.date,
  metrics.impressions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value
FROM campaign
WHERE campaign.id = {CAMPAIGN_ID}
  AND segments.date BETWEEN '{START_DATE}' AND '{END_DATE}'
ORDER BY segments.date
```

Use this to identify when exactly the performance shift occurred. Look for cliff-edge drops (tracking/technical issue) vs gradual declines (competitive/creative/targeting).

## Query 3: Search Terms Report

```sql
SELECT
  search_term_view.search_term,
  search_term_view.status,
  metrics.impressions,
  metrics.clicks,
  metrics.ctr,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value
FROM search_term_view
WHERE campaign.id = {CAMPAIGN_ID}
  AND segments.date BETWEEN '{START_DATE}' AND '{END_DATE}'
ORDER BY metrics.cost_micros DESC
```

**Analysis focus:**
- Top 20 search terms by spend: are they relevant?
- Search terms with spend but zero conversions: waste candidates
- Compare top terms between periods: did the query mix shift?
- New terms appearing in the problem period that were not in the comparison period

## Query 4: Auction Insights

Auction insights are not directly available via GAQL in the standard API. Pull via the Google Ads UI or use the following approach:

**For Search campaigns:**
```sql
SELECT
  metrics.auction_insight_search_impression_share,
  metrics.auction_insight_search_overlap_rate,
  metrics.auction_insight_search_position_above_rate,
  metrics.auction_insight_search_top_impression_share,
  metrics.auction_insight_search_outranking_share
FROM campaign
WHERE campaign.id = {CAMPAIGN_ID}
  AND segments.date BETWEEN '{START_DATE}' AND '{END_DATE}'
```

Note: Auction insights may need to be pulled from the UI if the API does not return competitor-level data. The UI report provides competitor domain breakdowns that the API aggregates.

## Query 5: Change History

```sql
SELECT
  change_event.change_date_time,
  change_event.change_resource_type,
  change_event.changed_fields,
  change_event.old_resource,
  change_event.new_resource,
  change_event.user_email
FROM change_event
WHERE change_event.change_date_time BETWEEN '{START_DATE}' AND '{END_DATE}'
  AND campaign.id = {CAMPAIGN_ID}
ORDER BY change_event.change_date_time DESC
```

**Critical changes to flag:**
- Conversion action changes (any modification to conversion actions)
- Bid strategy changes (strategy type or target value)
- Budget changes (daily budget amount)
- Ad status changes (paused, removed, disapproved)
- Targeting changes (keywords, audiences, locations)

## Query 6: Conversion Lag Analysis

```sql
SELECT
  segments.conversion_lag_bucket,
  metrics.conversions,
  metrics.conversions_value
FROM campaign
WHERE campaign.id = {CAMPAIGN_ID}
  AND segments.date BETWEEN '{START_DATE}' AND '{END_DATE}'
```

This shows how conversions distribute across lag buckets (same day, 1 day, 2-3 days, 4-5 days, 6-7 days, 8-14 days, etc.). Use this to determine if the problem period is still within its attribution window.

## Query 7: Device Segmentation

```sql
SELECT
  segments.device,
  metrics.impressions,
  metrics.clicks,
  metrics.ctr,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_from_interactions_rate,
  metrics.conversions_value
FROM campaign
WHERE campaign.id = {CAMPAIGN_ID}
  AND segments.date BETWEEN '{START_DATE}' AND '{END_DATE}'
```

Compare device performance between periods. Look for one device driving the total decline.

## Query 8: Geographic Segmentation

```sql
SELECT
  geographic_view.country_criterion_id,
  geographic_view.location_type,
  metrics.impressions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value
FROM geographic_view
WHERE campaign.id = {CAMPAIGN_ID}
  AND segments.date BETWEEN '{START_DATE}' AND '{END_DATE}'
ORDER BY metrics.cost_micros DESC
```

Use when geographic targeting is part of the campaign strategy or when other branches have been ruled out.

## Query 9: Ad Group and Ad Performance

```sql
SELECT
  ad_group.id,
  ad_group.name,
  ad_group.status,
  metrics.impressions,
  metrics.clicks,
  metrics.ctr,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value
FROM ad_group
WHERE campaign.id = {CAMPAIGN_ID}
  AND segments.date BETWEEN '{START_DATE}' AND '{END_DATE}'
ORDER BY metrics.cost_micros DESC
```

Use when the funnel decomposition points to engagement (CTR) issues, to identify which ad groups are driving the decline.

## Data Processing Notes

1. **Cost conversion:** Always divide cost_micros by 1,000,000 to get the actual currency amount.
2. **Currency:** Check account conventions for the account's currency. Do not assume USD.
3. **Percentage formatting:** CTR and conversion rate are returned as decimals (0.05 = 5%). Convert for display.
4. **Impression share:** Returned as decimals. 0.45 = 45% IS. "NULL" means insufficient data (too few impressions).
5. **Zero conversions:** If conversions = 0, CPA and ROAS are undefined. Do not divide by zero. Report as "no conversions recorded."
6. **Date formatting:** Use YYYY-MM-DD format in all queries.
