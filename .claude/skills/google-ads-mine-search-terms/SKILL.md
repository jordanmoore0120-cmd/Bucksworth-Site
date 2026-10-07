---
name: google-ads-mine-search-terms
description: Mine Google Ads search terms to classify negatives, expansion candidates, gray-area terms, n-grams, conflicts, and Google Ads Editor CSV outputs; use analyze_pmax instead for PMax-specific deep dives.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `mine-search-terms`-style names, e.g. `google-ads-mine-search-terms`.

# Mine Search Terms

End-to-end search term analysis for Google Ads. It pulls or imports search term data, classifies terms with the five-category framework, finds n-gram patterns, resolves negative keyword conflicts, and generates practitioner-ready CSV/Markdown outputs.

## Dependencies and data access

Load first:
- `search_term_methodology` — classification, n-grams, match type, conflict logic.
- `account_conventions` — brand terms, negative signals, KPI targets, maturity, naming patterns, data source.
- `account_maturity_methodology` — threshold calibration.

If account config is missing, stop and ask the practitioner to set it up with `account_conventions`.

For Google Ads API access, use Python with `sdk/tools/mcp_google_ads.py`; read the SDK file before calling functions. Common function: `google_ads_run_gaql_query(customer_id, query)`. Cost values are in micros and must be divided by 1,000,000. Any write operation creates a draft requiring human approval.

## Thresholds by maturity

| Threshold | Nascent | Developing | Established | Advanced |
|---|---:|---:|---:|---:|
| Min clicks for term action | 5 | 10 | 15 | 20 |
| N-gram click threshold | 10 | 20 | 30 | 50 |
| Min conversions for EXPAND | 2 | 3 | 3 | 5 |
| High-spend flag vs target CPA | 1.5x | 2x | 2x | 2.5x |

## Workflow

### 0. Confirm context
Load account, CID, maturity, KPI/target, brand terms, negative patterns, and analysis range (default last 30 days). Confirm with the practitioner before acquiring data.

### 1. Acquire data
Detect source from account conventions and use one of: SDK/GAQL, direct GAQL, CSV import, or manual paste. Required normalized columns:
`search_term, campaign, ad_group, matched_keyword, match_type, impressions, clicks, cost, conversions, conv_value`.
Optional: status, quality score, impression share.

Checkpoint: report rows, unique terms, campaigns, date range, spend, conversions, and parsing warnings. Do not classify without required cost and conversion data.

### 2. Pre-process
- Normalize columns, match types, and cost micros.
- Calculate CPA, ROAS, CVR, CPC.
- Tag and separate brand terms; confirm false positives/omissions.
- Pre-tag configured negative patterns.
- Tag PMax source terms for the PMax-specific path.
- Summarize total, brand, pre-tagged negatives, PMax, and terms entering classification.

### 3. Classify terms
For each non-brand/non-PMax term, run the three-way cross-reference:
1. Search term vs matched keyword.
2. Search term vs campaign/ad group theme.
3. Search term vs landing page, using landing page data if available or clearly labeled inference if not.

Apply categories:
- `URGENT_NEGATIVE` — irrelevant with enough clicks/spend or configured negative signal.
- `MONITOR_NEGATIVE` — irrelevant but lower volume/spend.
- `EXPAND` — relevant, converting, not already exact-covered, meets KPI and maturity conversion threshold.
- `COVERED_BY_PARENT` — relevant but best left under a healthy parent keyword.
- `REVIEW_MANUALLY` — relevant but insufficient/mixed evidence.

Evaluate phrase parent keyword health: Healthy (70%+ relevance and target-efficient), Leaking (<70% relevance), or Exhausted (declining volume/rising CPA). Present category totals plus top 5 negatives and expansion candidates.

### 4. N-gram analysis
Decompose classified non-brand terms into unigrams, bigrams, and trigrams. Aggregate impressions, clicks, cost, conversions, value, term count, CPA/ROAS. Filter by maturity threshold and repeated occurrence. Bucket patterns as zero-conv high-spend, high-converting, brand-adjacent, or mixed-signal. Present the top patterns and any newly discovered negative/expansion themes.

### 5. Negative placement and conflict detection
For each proposed negative, choose placement:
- Account-level for universal negatives and PMax negatives (with extra caution).
- Shared list for vertical/theme-specific negatives.
- Campaign-level when relevant elsewhere but not in this campaign.
- Ad-group-level for surgical exclusions.

Choose match type: broad for wholly irrelevant concepts, phrase for problem phrases, exact for single-query problems or uncertainty. Simulate conflicts against existing positive keywords and legitimate campaign targets. Every conflict must be resolved by narrowing match type, changing placement, removing the negative, or documenting an accepted conflict before outputs are finalized.

### 6. PMax term evaluation
Skip if none. PMax negatives can only be account-level and affect all campaigns, so conflict checks are mandatory. Evaluate relevance to asset group/product themes, brand cannibalization, extraction candidates, and PMax-specific negatives.

### 7. Gray-area triage
For `REVIEW_MANUALLY` terms, run keyword, ad, landing page, and attribution diagnostics. Group as high-confidence recommendation, medium-confidence mixed signal, or low-confidence wait-for-data. Present metrics, rationale, confidence, and suggested action for practitioner decision.

### 8. Outputs
Generate five deliverables using `references/output_csv_specs.md`:
1. **Negative Keyword CSV** — Google Ads Editor import, sorted by placement then spend; exclude unresolved conflicts.
2. **Keyword Expansion CSV** — campaign/ad group, keyword, match type, Max CPC blank for Smart Bidding, Final URL, Status.
3. **N-Gram Analysis Report** — Markdown table by bucket.
4. **Conflict Audit** — conflicts detected and resolution applied.
5. **Summary Dashboard** — classification overview, savings opportunity, expansion opportunity, top negatives/expansions, n-gram findings, PMax findings, conflicts, gray-area queue.

## Error handling

- Fewer than 50 terms: warn; run classification/gray-area/output only and recommend longer range.
- Missing required columns: stop and request complete data.
- Zero conversions account-wide: no expansion candidates; classify by relevance and flag possible tracking issue.
- Multi-currency mismatch: confirm before using monetary thresholds.
