---
name: meta-ads-audit-measurement
description: Action skill for auditing Meta Ads measurement infrastructure, including pixel health, CAPI, EMQ, attribution, UTMs, and remediation priorities.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `audit-measurement`-style names, e.g. `google-ads-mine-search-terms`.

# Audit Measurement

## Purpose

Audit Meta Ads measurement infrastructure before optimization work. Evaluate pixel health, Conversions API (CAPI), deduplication, Event Match Quality (EMQ), attribution windows, event configuration, UTMs, GA4 alignment, and third-party attribution. Produce a health scorecard and prioritized remediation plan.

## Tooling Rules

Use scripts with the generated SDK; inspect `sdk/tools/mcp_meta_ads.py` for current function signatures before calling. Common read tools include `meta_ads_get_insights`, pixel stats, and server-events setup. All write operations create drafts and require human approval via `submit_draft`; no changes execute automatically. Meta monetary values are in cents unless the tool documents otherwise.

## When to Use

- New account onboarding before campaign changes.
- Conversion data looks unreliable, double-counted, missing, or inconsistent with backend/GA4.
- CAPI was implemented or changed.
- EMQ is below target: Developing >5.0; Established+ >6.0.
- Attribution or third-party tool data differs from Meta by >30%.
- Quarterly measurement health review.

## Dependencies to Load

- `measurement_methodology` — attribution windows, CAPI/dedup rules, EMQ thresholds, UTM standards, MER, incrementality, third-party tool guidance, and current AEM rules.
- `account_conventions` — account ID, pixel ID, data-source method/status, KPI targets, attribution window, business model, monthly spend, and maturity level.
- `account_maturity_methodology` — calibrates expected measurement sophistication.

Pre-flight: if `pixel_id` or data-source method is missing, flag it as a critical/first investigation item.

## Audit Workflow

### 1. Acquire Data

Collect or explicitly mark unavailable:
- **Pixel:** status, last event, 7/28-day event volumes, page coverage, diagnostics, errors, and event parameters.
- **CAPI:** active status, server-event volume, implementation method, delivery delay, deduplication rate, event_id consistency, EMQ by event, and parameters sent.
- **Attribution:** current account window and performance comparison for 1-day click, 7-day click, and 7-day click + 1-day view.
- **Events:** optimization events, funnel sequence, custom conversions, value/currency/content_ids, and duplicate firing.
- **UTMs/analytics:** sample 10+ active ad URLs; verify source/medium/campaign/content/term format and GA4 alignment.
- **Third-party tools:** connection, data freshness, attribution model, and discrepancy versus Meta.

### 2. Score Each Layer

Use PASS/WARNING/FAIL plus a 0-10 score for each report row.

**Pixel health:** active with recent events, key standard events present, stable volume, coverage on key pages, and no blocking errors. Missing conversion-page pixel or zero key events is fail.

**CAPI and deduplication:** server events active, real-time delivery, key events covered, event_id shared by browser/server, and Meta/backend counts within tolerance. Deduplication interpretation: 0% means broken or no overlap; 5-20% healthy; 30%+ suspicious; 50%+ likely misconfigured.

**EMQ:** <3.0 severe, 3.0-5.0 weak, 5.0-6.0 acceptable, 6.0-8.0 strong, 8.0+ excellent. Improvement priority: hashed email, hashed phone, fbclid, hashed external_id, client IP/user agent; hash with SHA-256 after lowercase/trim.

**Attribution:** compare current window to business-type recommendation from `measurement_methodology`. 7d/1d ratios of 1.0-1.2 are tight, 1.2-1.5 normal, 1.5-2.0 delayed, and 2.0+ requires investigation.

**Event configuration:** primary event matches business model, funnel is complete, values are accurate, custom conversions are current, and custom pixel events that need reporting/optimization have matching Custom Conversions. Without Custom Conversions, custom pixel events are grouped under `offsite_conversion.fb_pixel_custom` in insights.

**UTMs/GA4/third-party:** UTMs should be consistent, lowercase, parseable, and preferably dynamic. GA4 should show Meta as paid traffic with conversion counts explainably different. Third-party attribution should be appropriate for spend tier; normally it reports 60-90% of Meta conversions.

## Checkpoint Before Full Report

Present this scorecard and wait for user confirmation before generating the full report:

```markdown
Measurement Health Scorecard
Account: [Account Name]
Audit Date: [Date]
Maturity Level: [Nascent / Developing / Established / Advanced]

Layer 1: Pixel Health          [PASS / WARNING / FAIL]
Layer 2: CAPI                  [PASS / WARNING / FAIL / N/A]
Layer 3: Attribution           [PASS / WARNING / FAIL]
Layer 4: Events                [PASS / WARNING / FAIL]
Layer 5: UTMs / Third-Party    [PASS / WARNING / FAIL]

Overall Health: [Healthy / Needs Attention / Critical]
Priority Actions: [X items]
```

## Output Contract

After confirmation, produce:

```markdown
# Measurement Infrastructure Audit

**Account:** [Name] | **Pixel ID:** [ID]
**Audit Date:** [Date] | **Maturity Level:** [Level]
**Monthly Spend:** [Amount]

## Executive Summary
[2-3 sentences: overall health, biggest risk, most impactful fix]

## Measurement Health Scorecard
| Layer | Component | Status | Score | Priority Actions |
|---|---|---|---:|---|
| 1 | Pixel Health | | /10 | |
| 2 | CAPI Implementation | | /10 | |
| 2 | Deduplication | | /10 | |
| 2 | Event Match Quality | | /10 | |
| 3 | Attribution Settings | | /10 | |
| 4 | Event Configuration | | /10 | |
| 4 | Conversion Values | | /10 | |
| 5 | UTM Structure | | /10 | |
| 5 | GA4 Alignment | | /10 | |
| 5 | Third-Party Attribution | | /10 | |
| -- | **Overall** | | **/100** | |

## Layer 1: Pixel Health
[status, event inventory, issues, recommendations]

## Layer 2: CAPI and Event Match Quality
[implementation, deduplication, EMQ table, improvement plan]

## Layer 3: Attribution Settings
[current configuration, recommendation, window comparison]

## Layer 4: Event Configuration
[conversion events, funnel health, custom conversions]

## Layer 5: UTMs and Third-Party Tools
[UTM audit, GA4 alignment, third-party assessment]

## Action Plan
### P0: Fix Immediately (Data at Risk)
### P1: Fix This Week (Optimization Degraded)
### P2: Fix This Month (Improvement Opportunity)
### P3: Quarterly Review Items

## Measurement Maturity Roadmap
Current State: [Level]
Target State: [Next Level]
Steps to Advance: [list]
```

## Common Issues and Fixes

| Issue | Symptom | Root Cause | Fix | Priority |
|---|---|---|---|---|
| Double-counted conversions | CPA too low vs reality | CAPI event_id mismatch | Align browser/server event_id | P0 |
| Missing conversions | Meta under-reports | Pixel missing or CAPI inactive | Verify pixel coverage and implement/fix CAPI | P0 |
| Low EMQ | High CPA / weak optimization | Missing user parameters | Add hashed email/phone, fbclid, external_id | P1 |
| Attribution inflation | Meta claims too many conversions | Broad window or view-through credit | Compare windows and view-through share | P1 |
| GA4/Meta discrepancy | Counts differ | UTM inconsistency or attribution differences | Standardize UTMs and compare equivalent windows | P2 |
| Stale custom audiences | Retargeting declines | Source events not firing | Audit pixel on source pages | P1 |
| Modeled conversion noise | Volatile EU/iOS data | Low consent or CAPI volume | Improve consent UX and CAPI signal | P2 |

## Draft Action Queue

After the report and user confirmation, queue executable remediation drafts only where supported. Examples: create Custom Conversions for important custom pixel events, or send a test CAPI event. Pixel settings and event rules that MCP cannot change must be manual. Each draft needs explicit approval per item before execution.

## Reference Files

- `references/data_requirements.md` — MCP tools, API calls, and manual data-pull instructions for each audit point.
