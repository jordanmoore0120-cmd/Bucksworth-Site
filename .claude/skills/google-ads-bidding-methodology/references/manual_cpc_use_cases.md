# Manual CPC Use Cases

Manual CPC is NOT deprecated. It remains a legitimate, strategic bidding choice for specific situations where automated bidding lacks sufficient signal or where precise control outweighs algorithmic optimization.

---

## Strategic Use Cases

### 1. Brand Campaigns with Predictable CPCs

Brand terms have stable, low CPCs that rarely fluctuate. Automated bidding adds minimal value because there is no complex optimization problem to solve. Manual CPC provides cost control without sacrificing anything meaningful.

When appropriate: brand CPCs are stable within a narrow range, conversion rates are high and predictable, the primary goal is presence (not efficiency optimization).

### 2. Conquest/Competitor Campaigns

Competitor terms are expensive and unpredictable. Manual CPC gives precise bid control to manage the cost of appearing on competitive queries without letting the algorithm chase expensive clicks in pursuit of conversions that may never come.

When appropriate: bidding on competitor brand names, cost sensitivity is high, conversion rates on competitor terms are low (common), the campaign is more about visibility than conversion efficiency.

### 3. New Market/Keyword Testing

When entering a new keyword space, geographic market, or audience segment, there is no historical conversion data for the algorithm to learn from. Manual CPC prevents the algorithm from either overbidding (no negative signal to constrain it) or underbidding (no positive signal to encourage it).

When appropriate: launching campaigns in a new product category, expanding to a new geographic market, testing a new keyword theme with no performance history.

### 4. Low-Volume Campaigns (<15 Conversions/Month)

Automated bidding algorithms require conversion signal to optimize. Below 15 conversions/month, the signal is too sparse for the algorithm to make reliable bid decisions. Manual CPC with bid adjustments provides more stable, predictable performance.

When appropriate: niche campaigns with inherently low search volume, campaigns in low-population geographies, campaigns for high-ticket products/services with naturally low conversion volume.

### 5. High-Value Single Conversions

Campaigns where a single conversion is worth $10,000+ create a unique problem for automated bidding. One conversion in a day can cause the algorithm to dramatically increase bids the next day, chasing a pattern that may not repeat. Manual CPC prevents this volatility.

When appropriate: enterprise B2B campaigns, luxury goods, high-ticket professional services, any campaign where individual conversion value exceeds $10K.

### 6. Geographic Testing

Testing new geographic markets where performance patterns differ from the account average. The algorithm optimizes toward account-wide patterns, which may not apply in a new region. Manual CPC lets you set region-appropriate bids based on local market conditions.

When appropriate: expanding from one country to another, testing a new metro area, entering a market with different competitive dynamics.

### 7. Seasonal Pre-Positioning

Ramping bids before a known seasonal peak, faster than algorithm adaptation. Smart Bidding algorithms are backward-looking; they react to performance changes rather than anticipating them. Manual CPC allows proactive bid increases ahead of a peak.

When appropriate: 2-4 weeks before Black Friday/Cyber Monday, before a known industry event or conference, ahead of a seasonal demand spike with a predictable pattern.

---

## Hybrid Approach: Manual CPC + Bid Adjustments

Manual CPC becomes more powerful when combined with bid adjustments that layer targeting precision on top of base bids.

### Device Bid Adjustments
Increase or decrease bids by device based on conversion rate differences. Example: if mobile converts at half the rate of desktop, apply a -30% to -50% mobile bid adjustment rather than losing mobile traffic entirely.

### Location Bid Adjustments
Increase bids in high-performing geographies, decrease in low-performing ones. Requires enough data per geography to make informed adjustments (at least 2-4 weeks of data).

### Ad Schedule Bid Adjustments
Increase bids during high-converting hours/days, decrease during low-converting periods. Useful for businesses with clear on/off patterns (e.g., B2B that converts Monday-Friday during business hours).

### Audience Bid Adjustments
Layer remarketing lists (RLSA) on Manual CPC campaigns with positive bid adjustments. Show ads to all searchers at base bids, but bid more aggressively for users already in your remarketing pool.

---

## When to Graduate from Manual CPC

Manual CPC is a starting point for many campaigns, not necessarily a permanent home. Graduate when:

1. **Volume threshold crossed:** The campaign sustains 15+ conversions/month for 2+ consecutive months
2. **Tracking verified:** Conversion tracking is confirmed accurate with no known gaps
3. **Performance patterns established:** Clear patterns in CPC, conversion rate, and CPA have been observed for 60+ days
4. **Graduation path:** Run a Campaign Experiment splitting traffic between Manual CPC and Maximize Conversions (no target) for 4-6 weeks. If Maximize Conversions delivers equal or better CPA at equal or greater volume, migrate.

---

## Common Mistakes with Manual CPC

1. **Set and forget.** Manual CPC requires regular bid reviews (weekly minimum). Bids that were appropriate last month may be too high or too low today.

2. **Not using bid adjustments.** Running Manual CPC without device, location, or schedule adjustments leaves targeting precision on the table. The adjustments are the reason Manual CPC can compete with automation in certain scenarios.

3. **Using Manual CPC at 50+ conversions/month.** At this volume, automated bidding has sufficient signal to outperform manual management in most cases. Staying on Manual CPC at high volume typically means leaving efficiency gains on the table.

4. **Max CPC set too low.** Setting max CPC below the competitive threshold causes consistent impression share loss. Check auction insights and search impression share to calibrate.

5. **Applying Manual CPC because "I don't trust automation."** This is not a strategic rationale. If the data supports automation (volume, tracking quality, stable performance), resisting it based on distrust alone leaves value on the table. Use Campaign Experiments to test rather than speculate.
