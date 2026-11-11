# Fix list — Claude does these FIRST each session (Viktor QA adds items)

Mark an item done by changing `[ ]` to `[x]` and adding the commit SHA. Viktor re-checks live.

## Open

- [x] **DONE 2026-11-11 (cd47321: second image tech-residential-service.jpg added with accurate alt + 1600x900 dims, lazy; first alt corrected to the open-framed new-build description; live SERP pulled via DataForSEO: "how can you get rid of termites" = national how-to guides, "termite treatment goodyear az" = local provider results, zero URL overlap, intent distinct; logged in publish-log) · 2026-11-10 · Avondale getting-rid-of-termites post: add second image and correct first photo description** (commit 7756f9c)
  - Post: `/blog/how-can-you-get-rid-of-termites-what-avondale-homeowners-should-know-about-treating-subterranean-termites`
  - Source and live article contain only one image. Add a second relevant real Bucksworth termite/inspection photo with accurate alt text and image dimensions.
  - Visual QA: `tech-pest-control.jpg` shows a technician inside an open-framed new build, not the "home exterior during a termite and pest service visit in Avondale" claimed by its alt. Correct the alt to the visible setting without inventing a city or treatment event; the Phoenix white-ants post already uses an accurate description of this same asset.
  - Search-intent check remains unverified: publish-log says no live SERP was pulled. The older Goodyear termite guide (`/blog/the-goodyear-homeowners-guide-to-termite-treatment-advice-for-estrella-mountain-`) already covers treatment methods, DIY and prevention. Compare intent on the live SERP and document why this new question is distinct; do not treat topic-check's pass as proof of no overlap.
  - Keep URL, title and publication date unchanged. Other measured checks passed: 1,608 words, 10 H2s, 6 FAQ questions, 2 tables, 12 unique internal links all HTTP 200, money-page link, self-canonical, indexable, valid JSON-LD without prices, approved phone only.

- [x] **DONE 2026-11-07 (landed on main via cherry-pick of 0e7c683; second image tech-residential-service.jpg added; first alt corrected; SHA in git log) · 2026-11-06 · Phoenix white-ants post: publish to main + add second image** (commit 0e7c683, side branch `claude/fervent-faraday-zh4ejw` only)
  - Post: `/blog/signs-of-white-ants-in-a-phoenix-house-what-homeowners-should-know-about-termites-that-look-like-flying-ants` returns 404 live: the commit was pushed to the side branch, not `main`. Land it on `main` (keep URL, title and date) and confirm 200.
  - Only 1 image (bar is >=2). Add a second relevant real photo (termite or inspection work, e.g. a mud-tube/termite job photo) with alt text describing exactly what is visible.
  - Existing image `tech-pest-control.jpg` shows a technician standing in an open-framed new build (pre-construction setting), not an inspection at a finished home. Change its alt to match what is visible.
  - Suggested (not required): link the Mesa post `/blog/what-do-termites-look-like-a-mesa-homeowners-identification-guide` so the two termite-identification posts reinforce rather than compete; stay at 10-12 internal links.
  - Other measured checks passed: 1,664 words, 10 H2s, FAQ, 1 table, 11 internal links all 200, money page linked, phone (480) 422-8388 only, no prices/contract wording, no price fields in schema.

- [ ] **PARTIAL 2026-11-05 (58e04d7 fixed misleading alt text; lawn-treatment photo relevance remains open) · 2026-11-04 · Phoenix lawn-aeration post: replace misleading photos and alt text** (commit 1d5eac1)
  - Post: `/blog/when-to-aerate-a-lawn-what-phoenix-homeowners-should-know-about-aerating-bermuda-grass-in-the-desert`
  - Visual QA of the live images: `tech-pretreat-framing.jpg` shows a technician spraying exposed construction framing, not the lawn weed barrier described in its alt text. `tech-backyard-service.jpg` shows a technician on a paved patio with no visible lawn, despite alt text claiming work on a lawn.
  - Replace with two relevant real Bucksworth lawn-treatment photos and alt text that accurately describes what is visible. Do not invent a Phoenix location or a treatment type from a generic image.
  - Live visual re-check 2026-11-05: new `tech-treating-home.jpg` shows treatment beside a shrub/gravel bed; `tech-service-action.jpg` shows a backpack sprayer beside the home on gravel. The new alt text is accurate, but neither photo shows lawn treatment or turf. The original request for relevant lawn-treatment photos is not yet complete. Keep the accurate wording; replace with verified lawn-treatment photos when available, or report the asset gap rather than mark the whole item done.
  - 2026-11-11 Claude: still ASSET GAP (26 photos, none show turf). Item stays open.
  - 2026-11-06 Claude: ASSET GAP. `public/images/photos/` has no lawn/turf treatment photo (26 files, all pest/HVAC/plumbing/truck). Needs Jordan/Viktor to upload a real lawn-treatment photo; item stays open.
  - Keep URL, title and publication date unchanged. Other measured checks passed: 1,655 words, 10 H2s, 6 FAQ questions, 2 tables, 12 internal links all HTTP 200, money-page link present, self-canonical, indexable, valid JSON-LD without price fields. No aeration target/title overlap found in publish-log, index or GSC ranking map.

- [x] **DONE 2026-11-03 (added second image tech-detail-work.jpg with Tempe alt, 1600x900, lazy-loaded; SHA in git log) · 2026-11-02 · Tempe wood-boring-bee post: add the missing second image** (commit e449eb8)
  - Post: `/blog/how-to-get-rid-of-wood-boring-bees-what-tempe-homeowners-should-know-about-carpenter-bees-in-eaves-and-patio-covers`
  - Source content and live `<article>` both contain only one image. Minimum is two.
  - Add a second relevant real Bucksworth image from `/images/photos/` with accurate Tempe/service alt text. Keep the first image after the opening paragraph; provide dimensions and lazy-load the second.
  - Keep URL, title and publication date unchanged. Other measured checks passed: 1,602 words, 10 H2s, 6 FAQ questions, 1 table, 12 internal links all HTTP 200, self-canonical, indexable, money-page link present.

- [x] **DONE 2026-11-03 (removed priceRange from layout.tsx, city, service and sub-service page schema; SHA in git log) · 2026-11-02 · Shared LocalBusiness schema: remove prohibited priceRange**
  - Live Tempe wood-boring-bee page includes `"priceRange":"$$"` in the shared LocalBusiness JSON-LD, despite the no-price-schema rule in `seo-data/reference/ai-search-guidelines.md` and `.claude/skills/bucksworth-rules`.
  - This is inherited shared markup, not introduced by e449eb8. Remove only the prohibited priceRange field at its source and verify it is absent from live JSON-LD. Preserve tracking, URLs and schema identity.

- [x] **DONE 2026-10-27 (dropped off-city Chandler scorpion-control link, plain-text Chandler kept; 12 unique links; SHA in git log) · 2026-10-26 · Queen Creek are-scorpions-arachnids post: trim internal links 13 -> 12** (commit a74bce4)
  - Post: `/blog/are-scorpions-arachnids-what-queen-creek-homeowners-should-know-about-bark-scorpions-and-their-eight-legs`
  - Problem: 13 unique internal links (rule is 10-12). Everything else passed QA.
  - Fix: drop one weak off-city link (e.g. `/chandler-az/pest-and-termite/scorpion-control`). Keep `/queen-creek-az/pest-and-termite/scorpion-control` (money page).
  - Keep URL/slug, title, date unchanged.

- [x] **DONE 2026-10-24 (dropped off-city Phoenix scorpion-control link; 12 unique links remain; Mesa link kept as the striking-distance page; SHA in git log) · 2026-10-23 · Avondale scorpion-sting post: trim internal links 13 -> 12** (commit ae55ec0)
  - Post: `/blog/what-does-a-scorpion-sting-look-like-what-avondale-homeowners-should-know-about-bark-scorpion-stings`
  - Problem: 13 unique internal links (rule is 10-12). Everything else passed QA.
  - Fix: drop one weak link (e.g. `/mesa-az/pest-and-termite`, off-city for an Avondale post). Keep `/avondale-az/pest-and-termite/scorpion-control`.
  - Keep URL/slug, title, date unchanged.

- [x] **DONE 2026-10-19 (301 to /marana-az/pest-and-termite/scorpion-control in next.config.mjs; SHA in git log)** URL GUARD 2026-10-19: /blog/marana-scarana-navigating-scorpion-season-in-our-desert-oasis -> 404 (fix: 301 to closest live page or restore)

- [x] **DONE 2026-10-13 (301 added in next.config.mjs; SHA below)** URL GUARD 2026-10-13: /blog/why-scottsdale-mosquito-problems-are-why-scottsdale-mosquito-problems-are-worse-than-you-think-tips-for-troon-north-r -> 404 (fix: 301 to closest live page or restore)

- [x] **DONE 2026-10-12 (commit 1f91c68; 12 unique links, 10 H2s) · 2026-10-11 · Mesa weed-killer post: trim internal links + H2s** (commit 53edac3)
  - Post: `/blog/best-weed-killer-for-mesa-yards-what-herbicide-works-on-desert-weeds-lawns-and-rock-beds`
  - Internal links: 16 unique — cut to 10–12. Keep `/mesa-az/weed-and-lawn-care/post-emergent-weed-treatment` (money page), `/mesa-az/weed-and-lawn-care`, overseeding (striking distance). Drop the weakest other-city hubs (Apache Junction/Chandler/Gilbert/Tempe weed hubs) first.
  - H2s: 11 incl. FAQ — merge two (e.g. "Should You Spray It Yourself or Hire Someone" + "What Weed Control Do We Offer Near Mesa") to land at 10.
  - Keep URL, title, date unchanged (page-identity). Everything else passed QA.

- [x] **DONE 2026-10-06 (commit 2b0b6b8; live check below) · 2026-10-02 · Cannibalization: Tucson fruit-fly post duplicates the Mesa one** (commit f32dc17)
  - Post: `/blog/how-to-get-rid-of-fruit-mosquitoes-a-tucson-homeowners-guide-to-fruit-flies-and-drain-flies`
  - Problem: same target question ("how to get rid of fruit mosquitoes") and nearly the same H2 outline as the Mesa post
    `/blog/how-to-get-rid-of-fruit-mosquitoes-a-mesa-homeowners-guide-to-fruit-flies-and-gnats` (published 2026-09-30). Mesa keeps fruit flies/gnats.
  - Fix: re-angle the Tucson post to **drain flies** (DataForSEO AZ: "drain flies" 1,600/mo, "how to get rid of drain flies" 390/mo).
    New title e.g. "Drain Flies in Tucson Homes: How to Get Rid of Them for Good". Rewrite the H2s and body around drain flies
    (what they are, breeding in drains/sewer lines, monsoon/humidity, how to confirm with a tape test, cleaning the drain film,
    and when to call us for a pest inspection). No plumbing/HVAC topics or offers. Do not reuse the Mesa outline.
  - **Keep the URL/slug unchanged** (no redirects, no new post). Update title + excerpt in `content/blog/index.json` and the data file.
  - Update its `seo-data/publish-log.json` entry: `target_question` → "how to get rid of drain flies".
  - Internal links: currently 14 — cut to 10–12 (drop the weakest other-city blog links). Keep the Tucson mosquito control money page link.
  - Still 1,500+ words, 6–10 H2, FAQ, 2+ images, 1+ table, only (520) 284-9930.

## Done
