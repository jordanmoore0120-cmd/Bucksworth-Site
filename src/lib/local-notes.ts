/* ──────────────────────────────────────────────
   local-notes.ts — City-specific notes appended to templated sub-service pages
   Key format: "{citySlug}/{serviceSlug}/{subserviceSlug}"
   Facts come from neighborhoods.ts and llms.txt only (site-tasks #16: city-swap audit).
   ────────────────────────────────────────────── */

import type { ContentBlock } from "./content-overrides";

const NOTES: Record<string, ContentBlock> = {
  "apache-junction-az/pest-and-termite/scorpion-control": {
    heading: "What We See on Scorpion Calls in Apache Junction",
    paragraphs: [
      "Apache Junction is where our company is headquartered, on West Houston Avenue, so these are streets and desert edges our technicians drive every day. Scorpion pressure here follows the terrain: homes in the Superstition Foothills (85119) and Gold Canyon (85118) sit right against the Superstition Mountains, while properties along the Apache Trail (85120) are surrounded by rugged, undisturbed desert. Near Lost Dutchman State Park, rock piles, washes and block walls give bark scorpions daytime shelter just feet from the house. On these properties we start with a blacklight walk of the block wall, rock borders and garage door, because that is where entry points show up first.",
    ],
  },
  "san-tan-valley-az/pest-and-termite/scorpion-control": {
    heading: "What We See on Scorpion Calls in San Tan Valley",
    paragraphs: [
      "San Tan Valley is mostly newer construction built on former desert floor, and that changes the scorpion problem. In Bella Via (85143), building has displaced scorpion populations that now shelter in fresh block walls, landscape rock and utility boxes. Johnson Ranch (85143) backs onto desert washes that act as travel routes, and Pecan Creek (85140) borders open desert on the east side. Homes close to San Tan Mountain Regional Park and Goldmine Mountain see the most migration. On these homes we check weep holes, garage door seals and plumbing penetrations carefully, and we re-inspect the perimeter after monsoon storms.",
    ],
  },
};

export function getLocalNote(
  citySlug: string,
  serviceSlug: string,
  subserviceSlug: string
): ContentBlock | undefined {
  return NOTES[`${citySlug}/${serviceSlug}/${subserviceSlug}`];
}
