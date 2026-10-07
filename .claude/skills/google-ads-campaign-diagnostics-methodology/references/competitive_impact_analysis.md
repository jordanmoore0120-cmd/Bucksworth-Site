# Competitive Impact Analysis

Framework for identifying when competitive shifts are driving campaign performance changes and determining appropriate responses.

## Auction Insights Metrics

Google Ads provides six competitive metrics through the Auction Insights report. Understanding each is essential for diagnosing competitive impact.

### Impression Share
Your impressions divided by the estimated number of impressions you were eligible to receive. This is your share of the available auction. A decline means you are losing ground, either from budget constraints, bid pressure, or Quality Score degradation.

### Overlap Rate
How often a competitor's ad received an impression in the same auction where your ad also received an impression. High overlap rate means you compete head-to-head frequently with this advertiser.

### Position Above Rate
How often a competitor's ad was shown in a higher position than yours, in auctions where you both appeared. Rising position above rate from a specific competitor means they are outranking you more frequently.

### Top of Page Rate
How often your ad appeared at the top of the page (above organic results). Declining top of page rate means you are being pushed down, either by competitors or by your own Quality Score/bid levels.

### Absolute Top of Page Rate
How often your ad appeared as the very first ad. This is the most competitive position and the most sensitive to bid and Quality Score changes.

### Outranking Share
How often your ad ranked higher than a competitor's ad in the auction, or your ad showed when theirs did not. This is the most comprehensive competitive metric because it accounts for both position and impression share.

## Analyzing Competitive Shifts

### Pattern: New Competitor Entering

**Signals:**
- A new domain appears in Auction Insights that was not present in the prior period
- Your impression share declines while your bids and budgets did not change
- CPC increases without corresponding changes to your Quality Score

**Confirmation:**
- The new domain's overlap rate is significant (>20%)
- The timing of the new domain's appearance correlates with your performance shift
- Search the competitor's domain to verify they are running ads

**Typical impact:** IS decline of 5-15%, CPC increase of 10-25% in the affected campaigns.

### Pattern: Existing Competitor Increasing Investment

**Signals:**
- A known competitor's impression share increases by 10+ percentage points
- Their position above rate increases
- Your outranking share against them decreases
- CPC inflation in the affected campaigns

**Confirmation:**
- The competitor's IS increase is sustained over 2+ weeks (not a one-week spike)
- Multiple campaigns show the same competitor-driven pattern
- CPC increase correlates with this specific competitor's IS growth

### Pattern: Competitor Withdrawing

**Signals:**
- A competitor's impression share drops significantly or disappears
- Your impression share increases without budget or bid changes
- CPCs decrease
- Performance metrics may improve

**Confirmation:**
- Sustained absence over 2+ weeks
- Check if the competitor's website is still active (they may have paused ads, not gone out of business)

**Note:** Competitor withdrawal is a positive signal, but do not become complacent. The competitive landscape is always shifting.

### Pattern: Quality Score Degradation (Internal Competitive Issue)

Sometimes what looks like competitive pressure is actually an internal Quality Score decline making you less competitive in the same auctions.

**Signals:**
- CPC increased but competitors' IS did not increase significantly
- Lost IS (rank) increased without a corresponding competitor surge
- Ad relevance or landing page experience scores declined
- Expected CTR component dropped

**Confirmation:**
- Check Quality Score history (Keyword > Quality Score columns > segment by time)
- If QS components declined, the issue is internal, not competitive

## CPC Inflation Patterns

### Gradual CPC Increase (5-10% monthly)
- Most common pattern
- Usually caused by steady competitive pressure or platform-wide CPC inflation
- Response: improve Quality Score, refine targeting, accept gradual cost increases as market cost of doing business

### Sudden CPC Spike (20%+ in one week)
- Usually caused by a new competitor, competitor strategy change, or Quality Score event
- Response: immediate diagnosis. Check Auction Insights and Quality Score. Determine if the spike is temporary or structural.

### CPC Increase + IS Decrease
- You are being outbid. Competitors are willing to pay more per click than you.
- Response: improve Quality Score to lower effective CPC, or accept lower position, or increase bids strategically on high-value segments only.

### CPC Increase + IS Stable
- Your own Quality Score may have dropped, increasing your required bid to maintain position.
- Response: diagnose Quality Score components. Fix ad relevance, landing page, or expected CTR.

### CPC Decrease
- Competitor withdrew, seasonal demand decline, or your Quality Score improved.
- Response: consider capturing more volume at the lower CPC. This is an opportunity window.

## Competitive Response Strategies

### Strategy 1: Improve Quality Score
The most sustainable competitive response. Higher Quality Score means lower CPCs for the same position. Focus on:
- Ad relevance: tighter keyword-to-ad mapping, better RSA headlines
- Landing page experience: page speed, mobile usability, content relevance to the query
- Expected CTR: compelling ad copy, use of extensions, strong value propositions

### Strategy 2: Differentiate Creative
If you compete head-to-head on the same messaging, the auction becomes a pure bidding war. Differentiate by:
- Leading with a different value proposition
- Using different proof points or social proof
- Highlighting aspects competitors do not emphasize
- Testing offers that competitors cannot easily match

### Strategy 3: Adjust Targeting
Find less competitive segments where your budget goes further:
- Geographic areas where competitors are less active
- Time-of-day windows with lower competition
- Device segments where you have a conversion advantage
- Long-tail keywords with lower competitive density

### Strategy 4: Strategic Budget Increase
Only appropriate when:
- The campaign is already efficient (CPA/ROAS within target)
- Lost IS (budget) is the primary constraint
- Incremental spend is expected to maintain similar efficiency

Do not increase budget just to "fight" a competitor. The budget increase must make economic sense on its own merits.

### Strategy 5: Accept Lower Position
If CPCs for top positions exceed your efficient threshold:
- Reduce bids to target position 2-3 instead of position 1
- Monitor whether conversion rates hold at lower positions (they often do, at lower CPC)
- The cost savings from lower position may offset the impression share loss

### Strategy 6: Do Not React
Not every competitive shift requires a response. If a competitor enters temporarily (seasonal promotion, test campaign), reactive changes to your account may cause more harm than the competitor does. Evaluate whether the competitive shift is structural (sustained) or temporary before responding.

## Competitive Analysis Cadence

| Frequency | What to Check | Why |
|-----------|--------------|-----|
| Weekly | Auction Insights top-line IS and CPC trends | Catch sudden shifts early |
| Monthly | Full Auction Insights comparison, QS trends, position metrics | Identify developing competitive patterns |
| Quarterly | Competitive landscape review, new entrants, market trends | Strategic positioning assessment |

## Key Principles

1. **Separate competitive pressure from internal issues.** Use Quality Score data to distinguish between "competitors are spending more" and "our ads got worse."
2. **Respond strategically, not reactively.** A competitor increasing spend does not automatically require you to increase spend. The right response depends on your efficiency and margins.
3. **Monitor trends, not snapshots.** A single week of competitive data is noisy. Look for sustained patterns over 2-4 weeks before taking action.
4. **Consider the full picture.** A competitor winning position 1 may be overpaying. If your position 2-3 performance is efficient, they may be the one with the problem.
