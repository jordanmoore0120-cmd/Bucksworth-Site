# Output Specifications for Bidding Audit

Format specifications for the three deliverables produced by `audit_bidding`.

---

## Deliverable 1: Strategy Assessment

### Table Format

| Campaign | Type | Current Strategy | Current Target | 30d Conv | 30d CPA | 30d ROAS | Recommended Strategy | Recommended Target | Rationale | Priority |
|---|---|---|---|---|---|---|---|---|---|---|

**Column definitions:**
- **Campaign:** Campaign name
- **Type:** Search, PMax, Shopping, Display, Demand Gen, Video
- **Current Strategy:** Manual CPC, Max Clicks, Max Conv, tCPA, Max Conv Value, tROAS, Target IS
- **Current Target:** tCPA amount or tROAS ratio (blank if no target)
- **30d Conv:** Conversions in last 30 days
- **30d CPA:** Cost per conversion (last 30 days)
- **30d ROAS:** Return on ad spend (last 30 days)
- **Recommended Strategy:** What the strategy should be, based on the selection framework
- **Recommended Target:** Recommended target amount/ratio (blank if no target recommended)
- **Rationale:** One sentence explaining why the recommendation differs from current (or "No change" if appropriate)
- **Priority:** Critical, High, Medium, Low

### Target Evaluation Sub-Table (for campaigns with targets)

| Campaign | Target | 30d Actual | 60d Actual | 90d Actual | 30d Variance | Assessment |
|---|---|---|---|---|---|---|

**Assessment values:** Well-calibrated, Slightly Aggressive, Too Aggressive, Slightly Loose, Too Loose

---

## Deliverable 2: Migration Plan

### Timeline Format

```
Week 1 (Date Range)
  - Campaign: [name]
  - Change: [current strategy] -> [recommended strategy]
  - New Target: [if applicable]
  - Expected Learning Period: [7-14 days]
  - Risk: [Low/Medium/High]
  - Success Metric: [what to look for after learning completes]

Week 3 (Date Range)
  - Campaign: [name]
  - Change: [description]
  ...
```

### Sequencing Rules

1. **Critical priority changes first.** These are actively harming performance.
2. **One change per 14-day window** (for accounts with <10 campaigns). Cap at 2-3 simultaneous changes for larger accounts.
3. **Never exceed 30% of account spend in learning campaigns.** If the first change puts 25% of spend in learning, wait for it to exit before making the next change.
4. **Brand campaign changes independent of non-brand.** Brand and non-brand serve different purposes; their changes can overlap if they are not in the same budget or portfolio.
5. **Portfolio creation comes after individual campaign strategies are correct.** Do not create a portfolio that includes campaigns still on the wrong strategy.

### Migration Plan Summary

Include at the top of the migration plan:

- Total number of changes recommended
- Estimated total migration timeline (first change to last)
- Percentage of account spend affected
- Expected performance impact during migration (temporary CPA increase/ROAS decrease during learning periods)

---

## Deliverable 3: Summary Dashboard

### Strategy Distribution

| Strategy | # Campaigns | % of Total Spend | Assessment |
|---|---|---|---|
| Manual CPC | X | X% | X appropriate, X misfit |
| Max Clicks | X | X% | X appropriate, X misfit |
| Max Conversions (no target) | X | X% | X appropriate, X misfit |
| tCPA | X | X% | X appropriate, X misfit |
| Max Conv Value (no target) | X | X% | X appropriate, X misfit |
| tROAS | X | X% | X appropriate, X misfit |
| Target IS | X | X% | X appropriate, X misfit |

### Key Metrics

- **Total campaigns audited:** X
- **Campaigns with appropriate strategy:** X (X%)
- **Campaigns with misfit strategy:** X (X%)
- **Campaigns currently in learning:** X (X% of spend)
- **Portfolio opportunities identified:** X
- **VBB readiness:** Ready / Partially Ready / Not Ready

### Top 3 Priority Actions

1. [Highest impact action with one-sentence rationale]
2. [Second highest impact action]
3. [Third highest impact action]

### Risk Assessment

- **Migration risk:** Low / Medium / High (based on number of changes and % of spend affected)
- **Timeline:** X weeks to complete all recommended changes
- **Expected temporary performance impact:** CPA may increase X-X% during learning periods; total learning exposure is X weeks across all changes
