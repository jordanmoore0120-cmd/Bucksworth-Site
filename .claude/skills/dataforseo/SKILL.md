---
name: dataforseo
description: DataForSEO for Bucksworth — keyword demand, live SERP and map-pack ranks, AI Overview citations, ChatGPT/LLM mentions and Lighthouse. Use whenever a decision needs search-demand or ranking data (Jordan says demand always comes from DataForSEO).
---

# DataForSEO

## Access
- Zapier MCP app **DataForSEO** (25 actions, a personal app with an API login). It worked
  on 2026-10-06: "pest control phoenix" = 1,600/mo, $53.22 CPC, matching a direct pull.
- Never print, commit or ask for the API password. It's pay-as-you-go: about $0.004 per
  SERP and about $0.03 per ChatGPT prompt (measured 2026-10-07).
  Keep routine runs under about $1 unless Jordan OKs more.

## Bucksworth defaults
- Demand/volume: `location_name = "Phoenix,Arizona,United States"`. For Tucson use
  `"Tucson,Arizona,United States"`. For city-level SERPs use e.g. `"Mesa,Arizona,United States"`.
- Ads headline 1 = the DataForSEO term with real volume in Phoenix.
- Rank checks: `serp/google/organic/live/advanced`, device mobile, depth 20–30,
  location = the city. Our domain = `getyourbucksworth.com`.
- Map pack / grid: `serp/google/maps/live/advanced` with `location_coordinate "lat,lng,14z"`.

## AI-search visibility (AEO/GEO measurement)
- **Google AI Overview:** the same advanced SERP call with `load_async_ai_overview: true`.
  Find the item `type == "ai_overview"` and read its `references[].domain/url`. Check
  whether `getyourbucksworth.com` is cited.
- **ChatGPT:** `ai_optimization/chat_gpt/llm_responses/live` with
  `{"user_prompt": "...", "model_name": "gpt-4o-mini", "web_search": true}`. Read
  `items[].sections[].text` and annotations (the cited URLs) and check for "Bucksworth".
- Baseline 2026-10-07 (30 questions / 11 prompts): Google showed an AI Overview on 19,
  cited us on 2 (Tucson scorpion blog, Marana scorpion page). ChatGPT named us on 0 of 11.
  The most-cited sources were Reddit, YouTube, Facebook groups and azpest.com.
  Raw data: `seo-data/ai-visibility.json`.

## Lighthouse
- `on_page/lighthouse/live/json` (mobile). Take the median of 3 runs. Budgets are in
  `seo-data/reference/performance-budget.md`.

## Data integrity
- Report only numbers the API actually returned, with the date. A failed or empty task
  is "no data", never "zero".
