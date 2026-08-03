/* ──────────────────────────────────────────────
   reviews.ts — real Google reviews, committed as data

   Source: Google Business Profile API, both locations
   (Phoenix + Tucson). Refreshed by the reviews-sync bot.
   Only 4- and 5-star reviews with real text are included.
   Nothing here is written or paraphrased by us.
   ────────────────────────────────────────────── */

import data from "../../content/reviews.json";

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  branch: "phoenix" | "tucson";
  tags: string[];
}

export interface ReviewTotals {
  count: number;
  rating: number;
  byBranch: Record<string, { count: number; rating: number }>;
  updated: string;
}

export const REVIEWS = data.reviews as Review[];

/* Google Place IDs, pulled from the GBP API metadata for each location.
   Google has no public URL for an individual review, so the closest honest
   destination is the location's full Google review list — where the reader can
   see this review in Google's own UI alongside every other one. */
export const PLACE_IDS: Record<"phoenix" | "tucson", string> = {
  phoenix: "ChIJ-9EnslKzK4cR7E4Uv2a0nFo",
  tucson: "ChIJJd0yrNp11oYRfZMCqTPOl0I",
};

/** Public Google reviews list for a branch. */
export function googleReviewsUrl(branch: "phoenix" | "tucson"): string {
  return `https://search.google.com/local/reviews?placeid=${PLACE_IDS[branch]}`;
}

/** "Leave us a review" link for a branch. */
export function writeReviewUrl(branch: "phoenix" | "tucson"): string {
  return `https://search.google.com/local/writereview?placeid=${PLACE_IDS[branch]}`;
}
export const REVIEW_TOTALS = data.totals as ReviewTotals;

/** Schema.org AggregateRating built from the real GBP totals. */
export function aggregateRating(branch?: "phoenix" | "tucson") {
  const t = branch ? REVIEW_TOTALS.byBranch[branch] : REVIEW_TOTALS;
  return {
    "@type": "AggregateRating" as const,
    ratingValue: String(t.rating),
    reviewCount: String(t.count),
    bestRating: "5",
    worstRating: "1",
  };
}

/** Map a service slug to the review tag its customers actually talk about. */
export function tagForService(serviceSlug?: string): string | undefined {
  if (!serviceSlug) return undefined;
  if (serviceSlug.startsWith("pest")) return "pest";
  if (serviceSlug.startsWith("weed")) return "weed";
  if (serviceSlug.startsWith("air-conditioning")) return "ac";
  return undefined; // plumbing has no review coverage yet — fall back to general
}

function hash(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/**
 * Deterministically pick reviews for a page. Same page always renders the
 * same reviews (stable for crawlers), different pages show different ones.
 * Prefers the right branch and the right service tag, then falls back.
 */
export function pickReviews(
  seed: string,
  opts: { branch: "phoenix" | "tucson"; tag?: string; count?: number }
): Review[] {
  const want = opts.count ?? 6;
  const sameBranch = REVIEWS.filter((r) => r.branch === opts.branch);
  const tagged = opts.tag ? sameBranch.filter((r) => r.tags.includes(opts.tag!)) : [];
  const taggedIds = new Set(tagged.map((r) => r.id));
  const rest = sameBranch.filter((r) => !taggedIds.has(r.id));

  // Tag-matched reviews first (a pest page should show pest reviews), then
  // fall back to other reviews from the same branch to fill the slots.
  const picked: Review[] = [];
  for (const pool of [tagged, rest]) {
    if (picked.length >= want || pool.length === 0) continue;
    picked.push(...walk(pool, seed, want - picked.length));
  }
  return picked;
}

/** Deterministic spread through a pool: same seed → same reviews, every time. */
function walk(pool: Review[], seed: string, want: number): Review[] {
  const n = pool.length;
  const start = hash(seed) % n;
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  let step = n === 1 ? 1 : (hash(seed + "#stride") % (n - 1)) + 1;
  while (n > 1 && gcd(step, n) !== 1) step = (step % (n - 1)) + 1;

  const out: Review[] = [];
  for (let i = 0; i < n && out.length < want; i++) {
    out.push(pool[(start + i * step) % n]);
  }
  return out;
}
