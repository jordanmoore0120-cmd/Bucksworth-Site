# Data Requirements for Creative Audit

GAQL queries, CSV alternatives, and column normalization for the `audit_creative` workflow.

---

## GAQL Query Reference

### Query 1: RSA Asset Performance

Pulls all active RSAs with performance metrics from the last 30 days.

```sql
SELECT
  campaign.name,
  ad_group.name,
  ad_group_ad.ad.id,
  ad_group_ad.ad.responsive_search_ad.headlines,
  ad_group_ad.ad.responsive_search_ad.descriptions,
  ad_group_ad.ad.strength,
  ad_group_ad.ad.type,
  metrics.impressions,
  metrics.clicks,
  metrics.ctr,
  metrics.conversions,
  metrics.cost_micros
FROM ad_group_ad
WHERE ad_group_ad.ad.type = 'RESPONSIVE_SEARCH_AD'
  AND ad_group_ad.status = 'ENABLED'
  AND campaign.status = 'ENABLED'
  AND metrics.impressions > 0
  AND segments.date DURING LAST_30_DAYS
```

**Notes:**
- `responsive_search_ad.headlines` and `responsive_search_ad.descriptions` return arrays of text + pinned_field objects
- `ad.strength` returns: EXCELLENT, GOOD, AVERAGE, POOR, UNSPECIFIED
- `cost_micros` is in millionths of the account currency (divide by 1,000,000 for actual cost)

### Query 2: Ad Group Ad Asset View (Asset-Level Ratings)

Pulls individual asset performance labels and pin positions.

```sql
SELECT
  campaign.name,
  ad_group.name,
  ad_group_ad_asset_view.field_type,
  ad_group_ad_asset_view.performance_label,
  ad_group_ad_asset_view.pinned_field
FROM ad_group_ad_asset_view
WHERE campaign.status = 'ENABLED'
  AND ad_group_ad.status = 'ENABLED'
  AND segments.date DURING LAST_30_DAYS
```

**Notes:**
- `field_type` values: HEADLINE, DESCRIPTION
- `performance_label` values: BEST, GOOD, LOW, LEARNING, PENDING, NOT_APPLICABLE
- `pinned_field` values: HEADLINE_1, HEADLINE_2, HEADLINE_3, DESCRIPTION_1, DESCRIPTION_2, UNSPECIFIED

### Query 3: PMax Asset Group Details

Pulls all assets within PMax asset groups with their types and performance labels.

```sql
SELECT
  campaign.name,
  asset_group.name,
  asset_group.status,
  asset_group_asset.field_type,
  asset_group_asset.performance_label,
  asset_group_asset.status
FROM asset_group_asset
WHERE campaign.advertising_channel_type = 'PERFORMANCE_MAX'
  AND campaign.status = 'ENABLED'
  AND asset_group.status = 'ENABLED'
```

**Notes:**
- `field_type` values for PMax: HEADLINE, LONG_HEADLINE, DESCRIPTION, MARKETING_IMAGE, SQUARE_MARKETING_IMAGE, PORTRAIT_MARKETING_IMAGE, LOGO, LANDSCAPE_LOGO, YOUTUBE_VIDEO, BUSINESS_NAME, CALL_TO_ACTION_SELECTION
- `performance_label` values: BEST, GOOD, LOW, LEARNING, PENDING

### Query 4: Video Campaign Metrics

Pulls video-specific metrics for YouTube and Demand Gen campaigns.

```sql
SELECT
  campaign.name,
  ad_group.name,
  metrics.impressions,
  metrics.video_views,
  metrics.video_view_rate,
  metrics.clicks,
  metrics.ctr,
  metrics.average_cpv,
  metrics.conversions,
  metrics.cost_micros
FROM ad_group
WHERE campaign.advertising_channel_type IN ('VIDEO', 'DEMAND_GEN')
  AND campaign.status = 'ENABLED'
  AND metrics.impressions > 0
  AND segments.date DURING LAST_30_DAYS
```

### Query 5: Frequency Data

Pulls frequency metrics for channels where fatigue is relevant.

```sql
SELECT
  campaign.name,
  campaign.advertising_channel_type,
  metrics.impressions,
  metrics.average_frequency_per_user
FROM campaign
WHERE campaign.advertising_channel_type IN ('DISPLAY', 'VIDEO', 'DEMAND_GEN', 'PERFORMANCE_MAX')
  AND campaign.status = 'ENABLED'
  AND segments.date DURING LAST_7_DAYS
```

### Query 6: Ad Strength Summary

Quick pull of ad strength across all campaign types.

```sql
SELECT
  campaign.name,
  campaign.advertising_channel_type,
  ad_group.name,
  ad_group_ad.ad.strength,
  ad_group_ad.ad.type
FROM ad_group_ad
WHERE ad_group_ad.status = 'ENABLED'
  AND campaign.status = 'ENABLED'
```

---

## CSV Export Alternatives

When API access is not available, data can be pulled from Google Ads UI exports:

### RSA Data
**Navigation:** Ads & assets > Ads > filter to Responsive search ads
**Export columns:** Campaign, Ad group, Ad ID, Ad strength, Headlines, Descriptions, Impressions, Clicks, CTR, Conversions, Cost
**Limitation:** Individual asset ratings are not available in the standard Ads export. Use the "Assets" tab for asset-level performance.

### Asset Performance
**Navigation:** Ads & assets > Assets > Asset details
**Export columns:** Campaign, Ad group, Asset type, Asset text/image, Performance rating
**Limitation:** Pinned position may not export cleanly. Check in the UI.

### PMax Asset Groups
**Navigation:** Asset groups > select campaign > view asset group details
**Limitation:** PMax asset group data is limited in CSV exports. Manual review in the UI is often necessary.

### Frequency Data
**Navigation:** Campaigns > Columns > modify columns > Reach metrics > Avg. impr. freq. per user
**Export columns:** Campaign, Channel type, Impressions, Avg frequency

---

## Column Normalization

When processing data from different sources, normalize to these standard column names:

| Standard Column | GAQL Field | CSV Column |
|----------------|-----------|------------|
| campaign_name | campaign.name | Campaign |
| ad_group_name | ad_group.name | Ad group |
| ad_id | ad_group_ad.ad.id | Ad ID |
| ad_strength | ad_group_ad.ad.strength | Ad strength |
| asset_type | field_type | Asset type |
| asset_rating | performance_label | Performance |
| impressions | metrics.impressions | Impressions |
| clicks | metrics.clicks | Clicks |
| ctr | metrics.ctr | CTR |
| conversions | metrics.conversions | Conversions |
| cost | metrics.cost_micros / 1000000 | Cost |
| frequency | metrics.average_frequency_per_user | Avg. impr. freq. per user |
