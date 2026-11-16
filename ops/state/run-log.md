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
- Commit 5ec1aac on main. GBP ok (Phoenix: 2,026 reviews, 4.9, newest 11-11, replied). DataForSEO ok (1 live SERP). Slack read ok.

## 2026-11-14 daily run (Claude)
- Fix-list: Queen Creek pet-safety post corrected per Viktor QA (no comparative vet-visit/incidence claims, label-specific re-entry + NPIC link, alts describe visible setting only). Lawn-aeration photo item still ASSET GAP.
- Board T003 (P0) progress: 308 one-hop 301s for wp-legacy-urls.json URLs still 404 live (317 re-checked; 15 already 200; 9 left with no equivalent page). Trailing-slash WP URLs still take Next's 308 slash-strip first.
- Board T015: 29 exact /residential/* rules (AC/heating/weed WP pages no longer fall into the pest-hub catch-all); 5 exact-rule chains collapsed (chain count 0).
- Board T014: 3,456 links in 1,443 blog bodies pointed at redirect sources; rewritten to the final URL (482 targets verified 200/0 hops first; href-only diff).
- site-qa (Playwright, live, 30 pages): 1 FAIL (services.ts name, left on purpose - page-identity), 36 WARN (16 internal-link, fixed by T014; 20 body-copy mowing/landscape advice).
- Blog: "DIY Weed Killer Recipes" (Apache Junction, post-emergent-weed-treatment), AZ 320, from question-keywords.json; live SERP = recipe/how-to blogs + extension + AIO.
- Commit 7ace6b2 on main. DataForSEO ok (1 live SERP). Slack read ok.

## 2026-11-15 daily run (Claude)
- Fix-list: AJ DIY weed-killer post corrected per Viktor QA (acetic acid = non-translocating contact; salt separated as soil-mobile, reaches root zones; foxtail barley "perennial or annual"). Lawn-aeration photo item still ASSET GAP.
- Service truth (law #2): weed-hub template "Bermuda Grass Lawn Decline" solution claimed core aeration, dethatching and evaluating mowing on every city weed hub; now lists only sold treatments (fertilization, Bermuda-safe weed control, overseeding). Summer guide mowing-height line removed.
- Board T005 progress (DataForSEO LLM mentions: Google AI 45 source citations, ChatGPT 5 retrievals / 0 citations), T006 done (draft; azmomsquad.com hijacked by a gambling site), T007 done (url-guard workflow installed, 6ab0add).
- site-qa (Playwright, live, 30 pages + CTAs): 0 live findings; static 1 FAIL (services.ts name, left on purpose - page-identity), 20 WARN body copy (homeowner-advice mowing wording).
- Blog: "Does Borax and Sugar Kill Ants?" (San Tan Valley, ant-control), AZ 110, question-keywords.json; live SERP = recipe/how-to + Reddit + AIO.
- Commits 1efed20 + 6ab0add on main. GBP ok (Tucson: 398 reviews, 4.9, newest 11-14, replied). DataForSEO ok (1 SERP + 3 LLM-mention calls). Slack read ok.

## 2026-11-16 daily run (Claude)
- Fix-list: url-guard workflow pipefail (shell: bash + set -o pipefail, tested locally) and weed-fabric installation promise removed from every city weed hub + Green Valley override. Both in bbb82e3. Phoenix aeration photo still ASSET GAP.
- site-tasks.md: only B1 open (blocked on Jordan's guarantee terms). Board T003: live re-check of 389 legacy/known-broken URLs; 2 Casa Grande pest WP URLs 301'd; 9 intentional 404s and 2-hop slash chains documented.
- Blog: "What Do Cockroaches Look Like? A Chandler Homeowner's Guide to Identifying Arizona Roaches" (roach-elimination, AZ 170, question-keywords.json; live SERP = identification guides + AIO + images + PAA).
- Connectors: DataForSEO ok (1 SERP). Slack read ok. GBP/Ads/GA4/Meta not tested this run.
