# Performance Budget: Non-Negotiable (Jordan, 2026-09-30)

> "This is a plumbing leak in the technical foundation. Not a huge one, but with a small ad
> budget we can't leak. These are the things we can control and win on." (Jordan, CEO)

Speed is a foundation item, not a nice-to-have. Every page change, new page, and new
landing page is optimized against the rules below. Nothing ships that makes these
numbers worse.

## 1. Why it matters (sources)
- **Google (official):** Core Web Vitals are a page-experience ranking signal. They are measured on
  **real users (CrUX field data, 75th percentile, mobile)**, not the Lighthouse score. Pass all three:
  - **LCP ≤ 2.5s** (the hero/main image or H1 paints)
  - **INP ≤ 200ms** (taps respond)
  - **CLS ≤ 0.1** (nothing jumps)
- **Google Ads:** landing-page experience (speed, relevance, mobile usability) feeds
  **Quality Score**. A slow LP raises CPC and lowers impression share. /lp/* pages are noindex,
  but speed still costs us money there.
- **CI Web Group (Jennifer Bagley):** "fix the foundation first." Core Web Vitals is a
  tiebreaker, and pages over 3s lose traffic in the 2025–2026 core updates.
- **Whitespark (Darren Shaw):** fast page speed is on the technical checklist. It is not a
  top-25 map-pack factor on its own; it matters because a slow page loses the call.

## 2. The budget (mobile, Lighthouse simulated throttling, DataForSEO/PSI)
| Page type | Perf score | LCP | TBT | CLS |
|---|---|---|---|---|
| `/lp/*` Google Ads landing pages (incl. `-b`) | **≥ 90 (target 95+)**. HARD GATE: never goes live below 90 | ≤ 1.8s | ≤ 250ms | 0 |
| Home, city hubs, service hubs, subservice pages | **≥ 90** | ≤ 2.0s | ≤ 300ms | ≤ 0.05 |
| Blog posts | ≥ 90 | ≤ 2.5s | ≤ 300ms | ≤ 0.1 |

Measure the median of 3 runs. One lucky run doesn't count. Real-user CrUX data must pass
all three Core Web Vitals.

## 3. Hard constraint: tracking tags stay
GA4 `G-ZDL1V7HMVV`, Google Ads `AW-16665649274` and Meta Pixel `1745744873282534` stay
exactly as they are: same IDs and same load strategy (`afterInteractive` in `Analytics.tsx`,
inline in LP HTML). Do NOT defer, lazyOnload, interaction-gate, Partytown or remove them.
Jordan rejected that on 2026-09-30. Hit the budget by making everything else near-zero cost.
The tags cost ~250–370ms TBT, so first-party JS, CSS and images must add almost nothing on top.

## 4. How we hit the budget (rules for every page)
1. **LCP element:** preloaded, `fetchpriority="high"`, never lazy, served as AVIF/WebP sized
   to the viewport. Phones get a phone-sized crop. Hero images for phones stay ≤ 100KB.
2. **No render-blocking external CSS or fonts.** Self-host fonts (`next/font` or local woff2),
   `font-display: swap`, preload only the one or two weights used above the fold.
   Inline critical CSS for /lp/*.
3. **First-party JS near zero.** Prefer server components. Every `"use client"` component must
   justify itself. Lazy-load below-the-fold widgets (estimator, carousels, maps, review
   widgets) on visibility/interaction. No heavy libraries for small effects. Watch for
   one big shared chunk (e.g. `684-*.js`), and split or remove what's in it.
4. **Below the fold:** `loading="lazy" decoding="async"` on images. Width/height on every image
   (CLS 0).
5. **No layout shift:** reserve space for badges, banners, embeds and fonts.
6. **Third-party embeds** (maps, video, chat, review widgets) use a click-to-load facade.
   They never load on first paint.

## 5. Process gate (enforced)
- Every PR that touches pages, templates, components, CSS or `/lp/*` includes a Lighthouse
  mobile before/after table for the affected page types.
- The Lighthouse CI check on Vercel previews (`.github/workflows/lighthouse.yml`) must pass
  (the /lp/* score must be ≥ 90) before merge.
- Viktor re-measures live after deploy with DataForSEO Lighthouse and reports to Jordan. A
  regression below budget is treated as a bug and fixed first.
