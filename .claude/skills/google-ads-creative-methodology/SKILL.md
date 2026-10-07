---
name: google-ads-creative-methodology
description: Reference methodology for evaluating Google Ads creative across RSA, PMax, video, fatigue, and testing; load through audit_creative, not as an action skill.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `creative-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Creative Methodology

Reference framework for Google Ads creative evaluation. Load it when an action skill, usually `audit_creative`, needs standards for Search RSA, Performance Max, Display, YouTube, or Demand Gen creative. Calibrate all judgments by account maturity when `account_maturity_methodology` is available.

## RSA evaluation

Assess RSAs on:

- **Google asset ratings:** prioritize replacing persistently low-rated assets, but do not treat ratings as the only success measure.
- **Ad strength:** use as a hygiene signal, not a performance KPI.
- **Asset completeness:** target near-full headline/description coverage before judging testing depth.
- **Pinning:** only pin for compliance, brand, or proven message-control needs; over-pinning can reduce learning.
- **Headline diversity:** include distinct value propositions, proof, CTA, pain/problem, feature/benefit, and keyword-aligned variations.
- **Message alignment:** keyword intent, landing-page promise, and ad copy should match.

## Performance Max asset evaluation

Score completeness and quality across text, image, logo, and video assets. Separate “missing required asset types” from “present but weak.” Check that asset groups have coherent themes, landing pages, audience signals, and listing-group/product-set logic for Shopping-eligible campaigns.

## Video creative framework

Use Google’s ABCD lens:

- **Attention:** brand/product visible early, strong opening, pattern interrupt.
- **Branding:** brand integrated naturally and early.
- **Connection:** human relevance, problem/benefit clarity, emotional or practical hook.
- **Direction:** clear CTA or next step.

Verify format fit: vertical/short-form assets for Shorts-style inventory, skippable/in-stream suitability, and length aligned to objective. The first five seconds must communicate the hook, brand/category, and reason to keep watching.

## Fatigue detection

Primary signals: declining CTR or engagement, rising CPA/CPC, falling conversion rate, rising frequency, and shrinking incremental reach. Compare current period against the prior comparable period and segment by campaign type when possible.

Typical frequency guidance:

- Search: frequency is less meaningful; focus on CTR, conversion rate, asset ratings, and search-term intent drift.
- PMax/Display/Demand Gen: watch frequency, CTR decay, and creative-level conversion trends.
- YouTube: watch view rate, hook retention, CPV/CPA trend, and repeated-audience frequency.

Refresh when performance deterioration and exposure signals agree; avoid replacing winners based on one noisy metric.

## Testing methodology

Prefer clean campaign experiments or structured asset rotation when supported. Test one main variable at a time: message angle, offer, format, visual style, hook, CTA, landing-page promise, or audience-context fit.

Minimum decision rules:

- Define success metric before launch.
- Allow enough impressions/clicks/conversions for the account’s maturity and spend level.
- Compare against a stable control and a matching date window.
- Do not declare winners while learning status, budget changes, or tracking outages confound the result.

## Cross-campaign consistency

Check whether Search, PMax, Display/YouTube, and landing pages make compatible promises. Variation is acceptable by funnel stage and format, but offer, price, compliance language, brand claims, and CTA should not conflict.

## Maturity calibration

- **Nascent:** emphasize asset completeness, basic message clarity, and first test coverage.
- **Developing:** add structured experiments and concept rotation.
- **Established:** optimize by segment, audience, product/service line, and funnel stage.
- **Advanced:** use statistically disciplined testing, incrementality thinking, creative pipeline metrics, and fatigue forecasting.

## Reference loading index

When deeper analysis is needed, load the relevant methodology: account maturity, landing-page/offer methodology, PMax methodology, YouTube/video methodology, or search-audit methodology. This skill supplies creative standards only and should not execute account changes.
