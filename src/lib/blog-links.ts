/* ──────────────────────────────────────────────
   blog-links.ts — Cross-link blog posts to service pages
   Maps city slugs to relevant blog posts for internal linking
   ────────────────────────────────────────────── */

import fs from "fs";
import path from "path";

interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  modified: string;
  excerpt: string;
  categories: string[];
  categorySlugs: string[];
}

/* ── Cache (loaded once per build / serverless cold start) ── */
let _posts: BlogPostMeta[] | null = null;

function loadPosts(): BlogPostMeta[] {
  if (_posts) return _posts;
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content", "blog", "index.json"),
    "utf-8"
  );
  _posts = JSON.parse(raw);
  return _posts!;
}

// City name variations for matching
const CITY_PATTERNS: Record<string, string[]> = {
  "phoenix-az": ["phoenix", "arcadia", "biltmore", "downtown phoenix", "north phoenix", "south mountain", "desert ridge"],
  "scottsdale-az": ["scottsdale", "85251", "85255", "mccormick", "gainey", "dc ranch", "grayhawk", "kierland"],
  "mesa-az": ["mesa", "red mountain", "superstition springs", "las sendas", "eastmark", "dobson"],
  "gilbert-az": ["gilbert", "val vista", "agritopia", "power ranch", "seville", "morrison ranch"],
  "chandler-az": ["chandler", "ocotillo", "sun groves"],
  "tempe-az": ["tempe", "85281", "85282", "85283", "85284"],
  "goodyear-az": ["goodyear", "estrella mountain ranch", "palm valley", "canyon trails", "pebblecreek", "85338", "85395"],
  "buckeye-az": ["buckeye", "verrado", "tartesso", "sundance", "sienna hills"],
  "surprise-az": ["surprise", "surprise farms", "85374", "85378", "85387", "85388"],
  "peoria-az": ["peoria", "vistancia", "85382", "85383"],
  "queen-creek-az": ["queen creek", "hastings farms", "85142"],
  "san-tan-valley-az": ["san tan valley", "bella via"],
  "tucson-az": ["tucson", "rita ranch", "tanque verde", "sam hughes", "midtown tucson", "tucson mountains"],
  "oro-valley-az": ["oro valley", "oro-valley", "rancho vistoso", "sun city oro valley", "steam pump", "canada hills", "85737", "85755"],
  "marana-az": ["marana", "continental ranch", "dove mountain", "gladden farms", "saguaro ranch", "85653", "85658"],
  "catalina-foothills-az": ["catalina foothills", "ventana canyon", "skyline country club"],
  "sahuarita-az": ["sahuarita", "rancho sahuarita", "quail creek", "madera highlands"],
  "green-valley-az": ["green valley", "titan missile"],
  "vail-az": ["vail"],
  "valencia-west-az": ["valencia west", "drexel heights"],
  "red-rock-az": ["red rock"],
  "apache-junction-az": ["apache junction", "superstition foothills", "85118", "85119", "85120"],
  "ahwatukee-az": ["ahwatukee", "club west", "85044", "85045", "85048"],
  "anthem-az": ["anthem", "anthem parkside"],
  "casa-grande-az": ["casa grande", "mission royale", "85122"],
  "coolidge-az": ["coolidge", "coolidge historic"],
  "florence-az": ["florence", "magma ranch", "85132"],
  "fountain-hills-az": ["fountain hills", "eagle mountain", "85268"],
  "gold-canyon-az": ["gold canyon", "superstition mountain"],
  "laveen-az": ["laveen", "laveen meadows", "dobbins village"],
  "litchfield-park-az": ["litchfield park", "litchfield", "85340"],
  "maricopa-az": ["maricopa", "glennwilde"],
  "paradise-valley-az": ["paradise valley", "camelback mountain"],
};

// Sub-service slug → blog category slug mapping
const SUBSERVICE_CATEGORIES: Record<string, string[]> = {
  "scorpion-control": ["scorpion-control", "pest-control", "pest-and-termite"],
  "termite-treatment": ["termite-control", "pest-and-termite"],
  "roach-elimination": ["cockroach-control", "pest-control"],
  "ant-control": ["ant-control", "pest-control"],
  "spider-prevention": ["spider-control", "pest-control"],
  "rodent-exclusion": ["rodent-control", "pest-control"],
  "bed-bug-treatment": ["pest-control"],
  "mosquito-control": ["pest-control"],
  "bee-wasp-removal": ["pest-control"],
  "ac-repair": ["air-conditioning-and-heating", "cooling", "hvac"],
  "ac-installation": ["air-conditioning-and-heating", "cooling", "hvac"],
  "ac-maintenance": ["air-conditioning-and-heating", "cooling", "hvac"],
  "heating-repair": ["heating", "hvac"],
  "ductwork": ["hvac", "air-conditioning-and-heating"],
  "mini-split-systems": ["cooling", "hvac"],
  "smart-thermostat": ["hvac"],
  "indoor-air-quality": ["hvac", "air-conditioning-and-heating"],
  "attic-insulation": ["hvac", "air-conditioning-and-heating"],
  "spray-foam-insulation": ["hvac"],
  "radiant-barrier": ["hvac"],
  "water-heater-installation": ["plumbing-and-water-heaters", "plumbing"],
  "water-heater-repair": ["plumbing-and-water-heaters", "plumbing"],
  "leak-detection-repair": ["plumbing"],
  "drain-cleaning": ["plumbing"],
  "sewer-line-services": ["plumbing"],
  "re-piping": ["plumbing"],
  "fixture-installation": ["plumbing"],
  "water-softener": ["plumbing"],
  "gas-line-services": ["plumbing"],
  "pre-emergent-weed-control": ["weed-control", "weed-and-lawn-care"],
  "post-emergent-weed-treatment": ["weed-control", "weed-and-lawn-care"],
  "gravel-rock-yard-maintenance": ["weed-control", "weed-and-lawn-care"],
  "lawn-fertilization": ["weed-and-lawn-care"],
  "bermuda-grass-control": ["weed-control", "weed-and-lawn-care"],
  "overseeding": ["weed-and-lawn-care"],
  "weed-and-feed-program": ["weed-control", "weed-and-lawn-care"],
};

// Service vertical slug → blog category slug mapping (for hub pages)
const SERVICE_CATEGORIES: Record<string, string[]> = {
  "pest-and-termite": ["pest-control", "pest-and-termite", "scorpion-control", "termite-control", "ant-control", "cockroach-control", "rodent-control", "spider-control", "snake-control"],
  "air-conditioning-and-heating": ["air-conditioning-and-heating", "hvac", "cooling", "heating"],
  "plumbing-and-water-heaters": ["plumbing-and-water-heaters", "plumbing"],
  "weed-and-lawn-care": ["weed-and-lawn-care", "weed-control"],
};

/**
 * Get related blog posts for a city + subservice combination.
 * Returns posts matching BOTH the city AND the subservice category.
 * Falls back to city-only matches if no exact combo found.
 */
export function getRelatedBlogPosts(
  citySlug: string,
  subServiceSlug?: string,
  serviceSlug?: string,
  limit: number = 4
): BlogPostMeta[] {
  const posts = loadPosts();
  const cityPatterns = CITY_PATTERNS[citySlug] || [];
  if (cityPatterns.length === 0) return [];

  // Determine which category slugs to match
  let catSlugs: string[] = [];
  if (subServiceSlug && SUBSERVICE_CATEGORIES[subServiceSlug]) {
    catSlugs = SUBSERVICE_CATEGORIES[subServiceSlug];
  } else if (serviceSlug && SERVICE_CATEGORIES[serviceSlug]) {
    catSlugs = SERVICE_CATEGORIES[serviceSlug];
  }

  // Score each post
  const scored = posts
    .map((post) => {
      const titleLower = post.title.toLowerCase();
      const slugLower = post.slug.toLowerCase();
      const text = `${titleLower} ${slugLower}`;

      // Check city match
      const cityMatch = cityPatterns.some(
        (pattern) => text.includes(pattern.toLowerCase())
      );
      if (!cityMatch) return null;

      // Check category match
      const catMatch =
        catSlugs.length === 0 ||
        post.categorySlugs.some((c) => catSlugs.includes(c));

      // Score: city+category match is best, city-only is fallback
      const score = catMatch ? 2 : 1;

      return { post, score };
    })
    .filter(Boolean) as { post: BlogPostMeta; score: number }[];

  // Sort by score (best match first), then by date (newest first)
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
  });

  return scored.slice(0, limit).map((s) => s.post);
}

/**
 * Get related blog posts for a service hub page (city + service vertical).
 */
export function getRelatedBlogPostsForServiceHub(
  citySlug: string,
  serviceSlug: string,
  limit: number = 6
): BlogPostMeta[] {
  return getRelatedBlogPosts(citySlug, undefined, serviceSlug, limit);
}
