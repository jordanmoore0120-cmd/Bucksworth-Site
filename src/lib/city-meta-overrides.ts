/* ──────────────────────────────────────────────
   city-meta-overrides.ts — Custom meta for priority city pages
   
   Override default city page titles and descriptions for cities 
   where GSC data shows high impressions but zero clicks (CTR crisis).
   These overrides are checked by [city]/page.tsx generateMetadata().
   ────────────────────────────────────────────── */

export interface CityMetaOverride {
  metaTitle: string;
  metaDescription: string;
}

// Key format: city slug (e.g., "catalina-foothills-az")
const CITY_META_OVERRIDES: Record<string, CityMetaOverride> = {

  /* Catalina Foothills — pos 7.2, 339 imp, 0 clk (4+ weeks) */
  "catalina-foothills-az": {
    metaTitle: "Catalina Foothills Pest & Weed Control — Scorpion, Termite & Desert Landscaping Pros",
    metaDescription: "Licensed pest control and weed treatment in Catalina Foothills, AZ. Bark scorpion removal, termite inspections, and bermuda grass control near Sabino Canyon. Same-day service. Call (520) 284-9930.",
  },

  /* Florence — pos 5.3, 115 imp, 0 clk */
  "florence-az": {
    metaTitle: "Florence, AZ Pest Control & AC Repair — Licensed Pros, Same-Day Appointments",
    metaDescription: "Trusted pest control and air conditioning repair in Florence, AZ. Scorpion removal, termite treatment, AC installation and emergency repair. Google Guaranteed. Call (480) 485-9790.",
  },

  /* Chandler — pos 2.9, 88 imp, 0 clk */
  "chandler-az": {
    metaTitle: "Chandler, AZ Pest Control, AC Repair & Plumbing — Top-Rated Local Pros",
    metaDescription: "Bucksworth serves Chandler with scorpion control, AC repair and installation, drain cleaning, and plumbing. 1,900+ five-star reviews. Free inspections. Call (480) 485-9790.",
  },

  /* Coolidge — pos 21.8, 60 imp, 0 clk */
  "coolidge-az": {
    metaTitle: "Coolidge, AZ AC Repair & Pest Control — Emergency Same-Day Service",
    metaDescription: "AC repair, pest control, and plumbing in Coolidge, AZ. Licensed HVAC technicians for emergency cooling repair, scorpion removal, and water heater service. Call (480) 485-9790.",
  },

  /* Ahwatukee — pos 22.0, 82 imp, 0 clk */
  "ahwatukee-az": {
    metaTitle: "Ahwatukee Pest Control, AC & Plumbing — 4.9-Star Rated, Same-Day Service",
    metaDescription: "Expert pest control, AC repair, and plumbing in Ahwatukee Foothills. Scorpion removal specialists, emergency HVAC, and drain cleaning. Google Guaranteed. Call (480) 485-9790.",
  },

};

export function getCityMetaOverride(citySlug: string): CityMetaOverride | undefined {
  return CITY_META_OVERRIDES[citySlug];
}
