# Data Requirements: audit-bidding

## MCP Tool Calls

### Primary: Campaign-Level Insights (14-day, daily)

```
SDK call: `meta_ads_get_insights()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  level: "campaign"
  time_range: "last_14d"
  time_increment: "1"
  fields:
    - campaign_id
    - campaign_name
    - impressions
    - reach
    - spend
    - conversions
    - cost_per_action_type
    - actions
    - action_values
    - cpm
    - cpc
    - ctr
```

**Purpose:** Daily spend and CPA data for volatility analysis, performance vs strategy assessment, and trend detection.

### Secondary: Campaign Configuration

```
SDK call: `meta_ads_list_campaigns()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  fields:
    - id
    - name
    - status
    - effective_status
    - objective
    - bid_strategy
    - daily_budget
    - lifetime_budget
    - budget_remaining
    - buying_type
    - special_ad_categories
  filtering:
    - field: "effective_status"
      operator: "IN"
      value: ["ACTIVE"]
```

**Purpose:** Campaign objectives and bid strategies for strategy-fit assessment.

### Tertiary: Ad Set-Level Performance

```
SDK call: `meta_ads_get_insights()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  level: "adset"
  time_range: "last_7d"
  fields:
    - adset_id
    - adset_name
    - campaign_id
    - impressions
    - spend
    - conversions
    - cost_per_action_type
```

**Purpose:** Ad set conversion velocity for learning phase analysis.

### Quaternary: Ad Set Configuration

```
SDK call: `meta_ads_list_ad_sets()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  fields:
    - id
    - name
    - campaign_id
    - status
    - effective_status
    - optimization_goal
    - bid_strategy
    - bid_amount
    - daily_budget
    - lifetime_budget
    - learning_phase_info
  filtering:
    - field: "effective_status"
      operator: "IN"
      value: ["ACTIVE"]
```

**Purpose:** Bid strategy details at ad set level (for ABO campaigns), learning phase status, and bid/cap amounts.

## CSV Column Mappings

| API Field | Ads Manager Column | Notes |
|-----------|-------------------|-------|
| campaign_name | Campaign Name | |
| bid_strategy | Bid Strategy | May show as "Lowest Cost", "Cost Cap", "Bid Cap", "Minimum ROAS" |
| bid_amount | Bid/Cost Control Amount | Only present for Cost Cap and Bid Cap |
| daily_budget | Daily Budget | |
| spend | Amount Spent | |
| conversions | Results | |
| cost_per_action_type | Cost per Result | |
| learning_phase_info | Delivery | Shows "Learning", "Learning Limited", or active status |

### Required CSV Exports

1. **Campaign-level:** Last 14 days, daily breakdown, include Budget, Bid Strategy, Delivery columns
2. **Ad set-level:** Last 7 days, include Bid Strategy, Bid Amount, Delivery (learning phase), Budget

## Bid Strategy Field Values

The `bid_strategy` field returns these values:

| API Value | Display Name | Description |
|-----------|-------------|-------------|
| LOWEST_COST_WITHOUT_CAP | Lowest Cost | Auto-bid, maximize conversions within budget |
| LOWEST_COST_WITH_BID_CAP | Bid Cap | Hard ceiling on per-auction bid |
| COST_CAP | Cost Cap | Average CPA target (can exceed on individual auctions) |
| LOWEST_COST_WITH_MIN_ROAS | Minimum ROAS | Floor on return, only for value optimization |
| TARGET_COST | Target Cost | Deprecated, legacy strategy |

## Learning Phase Info Structure

```json
{
  "learning_phase_info": {
    "status": "LEARNING",  // LEARNING | LEARNING_LIMITED | ACTIVE | SUCCESS
    "remaining_conversions": 28  // How many more needed to exit
  }
}
```

If this field is not available, estimate from conversion velocity:
- <50 conversions in last 7 days = still in learning
- <25 conversions in last 7 days = likely learning limited

## Minimum Data Requirements

| Metric | Minimum for Analysis |
|--------|---------------------|
| Active campaigns | 2 |
| Days of data | 7 (14 preferred for volatility analysis) |
| Total account spend | $500/week |
| Campaigns with conversions | At least 1 |
