---
name: google-ads-audit-settings
description: Audit Google Ads account/campaign settings, conversion tracking, privacy compliance, and data connections; use audit_bidding for bidding strategy reviews and audit_local for local-business audits.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `audit-settings`-style names, e.g. `google-ads-mine-search-terms`.

# Audit Settings

End-to-end Google Ads settings audit with severity-classified findings and practitioner-ready reports.

## Dependencies

Load before data work:
1. `account_conventions` for target account(s), business type, KPI targets, maturity, and special handling. If missing, stop and say: "No account configuration found. Run `account_conventions` to set up your accounts first."
2. `settings_methodology` for account/campaign checklists, conversion tracking, privacy, and data connections.
3. `account_maturity_methodology` to calibrate expectations.
4. This skill's `references/data_requirements.md` and `references/output_specs.md`.

## Workflow

Use checkpoints after each major section. First five runs should include concise methodology/reasoning explanations; otherwise keep checkpoints focused on confirmation.

### 0. Confirm context

Report account name, CID, business type, maturity, audit sections in scope (default: all), and known constraints such as limited GA4 access or non-applicable consent requirements.

### 1. Acquire data

Use `references/data_requirements.md`. Pull:
- Account settings: auto-tagging, tracking template/final URL suffix, account conversion goals, auto-apply recommendations.
- Campaign settings: geo target type, network settings, ad rotation, schedules, device bid adjustments, campaign type/subtype, PMax final URL expansion and brand restrictions.
- Conversion actions: name, category, count setting, attribution model/window, include-in-conversions, value settings. Hard rule: `conversion_action` does **not** support `metrics.conversions` in `SELECT`; pull volumes separately from account/campaign metrics.
- Linked accounts: GA4, Merchant Center, YouTube, Search Console, and other relevant links.

Checkpoint with successful pulls, access errors, and missing data.

### 2. Audit account-level settings

Severity definitions:

| Severity | Definition |
|---|---|
| Critical | Actively causing budget waste, data corruption, or compliance violation |
| Warning | Suboptimal and likely reducing performance or data quality |
| OK | Correctly configured |

Check:
- Auto-tagging must be ON; OFF is Critical.
- Tracking template/final URL suffix must have correct, consistent UTM structure; malformed/missing is Warning unless it breaks attribution.
- Auto-apply recommendations for adding keywords, bids, or budgets are Critical; low-risk categories such as removing redundant keywords are Warning.
- Shared/account negative keyword lists should exist and be applied where relevant; missing/unapplied is Warning.
- Default conversion goals must align with business objectives; observation/secondary goals included by default are Warning, business-misaligned goals are Critical.

### 3. Audit campaign-level settings

For each campaign check:
- Location targeting: `Presence or interest` is Critical for local-only or geographically constrained campaigns; `Presence` may be Warning for tourism/relocation if it limits reach.
- Network settings: Display Network ON in Search is Warning, Critical if Display spend exceeds 10% of campaign budget; Search Partners ON requires segmented performance review but is not automatically wrong.
- Ad rotation: `Do not optimize` without an active ad test is Warning.
- Ad schedule: missing/misaligned schedule for call-driven businesses is Warning.
- Devices: no mobile adjustment when mobile CVR is materially worse than desktop is Warning.
- PMax final URL expansion: ON without URL exclusions is Warning; traffic to irrelevant pages is Critical.
- PMax brand restrictions/exclusions: PMax and branded Search coexisting without brand exclusions is Warning.

### 4. Audit conversion tracking

For every conversion action verify:
- Count setting: leads = One, purchases = Every; wrong count is Critical.
- Attribution model: DDA expected; deprecated models not auto-migrated are Warning.
- Attribution window fits sales cycle; too short for long-cycle sales is Warning.
- Include in Conversions contains only primary business goals; secondary/observation actions included are Critical.
- Values: dynamic for eCommerce, appropriate static/stage values for leads; missing values when value-based bidding is viable is Warning.
- Duplicates: multiple primary actions tracking the same event are Critical.

### 5. Check privacy compliance

Only apply requirements to relevant traffic/markets:
- Consent Mode V2 for EEA/UK: missing when required is Critical; Basic-only is Warning.
- Enhanced Conversions for Web/Leads: missing is Warning.
- U.S. privacy: if California traffic exists, check Restricted Data Processing and GPC handling; gaps are Warning.

### 6. Audit data connections

By business type, classify required, recommended, and optional links. For each connection verify status, correct property/account, and impact if missing. Missing required links are Critical; missing recommended links are Warning; optional gaps are opportunities.

### 7. Generate outputs

Produce per `references/output_specs.md`:
1. **Settings Audit Report:** account/campaign tables with Setting, Current Value, Recommended, Status, Notes, plus severity counts.
2. **Conversion Tracking Report:** conversion action table, duplicate summary, recommended changes.
3. **Compliance Checklist:** requirement, current status, impact, priority, implementation steps.
4. **Data Connections Report:** connection, status, required/recommended/optional, missing impact, linking instructions.
5. **Summary Dashboard:** Critical/Warning/OK counts, top 3 highest-impact issues, priority order, estimated impact of Critical fixes.

## Edge cases

- PMax-only accounts: skip Search network/ad rotation checks; focus on final URL expansion, brand restrictions, and asset URL configuration.
- Single-campaign accounts: note overlap between account and campaign settings to avoid redundancy.
- No EEA/UK traffic: mark Consent Mode V2 as not applicable.
- New/empty accounts: focus on launch-readiness settings rather than penalizing defaults.
- Third-party tracking platforms: verify templates but do not mark wrong without understanding the integration.
