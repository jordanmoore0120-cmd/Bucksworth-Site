---
name: google-ads-audit-local
description: Audit Google Ads for local businesses, including GBP/location assets, location targeting, offline conversions, campaign fit, and LSA; use audit_settings for general settings and non-local accounts.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `audit-local`-style names, e.g. `google-ads-mine-search-terms`.

# Audit Local

Comprehensive local-business Google Ads audit covering GBP integration, geo targeting, offline tracking, campaign choice, local keywords/extensions, and LSA performance.

## Dependencies

Load before analysis:
1. `account_conventions` for account ID/name, business model, KPI targets, maturity, `has_gbp`, `local_config`, and known constraints.
2. `local_methodology` for GBP, location targeting, campaign type, and LSA frameworks.
3. `account_maturity_methodology` for recommendation depth.
4. As needed: `bidding_methodology` and `search_term_methodology`.

If account config is missing, stop and tell the user to run `account_conventions` first.

## Workflow

### 0. Confirm scope

Report account, CID, maturity, configured locations, GBP link status, tourism relevance, LSA status, and audit sections in scope. Ask what locations or concerns to prioritize.

### 1. Acquire data

Use `references/data_requirements.md` for exact queries/specs. Pull:
- Location extension/asset and GBP link status.
- Geo performance by distance, city/region, and zip when available; identify spend/conversions outside service area.
- Campaign location settings, targets/exclusions, radius/bid adjustments, and ad schedule.
- Conversion actions, call tracking, store visits eligibility/status, offline conversion import, enhanced conversions for leads.
- LSA lead volume, CPL by category, disputes, reviews, and profile data if active.

Inventory data availability, date coverage, and gaps; carry gaps into the analysis.

### 2. Check GBP integration

Evaluate whether GBP is linked, all business locations are linked, and location extensions/assets are enabled on relevant campaigns. If accessible, review review score/volume, photos, posts, Q&A, and hours accuracy.

Severity guide:
- **Critical:** GBP not linked; no location extensions enabled.
- **Warning:** fewer locations linked than the business has; location review score below 4.0; fewer than 20 photos/location.
- **Opportunity:** inactive GBP posts; empty Q&A.

### 3. Audit location targeting

For each campaign:
- Check `Presence` vs `Presence or interest`. Strictly local businesses should use `Presence`; tourism, hospitality, events, relocation, and destination businesses may need `Presence or interest`.
- Compare radius/target area to business type; flag areas too wide/narrow and multi-location overlap.
- Analyze spend/conversions by distance/city/zip, high-spend zero-conversion areas, high-performing areas, and out-of-area conversions.

Severity guide:
- **Critical:** `Presence or interest` on local-only campaigns; no location targeting/national serving.
- **Warning:** significantly overbroad radius; overlapping radii; geographic segments with $100+ spend and zero conversions.
- **Opportunity:** high-performing zips lack bid adjustments; nested radius strategy absent.

### 4. Audit offline conversion status

Assess call extensions/tracking, call duration threshold, call quality scoring, store visits eligibility/status, GCLID capture, OCI/enhanced conversions for leads, and imported values.

Tracking levels:

| Level | Description |
|---|---|
| Minimal | Only online forms; no calls/visits |
| Basic | Google forwarding calls; no quality/CRM import |
| Intermediate | Third-party call quality or OCI |
| Advanced | Calls + OCI + store visits if eligible + accurate values |

Critical: no call tracking for a phone-driven business; Smart Bidding with no offline conversion data. Warning: Google forwarding only; OCI with GCLID capture below 80%; missing enhanced conversions or stage-based values.

### 5. Evaluate local campaign strategy

Compare active campaign types to the methodology decision matrix:
- Search should be the foundation for local businesses.
- PMax needs GBP assets and generally 15+ conversions/month.
- LSA should run when eligible and reviews are competitive.
- Flag campaign types that do not fit the local model.

Also check local keyword coverage (`near me`, `[service] [city]`, neighborhoods, emergency/urgent variants), match types, location/call extensions, ad copy local relevance, and ad scheduling vs business hours.

### 6. Review LSA if active

Evaluate lead volume by type, CPL by service category, Search-vs-LSA CPL, lead trends, dispute rate/reasons, lead-to-booking rate if available, response time, review competitiveness, profile completeness, service categories, and service area accuracy.

Severity guide: Critical dispute rate >30%; Warning dispute rate 20-30%, review score below 4.0, response time over 30 minutes; Opportunity category/service-area expansion or review-volume growth.

## Output contract

Produce:
1. **Local Audit Report:** markdown sections for GBP, targeting, offline conversions, campaign evaluation, and LSA if applicable; each finding includes severity and recommendation.
2. **GBP Action Items:** prioritized what/why/impact list.
3. **Location Targeting Recommendations:** campaign-by-campaign targeting, radius, bid adjustment, exclusions, and estimated budget savings when calculable.
4. **Summary Dashboard:** local readiness score 1-10, GBP status, targeting status, tracking level, top 3 priorities, and estimated targeting waste if calculable.

Use checkpoints after scope, data inventory, analysis findings, and delivery. In first five runs, briefly explain why each audit section and finding matters.
