# Campaign Diagnostic Tree

## Full Visual Decision Tree

This document provides the complete visual decision tree for diagnosing underperforming Meta Ads campaigns. Work through branches sequentially -- each branch assumes prior branches have been cleared.

---

## Entry Point: Define the Problem

Before entering the tree, answer these questions:

1. **What metric is underperforming?** (CPA, ROAS, volume, CTR, CVR)
2. **How long has it been underperforming?** (<48 hours = too early to diagnose, 3-7 days = actionable, 7+ days = urgent)
3. **Is it isolated or account-wide?** (One campaign = likely campaign-specific, all campaigns = measurement or external)
4. **What changed recently?** (Budget, creative, audience, landing page, season, platform update)

---

## Branch 1: Measurement

```
Is the problem REAL?
│
├── Check Pixel Status
│   ├── Pixel NOT firing ──> Fix pixel installation ──> Wait 48h ──> Reassess
│   └── Pixel firing ──> Continue
│
├── Check CAPI Status
│   ├── CAPI disconnected ──> Reconnect CAPI ──> Wait 48h ──> Reassess
│   ├── CAPI erroring (400/500) ──> Debug server-side ──> Wait 48h ──> Reassess
│   └── CAPI healthy ──> Continue
│
├── Check EMQ Score
│   ├── EMQ <6.0 ──> Add more matching parameters ──> Monitor 7 days
│   └── EMQ >=6.0 ──> Continue
│
├── Check Event Deduplication
│   ├── Duplicate events detected ──> Implement event_id matching ──> Wait 48h
│   └── No duplicates ──> Continue
│
├── Check Attribution Window
│   ├── Window changed in last 14 days ──> Compare using same window ──> Wait 7 days
│   └── Window unchanged ──> Continue
│
└── Check Delayed Attribution
    ├── >20% gap between 1-day and 7-day ──> Use 7-day window for decisions ──> Note
    └── Gap <20% ──> MEASUREMENT CLEAR ──> Proceed to Branch 2
```

## Branch 2: Delivery

```
Is the campaign DELIVERING?
│
├── Check Learning Phase
│   ├── "Learning Limited" >7 days ──> Consolidate ad sets OR move optimization event earlier
│   ├── "Learning" <7 days ──> Wait (normal) ──> Re-check in 7 days
│   └── "Active" ──> Continue
│
├── Check Audience Size
│   ├── <1M (prospecting) ──> Broaden targeting ──> Wait 3-5 days
│   └── >=1M ──> Continue
│
├── Check Spend vs Budget
│   ├── <50% of budget for 3+ days ──> Check bid caps, relevance, overlap
│   ├── 50-95% of budget ──> Normal ──> Continue
│   └── >95% of budget ──> Budget constrained ──> See Branch 6
│
├── Check Account Spending Limit
│   ├── Limit reached ──> Raise or remove limit ──> Immediate
│   └── No limit or under limit ──> Continue
│
├── Check Ad Disapprovals
│   ├── Ads rejected ──> Fix policy violations OR appeal ──> Immediate
│   └── All approved ──> Continue
│
└── Check Delivery Estimate
    ├── "May not spend" warning ──> Broaden audience, raise bid, check relevance
    └── No warnings ──> DELIVERY CLEAR ──> Proceed to Branch 3
```

## Branch 3: Audience

```
Is TARGETING the issue?
│
├── Check Frequency
│   ├── Prospecting >3.0 (7-day) ──> Audience saturated ──> Expand audience + rotate creative
│   ├── Retargeting >7.0 (7-day) ──> Rotate creative ──> Reduce retargeting window
│   └── Within range ──> Continue
│
├── Check Audience Overlap
│   ├── >30% overlap between ad sets ──> Consolidate ad sets OR add exclusions
│   └── <30% overlap ──> Continue
│
├── Check Audience Size
│   ├── <500K (non-B2B prospecting) ──> Broaden targeting
│   ├── >50M with <$500/day budget ──> Not necessarily a problem ──> Check creative
│   └── Appropriate range ──> Continue
│
├── Check Advantage+ Expansion
│   ├── >50% of spend on expanded audience with worse CPA ──> Disable A+ Detailed Targeting
│   ├── Expansion CPA similar/better ──> Keep (algorithm found good users)
│   └── <50% on expansion ──> Normal ──> Continue
│
└── Check Demographic Breakdown
    ├── Single segment >60% of spend (unintentional) ──> Review targeting or creative bias
    └── Balanced distribution ──> AUDIENCE CLEAR ──> Proceed to Branch 4
```

## Branch 4: Creative

```
Is CREATIVE the problem?
│
├── Check CTR Trend
│   ├── >10% decline from peak (7-day rolling) ──> Creative fatigue ──> Launch new concepts
│   └── CTR stable or improving ──> Continue
│
├── Check Hook Rate
│   ├── <25% (video) ──> Weak hook ──> Test new hooks on same body
│   └── >=25% ──> Continue
│
├── Check Ad Relevance Diagnostics
│   ├── Quality Ranking: Below Average ──> Improve creative quality
│   ├── Engagement Ranking: Below Average ──> Improve hook / format
│   ├── Conversion Ranking: Below Average ──> Likely a landing page issue (Branch 5)
│   └── All Average or Above ──> Continue
│
├── Check Creative Age
│   ├── All ads >30 days old ──> Launch fresh creative immediately
│   └── Mix of ages ──> Continue
│
└── Check Format Distribution
    ├── Single format >80% of spend ──> Diversify (add video if all static, or vice versa)
    └── Mixed formats ──> CREATIVE CLEAR ──> Proceed to Branch 5
```

## Branch 5: Landing Page

```
Is POST-CLICK the issue?
│
├── Check Bounce Rate (from paid traffic)
│   ├── >70% ──> Check load time, message match, popups
│   └── <70% ──> Continue
│
├── Check Mobile Load Time
│   ├── >3 seconds (4G) ──> Optimize page speed ──> Compress images, defer scripts
│   └── <3 seconds ──> Continue
│
├── Check Conversion Rate vs Baseline
│   ├── <50% of site average ──> Landing page problem ──> A/B test, reduce friction
│   └── Within range ──> Continue
│
├── Check Message Match
│   ├── Ad promise != page headline ──> Align messaging ──> Create dedicated landing pages
│   └── Consistent message ──> Continue
│
└── Check Redirect Chains
    ├── >2 redirects ──> Update URLs to final destination
    └── 0-1 redirects ──> LANDING PAGE CLEAR ──> Proceed to Branch 6
```

## Branch 6: Budget

```
Is BUDGET the constraint?
│
├── Check Spend vs Budget
│   ├── >95% consistently ──> Budget constrained ──> Scale by 20% every 48-72h
│   └── <95% ──> Continue
│
├── Check Learning Phase Budget
│   ├── Not enough for 50 events/week ──> Increase budget OR consolidate ad sets
│   └── Sufficient volume ──> Continue
│
├── Check Ad Set Count
│   ├── >5 ad sets splitting CBO ──> Consolidate to 3-5 ad sets
│   └── Appropriate count ──> Continue
│
└── Check Recent Budget Changes
    ├── >20% change in last 7 days ──> Learning phase may have reset ──> Wait 3-5 days
    └── Stable budget ──> BUDGET CLEAR ──> Proceed to Branch 7
```

## Branch 7: Bidding

```
Is BID STRATEGY wrong?
│
├── Check CPA vs Target
│   ├── >30% above target ──> Review bid strategy for campaign maturity
│   └── Within 30% ──> Continue
│
├── Check Spend Rate with Cost Cap
│   ├── <50% of budget ──> Cap too restrictive ──> Increase by 10-20%
│   └── >50% ──> Continue
│
├── Check Strategy vs Campaign Stage
│   ├── New campaign with Bid Cap ──> Switch to Lowest Cost ──> Gather data first
│   ├── Mature campaign with no cap ──> Add Cost Cap at target ──> Control efficiency
│   └── Appropriate strategy ──> Continue
│
└── Check Volume with ROAS Target
    ├── <10 conversions/week ──> Switch to purchase count optimization
    └── Sufficient volume ──> BIDDING CLEAR ──> Proceed to Branch 8
```

## Branch 8: External

```
Is it OUTSIDE Meta?
│
├── Check Account-Wide CPMs
│   ├── >20% increase (last 14 days) ──> Market-wide ──> Adjust targets, focus on efficiency
│   └── Stable CPMs ──> Continue
│
├── Check Competitor Activity (Ad Library)
│   ├── New competitor scaling aggressively ──> Differentiate creative, shift audiences
│   └── Normal competitive landscape ──> Continue
│
├── Check Platform Announcements
│   ├── Recent policy or feature change ──> Adapt strategy ──> Test early
│   └── No changes ──> Continue
│
├── Check Seasonality
│   ├── Known seasonal period ──> Adjust expectations and budget allocation
│   └── Normal period ──> Continue
│
└── Check Privacy/iOS Changes
    ├── Recent iOS update ──> Monitor EMQ, reinforce CAPI
    └── No changes ──> EXTERNAL CLEAR ──> Revisit Branches 1-7 with fresh perspective
```

---

## End State

If all 8 branches are clear and the problem persists:

1. **Peer review:** Have another media buyer audit the account with fresh eyes
2. **Longer timeframe:** Evaluate over 14-30 days instead of 7 -- the "problem" may be normal variance
3. **Benchmark recalibration:** Your targets may be unrealistic for current market conditions
4. **Structural test:** Launch a completely new campaign (different objective, audience, creative) as a clean test
5. **Account health:** Contact Meta support to check for account-level issues not visible in the dashboard
