---
name: meta-ads-creative-strategy-methodology
description: Reference framework for Meta creative testing, fatigue detection, creative benchmarks, format mix, and volume planning; loaded by creative action skills.
---

> Bucksworth note: written for an agent with a direct API toolset. Translate tool/function names to the connector you have (Zapier MCP etc.). Bucksworth rules in `bucksworth-rules` override anything here. Sibling skills use hyphens: `creative-strategy-methodology`-style names, e.g. `google-ads-mine-search-terms`.

# Creative Strategy Methodology

Reference skill for Meta Ads creative strategy. Use it to evaluate creative performance, plan tests, diagnose fatigue, set production volume, and calibrate hook/hold benchmarks. Creative actions such as `analyze_creative` and `generate_creative_brief` load this methodology; this is not a standalone execution skill.

## Creative Engine

Operate creative as a loop: Produce → Test → Analyze → Scale winners → Detect fatigue → Produce.

## Testing Methods

| Method | Use when | Setup / judgment rules |
|---|---|---|
| Andrew Faris method | High-spend accounts with high creative volume; default when scale signal matters most | Put 15-20 new ads into existing scaling ad sets with cost controls; run at least 7 days; kill ads that spend 2x CPA with zero conversions. Avoid when you need isolated variable reads. |
| 3:2:2 | Need to learn why a concept works, lower spend, or new concept testing | 3 creatives × 2 primary texts × 2 headlines; one ad set per theme; budget ~3x target CPA/day; run 48-72h; judge on lowest CPA with at least 5 conversions; graduate winners with Post ID. |
| DCT / Flexible Ads | Rapid element iteration inside a proven concept | Supply up to 10 images/videos, 5 texts, 5 headlines, 5 descriptions, 5 CTAs. Good for copy/element testing; not ideal for video or interdependent concepts because winning combinations are opaque. |

## Fatigue Detection

Primary signals: CTR down >10% from peak (7d vs prior 7d), CPA up >15% vs first-14d baseline, prospecting frequency >3.0, retargeting frequency >7.0, CPM up >20%, or thumb-stop/hook rate down >15%. Secondary signals include negative comments, declining share rate, declining outbound click rate, and falling video completion.

Response protocol:
1. 1-2 signals: monitor daily and prepare replacements.
2. 3+ signals: reduce spend 30-50% and launch replacements.
3. CPA 2x+ baseline: pause and refresh creative immediately.

Prevent fatigue with 2-3 weeks of ready concepts, hook rotations every 2-3 weeks on high-spend ads, multiple formats per concept, and staggered launch dates.

## Benchmarks

### Hook / thumb-stop rate

| Rating | Hook rate |
|---|---:|
| Poor | <20% |
| Below average | 20-25% |
| Average | 25-30% |
| Good | 30-40% |
| Excellent | 40-50% |
| Viral | 50%+ |

Typical ranges: UGC testimonial 30-45%, text-overlay static 20-30%, product demo video 25-35%, founder/talking head 35-50%, iPhone-shot “ugly ad” 35-55%, polished brand video 15-25%.

### Hold rate

| Rating | Hold rate |
|---|---:|
| Poor | <30% |
| Below average | 30-40% |
| Average | 40-50% |
| Strong | 50-60% |
| Excellent | 60-70% |
| Exceptional | 70%+ |

Hook/hold matrix: low hook + low hold = kill; low hook + high hold = test new hooks; high hook + low hold = fix body/content promise; high hook + high hold = scale.

## Creative Volume and Format Mix

| Monthly spend | New concepts/week | New ads/week | Testing budget |
|---|---:|---:|---:|
| <$10K | 1-2 | 3-5 | 20-25% |
| $10K-50K | 2-4 | 5-10 | 20% |
| $50K-150K | 4-6 | 10-20 | 15-20% |
| $150K-500K | 6-10 | 20-40 | 15% |
| $500K+ | 10-15 | 40-60 | 10-15% |

A concept is the idea/angle/story/format; an ad is an execution. Expected creative win rates: average 10-15%, good 20-25%, exceptional 30%+.

Core formats: static, UGC video, polished video, founder/talking head, carousel, collection, catalog/DPA, Reels/Stories-native. For SaaS/B2B, start around 30% UGC/demo, 25% founder/talking head, 20% static, 15% screen recordings, 10% carousel. For eCommerce, start around 30% UGC, 25% product video, 20% static, 15% carousel, 10% catalog/collection.

## Scaling Winners and Quality Gate

Use the Post ID method when moving winners into scaling campaigns so social proof carries over. Monitor and moderate comments.

Before launch ask: “Could this ad profitably spend $10K?” Launch only if it has a clear first-3-second hook, one focused value proposition, a specific pain/desire, clear CTA, sound-off comprehension, landing-page message match, correct placement specs, and no policy violations.

## References

- `references/testing_frameworks.md` — testing method details and examples
- `references/fatigue_detection.md` — full fatigue thresholds and frequency tables
- `references/creative_formats.md` — specs and format best practices
- `references/hook_strategies.md` — hook types, examples, and benchmarks
