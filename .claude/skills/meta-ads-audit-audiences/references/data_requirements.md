# Data Requirements: audit-audiences

## MCP Tool Calls

### Primary: Ad Set-Level Insights (14-day, daily)

```
SDK call: `meta_ads_get_insights()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  level: "adset"
  time_range: "last_14d"
  time_increment: "1"
  fields:
    - adset_id
    - adset_name
    - campaign_id
    - campaign_name
    - impressions
    - reach
    - frequency
    - clicks
    - ctr
    - cpc
    - cpm
    - spend
    - conversions
    - cost_per_action_type
    - actions
```

**Purpose:** Core performance data for saturation analysis, frequency trends, and CPM trend detection.

### Secondary: Ad Set Targeting Details

```
SDK call: `meta_ads_list_ad_sets()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  fields:
    - id
    - name
    - status
    - effective_status
    - targeting
    - optimization_goal
    - bid_strategy
    - daily_budget
    - lifetime_budget
    - promoted_object
  filtering:
    - field: "effective_status"
      operator: "IN"
      value: ["ACTIVE"]
```

**Purpose:** Targeting specs for overlap analysis. The `targeting` field contains custom audiences, interests, demographics, geo, and Advantage+ settings.

### Tertiary: Custom Audience Details

```
SDK call: `meta_ads_list_custom_audiences()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  fields:
    - id
    - name
    - approximate_count
    - data_source
    - delivery_status
    - time_updated
```

**Purpose:** Audience sizes for penetration calculations, audience freshness for exclusion audit.

### Quaternary: Campaign-Level Data

```
SDK call: `meta_ads_get_insights()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  level: "campaign"
  time_range: "last_14d"
  fields:
    - campaign_id
    - campaign_name
    - impressions
    - reach
    - frequency
    - spend
    - conversions
    - cost_per_action_type
```

**Purpose:** Campaign-level reach and frequency for funnel mapping.

### Optional: Advantage+ Audience Breakdown

```
SDK call: `meta_ads_get_insights()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  level: "adset"
  time_range: "last_7d"
  fields:
    - adset_id
    - impressions
    - spend
    - conversions
    - cost_per_action_type
  breakdowns:
    - audience_type
```

**Purpose:** Splits performance by "defined" vs "expanded" audience in Advantage+ ad sets. May not be available in all API versions.

## CSV Column Mappings

| API Field | Ads Manager Column | Notes |
|-----------|-------------------|-------|
| adset_name | Ad Set Name | |
| campaign_name | Campaign Name | |
| impressions | Impressions | |
| reach | Reach | |
| frequency | Frequency | |
| clicks | Link Clicks | |
| ctr | CTR (Link) | |
| cpm | CPM | |
| spend | Amount Spent | |
| conversions | Results | |
| cost_per_action_type | Cost per Result | |

### Required CSV Exports

1. **Ad set performance:** Ad set level, last 14 days, daily breakdown
2. **Targeting details:** Not directly exportable -- user must screenshot or list targeting per ad set from Ads Manager
3. **Custom audiences:** Audiences section > export audience list with sizes

## Targeting Field Structure

The `targeting` object from `get_adsets` contains:

```json
{
  "targeting": {
    "age_min": 25,
    "age_max": 55,
    "genders": [0],
    "geo_locations": {
      "countries": ["US"],
      "regions": [],
      "cities": []
    },
    "custom_audiences": [
      {"id": "12345", "name": "LAL 1% LTV"}
    ],
    "excluded_custom_audiences": [
      {"id": "67890", "name": "Purchasers 180d"}
    ],
    "flexible_spec": [
      {
        "interests": [
          {"id": "6003", "name": "Fitness"}
        ]
      }
    ],
    "targeting_optimization": "expansion_all",
    "publisher_platforms": ["facebook", "instagram"],
    "device_platforms": ["mobile", "desktop"]
  }
}
```

Parse `custom_audiences` for overlap detection, `excluded_custom_audiences` for exclusion audit, `flexible_spec` for interest overlap, and `targeting_optimization` for Advantage+ status.

## Minimum Data Requirements

| Metric | Minimum for Analysis |
|--------|---------------------|
| Active ad sets | 3 (overlap analysis needs pairs) |
| Days of data | 7 (14 preferred for trends) |
| Total account spend | $1,000/week |
| Custom audiences | At least 1 (for exclusion audit) |
