# Budget Reallocation Framework

Step-by-step methodology for reallocating Google Ads budget across campaigns. This is a reference file loaded by budget-methodology.

## Step 1: Identify Campaign Efficiency

For each campaign in the account, calculate the primary KPI efficiency metric:
- **Lead gen accounts**: Cost per Acquisition (CPA). Lower is better.
- **eCommerce accounts**: Return on Ad Spend (ROAS). Higher is better.
- **Hybrid accounts**: use the primary KPI defined in account-conventions.

Rank all campaigns from most efficient to least efficient.

Classify each campaign into one of three categories:

| Classification | Definition | Example |
|---|---|---|
| **Efficient + Constrained** | Good KPI results, limited by budget. Campaign could produce more if it had more to spend. | 3.2x ROAS, Lost IS (Budget) = 22% |
| **Efficient + Unconstrained** | Good KPI results, not budget-limited. Campaign is spending what it needs. | 4.1x ROAS, Lost IS (Budget) = 3% |
| **Inefficient + Spending** | Poor KPI results, spending its budget. Budget is being consumed without adequate return. | 0.7x ROAS, spending 95% of daily budget |

This classification is the foundation for all reallocation decisions.

## Step 2: Check Constraint Signals

For each campaign, examine the following constraint indicators:

**Lost Impression Share (Budget)**
- Greater than 10%: campaign is budget-constrained. It is missing impressions because budget runs out.
- Greater than 25%: severely constrained. Significant opportunity is being missed.
- Less than 5%: not meaningfully budget-constrained.

**Daily Budget Cap**
- If campaign spend equals daily budget on most days (5+ of 7), it is budget-capped.
- If campaign routinely exhausts budget before end of day, it is severely capped.
- Check the hour-of-day report: if impressions drop to zero midday, budget is running out.

**Budget Pacing**
- Compare daily spend to daily budget over the past 14 days.
- Consistent spend at or near budget cap = constrained.
- Spend well below budget = not constrained (may indicate other issues: bids, targeting, demand).

**Critical: Distinguish Budget-Limited from Rank-Limited**
- Lost IS (Budget): impressions lost because budget ran out. Fixable with more budget.
- Lost IS (Rank): impressions lost because Ad Rank was too low (bid, quality score, relevance). NOT fixable with more budget alone.
- If Lost IS (Rank) exceeds Lost IS (Budget), increasing budget will not help. The campaign needs bid or quality improvements first.
- Always check both metrics before recommending a budget increase.

## Step 3: Identify Reallocation Candidates

**Source campaigns (take budget from):**
- Inefficient campaigns with poor KPI performance
- Campaigns with diminishing returns (high IS, high spend, declining marginal efficiency)
- Campaigns with low strategic priority that are consuming budget without proportional impact
- Campaigns with overlapping targeting (cannibalizing more efficient campaigns)

**Destination campaigns (send budget to):**
- Efficient + budget-constrained campaigns (the primary reallocation target)
- New campaigns that need runway to exit learning period
- Strategic priority campaigns that need funding for a defined reason (seasonal push, launch, competitive defense)

**Never reallocate to:**
- A rank-limited campaign. More budget will not be spent efficiently.
- A campaign in learning period (unless it needs minimum viable budget to complete learning).
- A campaign with no conversion tracking or broken tracking.

## Step 4: Model Projected Impact

For each proposed reallocation, estimate the marginal impact at the new budget level.

**Using impression share as a proxy:**
- A campaign at 60% IS with strong ROAS has room to grow. Increasing budget could capture some of the 40% lost impressions.
- A campaign at 90% IS is near saturation. Budget increase will yield minimal incremental impressions.
- IS headroom is not linear. Capturing the next 10% of IS costs more than the previous 10%.

**Estimation approach:**
- If Lost IS (Budget) is 20% and you increase budget by 15%, estimate capturing roughly 8-12% of the lost impressions (not the full 15%, due to competition and auction dynamics).
- Apply the campaign's current conversion rate to estimated incremental impressions to project incremental conversions.
- Apply the campaign's current CPA/ROAS to estimate incremental cost, noting that marginal efficiency will be slightly lower than average efficiency.

**Acknowledge uncertainty:**
- Projected impact is an estimate, not a guarantee.
- Competitive dynamics, seasonality, and quality score changes can alter actual results.
- Always present projections with qualifier language: "projected," "estimated," "based on current trends."
- Provide a range rather than a point estimate when possible.

## Step 5: Present Reallocation Options

Present 2-3 scenarios for the reallocation:

**Conservative scenario:**
- Minimal changes. Shift budget only from clearly inefficient campaigns to clearly constrained ones.
- Lowest risk. Smallest projected impact.
- Appropriate when data is limited or confidence in estimates is low.

**Moderate scenario (usually recommended):**
- Meaningful shifts. May reduce budget on mediocre-performing campaigns, not just clearly inefficient ones.
- Balanced risk and projected impact.
- Appropriate for most situations with reasonable data confidence.

**Aggressive scenario:**
- Significant shifts. May pause or deeply cut underperforming campaigns.
- Highest projected impact but highest risk. May sacrifice pipeline or strategic presence.
- Appropriate when there is strong data confidence and clear efficiency gaps.

For each scenario, show:
- Per-campaign budget changes (current vs. proposed)
- Projected account-level impact (total conversions, total CPA/ROAS)
- Risk assessment (what could go wrong, what is being sacrificed)

## Reallocation Constraints

These constraints apply to all reallocation decisions:

**Minimum viable spend:**
- Do not reduce a campaign below the budget threshold where its bidding strategy stops functioning.
- Smart Bidding campaigns need enough daily budget to allow the algorithm to find conversions. Rule of thumb: daily budget should be at least 2-3x target CPA or sufficient for the algorithm to test and learn.
- PMax requires ~$30-50/day minimum to distribute spend across channels effectively.

**Learning period protection:**
- Do not change budget by more than 20% on a campaign that is in learning period. Budget changes can reset learning.
- If a campaign recently exited learning, allow 2+ weeks of stable performance before making budget changes.

**Strategic campaigns:**
- Some campaigns exist for strategic reasons regardless of direct efficiency: brand defense, competitive conquesting, compliance-required advertising.
- Flag these campaigns in the analysis. Do not include them as reallocation sources without explicit approval.
- Account-conventions may define which campaigns are strategic holdouts.

**Shared budget considerations:**
- If campaigns share a Google Ads shared budget, reallocating between them requires splitting them into individual budgets first.
- Alternatively, remove one campaign from the shared budget to control allocation.

## Building the Case for Incremental Budget

When all efficient campaigns are constrained and there are no good reallocation sources, the answer is not internal reallocation but additional budget.

**How to build the case:**
1. Show the efficient + constrained campaigns with their current performance and Lost IS (Budget).
2. Model what additional budget would yield at estimated marginal efficiency.
3. Frame it as: "For additional $X/month in spend, projected incremental Y conversions at $Z CPA."
4. Compare the incremental CPA to the account average. If incremental CPA is within 20% of average, the investment is sound.
5. Show diminishing returns: model what $1K, $3K, and $5K incremental would each yield. The declining marginal return at higher increments justifies the recommended amount.

**Always use qualifier language:**
- "Projected" not "will produce"
- "Estimated" not "guaranteed"
- "Based on current trends" not "definitively"

---

## Campaign Classification Linked to KPI Targets

The diminishing returns classification uses the account's configured KPI targets and flag thresholds from account-conventions:

| Classification | Signal | Linked To |
|---|---|---|
| **Constrained-Efficient** | Lost IS (Budget) >15% AND average CPA below `primary_kpi_target` | Campaign has room to grow efficiently |
| **Efficient-Near-Ceiling** | Lost IS (Budget) 5-15% AND average CPA near `primary_kpi_target` | Monitor. Small increases may work. |
| **Diminishing Returns** | Lost IS (Budget) <5% AND marginal CPA above `flag_thresholds.warning` | Take budget from here. Efficient ceiling reached. |
| **Rank-Constrained** | Lost IS (Rank) >15% regardless of budget IS | Budget won't help. Quality Score, bid, or relevance problem. |

Present the classification with evidence at Checkpoint C3, showing how each campaign maps to the KPI target.
