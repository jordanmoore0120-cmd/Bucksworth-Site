# CI Web Group / JustStartAI — "The Contractor's Strategic Guide to Owning the AI-Era Web"

Source: Jennifer Bagley (CEO, CI Web Group), JustStartAI playbook, posted May 30 2026. Jordan shared screenshots with Viktor on 2026-09-30 and asked that its lessons govern all Bucksworth website, SEO, AEO/GEO, and ads work for both Claude and Viktor. This file is a condensed, Bucksworth-adapted version, not the verbatim article.

## The one objective
We are not in the website business or the SEO business. We are in the business of **acquiring the best customers at the lowest cost per lead, again and again, for years.** Every tactic must do at least one of these four things, or it isn't worth doing:
1. Lower the cost per lead.
2. Bring in better customers (high intent, pre-sold, don't haggle).
3. Compound over time (an owned asset that gets more valuable every day).
4. Reduce risk (legal, accessibility, privacy).

**Rented vs. owned.** Paid ads (Google Ads, LSA) are rented growth: the leads stop the day spend stops, and cost per lead rises as competitors bid. The website, reviews, GBP, citations, and AI citations are owned growth that compounds. Keep ads for today's calls, but put the durable effort into the owned asset.

## The five front doors (all reward the same foundation)
1. **Traditional blue links.** Shrinking.
2. **AEO, the quick answer.** Example: "Who handles scorpions near me right now?" Win it with a tight **40–60 word answer**, Speakable schema, and the phone number right there.
3. **GEO, the synthesis.** Example: "Compare the best pest control companies in Mesa." The AI builds its recommendation from reviews, listings, and authority across the web.
4. **AI search** (Perplexity, AI Overviews, ChatGPT search). Being the cited source is the new page one.
5. **Agents** (Google-Agent, ChatGPT agent mode, Perplexity Comet). The agent reads a stripped-down text version of the page, then books or contacts on the customer's behalf. If it can't parse us, it can't transact with us.

## Algorithm pattern (2025–2026 core updates)
These updates reward real first-hand expertise, **information gain** (saying something competitors don't), fast and stable pages (Core Web Vitals is a tiebreaker; pages over 3s lose traffic), and strong entity signals. They punish thin, undifferentiated, and recycled content and **"fake freshness"** (changing dates without adding real new information). AI-written content is not penalized; *undifferentiated* content is.

## Accessibility = machine-readability
Everything that makes the site readable to a screen reader also makes it readable to an AI agent. Accessibility is also a legal exposure: ADA suits commonly target small businesses, and accessibility overlay widgets do NOT protect you.
- One H1, and a logical H2/H3 order. Real headings, not styled divs.
- Alt text on every meaningful image. Phone number and service area in real text, never only inside an image.
- Labeled form fields. Use a real form, not `mailto:`. No login or CAPTCHA wall in front of a basic inquiry.
- Real text links with descriptive anchors, not "click here" or JS-only links.
- Target WCAG 2.2 AA.
- Never block legitimate AI agents or crawlers with the firewall or robots.txt.

## Content rules for Claude (added to STRATEGY.md §4)
- **Information gain is mandatory.** Every post must include at least one thing the current top 3 results don't have. Examples: a Bucksworth field observation, AZ-specific timing (monsoon, 70°F night thresholds), a local data point, a real technician tip, or a real field photo. Before writing, state in the run output what the information-gain element is.
- **First-hand expertise.** Use "our technicians," real job types, and real photos from `/images/photos/`, with clear evidence that a knowledgeable human is behind the content.
- **AEO block.** The first 40–60 words directly answer the target question, and the phone number appears near that answer.
- **GEO decision content** ("how to choose," "what to expect," "what affects cost"). Explain cost *factors* only. **Never quote prices, deals, or contract terms in blog copy** (Bucksworth rule; this overrides the article).
- **No fake freshness.** Only update `modified` when real new information is added.
- Keep the URL count lean and never publish a near-duplicate. The anti-cannibalization gate in STRATEGY.md §3 stays mandatory.

## Off-site authority (Viktor)
- Show up when someone asks ChatGPT/Perplexity to "compare the best pest control in {city}". Track this in `seo-data/ai-visibility.json`.
- Get recent, detailed reviews that name the service and the city.
- Keep NAP consistent everywhere (Whitespark citations).

## Legal layer
Terms, Privacy Policy, and an **Accessibility Statement** must reflect what the site actually does today. Any AI chat or booking feature needs disclosure and guardrails. Monitoring is ongoing, not a one-time fix.

## Phased plan
1. Diagnose honestly (audit).
2. Fix the foundation (speed/CWV, lean URLs, WCAG 2.2 AA).
3. Build compounding content (AEO + GEO + first-hand).
4. Build off-site authority (listings, reviews, entity).
5. Update the legal layer.
6. Maintain and compound (the web shifts roughly quarterly).

## Bucksworth audit against this checklist (Viktor, 2026-09-30)
| Item | Result |
|---|---|
| Homepage mobile Lighthouse (DataForSEO, lab) | Perf 84, A11y 96, Best-practices 100, SEO 100. LCP 1.9s ✓, CLS 0 ✓, **TBT 570ms ✗, TTI 7.2s ✗** (too much JS). **Color-contrast failures ✗** |
| Crawl/index health (GSC URL Inspection, 60 random blog + 20 other URLs) | 58/60 blog indexed, 1 noindex, 1 crawled-not-indexed. Money pages indexed. **No crawl-budget crisis** ✓ |
| AI crawlers in robots.txt | GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended allowed ✓. **`Disallow: /_next/` blocks the JS/CSS Google needs to render pages ✗** |
| Headings | One H1 on homepage ✓ |
| Contact | /contact → /request-service is a real form with labels (9 labels) ✓. No mailto on money pages ✓ |
| Schema | City pages: LocalBusiness, PestControlService, Service, FAQPage, BreadcrumbList, Review ✓. **No Speakable anywhere ✗** |
| llms.txt | Exists ✓. Now leads with pest/termite + weed and says 35 cities ✓ (live check 2026-10-02). Google says llms.txt is not needed for AI features; keep it accurate, don't invest more in it |
| Accessibility Statement | **/accessibility → 404 ✗** |
| Privacy / Terms | Live (200) ✓. Content review still needed |
