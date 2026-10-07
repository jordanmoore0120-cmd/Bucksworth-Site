# Output Specifications: audit-audiences

## Deliverable 1: Audience Health Report

### File Naming
`{account_slug}_audience-health_{YYYY-MM-DD}.md`

### Template

```markdown
# Audience Health Report: {account_name}
Generated: {YYYY-MM-DD} | Period: {start_date} to {end_date}
Active Ad Sets: {count} | Custom Audiences: {count}

## Executive Summary
{2-3 sentences: overall audience health, biggest risk, biggest opportunity}

---

## Audience Map

| Ad Set | Campaign | Type | Targeting Summary | Audience Size | Reach (14d) | Penetration | Frequency | CPA | Trend | Status |
|--------|----------|------|------------------|---------------|-------------|-------------|-----------|-----|-------|--------|
| {name} | {campaign} | Prospecting | LAL 1% LTV, US, 25-55 | 2.1M | 890K | 42% | 2.3 | $48 | Stable | Healthy |

---

## Health Scores

| Ad Set | Overlap | Saturation | Exclusions | Overall |
|--------|---------|-----------|------------|---------|
| {name} | Green | Yellow | Green | Healthy |
| {name} | Red | Red | Red | Critical |

### Score Definitions
- **Green:** No issues detected
- **Yellow:** Warning signals, monitor closely
- **Red:** Action required

---

## Key Metrics
| Metric | Value | Benchmark | Status |
|--------|-------|-----------|--------|
| Avg prospecting frequency | {freq} | <2.5 | {status} |
| Avg retargeting frequency | {freq} | <7.0 | {status} |
| Highest audience penetration | {pct}% | <60% | {status} |
| Ad sets missing exclusions | {count} | 0 | {status} |
| Estimated overlap CPM tax | ${amount}/mo | $0 | {status} |
```

---

## Deliverable 2: Overlap Matrix

### File Naming
Included in the audience health report.

### Template

```markdown
## Overlap Analysis

### Overlap Matrix
| | {Ad Set A} | {Ad Set B} | {Ad Set C} | {Ad Set D} |
|---|-----------|-----------|-----------|-----------|
| {Ad Set A} | -- | 65% | 12% | 38% |
| {Ad Set B} | 65% | -- | 45% | 8% |
| {Ad Set C} | 12% | 45% | -- | 5% |
| {Ad Set D} | 38% | 8% | 5% | -- |

### Color Key
- **Red (>50%):** Critical overlap, consolidation recommended
- **Orange (30-50%):** High overlap, monitor and consider consolidation
- **Yellow (15-30%):** Moderate overlap, acceptable if performance differs
- **Green (<15%):** Low overlap, healthy differentiation

### Overlap Detail

**Pair 1: {Ad Set A} x {Ad Set B} -- 65% (Critical)**
- Shared: LAL 1% LTV source (same seed), overlapping geo (both US)
- Ad Set A CPA: $48, Ad Set B CPA: $52
- These ad sets bid against each other for the same users
- Estimated CPM premium from self-competition: +12% (~$X/month)
- **Recommendation:** Merge into single ad set using Ad Set A targeting (lower CPA)

**Pair 2: ...**
```

---

## Deliverable 3: Consolidation Recommendations

### Template

```markdown
## Consolidation Recommendations

### Recommendation 1: Merge {Ad Set A} + {Ad Set B}
- **Why:** 65% overlap, both targeting LAL 1% from same source
- **Keep:** Ad Set A targeting (CPA $48 vs $52)
- **Process:**
  1. Increase Ad Set A budget by Ad Set B amount
  2. Move winning ads from Ad Set B to Ad Set A via Post ID
  3. Pause Ad Set B
  4. Monitor for 7 days
- **Expected impact:** CPA improvement of 5-10% from reduced auction competition
- **Risk:** Low -- same audience, just removing duplication
- **Rollback:** Reactivate Ad Set B if combined CPA rises >15%

### Recommendation 2: ...
```

---

## Deliverable 4: Expansion Opportunities

### Template

```markdown
## Expansion Opportunities

### Tier 1: High Confidence (Test This Week)
| # | Opportunity | Type | Est. Size | Signal | Budget | Expected CPA |
|---|-------------|------|-----------|--------|--------|-------------|
| 1 | LAL 3% from LTV | LAL expansion | 6.3M | LAL 1% at $48 CPA | $100/day x 7d | $50-58 |

**Setup instructions:**
1. Create new ad set in CONV_PROS_US campaign
2. Target: LAL 3% from {audience_name}
3. Exclude: Purchasers 180d, all retargeting audiences
4. Budget: $100/day (ABO) or add to CBO campaign
5. Creative: Use top 3 ads from scorecard via Post ID
6. Name: LAL3-LTV_AUTO_LCAP55_D100

### Tier 2: Medium Confidence (Test Next Sprint)
| # | Opportunity | Type | Est. Size | Signal | Budget | Expected CPA |
|---|-------------|------|-----------|--------|--------|-------------|
| 1 | Interest: SaaS Tools | Interest | 12M | Adjacent to current audience | $75/day x 7d | $55-70 |

### Tier 3: Exploratory
| ... |

### Not Recommended
| Opportunity | Reason |
|-------------|--------|
| LAL 10% | Too broad, typically performs like broad targeting. Use Advantage+ instead. |
| Retargeting video viewers 365d | Too cold, minimal intent signal after 90 days. |
```
