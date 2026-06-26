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


  /* san-tan-valley-az — city meta override added Jun 25 */
  "san-tan-valley-az": {
    metaTitle: "San Tan Valley Pest Control, AC & Plumbing — Same-Day Service, 4.9-Star Rated",
    metaDescription: "Trusted pest control, AC installation, and plumbing in San Tan Valley, AZ. Scorpion removal, emergency HVAC repair, and drain cleaning for 85140/85142/85143. Google Guaranteed. Call (480) 485-9790.",
  },

  /* sahuarita-az — city meta override added Jun 25 */
  "sahuarita-az": {
    metaTitle: "Sahuarita Pest & Weed Control — Scorpion, Termite & Desert Weed Pros",
    metaDescription: "Licensed pest control and weed treatment in Sahuarita, AZ. Scorpion removal, termite inspections, and pre-emergent weed control. Same-day appointments. Call (520) 284-9930.",
  },

  /* fountain-hills-az — pos 21.6, 291 imp, 0 clk — added Jun 26 */
  "fountain-hills-az": {
    metaTitle: "Fountain Hills Pest Control, AC & Plumbing — McDowell Mountain Area Pros",
    metaDescription: "Licensed pest control, AC repair, and plumbing in Fountain Hills, AZ 85268. Scorpion removal, emergency HVAC, and drain cleaning near McDowell Mountain Park. 4.9-star rated. Call (480) 485-9790.",
  },

  /* goodyear-az — pos 22.1, 72 imp, 0 clk — added Jun 26 */
  "goodyear-az": {
    metaTitle: "Goodyear, AZ Pest Control, AC Repair & Plumbing — Estrella & Palm Valley",
    metaDescription: "Trusted pest control, AC installation, and plumbing in Goodyear, AZ. Serving Estrella Mountain Ranch, Palm Valley & Canyon Trails. Google Guaranteed. Call (480) 485-9790.",
  },

  /* casa-grande-az — pos 13.7, 55 imp, 0 clk — added Jun 26 */
  "casa-grande-az": {
    metaTitle: "Casa Grande Pest Control, AC & Plumbing — Same-Day Service, 85122/85193",
    metaDescription: "Pest control, AC repair, and plumbing in Casa Grande, AZ. Scorpion removal, emergency cooling repair, and water heater service for 85122 & 85193. Call (480) 485-9790.",
  },

  /* vail-az — city meta override added Jun 25 */
  "vail-az": {
    metaTitle: "Vail, AZ Pest & Weed Control — Desert Pest Experts, Free Inspections",
    metaDescription: "Professional pest control and weed management in Vail, AZ. Bark scorpion removal, termite treatment, and bermuda grass control near Colossal Cave. Call (520) 284-9930.",
  },

};

export function getCityMetaOverride(citySlug: string): CityMetaOverride | undefined {
  return CITY_META_OVERRIDES[citySlug];
}
