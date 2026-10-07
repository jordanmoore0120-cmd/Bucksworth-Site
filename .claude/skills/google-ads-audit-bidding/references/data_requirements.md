# Data Requirements for Bidding Audit

This file specifies the data needed for the `audit_bidding` workflow, including GAQL queries, CSV alternatives, and column normalization rules.

---

## GAQL Queries

### Query 1: Campaign Bidding Strategy and Performance (30 days)

```sql
SELECT
  campaign.name,
  campaign.id,
  campaign.status,
  campaign.advertising_channel_type,
  campaign.bidding_strategy_type,
  campaign.target_cpa.target_cpa_micros,
  campaign.target_roas.target_roas,
  campaign.maximize_conversions.target_cpa_micros,
  campaign.maximize_conversion_value.target_roas,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.clicks,
  metrics.impressions,
  metrics.search_impression_share,
  metrics.search_budget_lost_impression_share,
  metrics.search_rank_lost_impression_share
FROM campaign
WHERE campaign.status = 'ENABLED'
  AND segments.date DURING LAST_30_DAYS
```

### Query 2: Campaign Performance (60 days)

```sql
SELECT
  campaign.name,
  campaign.id,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value
FROM campaign
WHERE campaign.status = 'ENABLED'
  AND segments.date BETWEEN '2026-01-25' AND '2026-03-26'
```

Note: Replace date range with the actual 60-day window. GAQL does not support `LAST_60_DAYS` as a predefined range.

### Query 3: Campaign Performance (90 days)

```sql
SELECT
  campaign.name,
  campaign.id,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value
FROM campaign
WHERE campaign.status = 'ENABLED'
  AND segments.date BETWEEN '2025-12-26' AND '2026-03-26'
```

Note: Replace date range with the actual 90-day window.

### Query 4: Bidding Strategy Status

```sql
SELECT
  campaign.name,
  campaign.id,
  bidding_strategy.name,
  bidding_strategy.type,
  bidding_strategy.status,
  campaign.bidding_strategy_system_status
FROM campaign
WHERE campaign.status = 'ENABLED'
```

The `bidding_strategy_system_status` field returns the learning status: `ENABLED`, `LEARNING_NEW`, `LEARNING_SETTING_CHANGE`, `LEARNING_BUDGET_CHANGE`, `LEARNING_COMPOSITION_CHANGE`, `LIMITED`, or `MISCONFIGURED`.

### Query 5: Change History (Last 90 Days)

```sql
SELECT
  change_event.change_date_time,
  change_event.change_resource_type,
  change_event.changed_fields,
  change_event.old_resource,
  change_event.new_resource,
  campaign.name
FROM change_event
WHERE change_event.change_date_time DURING LAST_90_DAYS
  AND change_event.change_resource_type = 'CAMPAIGN'
ORDER BY change_event.change_date_time DESC
```

Note: Filter results in post-processing for bidding-related changes (strategy type changes, target changes, budget changes).

### Query 6: Portfolio Bidding Strategy Details

```sql
SELECT
  bidding_strategy.name,
  bidding_strategy.id,
  bidding_strategy.type,
  bidding_strategy.target_cpa.target_cpa_micros,
  bidding_strategy.target_roas.target_roas,
  bidding_strategy.maximize_conversions.target_cpa_micros,
  bidding_strategy.maximize_conversion_value.target_roas,
  bidding_strategy.campaign_count,
  bidding_strategy.status
FROM bidding_strategy
```

This returns account-level portfolio bidding strategies (not campaign-level). Cross-reference with Query 4 to map campaigns to portfolios.

---

## CSV Alternative

If API access is unavailable, request the following CSV exports from Google Ads:

### Export 1: Campaign Report

Columns needed:
- Campaign
- Campaign type
- Bid strategy type
- Target CPA
- Target ROAS
- Cost
- Conversions
- Conv. value
- Clicks
- Impressions
- Search impr. share
- Search lost IS (budget)
- Search lost IS (rank)

Date range: Last 30 days, Last 60 days, and Last 90 days (three separate exports, or use a custom column for each window if available)

### Export 2: Bid Strategy Report

Available from Tools > Bid Strategies in the Google Ads UI. Includes:
- Strategy name
- Strategy type
- Target
- Status (Learning, Eligible, Limited)
- Campaigns using strategy
- Performance metrics

### Export 3: Change History

Available from Tools > Change History. Filter by:
- Change type: Bidding strategy, Budget
- Date range: Last 90 days

---

## Manual Data Collection

If neither API nor CSV export is available, collect the following from the Google Ads UI:

1. **Campaigns tab:** Sort by status (Enabled only). Note each campaign's name, type, bidding strategy, target, and key metrics.
2. **Bid strategy report:** Navigate to Tools > Bid Strategies. Note status (Learning, Eligible, Limited) for each strategy.
3. **Change history:** Navigate to Tools > Change History. Filter for bidding and budget changes in the last 90 days.

---

## Column Normalization

Different data sources use different naming and units. Normalize all data to these standards before analysis:

| Field | Standard Unit | Conversion |
|---|---|---|
| Cost | Account currency (whole units) | Divide micros by 1,000,000 |
| Target CPA | Account currency (whole units) | Divide micros by 1,000,000 |
| Target ROAS | Ratio (e.g., 5.0 = 500%) | API returns as decimal ratio. CSV may return as percentage (500%). Standardize to ratio. |
| Conversions | Count (decimal allowed) | No conversion needed |
| Conversion value | Account currency (whole units) | No conversion needed |
| Impression share | Percentage (decimal) | API returns as decimal (0.75 = 75%). CSV returns as "75%". Standardize to decimal. |

### Derived Metrics

Calculate these from the normalized data:

- **CPA** = Cost / Conversions (only if Conversions > 0)
- **ROAS** = Conversion Value / Cost (only if Cost > 0)
- **Conversion Rate** = Conversions / Clicks (only if Clicks > 0)
- **Target Variance (CPA)** = (Target CPA - Actual CPA) / Actual CPA (negative = target is below actual = aggressive)
- **Target Variance (ROAS)** = (Target ROAS - Actual ROAS) / Actual ROAS (positive = target is above actual = aggressive)
