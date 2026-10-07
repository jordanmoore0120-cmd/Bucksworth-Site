# Learning Period Management

Every Smart Bidding strategy change triggers a learning period where the algorithm recalibrates its bid predictions. Managing learning periods strategically is essential to maintaining account stability.

---

## What Triggers a Learning Period

| Change Type | Triggers Learning? | Notes |
|---|---|---|
| Bidding strategy change | Yes | Switching from one strategy to another (e.g., Manual CPC to tCPA) |
| tCPA or tROAS target change | Yes | Any change to the target value, even small adjustments |
| Conversion action change | Yes | Adding, removing, or changing the primary conversion action |
| Budget change >20% | Yes | Single-day budget change exceeding 20% of the previous budget |
| Budget change <=20% | Usually not | Small budget changes typically do not trigger full learning |
| Major audience change | Yes | Significantly expanding or restricting the target audience |
| Campaign structure change | Depends | Adding/removing ad groups, changing match types at scale |
| Ad creative changes | Usually not | New ads typically do not trigger bidding learning (but affect ad quality) |
| Seasonal demand shifts | No | External demand changes do not trigger learning, but may affect performance similarly |

---

## Duration

- **Typical duration:** 7-14 days
- **Low-volume campaigns:** Can extend to 21 days or longer if conversion data is sparse
- **High-volume campaigns:** May complete in as few as 5-7 days with strong signal
- **The "Learning" label:** Google shows "Learning" status in the Bidding Strategy Report. The label disappears when the algorithm has enough data to make stable bid predictions.

---

## Expected Performance During Learning

Performance volatility during learning is normal, not a sign of failure.

- CPA may increase 15-30% above target
- ROAS may decrease 15-30% below target
- Impression volume may fluctuate day to day
- Click volume may spike or dip as the algorithm tests different bid levels
- Some days will look great, others will look terrible. Evaluate after the full learning period, not day by day.

**The critical mistake:** panicking during learning and reverting to the previous strategy. This wastes the learning data collected so far and resets the process. If you revert, you need to start over.

---

## How to Minimize Disruption

### Batch Changes

Make multiple changes at once rather than spreading them over weeks. One learning period is better than four sequential ones.

Example: if you need to adjust the tCPA target, add a new ad group, and update the audience, do all three simultaneously. The campaign enters learning once instead of three separate times.

### Use Campaign Experiments

Test strategy changes on a traffic split (typically 50/50) before full rollout. The experiment campaign enters learning while the control continues performing normally. If the experiment succeeds, apply it to the full campaign. If it fails, end the experiment with no impact to the base campaign.

### Avoid Peak Periods

Never trigger a learning period during a known high-traffic or high-value window. If Black Friday is your biggest week, do not change bidding strategy in mid-November. Make changes at least 3-4 weeks before peak periods to allow full learning completion.

### Gradual Target Adjustments

When tightening a tCPA or tROAS target, adjust by 5-10% at a time rather than making large jumps. Each adjustment triggers recalibration, but small adjustments produce shorter, less volatile learning periods.

---

## "Limited by Learning" Status

The "Learning (limited)" status appears when a campaign has been in learning for an extended period and is not accumulating enough data to exit.

### Common Causes

- Too few conversions (below the strategy's minimum threshold)
- Frequent changes that keep resetting the learning period
- Overly aggressive targets that suppress delivery
- Conversion tracking issues (broken tag, delayed reporting)
- Very narrow targeting that limits available auctions

### Resolution Steps

1. **Verify conversion tracking.** Confirm the conversion tag is firing correctly and conversions are appearing in reports without excessive delay.
2. **Check conversion volume.** If the campaign has fewer than 15 conversions in the last 30 days, the strategy may not be appropriate. Consider switching to a lower-threshold strategy.
3. **Stop making changes.** Every change resets the learning clock. Commit to no changes for 14 days.
4. **Loosen targets.** If the target is more aggressive than actual performance, widen it by 15-20%. An aggressive target during learning can create a death spiral where low delivery produces low data, which prevents learning completion.
5. **Expand targeting.** If the audience or keyword set is too narrow, the algorithm may not have enough auction volume to learn effectively.

---

## When to Abandon vs Wait

### Wait If:

- The campaign is within its first 14 days of learning
- Conversion volume is steady (not declining)
- No conversion tracking issues detected
- Performance, while volatile, is in the expected range (15-30% variance from target)

### Abandon If:

- 21+ days in learning with no improvement trend
- Conversion tracking is confirmed broken (fix tracking first, then reassess strategy)
- Conversion volume is fundamentally too low for the strategy (structural issue, not a learning issue)
- The campaign has entered a negative spiral: low delivery, fewer conversions, more restrictive bidding, even lower delivery

### Never Abandon During the First 7 Days

The only exception: you discover a tracking error (e.g., conversions are not being recorded at all). Fix the tracking issue, then let learning restart.

---

## Cascade Prevention

Multiple campaigns entering learning simultaneously creates account-wide instability. Prevent cascades with these rules:

1. **Never change more than one campaign's strategy at a time** in accounts with fewer than 10 campaigns. In larger accounts, cap simultaneous changes at 2-3 campaigns.
2. **Stagger changes by 2+ weeks per campaign.** Wait for one campaign to exit learning before changing the next.
3. **Monitor total account percentage in learning.** Never exceed 30% of total account spend in campaigns that are actively in learning. If three campaigns representing 40% of spend all enter learning, the account's overall performance will be significantly disrupted.
4. **Prioritize changes by impact.** Change the highest-spend or highest-impact campaign first. Once it stabilizes, move to the next.
5. **Document the timeline.** Track when each campaign entered learning, expected exit date, and next planned change. This prevents accidental overlapping changes.
