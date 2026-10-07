---
name: meta-ads-audit-bidding
description: Audit Meta Ads bid strategies, learning status, cost controls, and sequenced migration recommendations.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `audit-bidding`-style names, e.g. `google-ads-mine-search-terms`.

# Audit Bidding

Use this action skill to evaluate whether active Meta Ads campaigns use the right bid strategies for the account's maturity, objectives, targets, and learning status.

## Tooling and Safety

- Use `sdk/tools/mcp_meta_ads.py` for Meta Ads reads/writes; inspect it before unfamiliar calls.
- Run scripts with `uv run python <script>.py`.
- All write operations must create drafts and require explicit human approval before execution.
- Monetary values from Meta tools are usually in cents; divide by 100 before reporting dollars.

Common read functions include `meta_ads_get_insights`, `meta_ads_list_campaigns`, and `meta_ads_list_ad_sets`.

## Dependencies

Read before analysis:
- `account_conventions` — ad account ID, KPI targets, naming conventions, maturity, data source.
- `bidding_methodology` — strategy-selection rules, cap-setting protocol, learning-phase rules, migration paths.
- `account_maturity_methodology` — recommended default strategy by maturity.

Validation gate: if KPI targets are missing or zero, you cannot assess Cost Cap/Bid Cap fit. Ask the user to provide targets or clearly label the audit as limited.

## Workflow

1. **Acquire data**
   - Campaign insights: last 14 days, daily granularity, campaign level.
   - Campaign settings: active campaign status, objective, bid strategy, budget, buying type, special ad category.
   - Ad set insights: last 7 days, ad set level.
   - Ad set settings: optimization goal, bid strategy, bid amount, budget, learning status.
   - CSV fallback: request campaign settings, 14-day daily campaign performance, and 7-day ad set performance with delivery/learning status.

2. **Assess strategy fit**
   - Compare current strategy to recommended strategy by maturity and objective.
   - Classify each campaign as Optimal, Acceptable, Mismatch, or Legacy.
   - Flag Established+ accounts still using only Lowest Cost, tight/loose Cost Caps, unstable Bid Caps, and Minimum ROAS without verified revenue data.

3. **Assess performance by strategy**
   - Lowest Cost: CPA vs target, budget spend, daily variance.
   - Cost Cap: actual CPA vs cap, budget utilization, CPA stability, delivery consistency.
   - Bid Cap: delivery pattern, conversion volume, competitiveness.
   - Minimum ROAS: ROAS vs floor, budget utilization, value-data reliability.
   - Grade each campaign A-F based on target attainment, budget utilization, and volatility.

4. **Audit learning phase**
   - Classify ad sets as Active Learning, Learning Limited, Graduated, or Re-entered Learning.
   - Estimate learning status from conversion velocity if Meta does not return `learning_phase_info`.
   - Flag disruptive recent edits, especially multiple significant edits within 72 hours.
   - Diagnose Learning Limited causes: low budget, small audience, too many ad sets, rare conversion event, or restrictive cap.

5. **Analyze cost controls**
   - For Cost Cap, healthy cap is typically actual CPA + 15-25% with >70% budget utilization.
   - For Bid Cap, monitor delivery daily; inconsistent spend usually means the bid is too restrictive or too aggressive.
   - Provide recommended cap/bid amounts with the calculation and the expected impact.

## Checkpoint Before Migration Plan

Present the strategy-fit summary and ask whether to generate the migration plan:

```markdown
Bidding Audit Summary for {account_name}
Period: {date_range}
Account maturity: {maturity_level}

Strategy distribution: {counts by strategy and spend share}
Strategy fit: {optimal}/{acceptable}/{mismatch}/{legacy}
Learning phase: {graduated}/{active}/{limited}/{re-entered}
Cost-control flags: {tight caps, loose caps, unstable bid caps}
Key flags:
- {finding}
```

## Migration Plan Output Contract

If confirmed, generate a plan with:
- Target strategy distribution.
- Phased weekly changes, one campaign at a time.
- Current strategy, new strategy, recommended cap/bid, rationale, and risk.
- Required pre-change baseline: 7-day CPA, daily spend, conversion volume, learning status.
- Success criteria and rollback trigger per phase.
- No-change table explaining campaigns already optimal.
- Post-migration monitoring checklist for 14 days.

Sequencing rules:
1. Change only one campaign in a 48-hour window.
2. Start with the smallest reasonable campaign.
3. Wait for learning phase exit before the next major change.
4. Avoid peak periods and launches.
5. Preserve baselines before every edit.

## Execution Capability

After the user confirms the migration plan, queue Phase 1 draft changes only. Present each proposed write with current value, new value, tool/action, learning risk, baseline, rollback trigger, and approval status. Do not execute without explicit approval.

## Error Handling

- If campaign bid strategy is null, check ad set bid strategy; ABO often stores settings at ad set level.
- If learning phase is unavailable, estimate from <50 conversions in 7 days and disclose the estimate.
- If strategies differ inside one CBO campaign, flag it as a configuration issue.
- If all campaigns are Advantage+, focus on A+ cost settings and account-level outcomes.
- If conversion data is absent, recommend `audit_measurement` before bid conclusions.
- If the account is less than 30 days old, mark conclusions low-confidence and usually keep Lowest Cost until more data accrues.

## Reference Files

- `references/data_requirements.md` — MCP calls, fields, and CSV columns.
- `references/output_specs.md` — Migration plan and matrix formats.
- `references/worked_example.md` — Example migration from Lowest Cost to Cost Cap.
