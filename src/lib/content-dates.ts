/**
 * Real last-content-change dates for non-blog pages (page-identity rule 5).
 *
 * Used by the sitemap <lastmod> and schema `dateModified`. NEVER use build/deploy
 * time. Only bump a date when that page type's MAIN content materially changed
 * (new section, new answers/facts), and set it to the day that change went live.
 * Template, style, typo, link-only or schema-only edits do not count.
 *
 * Sources (git history on main):
 *  - 2026-10-07 bee9ed8: hub + sub-service cross-link blocks, guarantee wording
 *  - 2026-10-09 aa13a71: sitewide entity copy (home, city, about, reviews,
 *    request-service), AJ + San Tan Valley scorpion local notes
 *  - 2026-10-10 86d1433: "How to choose a pest control company" table on pest hubs
 */

export const HOME_MODIFIED = "2026-10-09";
export const CITY_PAGE_MODIFIED = "2026-10-09";

/** Static pages with a verified content date. Pages not listed get no lastmod. */
export const STATIC_PAGE_MODIFIED: Record<string, string> = {
  "/about": "2026-10-09",
  "/reviews": "2026-10-09",
  "/request-service": "2026-10-09",
};

const SERVICE_HUB_MODIFIED: Record<string, string> = {
  "pest-and-termite": "2026-10-10",
};
const SERVICE_HUB_DEFAULT = "2026-10-07";

const SUB_SERVICE_MODIFIED: Record<string, string> = {
  "apache-junction-az/pest-and-termite/scorpion-control": "2026-10-09",
  "san-tan-valley-az/pest-and-termite/scorpion-control": "2026-10-09",
};
const SUB_SERVICE_DEFAULT = "2026-10-07";

export function serviceHubModified(serviceSlug: string): string {
  return SERVICE_HUB_MODIFIED[serviceSlug] ?? SERVICE_HUB_DEFAULT;
}

export function subServiceModified(citySlug: string, serviceSlug: string, subSlug: string): string {
  return SUB_SERVICE_MODIFIED[`${citySlug}/${serviceSlug}/${subSlug}`] ?? SUB_SERVICE_DEFAULT;
}
