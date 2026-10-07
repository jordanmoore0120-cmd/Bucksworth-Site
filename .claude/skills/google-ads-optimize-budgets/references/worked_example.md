# Worked Example: Budget Optimization for IronCore Fitness

Fictional example walking through the complete optimize_budgets workflow for an eCommerce fitness equipment retailer.

## Account Context

**Company:** IronCore Fitness (fictional)
**Business model:** eCommerce, DTC fitness equipment
**Monthly Google Ads budget:** $15,000
**Primary KPI:** ROAS (target: 3.0x)
**Account maturity:** Established (280 conversions/month)
**Currency:** USD

## Step 1-2: Efficiency Ranking

Six campaigns, ranked by ROAS:

| Campaign | Type | 30d Spend | Daily Budget | Conv | ROAS | IS | Lost IS (Budget) | Lost IS (Rank) | Classification |
|---|---|---|---|---|---|---|---|---|---|
| Non-Brand Search | Search | $2,800 | $100 | 62 | 5.2x | 35% | 28% | 37% | Efficient + Constrained |
| Shopping Standard | Shopping | $3,200 | $110 | 78 | 4.1x | 50% | 18% | 32% | Efficient + Constrained |
| PMax | PMax | $4,000 | $135 | 72 | 3.8x | N/A | N/A | N/A | Efficient + Unconstrained |
| Display Remarketing | Display | $1,500 | $55 | 30 | 2.5x | N/A | N/A | N/A | Efficient + Unconstrained |
| Branded Search | Search | $2,000 | $70 | 85 | 2.1x | 85% | 5% | 10% | Efficient + Unconstrained |
| Display Prospecting | Display | $1,500 | $55 | 8 | 0.8x | N/A | N/A | N/A | Inefficient + Spending |

**Account totals:** $15,000 spend, 335 conversions, 3.3x blended ROAS

### Key Observations from Efficiency Ranking

- **Non-Brand Search** is the standout opportunity: highest ROAS (5.2x) but only 35% IS with 28% Lost IS (Budget). Severely budget-constrained.
- **Shopping Standard** is also efficient and constrained: 4.1x ROAS at 50% IS with 18% Lost IS (Budget).
- **PMax** is efficient and unconstrained. At 3.8x ROAS it is performing well. No IS data available, but weekly spend-to-ROAS trend shows stable efficiency over 8 weeks, suggesting headroom.
- **Display Remarketing** is efficient at 2.5x ROAS but frequency-limited (not budget-limited). Increasing budget would increase frequency and reduce efficiency.
- **Branded Search** is efficient at 2.1x ROAS but already at 85% IS. Only 5% Lost IS (Budget), meaning it is not meaningfully budget-constrained. Near the diminishing returns zone.
- **Display Prospecting** is the clear underperformer: 0.8x ROAS (below 1.0x means losing money), spending its full budget. This is the primary reallocation source.

## Step 3: Constraint Analysis

| Campaign | IS | Lost IS (Budget) | Lost IS (Rank) | Budget Capped? | Constraint Type |
|---|---|---|---|---|---|
| Non-Brand Search | 35% | 28% | 37% | Yes (30/30 days) | Budget (primary), Rank (secondary) |
| Shopping Standard | 50% | 18% | 32% | Yes (22/30 days) | Budget (primary), Rank (secondary) |
| PMax | N/A | N/A | N/A | No | None detected |
| Display Remarketing | N/A | N/A | N/A | No | Frequency-limited |
| Branded Search | 85% | 5% | 10% | No | Near saturation |
| Display Prospecting | N/A | N/A | N/A | Yes (28/30 days) | None beneficial (inefficient) |

**Note on Non-Brand Search:** Lost IS (Rank) is 37%, higher than Lost IS (Budget) at 28%. This means even after solving the budget constraint, rank issues will limit further growth. A budget increase will help capture the budget-lost impressions, but the campaign also needs quality score and bid optimization for full potential.

## Step 4: Marginal Efficiency Estimation

| Campaign | Curve Position | Marginal Efficiency | Headroom |
|---|---|---|---|
| Non-Brand Search | Early-mid (35% IS) | High | Large, but partially rank-limited |
| Shopping Standard | Mid (50% IS) | Moderate-high | Good, with some rank limitation |
| PMax | Unknown (no IS) | Appears stable (8-week trend flat) | Likely some, but uncertain |
| Display Remarketing | Frequency ceiling | Low for additional spend | Minimal |
| Branded Search | Late (85% IS) | Low | Minimal |
| Display Prospecting | N/A (inefficient) | Negative (losing money) | Not applicable |

## Step 5: Reallocation Scenarios

### Conservative Scenario

Shift $500/month from Display Prospecting to Non-Brand Search. Minimal disruption.

| Campaign | Current Daily | Proposed Daily | Change | Projected ROAS |
|---|---|---|---|---|
| Display Prospecting | $55 | $38 | -$17/day (-31%) | 0.8x (unchanged) |
| Non-Brand Search | $100 | $117 | +$17/day (+17%) | 4.8x (slight decline from 5.2x) |

**Monthly budget change:** $0 net (pure reallocation)
**Projected impact:** +8 incremental conversions/month at estimated 4.5-5.0x marginal ROAS
**Risk:** Low. Display Prospecting is losing money, so reducing it improves efficiency regardless. Non-Brand Search has clear budget headroom.

### Moderate Scenario (Recommended)

Shift $1,500/month total: $1,000 from Display Prospecting and $500 from Branded Search. Distribute to Non-Brand Search ($1,000) and Shopping ($500).

| Campaign | Current Daily | Proposed Daily | Change | Projected ROAS |
|---|---|---|---|---|
| Display Prospecting | $55 | $22 | -$33/day (-60%) | 0.8x |
| Branded Search | $70 | $53 | -$17/day (-24%) | 2.2x (slight improvement, less waste at margins) |
| Non-Brand Search | $100 | $133 | +$33/day (+33%) | 4.5x (moderate decline from 5.2x) |
| Shopping Standard | $110 | $127 | +$17/day (+15%) | 3.8x (slight decline from 4.1x) |

**Monthly budget change:** $0 net (pure reallocation)
**Projected impact:** +18 incremental conversions/month. Account ROAS projected to improve from 3.3x to approximately 3.5x.
**Risk:** Medium-low. Reducing Branded Search by 24% is modest and it is near saturation anyway. Display Prospecting cut is significant but the campaign is unprofitable. Non-Brand Search budget increase of 33% is meaningful but supported by 28% Lost IS (Budget).

**Why this is recommended:** it addresses the two clearest inefficiencies (Display Prospecting losing money, Branded Search near saturation) and funds the two clearest opportunities (Non-Brand Search and Shopping both efficient and constrained). The projected account ROAS improvement is meaningful without taking excessive risk.

### Aggressive Scenario

Pause Display Prospecting entirely. Shift $2,000 to Non-Brand Search, $1,000 to Shopping. Reduce Branded Search by $500.

| Campaign | Current Daily | Proposed Daily | Change | Projected ROAS |
|---|---|---|---|---|
| Display Prospecting | $55 | $0 | -$55/day (paused) | N/A |
| Branded Search | $70 | $53 | -$17/day (-24%) | 2.2x |
| Non-Brand Search | $100 | $166 | +$66/day (+66%) | 4.0x (notable decline from 5.2x) |
| Shopping Standard | $110 | $143 | +$33/day (+30%) | 3.6x (moderate decline from 4.1x) |

**Monthly budget change:** -$500/month (savings from pause exceeds reallocation)
**Projected impact:** +25 incremental conversions/month. Account ROAS projected at approximately 3.6x.
**Risk:** Medium-high. Pausing Display Prospecting entirely removes all prospecting pipeline. The 66% budget increase on Non-Brand Search is aggressive and may push into diminishing returns faster than projected. Additionally, Non-Brand Search has significant Lost IS (Rank) at 37%, which means not all of the additional budget will be captured efficiently.

**Key tradeoff:** higher short-term conversion volume and ROAS, but zero prospecting means no new audience pipeline. This could reduce remarketing pool quality over 4-8 weeks.

## Recommendation Summary

The **Moderate scenario** is recommended because:

1. It addresses both clear inefficiencies (money-losing Display Prospecting and near-saturation Branded Search)
2. It funds both clear opportunities (budget-constrained Non-Brand Search and Shopping)
3. It maintains some prospecting presence to feed the remarketing funnel
4. Projected impact (+18 conversions, ROAS from 3.3x to 3.5x) is meaningful
5. Risk is manageable, with no single campaign receiving more than a 33% budget change

**Follow-up actions after implementation:**
- Monitor Non-Brand Search IS progression over 2 weeks. If IS increases from 35% toward 45% with stable ROAS, the reallocation is working.
- Monitor Shopping IS similarly.
- Review Display Prospecting at reduced budget after 2 weeks. If ROAS improves above 1.0x at lower spend, the campaign may be more efficient at smaller scale. If still below 1.0x, consider pausing entirely (move to Aggressive).
- Begin quality score optimization on Non-Brand Search to address the 37% Lost IS (Rank) as the next optimization lever after this budget reallocation.
