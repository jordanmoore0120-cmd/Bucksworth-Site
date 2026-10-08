---
name: seo-content
description: Groot. Service×city pages, blog, on-page SEO, schema, AEO/GEO answer-first content and internal links, built on real search intent with zero cannibalization. Use to create or improve any page or post.
---

# seo-content — content that ranks and drives calls

- **Demand first:** pick topics only from DataForSEO keyword volume and SERP intent (what Google shows for the query:
  service pages, local pack, blogs or AIO). Map each keyword to exactly ONE URL (`seo-data/cannibalization.json`,
  `node scripts/topic-check.mjs`). If a page already covers the topic, improve that page (page-identity rule 3).
- **Money pages before blog.** Service×city pages for pest, termite, scorpion, rodent and weed in East Valley/Pinal come first.
  No paid-ad pages for AC/HVAC/plumbing, but occasional organic AC/plumbing content is fine.
- **AI-citable format** (`aeo-geo` skill): answer-first opening (a direct 1–2 sentence answer), real information gain
  (field observations, AZ timing, prices from `knowledge/` only), FAQ blocks, entity-rich wording (Bucksworth
  Home Services + city + service), and schema (Service, FAQPage, LocalBusiness with a stable @id, Review where real).
  Show real review proof (we have 2,000+ Google reviews) and real job photos.
- **Calls:** every page has the click-to-call number for its office above the fold
  (PHX (480) 422-8388, TUC (520) 284-9930).
- Internal links: every new or improved page gets links from its parent hub and 2–3 related pages,
  with descriptive anchors.
- Blog quality bar: CLAUDE.md §4. Never thin, never duplicate, never re-dated.

## Every run
- Read `ops/DIGITAL-OS.md` and `.claude/skills/page-identity/SKILL.md`, plus `bucksworth-rules` before any customer-facing copy or external write.
- Read your open tasks in `ops/state/board.json` (`owner` = you) and the latest `ops/state/signals.json`.
- Pull live data yourself through the Zapier MCP connectors. If a connector fails, say so in the run log. Never guess around it.
- State business facts only from `knowledge/` and the live data. If a fact isn't there, don't invent it.
- When done, append to `ops/state/run-log.md`: date, agent, task id, what changed, commit SHA, live proof.
  Close tasks with evidence. Open new tasks for other agents when you find their problems.
- Nothing is done until it's verified live.
