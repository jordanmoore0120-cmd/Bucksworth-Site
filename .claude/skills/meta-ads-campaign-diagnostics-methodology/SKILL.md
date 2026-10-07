---
name: meta-ads-campaign-diagnostics-methodology
description: Reference methodology for diagnosing underperforming Meta Ads campaigns across measurement, delivery, audience, creative, landing page, budget, bidding, and external factors.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `campaign-diagnostics-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Campaign Diagnostics Methodology

Reference skill for diagnosing underperforming Meta Ads campaigns. Use it to move from “this campaign is not working” to a supported root cause and one focused fix.

## Core principle

**Diagnose before you treat.** Raising budget does not fix creative fatigue; changing audiences does not fix measurement; bid changes do not fix landing-page friction. Work through the branches in order because earlier failures make later metrics unreliable.

## 8-branch diagnostic tree

1. **Measurement:** Is the problem real?
2. **Delivery:** Is the campaign serving enough?
3. **Audience:** Is targeting too narrow, saturated, overlapping, or misallocated?
4. **Creative:** Are ads resonating or fatigued?
5. **Landing page:** Is post-click conversion the bottleneck?
6. **Budget:** Is spend capped, fragmented, or disrupting learning?
7. **Bidding:** Is the bid strategy appropriate for maturity and target economics?
8. **External:** Is seasonality, competition, platform policy, or privacy change affecting results?

## Branch 1: Measurement

Pull pixel status, CAPI status, event match quality, attribution settings, event deduplication, and delayed-attribution comparisons. Red flags include pixel missing on key pages, CAPI not active, EMQ below 6.0, duplicate events, attribution changes in the last 14 days, or 1-day vs 7-day conversion gaps above 20%.

Resolution: fix pixel/CAPI, deduplicate with shared event IDs, improve match parameters, document attribution changes, then wait 48-72 hours before re-diagnosing.

## Branch 2: Delivery

Check learning status, audience size, spend vs budget, account spending limits, disapprovals, and delivery warnings. Red flags include Learning Limited for 7+ days, prospecting audience below 1M, spend below 50% of budget for 3+ days, billing/account caps, rejected ads, or inability to reach 50 optimization events/week.

Resolution: consolidate ad sets, broaden or simplify audiences, move to an earlier-funnel event if necessary, fix billing/disapprovals, and avoid edits that reset learning.

## Branch 3: Audience

Check frequency, audience overlap, audience size, Advantage+ expansion, demographics, and placement breakdowns. Red flags include prospecting frequency above 3.0, retargeting frequency above 7.0, overlap above 30%, non-B2B prospecting audiences below 500K, expansion taking 50%+ of spend at poor CPA, or unintended demo concentration.

Resolution: broaden or consolidate, use exclusions only when truly distinct, add fresh seed audiences, move to Advantage+ Audience where appropriate, and pair audience changes with creative refresh if saturation is present.

## Branch 4: Creative

Check CTR trends, hook rate, ad relevance diagnostics, creative age, format distribution, and visual/text quality. Red flags include CTR down more than 10% from peak, hook rate below 25%, Below Average quality/engagement/conversion rankings, no fresh creative after 30 days, or one format taking 80%+ of spend.

Resolution: launch 3-5 new concepts, test new hooks/formats, reduce spend on fatigued ads while replacements ramp, improve ad quality, and treat conversion-ranking issues as a possible landing-page signal.

## Branch 5: Landing page

Check bounce rate, mobile load time, conversion rate, mobile usability, redirect chains, and message match. Red flags include paid bounce rate above 70%, mobile load time above 3 seconds, paid CVR below 50% of site average, more than 2 redirects, ad promise/headline mismatch, long lead forms, or non-responsive pages.

Resolution: speed up mobile, simplify the page/form, improve above-fold message match and CTA visibility, remove unnecessary redirects/popups, and monitor for 7-14 days.

## Branch 6: Budget

Check spend vs budget, learning status, active ad set count, CBO/ABO setup, and recent budget changes. Red flags include consistently spending 95%+ of budget, Learning Limited from insufficient budget, more than 5 ad sets splitting CBO budget, budget changes above 20% in 7 days, or ABO with ad sets spending below 20% of budget.

Resolution: scale efficient campaigns gradually (often 20% every 48-72 hours), consolidate ad sets, ensure each ad set has enough budget for about 50 weekly optimization events, and avoid frequent large edits.

## Branch 7: Bidding

Check bid strategy, CPA vs target, spend vs budget, campaign age, and weekly conversions. Red flags include CPA 30%+ above target with caps, spend below 50% with a cost cap, volatile CPA on Lowest Cost, zero conversions on Bid Cap, ROAS Target below 10 conversions/week, or new campaigns using restrictive caps.

Strategy fit:

| Stage | Typical strategy | Rationale |
|---|---|---|
| Launch | Lowest Cost, no cap | Let Meta explore and gather data. |
| Learning | Lowest Cost or generous Cost Cap | A cap around 1.5x target can preserve delivery. |
| Stable | Cost Cap near target | Control efficiency while maintaining scale. |
| Scaling | Cost Cap or Bid Cap | Use Bid Cap only with strong clearing-price data. |
| Value optimization | ROAS Target | Requires sufficient purchase value data. |

Resolution: relax restrictive caps, test uncapped delivery briefly to find natural CPA, avoid Bid Cap without data, and do not use ROAS Target without enough purchase/value volume.

## Branch 8: External

Check account-wide CPM trends, Meta Ad Library competitors, platform announcements, seasonal calendar, industry benchmarks, and privacy/OS changes. Red flags include account-wide CPM up 20%+ in 14 days, a major competitor running many ads, policy changes affecting the vertical, known seasonal pressure, or a major iOS/privacy update.

Resolution: separate market-wide pressure from account issues, adjust targets temporarily, focus spend on highest-intent audiences and best creative during high-CPM periods, monitor competitors, and keep CAPI healthy.

## Diagnostic workflow

1. Identify the symptom and baseline: CPA, ROAS, volume, CPC, CTR, spend, or learning status.
2. Use rolling 7-day windows; do not diagnose from one day.
3. Walk branches in order and stop at the first supported root cause.
4. Implement one focused fix, then monitor before changing another branch.
5. If the fix fails, continue to the next branch with fresh evidence.

## Symptom routing

| Symptom | First branches |
|---|---|
| CPA suddenly spiked across campaigns | Measurement, then External |
| CPA gradually increasing | Creative, then Audience |
| Spending far under budget | Delivery, then Bidding |
| Good clicks but no conversions | Landing Page, then Measurement |
| Conversions dropped suddenly | Measurement, then External |
| CPM spiked | Audience, then External |
| CTR declining | Creative, then Audience |
| New campaign stuck in learning | Budget, then Delivery |
| ROAS below target | Bidding, then Landing Page |

## Multi-branch patterns

- **Creative fatigue + audience saturation:** CTR down and frequency >3. Launch new creative first, then broaden or consolidate audience.
- **Measurement + landing page:** clicks stable but conversions down. Verify measurement first; if clean, inspect landing page.
- **Budget + bidding:** spend below 70% with cost cap. Decide whether the cap is realistic before restructuring budgets.

## Reference files

- `references/diagnostic_tree.md` — Full visual decision tree.
- `references/common_issues.md` — Common Meta Ads issues and solutions.
- `references/delivery_troubleshooting.md` — Delivery-specific troubleshooting.
