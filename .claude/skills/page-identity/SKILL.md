---
name: page-identity
description: Rule #1 of the Bucksworth Digital OS. Never make an existing page look new to Google: keep URL, canonical, published date, topic and schema identity fixed, and improve in place. Read before ANY change to an existing page, the sitemap, schema, redirects, templates or routing.
---

# Page identity protection (Jordan 2026-10-07)

**Why:** In the May 2026 WordPress → Next.js migration, URLs, dates, templates and structure all changed
at once. Google treated the site as a brand-new business. Rankings, old backlinks and domain authority
went with it (history: `seo-data/migration-history.md`). An existing page carries its history
(age, links, rankings, AI citations) only while Google sees it as **the same page**. Anything that
makes an old page look new throws that history away.

## The rules (every agent, every change)

**URL**
1. Never change an existing URL: no new slug, case, trailing slash, host (www), or folder. No exceptions.
2. Never delete a page that has ever been indexed or linked. If it must go, 301 it in a single hop to the closest
   equivalent page (same service and city). Never send it to the homepage, never chain redirects, never remove a redirect.
3. Never publish a new URL for a topic an existing page already covers. Improve the existing page
   instead (`node scripts/topic-check.mjs`), so there is no cannibalization and no "new copy" of an old page.

**Dates and freshness signals**
4. `datePublished` (schema), blog `date` and visible publish dates never change on an existing page.
5. `dateModified`, blog `modified` and sitemap `<lastmod>` change **only** when the main content materially
   changed, and they are set to that real date. Never use build/deploy time, never bump them in bulk, never
   "refresh" dates to look fresh. Typo, style and template changes don't count as a modification.
6. Never re-date or republish old posts as new.

**Content and topic**
7. Keep each page's primary topic, H1 entity, title intent and the search intent it ranks for.
   Improve in place by adding sections, answers, proof, FAQs and fresh facts. Do not replace whole bodies.
8. For a page with clicks or impressions in the last 90 days (GSC), change at most about 30% of the body per session,
   then let it settle at least 14 days before the next major edit. Watch its GSC position after each change.
9. Keep internal links that point to existing pages, keep their anchor intent, and keep them in nav and sitemap.

**Indexing and identity**
10. Canonical always points to the page's own www URL. Never flip it, and never add noindex or a robots block to an indexed page.
11. Keep schema identity stable: the LocalBusiness/Organization `@id`, name, URL, phone, address and
    `foundingDate` stay the same on every page, every deploy. NAP must match both GBP listings exactly.
12. Keep indexed image URLs (image search and AI citations use them). Add new images; don't rename old ones.
13. Roll out site-wide template or layout changes gradually (one section or page type at a time, then
    verify), never as a redesign of every page in one deploy.
14. Never change the domain, the business name or the entity (Bucksworth Home Services, Phoenix · Bucksworth
    Services, Tucson).

## Enforcement
- `node scripts/url-guard.mjs prepush` runs before every push. FAIL = don't push. It checks removed
  slugs, routes and redirects without a 301, **changed blog `date` values**, and **build-time sitemap lastmod**.
- `node scripts/url-guard.mjs prod` checks every known URL on the live site after deploy.
- New URL or identity breaks go to the top of `ops/state/board.json` (owner `site-guardian`) and are fixed
  before any other work.

## Known identity leaks (fix these first, then log the fix in run-log)
- `src/app/sitemap.ts` sets `lastModified: now` (build time) for the homepage, static, city, service and
  sub-service pages. Every deploy tells Google that all of them changed. Fix: a real per-page
  last-content-change date (e.g. from git history of the page's content source), never `new Date()`.
- `src/app/[city]/page.tsx` and `src/app/[city]/[service]/page.tsx` hard-code
  `dateModified: "2026-06-28"` in schema. Tie it to the real content change date instead.
