---
name: meta-ads-weekly-review
description: Orchestrate Meta Ads weekly, monthly, quarterly, onboarding, and ad-hoc account reviews with required human checkpoints before recommendations or writes.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `meta-ads-weekly-review`-style names, e.g. `google-ads-mine-search-terms`.

# Meta Ads Weekly Review

## Tooling and Safety

Use Python scripts with `sdk/tools/mcp_meta_ads.py`; read that file for current functions and parameters before coding. Common reads include `meta_ads_list_ad_accounts`, `meta_ads_list_campaigns`, and `meta_ads_get_insights`. Write operations such as campaign, ad set, creative, or ad creation create drafts that require human approval via `submit_draft(draft_id)`.

All monetary values returned by the Meta Ads tools are in cents unless a tool's current docstring says otherwise.

## Purpose

This is the Meta Ads Toolkit orchestrator. It routes, sequences, and synthesizes action skills across performance, creative, bidding, audiences, structure, budgets, measurement, compliance, Advantage+, catalog, campaign launch, investigations, creative briefs, automated rules, and A/B tests. It is a co-pilot, not autopilot.

## When to Use

- Weekly: standard Monday/Tuesday review.
- Monthly: first run of month adds deeper budgets, measurement, structure, and audience work.
- Quarterly: first run of quarter adds compliance, maturity reassessment, Advantage+, and catalog where applicable.
- Onboarding: first run for a new account; run all applicable skills.
- Ad hoc: user asks for a full diagnostic or something feels off.

## Dependencies

Always load account conventions/config plus maturity methodology. Then route action skills by campaign type, account maturity, and cadence:

| Cadence | Scope |
|---|---|
| Every run | `performance_analysis` first; `analyze_creative`; `investigate_campaign` for flags; creative brief per config. |
| Bi-weekly | Add `audit_audiences`, `audit_bidding`, and `manage_automated_rules`. |
| Monthly | Add `optimize_budgets`, `audit_measurement`, and `audit_structure`. |
| Quarterly | Add `audit_compliance`, `analyze_advantage_plus`, `analyze_catalog`, and maturity reassessment. |
| On-demand | `launch_campaign`, `investigate_campaign`, `generate_creative_brief`, `manage_ab_tests`, `manage_automated_rules`. |
| Onboarding | Run all relevant skills regardless of cadence. |

## Required Workflow

### 0. Pre-flight and Scope

Read account config and extract account name, ad account ID, status, maturity, spend context, active campaign types/capabilities, KPI targets/thresholds, creative config, reporting period, output path, and naming. Present a concise roster, cadence, date range, and ask about special circumstances (recent launches/pauses, promotions, budget changes, known issues).

**Checkpoint 1:** Confirm accounts, date range, cadence, and special circumstances. User may skip; proceed with defaults if they do.

### 1. Authentication

Verify Meta Ads integration with `meta_ads_list_ad_accounts`. Confirm configured accounts are accessible and permissions are sufficient for campaigns, ad sets, ads, and insights. If all accounts fail, stop and ask the user to reconnect Meta Ads. If only some fail, proceed with accessible accounts and document the gaps.

### 2. Skill Routing

Build and show a routing matrix by account. Include cadence, applicable capabilities (`has_advantage_plus`, `has_catalog`, active campaign types), flags that would trigger investigations, and total skill invocations. Performance baseline must run before other analysis.

**Checkpoint 2:** Confirm routing matrix. User may skip or adjust.

### 3. Execute Per Account

Process each account in dependency order:
1. `performance_analysis` first for health, flags, campaign summaries, and 4-week trend context.
2. Run independent skills that depend on the baseline where applicable: creative, bidding, Advantage+, catalog.
3. Run dependent skills: budget optimization after bidding/pacing context; campaign investigations for red/yellow flags.
4. Add monthly/quarterly skills by cadence: audiences, structure, measurement, compliance.
5. Generate creative briefs if fatigue/gaps or config require them.
6. Aggregate findings, flags, and prioritized recommendations.

Parallelize only independent reads/analyses after the baseline is complete. Continue through non-critical skill failures, note the gap, and avoid silently substituting cached or estimated data.

### 4. Recommendations Checkpoint — Mandatory

Present account health, top 3 recommendations per account, cross-account patterns, critical flags, source skill for each recommendation, rationale, projected impact, risks, and proposed actions.

**Checkpoint 3 is mandatory and can never be skipped, even if the user asks to run automatically. Do not finalize recommendations or execute writes until the user explicitly confirms, modifies, or rejects them.**

### 5. Output Generation

After recommendations are approved or revised, generate per-account markdown reports at the configured output path using the configured naming convention. Include:
- Executive summary with account health and KPI table.
- Top action items and approved recommendations.
- Performance, creative, bidding, Advantage+, catalog, budget, investigation, audience, structure, measurement, compliance, and creative-brief sections as applicable.
- Active flags table with severity, threshold, action, and owner.
- Follow-up items, caveats/data gaps, and next review dates.

If reviewing multiple accounts or config requests it, also produce a cross-account summary with portfolio totals, cross-account patterns, portfolio recommendations, and account-level summaries.

### 6. Memory and Follow-Up

Ask whether to save review findings for next-week comparison: health status, metric snapshots, open flags, and recommendation status. Compile follow-up items with owner/deadline/priority. Check whether account maturity, KPI targets, flag thresholds, creative config, or capabilities should be updated.

**Checkpoint 4:** Confirm files written, memory items, follow-up list, and config updates. User may skip.

## Error Handling

| Issue | Required Response |
|---|---|
| MCP authentication failure | Stop if all accounts fail; tell the user to reconnect Meta Ads. |
| Partial account access | Continue with accessible accounts and document inaccessible ones. |
| Skill execution failure | Log/describe the failure, skip that skill for that account, continue, and note report gap. |
| Excessive flags (>20/account) | Prioritize by severity and spend impact; show top 10 and summarize the rest. |
| Very large account (>50 campaigns) | Batch active spending campaigns first and watch rate limits. |
| Missing config | Run account-conventions setup before review; minimum required: ad account ID, primary KPI, targets. |
| Conflicting recommendations | Present the conflict at Checkpoint 3 and let the user decide. |
| Long review | Complete one account fully before the next and provide interim updates. |

## Reference Files

- `references/routing_matrix.md` — Complete routing logic, cadence calculation, and capability decisions.
- `references/output_templates.md` — Full per-account and cross-account report templates.
