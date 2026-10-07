---
name: meta-ads-budget-methodology
description: Budget allocation, scaling, pacing, and learning-phase framework for Meta Ads.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `budget-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Budget Methodology

## Purpose

Use this reference when allocating Meta Ads budget, deciding whether to scale, diagnosing pacing, or setting budget rules. Budget changes can reset learning and damage profitable campaigns, so make changes deliberately and document dates, pre-change performance, and expected stabilization windows.

## Three-tier allocation model

Divide total budget by campaign role and proof level:

| Tier | Share | Definition | Goal |
|---|---:|---|---|
| Core performers | 60-70% | Profitable for 2+ weeks, at target CPA/ROAS, post-learning, stable delivery | Maximize volume while preserving efficiency |
| Growth candidates | 20-30% | Early promise for 1-2 weeks, within ~20% of target, graduating winners | Prove scalability |
| Experiments | 10-20% | New creative, audiences, bid strategies, structures, or concepts | Find next core performers |

Typical allocation by monthly spend:

| Monthly budget | Core | Growth | Experiments |
|---|---:|---:|---:|
| $5K-15K | 65% | 20% | 15% |
| $15K-50K | 65% | 25% | 10% |
| $50K+ | 70% | 20% | 10% |

Promotion/demotion triggers:
- Promote experiment to growth after 7+ days within 20% of target, learning complete, and 20+ conversions.
- Promote growth to core after 14+ days at/below target, daily spend within 20% of budget, 50+ conversions, and scaling holds.
- Demote core when CPA is 20-30% above target for 7+ days, frequency rises above 3.0, or fatigue signals appear.
- Kill or restructure when CPA is 50%+ above target for 14+ days and creative refresh fails or the audience is saturated.

## Minimum viable budget

Meta needs enough event volume to learn. As a rule of thumb, use 5x target CPA daily for purchase/conversion optimization when possible.

| Bid strategy | Minimum daily budget | Recommended daily budget |
|---|---:|---:|
| Lowest Cost | 1x target CPA | 3-5x target CPA |
| Cost Cap | 3x target CPA | 5-10x target CPA |
| Bid Cap | 3x target CPA | 5-10x target CPA |
| Minimum ROAS | 3x target CPA | 5-10x target CPA |

For CBO, the campaign budget must support all ad sets: recommended minimum is `5x target CPA x number of ad sets`.

## Vertical scaling protocol

**Never increase budget by more than 20% in one adjustment.** Larger increases often reset learning and cause 2-7 days of elevated CPA.

1. Confirm readiness: post-learning, at/below target for 7+ days, daily spend within 20% of budget, frequency <3, stable CTR.
2. Increase budget by 15-20%; change nothing else.
3. Monitor for 3-4 days. A temporary CPA increase of 5-15% can be normal.
4. If CPA returns to baseline, repeat. If CPA stays elevated after 4 days, hold 7 more days before another attempt.
5. If two consecutive increases fail, roll back to the last stable budget, hold 7-14 days, and diagnose fatigue, audience saturation, seasonality, or auction shifts.

Time to double is usually 12-16 days at this cadence; time to 5x is roughly 9-10 weeks.

## Horizontal scaling

Use horizontal scaling when vertical scaling plateaus, frequency exceeds 3.0 on core audiences, new markets/geos are needed, or new creative concepts are ready.

Methods:
- Add new audiences in existing structure with the same creative.
- Duplicate a proven structure for a new market/geo; start around 50% of the proven campaign budget.
- Add missing funnel stages; retargeting often starts at 15-25% of prospecting budget.
- Test Advantage+ Shopping/Catalog-style campaigns alongside manual campaigns at 20-30% of total budget.

Expect new campaigns to run 10-20% higher CPA for the first 2-4 weeks. If performance remains within that range after learning, treat as a valid growth candidate.

## Pacing diagnostics

Healthy pacing means daily spend is usually 80-100% of budget with consistent delivery. Diagnose symptoms as follows:

| Symptom | Likely cause | Fix |
|---|---|---|
| Budget spent by noon | Budget too low for audience size | Increase budget gradually or narrow audience |
| 40-60% spend only | Bid too restrictive or audience too small | Raise cap, switch bid strategy, broaden audience |
| $0 spend | Policy rejection, bid too low, audience size 0 | Check review status, bid, and targeting |
| Large day-to-day swings | Bid Cap, small audience, low budget | Use Cost Cap/Lowest Cost or broaden audience |
| Weekend dips | Natural behavior for some businesses | Adjust only if account data confirms pattern |

Scaling ceiling signals: frequency >3-4 prospecting, CPA rising faster than budget, daily spend swings >40%, conversion volume flat despite increases, or CPM >30% above baseline.

## Scheduling and seasonality

- Pre-warm promotional budgets 1-2 weeks before launch using ≤20% increments.
- During promotions, monitor more frequently; high-traffic days can exhaust budget early.
- Scale down after promotions in 2-3 steps instead of a cliff drop.
- B2B often supports lower Friday/weekend budgets; ecommerce often strengthens Thu-Sun. Adjust only from actual conversion data.
- Q4 often needs +20-40%; Black Friday/Cyber Monday can need +50-100% with pre-warming; January often supports reduced budgets and testing.

## CBO vs ABO

Use CBO when there are 3+ comparable ad sets and Meta can allocate to the best opportunities. Use ABO for controlled tests or guaranteed spend per audience/creative. When a test graduates, consolidate winners into CBO with the combined budget.

## Quick decision flow

```
Is the campaign profitable?
├── Yes: at target? scale 15-20% every 3-4 days if stable; otherwise hold/optimize.
└── No: learning complete?
    ├── No: wait unless spend/quality is clearly broken.
    └── Yes: after 14+ days, kill or restructure if still off target.
```

## Reference files

- `references/scaling_protocols.md` — worked vertical/horizontal scaling examples.
- `references/pacing_diagnostics.md` — delivery issue diagnosis and pacing optimization.
