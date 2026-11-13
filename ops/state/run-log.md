# Run log — Bucksworth Digital OS

One line per agent action: `YYYY-MM-DD HH:MM | agent | task | what changed | commit SHA | live proof`.

2026-10-07 | setup | — | Digital OS architecture created (ops/, .claude/agents/, page-identity skill) | — | —

## 2026-11-07 daily run (Claude)
- Landed Phoenix white-ants post on main (cherry-pick of 0e7c683 from side branch); added second image (tech-residential-service.jpg), corrected first image alt. Fix-list item closed.
- Lawn-aeration photo item stays open: no turf/lawn-treatment photo exists in /images/photos (asset gap, needs Jordan/Viktor to supply).
- site-tasks.md: every item is [x] except B1 (blocked on Jordan's guarantee terms text). Nothing to do.
- Blog: NO post today. Queue gate: #1 termites (owned by "Don't Let Termites Win" cluster + Phoenix termite posts, same SERP), #2 ants (near-variant of 2023 /blog/how-to-get-rid-of-ants), #3/#6 rodents (owned), #8 owned by bermuda seeding post, #11/#13 owned by city weed-and-feed / lawn-care pages, #10 overseeding Mesa (30 AZ vol) uncertain overlap with Phoenix bermuda-seeding post, skipped. Queue needs a refresh with fresh, un-owned keywords.

## 2026-11-11 daily run (Claude)
- Fix-list: Avondale termite post: second image added (tech-residential-service.jpg, accurate alt, 1600x900), first alt corrected; live DataForSEO SERP confirms distinct intent vs the Goodyear termite guide (national how-to vs local-provider results, zero URL overlap). Lawn-aeration photo item stays open (asset gap).
- Board T001 + T002 (page identity P0): sitemap lastmod and city/hub schema dateModified now come from src/lib/content-dates.ts (real content-change dates); build time no longer used. Static pages without a verified date carry no lastmod.
- Board T009: menu/card/form label "Gravel & Rock Yard Weed Control" (menuLabel); sub-page title, H1, URL unchanged. T008 verified already fixed in aafd013.
- Blog: crabgrass vs bermuda grass (Maricopa, bermuda-grass-control), queue #9, AZ vol 40. Ranks 3-8 failed the gate (see publish-log).
- Connectors: DataForSEO ok (3 live SERPs), GBP ok (Phoenix reviews read). Slack read ok.

## 2026-11-12 daily run (Claude)
- Fix-list: crabgrass-vs-Bermuda (Maricopa) corrected per Viktor QA: pull test = one clue (crabgrass roots at nodes, UC IPM), removal step + gravel FAQ fixed, Casa Grande (Pinal) vs Sahuarita (Pima), "weed control" removed from both photo alts. Lawn-aeration photo item still ASSET GAP.
- Board T010 done: homepage linked 35 cities with a trailing slash (308 each) and 17 other links through 1-2 redirect hops; all now point at the final URL.
- Board T003 (P0) progress: 45 one-hop 301s for the still-404 known_broken_2026_10_07 URLs (pest URLs -> matching Phoenix sub-service, typo blog slugs -> real post, /newhome,/homenew,/title -> /). Every target verified 200 before commit.
- site-qa (ran today, Playwright): 7 FAIL service-truth. Fixed: nearest-cities anchor label "gravel and rock yard weed control", weed vertical description (no "lawn care services"), Fountain Hills rock-yard blog title/excerpt/alt/body ("Rock Yard Weed Control", slug + date unchanged, no GSC impressions). Left on purpose: services.ts sub-service name "Gravel & Rock Yard Maintenance" (page title/H1 identity, menuLabel already shows Weed Control since T009).
- Blog: water bugs vs cockroaches (Gilbert, roach-elimination), AZ 260, from question-keywords.json because blog-queue ranks 1-12 are published/owned.
- Connectors: DataForSEO ok (1 live SERP), GBP ok (Phoenix reviews: 2,026, 4.9, newest 11-11, replied), Slack ok.

## 2026-11-13 daily run (Claude)
- Fix-list P0: bug-infestation redirect loop fixed. The case-only rule in next.config.mjs matched its own lowercase destination (Next matches sources case-insensitively); moved to an exact-case match in src/middleware.ts (EXACT_CASE_REDIRECTS) and taught url-guard.mjs to read it. Root alias + 5 other aliases now reach the article.
- Fix-list: Fountain Hills rock-yard post now promises weed treatment only (no cleanup/rock redistribution/top-offs), HOA fine figures removed, pricing/HVAC/plumbing/same-day bullets removed. Lawn-aeration photo item still ASSET GAP.
- Board T011 (footer sitemap service links -> /phoenix-az/{service}), T012 (8 homepage links through redirects, incl. roach + rock-yard anchors that opened the wrong page), T013 (6 weed hub meta descriptions: "yard maintenance" -> "weed control").
- site-qa (Playwright, live): 1 FAIL (services.ts name, left on purpose - page-identity), 45 WARN before fixes.
- Blog: "Is Weed Killer Safe for Pets?" (Queen Creek, post-emergent-weed-treatment), AZ 720, from question-keywords.json (queue exhausted).
