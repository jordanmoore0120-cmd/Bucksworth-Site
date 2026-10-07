# Output Specifications: Audit Local

## Output 1: Local Audit Report

### Format
Markdown document with sections corresponding to each audit step.

### Structure

```
# Local Audit Report: [Account Name]
## Date: [Date]
## Account ID: [ID]
## Business Type: [Type] | Locations: [Count]

---

### GBP Integration Status
- Linking status: [Linked / Not Linked / Partially Linked]
- Location extensions: [Active on X/Y campaigns]
- Review score: [Score] ([Count] reviews)
- Findings: [bullet list with severity tags]

### Location Targeting Configuration
- Targeting method: [table: campaign, method, status]
- Radius/area settings: [table: campaign, target, radius, bid adjustment]
- Geographic performance highlights: [top 5 segments by spend with CPA]
- Findings: [bullet list with severity tags]

### Offline Conversion Tracking
- Tracking methods active: [list]
- Tracking methods missing: [list]
- Completeness level: [Minimal / Basic / Intermediate / Advanced]
- Findings: [bullet list with severity tags]

### Campaign Evaluation
- Campaign types in use: [table: campaign, type, spend, conversions]
- Keyword strategy assessment: [summary]
- Extension usage: [summary]
- Findings: [bullet list with severity tags]

### LSA Review (if applicable)
- Lead volume: [X leads/month]
- Cost per lead: [$X average]
- Dispute rate: [X%]
- Review score: [X] ([Count] reviews)
- Findings: [bullet list with severity tags]

---

### All Findings Summary
[Table: Finding | Severity | Section | Recommendation]
```

### Severity Tags
- `[CRITICAL]`: immediate action required, significant budget waste or tracking failure
- `[WARNING]`: should be addressed within 2 weeks, moderate impact
- `[OPPORTUNITY]`: improvement that would enhance performance, not urgent

---

## Output 2: GBP Action Items

### Format
Prioritized action list, ordered by expected impact.

### Structure

```
# GBP Action Items: [Account Name]

## High Impact
1. [Action]: [What to do specifically]
   - Why: [Business reason]
   - Expected impact: [What improves]

2. [Action]: ...

## Medium Impact
3. [Action]: ...

## Low Impact (Maintenance)
4. [Action]: ...
```

### Standard GBP Actions (include if applicable)
- Link GBP to Google Ads (if not linked)
- Enable location extensions on all campaigns
- Improve review score on locations below 4.0
- Solicit reviews on locations with fewer than 20
- Upload photos to reach 20+ per location
- Start weekly GBP posts
- Populate Q&A section with 10+ common questions
- Update hours (including special/holiday hours)
- Complete service/product catalog

---

## Output 3: Location Targeting Recommendations

### Format
Campaign-by-campaign targeting changes with rationale.

### Structure

```
# Location Targeting Recommendations: [Account Name]

## Targeting Method Changes
| Campaign | Current Setting | Recommended | Rationale |
|---|---|---|---|
| [name] | Presence or interest | Presence | Local-only business, 15% out-of-area clicks |

## Radius Adjustments
| Campaign | Current Radius | Recommended | Rationale |
|---|---|---|---|
| [name] | 30 miles | 12 miles | Urban location, 80% of conversions within 10 miles |

## Bid Adjustments by Geography
| Campaign | Segment | Current Adj | Recommended | Rationale |
|---|---|---|---|---|
| [name] | 0-5 miles | None | +25% | 60% of conversions from this ring |

## Exclusion Recommendations
| Campaign | Area to Exclude | Spend (30d) | Conversions | Rationale |
|---|---|---|---|---|
| [name] | [city/zip] | $250 | 0 | No conversions in 60 days |

## Estimated Budget Impact
- Current monthly waste from targeting issues: $[X]
- Projected savings from targeting fixes: $[X]
- Reallocation recommendation: [where to redirect saved budget]
```

---

## Output 4: Summary Dashboard

### Format
One-page overview designed for quick scanning.

### Structure

```
# Local Audit Summary: [Account Name]

## Overall Local Readiness: [X/10]

| Category | Status | Score |
|---|---|---|
| GBP Integration | [Linked/Partial/Not Linked] | [X/10] |
| Location Targeting | [Correct/Partially Correct/Incorrect] | [X/10] |
| Offline Tracking | [Advanced/Intermediate/Basic/Minimal] | [X/10] |
| Campaign Types | [Appropriate/Partially/Inappropriate] | [X/10] |
| LSA | [Active+Optimized / Active / Not Active / Not Eligible] | [X/10] |

## Top 3 Priorities
1. [Highest impact action with expected result]
2. [Second highest impact action]
3. [Third highest impact action]

## Budget Analysis
- Estimated waste from targeting issues: $[X]/month
- Estimated missed conversions from tracking gaps: [X]/month
- Recommended next investment: [what to do with recovered budget]

## Findings Count
- Critical: [X]
- Warning: [X]
- Opportunity: [X]
```

### Scoring Guide

| Score | Meaning |
|---|---|
| 9-10 | Well-optimized local account, minor opportunities only |
| 7-8 | Solid foundation, 2-3 meaningful improvements available |
| 5-6 | Significant gaps in targeting or tracking, budget waste likely |
| 3-4 | Major configuration issues, substantial budget waste |
| 1-2 | Fundamental setup missing (no GBP, no location targeting, no offline tracking) |
