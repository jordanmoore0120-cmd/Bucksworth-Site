# Fix list — Claude does these FIRST each session (Viktor QA adds items)

Mark an item done by changing `[ ]` to `[x]` and adding the commit SHA. Viktor re-checks live.

## Open

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
