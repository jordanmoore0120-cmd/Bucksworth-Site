# Data Requirements: Audit Local

## GAQL Queries

### 1. Location Extension Performance

```sql
SELECT
  campaign.name,
  campaign.id,
  extensions.feed_item.target_type,
  metrics.impressions,
  metrics.clicks,
  metrics.ctr,
  metrics.conversions,
  metrics.cost_micros
FROM location_view
WHERE segments.date DURING LAST_30_DAYS
ORDER BY metrics.cost_micros DESC
```

**Purpose:** Evaluate whether location extensions are active and performing. Identifies campaigns with location extensions enabled and their contribution to clicks and conversions.

### 2. Geographic Report by Distance

```sql
SELECT
  campaign.name,
  campaign.id,
  geographic_view.country_criterion_id,
  geographic_view.location_type,
  segments.geo_target_city,
  metrics.impressions,
  metrics.clicks,
  metrics.ctr,
  metrics.conversions,
  metrics.cost_micros,
  metrics.conversions_value
FROM geographic_view
WHERE segments.date DURING LAST_30_DAYS
ORDER BY metrics.cost_micros DESC
```

**Purpose:** Identify where users are located when they see and click ads. Reveals budget waste from out-of-area targeting and high-performing geographic segments.

**Notes:**
- Distance-based reporting requires location extensions to be active
- City-level data is available even without location extensions
- Filter results to focus on segments with meaningful spend (>$50)

### 3. Campaign Location Targeting Settings

```sql
SELECT
  campaign.name,
  campaign.id,
  campaign.geo_target_type_setting.positive_geo_target_type,
  campaign.geo_target_type_setting.negative_geo_target_type
FROM campaign
WHERE campaign.status = 'ENABLED'
```

**Purpose:** Check whether each campaign uses "Presence" or "Presence or interest" targeting. This is the single most impactful local setting to audit.

**Interpretation:**
- `PRESENCE` = correct for most local businesses
- `PRESENCE_OR_INTEREST` = default, usually incorrect for local-only businesses
- `SEARCH_INTEREST` = legacy setting, treated as "Presence or interest"

### 4. Campaign Location Targets

```sql
SELECT
  campaign.name,
  campaign.id,
  campaign_criterion.location.geo_target_constant,
  campaign_criterion.bid_modifier,
  campaign_criterion.negative
FROM campaign_criterion
WHERE campaign_criterion.type = 'LOCATION'
  AND campaign.status = 'ENABLED'
```

**Purpose:** Pull all location targets and exclusions per campaign, including bid modifiers. Reveals radius settings, DMA targets, and any geographic bid adjustments.

### 5. Conversion Actions

```sql
SELECT
  conversion_action.name,
  conversion_action.id,
  conversion_action.type,
  conversion_action.status,
  conversion_action.category,
  conversion_action.counting_type,
  conversion_action.include_in_conversions_metric,
  conversion_action.value_settings.default_value,
  conversion_action.value_settings.always_use_default_value
FROM conversion_action
WHERE conversion_action.status = 'ENABLED'
```

**Purpose:** Inventory all conversion actions to assess tracking completeness. Identifies call tracking, store visits, form submissions, and offline import actions.

**Classification for Local Audit:**
- `UPLOAD_CALLS`: third-party call tracking import
- `GOOGLE_PLAY` / `STORE_VISIT`: store visit conversions
- `UPLOAD`: offline conversion import (OCI)
- `WEBPAGE`: online form/page conversion
- `PHONE_CALL`: Google forwarding number call

### 6. Call Extension and Call-Only Ad Performance

```sql
SELECT
  campaign.name,
  ad_group.name,
  ad_group_ad.ad.type,
  metrics.impressions,
  metrics.clicks,
  metrics.phone_calls,
  metrics.conversions,
  metrics.cost_micros
FROM ad_group_ad
WHERE ad_group_ad.ad.type IN ('CALL_AD', 'RESPONSIVE_SEARCH_AD')
  AND campaign.status = 'ENABLED'
  AND segments.date DURING LAST_30_DAYS
ORDER BY metrics.cost_micros DESC
```

**Purpose:** Evaluate call-specific ad formats and call volume from ads.

---

## LSA Data Access

### API Limitations
- LSA data has limited availability through the Google Ads API
- Lead-level data is primarily available through the Local Services Ads dashboard or app
- Some aggregate metrics are available via the API for accounts with LSA linked

### Manual Data Collection
If LSA data is not available via API, request the following from the user or pull from the LSA dashboard:
- Total leads (last 30 days) by type (phone, message, booking)
- Cost per lead by service category
- Number of disputed leads and dispute reasons
- Current weekly budget
- Review score and review count on LSA profile
- Response time average

### Export Format
LSA dashboard allows CSV export of lead data. Request this export if detailed analysis is needed.

---

## Column Normalization

### Cost Conversion
- Google Ads API returns costs in micros (1,000,000 micros = $1)
- Divide `cost_micros` by 1,000,000 to get actual currency value
- Currency is determined by the account's billing currency

### Rate Calculations
- CTR = clicks / impressions
- Conversion rate = conversions / clicks
- CPA = cost / conversions
- ROAS = conversions_value / cost

### Geographic Data Notes
- City-level data uses Google's geo target constants (not always 1:1 with city boundaries)
- Distance data is estimated based on user's IP or device location signal
- "Most specific location" in geographic reports represents the most granular location Google could identify
- Some users will show as "Unknown" location (typically 5-15% of traffic)

---

## Data Completeness Checklist

Before proceeding to analysis, verify:

| Data Point | Required? | Source |
|---|---|---|
| Location extension status | Yes | Query 1 |
| Geographic performance by city | Yes | Query 2 |
| Location targeting method per campaign | Yes | Query 3 |
| Location targets and bid adjustments | Yes | Query 4 |
| Conversion action inventory | Yes | Query 5 |
| Call extension/ad performance | Yes | Query 6 |
| LSA lead data | If LSA active | Dashboard/export |
| GBP review score and volume | Recommended | User or GBP dashboard |
| GBP photo count and post frequency | Optional | User or GBP dashboard |

If any required data point is unavailable, note it in the audit report as a data gap and state what conclusions cannot be drawn without it.
