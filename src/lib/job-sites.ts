export type ServiceCategory = "pest" | "ac" | "plumbing" | "lawn";

export interface JobSite {
  id: string;
  lat: number;
  lng: number;
  category: ServiceCategory;
  neighborhood: string;
  city: string;
  title: string;
  description: string;
  photo: string;
  video?: string;
  date: string;
}

export const CATEGORY_META: Record<ServiceCategory, { label: string; color: string; icon: string }> = {
  pest:     { label: "Pest Control",         color: "#16a34a", icon: "🦂" },
  ac:       { label: "AC & Heating",         color: "#2563eb", icon: "❄️" },
  plumbing: { label: "Plumbing",             color: "#0891b2", icon: "🔧" },
  lawn:     { label: "Lawn & Weed Control",  color: "#c96a2c", icon: "🌿" },
};

/* ── Job site data ──
   Real Phoenix & Tucson neighborhoods with representative coordinates.
   Photos map to existing /images/photos/ assets.
   In production, this would come from FieldRoutes/CRM + GMB.
*/
export const JOB_SITES: JobSite[] = [
  // ─── PEST CONTROL ───
  {
    id: "p1", lat: 33.4152, lng: -111.8315, category: "pest",
    neighborhood: "Mesa", city: "Phoenix",
    title: "Scorpion Barrier Treatment",
    description: "Full exterior perimeter barrier treatment. Sealed entry points around plumbing penetrations and weep holes. Customer reported scorpions in master bath — none since treatment.",
    photo: "/images/photos/tech-spraying-detail.jpg", date: "2025-11-14",
  },
  {
    id: "p2", lat: 33.5091, lng: -111.8985, category: "pest",
    neighborhood: "Scottsdale", city: "Phoenix",
    title: "Roach Elimination — German Roaches",
    description: "Complete German roach elimination in kitchen and bathrooms. Gel bait placement, crack & crevice treatment, and 30-day follow-up inspection. Zero roach activity at follow-up.",
    photo: "/images/photos/tech-detail-work.jpg", date: "2025-10-22",
  },
  {
    id: "p3", lat: 33.3528, lng: -111.7890, category: "pest",
    neighborhood: "Gilbert", city: "Phoenix",
    title: "Termite Pre-Treatment — New Build",
    description: "Pre-construction termite treatment for new build in Power Ranch. Liquid barrier applied to soil before slab pour. Full warranty transferred to homeowner at closing.",
    photo: "/images/photos/tech-pretreat-framing.jpg", date: "2025-09-08",
  },
  {
    id: "p4", lat: 33.4373, lng: -112.0078, category: "pest",
    neighborhood: "Tempe", city: "Phoenix",
    title: "Spider & Ant Control",
    description: "Quarterly pest control service. Interior baseboard treatment, exterior perimeter barrier, and granular treatment in rock landscaping. Black widows found and eliminated in garage.",
    photo: "/images/photos/tech-treating-home.jpg", date: "2025-12-03",
  },
  {
    id: "p5", lat: 33.4484, lng: -112.0740, category: "pest",
    neighborhood: "Downtown Phoenix", city: "Phoenix",
    title: "Commercial Pest Service",
    description: "Monthly commercial pest service for restaurant. Integrated pest management approach — bait stations, exclusion work, and exterior barrier treatment.",
    photo: "/images/photos/tech-backyard-service.jpg", date: "2026-01-15",
  },
  {
    id: "p6", lat: 33.3061, lng: -111.8413, category: "pest",
    neighborhood: "Chandler", city: "Phoenix",
    title: "Bee Hive Removal",
    description: "Emergency bee hive removal from exterior wall cavity. Safely removed hive and treated entry points. Screened weep holes to prevent future nesting.",
    photo: "/images/photos/tech-outdoor-service.jpg", date: "2026-02-18",
  },
  {
    id: "p7", lat: 32.2540, lng: -110.9455, category: "pest",
    neighborhood: "Tucson", city: "Tucson",
    title: "Pack Rat Exclusion",
    description: "Full rodent exclusion on desert lot property. Sealed 14 entry points, installed bait stations, and cleared pack rat nest from engine compartment of customer's vehicle.",
    photo: "/images/photos/tech-at-work.jpg", date: "2026-03-07",
  },
  {
    id: "p8", lat: 32.3200, lng: -111.0100, category: "pest",
    neighborhood: "Marana", city: "Tucson",
    title: "Scorpion Seal & Spray",
    description: "Home seal for bark scorpions. Sealed gaps around doors, windows, and utility penetrations. Full exterior barrier with residual product. Customer had 12 scorpions in one week before treatment — zero after.",
    photo: "/images/photos/tech-spraying-early.jpg", date: "2026-01-28",
  },
  {
    id: "p9", lat: 33.4255, lng: -111.7399, category: "pest",
    neighborhood: "Queen Creek", city: "Phoenix",
    title: "Peak Season Scorpion Barrier — Block Wall Dust Injection",
    description: "June scorpion season treatment: H-block dust injection with Defense Dust throughout rear block wall perimeter, Defense Dust in garage door thresholds (front and back), full exterior barrier spray. Customer had 6 scorpions in two weeks — zero since treatment.",
    photo: "/images/photos/tech-spraying-detail.jpg", date: "2026-06-10",
  },
  {
    id: "p10", lat: 33.3062, lng: -111.9295, category: "pest",
    neighborhood: "Gilbert", city: "Phoenix",
    title: "Monsoon Prep — Mosquito & Scorpion Combo",
    description: "Pre-monsoon treatment package: scorpion perimeter barrier, yard baiting for scorpion prey insects, and mosquito fogging of standing water zones. Homeowner prepared for July monsoon season with full property protection.",
    photo: "/images/photos/tech-backyard-service.jpg", date: "2026-06-12",
  },

  // ─── AC & HEATING ───
  {
    id: "a1", lat: 33.3942, lng: -111.9130, category: "ac",
    neighborhood: "Mesa", city: "Phoenix",
    title: "Rooftop Package Unit Replacement",
    description: "Replaced 15-year-old Trane rooftop package unit with new Daikin 4-ton 16 SEER system. Installed new disconnect, whip, and thermostat. Home cooling 6°F better than old unit.",
    photo: "/images/photos/tech-hvac-rooftop.jpg", date: "2025-10-05",
  },
  {
    id: "a2", lat: 33.5387, lng: -112.1860, category: "ac",
    neighborhood: "Glendale", city: "Phoenix",
    title: "Emergency AC Repair — Capacitor",
    description: "Same-day emergency repair. AC blowing warm air at 3pm in 112°F heat. Diagnosed failed dual-run capacitor, replaced on the spot. System cooling within 20 minutes of arrival.",
    photo: "/images/photos/ac-unit-arizona-backdrop.jpg", date: "2025-07-19",
  },
  {
    id: "a3", lat: 33.4484, lng: -111.9871, category: "ac",
    neighborhood: "Tempe", city: "Phoenix",
    title: "Full HVAC System Installation",
    description: "Complete HVAC replacement — new Daikin split system with variable-speed air handler. Installed new ductwork in attic, sealed all connections, and added attic insulation. Energy bill dropped 35%.",
    photo: "/images/photos/daikin-rooftop-install.jpg", date: "2025-11-22",
  },
  {
    id: "a4", lat: 33.6189, lng: -112.1160, category: "ac",
    neighborhood: "Peoria", city: "Phoenix",
    title: "Ductwork Repair & Sealing",
    description: "Found 40% air loss through disconnected duct runs in attic. Reconnected, sealed with mastic, and insulated. Home now cools evenly — no more hot spots in bedrooms.",
    photo: "/images/photos/hvac-tech-soldering.jpg", date: "2026-02-14",
  },
  {
    id: "a5", lat: 32.2217, lng: -110.9265, category: "ac",
    neighborhood: "Tucson", city: "Tucson",
    title: "Mini-Split Installation",
    description: "Installed Daikin 3-zone mini-split system in 1960s block home with no existing ductwork. Each zone independently controlled. Customer saving $180/mo vs window units.",
    photo: "/images/photos/tech-scene-wide.jpg", date: "2026-03-20",
  },
  {
    id: "a6", lat: 33.4942, lng: -112.0758, category: "ac",
    neighborhood: "North Phoenix", city: "Phoenix",
    title: "Emergency AC Repair — 112°F Heat",
    description: "Same-day emergency call: unit stopped cooling at 4pm in 112°F heat. Diagnosed failed contactor and low refrigerant. Replaced contactor, recharged to spec — home cooling within 25 minutes of arrival. Monsoon season capacitor inspection completed as part of service.",
    photo: "/images/photos/ac-unit-arizona-backdrop.jpg", date: "2026-06-11",
  },

  // ─── PLUMBING ───
  {
    id: "pl1", lat: 33.4251, lng: -111.9401, category: "plumbing",
    neighborhood: "Tempe", city: "Phoenix",
    title: "Water Heater Replacement",
    description: "Replaced 40-gallon gas water heater showing rust and sediment buildup. Installed new 50-gallon high-efficiency unit with expansion tank and new supply lines. Hot water in 30 minutes.",
    photo: "/images/photos/tech-detail-work.jpg", date: "2025-12-10",
  },
  {
    id: "pl2", lat: 33.4936, lng: -112.0736, category: "plumbing",
    neighborhood: "North Phoenix", city: "Phoenix",
    title: "Whole-House Repipe — Copper to PEX",
    description: "Full copper-to-PEX repipe on 1985 home with pinhole leaks. 2-day job, minimal drywall repair. Customer had 3 slab leaks in 2 years — PEX eliminates that risk entirely.",
    photo: "/images/photos/tech-service-action.jpg", date: "2026-01-07",
  },
  {
    id: "pl3", lat: 33.3528, lng: -112.0325, category: "plumbing",
    neighborhood: "Ahwatukee", city: "Phoenix",
    title: "Sewer Line Camera Inspection",
    description: "Camera inspection revealed root intrusion in main sewer line 45 feet from cleanout. Hydro-jetted the line and installed root barrier. Saved customer from a $12K trenchless replacement.",
    photo: "/images/photos/tech-wide-shot.jpg", date: "2026-02-22",
  },
  {
    id: "pl4", lat: 32.2715, lng: -110.9458, category: "plumbing",
    neighborhood: "Tucson", city: "Tucson",
    title: "Emergency Leak Repair",
    description: "Emergency call for burst supply line under kitchen sink. Water shut off within 15 minutes of call. Replaced failed angle stop valve and supply line. Zero water damage thanks to fast response.",
    photo: "/images/photos/tech-at-work.jpg", date: "2026-03-15",
  },

  // ─── LAWN & WEED ───
  {
    id: "l1", lat: 33.4373, lng: -111.8243, category: "lawn",
    neighborhood: "Mesa", city: "Phoenix",
    title: "Pre-Emergent Application",
    description: "February pre-emergent application to prevent spring weeds. Treated 8,000 sq ft of rock landscaping with granular pre-emergent and post-emergent for existing spurge and globe chamomile.",
    photo: "/images/weeds-control.jpg", date: "2026-02-05",
  },
  {
    id: "l2", lat: 33.5091, lng: -111.7985, category: "lawn",
    neighborhood: "East Mesa", city: "Phoenix",
    title: "Full Yard Weed Cleanup",
    description: "Severe weed infestation — yard was 80% covered. Two-pass treatment: first pass knocked down existing growth, second pass 10 days later caught survivors. Pre-emergent applied to prevent regrowth.",
    photo: "/images/photos/tech-backyard-service.jpg", date: "2025-11-18",
  },
  {
    id: "l3", lat: 33.6060, lng: -112.3710, category: "lawn",
    neighborhood: "Surprise", city: "Phoenix",
    title: "Monthly Weed & Pest Combo",
    description: "Monthly combo service — pest control perimeter treatment plus targeted weed control on 12,000 sq ft lot. Customer bundles both services for $79/mo. Yard has been weed-free for 8 consecutive months.",
    photo: "/images/photos/tech-outdoor-service.jpg", date: "2026-03-12",
  },
  {
    id: "l4", lat: 32.2870, lng: -110.9810, category: "lawn",
    neighborhood: "Tucson", city: "Tucson",
    title: "Bermuda Grass Control",
    description: "Bermuda grass invasion into rock landscaping. Applied selective herbicide to kill Bermuda without harming desert plants. Follow-up treatment in 3 weeks eliminated remaining runners.",
    photo: "/images/photos/tech-spraying-detail.jpg", date: "2026-04-01",
  },
];
