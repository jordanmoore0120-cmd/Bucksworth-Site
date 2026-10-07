# Output Specifications: audit-bidding

## Deliverable 1: Strategy-Fit Matrix

### File Naming
`{account_slug}_bidding-audit_{YYYY-MM-DD}.md`

### Template

```markdown
# Bidding Strategy Audit: {account_name}
Generated: {YYYY-MM-DD} | Period: {start_date} to {end_date}
Account Maturity: {maturity_level}
Recommended Default Strategy: {strategy}

---

## Strategy Distribution

| Strategy | Campaigns | Spend Share | Avg CPA | Avg CPA Variance |
|----------|-----------|-----------|---------|-----------------|
| Lowest Cost | {count} | {pct}% | ${cpa} | {variance}% |
| Cost Cap | {count} | {pct}% | ${cpa} | {variance}% |
| Bid Cap | {count} | {pct}% | ${cpa} | {variance}% |
| Min ROAS | {count} | {pct}% | ${cpa} | {variance}% |

---

## Strategy-Fit Assessment

| Campaign | Objective | Current Strategy | Cap/Bid | Avg CPA | vs Target | Performance Grade | Recommended | Fit |
|----------|-----------|-----------------|---------|---------|-----------|-------------------|-------------|-----|
| {name} | Conversions | Lowest Cost | N/A | ${cpa} | +{pct}% | B | Cost Cap | Mismatch |
| {name} | Conversions | Cost Cap | $65 | ${cpa} | -{pct}% | A | Cost Cap | Optimal |

### Fit Classification
- **Optimal:** Strategy matches recommendation and performance is on target
- **Acceptable:** One tier off but within targets
- **Mismatch:** Strategy inappropriate for maturity or significantly underperforming
- **Legacy:** Was correct at previous maturity, needs upgrade

---

## Learning Phase Status

| Ad Set | Campaign | Status | Weekly Conv | Days in Learning | Projected Exit | Issue |
|--------|----------|--------|------------|-----------------|---------------|-------|
| {name} | {campaign} | Learning | {count} | {days} | {date or "unlikely"} | Budget too low |
| {name} | {campaign} | Learning Limited | {count} | {days} | N/A | Audience too small |
| {name} | {campaign} | Graduated | {count} | -- | -- | None |

---

## Cost Control Analysis

### Cost Cap Campaigns
| Campaign | Cap | Avg CPA | Gap | Budget Util | Delivery | Assessment |
|----------|-----|---------|-----|-------------|----------|------------|
| {name} | ${cap} | ${cpa} | {pct}% | {pct}% | Even | Cap set correctly |
| {name} | ${cap} | ${cpa} | {pct}% | {pct}% | Front-loaded | Cap too high |

### Bid Cap Campaigns
| Campaign | Bid | Avg CPC | Daily Delivery Pattern | Conv Volume | Assessment |
|----------|-----|---------|----------------------|-------------|------------|
| {name} | ${bid} | ${cpc} | Even | {count}/day | Bid competitive |

---

## Key Findings

1. {Finding with data support}
2. {Finding with data support}
3. {Finding with data support}
```

---

## Deliverable 2: Migration Plan

### Template

```markdown
# Bidding Migration Plan: {account_name}
Generated: {YYYY-MM-DD}
Account Maturity: {maturity_level}
Target State: {description of ideal strategy distribution}
Estimated Duration: {weeks} weeks

---

## Phase 1: {date range}
**Campaign:** {name}
**Change:** {current strategy} -> {new strategy}
**New Cap/Bid:** ${amount} (calculated: target CPA ${target} + 25% = ${cap})

| Metric | Pre-Change Baseline (7d avg) | Record Actual |
|--------|----------------------------|---------------|
| CPA | ${baseline} | $______ |
| Daily Spend | ${baseline} | $______ |
| Daily Conversions | {baseline} | ______ |
| Budget Utilization | {baseline}% | ______% |

**Success criteria:** CPA within 20% of baseline, spending >70% of budget within 5 days
**Rollback trigger:** CPA >50% above baseline for 3 consecutive days, or spend <40% of budget
**Wait time before Phase 2:** 7 days minimum after learning phase exit

---

## Phase 2: {date range}
{same format}

---

## Phase 3: {date range}
{same format}

---

## No Change Required

| Campaign | Current Strategy | Why No Change |
|----------|-----------------|---------------|
| {name} | Cost Cap $65 | Optimal fit, CPA at target, spending budget |

---

## Risk Assessment

| Risk Factor | Level | Mitigation |
|-------------|-------|-----------|
| Overall migration risk | {Low/Medium/High} | Sequenced execution, one change at a time |
| CPA volatility during transition | {range}% | Cost caps provide downside protection |
| Learning phase disruption | {count} ad sets affected | Wait for exit before next change |
| Revenue impact | ~${amount} during transition | Budget maintained, only strategy changing |

---

## Post-Migration Monitoring (14-day checklist)

For each changed campaign, check daily:
- [ ] CPA vs pre-change baseline
- [ ] Daily spend vs budget
- [ ] Learning phase status
- [ ] Conversion volume
- [ ] CPM trend
```
