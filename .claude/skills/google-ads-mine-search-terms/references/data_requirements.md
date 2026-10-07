# Data Requirements: Search Term Mining

This file specifies how to acquire, parse, and normalize search term data for the `mine_search_terms` action skill. It is data-source agnostic and covers all four supported acquisition methods.

---

## GAQL Query: Search Campaign Terms

Use this query for MCP or Python+ADC data acquisition. It pulls search term data from standard Search, Shopping, and Display campaigns.

```sql
SELECT
  search_term_view.search_term,
  search_term_view.status,
  campaign.name,
  campaign.id,
  ad_group.name,
  ad_group.id,
  segments.keyword.info.text,
  segments.keyword.info.match_type,
  metrics.impressions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value,
  metrics.all_conversions,
  metrics.all_conversions_value
FROM search_term_view
WHERE segments.date BETWEEN '{start_date}' AND '{end_date}'
  AND metrics.impressions > 0
ORDER BY metrics.cost_micros DESC
```

**Date format:** YYYY-MM-DD (e.g., `2026-03-01` and `2026-03-30`)

**Critical note on cost_micros:** The API returns cost in micros (millionths of the account currency). Divide by 1,000,000 to get actual cost. Example: `cost_micros = 5230000` means $5.23.

**Note on search_term_view.status:** This indicates whether the search term has been added as a keyword, added as a negative, or has no status. Values: ADDED, EXCLUDED, ADDED_EXCLUDED, NONE.

---

## GAQL Query: PMax Search Term Insights

PMax campaigns do not expose individual search terms through `search_term_view`. Use the `campaign_search_term_insight` resource instead. This provides category-level data, not exact search terms.

```sql
SELECT
  campaign_search_term_insight.category_label,
  campaign.name,
  campaign.id,
  metrics.clicks,
  metrics.impressions,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value
FROM campaign_search_term_insight
WHERE segments.date BETWEEN '{start_date}' AND '{end_date}'
  AND campaign.advertising_channel_type = 'PERFORMANCE_MAX'
  AND metrics.impressions > 0
ORDER BY metrics.cost_micros DESC
```

**Limitation:** `campaign_search_term_insight` returns search term categories, not individual terms. The `category_label` field contains a hierarchical category path (e.g., "Apparel > Shoes > Running Shoes"). This is less granular than Search campaign data. Flag this limitation to the practitioner during Step 1.

**Alternative for exact PMax terms:** Some accounts can access exact PMax search terms through the Google Ads UI under Insights > Search terms. If the practitioner can export this data as CSV, parse it using the CSV method below.

---

## Google Ads UI Export Instructions

For practitioners using CSV export:

1. Log into Google Ads at ads.google.com
2. Select the target account
3. Navigate to: Insights and reports > Search terms (or Keywords > Search terms in the left nav)
4. Set the date range to the desired analysis period
5. Apply any campaign or ad group filters if analyzing a subset
6. Click the download icon (arrow pointing down)
7. Select "CSV" or ".csv" format
8. Save the file

**Important settings before export:**
- Ensure "All campaigns" is selected unless intentionally filtering
- Verify the date range matches the intended analysis period
- Check that the Columns dropdown includes: Search term, Campaign, Ad group, Keyword, Match type, Impressions, Clicks, Cost, Conversions, Conv. value

---

## CSV Parsing Rules

Google Ads CSV exports have several quirks that must be handled:

### BOM Characters
- Google Ads exports often include a UTF-8 BOM (byte order mark: `\xef\xbb\xbf`) at the start of the file
- Strip BOM before parsing to prevent the first column header from being misread
- In Python: `open(file, encoding='utf-8-sig')` handles this automatically

### Separator Detection
- Standard exports use comma separation
- Some locales or export methods use tab separation
- Detect by reading the first line: if it contains tabs but no commas within quoted fields, use tab as separator
- In Python: `csv.Sniffer().sniff(first_line)` auto-detects the delimiter

### Quoted Fields
- Fields containing commas are wrapped in double quotes (e.g., `"1,234"` for the number 1234)
- Campaign and ad group names may contain commas
- Use a proper CSV parser (not string splitting) to handle quoted fields correctly

### Currency Formatting
- Cost values may include currency symbols ($, EUR, etc.) or thousands separators (commas, periods)
- Strip all non-numeric characters except the decimal separator before converting to float
- Decimal separator varies by locale: US uses period (1,234.56), EU uses comma (1.234,56)
- Determine the locale from the account's currency setting in the config

### Summary Rows
- Google Ads CSV exports include summary/total rows at the bottom of the file
- These rows typically have an empty Search term field or contain "Total" in the first column
- Filter out any row where the search_term field is empty, contains "Total", or contains "Summary"

### Multi-Currency Accounts
- If the account config currency does not match the currency in the export, flag this to the practitioner
- Do not auto-convert currencies. Ask the practitioner to confirm which currency the data is in.
- All monetary thresholds (CPA targets, spend flags) must be applied in the data's native currency

---

## Column Normalization Map

Map source column names to the standardized names used throughout the analysis pipeline. The standardized names are used in all subsequent steps, outputs, and reports.

| Standardized Name | Google Ads UI Column | GAQL Resource Field | Notes |
|---|---|---|---|
| search_term | Search term | search_term_view.search_term | The actual query the user typed |
| search_term_status | Search term status | search_term_view.status | ADDED, EXCLUDED, ADDED_EXCLUDED, NONE |
| campaign | Campaign | campaign.name | Campaign name as it appears in the account |
| campaign_id | Campaign ID | campaign.id | Numeric campaign identifier |
| ad_group | Ad group | ad_group.name | Ad group name |
| ad_group_id | Ad group ID | ad_group.id | Numeric ad group identifier |
| matched_keyword | Keyword | segments.keyword.info.text | The keyword that triggered the match |
| match_type | Match type | segments.keyword.info.match_type | EXACT, PHRASE, BROAD (API returns enum names) |
| impressions | Impr. | metrics.impressions | Integer |
| clicks | Clicks | metrics.clicks | Integer |
| cost | Cost | metrics.cost_micros / 1000000 | Float, account currency. UI exports show formatted cost. |
| conversions | Conversions | metrics.conversions | Float (can be fractional with data-driven attribution) |
| conv_value | Conv. value | metrics.conversions_value | Float, account currency |
| all_conversions | All conv. | metrics.all_conversions | Includes non-primary conversions |
| all_conv_value | All conv. value | metrics.all_conversions_value | Value of all conversions |

**UI column name variations:** Different Google Ads interface versions and languages may use slightly different column headers. Common variations:

| Standardized | Variation 1 | Variation 2 | Variation 3 |
|---|---|---|---|
| impressions | Impr. | Impressions | Impr |
| clicks | Clicks | (consistent) | |
| cost | Cost | Avg. cost | Cost (USD) |
| conversions | Conversions | Conv. | Conversions (by conv. time) |
| conv_value | Conv. value | Conversion value | Total conv. value |
| matched_keyword | Keyword | Search keyword | |
| match_type | Match type | Keyword match type | Search term match type |

When parsing, try matching against all known variations. If a required column cannot be matched, report which column is missing and ask the practitioner to verify column names.

---

## Derived Metrics

After normalization, calculate these derived metrics for every row:

| Metric | Formula | Null Condition |
|--------|---------|----------------|
| cpa | cost / conversions | Set to null if conversions = 0 |
| roas | conv_value / cost | Set to null if cost = 0 |
| conv_rate | conversions / clicks | Set to null if clicks = 0 |
| cpc | cost / clicks | Set to null if clicks = 0 |

**Handling fractional conversions:** Data-driven attribution can produce fractional conversion values (e.g., 0.4 conversions). Treat these as valid. Do not round to integers. A term with 0.4 conversions and $50 spend has a CPA of $125, which is a meaningful signal.

---

## Minimum Data Requirements

The analysis requires at minimum:
- **search_term** (required, cannot proceed without it)
- **campaign** (required for placement decisions)
- **clicks** (required for threshold evaluation)
- **cost** (required for spend-based classification)
- **conversions** (required for performance classification)

If any of these five columns are missing, stop and request the data in a complete format.

Optional but strongly recommended:
- **matched_keyword** (enables three-way cross-reference)
- **ad_group** (enables granular placement)
- **conv_value** (required for ROAS-based accounts)
- **match_type** (helps identify broad match waste)

If matched_keyword is missing, the three-way cross-reference in Step 3 is degraded. Flag this to the practitioner and note that classification confidence will be lower.
