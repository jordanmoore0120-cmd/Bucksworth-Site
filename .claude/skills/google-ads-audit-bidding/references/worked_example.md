# Worked Example: CloudSync Bidding Audit

Fictional B2B SaaS company to illustrate the complete `audit_bidding` workflow.

---

## Account Context

**Company:** CloudSync (B2B SaaS, file sync and collaboration platform)
**Business Model:** Lead generation (demo requests and free trial starts)
**Account Maturity:** Developing (35 conversions/month, 14 months old, standard tracking)
**Primary KPI:** CPA (target: $85)
**Monthly Budget:** $12,000
**Conversion Actions:** "Demo Request" (primary), "Free Trial Start" (secondary)

---

## Campaign Data (Last 30 Days)

| Campaign | Type | Strategy | Target | Cost | Conv | CPA | Conv Value | ROAS | Status |
|---|---|---|---|---|---|---|---|---|---|
| CloudSync Brand | Search | Manual CPC | n/a | $800 | 12 | $67 | $3,600 | 4.50 | Eligible |
| Non-Brand: File Sync | Search | tCPA | $50 | $3,200 | 8 | $400 | $2,400 | 0.75 | Learning (limited) |
| Non-Brand: Collaboration | Search | Max Conv (no target) | n/a | $2,800 | 3 | $933 | $900 | 0.32 | Eligible |
| Non-Brand: Enterprise Storage | Search | Max Conv (no target) | n/a | $1,500 | 3 | $500 | $900 | 0.60 | Eligible |
| PMax: CloudSync | PMax | Max Conv Value | n/a | $2,000 | 6 | $333 | $1,800 | 0.90 | Eligible |
| Display Remarketing | Display | Max Clicks | n/a | $600 | 1 | $600 | $300 | 0.50 | Eligible |
| Demand Gen: IT Leaders | Demand Gen | tCPA | $70 | $800 | 2 | $400 | $600 | 0.75 | Learning |
| Competitor: Dropbox/Box | Search | Manual CPC | n/a | $300 | 0 | n/a | $0 | 0.00 | Eligible |

**Total:** $12,000 spend, 35 conversions, $342 average CPA

---

## Step 2: Strategy-Fit Assessment

### CloudSync Brand (Manual CPC)
**Classification: Appropriate.** Brand campaigns with predictable CPCs are a valid Manual CPC use case at any maturity level. 12 conversions/month at $67 CPA is strong performance. No change needed.

### Non-Brand: File Sync (tCPA at $50)
**Classification: Misfit (Over).** The campaign has 8 conversions in 30 days, below the 15-conversion minimum for tCPA stability. Additionally, the $50 target is dramatically below the $400 actual CPA. This is the "Aggressive Target Trap" pattern: the algorithm suppresses bids to try to hit an unrealistic target, reducing volume further, creating a downward spiral.

### Non-Brand: Collaboration (Max Conversions, no target)
**Classification: Appropriate (Edge).** 3 conversions/month is low volume. Max Conversions without a target is appropriate for this volume, but the campaign may not be viable as a standalone campaign at this volume level. Consider merging with Enterprise Storage.

### Non-Brand: Enterprise Storage (Max Conversions, no target)
**Classification: Appropriate (Edge).** Same assessment as Collaboration. 3 conversions/month. Strategy is appropriate for the volume, but the campaign is a merge candidate.

### PMax: CloudSync (Max Conversion Value)
**Classification: Appropriate.** Max Conversion Value without a target is appropriate for a Developing account. The campaign has 6 conversions/month, not enough for a tROAS target. Current strategy allows the algorithm to optimize for value without a constraining target.

### Display Remarketing (Maximize Clicks)
**Classification: Appropriate.** Display remarketing with 1 conversion/month does not have sufficient volume for conversion-based bidding. Maximize Clicks is appropriate as a traffic/visibility strategy for the remarketing pool.

### Demand Gen: IT Leaders (tCPA at $70)
**Classification: Misfit (Over).** 2 conversions in 30 days is far below the 15-conversion minimum for tCPA. The strategy cannot function with this volume. The "Learning" status confirms the algorithm lacks sufficient signal.

### Competitor: Dropbox/Box (Manual CPC)
**Classification: Appropriate.** Competitor/conquest campaigns with zero conversions and the need for precise cost control are a valid Manual CPC use case. No change needed.

---

## Step 3: Target Evaluation

### Non-Brand: File Sync

| Metric | Target | 30d Actual | Variance |
|---|---|---|---|
| CPA | $50 | $400 | -87.5% (target is 87.5% below actual) |

**Assessment: Too Aggressive.** The $50 target is 87.5% below the actual $400 CPA. This is an extreme misfit. The target is suppressing delivery. The campaign is in "Learning (limited)" because the algorithm cannot find enough conversions at this price point.

### Demand Gen: IT Leaders

| Metric | Target | 30d Actual | Variance |
|---|---|---|---|
| CPA | $70 | $400 | -82.5% |

**Assessment: Too Aggressive, compounded by insufficient volume.** Even if the target were realistic, 2 conversions/month cannot sustain tCPA bidding.

---

## Step 4: Learning Period Check

- **Currently in learning:** Demand Gen: IT Leaders (Learning), Non-Brand: File Sync (Learning, limited)
- **Percentage of spend in learning:** $4,000 / $12,000 = 33% (exceeds the 30% threshold)
- **Chronic learning:** Non-Brand: File Sync has been in "Learning (limited)" for 28+ days based on the persistent status

**Finding:** The account has a learning period problem. One-third of spend is in campaigns that are either actively learning or stuck in learning. This is destabilizing overall account performance.

---

## Step 5: Portfolio Opportunity

**Candidate group:** Non-Brand: Collaboration + Non-Brand: Enterprise Storage

These two campaigns:
- Target the same conversion action (Demo Request)
- Have similar conversion values (~$300/conversion)
- Combined volume: 6 conversions/month
- Are both on Max Conversions (no target)

**Assessment:** Merging these into a single campaign (rather than a portfolio) would be more effective at this volume level. Combined, they would have 6 conversions and $4,300 spend, still below the 15-conversion threshold for tCPA but with stronger signal than either alone. A portfolio at this volume adds complexity without enough data to optimize across campaigns.

**Recommendation:** Merge into one "Non-Brand: General" campaign rather than create a portfolio. Revisit portfolio bidding when account reaches Established maturity.

---

## Step 6: VBB Readiness

**Assessment: Not Ready.**
- Account maturity is Developing (requires Advanced)
- 35 conversions/month (requires 50-100+)
- Conversion values are present but not differentiated enough (most conversions are $300 demo requests)
- No offline conversion import or enhanced conversions

VBB is a future consideration, not a current priority.

---

## Step 7: Recommendations

| Priority | Campaign | Recommendation | Rationale |
|---|---|---|---|
| Critical | Non-Brand: File Sync | Remove tCPA target. Switch to Max Conversions (no target). | tCPA with $50 target on 8 conv/month is the Aggressive Target Trap. Volume insufficient for any target. |
| Critical | Demand Gen: IT Leaders | Remove tCPA target. Switch to Max Conversions (no target). | 2 conv/month cannot sustain tCPA. Algorithm is stuck in learning. |
| High | Collaboration + Enterprise Storage | Merge into single "Non-Brand: General" campaign on Max Conversions (no target). | 3 conv/month each is too thin for separate campaigns. Combined signal is stronger. |
| Low | CloudSync Brand | No change. | Appropriate strategy for use case. |
| Low | PMax: CloudSync | No change. Monitor for 50+ conv/month to add tROAS. | Appropriate for Developing maturity. |
| Low | Display Remarketing | No change. | Appropriate for remarketing at this volume. |
| Low | Competitor: Dropbox/Box | No change. | Appropriate for conquest campaigns. |

---

## Migration Plan

### Week 1 (Immediate)

**Change 1: Non-Brand: File Sync**
- Current: tCPA at $50
- New: Maximize Conversions (no target)
- Expected learning period: 7-14 days
- Risk: Low (removing a constraining target should increase volume)
- Success metric: Conversion volume increases within 14 days. CPA will likely decrease from $400 as the algorithm is no longer suppressing delivery.

**Change 2: Demand Gen: IT Leaders**
- Current: tCPA at $70
- New: Maximize Conversions (no target)
- Expected learning period: 7-14 days
- Risk: Low (same rationale as above)
- Success metric: Campaign exits learning status. Any increase in conversion volume is positive.

Note: Both changes are Critical priority and affect different campaign types with independent budgets. Implementing simultaneously is acceptable because they serve different audiences and the combined learning exposure (33%) is at the threshold but declining from the current state (already 33% in learning with no resolution).

### Week 3

**Change 3: Merge Collaboration + Enterprise Storage**
- Current: Two campaigns, Max Conversions (no target), 3 conv/month each
- New: One "Non-Brand: General" campaign, Max Conversions (no target)
- Expected learning period: 7-14 days for the new campaign
- Risk: Medium (campaign restructure requires keyword and ad group migration)
- Success metric: Combined campaign shows 6+ conversions/month at CPA below $700 (current blended average)

### Week 5+

- Evaluate File Sync performance post-learning. If 15+ conversions/month, consider adding tCPA target (set at $400-450, then tighten).
- Evaluate merged Non-Brand campaign performance.
- No additional changes until all campaigns exit learning.

---

## Summary Dashboard

### Strategy Distribution

| Strategy | # Campaigns | % of Spend | Assessment |
|---|---|---|---|
| Manual CPC | 2 | 9% | 2 appropriate |
| Max Clicks | 1 | 5% | 1 appropriate |
| Max Conversions (no target) | 2 | 36% | 2 appropriate (edge, merge candidates) |
| tCPA | 2 | 33% | 0 appropriate, 2 misfit (over) |
| Max Conv Value (no target) | 1 | 17% | 1 appropriate |

### Key Metrics

- **Total campaigns audited:** 8
- **Campaigns with appropriate strategy:** 5 (63%)
- **Campaigns with misfit strategy:** 2 (25%), plus 1 merge opportunity
- **Campaigns currently in learning:** 2 (33% of spend)
- **Portfolio opportunities identified:** 0 (merge recommended instead)
- **VBB readiness:** Not Ready

### Top 3 Priority Actions

1. Remove tCPA target from Non-Brand: File Sync (Critical). The $50 target on 8 conversions/month is suppressing volume and stuck in chronic learning. Switch to Max Conversions with no target.
2. Remove tCPA target from Demand Gen: IT Leaders (Critical). 2 conversions/month cannot sustain target-based bidding. Switch to Max Conversions with no target.
3. Merge Collaboration and Enterprise Storage into a single campaign (High). 3 conversions/month each is too thin for separate campaigns. Consolidation strengthens signal.
