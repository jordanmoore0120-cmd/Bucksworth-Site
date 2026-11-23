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

## 2026-11-17 daily run (Claude)
- Fix-list: no new items. Phoenix aeration photo still ASSET GAP.
- site-tasks.md 18-20 (797292c): Mesa/Florence/Maricopa pest hub meta descriptions (generic template -> city-specific; Florence pos 9.2 on 168K imp with 6 clicks is the CTR target), Florence + Maricopa answer-first openers, Green Valley weed hub service truth (rest of the snowbird "maintain yard / photo updates" promise removed in the follow-up commit, plans paragraph + FAQ). Board T016.
- site-qa (Playwright, live, 30 pages + CTAs): 0 live findings; static 1 FAIL (services.ts name, left on purpose - page-identity), 18 WARN body copy.
- Blog: "Do Termites Fly? What Apache Junction Homeowners Should Know About Termite Swarmers" (termite-treatment, AZ 320, question-keywords.json; live SERP = AIO + PAA + pest-company swarmer explainers + Reddit).
- Connectors: DataForSEO ok (1 SERP), GBP ok (Phoenix: 2,026 reviews, 4.9, newest 11-16, replied). Slack read ok.

## 2026-11-18 daily run (Claude)
- Fix-list (43a64e7): AJ do-termites-fly opener now separates worker feeding from soldier defense; Green Valley weed hub pet re-entry advice now follows the product label and the technician's instructions (min. until dry, longer per label, some granular 24h+). The same blanket "30-60 minutes" rule was fixed on the Peoria, Gilbert and Sahuarita hubs and the shared weed FAQ. Phoenix aeration photo still ASSET GAP.
- site-tasks 21-23 (43a64e7): "save 20-30%" deal claims removed from 9 weed hubs + 6 FAQs; HVAC/plumbing promotion removed from 4 weed-hub pest FAQs; unsourced HOA fine figures removed (Surprise, Scottsdale). Titles/H1s/URLs unchanged. All verified live.
- Blog: "How to Get Rid of Crickets: What Florence Homeowners Should Know Before They Draw In Scorpions". The topic came from a live DataForSEO search-volume pull because the queue and question-keywords are exhausted (AZ 880/mo, $0.09 for 50 keywords). Live SERP = AIO + video + PAA + pest-company how-tos. Links to the Florence pest hub (pos 9.2, 168K imp).
- Gate rejections today: bed-bug check (Mesa inspection guide), do scorpions hibernate (legacy winter-nights post answers it; improve that URL), what eats scorpions (Mesa diet post), sting first aid, exterminate cockroaches, black widow deadly.
- Static site-qa: 1 FAIL (services.ts name, left on purpose - page-identity); no new findings. Build + url-guard prepush PASS.
- Connectors: DataForSEO ok (1 volume + 1 SERP), GBP ok (Tucson 398 reviews, 4.9, newest 11-14, replied), Slack read ok. Ads/GA4/Meta not tested.

## 2026-11-19 daily run (Claude)
- Fix-list (0bfff99): weed hubs no longer promise root-barrier installation (Chandler, Gilbert, Mesa, Marana + shared bermuda text) or scalping/topdressing (shared overseeding FAQ + sub-service). Phoenix aeration photo still ASSET GAP.
- site-tasks 24-26 (0bfff99): "NaN-person community" fixed on every city x service hub; pet re-entry now label-governed on the shared pest FAQ + Goodyear/Surprise/Tucson weed hubs; "2,000 families" and $15K/$20K landscape/"costs more" figures removed.
- Blog: "What Are Harvester Ants? What Queen Creek Homeowners Should Know About Bare Dirt Circles and Painful Stings" (ant-control; AZ 880/mo live DataForSEO, Apr peak 1,600). SERP = AIO + KG + PAA + videos + forums. Cites UA Cooperative Extension BYG #16. Rejected: brown recluse arizona (AZ 1,600; ~20 templated spider posts already carry a city-swapped 'brown recluse in my <city> home' H3 - consolidation candidate), termite mud tubes (signs-of-termites series).
- Build + url-guard prepush PASS. Static site-qa: WARN-only body copy.

## 2026-11-20 daily run (Claude)
- Fix-list (db6aaf3): undefined Schema.org types PestControlService/LandscapingBusiness replaced with HomeAndConstructionBusiness in all 5 templates (HVACBusiness/Plumber kept). Phoenix aeration photo still ASSET GAP.
- site-tasks 27-29 (db6aaf3): city-specific meta on 5 striking-distance pest hubs (Phoenix 804K imp), answer-first openers on 5 hubs still on the generic fallback, weed meta service-truth wording (Oro Valley, Peoria, Sahuarita, Green Valley).
- Blog: "What Are Kissing Bugs? What Gold Canyon Homeowners Should Know About Conenose Bugs, Bites and Pack Rat Nests" (rodent-exclusion; 'kissing bug' AZ 4,400/mo live DataForSEO, May peak 8,100). SERP = AIO + PAA + news + forums. Cites UA Extension AZ1992. Money page /gold-canyon-az/pest-and-termite.
- site-qa live crawl: 43 FAIL were all Vercel 403 rate-limits (curl 200). Static: 1 FAIL (services.ts name, left on purpose - page-identity). Build + tsc + url-guard prepush PASS.
- Connectors: DataForSEO ok (1 volume pull, 1 SERP), Slack read ok.

## 2026-11-21 daily run (Claude)
- Fix-list (94154f6): kissing-bug species label corrected (western bloodsucking kissing bug = T. protracta; rubida bullet + FAQ no longer carry that name). Phoenix aeration photo still ASSET GAP.
- site-tasks 30-32 (94154f6): city-specific meta + answer-first openers on Goodyear, Gold Canyon, Sahuarita and Catalina Foothills pest hubs; city-specific meta on 4 near-page-1 sub-service pages with 0 clicks (Tempe + AJ bed bugs, Green Valley rodents, Tucson spiders).
- Blog: "What Are Earwigs? What Mesa Homeowners Should Know About Pincher Bugs in Bathrooms, Patios and Planters" ('earwigs' AZ 4,400/mo live DataForSEO, Jun peak 8,100). SERP = AIO + KG + PAA + extension explainers. Cites UC IPM Pest Note 74102. Money page /mesa-az/pest-and-termite; links Phoenix hub (owns 11 commercial earwig queries, different intent). Rejected: silverfish (AZ 8,100, legacy /silverfish-pest-control owns it - improve that URL), tumbleweeds, wolf spider arizona (topic-check exit 1).
- Build + tsc + url-guard prepush PASS. Local next start: new meta/openers render, post 200 with Article + FAQPage + Breadcrumb, self-canonical, no priceRange.
- Connectors: DataForSEO ok (1 volume pull, 1 SERP), Slack read ok.

## 2026-11-22 daily run (Claude)
- Fix-list: Phoenix aeration photo still ASSET GAP (no turf photos). Nothing else open.
- site-tasks 33-35 (9471ac1): city-specific meta on 6 East Valley/Pinal pest hubs (Gilbert, Queen Creek, San Tan Valley, Casa Grande, Tempe, Scottsdale), 8 weed hubs (new WEED_HUB_META: AJ, QC, STV, Coolidge, Florence, Maricopa, Gold Canyon, Tempe) and 6 near-page-1 sub-service pages (Vail termite, Anthem scorpion, Gilbert mosquito, Coolidge bed bug, QC weed & feed, Marana pre-emergent).
- Blog: "What Are Goatheads? What San Tan Valley Homeowners Should Know About Puncture Vine Burrs in Gravel Yards" ('goatheads' AZ 720/mo, 'goat heads' 1,000, Mar peak 1,300; live DataForSEO). SERP = mixed (images, AIO, PAA, products, video); weed meaning informational. Cites UC IPM Pest Notes 74128. Money page /san-tan-valley-az/weed-and-lawn-care.
- Build + tsc + url-guard prepush PASS. Static site-qa: 1 FAIL (services.ts name, kept on purpose - page-identity).
- Connectors: DataForSEO ok (1 volume pull, 1 SERP), Slack read ok.

## 2026-11-23 daily run (Claude)
- Fix-list (2de983b): goathead guide alt text no longer claims "weed control technician" (photos show general residential treatment). Phoenix aeration photo still ASSET GAP.
- site-tasks 36-38 (2de983b): city-specific meta on 6 pest hubs (Ahwatukee, Fountain Hills, Vail, Laveen, Buckeye, Oro Valley) + answer-first openers on the same 6; city-specific meta on 7 weed hubs (Phoenix, Buckeye pos 11.6, Casa Grande, Ahwatukee, Fountain Hills, Paradise Valley, Catalina Foothills).
- Blog: "What Is a Camel Spider? What Casa Grande Homeowners Should Know About Sun Spiders" ('camel spider' AZ 9,900/mo live DataForSEO, Apr/Sep peak 14,800; 'sun spider' 2,900). SERP = KG + AIO + PAA + videos, no service pages. Cites UA Cooperative Extension Backyard Gardener #8. Money page /casa-grande-az/pest-and-termite. Rejected by topic-check: pack rats (Tucson roof/pack rat post owns it), roof rats, carpenter ants, subterranean termites, centipede arizona (legacy /centipede-pest-control - improve that URL).
- Build + tsc + url-guard prepush PASS. Static site-qa: 1 FAIL (services.ts name, kept on purpose - page-identity), 18 WARN body copy.
- Connectors: DataForSEO ok (1 volume pull, 1 SERP), Slack read ok. GBP/Ads/GA4/Meta not tested.
