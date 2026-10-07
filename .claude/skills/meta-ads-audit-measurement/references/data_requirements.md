# Audit Measurement: Data Requirements

## Purpose

Reference for all MCP tools, API calls, and manual data pull instructions needed to execute the audit-measurement skill. Organized by audit step for easy reference during execution.

---

## Step 1A: Pixel Health Data

### Via MCP (Meta Ads Tool)

```
SDK call: `meta_ads_get_pixel_stats()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  pixel_id: {pixel_id}
  fields:
    - id
    - name
    - is_active
    - last_fired_time
    - creation_time

SDK call: `meta_ads_get_insights()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  object_id: {pixel_id}
  object_type: "pixel"
  fields:
    - event_name
    - event_count
    - event_count_7d
    - event_count_28d
    - last_received_time
```

### Via Browser (Manual Pull with Browserbase)

If MCP pixel stats are unavailable, use Viktor's browser automation to pull data from Events Manager. Read the `browser` skill first (`skills/browser/SKILL.md`).

```python
from sdk.utils.browser import get_browser, close_browser

browser = await get_browser("pixel-check")
await browser.goto(f"https://business.facebook.com/events_manager2/list/pixel/{pixel_id}/overview")
print(await browser.snapshot())

# Step 1: Screenshot the Overview tab (event list with volumes)
# Step 2: Navigate to Diagnostics tab, screenshot active issues
# Step 3: Navigate to Test Events tab
# Step 4: Enter the website URL and trigger a conversion flow
# Step 5: Screenshot the real-time event stream

await close_browser("pixel-check")
```

**Note:** Facebook may require login. Use step-by-step exploration mode — take a snapshot after each action to see the current page state.

### Required Data Points

| Data Point | How to Capture | Format |
|------------|---------------|--------|
| Pixel active status | Events Manager > Overview header | Boolean: active/inactive |
| Last event timestamp | Events Manager > Overview or API | Datetime |
| Event list with 7d volumes | Events Manager > Overview table | Table: event_name, count_7d |
| Event list with 28d volumes | Events Manager > Overview table | Table: event_name, count_28d |
| Active errors | Events Manager > Diagnostics | List: error type, severity, affected events |
| Active warnings | Events Manager > Diagnostics | List: warning type, affected events |
| Page coverage | Events Manager > Diagnostics > "Pixel Not Found" | % or list of pages without pixel |

---

## Step 1B: CAPI Status Data

### Via MCP

```
SDK call: `meta_ads_get_server_events_setup()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  pixel_id: {pixel_id}
  fields:
    - event_name
    - server_event_count_7d
    - browser_event_count_7d
    - deduplicated_count_7d
    - event_match_quality
    - match_keys_sent

SDK call: `meta_ads_get_server_events_setup()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  pixel_id: {pixel_id}
  events: ["Purchase", "Lead", "AddToCart", "ViewContent", "InitiateCheckout", "CompleteRegistration"]
```

### Via Playwright (Manual Pull)

```
Steps:
1. Events Manager > Data Sources > [Pixel Name] > Overview
2. Filter by "Connection Method" to see Browser vs Server breakdown
3. Screenshot the breakdown showing:
   - Browser only event count
   - Server only event count
   - Browser + Server (deduplicated) count
4. Navigate to Settings > Conversions API
5. Screenshot EMQ scores per event
6. Click into each event to see which match keys are being sent
```

### Required Data Points

| Data Point | How to Capture | Format |
|------------|---------------|--------|
| CAPI active | Events Manager: server events present | Boolean |
| Implementation method | Events Manager > Settings or account documentation | Enum: partner, gateway, gtm_server, direct_api |
| Events sent via CAPI | Events Manager > Overview (server column) | List: event_name, count_7d |
| Deduplication count | Events Manager > Overview (browser+server column) | Number per event |
| Deduplication rate | Calculate: deduplicated / (browser + server + deduplicated) | Percentage |
| EMQ score per event | Events Manager > Settings > CAPI | Number (0-10) per event |
| Match keys sent | Events Manager > event detail | List per event: em, ph, fbc, fbp, external_id, ip, ua |

---

## Step 1C: Attribution Settings Data

### Via MCP

```
SDK call: `meta_ads_list_ad_accounts()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  fields:
    - attribution_spec
    - default_dsa_beneficiary
    - default_dsa_payor

SDK call: `meta_ads_get_insights()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  level: "account"
  time_range: "last_30d"
  fields:
    - conversions
    - cost_per_action_type
    - action_values
  action_attribution_windows: ["1d_click", "7d_click", "1d_view"]
```

### Via Playwright (Manual Pull)

```
Steps:
1. Ads Manager > Account Overview or any campaign
2. Customize Columns:
   - Add "Results" for 1-day click window
   - Add "Results" for 7-day click window
   - Add "Results" for 7-day click + 1-day view window
3. Set date range to last 30 days
4. Screenshot the comparison at account and campaign level
5. Navigate to Account Settings > Attribution
6. Screenshot the default attribution window setting
```

### Required Data Points

| Data Point | How to Capture | Format |
|------------|---------------|--------|
| Default attribution window | Account Settings or API | Enum: 1d_click, 7d_click, 7d_click_1d_view |
| Conversions (1d click) | Ads Manager custom column | Number (account-level, last 30d) |
| Conversions (7d click) | Ads Manager custom column | Number (account-level, last 30d) |
| Conversions (7d click + 1d view) | Ads Manager custom column | Number (account-level, last 30d) |
| CPA by attribution window | Calculated: spend / conversions per window | Currency amount per window |

---

## Step 1D: UTM and Analytics Data

### Via MCP

```
SDK call: `meta_ads_list_ads()` (from `sdk/tools/mcp_meta_ads`)
Parameters:
  account_id: {ad_account_id}
  level: "ad"
  fields:
    - ad_id
    - ad_name
    - creative.object_story_spec.link_data.link
    - creative.url_tags
    - tracking_specs
  filtering:
    - field: "effective_status"
      operator: "IN"
      value: ["ACTIVE"]
  limit: 20
```

### Via Playwright (Manual Pull)

```
Steps:
1. Ads Manager > Ads tab
2. Filter: Status = Active
3. For each of 10+ ads:
   - Click the ad preview
   - Copy the destination URL (including UTM parameters)
   - Document in a table
4. Google Analytics > Acquisition > Traffic Acquisition
5. Filter by Source = "meta" or "facebook"
6. Screenshot the source/medium breakdown
7. Compare GA4 conversion counts vs Meta's reported conversions
```

### Required Data Points

| Data Point | How to Capture | Format |
|------------|---------------|--------|
| Ad URLs with UTMs (10+ samples) | Ads Manager > ad preview URLs | Table: ad_name, full_url |
| UTM consistency assessment | Manual review of sampled URLs | Pass/fail per parameter |
| GA4 source/medium | Google Analytics | Source/medium = meta/cpc (or facebook/cpc) |
| GA4 vs Meta conversion comparison | GA4 conversions vs Meta 7d click conversions | Percentage discrepancy |
| Landing page status | Visit each unique landing page | Pass/fail (200 OK, no redirect issues) |

---

## Step 1E: Third-Party Tool Data

### Via MCP

Third-party tools typically don't have MCP integrations. Data must be pulled manually or via the tool's API/dashboard.

### Via Playwright (Manual Pull)

```
For Triple Whale:
  URL: https://app.triplewhale.com/dashboard
  Capture: Attribution summary, Meta channel performance, last sync time

For Northbeam:
  URL: https://app.northbeam.io
  Capture: Channel performance, attribution model setting, Meta conversion count

For Hyros:
  URL: https://app.hyros.com
  Capture: Ad platform comparison, Meta vs Hyros reported conversions
```

### Required Data Points

| Data Point | How to Capture | Format |
|------------|---------------|--------|
| Tool name and version | Dashboard header | String |
| Connection status | Dashboard settings or integrations page | Active/inactive |
| Last sync timestamp | Dashboard or settings | Datetime |
| Attribution model in use | Settings > Attribution | Model name |
| Meta conversions (third-party reported) | Channel performance view | Number (last 30d) |
| Meta conversions (Meta reported) | Ads Manager | Number (last 30d, same window) |
| Discrepancy percentage | Calculate: (Meta - 3P) / Meta x 100 | Percentage |
| Connected platforms | Integrations page | List of connected ad platforms |

---

## Data Collection Template

Use this template to organize data before analysis:

```markdown
## Measurement Audit Data Collection

**Account:** [Name]
**Account ID:** [ID]
**Pixel ID:** [ID]
**Date:** [Date]
**Analyst:** [Name]

### Pixel Health
- Status: [Active / Inactive]
- Last event: [Timestamp]
- Events firing: [List with 7d volumes]
- Errors: [List]
- Warnings: [List]

### CAPI
- Active: [Yes / No / Not Implemented]
- Method: [Partner / Gateway / GTM / Direct]
- Events covered: [List]
- Dedup rate: [X%]
- EMQ scores: [Event: Score, Event: Score, ...]

### Attribution
- Current window: [Setting]
- 1d click conversions (30d): [Number]
- 7d click conversions (30d): [Number]
- 7d click + 1d view conversions (30d): [Number]
- 7d/1d ratio: [X.Xx]

### Events
- Primary conversion event: [Event name]
- Funnel events present: [VC, ATC, IC, Purchase / gaps]
- Conversion values active: [Yes / No]
- Custom conversions: [List]

### UTMs
- Consistent: [Yes / No]
- Issues: [List]
- GA4 alignment: [Pass / Fail]

### Third-Party
- Tool: [Name / None]
- Status: [Connected / Disconnected / N/A]
- Discrepancy: [X%]
```

---

## Minimum Viable Audit (When Full Data Isn't Available)

If MCP tools and Playwright access are limited, the audit can still be executed with:

1. **Events Manager screenshots** (pixel overview, diagnostics, CAPI settings) -- covers Steps 2 and 3
2. **Ads Manager column comparison** (1d click vs 7d click vs 7d+1d view) -- covers Step 4
3. **10 active ad URLs** (copy/paste from ad previews) -- covers Step 6A
4. **GA4 acquisition report** (screenshot of source/medium) -- covers Step 6B

These four data points are sufficient to produce a directionally accurate measurement health scorecard. Full data enables deeper diagnosis and more specific remediation recommendations.
