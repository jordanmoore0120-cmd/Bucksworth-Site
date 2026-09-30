# Bucksworth Agentic SEO / AEO Protocol (shared by Claude + Viktor)

Owner: Jordan Moore (CEO). This file is the strategy. `CLAUDE.md` is the repo safety/publishing playbook. When they conflict on safety, CLAUDE.md wins; on topic choice and SEO strategy, this file wins.

Model we follow: the **CI Web Group (Jennifer Bagley) agentic-search approach** for home services, plus the **Whitespark / Darren Shaw** local ranking playbook (`seo-data/reference/`). The goal is to be both **the answer AI engines cite** (ChatGPT, Google AI Overviews/AI Mode, Perplexity, Gemini) **and page 1 plus map pack top 3** on Google for profitable pest and weed terms.

## 1. Goals, in priority order
1. Money pages (`/{city}/{vertical}/{sub}`) reach page 1 for their city + service keyword. East Valley and Pinal come first: Apache Junction (the GBP address), Gold Canyon, San Tan Valley, Queen Creek, Mesa, Gilbert, Chandler, Maricopa, Casa Grande, Florence, Coolidge, Tempe, Ahwatukee.
2. Blog posts capture **real informational demand** (the questions people actually search) and pass relevance and authority **up** to the money page.
3. Bucksworth gets cited in AI answers. Content must be extractable: answer-first, specific, local, structured.
4. Every run learns. Check `seo-data/performance.json` and the rankings files before choosing what to do next.

Focus verticals for the blog: **pest-and-termite** and **weed-and-lawn-care**. No new AC/HVAC/plumbing blog posts unless Jordan asks.

## 2. Data you MUST use (demand is data, never a guess)
Viktor refreshes these files every week in `seo-data/`. Read the `generated` stamp in each one. If a file is more than 14 days old, say so in your run summary.

| File | What it is | Use it to |
|---|---|---|
| `blog-queue.json` | Ranked topics: city × sub-service × real question keyword, with AZ Google Ads volume (DataForSEO), existing post count, and the money page to link to | Pick the topic. Start at the top. Skip an item only if the cannibalization gate fails. |
| `question-keywords.json` | Per sub-service question keywords with AZ volume | Pick the H2/H3 and FAQ questions. Use the exact search phrasing. |
| `city-demand.json` | AZ volume for "{service} {city}" money terms | Know which city terms matter. Never target these in a blog title (the money page owns them). |
| `gsc-ranking-map.json` | For each Search Console query, the page that currently ranks for it (90 days) | Cannibalization gate. If a query already has a ranking page, don't create a competitor. Link to that page instead. |
| `striking-distance.json` | Money/city pages at position 8–25 | Internal-link targets. Every post links up to 1–2 of these (same city/cluster) with descriptive anchors. |
| `rankings.json` | Live Google organic + map-pack positions for priority money keywords in East Valley/Pinal (DataForSEO geo SERP; Whitespark Rank Tracker when connected) | Know what's winning and losing. Favor topics that support money pages that are close to page 1. |
| `whitespark-rankings.json` | Whitespark Local Rank Tracker grid scans (map pack) for the Apache Junction GBP, Sept vs June, plus Tucson June. avg_rank 100 = not in top 20. | Map pack is top 3 only around Apache Junction. Outside AJ the GBP is invisible, and weed control ranks nowhere. Support the Chandler, Mesa, Gilbert, Queen Creek and San Tan Valley pest/termite/scorpion city pages with blogs that link to them. Weed posts must link to the weed city pages. |
| `performance.json` | Search Console results for posts this routine published (impressions, clicks, position) | Learn which angles and formats earn impressions. Repeat what works, drop what doesn't. |
| `publish-log.json` | Append-only log of every post this routine published | Avoid repeats. **You must append to it on every publish.** |

## 3. Anti-cannibalization (rule #1: both on-site and SERP)
- **Page roles:** money page = transactional "{service} {city}". Blog = informational question ("how long do bark scorpions live", "when to apply pre emergent in arizona"). A blog title must **never** be a city + head-service term.
- **One intent, one URL.** Before writing, search `index.json` titles and slugs, `gsc-ranking-map.json` and `publish-log.json` for the target question and close variants (plural/singular, "do/does", "look like on bed"). If any page already targets the same intent, don't write it. Pick the next queue item.
- **SERP-level cannibalization:** if `gsc-ranking-map.json` shows two Bucksworth URLs splitting impressions for one query, don't add a third. Note it in the run summary so Viktor can consolidate it.
- The same question may be answered for different cities only if the post is genuinely local (different neighborhoods, housing stock, local data, local angle) and the title/H1 carries the city. There is a maximum of 3 cities per question across the whole site.

## 4. On-page protocol for every post (AEO/AIO + Whitespark)
- **Answer-first:** the first 1–3 sentences fully answer the target question for that city, with no preamble. Put a self-contained 40–60 word answer block directly under each H2.
- **Use real search phrasing:** H2/H3s mirror real queries from `question-keywords.json`. The FAQ has 4–6 `<h3>` questions taken from that file.
- **Entity clarity:** Bucksworth Home Services, locally owned since 2013 by Jordan & Taylor Moore, Apache Junction–based, serving Phoenix metro + Tucson, AZ ROC licensed. Only use facts that are already on the site. Never invent license numbers, counts or awards.
- **Extractable structure:** at least 1 data table (seasonal timing, DIY vs pro, sign-by-sign ID), lists, short paragraphs and definitions.
- **Hyper-local (Darren Shaw):** real neighborhoods and ZIPs, local housing stock, desert conditions, 3–5 surrounding cities we serve, one rotating local angle (see `reference/local_seo_rules.md`).
- **E-E-A-T:** first-person voice describing what our technicians typically see and do; never fabricate specific jobs, dates, customers, or stats, Jordan Moore as author (the template handles it).
- **Media:** 2+ real photos from `/public/images/photos/` with alt text containing service + city, plus 1 Bucksworth YouTube/Instagram/Facebook link.
- **Offers and claims:** no prices, no deals, never "no contract" and never mention contracts. Use "100% Money Back Guarantee" with "*Terms and conditions apply" if a guarantee is mentioned. Termite: no warranty specifics. Weed: pre + post emergent. Never "builders trust". Phones are only (480) 422-8388 PHX / (520) 284-9930 TUC.

**CI Web Group AI-era rules (Jordan, 2026-09-30) — read `seo-data/reference/ci-web-group-ai-era-guide.md`.** Every post must: carry one explicit INFORMATION-GAIN element the top-3 results lack (state it in run output); open with a 40–60 word answer + phone nearby; show first-hand expertise (our technicians, real photos); cover cost only as factors (never prices); never fake freshness. Every tactic must lower cost per lead, bring better customers, compound, or reduce risk.

## 5. Internal linking (strong, deliberate)
10–12 contextual links per post:
- 1 → the money page for this city + sub-service (primary link up, descriptive anchor, in the first 200 words).
- 1–2 → pages from `striking-distance.json` in the same city/cluster.
- 1 → the city hub, plus 1 → a nearby city's same sub-service page.
- 3–4 → same-sub-service blog posts (prefer ones with impressions in `gsc-ranking-map.json`).
- 1–2 → related sub-service posts, plus 1 conversion link (call/contact).
- Anchors are varied and descriptive. Never use "click here". Never link to a URL that doesn't return 200.

## 6. Off-page and AI-search (Viktor-owned; Claude supports)
Viktor runs PR/backlinks, citations (Whitespark Listing Management, never Yext), GBP posts, and review velocity. Claude supports this by writing linkable assets when the queue flags them (local data studies, seasonal pest reports) and by keeping NAP and entity facts consistent in content. AI-search visibility checks (is Bucksworth cited for "best pest control {city}"?) are logged by Viktor in `seo-data/ai-visibility.json` when available.

## 7. The loop (each run)
1. Verify repo state (CLAUDE.md §0). Read this file, then the `seo-data/*.json` files.
2. Pick the top safe `blog-queue.json` item. Adjust it using `performance.json` and `rankings.json`, and log why.
3. Run the cannibalization gate (§3).
4. Write to the §4 and §5 bar, plus CLAUDE.md §4.
5. Append to `content/blog/index.json` and the correct data file, and append an entry to `seo-data/publish-log.json` (date, slug, city, sub_service, target question, AZ volume, money page linked).
6. Publish to `main` (CLAUDE.md §1). Wait about 2 minutes, then check that the live URL returns 200. Only report success after you've seen the 200.
7. Summary: topic + data behind it, gate result, links added, SHA, live URL + status, and anything Viktor should fix (cannibalization pairs, stale data, broken links).
