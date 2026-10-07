# Output Specifications for Performance Analysis

Format specs for all outputs produced by the performance_analysis skill.

## Output 1: Performance Dashboard

Markdown document with four sections: header, account summary, campaign detail, and observations.

### Header

```markdown
# [Account Name] - Performance Dashboard

**Period:** [current_start] to [current_end]
**Comparison:** [comparison_start] to [comparison_end] ([WoW/MoM/YoY])
**Generated:** [timestamp]
**Maturity Level:** [nascent/developing/established/advanced]
**Data Source:** [mcp/mcp/csv/manual]
```

### Account Summary Table

Single table with one row per metric. Include flag column on the right.

```markdown
## Account Summary

| Metric | Current | Prior | Change | Change % | Flag |
|---|---|---|---|---|---|
| Spend | $12,456.78 | $11,890.23 | +$566.55 | +4.8% | |
| Conversions | 142 | 158 | -16 | -10.1% | :yellow_circle: |
| CPA | $87.72 | $75.25 | +$12.47 | +16.6% | :red_circle: |
| ROAS | 4.2x | 4.8x | -0.6x | -12.5% | :yellow_circle: |
| Search IS | 45.3% | 48.1% | -2.8pp | -5.8% | |
| CTR | 3.8% | 4.1% | -0.3pp | -7.3% | |
| Avg CPC | $2.14 | $1.98 | +$0.16 | +8.1% | |
| Conv Rate | 5.2% | 5.8% | -0.6pp | -10.3% | :yellow_circle: |
```

**Flag indicators:**
- :red_circle: = exceeds critical threshold
- :yellow_circle: = exceeds warning threshold
- (blank) = within normal range or improving

For plain text output (no emoji support), use `[RED]`, `[YLW]`, and leave blank for green.

### Campaign Detail Tables

One table per campaign, sorted by spend descending. Each table follows this format:

```markdown
### [Campaign Name]
**Type:** [Search/PMax/Shopping/Display] | **Bidding:** [strategy] | **Daily Budget:** [$X]

| Metric | Current | Prior | Change | Change % | Flag |
|---|---|---|---|---|---|
| Spend | $3,456.78 | $3,200.00 | +$256.78 | +8.0% | |
| Conversions | 45 | 52 | -7 | -13.5% | :yellow_circle: |
| CPA | $76.82 | $61.54 | +$15.28 | +24.8% | :red_circle: |
| IS | 52.3% | 55.1% | -2.8pp | -5.1% | |
| Lost IS (Budget) | 18.2% | 15.4% | +2.8pp | +18.2% | |
| Lost IS (Rank) | 29.5% | 29.5% | 0.0pp | 0.0% | |
| CTR | 4.1% | 4.5% | -0.4pp | -8.9% | |
| Avg CPC | $1.89 | $1.72 | +$0.17 | +9.9% | |
```

For PMax campaigns, omit IS rows and note "IS not available for PMax campaigns."

For campaigns with fewer than 15 conversions (nascent threshold), add a note: "Low conversion volume. KPI flags suppressed per maturity calibration."

### Key Observations

3-5 bullet points highlighting the most impactful changes. Prioritize by business impact, not by percentage change.

```markdown
## Key Observations

- **Conversion volume declined 10.1% while spend increased 4.8%.** CPA rose to $87.72, crossing the warning threshold of $82.00. The efficiency decline is concentrated in [campaign name].
- **[Campaign name] IS dropped from 55% to 52%.** Lost IS (Budget) increased by 2.8pp, suggesting budget constraint is worsening. This campaign remains the top performer by CPA.
- **[Campaign name] entered learning period** following a bidding strategy change on [date]. Performance volatility is expected for 7-14 days.
```

Rules for observations:
- Lead with the metric change, then explain its significance
- Connect observations to business impact where possible
- Never diagnose root cause (that is `investigate_campaign` territory). State what happened, not why.
- Use qualifier language for interpretations: "suggests," "indicates," "consistent with"

### Flags Summary

Consolidated list of all red and yellow flags from across the dashboard.

```markdown
## Flags Summary

### :red_circle: Critical
- Account CPA ($87.72) exceeds critical threshold ($90.00)
- [Campaign name] CPA increased 24.8% WoW

### :yellow_circle: Warning
- Account conversion volume declined 10.1%
- Account conversion rate declined from 5.8% to 5.2%
- [Campaign name] IS dropped below 50%
```

### Footer

```markdown
---
*Analysis period: [dates]. Maturity: [level]. Thresholds: warning = [value], critical = [value]. Next recommended review: [date based on reporting cadence].*
```

---

## Output 2: Trend Analysis

Markdown document with per-campaign trend tables and a summary section.

### Per-Campaign Trend Tables

One table per campaign with 4 weeks of data plus a direction indicator column.

```markdown
## [Campaign Name]

| Week | Spend | Conversions | CPA | IS | Direction |
|---|---|---|---|---|---|
| W13 (Mar 24-30) | $890 | 12 | $74.17 | 53% | |
| W12 (Mar 17-23) | $845 | 11 | $76.82 | 52% | |
| W11 (Mar 10-16) | $812 | 13 | $62.46 | 55% | |
| W10 (Mar 3-9) | $798 | 14 | $57.00 | 56% | |
| **4-Week Trend** | **Up** | **Down** | **Rising (declining)** | **Down** | |
```

For eCommerce accounts, replace CPA column with ROAS column.

### Direction Indicators

Use these symbols in the Direction/Trend row:

| Symbol | Meaning | Criteria |
|---|---|---|
| Up | Metric increasing | 3+ weeks consecutive increase |
| Down | Metric decreasing | 3+ weeks consecutive decrease |
| Flat | Metric stable | Changes within +/- 5% WoW for 3+ weeks |
| Mixed | Metric volatile | Alternating direction with swings > 10% |

**Important:** Direction labels must reflect business impact, not raw direction.
- CPA trending down = "Improving"
- CPA trending up = "Declining"
- ROAS trending up = "Improving"
- ROAS trending down = "Declining"
- Conversions trending up = "Improving"
- IS trending down = "Declining"

### Trend Classification

Below each campaign table, add a one-line classification:

```markdown
**Trend:** Declining - CPA has risen for 3 consecutive weeks while conversion volume has dropped. Warrants investigation.
```

Classification options:
- **Improving**: majority of key metrics trending favorably for 3+ weeks
- **Stable**: metrics within normal variance, no clear directional trend
- **Declining**: majority of key metrics trending unfavorably for 3+ weeks
- **Volatile**: metrics swinging significantly with no consistent direction
- **Ramping**: new or recently changed campaign still building momentum (first 4 weeks after launch or major change)

### Summary Section

At the end of the document, a consolidated view:

```markdown
## Trend Summary

### Campaigns Needing Attention
| Campaign | Trend | Primary Concern | Suggested Next Step |
|---|---|---|---|
| [name] | Declining | CPA rising 3 weeks | Run investigate_campaign |
| [name] | Volatile | Conversion volume swinging +/- 30% | Check for tracking issues |

### Campaigns Performing Well
| Campaign | Trend | Highlight |
|---|---|---|
| [name] | Improving | CPA down 15% over 4 weeks |
| [name] | Stable | Consistent performance at target |

### Insufficient Data
| Campaign | Reason |
|---|---|
| [name] | Fewer than 4 weeks of data (launched [date]) |
| [name] | Fewer than 15 conversions in the period |
```

---

## Formatting Rules

- All currency values include the currency symbol and two decimal places ($1,234.56)
- Percentages include one decimal place (45.3%)
- ROAS uses one decimal place with "x" suffix (4.2x)
- CPA uses currency format ($45.67)
- Positive changes prefixed with "+"
- Negative changes prefixed with "-"
- Percentage point changes use "pp" suffix (e.g., -2.8pp)
- Week labels use ISO week numbers: W13, W12, etc.
- Date ranges in parentheses after week numbers for clarity
- Round to reasonable precision. Do not report to fractions of a conversion or sub-penny CPA.
- When a metric cannot be calculated (division by zero), display "N/A" rather than zero or infinity.

## File Naming

Use the output naming pattern from account-conventions `reporting.output_naming` config. Default pattern:

```
{client} - Performance Dashboard - {date}.md
{client} - Trend Analysis - {date}.md
```

Replace `{client}` with the account name and `{date}` with the end date of the current period.

Save to the path specified in `reporting.output_path` from account-conventions config.
