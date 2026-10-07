# Data Requirements: Settings Audit Queries

This reference provides the GAQL queries and data collection requirements for the `audit_settings` skill.

---

## Important API Limitation

The `conversion_action` resource does NOT support `metrics.conversions` in the SELECT clause. This query will fail:

```
-- WRONG: This will return an error
SELECT
  conversion_action.name,
  metrics.conversions
FROM conversion_action
```

To get conversion volumes, query at the account or campaign level with conversion action segmentation:

```
SELECT
  segments.conversion_action_name,
  metrics.conversions,
  metrics.conversions_value
FROM customer
WHERE segments.date DURING LAST_30_DAYS
```

---

## Query 1: Account-Level Settings

### Auto-Tagging Status

```
SELECT
  customer.auto_tagging_enabled,
  customer.descriptive_name,
  customer.id
FROM customer
```

### Tracking Template

```
SELECT
  customer.tracking_url_template,
  customer.final_url_suffix
FROM customer
```

**Note:** Auto-apply recommendations status is not available via GAQL. This must be checked in the Google Ads UI under Settings > Recommendations > Auto-apply, or via the `Recommendation` resource to see which recommendation types have been auto-applied recently.

---

## Query 2: Campaign Settings

### Core Campaign Settings

```
SELECT
  campaign.name,
  campaign.id,
  campaign.status,
  campaign.advertising_channel_type,
  campaign.advertising_channel_sub_type,
  campaign.geo_target_type_setting.positive_geo_target_type,
  campaign.geo_target_type_setting.negative_geo_target_type,
  campaign.network_settings.target_search_network,
  campaign.network_settings.target_content_network,
  campaign.network_settings.target_partner_search_network,
  campaign.ad_serving_optimization_status,
  campaign.bidding_strategy_type,
  campaign.target_cpa.target_cpa_micros,
  campaign.target_roas.target_roas
FROM campaign
WHERE campaign.status != 'REMOVED'
```

**Field notes:**
- `positive_geo_target_type`: PRESENCE_OR_INTEREST or PRESENCE (this is the critical location targeting method)
- `target_content_network`: TRUE means Display Network is enabled (flag for Search campaigns)
- `ad_serving_optimization_status`: OPTIMIZE or ROTATE_INDEFINITELY

### Ad Schedule

```
SELECT
  campaign.name,
  campaign.id,
  ad_schedule.day_of_week,
  ad_schedule.start_hour,
  ad_schedule.start_minute,
  ad_schedule.end_hour,
  ad_schedule.end_minute,
  ad_schedule.bid_modifier
FROM ad_schedule
WHERE campaign.status != 'REMOVED'
```

**Note:** If this query returns no results for a campaign, no ad schedule has been set (ads run 24/7).

### Device Bid Adjustments

```
SELECT
  campaign.name,
  campaign.id,
  campaign_criterion.device.type,
  campaign_criterion.bid_modifier
FROM campaign_criterion
WHERE campaign_criterion.type = 'DEVICE'
  AND campaign.status != 'REMOVED'
```

### Campaign-Level Negative Keywords

```
SELECT
  campaign.name,
  campaign.id,
  campaign_criterion.keyword.text,
  campaign_criterion.keyword.match_type,
  campaign_criterion.negative
FROM campaign_criterion
WHERE campaign_criterion.type = 'KEYWORD'
  AND campaign_criterion.negative = TRUE
  AND campaign.status != 'REMOVED'
```

---

## Query 3: Conversion Actions

### Conversion Action Configuration

```
SELECT
  conversion_action.name,
  conversion_action.id,
  conversion_action.status,
  conversion_action.category,
  conversion_action.counting_type,
  conversion_action.attribution_model_settings.attribution_model,
  conversion_action.attribution_model_settings.data_driven_model_status,
  conversion_action.click_through_lookback_window_days,
  conversion_action.view_through_lookback_window_days,
  conversion_action.include_in_conversions_metric,
  conversion_action.value_settings.default_value,
  conversion_action.value_settings.always_use_default_value,
  conversion_action.type,
  conversion_action.origin
FROM conversion_action
WHERE conversion_action.status != 'REMOVED'
```

### Conversion Volume (Separate Query)

```
SELECT
  segments.conversion_action_name,
  segments.conversion_action,
  metrics.conversions,
  metrics.all_conversions,
  metrics.conversions_value
FROM customer
WHERE segments.date DURING LAST_30_DAYS
```

This provides conversion volume per action for the last 30 days, allowing you to identify which conversion actions are actively receiving data.

---

## Query 4: Shared Negative Keyword Lists

```
SELECT
  shared_set.name,
  shared_set.id,
  shared_set.type,
  shared_set.status,
  shared_set.member_count
FROM shared_set
WHERE shared_set.type = 'NEGATIVE_KEYWORDS'
  AND shared_set.status = 'ENABLED'
```

### Which Campaigns Use Each List

```
SELECT
  campaign.name,
  campaign.id,
  shared_set.name,
  shared_set.id
FROM campaign_shared_set
WHERE shared_set.type = 'NEGATIVE_KEYWORDS'
```

---

## Query 5: Linked Accounts

Linked account status is partially available via the API:

### Customer Client Links (MCC structure)

```
SELECT
  customer_client.descriptive_name,
  customer_client.id,
  customer_client.status
FROM customer_client
```

**Note:** Most linked account information (GA4, Merchant Center, YouTube, Search Console, GBP) is best verified through the Google Ads UI under Tools > Data Manager. The API provides limited visibility into these external account links. When running an automated audit, flag "Verify linked accounts manually in Google Ads UI" for connections that cannot be confirmed via API.

---

## Data Not Available via API

The following settings must be checked manually in the Google Ads UI:

| Setting | Where to Check |
|---|---|
| Auto-apply recommendations | Settings > Recommendations > Auto-apply |
| Enhanced conversions status | Goals > Conversions > Settings > Enhanced conversions |
| Consent Mode status | Google Tag settings (via Tag Assistant or GTM) |
| IP exclusions | Campaign Settings > Additional settings > IP exclusions |
| Final URL expansion (PMax) | PMax Campaign Settings > Final URL expansion |
| Brand restrictions (PMax) | PMax Campaign Settings > Brand restrictions |
| GA4 link status | Tools > Data Manager > Google Analytics |
| Merchant Center link | Tools > Data Manager > Google Merchant Center |
| YouTube channel link | Tools > Data Manager > YouTube |
| Search Console link | Tools > Data Manager > Search Console |

When generating the audit report, clearly separate API-verified settings from settings that require manual UI verification.
