# Creative Fatigue Detection

Methodology for identifying, measuring, and responding to creative fatigue in Google Ads.

---

## What Is Creative Fatigue

Creative fatigue is the point where ad performance declines because the target audience has seen the creative too many times. The creative itself hasn't changed, but its effectiveness has degraded through overexposure.

**Creative fatigue vs. audience fatigue:** Creative fatigue means the specific ad assets need refreshing. Audience fatigue means the audience segment is exhausted (too small, over-targeted). The symptoms overlap but the solutions differ: creative fatigue requires new assets, audience fatigue requires new audiences.

---

## Primary Fatigue Signals

### 1. CTR Decline
**Signal:** Rolling 4-week CTR drops 20%+ while impressions remain stable.

Why this matters: If impressions are stable but CTR is falling, users are seeing the ad but clicking less. This indicates the creative is no longer compelling to the audience. If impressions were also declining, the issue might be bidding or competition, not fatigue.

### 2. Frequency Increase
**Signal:** Average frequency exceeds channel-specific benchmarks (see table below).

High frequency means users are seeing the same creative repeatedly. Beyond a threshold, additional impressions produce diminishing returns and can cause negative brand perception.

### 3. Conversion Rate Drop
**Signal:** CVR declining while CTR holds steady.

This is a subtler fatigue signal. Users still click (the headline/thumbnail still works), but they don't convert. Possible cause: the creative is attracting less qualified users as the most receptive audience members have already converted, or users who click feel the experience is repetitive.

### 4. CPC Inflation
**Signal:** Cost per click increasing without a competitive explanation (no new competitors, no seasonal changes, no bidding modifications).

When creative fatigue sets in, Google's algorithm bids harder to achieve the same results. Higher CPCs with stable or declining CTR suggest the system is compensating for creative degradation.

---

## Frequency Benchmarks by Campaign Type

| Campaign Type | Healthy Weekly Frequency | Warning Threshold | Critical Threshold |
|--------------|-------------------------|-------------------|-------------------|
| **Search** | N/A (intent-driven) | N/A | N/A |
| **Display** | 2-4 per week | 5-7 per week | 8+ per week |
| **YouTube (awareness)** | 2-3 per week | 4-5 per week | 6+ per week |
| **YouTube (action)** | 1-2 per week | 3-4 per week | 5+ per week |
| **Demand Gen** | 2-4 per week | 5-6 per week | 7+ per week |
| **PMax Display channel** | 3-5 per week | 6-8 per week | 9+ per week |

**Search is exempt:** Search ads are intent-driven. A user searching for "running shoes" wants to see relevant ads regardless of how many times they've seen them before. Frequency-based fatigue is not a meaningful signal for Search.

**PMax complicates measurement:** PMax distributes across multiple channels, each with different frequency norms. The Display and YouTube channels within PMax follow their respective benchmarks, but PMax reporting aggregates across channels, making per-channel frequency difficult to isolate.

---

## Measurement Methodology

### Rolling 4-Week CTR Tracking
1. Calculate average CTR for weeks 1-4 (baseline period)
2. Calculate average CTR for weeks 5-8 (comparison period)
3. Compute percentage change: ((comparison - baseline) / baseline) x 100
4. If decline exceeds 20%, flag for fatigue review

### Normalization Requirements
Before attributing a decline to fatigue, rule out other causes:
- **Seasonality:** Compare YoY if data is available. Some verticals have natural CTR fluctuation.
- **Bidding changes:** Did bid strategy or targets change during the measurement window?
- **Landing page changes:** Could a landing page update affect conversion rate?
- **Competition:** Did a new competitor enter the auction? Check auction insights.
- **Budget changes:** Did budget reductions limit impression volume or shift serving patterns?

### Isolation Protocol
Creative fatigue is a diagnosis of exclusion. Confirm that none of the above factors explain the decline before concluding fatigue.

---

## Refresh Triggers

Take action when any of these conditions are met:

| Trigger | Threshold | Action |
|---------|-----------|--------|
| CTR decline | 20%+ over 4 weeks, stable impressions | Replace lowest-performing assets |
| Frequency warning | Exceeds warning threshold for 2+ consecutive weeks | Add new creative variants |
| Creative age | Ad/asset unchanged for 60+ days (Display/Video) | Proactive refresh |
| CVR decline | 15%+ decline with stable CTR | Audit creative-to-landing-page alignment |

### Proactive vs. Reactive Refresh
- **Proactive:** Refresh creative on a schedule (every 60-90 days for Display/Video) regardless of performance signals. Prevents fatigue before it impacts results.
- **Reactive:** Refresh only when fatigue signals appear. More efficient but risks running degraded creative while waiting for signals to cross thresholds.

Best practice: use proactive scheduling as the baseline, with reactive triggers as an additional safety net.

---

## Creative Rotation Mechanics

### RSA (Search)
Google auto-rotates RSA asset combinations. No manual rotation needed. To address fatigue in Search:
- Replace Low-rated assets with new copy
- Add new headline and description variants
- Pause underperforming RSAs and launch replacements

### PMax
Google auto-rotates assets within asset groups. To address fatigue:
- Add new image, text, and video assets to existing asset groups
- Let assets with "Low" ratings phase out naturally (or remove them)
- Create new asset groups with fresh themes if the entire group is fatigued

### Display
Manual creative management required:
- Schedule creative rotation every 60-90 days
- Upload new image and responsive display ad variants
- Pause old variants after new ones have accumulated sufficient data

### Video (YouTube / Demand Gen)
Manual creative management required:
- Schedule creative refresh every 60-90 days
- Upload new video variants (different hooks, lengths, CTAs)
- Phase out old videos after new ones have accumulated data

---

## Refresh Strategy

### The 25-30% Rule
Never replace all creative at once. Replacing everything simultaneously:
- Loses all historical performance data
- Resets learning periods across the account
- Creates a period of instability with no proven creative running

Instead: rotate 25-30% of assets at a time. Replace the lowest performers first. Keep top performers running while new assets accumulate data.

### Replacement Priority
1. Replace assets rated "Low" by Google
2. Replace assets with the longest run time and declining engagement
3. Replace assets in the highest-spend campaigns first (greatest impact)
4. Keep "Best" rated assets until they show fatigue signals

### New Creative Development
When replacing assets, test genuinely new concepts, not minor variations of existing ones:
- New value propositions (not just rewording)
- New visual styles or imagery
- New hooks or opening angles (for video)
- New offers or CTAs

Minor rewording of fatigued creative will fatigue at a similar rate. The audience needs something meaningfully different.
