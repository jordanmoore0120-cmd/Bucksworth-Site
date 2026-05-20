export interface City {
  name: string;
  slug: string;
  branch: "phoenix" | "tucson";
  population: string;
  zipCodes: string[];
  description: string;
  services: string[];
}

export const CITIES: City[] = [
  { name: "Phoenix", slug: "phoenix-az", branch: "phoenix", population: "1.6M", zipCodes: ["85001","85003","85004","85006","85007","85008","85009"], description: "As Arizona's capital and largest city, Phoenix homeowners face unique pest, HVAC, and plumbing challenges year-round.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Scottsdale", slug: "scottsdale-az", branch: "phoenix", population: "241K", zipCodes: ["85250","85251","85254","85255","85257","85258","85260"], description: "Scottsdale's desert luxury homes need expert pest control, efficient HVAC, and reliable plumbing to stay comfortable.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Mesa", slug: "mesa-az", branch: "phoenix", population: "508K", zipCodes: ["85201","85202","85203","85204","85205","85206","85207","85208","85209","85210"], description: "Mesa families trust Bucksworth for comprehensive home services from scorpion control to AC repair.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Tempe", slug: "tempe-az", branch: "phoenix", population: "185K", zipCodes: ["85281","85282","85283","85284"], description: "Tempe's mix of college housing and family neighborhoods needs reliable pest control and HVAC service.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Chandler", slug: "chandler-az", branch: "phoenix", population: "280K", zipCodes: ["85224","85225","85226","85248","85249"], description: "Chandler's rapid growth means more homes needing expert pest, HVAC, and plumbing services.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Gilbert", slug: "gilbert-az", branch: "phoenix", population: "275K", zipCodes: ["85233","85234","85295","85296","85297","85298"], description: "Gilbert families choose Bucksworth for reliable pest control, energy-efficient HVAC, and expert plumbing.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Glendale", slug: "glendale-az", branch: "phoenix", population: "252K", zipCodes: ["85301","85302","85303","85304","85305","85306","85307","85308"], description: "Glendale homeowners depend on Bucksworth for year-round pest protection and efficient home services.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Peoria", slug: "peoria-az", branch: "phoenix", population: "195K", zipCodes: ["85345","85381","85382","85383"], description: "Peoria's sunny climate creates pest pressure and HVAC demand that Bucksworth handles expertly.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Surprise", slug: "surprise-az", branch: "phoenix", population: "152K", zipCodes: ["85374","85378","85379","85387","85388"], description: "Surprise's growing neighborhoods trust Bucksworth for complete home pest and maintenance services.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Goodyear", slug: "goodyear-az", branch: "phoenix", population: "105K", zipCodes: ["85338","85395"], description: "Goodyear homeowners rely on Bucksworth for desert-smart pest control and efficient HVAC solutions.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Buckeye", slug: "buckeye-az", branch: "phoenix", population: "115K", zipCodes: ["85326","85396"], description: "Buckeye is one of Arizona's fastest-growing cities, and Bucksworth keeps homes protected and comfortable.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Queen Creek", slug: "queen-creek-az", branch: "phoenix", population: "78K", zipCodes: ["85142","85140"], description: "Queen Creek's semi-rural setting brings unique pest challenges that Bucksworth handles with care.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Tucson", slug: "tucson-az", branch: "tucson", population: "546K", zipCodes: ["85701","85705","85710","85711","85712","85713","85716","85719"], description: "Tucson's Sonoran Desert location means year-round pest and HVAC demands that Bucksworth expertly manages.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Marana", slug: "marana-az", branch: "tucson", population: "58K", zipCodes: ["85653","85658"], description: "Marana families trust Bucksworth for reliable pest control and home services in the Tucson metro.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Oro Valley", slug: "oro-valley-az", branch: "tucson", population: "47K", zipCodes: ["85737","85755"], description: "Oro Valley homeowners choose Bucksworth for premium pest control and HVAC services.", services: ["pest","hvac","plumbing","insulation"] },
  { name: "Sahuarita", slug: "sahuarita-az", branch: "tucson", population: "37K", zipCodes: ["85629"], description: "Sahuarita's growing community relies on Bucksworth for comprehensive home protection services.", services: ["pest","hvac","plumbing","insulation"] },
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getAllCities(): City[] {
  return CITIES;
}

export function getPhoenixCities(): City[] {
  return CITIES.filter((c) => c.branch === "phoenix");
}

export function getTucsonCities(): City[] {
  return CITIES.filter((c) => c.branch === "tucson");
}
