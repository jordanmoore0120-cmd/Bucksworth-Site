# Portfolio Bidding Strategies

Portfolio bidding groups multiple campaigns under a single shared bidding target. The algorithm optimizes across the entire portfolio, allowing individual campaigns to over- or under-perform the target as long as the portfolio average meets the goal.

---

## How Portfolio Bidding Works

In standard (non-portfolio) bidding, each campaign has its own target. A campaign with a $50 tCPA target must average $50 CPA on its own. In portfolio bidding, the $50 target applies to the combined performance of all campaigns in the portfolio. One campaign might deliver $35 CPA while another delivers $65 CPA, and the portfolio still hits $50.

This flexibility is the core value proposition. The algorithm can pursue high-value opportunities in one campaign (even if expensive) while maintaining efficiency in another, producing a better total outcome than each campaign optimizing in isolation.

---

## Types of Portfolio Strategies

### Portfolio tCPA

Shared cost-per-acquisition target across campaigns.

Best for: lead generation accounts with multiple campaigns targeting the same conversion goal through different keyword sets, audiences, or match types.

Example: three Search campaigns targeting "enterprise CRM" (exact match), "CRM software" (phrase match), and "business management software" (broad match) all driving the same "demo request" conversion. The broad match campaign might have higher CPA but captures incremental volume the exact match campaign cannot reach.

### Portfolio tROAS

Shared return-on-ad-spend target across campaigns.

Best for: eCommerce accounts with multiple Shopping or PMax campaigns segmented by product category, margin tier, or audience. Campaigns selling high-margin products can subsidize campaigns selling lower-margin products within the same portfolio.

Example: two Shopping campaigns, one for high-margin accessories (naturally high ROAS) and one for lower-margin electronics (naturally lower ROAS). Portfolio tROAS lets the algorithm balance spend across both to hit the overall ROAS target.

### Portfolio Maximize Conversions

Shared conversion volume optimization without a target. Less common but useful when maximum coverage across campaigns matters more than per-campaign efficiency.

Best for: data collection phases where volume across multiple campaign types matters more than cost.

---

## Shared Budgets with Portfolio Bidding

Portfolio bidding can be paired with shared budgets for maximum flexibility. When combined:

- The algorithm shifts both bids AND budget across campaigns simultaneously
- Campaigns with more opportunity receive more budget automatically
- Total spend is capped at the shared budget level

**Caution:** Shared budgets make per-campaign pacing harder to monitor. A single high-opportunity campaign can consume the majority of the shared budget, starving other campaigns. Use shared budgets only when you genuinely want the algorithm to allocate spend freely.

**Recommendation:** Start with portfolio bidding (shared target) but individual budgets. This gives the algorithm target flexibility while maintaining budget control per campaign. Move to shared budgets only after observing how the portfolio distributes performance.

---

## Campaign Grouping Rules

Correct grouping is the most important factor in portfolio bidding success. Incorrect grouping produces worse results than individual bidding.

### Group These Together

- Campaigns targeting the **same conversion goal** (same conversion action)
- Campaigns with **similar conversion values** (within 3x of each other)
- Campaigns in the **same business unit or product line**
- Campaigns at **similar stages** (all acquisition, or all remarketing)

### Never Group These Together

- **Brand and non-brand campaigns.** Fundamentally different economics. Brand has high conversion rates and low CPCs. Non-brand has lower conversion rates and higher CPCs. Grouping them produces a blended target that is too aggressive for non-brand and too loose for brand.
- **Campaigns with different conversion goals.** A portfolio targeting "purchases" should not include a campaign optimizing for "newsletter signups."
- **Campaigns with wildly different conversion values.** A campaign driving $5 conversions and a campaign driving $5,000 conversions in the same portfolio will produce erratic optimization.
- **Campaigns in active learning periods.** A campaign entering learning can destabilize the entire portfolio. Wait until all campaigns in the group have exited learning before adding to a portfolio.
- **Campaigns in different countries/currencies** (unless the account uses a single reporting currency with proper exchange rate handling).

---

## Setting Portfolio Targets

### Initial Target

Set the initial portfolio target based on the **weighted average performance** of the campaigns being grouped:

```
Portfolio tCPA target = Total cost of all campaigns / Total conversions of all campaigns
```

Or for tROAS:

```
Portfolio tROAS target = Total conversion value of all campaigns / Total cost of all campaigns
```

Then apply the standard buffer: set tCPA 15-20% above the weighted average, or tROAS 15-20% below the weighted average, to give the algorithm room to optimize during the initial learning period.

### Target Adjustments

Tighten the target gradually (5-10% every 2-4 weeks) once the portfolio stabilizes. Never tighten more than once per 14 days, as each target change triggers a recalibration period.

---

## Performance Monitoring

### Portfolio-Level Metrics (Primary)

Evaluate the portfolio at the portfolio level. That is where the target applies. Individual campaign variance is expected and acceptable.

- Portfolio CPA vs target CPA
- Portfolio ROAS vs target ROAS
- Total portfolio conversions (trend)
- Total portfolio spend (pacing)

### Campaign-Level Metrics (Secondary)

Monitor individual campaigns for structural issues, not target compliance:

- **Budget domination:** Flag if one campaign consumes more than 80% of the portfolio's total spend. This may indicate the algorithm has found all its opportunity in one campaign and the others are redundant.
- **Zero-delivery campaigns:** Flag if a campaign in the portfolio receives zero impressions for 7+ consecutive days. It may be structurally unable to compete within the portfolio.
- **CPA/ROAS outliers:** Flag if a campaign's CPA is more than 3x the portfolio average or ROAS is less than one-third the portfolio average. Extreme outliers may need to be removed from the portfolio.

### When to Dissolve a Portfolio

- Portfolio consistently misses target for 14+ consecutive days with no improvement trend
- One campaign dominates 90%+ of spend (the portfolio is effectively a single-campaign strategy)
- Business objectives diverge (campaigns in the group now serve different goals)
- After testing: A/B test showed individual bidding outperformed portfolio bidding for 30+ days

---

## Portfolio Bidding Checklist

Before creating a portfolio, verify:

- [ ] All campaigns target the same conversion action
- [ ] Conversion values are within 3x of each other across campaigns
- [ ] No brandnon_brand mixing
- [ ] No campaigns currently in learning period
- [ ] Combined volume meets the minimum for the strategy (15+ for tCPA, 30+ for tROAS)
- [ ] Initial target calculated from weighted average with 15-20% buffer
- [ ] Monitoring cadence established (weekly portfolio review)
- [ ] Max CPC cap set (if using portfolio Maximize Clicks)
