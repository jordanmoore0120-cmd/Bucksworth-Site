# Output Specifications: Settings Audit

This reference defines the format and structure for all `audit_settings` deliverables.

---

## Output 1: Settings Audit Report

### Account-Level Settings Table

```markdown
## Account-Level Settings

| Setting | Current Value | Recommended | Status | Notes |
|---|---|---|---|---|
| Auto-tagging | ON | ON | OK | |
| Tracking template | Not set | UTM suffix configured | Warning | No UTM parameters for third-party analytics |
| Auto-apply recommendations | ON (3 categories) | OFF or selective | Critical | "Add keywords" is auto-applying |
| Negative keyword lists | 2 lists, applied to 4/8 campaigns | Applied to all campaigns | Warning | 4 campaigns have no shared negatives |
| Default conversion goals | 5 primary actions | Review for accuracy | Warning | Includes page_view as primary |
```

### Campaign-Level Settings Table

One table per campaign, or grouped by issue type when there are many campaigns:

```markdown
## Campaign: [Campaign Name]

| Setting | Current Value | Recommended | Status | Notes |
|---|---|---|---|---|
| Location targeting | Presence or interest | Presence | Critical | Local service business, ads showing to distant users |
| Display Network | ON | OFF | Warning | 8% of budget going to Display placements |
| Ad rotation | Do not optimize | Optimize | Warning | No active ad test running |
| Ad schedule | None set | Business hours with bid adjustments | Warning | Call-driven campaign, no dayparting |
| Mobile bid adj. | +0% | -30% to -50% | Warning | Mobile conv rate 40% below desktop |
```

### Summary Counts

```markdown
## Settings Audit Summary

- **Total settings checked:** [N]
- **Critical:** [N] (fix immediately)
- **Warning:** [N] (fix this cycle)
- **OK:** [N] (correctly configured)
```

---

## Output 2: Conversion Tracking Report

```markdown
## Conversion Actions

| Name | Category | Count | Model | Window | Include | Value | Status | Notes |
|---|---|---|---|---|---|---|---|---|
| Purchase | Purchase | Every | DDA | 30d | Yes | Dynamic | OK | |
| Contact Form | Lead | Every | DDA | 30d | Yes | None | Critical | Count should be "One" |
| Newsletter Signup | Signup | One | DDA | 30d | Yes | None | Warning | Should be Secondary |
| Page View | Other | One | DDA | 30d | Yes | None | Critical | Should not be Primary |
```

### Duplicate Detection

```markdown
## Duplicate Conversion Actions

| Event | Action 1 | Action 2 | Both Primary? | Resolution |
|---|---|---|---|---|
| Purchase | Google Ads tag - Purchase | GA4 Import - purchase | Yes | Set GA4 Import to Secondary, or remove one |
```

### Recommended Changes

Numbered list of specific changes with instructions:
1. Change "Contact Form" count setting from "Every" to "One" (Goals > Conversions > Contact Form > Edit > Count)
2. Move "Newsletter Signup" from Primary to Secondary (Goals > Conversions > Newsletter Signup > Edit > Primary/Secondary)

---

## Output 3: Compliance Checklist

```markdown
## Privacy Compliance Status

| Requirement | Status | Impact if Not Addressed | Priority |
|---|---|---|---|
| Consent Mode V2 (EEA/UK) | Not implemented | Loss of remarketing + conversion tracking for EEA users | Critical |
| Enhanced Conversions for Web | Enabled | N/A | OK |
| Enhanced Conversions for Leads | Not enabled | Missing offline conversion attribution | Warning |
| Restricted Data Processing (CA) | Not enabled | Non-compliant with CPRA for California users | Warning |
```

---

## Output 4: Data Connections Report

```markdown
## Data Connections

| Connection | Status | Required/Recommended | Impact if Missing |
|---|---|---|---|
| GA4 | Linked (GA4-123456789) | Required | N/A |
| Merchant Center | Not linked | Required (eCommerce) | Shopping campaigns cannot run |
| YouTube | Not linked | Recommended | No video remarketing audiences |
| Search Console | Linked (example.com) | Recommended | N/A |
| GBP | Not applicable | N/A | N/A |
| CRM | Not linked | Required (lead gen) | No offline conversion data |
| Data Manager | Not configured | Recommended | No Customer Match audiences |
```

---

## Output 5: Summary Dashboard

```markdown
## Settings Audit: Summary Dashboard

**Account:** [Account Name] (CID: XXX-XXX-XXXX)
**Audit Date:** [Date]
**Business Type:** [Type]
**Maturity Level:** [Level]

### Findings Overview

| Severity | Count |
|---|---|
| Critical | [N] |
| Warning | [N] |
| OK | [N] |
| **Total Checked** | **[N]** |

### Top 3 Highest-Impact Issues

1. **[Issue]:** [One-sentence description of the problem and its estimated impact]
2. **[Issue]:** [One-sentence description]
3. **[Issue]:** [One-sentence description]

### Recommended Priority Order

1. [First fix, with reason]
2. [Second fix]
3. [Third fix]
...

### Estimated Impact

[1-2 sentences describing what fixing all Critical items would accomplish, e.g., "Addressing the 3 Critical findings would eliminate approximately $X/month in wasted spend and correct conversion reporting that is currently inflated by ~2x."]
```
