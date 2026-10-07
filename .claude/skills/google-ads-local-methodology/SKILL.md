---
name: google-ads-local-methodology
description: Reference methodology for Google Ads local-business strategy, including GBP, offline tracking, geo targeting, local campaign types, and LSA; loaded by audit_local.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `local-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Local Business Methodology

This is a **reference skill**, not an action skill. It answers how to evaluate, structure, and optimize Google Ads for local businesses; `audit_local` pulls data and applies the framework.

## Core Principle

Local advertisers win through calls, visits, directions, and service-area leads, not just online form fills. Audit three pillars: geographic precision, offline conversion visibility, and local platform integration.

## Google Business Profile (GBP)

GBP is foundational for local advertising. Without a verified, optimized GBP, local campaigns lose trust signals and local ad features.

**GBP enables:** location extensions, directions/call assets, location bid adjustments, local inventory ads, Maps/PMax local placements, and store-visit tracking when eligible.

**Audit signals:** review score/volume, hours, photos, posts, Q&A, service/product catalog, verification status, and Google Ads linkage.

**Requirements:** GBP must be verified and in good standing; link via Google Ads linked accounts; one GBP can link to one Ads account or MCC, with multiple locations under one account. Full reference: `references/gbp_integration.md`.

## Offline Conversion Tracking

If only online forms are tracked, local bidding optimizes on incomplete data.

| Method | Measures | Requirements |
|---|---|---|
| Store visits | Estimated physical visits after ad click | Multiple locations, 1000+ clicks/month |
| Google call forwarding | Call volume/duration from ads | Call extensions |
| Third-party call tracking | Call quality, recordings, CRM link | CallRail, CTM, or similar |
| Offline conversion import | CRM-confirmed leads tied to clicks | GCLID capture + CRM |
| Enhanced conversions for leads | Hashed lead data matched offline | Email/phone capture |

Use actual revenue where possible, estimated values by lead stage when necessary, or flat values as a minimum. If values are unreliable, volume-based tCPA is safer than value-based bidding. Full reference: `references/offline_conversion_tracking.md`.

## Location Targeting

Location targeting is usually the highest-impact setting.

**Critical setting:** default Google targeting can be “Presence or interest.” For most local businesses, use **Presence** to avoid users outside the serviceable area. “Presence or interest” fits tourism, hospitality, events, or businesses serving visitors.

| Method | Best For | Precision |
|---|---|---|
| Radius | Single-location businesses | High |
| City/ZIP | Multi-location or defined service areas | Medium |
| DMA/metro | Regional/multi-location chains | Low |
| Service area | Home services/mobile businesses | Variable |

Typical radius guide: restaurants 3-15 mi urban/suburban; professional services 5-25 mi; home services 15-40 mi; retail 3-15 mi; medical specialists 15-50+ mi. Use nested rings with stronger bids near the location, then refine by geographic reports. Full reference: `references/location_targeting_framework.md`.

## Local Campaign Type Selection

| Need | Recommended Type | Fallback |
|---|---|---|
| Maximum control/direct response | Local Search | N/A |
| Broad local visibility | Local PMax with GBP | Local Search + Display |
| Service lead generation | LSA + Local Search | Local Search only |
| New-location awareness | Geo-fenced Display | Local PMax |
| Visual local product/service | Demand Gen with local geo | Local PMax |

Local Search should include “near me,” city, and neighborhood terms plus call/location assets. Local PMax requires verified GBP for full value. LSA is pay-per-lead, appears above Search ads, and requires Google verification in supported categories/markets. Full reference: `references/local_campaign_types.md`.

## Local Services Ads (LSA)

Ranking factors: reviews, responsiveness, proximity, hours/availability, budget, and complaint history. Track qualified lead cost, dispute invalid leads within 30 days, and monitor dispute rate. Run LSA with Search where possible: LSA provides high-visibility pay-per-lead coverage; Search provides control. Full reference: `references/lsa_methodology.md`.

## Maturity Calibration

| Stage | Local implications |
|---|---|
| Nascent | Likely no offline tracking or GBP link; begin with basic tracking and manual/max-clicks approaches |
| Developing | Calls/GBP in place; test tCPA on higher-volume campaigns |
| Established | OCI/enhanced conversions and LSA active; portfolio bidding may be viable |
| Advanced | Full offline pipeline, store visits if eligible, value-based bidding with accurate values |

## Reference Loading Index

When `audit_local` loads this methodology, load references as needed:

| Reference | When |
|---|---|
| `references/gbp_integration.md` | Always |
| `references/offline_conversion_tracking.md` | Always |
| `references/location_targeting_framework.md` | Always |
| `references/local_campaign_types.md` | Campaign structure/new-campaign recommendations |
| `references/lsa_methodology.md` | LSA active or being considered |

Also cross-reference `account_maturity_methodology`, `bidding_methodology`, `search_term_methodology`, and `campaign_diagnostics_methodology` when those questions arise.
