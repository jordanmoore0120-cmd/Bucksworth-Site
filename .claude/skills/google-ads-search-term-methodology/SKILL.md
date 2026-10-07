---
name: google-ads-search-term-methodology
description: Reference methodology for classifying Google Ads search terms, choosing negatives, finding expansion terms, and setting review cadence; loaded by mine_search_terms.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `search-term-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Search Term Methodology

Reference skill only; `mine_search_terms` performs the data pull and analysis. Use this skill to decide how to classify search terms, when to add negatives or expansion keywords, and how often to review.

## Five-Category Classification System

Every search term gets exactly one classification:

| Classification | Use when | Action | Priority |
|---|---|---|---|
| `URGENT_NEGATIVE` | Irrelevant and wasting meaningful spend; e.g. spend >2x target CPA with 0 conversions, or obviously irrelevant terms such as jobs/careers in a service campaign. | Add negative immediately at the correct level and match type. | Same day |
| `EXPAND` | Relevant, converting, currently matched through broad/phrase, not already dedicated, and enough volume to manage separately (usually 3+ conversions at/below target CPA and 5+ clicks/week). | Add exact or phrase keyword per `references/classification_framework.md`; decide whether discovery keyword remains active. | Weekly |
| `COVERED_BY_PARENT` | Relevant term is already handled by a healthy parent keyword: parent relevance 70%+, CPA/ROAS within target, and term volume too low for dedicated management. | Tag and skip until parent health changes. | None |
| `MONITOR_NEGATIVE` | Irrelevant but low damage so far, commonly <$10 spend and 0 conversions. | Queue for next negative-keyword maintenance batch. | Monthly |
| `REVIEW_MANUALLY` | Ambiguous relevance, partial intent match, insufficient data, conflicting signals, or fewer than 10 clicks. | Present term, matched keyword, campaign, metrics, and diagnostic notes for human judgment; see `references/gray_area_decision_tree.md`. | Weekly batch |

## Three-Way Relevance Check

Do not judge search terms in isolation. A term must pass all three checks to qualify for `EXPAND`:

1. **Term vs. matched keyword** — does the query preserve the intent the keyword was meant to capture?
2. **Term vs. campaign/ad group theme** — does it belong in the campaign's strategic territory?
3. **Term vs. landing page** — would the user find what they expected on the destination page?

If any check fails, classify as `URGENT_NEGATIVE`, `MONITOR_NEGATIVE`, or `REVIEW_MANUALLY` depending on severity and spend.

## Quick Decision Matrix

| Clicks | Conversions | Relevant? | Classification |
|---|---:|---|---|
| 20+ | 0 | No | `URGENT_NEGATIVE` |
| 20+ | 0 | Yes | `REVIEW_MANUALLY` |
| 20+ | 3+ | Yes | `EXPAND` |
| 20+ | 3+ | No | `REVIEW_MANUALLY` — investigate why irrelevant traffic converts |
| 5-19 | 0 | No | `URGENT_NEGATIVE` if spend >2x CPA, else `MONITOR_NEGATIVE` |
| 5-19 | 1-2 | Yes | `REVIEW_MANUALLY` |
| 5-19 | 0 | Yes | `REVIEW_MANUALLY` |
| <5 | 0 | No | `MONITOR_NEGATIVE` |
| <5 | 0 | Yes | `REVIEW_MANUALLY` |
| <5 | 1+ | Yes | `REVIEW_MANUALLY` |

## Negative Match Type Rules

- **Negative broad:** use for concept-level irrelevance where all included words signal bad intent in any order. It does not use close variants or intent matching like positive broad.
- **Negative phrase:** use when a specific ordered phrase is the problem.
- **Negative exact:** use for surgical exclusions when adjacent/related queries may still be valid.
- When uncertain, start narrower. Over-broad negatives are harder to diagnose than missed exclusions.

Decision tree: whole concept irrelevant → broad; ordered phrase is the issue → phrase; only one query is bad → exact.

## Review Cadence

| Account Spend Tier | Frequency | Focus |
|---|---|---|
| >$10K/month | Daily spot-checks plus full weekly review | Budget protection and urgent negatives |
| $2K-$10K/month | Weekly full review | All categories; monthly n-gram analysis |
| <$2K/month | Bi-weekly or monthly | Urgent negatives first; batch the rest |

After match-type changes, keyword additions, new launches, bid-strategy changes, or significant budget increases, review daily for two weeks.

## Reference Files

Load the specific reference needed for deeper detail:

- `references/classification_framework.md` — thresholds, examples, parent health, and three-way rubric.
- `references/ngram_analysis.md` — n-gram decomposition, volume thresholds, bucket definitions, and brand proximity.
- `references/negative_keyword_architecture.md` — four-level negative hierarchy, placement tree, conflict detection, and PMax limits.
- `references/match_type_behavior_2026.md` — current match-type semantics, close variants, AI Max, and three-lane structure.
- `references/pmax_search_terms.md` — PMax search-term analysis, asset-group evaluation, and extraction criteria.
- `references/gray_area_decision_tree.md` — ambiguous-term diagnostics and escalation.
