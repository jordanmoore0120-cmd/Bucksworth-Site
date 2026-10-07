# Creative Fatigue Detection - Signal Thresholds and Response Protocols

## Fatigue Signal Definitions

### Primary Signals

**1. CTR Decline**
- Metric: Click-Through Rate (link clicks / impressions)
- Baseline: Rolling average of first 14 days of ad delivery
- Warning threshold: >10% decline from baseline (rolling 7-day vs baseline)
- Critical threshold: >25% decline from baseline
- Measurement: Compare last 7 days to first 14-day average
- Caveat: Seasonal and day-of-week variance can mimic fatigue. Check the trend over 2+ weeks.

**2. CPA Increase**
- Metric: Cost Per Acquisition
- Baseline: Average CPA during first 14 days post-learning
- Warning threshold: >15% above baseline (rolling 7-day)
- Critical threshold: >30% above baseline for 7+ consecutive days
- Measurement: 7-day rolling average vs 14-day post-learning baseline
- Caveat: CPA can increase due to audience saturation, bid strategy changes, or seasonal CPM shifts. Isolate creative fatigue by checking if other ads in the same campaign are stable.

**3. Frequency (Prospecting)**
- Metric: Average number of times each person in your audience has seen the ad
- Warning threshold: >2.5 (7-day average)
- Critical threshold: >3.5
- Maximum acceptable: 4.0 (beyond this, you're burning budget)
- Measurement: 7-day frequency in Ads Manager
- Caveat: Frequency is an average. Some people have seen the ad 10+ times while others have seen it once. The distribution matters.

**4. Frequency (Retargeting)**
- Warning threshold: >5.0 (7-day average)
- Critical threshold: >7.0
- Maximum acceptable: 10.0
- Note: Higher frequency is acceptable for retargeting because the audience is warm and smaller.

**5. CPM Increase**
- Metric: Cost Per 1,000 Impressions
- Warning threshold: >20% above campaign baseline
- Critical threshold: >40% above baseline
- Measurement: Rolling 7-day vs campaign lifetime average
- Caveat: CPM increases during Q4, competitive periods, and elections. Check if CPM is rising across all ads or just this one.

### Secondary Signals

**6. Thumb-Stop Rate Decline (Video)**
- Metric: 3-second video views / impressions
- Warning: >15% decline from peak
- Critical: >30% decline from peak
- This is the earliest fatigue signal for video ads. If people stop stopping, the hook is exhausted.

**7. Video Completion Rate Decline**
- Metric: Video completions / 3-second views
- Warning: >10% decline from peak
- Note: If thumb-stop is stable but completion drops, the hook still works but the content is no longer engaging. Rework the body, not the hook.

**8. Share/Save Rate Approaching Zero**
- Metric: Shares + Saves / Impressions
- Warning: Rate drops below 0.01%
- Note: When people stop sharing, the content has lost its "worth sharing" quality. This often precedes measurable performance decline by 3-7 days.

**9. Negative Comment Increase**
- Metric: Monitor manually or use Meta's automated filters
- Warning: 2+ negative comments about ad repetition ("I've seen this 100 times")
- Action: These comments also reduce the ad's quality ranking

---

## Frequency Tables by Campaign Type

### Prospecting Campaigns

| Frequency (7-day) | Status | Expected CPA Impact | Action |
|-------------------|--------|-------------------|--------|
| 1.0-1.5 | Fresh | Baseline | Scale if performing |
| 1.5-2.0 | Healthy | 0-5% above baseline | Continue, monitor |
| 2.0-2.5 | Warming | 5-10% above baseline | Prepare replacement creative |
| 2.5-3.0 | Fatiguing | 10-20% above baseline | Reduce spend 20%, launch replacements |
| 3.0-4.0 | Fatigued | 20-40% above baseline | Reduce spend 50%, replace urgently |
| 4.0+ | Burned out | 40%+ above baseline | Pause ad, full refresh needed |

### Retargeting Campaigns

| Frequency (7-day) | Status | Expected CPA Impact | Action |
|-------------------|--------|-------------------|--------|
| 1.0-3.0 | Fresh | Baseline | Scale if performing |
| 3.0-5.0 | Healthy | 0-10% above baseline | Continue, rotate creative monthly |
| 5.0-7.0 | Warming | 10-20% above baseline | Rotate creative now |
| 7.0-10.0 | Fatiguing | 20-40% above baseline | Reduce frequency cap or budget |
| 10.0+ | Burned out | Diminishing returns | Pause or rebuild audience |

### Advantage+ Shopping Campaigns

| Frequency (7-day) | Status | Action |
|-------------------|--------|--------|
| 1.0-2.0 | Normal | ASC manages its own frequency |
| 2.0-3.0 | Moderate | Add fresh creative to the campaign |
| 3.0+ | High for ASC | Check existing customer cap, reduce if too high |

---

## Fatigue Response Protocols

### Protocol 1: Early Warning (1-2 signals triggered)

**Situation:** CTR has declined 12%, or frequency is at 2.5, but CPA is still within target.

**Actions:**
1. Start producing replacement creative immediately
2. Prepare 3-5 new ad concepts in your creative pipeline
3. Monitor daily for 5 more days
4. If signals stabilize: false alarm (seasonal or natural variance)
5. If signals worsen: move to Protocol 2

**Timeline:** 5-7 days of monitoring before escalating

### Protocol 2: Active Fatigue (3+ signals triggered)

**Situation:** CTR declining, CPA rising 15%+, frequency above 3.0.

**Actions:**
1. Reduce ad spend by 30-50% on the fatiguing ad
2. Launch 3-5 replacement ads in the same ad set / campaign
3. If using Faris method: add the new batch and let the algorithm redistribute
4. If using 3:2:2: launch a new test round with fresh concepts
5. Monitor replacement performance for 72 hours
6. If replacements perform: fully pause the fatiguing ad
7. If replacements don't perform: you have a creative quality problem, not just fatigue

**Timeline:** 48-72 hours for replacement launch, 7 days to stabilize

### Protocol 3: Critical Fatigue (CPA 2x+ above baseline)

**Situation:** The ad is clearly burned out. CPA has doubled, frequency is 4+, CTR has cratered.

**Actions:**
1. Pause the ad immediately (there's no saving it)
2. Launch all available replacement creative
3. If no replacements are ready: reduce campaign budget to minimum viable while you produce new creative
4. Analyze why this ad fatigued: audience too narrow? Creative shelf life too short? Over-scaled too fast?
5. Update your production cadence to prevent future gaps

**Timeline:** Immediate pause, 7-14 days to recover campaign performance

---

## Proactive Fatigue Prevention System

### Creative Pipeline Requirements

| Monthly Ad Spend | Ads in Pipeline (Ready to Launch) | Production Cadence |
|------------------|----------------------------------|-------------------|
| <$10K | 3-5 ads ready | 2-3 new ads/week |
| $10K-50K | 5-10 ads ready | 4-6 new ads/week |
| $50K-150K | 10-20 ads ready | 8-12 new ads/week |
| $150K+ | 20-40 ads ready | 15-25 new ads/week |

### Shelf Life Estimates by Format

| Format | Typical Shelf Life | Refresh Strategy |
|--------|-------------------|------------------|
| Static image | 2-4 weeks | New visuals, same copy angle |
| UGC video | 3-6 weeks | New creator, same script framework |
| Polished brand video | 4-8 weeks | New hooks, same body |
| Founder talking head | 4-8 weeks | New topics, same format |
| Carousel | 3-5 weeks | Reorder, update individual cards |
| Catalog/DPA | Ongoing (auto-refresh) | Update product feed regularly |

### Staggered Launch Calendar

Never launch all new creative on the same day. Stagger to ensure consistent fresh creative:

**Weekly cadence for $50K+/month accounts:**
- Monday: Launch 2-3 new ads
- Wednesday: Launch 2-3 new ads
- Friday: Analyze week's performance, plan next week
- This ensures some ads are always in their "fresh" period

---

## Fatigue Detection Dashboard Metrics

Set up these columns in your reporting dashboard for real-time fatigue monitoring:

| Metric | Source | Alert Threshold |
|--------|--------|----------------|
| 7-day Frequency | Meta Ads Manager | >3.0 (prospecting) |
| CTR (7-day rolling) | Meta Ads Manager | >10% below 14-day baseline |
| CPA (7-day rolling) | Meta Ads Manager | >15% above 14-day baseline |
| Thumb-stop rate (video) | Meta Ads Manager | >15% below peak |
| Video completion rate | Meta Ads Manager | >10% below peak |
| Ad age (days since launch) | Manual tracking | >21 days for static, >42 for video |
| CPM (7-day rolling) | Meta Ads Manager | >20% above campaign average |
