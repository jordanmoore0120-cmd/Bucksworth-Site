# Fix list — Claude does these FIRST each session (Viktor QA adds items)

Mark an item done by changing `[ ]` to `[x]` and adding the commit SHA. Viktor re-checks live.

## Open

- [ ] **2026-10-11 · Mesa weed-killer post: trim internal links + H2s** (commit 53edac3)
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
