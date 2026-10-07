---
name: meta-ads-compliance-methodology
description: Privacy, policy, Special Ad Category, consent, and data-use compliance framework for Meta Ads.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `compliance-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Compliance Methodology

## Purpose

Use this reference before launching or auditing Meta Ads where policy, privacy, targeting restrictions, consent, data sharing, or ad review risk is involved. Compliance requirements override performance goals. When ambiguous, state the uncertainty and choose the lower-risk option.

## Compliance hierarchy

1. **Legal requirements** such as GDPR, CCPA/CPRA, LGPD, and local rules supersede all platform guidance.
2. **Meta platform policies** govern ad content, Special Ad Categories, data use, account enforcement, and review.
3. **Industry frameworks** such as NAI/DAA and IAB TCF can add voluntary or contractual obligations.

## Special Ad Categories

Declare a Special Ad Category when ads relate to housing, credit, employment, or social issues/elections/politics in covered markets.

| Category | Includes examples |
|---|---|
| Housing | Home sale/rental/financing, apartments, mortgage offers, some home insurance |
| Credit | Credit cards, loans, insurance quotes, debt consolidation, credit products |
| Employment | Job postings, recruitment campaigns, career opportunities |
| Social issues/elections/politics | Issue advocacy, candidates, PACs, political/social topics in regulated markets |

Targeting restrictions after declaration commonly include no age/gender targeting, no ZIP-level precision, 15-mile minimum radius, limited detailed targeting, no standard lookalikes, and restricted Advantage+ audience behavior. Custom Audiences may be allowed with source restrictions.

If a case is ambiguous, err toward declaring. The performance cost is usually lower than ad rejection, account restriction, or legal exposure. Software/tools for restricted industries are not automatically Special Category, but copy like “find your next home” can trigger housing review.

## GDPR / EU-UK-Swiss traffic

GDPR applies when targeting or processing personal data of EEA/UK/Swiss users. Core advertiser obligations:

- Establish lawful basis, usually explicit consent for advertising tracking.
- Use a CMP with granular controls; block Meta Pixel until consent when required.
- Honor erasure/access requests and remove users from Custom Audiences within required timelines.
- Maintain privacy-policy disclosures for Meta Pixel, CAPI, custom audiences, and advertising purposes.
- Practice data minimization; do not send unnecessary or sensitive data via CAPI.

Recommended CMP patterns: TCF 2.2-compatible CMPs such as OneTrust, Cookiebot, Osano, Termly, or Didomi depending on market and size. Consent loss can reduce reported conversions; use modeled conversions and CAPI carefully, with caveats in reporting.

## CCPA/CPRA and Limited Data Use

For California residents where CCPA/CPRA applies:

- Provide “Do Not Sell or Share My Personal Information” handling.
- Honor Global Privacy Control where applicable.
- Document data shared with Meta through Pixel, CAPI, and Custom Audiences.
- Send Limited Data Use flags for opted-out California users via CAPI: `data_processing_options=['LDU']`, country `1`, state `1000`.
- Do not apply LDU universally unless legally required; it reduces optimization signal.

## Aggregated Event Measurement and Consent Mode

Current operating assumptions in this framework:

- Meta removed the original 8-event AEM limit in 2025, but modeled/aggregated reporting still matters for opted-out users.
- Domain verification remains important for domain/link ownership and event governance.
- Meta Consent Mode can support modeled attribution when users decline consent.
- CAPI + Pixel generally gives the most complete compliant signal when configured with correct consent and data-processing flags.

Label modeled conversion caveats in reports; do not present modeled data as fully observed.

## Data retention and audience management

- Customer lists must be first-party and based on appropriate consent or lawful basis.
- Hash PII before upload when not handled by Meta UI.
- Refresh customer lists at least monthly; weekly is better for active programs.
- Honor opt-out/deletion requests within the applicable legal deadline.
- Website and engagement Custom Audiences refresh automatically, but stale list audiences degrade.
- Do not send sensitive health, financial account, Social Security, or policy-unsupported data to Meta.

## Ad review checklist

Before launch, check:

- No “you” + sensitive personal attribute phrasing.
- No before/after transformation imagery where prohibited.
- Claims are qualified, substantiated, and not misleading.
- Landing page is functional, accessible, and matches ad content.
- Special Ad Category declared if applicable.
- Restricted content has required authorization.
- Copy is clear, grammatically correct, and not clickbait/all-caps.
- Privacy policy and CMP are accessible and functioning for relevant regions.

Common rejection causes include personal attributes, before/after imagery, unsubstantiated claims, nonfunctional landing pages, restricted content, low-quality copy, circumvention, and missing Special Category declaration. Appeal in Account Quality only when the ad clearly complies; otherwise revise first.

## Restricted/prohibited content reminders

Special authorization may be required for alcohol, gambling, cryptocurrency, political/social issue ads, pharmaceuticals, supplements, financial products, dating, and weight-loss content. Prohibited content includes illegal products/services, discriminatory practices, tobacco/vapes in most markets, weapons, spyware, some payday loans, MLM income claims, misleading health claims, and counterfeits.

## Audit cadence

Monthly:
- Pixel/CAPI firing correctly; EMQ reviewed.
- CMP blocks or signals correctly for EU/CA traffic.
- LDU applied only where required.
- Domain verified.
- Customer lists refreshed and deletion/opt-out requests processed.
- Active ads and landing pages pass policy checks.
- Account Quality has no unresolved issues.

Quarterly:
- Review privacy policy, CMP configuration, DPAs, CAPI event/parameter scope, team training, and competitor compliance patterns.

## Reference files

- `references/special_categories_guide.md` — advertising in Special Ad Categories.
- `references/privacy_checklist.md` — GDPR/CCPA compliance checklist.
