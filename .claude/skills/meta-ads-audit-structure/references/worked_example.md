# Worked Example: audit-structure

## Scenario

**Account:** PeakFit Supplements (e-commerce, sports nutrition)
**Maturity:** Developing
**Monthly spend:** $25K
**Target CPA:** $42 (Purchase)
**Monthly conversions:** ~600

---

## Step 0: Dependencies Loaded

From campaign-structure-methodology:
- Developing account: recommended 2-4 campaigns
- Learning threshold: 50 conversions/week per ad set
- CBO preferred for all but testing campaigns

From account-maturity-methodology:
- Developing: keep it simple, consolidate aggressively

---

## Step 1: Data Retrieved

### Current Structure

```
PeakFit Supplements (act_987654321)
├── Conversions - Broad US [CONV] [CBO] [$300/day] [ACTIVE]
│   ├── Broad 18-65 [12 conv/wk] [Learning Limited] [3 ads]
│   ├── Broad 25-45 [8 conv/wk] [Learning Limited] [2 ads]
│   └── Broad Women 25-45 [6 conv/wk] [Learning Limited] [4 ads]
├── Conversions - LAL US [CONV] [CBO] [$250/day] [ACTIVE]
│   ├── LAL 1% Purchasers [15 conv/wk] [Learning Limited] [3 ads]
│   ├── LAL 1% ATC [10 conv/wk] [Learning Limited] [2 ads]
│   └── LAL 3% Purchasers [8 conv/wk] [Learning Limited] [3 ads]
├── Conversions - Interest US [CONV] [ABO] [$200/day] [ACTIVE]
│   ├── Fitness Enthusiasts [$80/day] [5 conv/wk] [Learning Limited] [2 ads]
│   ├── Gym Goers [$60/day] [4 conv/wk] [Learning Limited] [2 ads]
│   └── Protein Supplement Buyers [$60/day] [3 conv/wk] [Learning Limited] [1 ad]
├── Conversions - Retargeting [CONV] [ABO] [$150/day] [ACTIVE]
│   ├── Website Visitors 30d [$80/day] [18 conv/wk] [Learning Limited] [3 ads]
│   └── ATC 7d [$70/day] [12 conv/wk] [Learning Limited] [2 ads]
├── Traffic - Blog [TRAF] [CBO] [$50/day] [ACTIVE]
│   └── Broad US [N/A] [Active] [2 ads]
├── Conversions - Test Jan [CONV] [ABO] [$100/day] [PAUSED]
│   ├── UGC Test A [0 conv/wk] [Paused] [3 ads]
│   └── UGC Test B [0 conv/wk] [Paused] [2 ads]
├── Conversions - Test Feb [CONV] [ABO] [$100/day] [ACTIVE]
│   ├── New Hook Test [$50/day] [3 conv/wk] [Learning] [4 ads]
│   └── Carousel Test [$50/day] [2 conv/wk] [Learning] [3 ads]
├── Conversions - Flash Sale [CONV] [CBO] [$200/day] [PAUSED]
│   └── Broad US [0 conv/wk] [Paused] [5 ads]
├── Reach - Brand [REACH] [CBO] [$50/day] [ACTIVE]
│   └── Broad US [N/A] [Active] [2 ads]

Total: 9 campaigns (6 active, 3 paused), 16 ad sets, 41 ads
```

---

## Step 2: Structure Assessment

### Fragmentation Score: Heavy

**Campaign-level:**
- 5 active Conversions campaigns (recommended: 2-3 for Developing)
- 1 Traffic campaign (questionable value at $50/day)
- 1 Reach campaign (questionable at this spend level)
- 2 paused campaigns adding clutter

**Ad set-level:**
- 0 of 14 active ad sets are above the 50 conv/week learning threshold
- Every single ad set is in Learning or Learning Limited
- Budget is split across 14 ad sets, averaging ~$70/day each
- At $42 target CPA, each ad set needs $300/day minimum (42 * 50/7) -- none are close

**Ad-level:**
- 1 ad set has only 1 ad (Protein Supplement Buyers) -- no testing happening
- Most ad sets have 2-3 ads -- acceptable but low for Faris method

### Ideal vs Actual

**Recommended for Developing at $25K/month (~$830/day):**
```
PeakFit Supplements
├── Prospecting (CBO, $500/day)
│   ├── Broad US 18-55 (4-5 ads)
│   └── LAL 1% Purchasers (4-5 ads)
├── Retargeting (CBO, $200/day)
│   ├── Website Visitors 30d (3 ads)
│   └── ATC/IC 7d (3 ads)
└── Testing (ABO, $130/day)
    ├── Test A ($65/day, 3-5 ads)
    └── Test B ($65/day, 3-5 ads)
```

3 campaigns, 6 ad sets. Compared to current 6 active campaigns, 14 active ad sets.

---

## Step 3: CBO vs ABO Audit

| Campaign | Current | Ad Sets | Recommendation | Rationale |
|----------|---------|---------|---------------|-----------|
| Conversions - Broad US | CBO | 3 | CBO (keep) | Correct, but consolidate to 1-2 ad sets |
| Conversions - LAL US | CBO | 3 | CBO (keep) | Correct, but consolidate to 1 ad set |
| Conversions - Interest US | ABO | 3 | Merge into Broad campaign | Interest targeting is redundant alongside broad + LAL |
| Conversions - Retargeting | ABO | 2 | CBO | 2 similar ad sets, CBO can distribute |
| Traffic - Blog | CBO | 1 | Eliminate | $50/day on traffic at this spend level is wasteful |
| Conversions - Test Feb | ABO | 2 | ABO (keep) | Correct for testing |
| Reach - Brand | CBO | 1 | Eliminate | Brand awareness not appropriate for Developing maturity |

---

## Step 4: Ad Set Consolidation

### Learning Phase Math

At $42 CPA, 50 conversions/week requires:
- $42 * 50 / 7 = **$300/day minimum per ad set**

Current ad set budgets range from $50-$100/day. None can exit learning.

### Consolidation Recommendations

| Merge | From | Into | Combined Budget | Projected Conv/Week |
|-------|------|------|----------------|-------------------|
| Broad prospecting | 3 broad ad sets + 3 interest ad sets | 1 broad ad set | $500/day | ~85 (above threshold) |
| LAL prospecting | 3 LAL ad sets | 1 LAL ad set | $250/day (may need supplement) | ~42 (close) |
| Retargeting | 2 RT ad sets | 1 combined RT ad set | $150/day | ~30 (still below, but RT has different dynamics) |

---

## Step 5: Naming Convention Audit

### Compliance: 22% (Non-compliant)

Only 2 of 9 campaigns follow any recognizable convention. Most use descriptive English names.

| Entity | Compliant | Non-Compliant | Rate |
|--------|-----------|---------------|------|
| Campaigns | 0 | 9 | 0% |
| Ad Sets | 0 | 16 | 0% |
| Ads | 4 | 37 | 10% |

Recommendation: Implement naming conventions as part of the restructure. All new entities in the consolidated structure should follow the convention.

---

## Step 6: Advantage+ Assessment

- ASC eligible: Borderline (Developing, 600 monthly conversions)
- Recommendation: Not yet. Consolidate first, get ad sets exiting learning phase, then test ASC in Phase 4 with 15% of budget.

---

## Outputs Generated

### Restructure Timeline

| Week | Phase | Changes | Risk |
|------|-------|---------|------|
| 1 | Campaign consolidation | 5 conversion campaigns -> 2 (Prospecting + Retargeting). Eliminate Traffic + Reach. Keep Test Feb. | Medium |
| 2 | Ad set consolidation | 14 ad sets -> 6. Merge overlapping targeting. | Low |
| 3 | CBO conversion | Convert Retargeting from ABO to CBO | Low |
| 4 | Stabilize + naming | Rename all entities to convention. Monitor learning phase exits. | None |
| 5+ | Consider ASC | If learning exits confirmed and CPA stable, test ASC at $125/day | Low |

### Expected Impact

| Metric | Before | After (projected) |
|--------|--------|-------------------|
| Active campaigns | 6 | 3 |
| Active ad sets | 14 | 6 |
| Ad sets above learning threshold | 0 | 3-4 |
| Budget per ad set (avg) | ~$70/day | ~$165/day |
| Estimated CPA improvement | -- | -10 to -20% from better learning |
