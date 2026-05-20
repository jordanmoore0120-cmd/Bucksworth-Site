export interface SubService {
  name: string;
  slug: string;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  description: string;
  subServices: SubService[];
}

export interface City {
  name: string;
  slug: string;
  branch: "phoenix" | "tucson";
  phone: string;
  localFacts: string;
  zipCodes: string[];
  services: ServiceCategory[];
  neighbors: string[];
}

const SERVICE_CATEGORIES: Record<string, ServiceCategory> = {
  pest: {
    name: "Pest & Termite Control",
    slug: "pest-control-az",
    description: "From scorpions to termites, we protect your home from every desert pest. Family-owned, locally operated, and backed by our satisfaction guarantee.",
    subServices: [
      { name: "Scorpion Control", slug: "scorpion-control" },
      { name: "Termite Treatment", slug: "termite-treatment" },
      { name: "Termite Inspections", slug: "termite-inspections" },
      { name: "Spider Control", slug: "spider-control" },
      { name: "Ant Control", slug: "ant-control" },
      { name: "Roach Control", slug: "roach-control" },
      { name: "Rodent Control", slug: "rodent-control" },
      { name: "Mosquito Control", slug: "mosquito-control" },
      { name: "Bed Bug Treatment", slug: "bed-bug-treatment" },
      { name: "Bee Removal", slug: "bee-removal" },
      { name: "Weed Control", slug: "weed-control" },
    ],
  },
  hvac: {
    name: "HVAC / Air Conditioning",
    slug: "hvac",
    description: "Expert AC repair, installation, and maintenance to keep your home cool in the desert. Same-day service available.",
    subServices: [
      { name: "AC Repair", slug: "ac-repair" },
      { name: "AC Installation", slug: "ac-installation" },
      { name: "AC Maintenance", slug: "ac-maintenance" },
      { name: "Heating Repair", slug: "heating-repair" },
      { name: "Heating Installation", slug: "heating-installation" },
      { name: "Duct Cleaning", slug: "duct-cleaning" },
      { name: "Mini-Split Systems", slug: "mini-split" },
    ],
  },
  plumbing: {
    name: "Plumbing",
    slug: "plumbing",
    description: "24/7 plumbing service, repairs, installation, and upgrades. Licensed Arizona plumbers you can trust.",
    subServices: [
      { name: "Plumbing Repair", slug: "repair" },
      { name: "Water Heater Repair", slug: "water-heater-repair" },
      { name: "Water Heater Installation", slug: "water-heater-installation" },
      { name: "Drain Cleaning", slug: "drain-cleaning" },
      { name: "Slab Leak Repair", slug: "slab-leak-repair" },
      { name: "Repiping", slug: "repiping" },
      { name: "Sewer Line Repair", slug: "sewer-line-repair" },
    ],
  },
  insulation: {
    name: "Insulation",
    slug: "insulation",
    description: "Professional insulation services to improve energy efficiency and comfort in your Arizona home.",
    subServices: [
      { name: "Blow-In Insulation", slug: "blow-in" },
      { name: "Pest Guard Insulation", slug: "pest-guard" },
      { name: "Duct Insulation", slug: "duct-insulation" },
      { name: "Attic Insulation", slug: "attic-insulation" },
    ],
  },
};

// Will be expanded with full city data - starting with key cities
const CITIES_DATA: Record<string, Omit<City, "services"> & { serviceKeys: string[] }> = {
  phoenix: { name: "Phoenix", slug: "phoenix-az", branch: "phoenix", phone: "(480) 422-8388", localFacts: "As the fifth-largest city in the United States, Phoenix homeowners face unique challenges from the Sonoran Desert climate. Summer temperatures regularly exceed 115 degrees, putting extreme stress on HVAC systems, while the warm climate creates year-round pest pressure from scorpions, termites, and roof rats.", zipCodes: ["85001","85003","85004","85006","85007","85008","85009","85012","85013","85014"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["scottsdale-az","tempe-az","mesa-az","glendale-az","paradise-valley-az"] },
  scottsdale: { name: "Scottsdale", slug: "scottsdale-az", branch: "phoenix", phone: "(480) 422-8388", localFacts: "Scottsdale homes blend luxury living with desert landscape, creating unique pest and HVAC challenges. From the McDowell Mountain Ranch to Old Town, Bucksworth protects Scottsdale properties year-round.", zipCodes: ["85250","85251","85252","85253","85254","85255","85256","85257","85258","85259","85260","85261","85262"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["phoenix-az","tempe-az","mesa-az","fountain-hills-az","paradise-valley-az"] },
  mesa: { name: "Mesa", slug: "mesa-az", branch: "phoenix", phone: "(480) 422-8388", localFacts: "Mesa is Arizona's third-largest city with diverse neighborhoods from the Superstition Mountains foothills to the Salt River. The varied terrain means different pest pressures across the city.", zipCodes: ["85201","85202","85203","85204","85205","85206","85207","85208","85209","85210","85211","85212","85213","85215"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["tempe-az","scottsdale-az","gilbert-az","chandler-az","apache-junction-az"] },
  tucson: { name: "Tucson", slug: "tucson-az", branch: "tucson", phone: "(520) 284-9930", localFacts: "Tucson sits in the Sonoran Desert surrounded by five mountain ranges. The Old Pueblo's unique climate brings intense monsoon seasons and year-round pest challenges that require specialized local expertise.", zipCodes: ["85701","85702","85704","85705","85706","85710","85711","85712","85713","85714","85715","85716","85718","85719"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["marana-az","oro-valley-az","vail-az","sahuarita-az","catalina-foothills-az"] },
  chandler: { name: "Chandler", slug: "chandler-az", branch: "phoenix", phone: "(480) 422-8388", localFacts: "Chandler is one of the fastest-growing cities in the Phoenix metro, with master-planned communities and a thriving tech corridor. New construction and established neighborhoods alike need protection from Arizona desert pests.", zipCodes: ["85224","85225","85226","85248","85249"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["gilbert-az","tempe-az","mesa-az","phoenix-az"] },
  gilbert: { name: "Gilbert", slug: "gilbert-az", branch: "phoenix", phone: "(480) 422-8388", localFacts: "Gilbert has transformed from a farming community to one of the safest and most desirable suburbs in the Phoenix metro. The mix of new developments and older neighborhoods creates varied pest control needs.", zipCodes: ["85233","85234","85295","85296","85297","85298","85299"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["chandler-az","mesa-az","queen-creek-az","san-tan-valley-az"] },
  tempe: { name: "Tempe", slug: "tempe-az", branch: "phoenix", phone: "(480) 422-8388", localFacts: "Home to Arizona State University, Tempe blends college-town energy with family neighborhoods. Tempe Town Lake and the Salt River bottom create unique pest habitats that require year-round management.", zipCodes: ["85280","85281","85282","85283","85284","85285"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["phoenix-az","scottsdale-az","mesa-az","chandler-az"] },
  glendale: { name: "Glendale", slug: "glendale-az", branch: "phoenix", phone: "(480) 422-8388", localFacts: "Glendale is home to State Farm Stadium and Westgate Entertainment District. From the historic Catlin Court to new developments near the Loop 303, Glendale homes face year-round desert pest challenges.", zipCodes: ["85301","85302","85303","85304","85305","85306","85307","85308","85310","85311","85312"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["phoenix-az","peoria-az","surprise-az","goodyear-az"] },
  peoria: { name: "Peoria", slug: "peoria-az", branch: "phoenix", phone: "(480) 422-8388", localFacts: "Peoria stretches from the urban core to the desert foothills of Lake Pleasant. This range of terrain brings diverse pest and HVAC challenges for homeowners across the city.", zipCodes: ["85345","85380","85381","85382","85383"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["glendale-az","surprise-az","phoenix-az"] },
  surprise: { name: "Surprise", slug: "surprise-az", branch: "phoenix", phone: "(480) 422-8388", localFacts: "Surprise is one of the fastest-growing cities in Arizona with a mix of active adult communities and young families. The West Valley location brings unique desert pest challenges.", zipCodes: ["85374","85378","85379","85387","85388"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["peoria-az","goodyear-az","buckeye-az","litchfield-park-az"] },
  goodyear: { name: "Goodyear", slug: "goodyear-az", branch: "phoenix", phone: "(480) 422-8388", localFacts: "Goodyear is booming with new master-planned communities along the I-10 corridor. New construction homes are especially vulnerable to termites and desert pests during their first years.", zipCodes: ["85338","85340","85395","85396"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["surprise-az","buckeye-az","litchfield-park-az","phoenix-az"] },
  buckeye: { name: "Buckeye", slug: "buckeye-az", branch: "phoenix", phone: "(480) 422-8388", localFacts: "Buckeye is Arizona's fastest-growing city, with massive new developments pushing into the western desert. New construction homes need pest prevention before move-in day.", zipCodes: ["85326","85396"], serviceKeys: ["pest","hvac","plumbing","insulation"], neighbors: ["goodyear-az","surprise-az","litchfield-park-az"] },
};

function buildCity(key: string): City | null {
  const data = CITIES_DATA[key];
  if (!data) return null;
  const { serviceKeys, ...rest } = data;
  return {
    ...rest,
    services: serviceKeys
      .filter((k) => SERVICE_CATEGORIES[k])
      .map((k) => SERVICE_CATEGORIES[k]),
  };
}

export function getCityBySlug(slug: string): City | null {
  const entry = Object.entries(CITIES_DATA).find(([, v]) => v.slug === slug);
  if (!entry) return null;
  return buildCity(entry[0]);
}

export function getAllCities(): City[] {
  return Object.keys(CITIES_DATA)
    .map(buildCity)
    .filter((c): c is City => c !== null);
}

export function getCitiesByBranch(branch: "phoenix" | "tucson"): City[] {
  return getAllCities().filter((c) => c.branch === branch);
}
