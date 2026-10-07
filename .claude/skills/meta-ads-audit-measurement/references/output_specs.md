# Output Specifications: audit-measurement

## Deliverable 1: Measurement Health Scorecard

### File Naming
`{account_slug}_measurement-audit_{YYYY-MM-DD}.md`

### Template

```markdown
# Measurement Health Scorecard: {account_name}
Generated: {YYYY-MM-DD}
Overall Grade: {A/B/C/D/F} ({score}/10.0)

---

## Component Scores

| Component | Score (1-10) | Weight | Weighted | Status |
|-----------|-------------|--------|----------|--------|
| Pixel Health | {score} | 20% | {weighted} | {Pass/Warning/Critical} |
| CAPI Implementation | {score} | 25% | {weighted} | {Pass/Warning/Critical/N/A} |
| Event Match Quality | {score} | 20% | {weighted} | {Pass/Warning/Critical/N/A} |
| Attribution Setup | {score} | 15% | {weighted} | {Pass/Warning/Critical} |
| Event Configuration | {score} | 10% | {weighted} | {Pass/Warning/Critical} |
| UTM / Third-Party | {score} | 10% | {weighted} | {Pass/Warning/Critical} |
| **Overall** | | **100%** | **{total}** | **{grade}** |

### Grade Scale
- **A (8.0-10.0):** Measurement infrastructure is robust. Data is reliable for optimization and reporting.
- **B (6.0-7.9):** Solid foundation, minor improvements available. Data is mostly reliable.
- **C (4.0-5.9):** Significant gaps affecting data quality. Fix before scaling spend.
- **D (2.0-3.9):** Major measurement issues. CPA/ROAS data may be unreliable.
- **F (0-1.9):** Measurement is broken. Pause scaling immediately and remediate.

---

## Detailed Assessment

### Pixel Health ({score}/10)

| Check | Expected | Actual | Status |
|-------|----------|--------|--------|
| Pixel installed | Yes | {value} | {Pass/Fail} |
| Pixel firing (last 24h) | Yes | Last fired: {timestamp} | {Pass/Fail} |
| Pixel available | Yes | {value} | {Pass/Fail} |
| First-party cookies | Enabled | {value} | {Pass/Warning} |

### Event Inventory

| Event | Type | Count (7d) | Avg Daily | Source | Trend | Status |
|-------|------|-----------|-----------|--------|-------|--------|
| PageView | Standard | {count} | {avg} | Browser | {trend} | {status} |
| ViewContent | Standard | {count} | {avg} | {source} | {trend} | {status} |
| AddToCart | Standard | {count} | {avg} | {source} | {trend} | {status} |
| Purchase | Standard | {count} | {avg} | {source} | {trend} | {status} |

### Event Funnel
```
PageView ({count}) -> ViewContent ({count}, {drop}% drop) -> AddToCart ({count}, {drop}%) -> Purchase ({count}, {drop}%)
```
Funnel integrity: {Pass/Warning -- describe any anomalies}

---

### CAPI Implementation ({score}/10)

| Check | Expected | Actual | Status |
|-------|----------|--------|--------|
| CAPI active | Yes | {value} | {Pass/Fail} |
| Events flowing | Last event < 1h | {timestamp} | {Pass/Fail} |
| Critical events covered | All via CAPI | {count}/{total} | {Pass/Warning} |
| Deduplication active | event_id matching | {method} | {Pass/Critical} |

### Event Match Quality ({score}/10)

| Event | EMQ Score | Rating | Missing Parameters |
|-------|-----------|--------|-------------------|
| Purchase | {score} | {rating} | {list or "None"} |
| AddToCart | {score} | {rating} | {list} |
| ViewContent | {score} | {rating} | {list} |

Account Average EMQ: {avg} ({rating})

---

### Attribution Setup ({score}/10)

| Campaign | Window | Recommended | Match |
|----------|--------|-------------|-------|
| {name} | {window} | {recommended} | {Yes/No} |

Cross-campaign consistency: {Consistent/Inconsistent}
View-through share: {pct}% of conversions ({assessment})

---

### Event Configuration ({score}/10)

Primary conversion event: {event_name}
- Volume: {count}/week ({sufficient/insufficient})
- Has conversion value: {Yes/No}
- Used as optimization goal: {Yes/No}
- AEM Priority: #{priority}

Custom conversions: {count} configured
- {Assessment of each: relevant/redundant/misconfigured}

---

### UTM / Third-Party ({score}/10)

UTM compliance: {pct}% of active ads have correct UTMs
Third-party tool: {tool_name or "None"}
Data reconciliation: Meta vs backend variance = {pct}%
```

---

## Deliverable 2: EMQ Improvement Plan

### File Naming
Included in measurement audit report.

### Template

```markdown
## EMQ Improvement Plan

### Current State
| Event | Current EMQ | Target EMQ | Gap |
|-------|-------------|-----------|-----|
| Purchase | {score} | 8.0+ | {gap} |
| AddToCart | {score} | 7.0+ | {gap} |
| ViewContent | {score} | 6.0+ | {gap} |

### Improvement Actions (Ordered by Impact)

#### Action 1: {title}
- **Impact:** +{points} EMQ points estimated
- **Events affected:** {list}
- **What to do:** {specific technical instruction}
- **Implementation:**
  ```
  {code snippet or configuration change if applicable}
  ```
- **Effort:** {Low/Medium/High}
- **Owner:** {Engineering/Marketing/Agency}
- **Timeline:** {days}

#### Action 2: {title}
{same format}

### Projected State After Improvements
| Event | Current EMQ | Projected EMQ | Improvement |
|-------|-------------|---------------|-------------|
| Purchase | {current} | {projected} | +{points} |
```

---

## Deliverable 3: Remediation Priority List

### File Naming
Included in measurement audit report.

### Template

```markdown
## Remediation Priorities

### Critical -- Fix This Week
Issues that directly impact data reliability and optimization quality.

| # | Issue | Impact | Fix | Owner | Effort | Blocked Skills |
|---|-------|--------|-----|-------|--------|---------------|
| 1 | {issue} | {what breaks if not fixed} | {specific fix steps} | {who} | {time} | {which toolkit skills produce unreliable output} |

### High -- Fix Within 2 Weeks
Issues that reduce optimization quality but don't completely break measurement.

| # | Issue | Impact | Fix | Owner | Effort |
|---|-------|--------|-----|-------|--------|

### Medium -- Fix Within 1 Month
Nice-to-have improvements that incrementally improve data quality.

| # | Issue | Impact | Fix | Owner | Effort |
|---|-------|--------|-----|-------|--------|

### Low -- Backlog
Future improvements for when critical/high items are resolved.

| # | Issue | Impact | Fix | Owner | Effort |
|---|-------|--------|-----|-------|--------|

### Not Applicable
Items checked but not relevant to this account.

| Item | Reason |
|------|--------|
| GDPR consent mode | No EU targeting |
| CCPA LDU | No CA-specific campaigns |
| Lift studies | Account maturity below Advanced |
```
