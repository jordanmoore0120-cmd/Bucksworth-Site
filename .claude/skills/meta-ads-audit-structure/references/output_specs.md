# Output Specifications: audit-structure

## Deliverable 1: Structure Assessment Report

### File Naming
`{account_slug}_structure-audit_{YYYY-MM-DD}.md`

### Template

```markdown
# Structure Audit Report: {account_name}
Generated: {YYYY-MM-DD}
Account Maturity: {maturity_level}
Fragmentation Score: {Low/Moderate/Heavy/Excessive}

---

## Current Structure Map

```
{account_name} ({ad_account_id})
├── {Campaign 1 Name} [{objective}] [{CBO/ABO}] [${budget}/day] [{status}]
│   ├── {Ad Set 1} [{weekly_conv} conv/wk] [{learning_status}] [{ad_count} ads]
│   ├── {Ad Set 2} [{weekly_conv} conv/wk] [{learning_status}] [{ad_count} ads]
│   └── {Ad Set 3} [{weekly_conv} conv/wk] [{learning_status}] [{ad_count} ads]
├── {Campaign 2 Name} ...
│   └── ...
└── {Campaign N Name} ...
    └── ...
```

Total: {campaign_count} campaigns, {adset_count} ad sets, {ad_count} ads

---

## Recommended Structure (for {maturity_level} at ${monthly_spend}/month)

```
{account_name}
├── Prospecting (CBO, ${budget}/day)
│   ├── Broad / Advantage+ Audience (3-5 ads)
│   └── LAL 1-3% Top Customers (3-5 ads)
├── Retargeting (CBO, ${budget}/day)
│   ├── Website Visitors 30d (2-3 ads)
│   └── High-Intent (ATC/IC) 7d (2-3 ads)
├── Testing (ABO, ${budget}/day)
│   ├── Test Theme A ($X/day, 3-5 ads)
│   └── Test Theme B ($X/day, 3-5 ads)
└── ASC (if eligible, ${budget}/day, 6-10 ads)
```

Target: {recommended_campaign_count} campaigns, {recommended_adset_count} ad sets

---

## Fragmentation Analysis

### Campaign-Level
| Objective | Active | Paused | Total | Recommended | Status |
|-----------|--------|--------|-------|-------------|--------|
| Conversions | {count} | {count} | {count} | {count} | {OK/Fragmented} |
| Traffic | {count} | {count} | {count} | {count} | {OK/Fragmented} |

### Ad Set-Level
| Ad Set | Campaign | Weekly Conv | Learning Status | Budget | Viable? | Issue |
|--------|----------|------------|----------------|--------|---------|-------|
| {name} | {campaign} | {count} | {status} | ${budget} | {Yes/No} | {description} |

### Ad-Level
| Ad Set | Active Ads | Status | Issue |
|--------|-----------|--------|-------|
| {name} | {count} | {OK/Too Many/Too Few} | {description if issue} |

---

## CBO vs ABO Assessment

| Campaign | Current Type | Ad Sets | Weekly Conv | Recommended | Rationale |
|----------|-------------|---------|------------|-------------|-----------|
| {name} | CBO | {count} | {count} | {CBO/ABO} | {reason} |

---

## Advantage+ Assessment

| Check | Status | Detail |
|-------|--------|--------|
| ASC eligible | {Yes/No} | {maturity and conversion volume check} |
| ASC running | {Yes/No} | {count} ASC campaigns |
| ASC budget share | {pct}% | Recommended: {pct}% for {maturity} |
| ASC creative count | {count} | Recommended: 6-10+ |
| ASC vs manual CPA | ASC ${cpa} vs manual ${cpa} | {ASC winning/losing/comparable} |
```

---

## Deliverable 2: Consolidation Plan

### Template

```markdown
## Consolidation Plan: {account_name}
Total Duration: {weeks} weeks

### Phase 1: Campaign Consolidation (Week {N})

| Action | From | To | Method | Risk |
|--------|------|----|--------|------|
| Merge | {campaign A}, {campaign B} | {new campaign name} | Transfer winning ad sets, pause originals | {Low/Medium} |

**Steps:**
1. Create new campaign {name} with CBO budget of ${amount}
2. Move ad sets from {campaign A} -- transfer top {count} ads via Post ID
3. Move ad sets from {campaign B} -- transfer top {count} ads via Post ID
4. Pause {campaign A} and {campaign B} (do not delete)
5. Monitor new campaign for 7 days

**Success criteria:** CPA within 20% of combined baseline, learning phase exits within 7 days
**Rollback:** Reactivate original campaigns, pause new campaign

### Phase 2: Ad Set Consolidation (Week {N})

| Action | From Ad Sets | To Ad Set | Campaign | Est. Weekly Conv |
|--------|-------------|-----------|----------|-----------------|
| Merge | {ad set A}, {ad set B} | {new ad set} | {campaign} | {combined_conv} |

**Steps:**
1. Increase {ad set A} budget by {ad set B} budget amount
2. Transfer winning ads from {ad set B} to {ad set A} via Post ID
3. Pause {ad set B}
4. Monitor for 7 days

### Phase 3: Budget Type Migration (Week {N})

| Campaign | From | To | Rationale |
|----------|------|----|-----------|
| {name} | ABO | CBO | {count} similar ad sets, {conv} weekly conversions |

### Phase 4: ASC Introduction (Week {N}, if applicable)

| Setting | Value | Rationale |
|---------|-------|-----------|
| Budget | ${amount}/day ({pct}% of total) | Starting allocation for testing |
| Creative count | {count} ads | Top performers from scorecard |
| Existing customer cap | {pct}% | Limit retargeting within ASC |
| Country targeting | {countries} | Match current prospecting geo |

---

## Implementation Rules
- One phase per week minimum (allow learning stabilization)
- Use Post ID for all ad transfers (preserve social proof)
- Pause, never delete (retain historical data)
- Record baselines before each phase
- If CPA rises >25% for 72h at any phase, halt and reassess
```

---

## Deliverable 3: Naming Violations List

### Template

```markdown
## Naming Convention Audit: {account_name}
Compliance Rate: {pct}% ({classification})

### Convention Reference
- Campaign: `{objective}_{audience}_{geo}_{launch_date}`
- Ad Set: `{targeting}_{placement}_{bid_strategy}_{budget}`
- Ad: `{creative_type}_{concept}_{variant}_{format}`

### Violations

#### Campaigns ({count} violations / {total})
| Current Name | Issue | Suggested Name |
|-------------|-------|----------------|
| "Test Campaign 2" | No tokens present | CONV_TEST_US_2026-03 |
| "US Prospecting v3" | Non-standard format | CONV_PROS_US_2026-01 |

#### Ad Sets ({count} violations / {total})
| Current Name | Issue | Suggested Name |
|-------------|-------|----------------|
| "broad - USA" | Missing tokens | BROAD_AUTO_LCAP60_CBO |

#### Ads ({count} violations / {total})
| Current Name | Issue | Suggested Name |
|-------------|-------|----------------|
| "video 1" | Missing all tokens | VID_DEMO_V1_9x16 |

### Recommendation
{If <50% compliant: "Rename all entities during restructure (Phase 5). Batch rename in Ads Manager."}
{If 50-80%: "Enforce conventions on all new entities. Rename violations during next maintenance window."}
{If >80%: "Fix remaining violations. Convention is well-adopted."}
```

---

## Deliverable 4: Restructure Timeline

### Template

```markdown
## Restructure Timeline: {account_name}

| Week | Phase | Key Changes | Risk | Success Criteria |
|------|-------|-------------|------|-----------------|
| 1 | Campaign consolidation | Merge {count} -> {count} | Medium | CPA within 20% |
| 2 | Ad set consolidation | Merge {count} -> {count} | Low | Learning exits <7d |
| 3 | CBO/ABO migration | Convert {count} campaigns | Medium | Budget util >80% |
| 4 | ASC launch | Add 1 ASC campaign | Low | CPA within 130% manual |
| 5 | Naming cleanup | Rename {count} entities | None | 100% compliance |

**Overall risk:** {Low/Medium/High}
**Estimated CPA impact during restructure:** +/-{pct}% temporarily
**Estimated CPA impact after restructure:** -{pct}% improvement
**Rollback plan:** Each phase has independent rollback. Reactivate paused entities if needed.
```
