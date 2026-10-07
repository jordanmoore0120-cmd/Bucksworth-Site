---
name: google-ads-settings-methodology
description: Reference methodology for Google Ads settings, conversion tracking, privacy compliance, and data-connection audits; loaded by audit_settings, not an action skill.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `settings-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Settings Methodology

Reference methodology for Google Ads account configuration audits. `audit_settings` loads this skill to know what to check and why; this skill does not pull data or execute an audit by itself.

## Core Principle

Settings errors are silent killers: location targeting, conversion counting, auto-apply, or data-link mistakes can waste budget or corrupt optimization signals without obvious alerts. Start every settings audit assuming something may be misconfigured until verified.

## Account-Level Checklist

Critical:
- Auto-tagging: should be ON; otherwise GA4 matching, attribution, and audiences break.
- Auto-apply recommendations: OFF or tightly controlled; otherwise Google may change keywords, bids, or budgets without review.
- Default conversion goals: aligned to business objectives; wrong goals can optimize every campaign toward the wrong action.

Important:
- Tracking template/final URL suffix: must match the UTM structure.
- Account-level negative keywords: maintained shared protections where relevant.
- Linked accounts: GA4, Merchant Center, YouTube, Search Console, Google Business Profile as applicable.
- Data Manager: first-party data, customer match, and offline conversion connections where relevant.

## Campaign-Level Checklist

Critical budget-waste risks:
- Location targeting method: use Presence when ads must only show inside target geographies; avoid accidental “presence or interest.”
- Network settings: avoid Display Network leakage on Search campaigns unless intentional.
- PMax final URL expansion: require URL exclusions when unrestricted expansion could send traffic to irrelevant pages.

Important performance risks:
- Language targeting must not be too broad or restrictive.
- Ad rotation should return to optimization after controlled tests.
- Ad schedule/dayparting should match business hours and conversion value windows.
- Device adjustments/settings should account for poor device-specific experiences.
- IP exclusions may be needed for competitors/internal traffic.
- PMax brand restrictions/exclusions should prevent unwanted brand cannibalization.

## Conversion Tracking Framework

Per conversion action, verify count setting, attribution model, attribution window, Include in Conversions, value assignment, and enhanced conversions.

Key rules:
- Leads usually count “One”; purchases usually count “Every.” Lead forms set to Every can inflate volume and deflate CPA.
- Data-driven attribution is the default since 2025; legacy attribution models were deprecated September 2025.
- Attribution windows must fit the sales cycle.
- Primary conversions should be the only actions included for bidding; secondary/observation actions should not inflate totals.
- eCommerce needs dynamic value; lead gen needs static, weighted, or offline-imported value.
- Enhanced Conversions for Web should be enabled broadly; Enhanced Conversions for Leads is required when importing offline lead outcomes.

## Privacy Compliance

Consent Mode V2 is mandatory for EEA/UK traffic. Since July 21, 2025, required signals are `ad_storage`, `analytics_storage`, `ad_user_data`, and `ad_personalization`; non-compliance can reduce remarketing, conversion tracking, and demographic reporting. Advanced Consent Mode uses cookieless pings and modeling to recover some denied-consent signal. A CMP must collect and pass consent.

U.S. state privacy laws are not federal but can apply by state (including CPRA, CPA, VCDPA, CTDPA and additional laws taking effect 2026-2027). Proactive consent mechanisms are recommended for future-proofing.

## Data Connections

Connection priorities:
- All accounts: GA4 required; YouTube and Search Console recommended.
- eCommerce: Merchant Center required; Data Manager/customer match recommended or required.
- Lead gen: CRM/offline conversions and Data Manager required where offline quality matters.
- Local: Google Business Profile required; CRM optional unless offline conversions are imported.

Auto-tagging is the first dependency to verify because many connections rely on it.

## Reference Loading Index

- `references/settings_checklist.md` — full account/campaign settings, correct values, failure modes, verification steps.
- `references/tracking_compliance.md` — conversion action audit, Consent Mode V2, enhanced conversions, U.S. privacy.
- `references/data_connections.md` — required connections by business type, verification steps, disconnection impact.

## Integration with Other Google Ads Skills

- Bidding methodology depends on accurate conversion tracking; audit settings before auditing bidding when data quality is uncertain.
- Campaign diagnostics starts with measurement correctness; this methodology supplies that branch.
- Account maturity affects expected error patterns: nascent accounts often lack setup; established accounts often have legacy drift.
- PMax audits require extra checks for final URL expansion, brand restrictions, and asset-group URLs.

## When to Run a Settings Audit

Run on new account onboarding, account takeover, unexplained performance degradation, quarterly maintenance, and after major changes such as new conversion actions, campaign types, or market targeting.
