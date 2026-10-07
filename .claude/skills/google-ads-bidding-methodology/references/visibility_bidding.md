# Visibility Bidding: Target Impression Share

Target Impression Share is a visibility strategy, not a conversion strategy. It answers "How often do I appear?" rather than "How efficiently do I convert?"

---

## Configuration Options

### Position Targets

| Position | What It Means | Typical Use |
|---|---|---|
| Anywhere on results page | Ad appears somewhere on page 1 | Broad awareness, lowest cost |
| Top of results page | Ad appears in top positions (above organic) | Competitive positioning |
| Absolute top of results page | Ad appears as the first result | Brand defense, premium positioning |

### Impression Share Target

Set as a percentage (e.g., 90% absolute top IS). This is the percentage of eligible impressions where you want to appear in the specified position.

Practical guidance:
- 90-95% absolute top IS is appropriate for core brand terms (you should own your brand)
- 70-80% top IS is appropriate for competitive positioning terms
- 50-60% anywhere IS is appropriate for broad awareness
- 100% targets are possible but expensive and rarely efficient

### Max CPC Cap (Critical)

**Always set a max CPC cap. This is non-negotiable.**

Without a cap, Google will bid unlimited amounts to achieve the impression share target. A single competitive auction can produce a $50+ click on a term that normally costs $2.

Setting the cap:
- Start at 1.5-2x the historical average CPC for the keywords in the campaign
- If the campaign is new, research expected CPCs via Keyword Planner and set the cap at 1.5x the high estimate
- Monitor actual CPCs vs the cap weekly. If actual CPCs are consistently at the cap, the cap may be suppressing delivery. Decide whether to raise it or accept lower IS.

---

## Use Cases

### Brand Defense

Ensure your brand terms show at absolute top of page. Prevents competitors from appearing above you on your own branded searches. This is the most common and most defensible use of Target IS.

Configuration: absolute top of results page, 90-95% IS target, max CPC cap at 2x brand CPC average.

### Competitive Positioning

Maintain visibility on key competitive or category terms where presence matters regardless of conversion efficiency. Often used for terms where the consideration cycle is long and repeated visibility builds familiarity.

Configuration: top of results page, 60-80% IS target, max CPC cap based on category CPC range.

### Regulated Industries

Some industries (legal, medical, financial) have compliance or strategic requirements to appear for specific terms. Target IS ensures consistent presence without relying on conversion signals that may not apply.

Configuration varies by requirement. Often absolute top for high-priority terms, top of page for secondary terms.

### New Product/Service Launch

Guaranteed visibility during a launch window when awareness is the primary goal and conversion data does not yet exist.

Configuration: top of results page, 70-80% IS target, with a planned end date to transition to a conversion-based strategy once data accumulates.

### Seasonal or Event-Driven Presence

Guaranteed presence during peak periods (trade shows, product launches, seasonal spikes) where visibility has disproportionate value.

Configuration: absolute top or top of page for the event duration, then revert to standard bidding strategy.

---

## When Target IS Is the Wrong Strategy

- **Performance campaigns.** If the goal is conversions or revenue, use conversion-based bidding. Target IS optimizes for visibility, which may or may not correlate with conversions.
- **Limited budget.** IS targets plus limited budget equals underdelivery. The algorithm tries to hit the IS target but runs out of budget partway through the day, resulting in inconsistent visibility and poor budget utilization.
- **Non-brand campaigns without a visibility rationale.** Running Target IS on generic, non-brand keywords is almost always wasteful. Use conversion-based strategies for non-brand.
- **Low-value keywords.** Keywords where position doesn't meaningfully affect outcomes don't justify the cost premium of Target IS.

---

## Metrics to Monitor

| Metric | What to Check | Action Trigger |
|---|---|---|
| Actual IS vs target IS | Are you hitting the target? | If consistently below target, either raise budget, raise max CPC cap, or lower IS target |
| Actual CPC vs max CPC cap | Is the cap constraining delivery? | If actual CPC = cap on most auctions, the cap is the binding constraint |
| Lost IS (Budget) | Are you losing impressions because of budget? | Increase budget before raising IS targets or CPC caps |
| Lost IS (Rank) | Are you losing impressions because of ad rank? | Improve quality score, raise max CPC cap, or accept the IS level |
| Cost trend | Is spend growing faster than expected? | IS campaigns can scale cost rapidly. Monitor weekly. |
| Competitive metrics | Who else is showing for these terms? | Check Auction Insights for competitor overlap and position rates |

---

## Transitioning Away from Target IS

Target IS is often a temporary strategy (launch periods, seasonal events, testing phases). When transitioning to a conversion-based strategy:

1. Run the Target IS campaign and a conversion-based campaign as an experiment (if possible) to compare
2. Ensure conversion tracking is in place and accumulating data
3. Once 15+ conversions have been collected, switch to Maximize Conversions (no target)
4. After stabilization, add a CPA or ROAS target as appropriate for the account maturity level
