---
name: local-seo
description: Bucksworth local SEO — map-pack and organic ranking principles (Darren Shaw / Whitespark, Sterling Sky), site architecture, home-city priority, citations, reviews-on-site, and technical traps found in past audits. Use for any ranking, map-pack, citation or site-structure decision.
---

# Local SEO (Bucksworth)

Read `bucksworth-rules` first. Deep sources are already in the repo:
`seo-data/reference/darren_shaw_knowledge_base.md`, `darren_shaw_insights.md`,
`local_seo_rules.md`, `technical_seo.md`, `eeat_checklist.md`. Official guidelines win
over blog advice (see `aeo-geo`).

## Jordan's goals
- Map pack top 3 and page 1 organic on PROFITABLE pages (pest, termite, scorpion, weed),
  East Valley + Pinal first (Apache Junction, Gold Canyon, Queen Creek, San Tan Valley,
  Mesa, Gilbert, Chandler, Florence), then the rest of the 35 cities, then Tucson.
- "Make the phone ring." Rankings only matter if they bring calls.

## Core principles (Darren Shaw / Whitespark)
1. The GBP primary category is the strongest local ranking factor.
2. Review recency and steady flow beat raw volume.
3. Proximity limits the map pack. We rank top 3 near Apache Junction (the Phoenix
   branch address) and fade 5–6 miles out. Content can't beat proximity. More real
   locations, prominence and reviews can.
4. AI search rewards complete, structured, answer-first local content and unstructured
   mentions (news, Reddit, local sites), not just citations.
5. Surrounding-area relevance needs real localized content: nearby cities, ZIPs and
   neighborhoods. Never city-swapped templates (scaled-content risk).
6. Citations: Bucksworth uses **Whitespark Listing Management**. Don't recommend Yext
   or another distributor.
7. Home city first: Apache Junction pages must be the strongest before expansion.

## Site architecture (from the 2026-08-03 full crawl)
- `/{city}-az` → `/{city}-az/{vertical}` → `/{city}-az/{vertical}/{sub}` plus
  `/blog/{slug}`. About 2,169 sitemap URLs and 335 live legacy redirects. Schema +
  FAQPage on most pages, llms.txt live, AI crawlers allowed in robots.txt.
- Blog posts are self-canonical. At most ONE indexable blog per money page (the
  highest-impression one), and it links up to the money page.

## Technical traps found before (check these first)
- Links rendered only when a card is open (`{isOpen && ...}`) disappear for Google.
- Next.js redirects run before routing. A redirect can swallow a real sitemap URL.
  After adding routes, grep `next.config.mjs` for the slug.
- Check phone numbers digit by digit in `tel:` links, not just the visible text.
- Google has no per-review URL. Link to the location's review list instead.
- Reviews on the site come from `content/reviews.json` (synced daily). Use the totals
  from data, never hard-coded counts. Publish everything except 1-star reviews.
  Google reviews carry no city, so attribute them by branch only.

## Known competitive model
ABC Home & Commercial (Austin) runs one GBP per department with ONE primary category
each. That gets them #1 at their office for every service but nothing 5–6 miles away.
Lesson: proximity + a focused category + reviews win, and one multi-service listing
doesn't win citywide. Jordan's phase 2 idea is a real staffed East Valley office GBP,
scouted with map-pack grid data first. That's his decision.
