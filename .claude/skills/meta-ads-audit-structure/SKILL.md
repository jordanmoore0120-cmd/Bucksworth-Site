---
name: meta-ads-audit-structure
description: Audit Meta Ads campaign architecture, fragmentation, budget structure, naming compliance, and restructure recommendations.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `audit-structure`-style names, e.g. `google-ads-mine-search-terms`.

# Audit Structure

Use this action skill to assess whether a Meta Ads account's campaign/ad set/ad architecture supports learning, efficient budget allocation, naming automation, and Advantage+ adoption.

## Tooling and Safety

- Use `sdk/tools/mcp_meta_ads.py` for Meta Ads data. Inspect it before calling unfamiliar functions.
- Run scripts with `uv run python <script>.py`.
- All write operations must create drafts and require explicit human approval before execution.
- Monetary values from Meta tools are usually in cents; divide by 100 before reporting dollars.

Common read functions include `meta_ads_list_campaigns`, `meta_ads_list_ad_sets`, `meta_ads_list_ads`, and `meta_ads_get_insights`.

## Dependencies

Read before analysis:
- `account_conventions` — ad account ID, KPI targets, naming conventions, capabilities, maturity, data source.
- `campaign_structure_methodology` — three-campaign model, consolidation rules, ASC guidance, CBO/ABO rules.
- `account_maturity_methodology` — structural complexity tolerated by maturity.

Validation gate: if `ad_account_id` is missing, stop. If naming conventions are not configured, skip or limit naming audit and state that limitation.

## Workflow

1. **Acquire data**
   - Campaign settings for ACTIVE and PAUSED campaigns: ID, name, status, objective, bid strategy, budgets, buying type, special categories, created time.
   - Ad set settings: ID, name, campaign ID, status, targeting, optimization goal, bid strategy, bid amount, budgets, learning info, created time.
   - Active ads: ID, name, ad set ID, status, created time.
   - Ad set-level performance for last 7 days: impressions, spend, conversions, cost/action, campaign/ad set names.
   - CSV fallback: request campaign settings, ad set settings, ad list, and last-7-day ad set performance exports.

2. **Build structure inventory**
   - Count active/paused campaigns, active ad sets, active ads.
   - Break campaigns down by objective and budget type.
   - Build a visual tree of campaigns → ad sets → active ad counts.

3. **Detect fragmentation**
   - Campaign flags: >5 active campaigns with same objective; >3 for Nascent/Developing; >8 total active campaigns for Developing or below; >15 total active campaigns for any maturity.
   - Ad set flags: >5 ad sets in CBO, >8 ad sets in ABO, <50 weekly conversions, or <$10/day effective budget.
   - Ad flags: >20 active ads per ad set, only 1 ad per ad set, or large age gaps/hodgepodge creative.

4. **Compare to ideal structure**
   - Map actual structure against the maturity-appropriate model: Nascent 1-2 campaigns, Developing 2-4, Established 3-6, Advanced 5-10 unless justified.
   - Identify missing funnel roles, duplicate campaigns, and budget dilution.

5. **Audit CBO vs ABO**
   - CBO is usually best for 2-5 similar ad sets with >50 weekly conversions.
   - ABO is usually best for controlled tests or audience groups requiring specific spend.
   - Flag CBO with one ad set, CBO with >5 ad sets, ABO on a scaling campaign with similar ad sets, and CBO where one ad set receives >80% of spend due to size imbalance.

6. **Analyze consolidation candidates**
   - Calculate weekly conversions, projected conversion velocity, and minimum viable budget (`target CPA * 50 / 7`).
   - Flag same targeting, overlapping audiences, creative split into separate ad sets, low budget, and Learning Limited groups.
   - Estimate whether merged entities would exceed 50 conversions/week.

7. **Audit naming compliance**
   - Parse campaign, ad set, and ad names against account conventions.
   - Report violations, severity, suggested names, and compliance percentage.
   - Explain that naming compliance enables automated analysis across other Meta Ads skills.

8. **Assess Advantage+ structure if applicable**
   - Check whether ASC/A+ is running, budget share, customer cap, creative count, and performance vs manual campaigns.
   - Recommend launch, scale, fix, or avoid based on maturity and monthly conversion volume.

## Checkpoint Before Final Plan

Present a concise summary and ask whether to generate the restructuring plan:

```markdown
Structure Audit Summary for {account_name}
Account maturity: {maturity_level}
Monthly conversions: {volume}

Snapshot: {active campaigns}/{active ad sets}/{active ads}
Fragmentation: {low/moderate/heavy/excessive}
CBO/ABO: {correct count} correct, {misfit count} misfit
Naming compliance: {score}%
Advantage+: {status}
Key flags:
- {finding}
```

## Final Output Contract

Deliver:
- Structure assessment report with current and recommended structure maps.
- Fragmentation table by objective and recommended action.
- Ad set health table with weekly conversions, learning status, viability, and action.
- Consolidation plan phased by week, with rationale and risk.
- CBO/ABO migration recommendations.
- ASC introduction/fix plan if applicable.
- Naming violations list with suggested names and priority.
- Restructure timeline with success criteria and rollback plan.

Implementation rules: one phase per week, preserve winning ads where possible, pause old campaigns rather than deleting, and monitor learning after each phase. Roll back or pause changes if CPA rises >25% for 72 hours unless a known seasonal factor explains it.

## Error Handling

- If campaign settings are partial, infer only what insights support and ask the user to confirm missing objectives/budget types.
- If naming conventions are defaults or absent, skip naming scoring and recommend configuring conventions.
- For very large accounts, audit active campaigns first and state that paused entities need a second pass.
- If all campaigns are Advantage+, pivot to A+ structure analysis and whether manual testing campaigns are needed.
- If the account launched less than 7 days ago, skip consolidation recommendations and focus on initial structure fit.

## Reference Files

- `references/data_requirements.md` — Required Meta fields and filters.
- `references/output_specs.md` — Structure map and plan formats.
- `references/worked_example.md` — Example restructuring workflow.
