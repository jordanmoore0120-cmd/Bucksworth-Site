---
name: meta-ads-generate-creative-brief
description: Generate Meta Ads creative testing plans, concept briefs, hook strategies, format recommendations, and testing schedules from account data.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `generate-creative-brief`-style names, e.g. `google-ads-mine-search-terms`.

# Generate Creative Brief

## Tooling and safety

Write Python scripts and run them with `uv run python script.py`. Read `sdk/tools/mcp_meta_ads.py` before calling generated functions; common reads include `meta_ads_get_insights(...)` and `meta_ads_list_campaigns(...)`. Monetary values are in **cents**.

This skill creates strategy and briefs. If it leads to campaign/ad creation, route execution through the launch workflow; all writes require human-approved drafts.

## Purpose

Produce prioritized Meta Ads creative concepts, individual creative briefs, hook variants, format recommendations, and a testing calendar from current account performance and creative inventory.

Use for creative planning, new concept generation, fatigue replacement, low testing velocity, market/audience/product expansion, or when creative win rate is low. If the user only asks which current ads are working, run `analyze_creative` first.

## Dependencies to load first

- `account_conventions`: account ID, currency/timezone, KPI targets, creative testing framework, weekly volume target, active creative types, concept rotation, ad naming conventions, active campaign types, maturity, and data-source method.
- `creative_strategy_methodology`: concept categories, hook frameworks, format guidelines, testing frameworks, volume requirements, and win-rate expectations.
- `account_maturity_methodology`: maturity-adjusted creative sophistication and velocity expectations.

## Workflow

### 1. Inventory current creative

Pull or collect active ads, creatives, formats, names, destination URLs, status, launch dates, spend, impressions, CTR, CPC, conversions, CPA/ROAS, thumbstop/hook/hold metrics when available, and fatigue flags from prior analysis. If MCP access fails, use CSV/manual inventory and say which fields are missing.

Map each creative to concept, format, hook, audience/funnel stage, offer, launch date, and performance tier. If naming conventions fail, classify manually and recommend better naming.

### 2. Find gaps

Assess:

- **Format coverage:** video, static, carousel, UGC, testimonial, demo, comparison, offer, founder/story, educational, etc.
- **Concept coverage:** compare active concepts to the methodology’s concept-category framework.
- **Hook diversity:** ensure concepts have distinct opening angles, not just minor copy variations.
- **Angle freshness:** flag concepts running too long, fatiguing, or overrepresented.
- **Testing velocity:** compare actual output to the configured weekly creative volume target.

Prioritize gaps by business impact, current fatigue, KPI opportunity, production feasibility, and strategic coverage.

### 3. Generate concepts

Create 3–5 prioritized concepts unless the user requests a different count. Each concept should specify target audience/funnel stage, customer insight, core promise, proof, offer/CTA, recommended format(s), hook variants, and why it is likely to work based on the data or methodology.

Prefer:

- Replacement concepts for fatigued winners.
- Variants of proven concepts in new hooks/formats.
- Missing high-leverage concept categories.
- Concepts that match production capacity and account maturity.

### 4. Define hook strategy

For each concept, provide at least two hook variants. Specify first-frame/first-line, visual opening, copy angle, emotional/practical lever, proof element, and how success will be measured. Hooks should test meaningful angle differences, not just wording.

### 5. Build testing schedule

Create a launch/review calendar with production deadlines, launch day, review day, kill/iterate/graduation criteria, and dependencies. Keep the schedule aligned with weekly creative volume target and account maturity; do not overload low-spend or nascent accounts.

## Required outputs

1. **Creative Testing Plan** with current inventory summary, gap analysis, prioritized concepts, testing calendar, and expected outcomes.
2. **Individual Concept Briefs** (usually 3–5), each self-contained for a creative producer:
   - concept name, objective, audience, funnel stage, KPI;
   - strategic context and supporting evidence;
   - format, length, placements, visual direction, copy points;
   - primary and variant hooks;
   - body/middle, CTA, references, production requirements;
   - success criteria and review timing.
3. **Weekly Testing Calendar** showing what launches, when it is reviewed, what graduates/kills, and when production assets are due.

If data is weak or unavailable, label concepts as hypotheses and state the weaker evidence base.

## Error handling

- No performance data: generate methodology-based briefs only and clearly mark them as not data-informed.
- New account (<7 days): create a first-wave plan covering broad proven categories such as testimonial/social proof, product demo, and problem/solution.
- Naming conventions missing: classify manually and recommend naming cleanup.
- No prior `analyze_creative`: build a baseline inventory and focus on coverage gaps.
- High creative volume (20+ ads/week): output a concept calendar and strategic direction instead of many individual ad briefs.
- No KPI targets: use methodology benchmarks and flag that success criteria are approximate.
- All concepts covered: recommend hook diversity, new formats, and iterations of winners.

## References

- `references/brief_template.md`
- `references/concept_frameworks.md`
- `creative_strategy_methodology`
- `account_maturity_methodology`
- `account_conventions`
