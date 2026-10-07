---
name: meta-ads-bidding-methodology
description: Bid strategy selection framework for Meta Ads across account maturity stages, strategy choices, warning signals, and migration paths.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `bidding-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Bidding Methodology

Use this methodology when a Meta Ads action skill must select, evaluate, or migrate bid strategies. It is referenced by `audit_bidding` and related optimization workflows.

## Strategy by Account Maturity

```
Nascent     -> Lowest Cost to gather learning data
Developing  -> Lowest Cost plus controlled Cost Cap tests
Established -> Cost Cap as primary, Bid Cap for narrow proven uses
Advanced    -> Portfolio strategy by campaign purpose, with Minimum ROAS where value data is reliable
```

## Bid Strategy Rules

### Lowest Cost

Meta spends the budget to get the most conversions possible without a per-conversion control.

Use for:
- New accounts, new campaigns, new audiences, or unknown CPA baselines.
- Awareness/reach objectives where conversion efficiency is not the primary constraint.
- Retargeting campaigns with small budgets where strict controls could prevent delivery.

Do not use when strict CPA/ROAS targets must be enforced or high-spend campaigns need cost predictability. Expect high daily volatility during learning; evaluate weekly. If weekly CPA is 30%+ above target for two consecutive weeks after learning, consider Cost Cap or broader structural fixes.

### Cost Cap

Meta targets an average CPA at or below the cap, but may underspend if the cap is too restrictive.

Use for established CPA baselines, scaling with unit-economics control, and most Developing+ conversion campaigns. Avoid for brand-new campaigns, urgent full-spend promotions, or budgets below roughly 5x target CPA.

Setting and adjustment protocol:
1. Start 15-25% above proven target CPA.
2. Review every 7-14 days, not daily.
3. If spend is <70% of budget for 5+ days, raise cap 10-15%.
4. If actual CPA is 20%+ below cap and budget spends fully, lower cap 5-10%.
5. Never lower cap by more than 10% at once, and avoid adjustments during learning.

Warning signals: <50% spend means cap is far too tight; 50-70% spend means slightly tight; CPA 30%+ below cap means cap may be too loose; CPA above cap for 2+ weeks means market costs exceed target or structure/creative needs work.

### Bid Cap

Meta will not bid above the cap for any individual auction. This is strict and delivery can be unstable.

Use for short promotions, hard cost ceilings, advanced marginal-efficiency tests, or where Cost Cap variance is unacceptable. Avoid for evergreen campaigns, new audiences, unclear breakeven economics, or low-volume campaigns.

Protocol:
1. Start near target CPA.
2. Monitor daily.
3. If spending <80% of budget, raise 10-15%.
4. If spending fully with strong CPA, test lowering by about 5%.

### Minimum ROAS

Meta optimizes for conversion value and a ROAS floor. Use only when accurate conversion values are passed through pixel/CAPI and the business has variable transaction values.

Protocol:
1. Calculate breakeven ROAS as `1 / gross_margin_percent`.
2. Start near breakeven or 10-20% above if conservative.
3. Review weekly.
4. If spending <60% of budget, lower floor by 0.2-0.3x.
5. If achieved ROAS is far above floor and budget spends fully, raise floor by 0.1-0.2x.

Do not use for uniform-value lead generation, missing or inaccurate value data, or new accounts without value-based optimization history.

## Learning Phase Rules

Learning starts after new campaigns/ad sets or significant edits and usually needs about 50 optimization events within 7 days. Performance can be 20-50% worse during learning.

Changes that trigger learning or re-learning include:
- New campaign/ad set.
- Budget change >20%.
- Bid strategy or cap/bid amount change.
- Audience/targeting or optimization event change.
- Major creative removals or disruptive creative mix changes.

During learning, do not change budget, bid, audience, or optimization event unless spend is wildly wrong or the setup is broken. If learning will not complete, diagnose budget, audience size, conversion-event rarity, and fragmented ad sets before changing bids.

## Migration Paths

### Lowest Cost -> Cost Cap

Use after at least 2 weeks of Lowest Cost data. Set the initial Cost Cap to the recent average CPA + ~20%, leave audience/creative/budget unchanged, let learning complete, then adjust gradually.

### Cost Cap -> Bid Cap

Use mainly for time-limited campaigns that need a hard ceiling. Prefer launching a new campaign rather than editing an evergreen campaign in place. Monitor daily and revert after the promotion window.

### Add Minimum ROAS

Use when value tracking is verified. Launch a new value-based campaign, set the floor near breakeven + ~10%, compare total revenue/ROAS against existing campaigns for 14 days, then shift budget only after evidence supports it.

## Portfolio Strategy for Advanced Accounts

| Campaign purpose | Typical strategy | Rationale |
|---|---|---|
| Creative testing | Lowest Cost | Flexible delivery for learning |
| Core scaling | Cost Cap | Predictable economics |
| Promotions/launches | Bid Cap | Hard cost ceiling |
| Variable-value ecommerce | Minimum ROAS | Optimize for value |
| Retargeting small budgets | Lowest Cost | Avoid throttling warm audiences |
| Advantage+ | Lowest Cost or Cost Cap | A+ handles much optimization internally |

## Quick Selection Matrix

| Scenario | Strategy | Starting setting |
|---|---|---|
| New account/no CPA data | Lowest Cost | None |
| Known CPA, want stability | Cost Cap | Target CPA + 15-25% |
| Flash sale | Bid Cap | Target CPA |
| Ecommerce variable AOV | Minimum ROAS | Breakeven ROAS + 10% |
| Retargeting small budget | Lowest Cost | None |
| Scaling proven campaign | Cost Cap | Current CPA + 15% |
| Testing new audience | Lowest Cost | None |

## Warning Signals

| Signal | Duration | Likely action |
|---|---|---|
| CPA 30%+ above target | 2+ weeks post-learning | Raise cap, broaden audience, improve creative, or revisit economics |
| Spend <70% of budget | 5+ days | Raise cap/bid 10-15% |
| Wild CPA swings | During learning | Wait unless setup is broken |
| Wild CPA swings | 2+ weeks post-learning | Audit structure, audience, and creative |
| Spend is $0 | 2+ days | Check cap, policy, budget, billing, audience size |

## Reference Files

- `references/strategy_selection_matrix.md` — Detailed scenarios and edge cases.
- `references/learning_phase.md` — Learning phase triggers, management, and recovery protocols.
