---
name: google-ads-review
description: Entry point for recurring Google Ads account reviews; orchestrates action skills, required human checkpoints, routing, execution, and consolidated outputs.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `google-ads-review`-style names, e.g. `google-ads-mine-search-terms`.

# Google Ads Review

Orchestrates the Universal Google Ads Analysis Toolkit. This skill does **not** perform analysis itself: it loads account configuration, routes to the right action skills, enforces checkpoints, and consolidates outputs.

## Google Ads Tooling

Use Python scripts with generated SDK functions in `sdk/tools/mcp_google_ads.py`; read that file before using functions beyond this quick reference.

```python
import asyncio
from sdk.tools.mcp_google_ads import google_ads_run_gaql_query

async def main():
    result = await google_ads_run_gaql_query(
        customer_id="1234567890",
        query="""
            SELECT campaign.name, metrics.impressions, metrics.clicks,
                   metrics.conversions, metrics.cost_micros
            FROM campaign
            WHERE segments.date DURING LAST_30_DAYS
        """
    )
    print(result)

asyncio.run(main())
```

Run scripts with `uv run python script.py`.

Key functions: `google_ads_run_gaql_query(customer_id, query)`, `google_ads_list_campaigns`, `google_ads_get_campaign_performance`, and `google_ads_get_keyword_performance`. Monetary fields are usually micros; divide by 1,000,000 for currency. All write operations create drafts and require human approval via `submit_draft(draft_id)`.

## Required Human Checkpoints

Never skip these. If the user says “run it all” or “skip checkpoints,” still pause at Checkpoint 3 because recommendations drive implementation decisions.

| # | When | Confirm |
|---|---|---|
| 1 | Pre-flight | Accounts, date range, auth, special circumstances |
| 2 | Post-routing | Skill routing per account |
| 3 | Post-analysis | Top recommendations and cross-account patterns |
| 4 | Post-output | Files written, memory/config updates, follow-ups |

## Step 0 — Load Configuration and Determine Scope

Read `account_conventions/config.yaml` or the configured account-conventions source. If missing, stop and tell the user: “No account configuration found. Run `account_conventions` to set up your accounts first.”

Extract active accounts and present a roster with account name, business model, maturity, primary KPI/target, and active campaign types. Ask which accounts to review. Calculate the reporting and comparison windows from config (`thu_wed`, `mon_sun`, or `custom`) and get confirmation.

Ask for special circumstances: pauses/launches, budget changes, promotions/seasonality, known tracking issues. Inject these notes into every analysis skill.

## Step 1 — Authentication Check

Verify Google Ads access before analysis:

```python
import asyncio
from sdk.tools.mcp_google_ads import google_ads_list_all_accounts

async def main():
    print(await google_ads_list_all_accounts())

asyncio.run(main())
```

If the integration fails, ask the user to connect Google Ads. Use `get_integration_connect_url("google_ads")` from the integrations skill if a connect link is needed. If MCP is unavailable, fall back to requesting Google Ads CSV exports. Do not proceed until auth or fallback data is confirmed.

## Step 2 — Route Skills

Route per active account using config, cadence, campaign types, and maturity.

| Condition | Skill | Cadence |
|---|---|---|
| All active accounts | `performance_analysis` | Every run |
| All active accounts | `audit_bidding` | Every run |
| `search` active | `mine_search_terms` | Every run |
| `pmax` active | `analyze_pmax` | Every run |
| `shopping` active | `analyze_shopping` | Every run |
| YouTube campaigns | `analyze_youtube` | Every run |
| Demand Gen campaigns | `analyze_demand_gen` | Every run |
| Local business or GBP | `audit_local` | Every run |
| All active accounts | `audit_creative` | Monthly, first run of month |
| All active accounts | `audit_settings` | Monthly full; weekly quick check |
| All active accounts | `optimize_budgets` | Monthly |
| Prior-week flagged campaigns | `investigate_campaign` | As needed |

Show a per-account routing matrix including maturity, skills, monthly additions, and estimated scope. Ask for confirmation before execution. See `references/skill_routing_matrix.md` for the complete matrix.

## Step 3 — Execute Per Account

Process accounts sequentially.

1. Run `performance_analysis` first to establish baseline metrics.
2. Run applicable action skills. Parallelize only independent reads when safe: `mine_search_terms`, `analyze_pmax`, `analyze_shopping`, `analyze_youtube`, `analyze_demand_gen`, and `audit_local`. Run dependent skills after baseline findings: `audit_bidding`, monthly `audit_creative`, `audit_settings`, `optimize_budgets`, and flagged `investigate_campaign`.
3. Collect flags, prioritized recommendations, key metrics, and next-week follow-ups.
4. Present per-account health (`Healthy`, `Needs Attention`, or `Urgent`), top finding, and recommendation counts; ask whether to proceed or dig deeper.

## Step 4 — Recommendations Checkpoint

After all accounts, present:

- Summary table: account, health, spend, primary KPI, WoW change, top recommendation.
- Top three recommendations per account using “technical finding → business capability unlocked” framing.
- Cross-account patterns such as shared bidding issues, negative keyword opportunities, tracking gaps, or budget reallocations.

Wait for user alignment before writing final outputs.

## Step 5 — Output Generation

After approval, write files according to config (`reporting.output_path`, `reporting.output_naming`).

Per-account markdown file contents: header with account/period/maturity, performance table, findings by skill, prioritized recommendations, follow-up items.

If `reporting.include_cross_account_summary: true`, write `Cross-Account Summary - Week {WW}.md` with health rankings, top 5 actions, urgent accounts, trend direction, and portfolio observations.

## Step 6 — Memory and Follow-Up

Ask whether to persist findings for future reviews: campaign structure discoveries, KPI target changes, maturity reassessments, config updates, negative patterns, or follow-up checks. If account details changed, ask whether to update account-conventions.

## Edge Cases

- **0 spend:** flag “No Activity,” skip action skills, and ask why.
- **Tracking issues:** if performance analysis finds unreliable conversion tracking, pause performance-dependent analysis and route to `audit_settings`.
- **New/onboarding accounts:** run only `audit_settings` and `audit_bidding`; skip period-over-period comparisons.
- **Mid-period changes:** record dates and segment pre/post change where possible.

## References and Dependencies

| File/Skill | Purpose |
|---|---|
| `references/review_cadence_guide.md` | Weekly/monthly/quarterly scope |
| `references/skill_routing_matrix.md` | Full routing and maturity calibration |
| `account_conventions` | Account roster, config, and account-specific data |
| Action skills | Analysis modules routed above |
| `account_maturity_methodology` | Maturity calibration |
