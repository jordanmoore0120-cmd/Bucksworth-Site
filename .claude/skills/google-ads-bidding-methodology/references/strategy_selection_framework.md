# Strategy Selection Framework

Complete decision framework for mapping business objective, conversion volume, and account maturity to the appropriate Google Ads bidding strategy.

---

## Strategy Profiles

### Manual CPC

- **Minimum conversions:** None
- **Best for:** New campaigns, testing new keywords/markets, exact bid control, brand defense with predictable CPCs, high-value single conversions
- **Account maturity:** Nascent (also appropriate at any maturity for specific use cases)
- **How it works:** You set the maximum CPC for each keyword or ad group. No algorithmic optimization. Full control, full responsibility.
- **Key consideration:** Requires active management. Setting bids and forgetting them leads to either overspend or lost impression share.
- **Detailed use cases:** See `manual-cpc-use-cases.md`

### Maximize Clicks

- **Minimum conversions:** None
- **Best for:** Traffic generation, data collection phases, new keyword/market testing where click volume matters more than conversion efficiency
- **Account maturity:** Nascent
- **How it works:** Google sets bids to get the most clicks within your budget. No conversion optimization.
- **Key configuration:** Always set a max CPC cap. Without it, Google may bid $20+ for a single click to maximize total clicks. Set the cap at 1.5-2x your expected average CPC for the keyword set.
- **When to graduate:** Once the campaign generates 15+ conversions/month for 2+ consecutive months, test Maximize Conversions.

### Maximize Conversions (No Target)

- **Minimum conversions:** None required, but 5+ recommended for the algorithm to learn effectively
- **Best for:** Volume priority with no CPA constraint. Accounts transitioning from manual to automated bidding.
- **Account maturity:** Nascent to Developing
- **How it works:** Google sets bids to get the most conversions within your budget. No CPA target means the algorithm has no cost constraint, only a budget constraint.
- **Key consideration:** CPA can be volatile. The algorithm will chase any conversion opportunity regardless of cost, limited only by daily budget. This is acceptable during data collection but not sustainable for efficiency-focused accounts.
- **When to graduate:** Once the campaign has 15-30 conversions/month at a measurable CPA, add a tCPA target (set 15-20% above current actual CPA).

### Maximize Conversions + tCPA

- **Minimum conversions:** 15-30/month for stability. Google's official recommendation is 15, but 30+ produces more consistent results.
- **Best for:** Lead generation, service businesses, and any campaign where cost per acquisition is the primary KPI
- **Account maturity:** Developing to Established
- **How it works:** Google targets a specific cost per conversion. It will throttle bids when the CPA target constrains it, which can reduce volume.
- **Key configuration:** Set the initial tCPA target 15-20% above the current actual CPA. Setting the target at or below current CPA immediately suppresses volume as the algorithm tries to find cheaper conversions. Tighten the target gradually (5-10% every 2-4 weeks) as the algorithm optimizes.
- **Warning signs:** If actual CPA is consistently 30%+ above target, the target is too aggressive. If volume drops significantly after adding a target, the target is constraining delivery.

### Maximize Conversion Value (No Target)

- **Minimum conversions:** None required, but conversion value data must be present
- **Best for:** eCommerce accounts prioritizing revenue without a ROAS floor. Accounts establishing value signal before adding a tROAS target.
- **Account maturity:** Developing
- **How it works:** Google sets bids to maximize total conversion value within the budget. No ROAS target means the algorithm pursues any positive-value conversion regardless of efficiency.
- **Key consideration:** Requires meaningful conversion value data. If all conversions have the same value (e.g., all set to $1), this strategy behaves identically to Maximize Conversions.
- **When to graduate:** Once conversion value data is validated as accurate and the campaign has 30-50 conversions/month, add a tROAS target (set 15-20% below current actual ROAS).

### Maximize Conversion Value + tROAS

- **Minimum conversions:** 30-50/month for stability. Higher volume produces more predictable results.
- **Best for:** eCommerce, DTC brands, and any campaign where return on ad spend is the primary KPI
- **Account maturity:** Established
- **How it works:** Google targets a specific return on ad spend. It adjusts bids to hit the ROAS target, which means it may reduce spend on lower-value conversions.
- **Key configuration:** Set the initial tROAS target 15-20% below the current actual ROAS. Example: if current ROAS is 5.0x, start with a target of 4.0-4.25x. Aggressive targets suppress volume. Tighten gradually.
- **Warning signs:** If actual ROAS is consistently 30%+ below target, the target is too aggressive. If spend drops significantly after adding the target, the algorithm is finding too few opportunities that meet the efficiency threshold.

### Value-Based Bidding (VBB)

- **Minimum conversions:** 50-100/month with reliable, variable value data
- **Best for:** Accounts where conversion values vary meaningfully and accurate profit/margin data is available. eCommerce with variable AOV, lead gen with scored leads, SaaS with variable contract values.
- **Account maturity:** Advanced
- **How it works:** Extends Maximize Conversion Value + tROAS by incorporating profit margins, predicted LTV, or lead quality scores into the value signal. The algorithm optimizes for business profit, not just revenue.
- **Requirements:** Dynamic conversion values reflecting actual business value, conversion value rules configured, sufficient volume for the algorithm to learn value patterns, and a reliable data pipeline (enhanced conversions, offline import, or CRM integration).
- **Key consideration:** VBB is not a strategy you "turn on." It is a data infrastructure project. The accuracy of your value signal determines the quality of optimization.

### Target Impression Share

- **Minimum conversions:** None (not a conversion strategy)
- **Best for:** Brand defense, competitive visibility, awareness campaigns, regulatory compliance requirements for visibility
- **Account maturity:** Any (purpose-dependent, not maturity-dependent)
- **How it works:** Google sets bids to achieve a target impression share at a specified position (anywhere on page, top of page, or absolute top of page).
- **Key configuration:** Always set a max CPC cap. This is non-negotiable. Without it, Google will bid any amount to hit the IS target.
- **Detailed framework:** See `visibility-bidding.md`

---

## Decision Tree

Follow these five questions in order to identify the appropriate strategy:

### Q1: What is the business objective?

| Objective | Strategy Path |
|---|---|
| Brand visibility/defense | Target Impression Share |
| Traffic/data collection | Maximize Clicks |
| Conversion volume (leads, signups) | Conversion-based strategies (Q2) |
| Revenue/ROAS | Value-based strategies (Q2) |
| Profit/margin optimization | VBB path (Q2) |

### Q2: How many monthly conversions does the campaign generate?

| Volume | Available Strategies |
|---|---|
| <5/month | Manual CPC, Maximize Clicks, or Maximize Conversions (no target) |
| 5-14/month | Maximize Conversions (no target) or Manual CPC with bid adjustments |
| 15-29/month | Maximize Conversions + tCPA (set conservatively) or Max Conv Value (no target) |
| 30-49/month | tCPA or tROAS (targets set conservatively) |
| 50-99/month | tCPA, tROAS, or begin VBB evaluation |
| 100+/month | Full strategy flexibility including VBB and portfolio strategies |

### Q3: Is conversion value data accurate and dynamic?

| Answer | Implication |
|---|---|
| No value data | Use conversion-count strategies (Max Conversions, tCPA) |
| Static/placeholder values | Use conversion-count strategies. Static values make value-based strategies meaningless. |
| Accurate revenue data | Eligible for Max Conv Value, tROAS |
| Accurate margin/profit data | Eligible for VBB |

### Q4: Is this brand or non-brand?

| Type | Consideration |
|---|---|
| Brand | Manual CPC or Target IS may be appropriate regardless of volume. Brand CPCs are predictable. Automation adds limited value. |
| Non-brand | Follow the volume-based recommendation from Q2 |
| Competitor/conquest | Manual CPC often preferred for precise cost control on expensive competitive terms |

### Q5: What is the current strategy and how is it performing?

If the current strategy matches the recommendation from Q1-Q4 and is performing within target, do not change it. Strategy changes trigger learning periods and introduce risk. Only change when there is a clear rationale.

---

## When to Change Strategies

**Change when:**
- Consistent overshoot or undershoot of targets for 30+ days with no improvement trend
- Conversion volume has crossed a threshold boundary (15, 30, 50, 100) and sustained for 2+ months
- Business objective has fundamentally changed (e.g., shifted from volume to efficiency)
- Current strategy cannot be supported by the data (e.g., tCPA with <10 conversions/month)

**Do NOT change when:**
- During an active learning period (wait for it to complete)
- Performance currently meets or exceeds targets
- A recent major account change is still settling (new landing page, new creative, seasonal shift)
- Based on less than 30 days of data
- Because "everyone says tROAS is better" without the data to support it

---

## Evaluation Criteria for Current Strategy

When auditing an existing strategy, assess these five dimensions:

1. **Volume sufficiency:** Does the campaign have enough conversions for the strategy to function? (Minimum thresholds per strategy listed above)
2. **Target realism:** Is the tCPA/tROAS target achievable based on actual performance? (Compare target to 30/60/90-day actuals)
3. **Learning period status:** Is the campaign in learning, recently exited learning, or stable? (Check bidding strategy status)
4. **Conversion accuracy:** Are the conversions being counted accurately? (Duplicate counting, micro-conversion inflation, attribution window alignment)
5. **Objective alignment:** Does the strategy match the stated business objective? (e.g., tCPA for a brand where visibility matters more than CPA)
