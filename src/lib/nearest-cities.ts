import { CITIES, type City } from "@/lib/cities";

/** Nearest same-branch cities by straight-line distance (for descriptive local cross-links). */
export function nearestCities(city: City, count = 5): City[] {
  const d = (a: City, b: City) => {
    const x = (a.lng - b.lng) * Math.cos(((a.lat + b.lat) / 2) * (Math.PI / 180));
    const y = a.lat - b.lat;
    return x * x + y * y;
  };
  return CITIES.filter((c) => c.branch === city.branch && c.slug !== city.slug)
    .sort((a, b) => d(city, a) - d(city, b))
    .slice(0, count);
}

/** Descriptive anchor text per service/sub-service, e.g. "scorpion control in Mesa". */
export function anchorFor(serviceSlug: string, subSlug: string | null, cityName: string): string {
  const sub: Record<string, string> = {
    "scorpion-control": "scorpion control",
    "termite-treatment": "termite control",
    "roach-elimination": "roach control",
    "ant-control": "ant control",
    "spider-prevention": "spider control",
    "rodent-exclusion": "rodent control",
    "bed-bug-treatment": "bed bug treatment",
    "mosquito-control": "mosquito control",
    "bee-wasp-removal": "bee and wasp removal",
    "pre-emergent-weed-control": "pre-emergent weed control",
    "post-emergent-weed-treatment": "post-emergent weed treatment",
    "lawn-fertilization": "lawn fertilization",
    "bermuda-grass-control": "Bermuda grass control",
    "overseeding": "overseeding",
    "weed-and-feed-program": "weed and feed",
    "gravel-rock-yard-maintenance": "gravel and rock yard maintenance",
  };
  if (subSlug) return `${sub[subSlug] ?? subSlug.replace(/-/g, " ")} in ${cityName}`;
  return `${serviceSlug === "weed-and-lawn-care" ? "weed control" : "pest control"} in ${cityName}`;
}
