/* ──────────────────────────────────────────────
   cities.ts — All 33 service areas
   Phoenix branch (24 cities) + Tucson branch (9 cities)
   ────────────────────────────────────────────── */

export interface City {
  name: string;
  slug: string;
  branch: "phoenix" | "tucson";
  population: string;
  county: string;
  lat: number;
  lng: number;
  zipCodes: string[];
  description: string;
  services: ("pest-and-termite" | "air-conditioning-and-heating" | "plumbing-and-water-heaters" | "weed-and-lawn-care")[];
  nearbyNote?: string; // e.g. "Minutes from downtown Phoenix"
}

/* ── Phoenix branch ── */
const PHX_SERVICES: City["services"] = ["pest-and-termite", "air-conditioning-and-heating", "plumbing-and-water-heaters", "weed-and-lawn-care"];
const PHX_PHONE = "(480) 422-8388";
const TUC_PHONE = "(520) 284-9930";

/* Tucson branch — pest + weed only unless noted */
const TUC_SERVICES: City["services"] = ["pest-and-termite", "weed-and-lawn-care"];

export const CITIES: City[] = [
  // ── PHOENIX BRANCH (24) ──────────────────
  { name: "Ahwatukee", slug: "ahwatukee-az", branch: "phoenix", population: "80K", county: "Maricopa", lat: 33.345, lng: -111.9836, zipCodes: ["85044","85045","85048"], description: "Ahwatukee Foothills is a master-planned community surrounded by South Mountain, making it a hotspot for scorpions, roof rats, and seasonal pests that migrate from the desert preserve.", services: PHX_SERVICES },
  { name: "Anthem", slug: "anthem-az", branch: "phoenix", population: "25K", county: "Maricopa", lat: 33.867, lng: -112.146, zipCodes: ["85086"], description: "Anthem sits at the edge of the Sonoran Desert in north Phoenix, where bark scorpions, pack rats, and rattlesnakes are common. Bucksworth protects Anthem homes year-round.", services: PHX_SERVICES },
  { name: "Apache Junction", slug: "apache-junction-az", branch: "phoenix", population: "42K", county: "Pinal", lat: 33.4151, lng: -111.5496, zipCodes: ["85118","85119","85120"], description: "Apache Junction borders the Superstition Mountains, bringing unique pest pressure from the wild desert landscape. Our technicians know this terrain and the pests that come with it.", services: PHX_SERVICES },
  { name: "Buckeye", slug: "buckeye-az", branch: "phoenix", population: "115K", county: "Maricopa", lat: 33.3703, lng: -112.5838, zipCodes: ["85326","85396"], description: "Buckeye is Arizona's fastest-growing city, with new construction expanding into raw desert. Bucksworth helps new homeowners establish pest barriers and efficient HVAC from day one.", services: PHX_SERVICES },
  { name: "Casa Grande", slug: "casa-grande-az", branch: "phoenix", population: "60K", county: "Pinal", lat: 32.8795, lng: -111.7574, zipCodes: ["85122","85193","85194"], description: "Casa Grande sits between Phoenix and Tucson in Pinal County. Agricultural land and desert surroundings create heavy pest pressure from scorpions, ants, roaches, and rodents year-round.", services: PHX_SERVICES },
  { name: "Chandler", slug: "chandler-az", branch: "phoenix", population: "280K", county: "Maricopa", lat: 33.3062, lng: -111.8413, zipCodes: ["85224","85225","85226","85248","85249"], description: "Chandler's tech corridor and family neighborhoods need reliable pest control, efficient HVAC systems, and expert plumbing. Bucksworth serves Chandler with same-day availability.", services: PHX_SERVICES },
  { name: "Coolidge", slug: "coolidge-az", branch: "phoenix", population: "14K", county: "Pinal", lat: 32.979, lng: -111.5176, zipCodes: ["85128"], description: "Coolidge sits in the Casa Grande Valley with agricultural surroundings that attract pests. Our pest control and home services keep Coolidge homes comfortable and protected.", services: PHX_SERVICES },
  { name: "Florence", slug: "florence-az", branch: "phoenix", population: "27K", county: "Pinal", lat: 33.0317, lng: -111.3873, zipCodes: ["85132"], description: "Florence is the county seat of Pinal County, with historic homes and new builds that both need expert pest control, HVAC maintenance, and plumbing services.", services: PHX_SERVICES },
  { name: "Fountain Hills", slug: "fountain-hills-az", branch: "phoenix", population: "24K", county: "Maricopa", lat: 33.6056, lng: -111.7174, zipCodes: ["85268"], description: "Fountain Hills is surrounded by the McDowell Mountain Regional Park, creating a beautiful but pest-prone environment. Scorpions, javelinas, and rattlesnakes are regular visitors.", services: PHX_SERVICES },
  { name: "Gilbert", slug: "gilbert-az", branch: "phoenix", population: "275K", county: "Maricopa", lat: 33.3528, lng: -111.789, zipCodes: ["85233","85234","85295","85296","85297","85298"], description: "Gilbert families choose Bucksworth for reliable pest control, energy-efficient HVAC systems, and expert plumbing. We serve every Gilbert neighborhood from Val Vista to Agritopia.", services: PHX_SERVICES },
  { name: "Gold Canyon", slug: "gold-canyon-az", branch: "phoenix", population: "12K", county: "Pinal", lat: 33.3706, lng: -111.4368, zipCodes: ["85118"], description: "Gold Canyon sits at the base of the Superstition Mountains with stunning desert views and challenging pest environments. Bucksworth keeps Gold Canyon homes safe and comfortable.", services: PHX_SERVICES },
  { name: "Goodyear", slug: "goodyear-az", branch: "phoenix", population: "105K", county: "Maricopa", lat: 33.4353, lng: -112.3576, zipCodes: ["85338","85395"], description: "Goodyear's Estrella and Palm Valley communities are growing fast. Bucksworth provides desert-smart pest control, efficient HVAC solutions, and reliable plumbing for every Goodyear home.", services: PHX_SERVICES },
  { name: "Laveen", slug: "laveen-az", branch: "phoenix", population: "65K", county: "Maricopa", lat: 33.3628, lng: -112.169, zipCodes: ["85339"], description: "Laveen is a south Phoenix community where agriculture and new development meet the desert. This mix creates heavy pest pressure that Bucksworth handles expertly.", services: PHX_SERVICES },
  { name: "Litchfield Park", slug: "litchfield-park-az", branch: "phoenix", population: "7K", county: "Maricopa", lat: 33.4937, lng: -112.3577, zipCodes: ["85340"], description: "Litchfield Park is a charming West Valley community with tree-lined streets. Mature landscaping attracts pests, and aging homes need expert HVAC and plumbing service.", services: PHX_SERVICES },
  { name: "Maricopa", slug: "maricopa-az", branch: "phoenix", population: "60K", county: "Pinal", lat: 33.0581, lng: -112.0476, zipCodes: ["85138","85139"], description: "Maricopa's master-planned communities in the Sonoran Desert need proactive pest control from move-in day. Bucksworth serves every Maricopa neighborhood with same-day availability.", services: PHX_SERVICES },
  { name: "Mesa", slug: "mesa-az", branch: "phoenix", population: "508K", county: "Maricopa", lat: 33.4152, lng: -111.8315, zipCodes: ["85201","85202","85203","85204","85205","85206","85207","85208","85209","85210"], description: "Mesa is Arizona's third-largest city with diverse neighborhoods from downtown to Red Mountain. Bucksworth provides comprehensive pest, HVAC, plumbing, and insulation services across all of Mesa.", services: PHX_SERVICES },
  { name: "Paradise Valley", slug: "paradise-valley-az", branch: "phoenix", population: "14K", county: "Maricopa", lat: 33.5312, lng: -111.9426, zipCodes: ["85253"], description: "Paradise Valley's luxury estates demand premium home services. Bucksworth provides discreet, professional pest control, HVAC maintenance, and plumbing for the Valley's most prestigious homes.", services: PHX_SERVICES },
  { name: "Peoria", slug: "peoria-az", branch: "phoenix", population: "195K", county: "Maricopa", lat: 33.5806, lng: -112.2374, zipCodes: ["85345","85381","85382","85383"], description: "Peoria stretches from the urban core to Lake Pleasant, with diverse pest challenges at every elevation. Bucksworth handles them all with expert service and local knowledge.", services: PHX_SERVICES },
  { name: "Phoenix", slug: "phoenix-az", branch: "phoenix", population: "1.6M", county: "Maricopa", lat: 33.4484, lng: -112.074, zipCodes: ["85001","85003","85004","85006","85007","85008","85009","85012","85013","85014","85015","85016","85017","85018","85019","85020","85021","85022","85023","85024","85028","85029","85031","85032","85033","85034","85035","85040","85041","85042","85043","85050","85051","85053","85054","85083","85085","85086","85087"], description: "Phoenix is the fifth-largest city in America and the heart of Bucksworth's service area. From downtown condos to North Phoenix estates, our technicians know every neighborhood's unique pest, HVAC, and plumbing challenges.", services: PHX_SERVICES },
  { name: "Queen Creek", slug: "queen-creek-az", branch: "phoenix", population: "78K", county: "Maricopa", lat: 33.2487, lng: -111.6343, zipCodes: ["85142","85140"], description: "Queen Creek's semi-rural setting at the edge of the Sonoran Desert brings unique pest challenges. Agricultural areas attract rodents, and new construction disturbs scorpion habitats.", services: PHX_SERVICES },
  { name: "San Tan Valley", slug: "san-tan-valley-az", branch: "phoenix", population: "110K", county: "Pinal", lat: 33.1928, lng: -111.5256, zipCodes: ["85140","85142","85143"], description: "San Tan Valley is one of Arizona's fastest-growing communities, expanding into raw desert. New homes need immediate pest barriers, and the desert environment demands efficient HVAC.", services: PHX_SERVICES },
  { name: "Scottsdale", slug: "scottsdale-az", branch: "phoenix", population: "241K", county: "Maricopa", lat: 33.4942, lng: -111.9261, zipCodes: ["85250","85251","85254","85255","85257","85258","85260","85262","85264","85266"], description: "Scottsdale's desert luxury homes face unique challenges from scorpions, roof rats, and extreme heat. Bucksworth provides premium pest control, HVAC, and plumbing throughout Scottsdale.", services: PHX_SERVICES },
  { name: "Surprise", slug: "surprise-az", branch: "phoenix", population: "152K", county: "Maricopa", lat: 33.6292, lng: -112.368, zipCodes: ["85374","85378","85379","85387","85388"], description: "Surprise's growing neighborhoods in the northwest Valley trust Bucksworth for complete home pest protection, energy-efficient HVAC, and reliable plumbing.", services: PHX_SERVICES },
  { name: "Tempe", slug: "tempe-az", branch: "phoenix", population: "185K", county: "Maricopa", lat: 33.4255, lng: -111.94, zipCodes: ["85281","85282","85283","85284"], description: "Tempe's mix of ASU campus housing, starter homes, and established neighborhoods all need reliable pest control and HVAC service. Bucksworth serves all of Tempe.", services: PHX_SERVICES },

  // ── TUCSON BRANCH (9) ────────────────────
  { name: "Catalina Foothills", slug: "catalina-foothills-az", branch: "tucson", population: "51K", county: "Pima", lat: 32.2992, lng: -110.9201, zipCodes: ["85718","85750"], description: "Catalina Foothills sits at the base of the Santa Catalina Mountains, where desert pests including scorpions, rattlesnakes, and packrats are common neighbors.", services: TUC_SERVICES },
  { name: "Green Valley", slug: "green-valley-az", branch: "tucson", population: "22K", county: "Pima", lat: 31.8543, lng: -110.9937, zipCodes: ["85614","85622"], description: "Green Valley is a retirement community south of Tucson where desert pests and weeds are persistent challenges. Bucksworth keeps Green Valley homes pest-free.", services: TUC_SERVICES },
  { name: "Marana", slug: "marana-az", branch: "tucson", population: "58K", county: "Pima", lat: 32.4367, lng: -111.2254, zipCodes: ["85653","85658"], description: "Marana's growth from agriculture to master-planned communities creates diverse pest challenges. Bucksworth provides expert pest control for every Marana neighborhood.", services: TUC_SERVICES },
  { name: "Oro Valley", slug: "oro-valley-az", branch: "tucson", population: "47K", county: "Pima", lat: 32.3909, lng: -110.9665, zipCodes: ["85737","85755"], description: "Oro Valley sits in the foothills of the Catalina Mountains, where desert wildlife and pests are part of daily life. Bucksworth keeps Oro Valley homes protected.", services: TUC_SERVICES },
  { name: "Red Rock", slug: "red-rock-az", branch: "tucson", population: "8K", county: "Pima", lat: 32.5751, lng: -111.3457, zipCodes: ["85745"], description: "Red Rock is a rural community northwest of Tucson where open desert means constant pest pressure. Bucksworth provides reliable pest and weed control.", services: TUC_SERVICES },
  { name: "Sahuarita", slug: "sahuarita-az", branch: "tucson", population: "37K", county: "Pima", lat: 31.9573, lng: -110.9559, zipCodes: ["85629"], description: "Sahuarita's growing community south of Tucson relies on Bucksworth for comprehensive pest control and weed management services.", services: TUC_SERVICES },
  { name: "Tucson", slug: "tucson-az", branch: "tucson", population: "546K", county: "Pima", lat: 32.2226, lng: -110.9747, zipCodes: ["85701","85705","85710","85711","85712","85713","85716","85719"], description: "Tucson is Arizona's second-largest city, surrounded by five mountain ranges and teeming with Sonoran Desert wildlife. Bucksworth provides expert pest control across the Tucson metro.", services: TUC_SERVICES },
  { name: "Vail", slug: "vail-az", branch: "tucson", population: "15K", county: "Pima", lat: 32.0498, lng: -110.7126, zipCodes: ["85641"], description: "Vail is a growing community southeast of Tucson where desert pests are a constant concern. Bucksworth keeps Vail families safe from scorpions, spiders, and rodents.", services: TUC_SERVICES },
  { name: "Valencia West", slug: "valencia-west-az", branch: "tucson", population: "12K", county: "Pima", lat: 32.149, lng: -111.076, zipCodes: ["85757"], description: "Valencia West is a Tucson suburb where new construction meets the desert. Bucksworth provides pest control and weed management to keep these communities pristine.", services: TUC_SERVICES },
];

/* ── Helper functions ── */

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getAllCities(): City[] {
  return CITIES;
}

export function getPhoenixCities(): City[] {
  return CITIES.filter((c) => c.branch === "phoenix").sort((a, b) => a.name.localeCompare(b.name));
}

export function getTucsonCities(): City[] {
  return CITIES.filter((c) => c.branch === "tucson").sort((a, b) => a.name.localeCompare(b.name));
}

export function getPhoneForBranch(branch: "phoenix" | "tucson"): string {
  return branch === "phoenix" ? PHX_PHONE : TUC_PHONE;
}

export function getPhoneForBranchRaw(branch: "phoenix" | "tucson"): string {
  return branch === "phoenix" ? "+14804228388" : "+15202849930";
}

export { PHX_PHONE, TUC_PHONE };
