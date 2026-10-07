---
name: meta-ads-audit-audiences
description: Action skill that audits Meta Ads audience strategy for overlap, saturation, exclusions, expansion opportunities, and Advantage+ performance, producing an audience health report with recommendations.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `audit-audiences`-style names, e.g. `google-ads-mine-search-terms`.

# Audit Audiences

Use this action skill to audit Meta Ads audience strategy: overlap, saturation, Advantage+ audience behavior, exclusion hygiene, and expansion opportunities. Produce a prioritized audience health report. **Do not change audiences or campaigns automatically; any write action must be a draft requiring human approval.**

## Tool use

Meta Ads SDK functions live in `sdk/tools/mcp_meta_ads.py`; inspect the file before execution for current signatures. Run scripts with `uv run python script.py`. All monetary values are in cents.

Useful functions usually include `meta_ads_get_insights`, `meta_ads_list_ad_sets`, custom audience list/read helpers, audience overlap/reach-estimate helpers, and create/update helpers where enabled. Write operations create drafts and require approval.

## Dependencies

Read before analyzing:
- `account_conventions`: ad account ID, currency, timezone, KPI targets, audience config, naming conventions, capability flags, data source method, compliance/special ad categories.
- `audience_methodology`: overlap thresholds, saturation thresholds, LAL/Advantage+ rules, exclusion best practices.
- `account_maturity_methodology`: calibrate complexity; nascent accounts should stay broad/simple, advanced accounts can support full funnel/Advantage+ guardrails.

If `ad_account_id` is missing, stop. If `audience_config` is empty, proceed from live data and state that baseline comparison is limited.

## Data acquisition

Pull the last 14 days unless the user asks otherwise:

1. **Ad set daily performance** via `meta_ads_get_insights(level="adset", time_increment="1")`: ad set/campaign IDs and names, impressions, reach, frequency, clicks, CTR, CPC, CPM, spend, actions/conversions, cost per action.
2. **Active ad set targeting** via list/read ad sets: status, targeting, optimization goal, bid strategy, budget, promoted object.
3. **Custom audiences** if accessible: ID, name, approximate count, source, delivery status, updated time.
4. **Campaign-level performance** for funnel mapping.

CSV fallback: ask the user for ad set performance with targeting details, custom audience list, and campaign report for the same date range. Say explicitly which API data was unavailable.

## Analysis steps

### 1. Audience map

For every active ad set, identify targeting type: broad, Advantage+, LAL, interest/behavior, custom audience, retargeting, geo/demo restricted, or mixed. Record audience size when available, reach, frequency, spend, CPA, and exclusions.

### 2. Overlap

Compare active ad sets pairwise:
- Same custom audience: overlap.
- Same LAL source with overlapping percentages: high overlap.
- Shared interests/categories: high if >50% shared.
- Same geo/demo + similar interests: flag when estimated overlap >30%.
- Broad overlaps narrower subsets by definition.

Severity: Critical >70% or same custom audience; High 50-70%; Moderate 30-50%; Low <30%. Explain likely auction self-competition and, where data supports it, compare CPMs against non-overlapping sets.

### 3. Saturation

Calculate frequency trends, reach penetration, CPM trend, CTR trend, and conversion-rate decay.

Typical saturation thresholds:
- Broad prospecting: healthy <2.0 frequency, warning 2.0-3.0, saturated >3.0.
- LAL/interest prospecting: healthy <2.5, warning 2.5-4.0, saturated >4.0.
- Warm retargeting: healthy <5.0, warning 5.0-8.0, saturated >8.0.
- Hot retargeting: healthy <7.0, warning 7.0-12.0, saturated >12.0.

Reach penetration above 60% in 14 days is saturation risk. CPM up >20% WoW with stable targeting and rising frequency confirms pressure.

### 4. Advantage+ audience

Skip if not enabled. If the SDK exposes `audience_type` or similar breakdown, compare defined vs expanded audience spend, CPA, CTR, and conversions.

Decision rules:
- Expanded CPA below defined CPA: keep enabled; consider broadening suggestions.
- Expanded CPA within 20%: acceptable.
- Expanded CPA >20% worse: tighten suggestions or add guardrails.
- >70% spend to expansion: suggestions may be too narrow or ignored; review quality.

If the breakdown is unavailable, state the limitation and recommend Ads Manager verification.

### 5. Exclusions

For prospecting ad sets, verify purchaser/converter exclusions and current retargeting audience exclusions where appropriate. Check exclusion audience freshness and approximate size. Missing exclusions create wasted spend and double-serving risk. ASC often does not support the same manual exclusions; treat separately.

### 6. Expansion opportunities

Prioritize by confidence, audience size, similarity to working audiences, and data availability:
- New LAL seeds from purchasers, LTV cohorts, high-intent visitors, video viewers, or email engagers.
- LAL percentage expansion where lower-percent LALs work.
- Adjacent interest/behavior segments.
- Geo or demographic expansion if restrictions are unnecessary.
- ASC test for Established/Advanced accounts not using it.

## Checkpoint summary

Before writing the full report, summarize:
- Active ad sets and custom audiences analyzed.
- Critical/high overlap pairs.
- Saturated and warning ad sets.
- Missing exclusion issues and estimated wasted spend if defensible.
- Advantage+ status and any limitation.
- Count and top examples of expansion opportunities.

Ask whether to generate the full audience health report if the engagement is interactive.

## Output contract

The full report should include:

1. **Executive summary:** biggest risk, biggest opportunity, and confidence level.
2. **Audience map table:** ad set, campaign, targeting type, audience size, reach, penetration, frequency, CPA, status.
3. **Health scores:** overlap, saturation, exclusion, and overall status by ad set.
4. **Overlap matrix:** pairwise severity and consolidation recommendations.
5. **Saturation findings:** frequency/CPM/reach trends and refresh or expansion actions.
6. **Exclusion audit:** missing/stale exclusions and remediation.
7. **Advantage+ assessment:** defined vs expanded performance when available.
8. **Expansion opportunities:** Tier 1 (test this week), Tier 2 (next sprint), Tier 3 (exploratory), and not recommended.
9. **Action queue:** proposed executable actions, each labeled draft/pending approval.

## Action queue rules

Executable recommendations may include creating website/CRM custom audiences, creating LALs, checking overlap, validating reach, or uploading hashed CRM lists if SDK support exists. Present each action with tool, parameters, reason, and approval status. Only execute after explicit user confirmation per item.

Manual-only items: creating lead forms, managing many CRM/shop integrations, and most consolidation/merge actions in Ads Manager unless an approved SDK helper exists.

## Error handling

- Targeting details unavailable: fall back to naming convention parsing and mark confidence lower.
- Custom audience sizes null: use reach as proxy and state the limitation.
- Advantage+ breakdown unavailable: note limitation and recommend Ads Manager check.
- Special Ad Category active: skip/restrict targeting recommendations that policy disallows.
- Fewer than 3 ad sets: overlap analysis is limited; focus on saturation and exclusions.
- No custom audiences: recommend foundational website, purchaser/converter, and email audiences before advanced strategy.
- Account uses only ASC: pivot to ASC performance and structure assessment rather than manual targeting audit.

## Reference files

- `references/data_requirements.md`
- `references/output_specs.md`
- `references/worked_example.md`
