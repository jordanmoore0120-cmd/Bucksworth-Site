# Output Specifications for Campaign Investigation

Format specifications for the three deliverables produced by the investigate-campaign skill.

## Deliverable 1: Diagnostic Report

### Format
Markdown document. Use headers, tables, and bullet points for scanability.

### Sections

**Title:** `[Campaign Name] - Diagnostic Report - [Date]`

**1. Problem Statement**
One paragraph. Contains: campaign name, the metric that changed, the magnitude of change, the comparison periods, and whether the change exceeds normal variance thresholds.

Example:
> The "Carpet Cleaning - Search" campaign's CPA increased from $45 to $82 (+82%) comparing Week 12 (Mar 17-23) to Week 11 (Mar 10-16). This exceeds the 20% significance threshold. The campaign averages 35 conversions per month, which provides sufficient volume for reliable WoW comparison.

**2. Funnel Decomposition Summary**
Table format showing each funnel stage with period comparisons and change percentages. Highlight the stage(s) where the most significant change occurred.

**3. Rate vs Volume Analysis**
Brief analysis identifying whether the cost-side or conversion-side drove the KPI change. Include the raw numbers, not just the conclusion.

**4. Diagnostic Tree Walkthrough**
For each of the 8 branches, a brief assessment:
- Branch name
- Status: Confirmed (root cause), Contributing (secondary factor), Ruled Out, or Insufficient Data
- Evidence: 1-2 sentences explaining the finding
- Data: specific metrics that support the finding

**5. Attribution Assessment**
Assessment of whether conversion lag, cross-device, or attribution model issues are distorting the data. If the period is not fully attributed, note the expected impact.

**6. Competitive Assessment**
Summary of auction insights comparison. Note any new competitors, IS shifts, or CPC inflation patterns.

**7. Root Cause Identification**
The evidence chain:
```
Symptom: [observed problem]
Data: [supporting metrics]
Evidence: [diagnostic branch findings]
Root Cause: [specific underlying issue]
Confidence: [High / Medium / Low]
```

**8. Caveats**
Any limitations of the analysis: insufficient data, incomplete attribution window, external factors that could not be confirmed.

## Deliverable 2: Action Plan

### Format
Markdown document. Structured for actionability.

### Sections

**Title:** `[Campaign Name] - Action Plan - [Date]`

**1. Root Cause Summary**
One paragraph restating the root cause from the diagnostic report.

**2. Resolution Steps**

Table format:

| Priority | Action | Rationale | Expected Impact | Timeline | Owner |
|----------|--------|-----------|-----------------|----------|-------|
| Critical | [specific action] | [why this addresses root cause] | [what should improve] | [days/weeks] | [who] |
| High | ... | ... | ... | ... | ... |
| Medium | ... | ... | ... | ... | ... |

Priority definitions:
- **Critical:** Do immediately. Blocking further performance.
- **High:** Do within 48 hours. Significant impact on recovery.
- **Medium:** Do within 1 week. Supports recovery or prevents recurrence.
- **Low:** Do when capacity allows. Preventive or optimization-level.

**3. Monitoring Plan**

Table format:

| Metric | Current Value | Target Value | Check Frequency | Timeframe |
|--------|---------------|--------------|-----------------|-----------|
| [metric] | [current] | [expected after fix] | [daily/weekly] | [how long to monitor] |

**4. Escalation Triggers**

Bullet list of conditions that indicate the diagnosis may be wrong or the fix is not working:
- "If [metric] does not improve by [percentage] within [timeframe], re-investigate Branch [X]"
- "If [new symptom] appears, the root cause may be [alternative]"

## Deliverable 3: Summary

### Format
One paragraph, 3-5 sentences. Suitable for Slack, email, or meeting notes.

### Structure
Sentence 1: What campaign was investigated and what problem was observed.
Sentence 2: What the root cause was.
Sentence 3: What the primary recommended action is.
Sentence 4 (optional): Expected timeline for recovery.
Sentence 5 (optional): Key caveat or monitoring note.

### Example
> The "Carpet Cleaning - Search" campaign experienced an 82% CPA increase from $45 to $82 in Week 12. Root cause: a conversion action was changed from "One" to "Every" counting three weeks ago, then reverted, which reset the tCPA bid strategy's learning period. Primary recommendation: allow the learning period to complete over the next 7-10 days with a temporary tCPA of $95 (20% above current) to ease recovery. Monitor daily for CPA stabilization. If CPA does not begin declining by Day 10, re-investigate the measurement branch for residual tracking issues.

## General Formatting Rules

- Use tables for structured data comparisons. Never present numbers in paragraph form when a table would be clearer.
- Round percentages to one decimal place. Round currency to two decimal places.
- Always include both absolute values and percentage changes. "$45 to $82 (+82%)" is clearer than either alone.
- Bold key findings and root cause identifications for scanability.
- Keep each section focused. If a section exceeds 10 lines, it probably contains analysis that belongs in a different section.
- Do not include raw GAQL queries in the deliverables. Those are internal to the investigation process.
- Include the date and comparison periods in all deliverable titles for future reference.
