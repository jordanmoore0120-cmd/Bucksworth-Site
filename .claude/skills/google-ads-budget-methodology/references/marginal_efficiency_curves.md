# Marginal Efficiency Curves

Reference file for understanding and estimating where campaigns sit on their efficiency curves. Loaded by budget-methodology.

## The Marginal Efficiency Concept

Every Google Ads campaign follows an efficiency curve:

- The first dollar spent is the most efficient. It captures the highest-intent users who are actively searching for exactly what you offer.
- Each subsequent dollar is slightly less efficient. It reaches users with slightly lower intent, slightly less relevance, or slightly higher competition.
- Eventually, each additional dollar yields minimal incremental return. The campaign approaches saturation for its targeting and market.

This is not unique to advertising. It is the law of diminishing returns applied to paid media. The practical question is: where on the curve is each campaign right now?

## Estimating Position on the Curve Using Impression Share

Impression share (IS) is the primary proxy for curve position in Search and Shopping campaigns:

| IS Range | Curve Position | Marginal Efficiency | Growth Potential |
|---|---|---|---|
| 0-30% | Early curve | High. Each dollar captures high-value impressions. | Large. Significant untapped demand. |
| 30-60% | Mid curve | Moderate. Good return per dollar, starting to compete harder. | Good. Meaningful room to grow. |
| 60-80% | Late curve | Declining. Each additional % of IS costs more to capture. | Limited. Approaching saturation. |
| 80-95% | Diminishing returns | Low. Significant spend required for small IS gains. | Minimal. Near market ceiling. |
| 95%+ | Near saturation | Very low. Additional spend has almost no incremental impact. | Negligible. |

**The Lost IS breakdown adds critical nuance:**

- **Lost IS (Budget) > Lost IS (Rank)**: the campaign is missing impressions because it runs out of budget. A budget increase will capture more impressions at reasonable efficiency.
- **Lost IS (Rank) > Lost IS (Budget)**: the campaign is missing impressions because Ad Rank is too low. More budget will not solve this. The campaign needs bid, quality score, or relevance improvements.
- **Both high**: the campaign has both budget and quality constraints. Address quality first, then evaluate budget needs.

## Budget Simulation Methodology

Use these directional guidelines to estimate the impact of budget changes. These are approximations, not precise predictions.

**At +10% budget increase:**
- If Lost IS (Budget) is 15% or higher, a 10% budget increase might capture 5-8% more impressions.
- Impact is not linear: you capture the next-easiest impressions first.
- Marginal CPA/ROAS will be close to current average (within 5-10% degradation).

**At +25% budget increase:**
- Diminishing returns begin to accelerate.
- Estimate capturing 50-60% of the theoretical IS headroom.
- Marginal CPA may increase 5-15% above current average.
- Marginal ROAS may decrease 5-15% below current average.

**At +50% budget increase:**
- Significant diminishing returns.
- Estimate capturing 40-50% of theoretical headroom.
- Marginal CPA may increase 10-25% above current average.
- Competitive dynamics become a factor: larger spend may push up auction prices.

**At +100% (doubling) budget:**
- Steep diminishing returns for most campaigns.
- Rarely recommended as a single change. Better to increase incrementally and measure.
- Exception: severely budget-constrained campaigns with Lost IS (Budget) above 40% may absorb a doubling with acceptable efficiency.

**Important caveats:**
- These estimates assume stable competitive conditions and consistent quality scores.
- Seasonal shifts, new competitors, or quality score changes can alter actual results significantly.
- Always frame projections as directional estimates with qualifier language.

## Diminishing Returns Thresholds by Campaign Type

Different campaign types hit diminishing returns at different points:

| Campaign Type | Diminishing Returns Begin (IS) | Steep Diminishing Returns (IS) | Notes |
|---|---|---|---|
| Brand Search | 80% | 95% | High intent, limited audience. Returns stay strong until near-saturation. |
| Non-Brand Search | 50% | 75% | Broader audience, more competition. Efficiency declines earlier. |
| Shopping / Standard | 55% | 80% | Product-level competition. Feed quality affects ceiling. |
| PMax | N/A (no IS metric) | N/A | Use spend-to-CPA/ROAS relationship over time instead. |
| Display (Remarketing) | Frequency-based | Frequency-based | Diminishing returns driven by ad frequency, not IS. Use frequency caps. |
| Display (Prospecting) | Frequency-based | Frequency-based | Broader audience, higher frequency tolerance, but still frequency-limited. |
| YouTube | Frequency-based | Frequency-based | Video view frequency and audience reach determine ceiling. |

## Estimating Diminishing Returns for PMax and Non-IS Campaigns

PMax does not report impression share. For PMax and other campaigns without IS data, use the spend-to-performance relationship over time:

**Method:**
1. Pull weekly spend and CPA/ROAS data for the past 8+ weeks.
2. Plot spend (x-axis) vs. CPA or ROAS (y-axis).
3. Look for the inflection point where increasing spend correlates with worsening CPA/ROAS.

**Thresholds:**
- If CPA increases more than 15% when spend increases more than 20%, the campaign is in diminishing returns territory.
- If ROAS decreases more than 15% when spend increases more than 20%, same conclusion.
- If CPA/ROAS remains stable across spend variation, the campaign has headroom.

**Limitations:**
- Correlation is not causation. External factors (seasonality, competition, creative fatigue) can drive CPA changes independently of budget.
- Minimum 8 weeks of data needed for this analysis to be directional.
- PMax spend distribution across channels complicates interpretation. A CPA increase might reflect PMax shifting spend to less efficient channels (Display, YouTube) rather than true diminishing returns within a single channel.

## Practical Application

When evaluating budget allocation decisions:

1. Calculate IS and Lost IS (Budget vs. Rank) for all eligible campaigns.
2. Plot each campaign's approximate position on the efficiency curve.
3. Identify campaigns with the best marginal efficiency (low IS, high Lost IS Budget, strong current performance).
4. Identify campaigns near saturation (high IS, low Lost IS Budget, or rank-limited).
5. Budget should flow from near-saturation campaigns to high-marginal-efficiency campaigns.
6. For PMax, use the 8-week spend-to-CPA trend as a substitute for IS-based analysis.

This analysis feeds directly into the reallocation framework (see `reallocation-framework.md`).
