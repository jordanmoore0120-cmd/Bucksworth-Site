---
name: aeo-geo
description: AI-search visibility (AEO / AIO / GEO) for Bucksworth — how to get cited by Google AI Overviews/AI Mode, ChatGPT, Perplexity, Copilot and Claude; where the official rules live, how to measure citations, and how to keep the rules current. Use before writing or changing any page, post or GBP content meant to be found by AI.
---

# AEO / AIO / GEO

## Rules to follow (already in the repo, read them before you write)
1. `seo-data/reference/ai-search-guidelines.md`: official rules by engine (Google AIO/AI
   Mode, helpful content, spam policies, Bing/Copilot + IndexNow, ChatGPT/OAI-SearchBot,
   Perplexity, Ads/LSA), each with its source URL. **Official docs beat blog tactics.**
2. `seo-data/reference/ci-web-group-ai-era-guide.md`: Jennifer Bagley / CI Web Group
   (the team behind HydraOS). Jordan said this guide governs site, SEO and ads work.
3. `seo-data/reference/aeo_playbook.md`, `eeat_checklist.md`, `juststartai-playbook.md`
   (community tips: house rules override them, e.g. no price schema).
4. `bucksworth-rules` overrides all of the above.

## What gets a local business cited (from those sources)
- Being indexed and snippet-eligible. Never add nosnippet/max-snippet/noindex to money pages.
- Answer-first passages that stand alone: the first 1–3 sentences answer the question
  directly, then question-phrased H2/H3s and self-contained sections.
- Information gain: first-hand facts (our jobs, field observations, AZ timing, local
  conditions) that other sites don't have. City-swapped templates are scaled-content risk.
- A consistent entity: the same name/NAP/services everywhere (site, schema, GBP,
  citations). Structured data must match the visible text.
- Mentions and citations OFF the site: AI Overviews and ChatGPT cite Reddit, YouTube,
  Facebook groups, local news, Yelp/Thumbtack/HomeAdvisor-style lists and GBP data.
  The website alone can't win this. Links and mentions (see `pr-backlinks`), GBP
  (see `google-business-profile`) and video all count.
- GBP information kept current. Google lists it as an AI-features factor.

## Measure it, don't guess
- Method: see `dataforseo` → "AI-search visibility". Raw baseline (2026-10-07):
  `seo-data/ai-visibility.json`. AI Overview shown 19/30, cites us 2. ChatGPT names us 0/11.
- Google Search Console has a Generative AI performance report (live since 2026-08-31).
  Use it when a Search Console connector is available.
- Every change you make for AI search should name the question it targets and be
  re-measured later.

## Keep the rules current (this is a standing job)
Check these primary sources for changes and update `ai-search-guidelines.md` (dated,
cited, do/don't form, under ~250 lines, remove rules that are no longer true):
- Google Search Central (AI features, helpful content, spam policies, structured data,
  blog + status dashboard), Google Ads/LSA policy and AI Max news, GBP guidelines.
- Bing Webmaster Guidelines (Copilot), IndexNow.
- OpenAI (OAI-SearchBot / ChatGPT-User), Perplexity (PerplexityBot), Anthropic
  (Claude-SearchBot), Applebot-Extended.
- Practitioners (lower weight): Whitespark Local Insider + blog (Darren Shaw), Sterling
  Sky (Joy Hawkins), CI Web Group blog, Search Engine Roundtable.
Reject anything that's parasite SEO, fake reviews, keyword-stuffed GBP names, doorway
pages, AI spam, link schemes or tricks to game AI Overviews.
Also check that live robots.txt allows Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User,
PerplexityBot and Claude-SearchBot.
