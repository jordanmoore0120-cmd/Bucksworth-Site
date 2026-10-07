# Output Specifications for Creative Audit

Format specifications for all `audit_creative` deliverables.

---

## Output 1: Asset Scorecard (Markdown)

### Structure
```markdown
# Creative Audit: Asset Scorecard
**Account:** [Account Name]
**Date:** [Audit Date]
**Maturity Level:** [Nascent/Developing/Established/Advanced]

## Account Creative Health Score: [0-100]/100

---

## Search Campaigns (RSA)

### [Campaign Name] > [Ad Group Name]
| Metric | Value | Status |
|--------|-------|--------|
| Headlines | [X] of 15 recommended | [OK/Warning/Critical] |
| Descriptions | [X] of 4 recommended | [OK/Warning/Critical] |
| Ad Strength | [Excellent/Good/Average/Poor] | [OK/Warning/Critical] |
| Asset Ratings | [X] Best, [X] Good, [X] Low, [X] Learning | [OK/Warning/Critical] |
| Pin Usage | [None/Partial/Full] | [OK/Warning/Critical] |
| Headline Diversity | [Strong/Moderate/Weak] | [OK/Warning/Critical] |
| Message Alignment | [Aligned/Partial/Misaligned] | [OK/Warning/Critical] |

[Repeat for each ad group]

---

## PMax Campaigns

### [Campaign Name] > [Asset Group Name]
| Metric | Value | Status |
|--------|-------|--------|
| Completeness Score | [X]/100 | [OK/Warning/Critical] |
| Headlines | [X] of 15 recommended | [OK/Warning/Critical] |
| Long Headlines | [X] of 5 recommended | [OK/Warning/Critical] |
| Descriptions | [X] of 5 recommended | [OK/Warning/Critical] |
| Images (all ratios) | [X] total | [OK/Warning/Critical] |
| Video | [X] of 5 recommended | [OK/Warning/Critical] |
| Logos | [X] total | [OK/Warning/Critical] |
| Theme Coherence | [Strong/Moderate/Weak] | [OK/Warning/Critical] |
| Brand Guidelines | [Complete/Partial/Missing] | [OK/Warning/Critical] |

[Repeat for each asset group]

---

## Video Campaigns (if applicable)

### [Campaign Name]
| ABCD Element | Rating | Notes |
|-------------|--------|-------|
| Attention (hook) | [Present/Partial/Missing] | [description] |
| Branding | [Present/Partial/Missing] | [description] |
| Connection | [Present/Partial/Missing] | [description] |
| Direction (CTA) | [Present/Partial/Missing] | [description] |
| Format | [Appropriate/Needs adjustment] | [description] |
| View Rate | [X]% ([Strong/Average/Weak]) | benchmark: 25%+ strong |

---

## Fatigue Signals

| Campaign | Signal | Severity | Detail |
|----------|--------|----------|--------|
| [name] | CTR decline | [Warning/Critical] | [X]% decline over 4 weeks |
| [name] | High frequency | [Warning/Critical] | [X] avg/week vs [Y] benchmark |
| [name] | Creative age | [Info] | Running [X] days unchanged |

---

## Cross-Campaign Consistency

| Check | Status | Detail |
|-------|--------|--------|
| Value proposition alignment | [Consistent/Inconsistent] | [description] |
| Offer alignment | [Consistent/Inconsistent] | [description] |
| Brand voice | [Consistent/Inconsistent] | [description] |
| CTA consistency | [Consistent/Inconsistent] | [description] |
```

### Status Definitions
- **OK:** Meets or exceeds best practices
- **Warning:** Below recommended but functional
- **Critical:** Below minimum requirements or actively harming performance

---

## Output 2: Refresh List (CSV)

### Column Specification
| Column | Description | Example |
|--------|------------|---------|
| Campaign | Campaign name | Brand Search |
| Ad_Group_or_Asset_Group | Ad group (RSA) or asset group (PMax) name | Moisturizers |
| Asset_Type | Headline, Description, Image, Video, etc. | Headline |
| Current_Asset | The current asset text or file name | "Shop Our Products Today" |
| Issue | What's wrong | Low rating, repetitive messaging |
| Priority | P1 (immediate), P2 (this month), P3 (next month) | P1 |

### CSV Format
```csv
Campaign,Ad_Group_or_Asset_Group,Asset_Type,Current_Asset,Issue,Priority
Brand Search,Moisturizers,Headline,"Shop Our Products Today",Low rating + generic messaging,P1
PMax - Anti-Aging,Summer Collection,Video,(none),No video uploaded - auto-generating,P2
```

---

## Output 3: Test Plan (Markdown)

### Structure
```markdown
# Creative Test Plan
**Account:** [Account Name]
**Period:** [Month/Quarter]

## P1 Tests (Immediate)

### Test 1: [Descriptive Name]
- **Campaign/Ad Group:** [location]
- **Variable:** [what is being tested]
- **Hypothesis:** We believe [change] will improve [metric] because [reason]
- **Method:** [Experiment / Parallel ad group / Before-after]
- **Duration:** [X] days minimum
- **Success Criteria:** [metric] improves by [X]% at 95% confidence

## P2 Tests (This Month)
[same format]

## P3 Tests (Next Month)
[same format]
```

---

## Output 4: Summary Dashboard (Markdown)

### Structure
```markdown
# Creative Audit Summary
**Account:** [Account Name] | **Date:** [Date] | **Maturity:** [Level]

## Creative Health Score: [X]/100

## Key Findings
1. [Most important finding]
2. [Second finding]
3. [Third finding]
4. [Fourth finding, if applicable]
5. [Fifth finding, if applicable]

## Immediate Action Items (P1)
- [ ] [Action item 1]
- [ ] [Action item 2]
- [ ] [Action item 3]

## Quick Wins
- [ ] [Highest impact, lowest effort improvement 1]
- [ ] [Quick win 2]

## Creative Refresh Calendar
| Asset/Campaign | Last Updated | Next Refresh Due | Priority |
|---------------|-------------|-----------------|----------|
| [name] | [date] | [date] | [P1/P2/P3] |
```
