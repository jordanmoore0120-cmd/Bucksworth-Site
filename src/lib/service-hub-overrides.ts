/* ──────────────────────────────────────────────
   service-hub-overrides.ts — Unique content for priority service hub pages
   
   When a city+service combo has an override, the service hub page
   uses custom meta, hero, intro content, and FAQs instead of generic
   templates. This allows deeply localized, keyword-optimized content
   for high-priority SEO pages.
   
   Key format: "{citySlug}/{serviceSlug}"
   ────────────────────────────────────────────── */

export interface ServiceHubContentBlock {
  heading: string;
  paragraphs: string[];
}

export interface ServiceHubOverride {
  metaTitle: string;
  metaDescription: string;
  heroHeadline?: string;
  heroDescription?: string;
  introContent: ServiceHubContentBlock[];
  faqs?: { q: string; a: string }[];
}

const OVERRIDES: Record<string, ServiceHubOverride> = {

  /* ═══════════════════════════════════════════════════════════════
     WEED CONTROL — GOODYEAR
     Priority: CRITICAL — blog #1 for "weed control Goodyear AZ"
     Competitors: EFF Bugs & Weeds (stagnant), AZ Weed King, Snyder's
     ═══════════════════════════════════════════════════════════════ */
  "goodyear-az/weed-and-lawn-care": {
    metaTitle: "Weed Control Goodyear AZ — #1 Rated Desert Yard Treatment | Bucksworth",
    metaDescription: "Professional weed control in Goodyear, AZ. Pre-emergent prevention, post-emergent treatment, and rock yard maintenance for Estrella, Palm Valley, Canyon Trails & Pebble Creek. Call (480) 422-8388.",
    heroHeadline: "Goodyear Weed Control — Desert Yard Specialists Since 2013",
    heroDescription: "Goodyear's explosive growth along the I-10 corridor means thousands of homes built directly on raw desert — and that desert fights back with relentless weed pressure year-round. Bucksworth Home Services provides professional weed control and lawn care for every Goodyear community, from Estrella Mountain Ranch to Palm Valley, Canyon Trails, and Pebble Creek. Licensed applicators, commercial-grade herbicides, and pre-emergent programs that actually prevent weeds instead of chasing them.",
    introContent: [
      {
        heading: "Weed Control Services in Goodyear, Maricopa County",
        paragraphs: [
          "Goodyear is one of the fastest-growing cities in Arizona, with its population surging past 105,000 residents across the 85338 and 85395 zip codes. That growth means new construction on previously undisturbed desert soil — soil packed with dormant weed seeds that activate the moment irrigation systems turn on. Spurge, puncturevine, Russian thistle, foxtail, and London Rocket don't care that your HOA requires a weed-free yard. Without professional pre-emergent treatment, these invasive species will overtake gravel landscaping within weeks of move-in.",
          "Bucksworth Home Services has been providing weed control in Goodyear since the city was a fraction of its current size. Our licensed technicians understand that weed pressure in Estrella Mountain Ranch (85338) — backed against the mountain with native desert vegetation on three sides — is fundamentally different from what Palm Valley homeowners deal with in 85395, where mature landscaping and irrigation create a different weed ecosystem entirely. We don't apply one-size-fits-all treatments. Every Goodyear yard gets a custom weed management plan based on its specific conditions.",
          "Need weed control in Goodyear today? Call (480) 422-8388 for a free yard assessment. We offer same-day and next-day appointments throughout Goodyear, Litchfield Park, Buckeye, and the entire West Valley.",
        ],
      },
      {
        heading: "Why Goodyear Has Unique Weed Challenges",
        paragraphs: [
          "Goodyear's weed problems are different from other Phoenix metro cities for several reasons. First, the city sits at the western edge of the Valley where the Sonoran Desert is less developed and more raw. Communities like Canyon Trails and Estrella Mountain Ranch were built directly into desert terrain, displacing native vegetation and exposing dormant seed banks. When homes are built and drip irrigation activates, those seeds get the water they need to germinate — and they germinate aggressively.",
          "Second, Goodyear's soil composition varies dramatically across the city. The 85338 zip code south of I-10 has rocky, caliche-heavy soil near the Estrella Mountains that drains differently than the sandier alluvial soil in Palm Valley (85395). This matters because pre-emergent herbicides behave differently in different soil types — what works in Palm Valley may underperform in Estrella without proper calibration. Our technicians are trained to assess soil type and adjust application rates accordingly.",
          "Third, the Loop 303 corridor and I-10 interchange create unique weed vectors. Highway rights-of-way are notorious weed sources — seeds travel on wind, water, and vehicle traffic from undeveloped desert directly into adjacent residential communities. Homes near the 303 in Surprise Farms, Canyon Trails, and the I-10/Bullard corridor see higher weed reinfestation rates and require more aggressive pre-emergent schedules.",
          "Finally, Goodyear's monsoon season (late June through September) triggers a second weed germination cycle that catches unprepared homeowners off guard. The spring pre-emergent barrier begins breaking down just as monsoon moisture arrives, creating a window where weeds like spurge and carpetweed explode across gravel yards. Bucksworth addresses this with a mid-summer booster application timed to the monsoon calendar — a step most competitors skip entirely.",
        ],
      },
      {
        heading: "Neighborhood-Specific Weed Control Across Goodyear",
        paragraphs: [
          "Estrella Mountain Ranch (85338) — Estrella is Goodyear's signature community, stretching from Estrella Mountain Regional Park southward across rolling desert terrain. The mountain proximity means constant weed seed migration from undeveloped desert into residential areas. Common weeds include globe mallow, devil's claw, and desert marigold alongside the typical spurge and puncturevine. Our Estrella Mountain Ranch weed program includes extended perimeter treatment along desert-facing property lines, aggressive pre-emergent barriers on gravel yards, and selective post-emergent treatment that preserves desired desert plantings while eliminating invasive species.",
          "Palm Valley (85395) — Palm Valley is one of Goodyear's most established communities, with mature landscaping including large palm trees, citrus groves, and turf lawns. The weed challenge here is different — Bermuda grass invasion in rock yards, nutgrass in turf areas, and broadleaf weeds in flower beds. Our Palm Valley weed service includes targeted Bermuda grass control using selective herbicides that won't damage surrounding plants, plus a year-round turf management program for homes with grass lawns.",
          "Canyon Trails (85338) — Canyon Trails is experiencing rapid growth on Goodyear's south side, where new construction exposes fresh desert soil. New homeowners often see their first weeds within 30 days of landscape installation. Our Canyon Trails program starts with an aggressive initial treatment to eliminate existing weeds, followed by quarterly pre-emergent applications that prevent new germination. We work with builders and HOAs to educate new Goodyear residents on the importance of proactive weed prevention.",
          "Pebble Creek (85395) — This active-adult community features golf courses, lakes, and common-area landscaping that create unique weed conditions. Moist areas around irrigation and water features promote broadleaf weeds and crabgrass, while desert-facing lots deal with typical Arizona weeds. Our Pebble Creek service addresses both environments with targeted treatments that protect established landscaping while eliminating invasive species throughout the community.",
        ],
      },
      {
        heading: "How Bucksworth Eliminates Weeds in Goodyear Yards",
        paragraphs: [
          "Every Goodyear weed control engagement begins with a free yard assessment. Your technician walks the entire property, identifies active weed species, assesses soil type and landscape conditions, checks irrigation patterns, and evaluates sun exposure. This assessment takes 15–20 minutes and results in a customized treatment plan — not a generic spray schedule.",
          "For gravel and rock yards — the most common landscape type in Goodyear — we apply a dual-barrier approach. First, a commercial-grade pre-emergent herbicide is applied to the soil surface and watered in, creating an invisible barrier that prevents weed seeds from germinating. This barrier lasts 3–4 months under normal conditions. Second, any existing weeds are treated with a post-emergent herbicide that kills them to the root within 7–14 days. The combination of prevention plus elimination gives Goodyear homeowners a clean yard that stays clean between service visits.",
          "For turf lawns in Palm Valley and other areas, our approach is different. We use selective herbicides that target broadleaf weeds without harming Bermuda grass or overseeded winter ryegrass. Combined with a fertilization program and proper mowing guidance, your Goodyear lawn stays thick, green, and naturally resistant to weed invasion.",
          "Bucksworth uses only commercial-grade herbicides not available in retail stores — products with higher active ingredient concentrations, longer residual effectiveness, and better performance in Arizona's extreme UV and heat conditions. All products are EPA-registered and safe for residential use when applied as directed. We recommend keeping children and pets off treated areas until the product dries (typically 30–60 minutes).",
        ],
      },
      {
        heading: "Weed Control Pricing and Plans for Goodyear Homeowners",
        paragraphs: [
          "Our Goodyear weed control plans are designed for the local climate and landscape types. Quarterly pre-emergent service for gravel yards starts at competitive rates and includes four seasonal applications plus unlimited callback treatments if weeds appear between visits. For homes with both gravel and turf areas, our comprehensive weed and lawn care plan covers everything — pre-emergent prevention, post-emergent treatment, fertilization, and seasonal overseeding guidance.",
          "Bundle and save: Goodyear homeowners who combine pest control and weed control into our Pest + Weed package typically save 20–30% compared to hiring separate companies. One company, one technician who knows your property, one service visit that covers your entire yard — inside and out. That's the Bucksworth advantage that over 2,000 Arizona families have chosen.",
          "No contracts required. We earn your business every visit. If you're not satisfied with any treatment in Goodyear, we come back and re-treat at no additional charge. Call (480) 422-8388 for pricing or request a free online estimate.",
        ],
      },
    ],
    faqs: [
      { q: "How much does weed control cost in Goodyear, AZ?", a: "Weed control plans for Goodyear homes start at affordable monthly rates depending on yard size and landscape type. Gravel-only yards are typically less than mixed gravel/turf properties. We offer a free yard assessment and transparent pricing before any work begins. Call (480) 422-8388 for a custom quote." },
      { q: "How often do I need weed control in Goodyear?", a: "We recommend quarterly pre-emergent applications for most Goodyear yards — once in early fall, late winter, late spring, and mid-summer (monsoon booster). Homes near the desert edge in Estrella Mountain Ranch or Canyon Trails may benefit from bi-monthly service during peak weed seasons. Our assessment determines the right schedule for your property." },
      { q: "What weeds are most common in Goodyear, AZ?", a: "The most common Goodyear weeds include spurge, puncturevine (goat heads), Russian thistle (tumbleweeds), foxtail, London Rocket, and Bermuda grass invasion in rock yards. Near the Estrella Mountains, you'll also see globe mallow and devil's claw. Each species requires a different treatment approach, which is why professional identification matters." },
      { q: "Can you treat weeds in gravel yards without damaging the rock?", a: "Absolutely. Our pre-emergent and post-emergent products are designed for gravel and rock landscaping. They target weeds specifically and do not stain or damage decorative rock, pavers, or concrete. Gravel yards are actually our most common service type in Goodyear — we treat thousands of them across the West Valley." },
      { q: "Do you serve all Goodyear neighborhoods?", a: "Yes. We serve every Goodyear neighborhood including Estrella Mountain Ranch, Palm Valley, Canyon Trails, Pebble Creek, CantaMia, Estrella, and all communities in the 85338 and 85395 zip codes. Same-day and next-day appointments are available." },
      { q: "Is your weed control safe for pets and children?", a: "Yes. We use EPA-registered herbicides applied by licensed technicians. We recommend keeping pets and children off treated areas until the product dries — typically 30–60 minutes. All products used on Goodyear residential properties are labeled safe for residential use." },
      { q: "What's the difference between pre-emergent and post-emergent weed control?", a: "Pre-emergent herbicides prevent weed seeds from germinating — they create an invisible barrier in the soil. Post-emergent herbicides kill weeds that have already sprouted by targeting them at the root. Effective weed control in Goodyear uses both: pre-emergent for prevention, post-emergent for any breakthrough weeds." },
      { q: "Why do my weeds keep coming back after I pull them?", a: "Hand-pulling weeds removes the visible plant but often leaves the root system intact. Many Arizona weeds regenerate from root fragments left in the soil. Professional herbicide treatment kills weeds to the root, and pre-emergent barriers prevent new seeds from germinating — breaking the cycle that manual pulling cannot." },
    ],
  },


  /* ═══════════════════════════════════════════════════════════════
     WEED CONTROL — SURPRISE
     Priority: HIGH — no competitor dedicated page. First mover advantage.
     Competitors: Greenleaf (PHX dominant), Patrick's Home Solutions, EFF
     ═══════════════════════════════════════════════════════════════ */
  "surprise-az/weed-and-lawn-care": {
    metaTitle: "Weed Control Surprise AZ — Pre-Emergent & Desert Yard Pros | Bucksworth",
    metaDescription: "Professional weed control in Surprise, AZ. Pre-emergent prevention, post-emergent treatment, and gravel yard maintenance for Surprise Farms, Marley Park, Sun City Grand & Asante. Call (480) 422-8388.",
    heroHeadline: "Surprise Weed Control — Pre-Emergent Experts for Desert Yards",
    heroDescription: "Surprise is the fastest-growing community in the northwest Valley, with new construction pushing deeper into raw Sonoran Desert every year. That growth creates intense weed pressure — from puncturevine in Surprise Farms to Bermuda grass invasion in Sun City Grand's established landscapes. Bucksworth Home Services delivers professional weed control across all Surprise neighborhoods with licensed applicators, commercial-grade pre-emergent barriers, and targeted post-emergent treatments.",
    introContent: [
      {
        heading: "Weed Control Services in Surprise, Maricopa County",
        paragraphs: [
          "Surprise has grown to over 152,000 residents across five zip codes (85374, 85378, 85379, 85387, 85388), making it one of the largest cities in the northwest Phoenix metro. The city's rapid expansion means entire neighborhoods are built on former desert and agricultural land — both of which contain massive dormant weed seed banks. When irrigation activates in a new community, those seeds germinate aggressively, overwhelming homeowners who expected their gravel landscape to stay clean.",
          "Bucksworth Home Services has provided weed control throughout Surprise since the city was a fraction of its current size. Our licensed technicians understand that weed pressure in Asante (85387) — sitting right at the desert's edge west of the Loop 303 — is fundamentally different from what Sun City Grand homeowners face in 85374, where decades of established landscaping creates its own set of weed challenges. We customize every treatment plan to match each Surprise yard's specific conditions, soil type, and landscape design.",
          "Ready for a weed-free yard in Surprise? Call (480) 422-8388 for a free yard assessment. Same-day and next-day appointments available throughout Surprise, Sun City, Sun City West, and the northwest Valley.",
        ],
      },
      {
        heading: "Why Surprise Yards Face Constant Weed Pressure",
        paragraphs: [
          "Surprise sits at the interface of the Phoenix urban area and the open Sonoran Desert. To the west and north, undeveloped desert stretches toward White Tank Mountain Regional Park and beyond. This geography creates a constant supply of windborne weed seeds — seeds that don't stop at community walls. Every major wind event, dust storm, or monsoon rain carries new weed seeds from the desert directly into Surprise residential areas, particularly in communities like Desert Oasis and Asante that border open desert.",
          "The former agricultural land underlying parts of Surprise adds another weed vector. Surprise Farms and portions of the 85388 zip code were once irrigated farmland — and agricultural soil carries deep reserves of Bermuda grass rhizomes, Johnson grass, and broadleaf weed seeds that can remain viable for decades. When these old farm fields become residential communities, the transition creates intense weed pressure during the first several years until pre-emergent programs establish control.",
          "Surprise's community layout also matters. The Loop 303 runs through the heart of Surprise, and highway corridors are notorious weed highways. ADOT right-of-way vegetation management is inconsistent, meaning weeds along the 303 produce billions of seeds annually that spread into adjacent neighborhoods. Homes within a quarter mile of the 303 in Marley Park, Surprise Farms, and nearby communities consistently see higher weed reinfestation rates than homes further from the highway.",
          "Finally, Surprise's HOA landscape standards are among the strictest in the Valley. Most Surprise HOAs require weed-free gravel yards and can issue fines starting at $25 for first violations and escalating to $100+ for repeat offenses. Homeowners who rely on hand-pulling or store-bought herbicides often fall behind the weed cycle and face mounting fines. Professional pre-emergent programs prevent the problem entirely.",
        ],
      },
      {
        heading: "Neighborhood-Level Weed Treatment Across Surprise",
        paragraphs: [
          "Surprise Farms (85388) — Built on former agricultural land east of the 303, Surprise Farms deals with a unique mix of farm-legacy weeds and desert-native species. Bermuda grass rhizomes from the old farm fields invade gravel yards from below, making surface-only treatments ineffective. Our Surprise Farms weed program includes deep-penetrating pre-emergent applications that reach the soil layer where rhizomes reside, combined with selective Bermuda grass control for yards where grass has already established in gravel. This is one of the trickiest weed scenarios in the Valley, and it requires local expertise to manage correctly.",
          "Marley Park (85379) — Marley Park's award-winning design includes extensive parks, green spaces, and community landscaping that create a mixed weed environment. Home yards may have turf, gravel, or both, and each requires different treatment. Our Marley Park service includes a yard-by-yard assessment to determine the right herbicide type and application rate for each zone. We also coordinate with the HOA when community weed pressure impacts individual home treatments.",
          "Sun City Grand (85374) — This active-adult community has mature landscaping, established trees, and irrigated common areas that create weed conditions more similar to older Valley communities than new construction. Common weeds include Bermuda grass in rock beds, broadleaf weeds in turf areas, and spurge in gravel spaces between homes. Our Sun City Grand program is tailored for established landscaping — using selective herbicides that protect desired plants while eliminating invasive species.",
          "Asante & Northwest Surprise (85387) — Asante sits at the desert's edge in northwest Surprise, where undeveloped desert terrain is literally across the street from residential lots. This creates the highest weed seed influx rate of any Surprise community. Our Asante protocol includes extended perimeter treatment along desert-facing property lines and more frequent pre-emergent applications (bi-monthly during peak seasons) to compensate for the constant seed pressure from adjacent desert.",
        ],
      },
      {
        heading: "Bucksworth's Weed Control Process for Surprise Homes",
        paragraphs: [
          "Step 1 — Free Yard Assessment: Your licensed technician inspects the entire property, identifies active weed species and soil type, evaluates landscape design (gravel, turf, or mixed), checks irrigation patterns, and assesses weed seed sources from adjacent properties or desert. This 15–20 minute assessment is free and includes a written treatment recommendation.",
          "Step 2 — Initial Treatment: For yards with existing weeds, we apply a targeted post-emergent herbicide that kills active weeds to the root within 7–14 days. We identify each weed species and select the appropriate product — broadleaf herbicides for dicots, grass-selective herbicides for invasive Bermuda or Johnson grass, and non-selective herbicides for gravel-only areas. Dead weeds are left in place to break down naturally (removal risks disturbing the pre-emergent barrier applied in the next step).",
          "Step 3 — Pre-Emergent Barrier: Once active weeds are eliminated, we apply a commercial-grade pre-emergent herbicide across the entire treatment area. This product creates an invisible barrier in the top layer of soil that prevents weed seeds from germinating for 3–4 months. In Surprise's high-pressure areas (Asante, Surprise Farms), we may recommend a split application — half rate now, half rate in 6 weeks — for extended protection.",
          "Step 4 — Ongoing Maintenance: Quarterly service visits maintain the pre-emergent barrier year-round, with seasonal adjustments for Arizona's two weed seasons (winter weeds October–March, summer weeds April–September). Between visits, if any weeds appear, our satisfaction guarantee means we come back and retreat at no extra charge.",
        ],
      },
      {
        heading: "Bundle Weed & Pest Control in Surprise — One Company, One Visit",
        paragraphs: [
          "Most Surprise homeowners need both pest control and weed control. Instead of hiring two separate companies — with two separate schedules, two trucks in your driveway, and two invoices — Bucksworth handles both in a single service visit. Our Pest + Weed package combines perimeter pest treatment (scorpions, ants, roaches, spiders) with weed control (pre-emergent plus targeted post-emergent) at a bundled rate that saves 20–30% compared to separate services.",
          "One technician who knows your Surprise property, your specific weed and pest challenges, and your landscape — that's the Bucksworth advantage. Over 2,000 Arizona families have chosen Bucksworth for integrated home protection, and our 4.9-star rating with nearly 2,000 Google reviews speaks to the quality of our work. No contracts required. Call (480) 422-8388 to get started.",
        ],
      },
    ],
    faqs: [
      { q: "How much does weed control cost in Surprise, AZ?", a: "Weed control in Surprise starts at affordable monthly rates based on yard size and landscape type. Gravel-only yards in Marley Park or Sun City Grand are typically less than mixed turf/gravel properties. We provide transparent pricing after a free yard assessment — no hidden fees. Call (480) 422-8388 for a quote." },
      { q: "How often should I get weed treatment in Surprise?", a: "We recommend quarterly pre-emergent applications for most Surprise yards. Homes near the desert edge in Asante or northwest Surprise may benefit from bi-monthly service during peak weed seasons (March–May and July–September). Your free assessment determines the optimal schedule." },
      { q: "What are the worst weeds in Surprise, AZ?", a: "The most common weeds in Surprise include spurge, puncturevine (goat heads), Russian thistle (tumbleweeds), London Rocket, foxtail, and Bermuda grass invasion in gravel yards. Surprise Farms properties also deal with Johnson grass and broadleaf weeds from the area's agricultural history." },
      { q: "Can you stop Bermuda grass from invading my gravel yard?", a: "Yes. Bermuda grass invasion is one of the most common weed complaints in Surprise, especially in established communities like Sun City Grand and Palm Valley. We use selective grass-killing herbicides combined with deep pre-emergent applications that target Bermuda grass rhizomes below the gravel surface. Results typically show significant improvement within 2–3 treatment cycles." },
      { q: "Do you work with Surprise HOAs?", a: "Yes. Many Surprise HOAs refer homeowners to Bucksworth for weed control, and we provide documentation of treatments for HOA compliance records. We also work directly with HOA management companies for community-wide weed programs. Our service helps you avoid HOA fines by keeping your yard consistently weed-free." },
      { q: "Is your weed treatment safe for pets playing in the yard?", a: "Yes. All products are EPA-registered and labeled safe for residential use. We recommend keeping pets off treated areas until the product dries — typically 30–60 minutes in Surprise's dry heat. Once dry, the product bonds to the soil surface and poses no risk to pets or children." },
      { q: "What's the best time of year to start weed control in Surprise?", a: "The best time is September–October for fall pre-emergent, but any time is a good time to start. If weeds are already present, we eliminate them first with post-emergent treatment, then establish the pre-emergent barrier. The goal is to break the weed cycle — the sooner you start, the fewer weeds you'll deal with going forward." },
    ],
  },


  /* ═══════════════════════════════════════════════════════════════
     WEED CONTROL — PEORIA
     Priority: HIGH — Custom Weed & Spray (tiny local), Snyder's (metro-wide)
     Easy competitive win with dedicated content.
     ═══════════════════════════════════════════════════════════════ */
  "peoria-az/weed-and-lawn-care": {
    metaTitle: "Weed Control Peoria AZ — Pre-Emergent & Lawn Care Experts | Bucksworth",
    metaDescription: "Professional weed control in Peoria, AZ. Pre-emergent prevention, gravel yard maintenance, and Bermuda lawn care for Vistancia, Westwing, Old Town & Terramar. Call (480) 422-8388.",
    heroHeadline: "Peoria Weed Control — From Lake Pleasant to Old Town, We Keep Yards Clean",
    heroDescription: "Peoria stretches from the established neighborhoods of Old Town Peoria at 83rd Avenue all the way north to the desert foothills near Lake Pleasant — a range of terrain, soil types, and weed challenges that no generic spray-and-pray service can handle. Bucksworth Home Services provides expert weed control across every Peoria community with licensed applicators, neighborhood-specific treatment plans, and pre-emergent programs that prevent weeds before they germinate.",
    introContent: [
      {
        heading: "Weed Control Services in Peoria, Maricopa County",
        paragraphs: [
          "Peoria is one of the most geographically diverse cities in the Phoenix metro, spanning from the Agua Fria River corridor in the south to the desert foothills near Lake Pleasant in the north. That diversity creates dramatically different weed challenges across the city's 195,000 residents and four zip codes (85345, 85381, 85382, 85383). Old Town Peoria (85345) has older homes with mature landscaping where Bermuda grass invasion and broadleaf weeds dominate. North Peoria's Vistancia and Westwing Mountain communities (85383) border raw desert where wind-carried seeds create constant pressure. One weed treatment program doesn't fit all of Peoria — and Bucksworth is the company that understands why.",
          "Since 2013, Bucksworth Home Services has provided professional weed control to Peoria homeowners who demand more than a monthly spray from a truck. Our licensed technicians live and work in the communities they serve, understand Peoria's microclimates, and customize every treatment to match your yard's specific conditions. Whether you need a gravel yard maintained weed-free in Westwing Mountain, Bermuda grass lawn care in Terramar, or aggressive weed cleanup for an HOA violation in Vistancia, we handle it all.",
          "Call (480) 422-8388 for a free Peoria yard assessment. Same-day and next-day appointments available throughout Peoria, Glendale, Sun City, and the northwest Valley.",
        ],
      },
      {
        heading: "Peoria's Geographic Weed Zones — Why Location Matters",
        paragraphs: [
          "Peoria is effectively two different cities from a weed control perspective. South Peoria (85345, 85381) is urban, flat, and established. Homes built in the 1970s–1990s have mature landscaping, deep-rooted trees, and irrigation systems that have been running for decades. The weed challenges here are primarily Bermuda grass rhizome invasion in rock yards, nutgrass in turf areas, and broadleaf weeds (spurge, mallow, pigweed) in beds and gravel. These weeds are entrenched and require sustained treatment to control — a single application won't touch root systems that have been building for years.",
          "North Peoria (85382, 85383) is newer, hillier, and borders the Sonoran Desert. Vistancia was built starting in the early 2000s and is still expanding. Westwing Mountain sits in the literal foothills with natural desert on multiple sides. Lake Pleasant Heights borders one of the Valley's largest recreational areas. Weed challenges here are predominantly desert-native species — spurge, puncturevine, Russian thistle, foxtail, and desert marigold — carried by wind from surrounding undeveloped terrain. New construction in these areas exposes fresh soil and activates dormant seed banks, creating explosive weed growth in the first years after development.",
          "The transition zone in central Peoria (85382) — Terramar and surrounding communities — sits between these extremes. Homes are typically 10–20 years old, landscaping is established but not yet mature, and weed pressure comes from both desert seed drift and established root systems. Our central Peoria treatments calibrate between the two approaches, using both selective and non-selective products depending on the specific yard conditions.",
        ],
      },
      {
        heading: "Neighborhood-Specific Weed Management Across Peoria",
        paragraphs: [
          "Vistancia (85383) — Peoria's premier master-planned community near Lake Pleasant features thousands of homes with gravel-dominant landscaping, desert-edge lots, and strict HOA standards. Vistancia's elevation (slightly higher than central Peoria) and proximity to open desert create above-average weed seed influx. Our Vistancia weed program includes quarterly pre-emergent applications with a mid-summer monsoon booster, extended perimeter treatment for desert-facing properties, and coordination with HOA landscape standards. We serve hundreds of Vistancia homes and maintain relationships with community management for compliance documentation.",
          "Westwing Mountain (85383) — Built into the desert foothills northwest of the Loop 303, Westwing Mountain homes deal with displaced desert vegetation and rocky terrain that makes weed control more complex. Standard spray-and-go applications miss the crevices and rock formations where weed seeds collect. Our Westwing Mountain service includes hand-targeted treatment of rock crevice areas, aggressive perimeter barriers along desert-facing lot lines, and seasonal monitoring for desert species that generic pest-and-weed companies don't recognize.",
          "Old Town Peoria (85345) — Peoria's original neighborhood core around 83rd Avenue has older homes, established trees, and irrigation patterns that have been running for decades. The primary weed challenge is Bermuda grass that has invaded gravel landscaping from turf areas, cracks in driveways, and neighboring properties. Bermuda grass is one of the most difficult weeds to control in Arizona because it spreads through underground rhizomes, above-ground stolons, and seeds simultaneously. Our Old Town Peoria Bermuda control program uses a multi-season approach: grass-selective herbicide to weaken established plants, deep pre-emergent to block rhizome spread, and follow-up treatments to exhaust root reserves. Full control typically takes 2–3 treatment cycles.",
          "Terramar (85382) — Central Peoria's Terramar community has mature landscaping with a mix of gravel, turf, and desert plantings. Weed pressure is moderate compared to desert-edge communities but consistent year-round due to established irrigation. Our Terramar service focuses on maintaining clean gravel areas, preventing weed encroachment from common areas, and providing turf weed-and-feed programs for lawns. We serve Terramar with quarterly visits and unlimited callback treatments between visits.",
        ],
      },
      {
        heading: "Bucksworth's Weed Control Approach for Peoria Properties",
        paragraphs: [
          "Assessment First, Spray Second: Every Peoria engagement starts with a free yard assessment. We identify weed species, evaluate soil composition, map sun exposure and irrigation patterns, and assess weed seed sources from adjacent properties or desert terrain. This information drives a customized treatment plan — not a generic quarterly spray that treats every Peoria yard identically.",
          "Commercial-Grade Products: We use professional herbicides with higher active ingredient concentrations and longer residual effectiveness than retail products. In Peoria's extreme UV and heat (regularly exceeding 115°F in summer), standard consumer products break down in weeks. Our commercial formulations maintain barrier effectiveness for 3–4 months, even through Arizona's most intense conditions. All products are EPA-registered and safe for residential use.",
          "Year-Round Scheduling: Arizona has two weed seasons — winter annuals (October–March: London Rocket, Sahara mustard, filaree) and summer annuals (April–September: spurge, puncturevine, carpetweed). Our Peoria program addresses both with strategically timed pre-emergent applications in September and February, plus mid-summer monsoon boosters for high-pressure properties in Vistancia and Westwing Mountain.",
          "Satisfaction Guarantee: If weeds appear between scheduled visits anywhere in Peoria, we return and retreat at no additional charge. No excuses, no extra fees. Our goal is a consistently weed-free yard — not just clean on treatment day.",
        ],
      },
      {
        heading: "Pest + Weed Bundles for Peoria — Save Time and Money",
        paragraphs: [
          "Most Peoria homeowners need both pest control (scorpions, ants, roaches, spiders) and weed control. Bucksworth's Pest + Weed bundle combines both services into a single monthly visit, saving 20–30% compared to hiring separate pest and weed companies. One truck, one technician who knows your specific property, one invoice — and a yard that's pest-free and weed-free.",
          "Over 2,000 Arizona families trust Bucksworth for integrated home protection, and our 4.9-star Google rating with nearly 2,000 reviews reflects the quality our Peoria customers experience. No long-term contracts. No high-pressure sales. Just honest, effective service from a family-owned company that treats your home like it's our Gigi's. Call (480) 422-8388 to schedule your free assessment.",
        ],
      },
    ],
    faqs: [
      { q: "How much does weed control cost in Peoria, AZ?", a: "Weed control plans for Peoria homes start at affordable monthly rates based on yard size and landscape type. Rock-only yards in Vistancia are priced differently than mixed turf/gravel properties in Old Town Peoria. We provide a free yard assessment with transparent pricing — no hidden fees, no surprises. Call (480) 422-8388." },
      { q: "How often should Peoria yards get weed treatment?", a: "We recommend quarterly pre-emergent applications for most Peoria homes — timed for Arizona's two weed seasons. Desert-edge properties in Vistancia and Westwing Mountain may benefit from bi-monthly service during peak seasons (March–May and July–September). Your free assessment determines the right schedule." },
      { q: "What are the most common weeds in Peoria?", a: "The most common Peoria weeds include spurge, puncturevine (goat heads), Russian thistle, London Rocket, foxtail, and Bermuda grass invasion in rock yards. In Old Town Peoria (85345), Bermuda grass is the dominant problem. In North Peoria (85383), desert-native species from Vistancia and Westwing Mountain areas are more prevalent." },
      { q: "Can you get rid of Bermuda grass in gravel yards?", a: "Yes, but it takes a multi-season approach. Bermuda grass spreads through underground rhizomes, making single treatments ineffective. Our program uses grass-selective herbicides to weaken existing plants, deep pre-emergent to block rhizome spread, and follow-up treatments to exhaust root reserves. Significant improvement typically shows within 2–3 treatment cycles." },
      { q: "Do you serve all Peoria zip codes?", a: "Yes. We serve all Peoria communities across 85345, 85381, 85382, and 85383 including Vistancia, Westwing Mountain, Old Town Peoria, Terramar, Lake Pleasant Heights, and all surrounding neighborhoods. Same-day and next-day appointments available." },
      { q: "Is weed control safe for my pets?", a: "Yes. We use EPA-registered herbicides applied by licensed technicians. Products are safe for residential use — we recommend keeping pets off treated areas until dry (about 30–60 minutes in Peoria's dry heat). Once dry, products bond to soil and are not a risk to pets or children." },
      { q: "What's the difference between your service and a big-box store spray?", a: "Three critical differences: concentration (our products have 3–5x higher active ingredient levels), residual time (ours last 3–4 months vs. weeks for retail), and expertise (our licensed technicians identify weed species and calibrate treatment to your specific soil and landscape). In Peoria's extreme heat and UV, consumer products break down much faster than commercial formulations." },
      { q: "Why do I need pre-emergent if I already pull weeds regularly?", a: "Hand-pulling removes visible weeds but doesn't prevent the next generation of seeds from germinating. Arizona desert soil contains millions of viable weed seeds per acre. Pre-emergent herbicides create a barrier that stops those seeds from sprouting — breaking the cycle that manual pulling cannot. Most Peoria homeowners who switch from pulling to pre-emergent programs see 90%+ weed reduction within two application cycles." },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     PEST & TERMITE — MARANA
     Priority: HIGH — pos 16.8, 200 imp, 1 clk (Jun 19-25)
     Competitors: Bug King, Truly Nolen, AZ Pest Solutions
     ═══════════════════════════════════════════════════════════════ */
  "marana-az/pest-and-termite": {
    metaTitle: "Marana Pest & Termite Control — Scorpion, Termite & Rodent Experts | Bucksworth",
    metaDescription: "Licensed pest control and termite treatment in Marana, AZ. Serving Continental Ranch, Dove Mountain & Gladden Farms. Scorpion removal, termite inspections, and rodent exclusion. Call (520) 284-9930.",
    heroHeadline: "Marana Pest & Termite Control — Desert-Edge Protection Since 2013",
    heroDescription: "Marana sits at the northwest edge of the Tucson metro where new construction meets undisturbed Sonoran Desert. This creates intense pest pressure from scorpions, termites, and rodents migrating from desert washes into Continental Ranch, Dove Mountain, Gladden Farms, and Tortolita communities. Bucksworth provides comprehensive pest and termite protection calibrated to Marana's unique geography.",
    introContent: [
      {
        heading: "Pest & Termite Services in Marana, Pima County",
        paragraphs: [
          "Marana's rapid growth along I-10 and Tangerine Road means thousands of homes built on former desert habitat where scorpions, bark scorpions, termites, and pack rats already established colonies. The Tortolita Mountains to the east and Santa Cruz River corridor to the west funnel pest populations directly into residential communities. Bucksworth technicians understand that Continental Ranch (85653) has fundamentally different pest patterns than the foothills homes of Dove Mountain (85658).",
          "Our Marana pest control covers all common desert pests including bark scorpions, subterranean termites, black widows, roof rats, pack rats, ants, and roaches. Every service includes a full property inspection, targeted treatment, and a protection plan that accounts for seasonal migration patterns. Same-day and next-day service available across all Marana zip codes.",
          "Need pest control in Marana today? Call (520) 284-9930 for a free inspection. Licensed, bonded, and Google Guaranteed.",
        ],
      },
      {
        heading: "Why Marana Has Severe Pest Pressure",
        paragraphs: [
          "Three factors make Marana one of the most pest-active cities in the Tucson metro. First, desert-edge construction: communities like Gladden Farms and Tortolita Preserve are built directly adjacent to undeveloped Sonoran Desert, creating a constant migration corridor for scorpions, rodents, and snakes seeking water and shelter in irrigated yards.",
          "Second, the Santa Cruz River wash runs along Marana's western edge. Even when dry, this wash serves as a superhighway for rodents, roaches, and termites moving between desert habitat and residential neighborhoods. Homes near Ina Road and Silverbell are particularly vulnerable.",
          "Third, Marana's new construction boom means many homes are less than 10 years old with fresh landscaping that attracts pests seeking moisture. Drip irrigation systems, newly planted trees, and mulch beds create microhabitats that scorpions and termites exploit — especially during monsoon season.",
        ],
      },
    ],
    faqs: [
      { q: "How much does pest control cost in Marana?", a: "Monthly pest control plans for Marana homes start at affordable rates based on home size and pest pressure level. Homes in Continental Ranch typically need standard service, while desert-edge properties in Dove Mountain may need enhanced treatment. Free inspection included. Call (520) 284-9930." },
      { q: "Do you do termite inspections in Marana?", a: "Yes. We provide free termite inspections for all Marana properties. Subterranean termites are the primary species in the Marana area, and we offer both liquid barrier and bait station treatment options with warranty protection." },
      { q: "What zip codes do you serve in Marana?", a: "We serve all Marana zip codes including 85653, 85658, and 85743. Coverage includes Continental Ranch, Dove Mountain, Gladden Farms, Tortolita, Saguaro Bloom, and all surrounding communities." },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     WEED CONTROL — MARANA
     Priority: HIGH — Zero dominant competitor, fragmented SERP
     Competitors: Hunter Pest, John Officer Custom Weed (tiny locals)
     ═══════════════════════════════════════════════════════════════ */
  "marana-az/weed-and-lawn-care": {
    metaTitle: "Weed Control Marana AZ — Pre-Emergent & Post-Emergent Treatment | Bucksworth",
    metaDescription: "Professional weed control in Marana, AZ. Pre-emergent barriers, post-emergent treatment, and rock yard maintenance for Continental Ranch, Dove Mountain, Gladden Farms & Saguaro Ranch. Call (520) 284-9930.",
    heroHeadline: "Marana Weed Control — Desert Landscape Specialists",
    heroDescription: "Marana's rapid expansion northwest of Tucson pushes master-planned communities directly into raw Sonoran Desert — where dormant weed seeds sit waiting for irrigation to trigger explosive growth. Bucksworth Home Services provides professional weed control for every Marana neighborhood, from Continental Ranch and Dove Mountain to Gladden Farms and Saguaro Ranch. Licensed applicators, commercial-grade herbicides, and year-round programs that keep your yard clean.",
    introContent: [
      {
        heading: "Weed Control Services in Marana, Pima County",
        paragraphs: [
          "Marana stretches from the Tortolita Mountain foothills through broad desert flats northwest of Tucson, spanning zip codes 85653 and 85658. The town's population has more than tripled over the past two decades, with developments like Continental Ranch, Dove Mountain, Gladden Farms, and Saguaro Ranch converting thousands of acres of native Sonoran Desert into residential neighborhoods. That conversion exposes seed banks that have been dormant for years — and when homeowners install drip irrigation or the monsoon season arrives, those seeds germinate into thick stands of spurge, Russian thistle, foxtail, London Rocket, and puncturevine.",
          "Bucksworth Home Services already protects hundreds of Marana homes from scorpions and termites, and our weed control program uses the same neighborhood-specific approach. We know that Dove Mountain properties in 85658, perched in the Tortolita foothills, face different weed pressure than Gladden Farms homes on the flatter western corridor. Rock yards at Continental Ranch develop distinct weed patterns compared to irrigated turf in newer Saguaro Ranch sections. Every Marana yard gets a custom treatment plan based on its landscape type, soil conditions, and weed species.",
          "Need weed control in Marana today? Call (520) 284-9930 for a free yard assessment. Same-day and next-day appointments available across Marana, Oro Valley, and the entire northwest Tucson metro.",
        ],
      },
      {
        heading: "Why Marana Yards Face Relentless Weed Pressure",
        paragraphs: [
          "Three factors make Marana one of the hardest places in southern Arizona to keep weed-free. First, construction activity: when builders grade raw desert for new subdivisions, they churn up decades of dormant seed deposits. Continental Ranch alone covers over 1,800 acres of former desert, and every lot that was scraped released weed seeds into the disturbed soil. Second, Marana's elevation (about 2,000 feet) puts it in a transition zone between low desert and semi-grassland, so homeowners battle both typical desert weeds like spurge and buffelgrass AND cooler-season grasses that thrive after winter rains.",
          "Third — and this is critical — Marana's agricultural history means certain weed species are already established in the soil. Cotton farming, pecan orchards, and cattle ranching left behind nutrient-rich topsoil laced with pigweed, amaranth, and Johnson grass seeds. When residential irrigation hits that soil, the result is aggressive, fast-growing weeds that standard retail herbicides can't control. Professional pre-emergent barriers applied on the right seasonal schedule are the only reliable prevention.",
          "Bucksworth's Marana weed program addresses all three factors with a layered treatment approach: pre-emergent barriers applied before each germination season, targeted post-emergent herbicides for any breakthrough, and soil sterilant options for hardscape areas where zero vegetation is the goal.",
        ],
      },
      {
        heading: "Marana Neighborhood Weed Guide",
        paragraphs: [
          "Continental Ranch (85653) — Marana's largest master-planned community borders desert washes on multiple sides, creating constant weed migration from undeveloped areas into yards. The most common invaders are spurge (flat-growing, milky-sap weed that spreads rapidly across gravel), puncturevine (painful thorns that pop tires and injure pets), and Russian thistle (tumbleweeds that pile against fences and block walls). Continental Ranch homes with rock landscaping need quarterly pre-emergent applications to maintain HOA compliance.",
          "Dove Mountain (85658) — Nestled in the Tortolita Mountain foothills, Dove Mountain properties sit at higher elevation with rockier, less-disturbed soil. Weed pressure here is seasonal — relatively quiet in winter, then explosive during monsoon (July-September) when summer storms dump moisture on warm soil. Brittlebush, globe chamomile, and foxtail barley dominate. The rocky terrain also means weed seeds collect in crevices and drainage channels, requiring targeted hand treatment in addition to broadcast spraying.",
          "Gladden Farms (85653) — Located on Marana's western growth corridor, Gladden Farms is newer construction where builders used topsoil from agricultural areas as fill. That imported soil carries pigweed and amaranth seeds that produce tall, fast-growing weeds capable of reaching three feet within weeks of germination. Pre-emergent timing is critical here: miss the fall window, and winter annual weeds will take over entire yards by January.",
          "Saguaro Ranch (85653) — One of Marana's newer developments with a mix of rock and turf landscaping. Newer yards actually face MORE weed pressure initially because the landscaping hasn't established root systems dense enough to compete with weeds. Our new-construction weed program provides intensive quarterly treatment for the first two years, then transitions to a standard maintenance schedule.",
        ],
      },
      {
        heading: "Pre-Emergent vs Post-Emergent: What Marana Homeowners Need",
        paragraphs: [
          "Pre-emergent herbicides work by creating a chemical barrier in the top inch of soil that prevents weed seeds from germinating. In Marana's climate, you need two primary pre-emergent applications per year: one in September/October before winter annuals germinate, and one in February/March before summer annuals and grasses take hold. Timing these applications within a two-week window is critical — too early and the product degrades before germination season, too late and weeds are already sprouting.",
          "Post-emergent herbicides kill weeds that have already germinated and are actively growing. Bucksworth uses selective post-emergents for turf areas (kills weeds without harming grass) and non-selective treatments for rock yards and hardscapes. We also use systemic herbicides for deep-rooted perennial weeds like bermuda grass and Johnson grass that surface sprays can't kill — the product travels through the plant's vascular system to destroy the root network.",
          "For most Marana homes with rock landscaping, we recommend a combined program: pre-emergent barriers twice yearly plus as-needed post-emergent spot treatments. For homes with turf, we integrate weed control into a full lawn fertilization and weed-and-feed schedule that keeps grass healthy enough to outcompete weeds naturally.",
        ],
      },
      {
        heading: "Marana Weed Control Pricing & Service Plans",
        paragraphs: [
          "Bucksworth offers three weed control plans for Marana homeowners. Our Basic Rock Yard Program includes quarterly pre-emergent applications and one post-emergent cleanup per year — ideal for standard-size gravel lots under 5,000 square feet. Our Full Protection Plan adds monthly spot treatments, unlimited service calls for weed breakthrough, and bermuda grass suppression for rock yards adjacent to irrigated areas. For properties with turf, our Weed & Feed Program combines weed control with seasonal fertilization and overseeding support.",
          "All plans include a free initial yard assessment where our technician identifies existing weed species, evaluates soil conditions, and photographs problem areas for tracking over time. We believe in measuring results — if your yard isn't improving, we adjust the plan at no extra cost. Marana residents can reach us at (520) 284-9930 for pricing specific to their lot size and landscape type.",
        ],
      },
    ],
    faqs: [
      { q: "How much does weed control cost in Marana?", a: "Weed control plans for Marana homes start based on lot size and landscape type. Rock yard treatments are generally less expensive than turf programs. Free assessment included with every estimate. Call (520) 284-9930 for Marana pricing." },
      { q: "When should I apply pre-emergent in Marana?", a: "Marana needs two pre-emergent applications per year: September/October before winter annuals and February/March before summer grasses. Timing within a two-week window is critical for effectiveness." },
      { q: "What are the worst weeds in Marana AZ?", a: "Marana's most problematic weeds are spurge (flat-growing, milky sap), puncturevine (thorned seed pods), Russian thistle (tumbleweeds), foxtail barley (in Dove Mountain), and pigweed/amaranth (in areas with agricultural soil like Gladden Farms)." },
      { q: "Do you treat rock yards and gravel landscaping?", a: "Yes. Rock and gravel yards are the most common landscape type in Marana and make up the majority of our treatments. We apply pre-emergent barriers to the soil beneath gravel plus targeted post-emergent sprays for any breakthrough weeds." },
      { q: "Can you remove bermuda grass from my rock yard?", a: "Yes. Bermuda grass is invasive and spreads via underground runners into rock yards and flower beds. We use systemic herbicides that travel to the root network plus physical root barriers where needed. Multiple treatments are typically required for full elimination." },
      { q: "Do you serve Dove Mountain and Continental Ranch?", a: "Absolutely. We serve all Marana communities including Continental Ranch, Dove Mountain, Gladden Farms, Saguaro Ranch, and the surrounding area. Same-day appointments often available." },
      { q: "What's the difference between weed control and weed removal?", a: "Weed removal is reactive — pulling or spraying existing weeds. Weed control is proactive — using pre-emergent barriers to prevent weeds from ever germinating. Our programs combine both for complete yard protection." },
      { q: "Is Bucksworth licensed for herbicide application in Arizona?", a: "Yes. All Bucksworth technicians hold current Arizona Department of Agriculture applicator licenses (OPM category). We carry full liability insurance and use only EPA-registered herbicides approved for residential use." },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     WEED CONTROL — ORO VALLEY
     Priority: HIGH — Blog at #5 for "weed control Oro Valley AZ"
     Competitors: Bill's Home Service (local), WeedCo LLC (988r TUC)
     ═══════════════════════════════════════════════════════════════ */
  "oro-valley-az/weed-and-lawn-care": {
    metaTitle: "Weed Control Oro Valley AZ — Pre-Emergent & Lawn Care Pros | Bucksworth",
    metaDescription: "Professional weed control in Oro Valley, AZ. Pre-emergent barriers, post-emergent treatment, and lawn care for Rancho Vistoso, Sun City, Steam Pump Village & Canada Hills. Call (520) 284-9930.",
    heroHeadline: "Oro Valley Weed Control — Catalina Foothill Yard Experts",
    heroDescription: "Oro Valley's premium communities sit at the base of the Santa Catalina Mountains, where elevation, rocky soil, and seasonal monsoons create weed challenges unlike anywhere else in the Tucson metro. Bucksworth Home Services provides professional weed control and lawn care for Rancho Vistoso, Sun City Oro Valley, Steam Pump Village, and Canada Hills — keeping desert yards clean and HOA-compliant year-round.",
    introContent: [
      {
        heading: "Weed Control Services in Oro Valley, Pima County",
        paragraphs: [
          "Oro Valley spans zip codes 85737 and 85755 along the northwest slope of the Santa Catalina Mountains, with homes ranging from 2,500-foot valley floors to 3,200-foot foothill elevations. That elevation range creates a weed management puzzle: lower-elevation communities like parts of Steam Pump Village face classic Sonoran Desert weeds — spurge, puncturevine, and buffelgrass — while higher-elevation properties in Canada Hills and Rancho Vistoso battle foothill species like globe chamomile, filaree, and wild barley that thrive in cooler, rockier soil.",
          "Bucksworth Home Services has provided pest and termite protection to Oro Valley families for years, and our weed control division brings the same neighborhood-specific expertise to your yard. We know that Sun City Oro Valley's established landscapes (many over 15 years old) face different weed pressure than new construction in Rancho Vistoso's northern sections. We know which HOAs enforce strict weed-free standards and which properties back up to natural desert that constantly seeds weed migration. Every treatment plan is customized.",
          "Ready for weed-free living in Oro Valley? Call (520) 284-9930 for a free yard assessment. Same-day and next-day service available throughout Oro Valley, Marana, and the northwest Tucson metro.",
        ],
      },
      {
        heading: "Oro Valley's Elevation Creates Unique Weed Patterns",
        paragraphs: [
          "Most Phoenix and Tucson weed control companies apply the same products on the same schedule to every yard. That approach fails in Oro Valley because the town's 700-foot elevation range creates three distinct weed zones. Properties below 2,600 feet get the standard Tucson desert weed mix — spurge, Russian thistle, and devil's claw dominate, and pre-emergent timing follows typical low-desert schedules. Between 2,600 and 3,000 feet, you enter a transition zone where desert species mix with grassland weeds: buffelgrass, lovegrass, and fountain grass compete with native vegetation and invade gravel yards aggressively.",
          "Above 3,000 feet — Canada Hills, upper Rancho Vistoso, and properties near Catalina State Park — the weed calendar shifts by three to four weeks compared to lower Tucson. Winter annual weeds germinate later, summer annuals arrive later, and the pre-emergent application windows are different. A pre-emergent barrier applied at the right time for Tucson proper may be two weeks too early for upper Oro Valley, wasting product before the target germination period.",
          "Bucksworth's Oro Valley weed program accounts for these elevation differences. We schedule pre-emergent applications based on each property's actual microclimate, not a metro-wide calendar. Our technicians monitor soil temperature and moisture data to time treatments for maximum effectiveness — because a pre-emergent applied in the right week provides four months of protection, while one applied at the wrong time provides two months or less.",
        ],
      },
      {
        heading: "Oro Valley Neighborhood Weed Guide",
        paragraphs: [
          "Rancho Vistoso (85755) — Oro Valley's largest master-planned community wraps around the Rancho Vistoso golf courses with a mix of rock and turf landscaping. The golf course irrigation creates a humidity microclimate that promotes weed growth in adjacent properties — especially along shared walls and drainage areas. Common invaders include bermuda grass runners migrating from irrigated areas into rock yards, spurge in gravel beds, and buffelgrass along desert edges. Properties bordering the golf course need an additional barrier treatment along the shared boundary.",
          "Sun City Oro Valley (85755) — This active adult community features established landscapes that are 15-20 years old, with mature trees, shrubs, and turf. Older landscapes develop unique weed challenges: compacted soil under gravel reduces pre-emergent penetration, mature tree roots create gaps in weed barriers, and aging drip irrigation with slow leaks creates moisture pockets that fuel weed growth. Our Sun City program addresses these age-related issues with deep soil treatment and drip system inspection.",
          "Steam Pump Village (85737) — Located near the historic Steam Pump Ranch, this area has newer construction on previously undisturbed desert. Construction disturbance releases dormant seed banks, and the Santa Cruz River corridor nearby provides a constant source of wind-carried weed seeds. Puncturevine is particularly problematic here — its thorned seed pods spread via tires, shoes, and animal fur, and a single plant can produce over 1,000 seeds per season.",
          "Canada Hills (85737) — Foothill properties in Canada Hills sit at the highest residential elevations in Oro Valley, with rocky, decomposed-granite soil and natural desert vegetation on multiple sides. The weed species mix is different here: globe chamomile, wild barley, and filaree are more common than the spurge and puncturevine found at lower elevations. These foothill weeds respond better to specific herbicide formulations that Bucksworth stocks specifically for Oro Valley's upper communities.",
        ],
      },
      {
        heading: "Lawn Care & Turf Management in Oro Valley",
        paragraphs: [
          "Oro Valley's climate supports bermuda grass from April through October and winter ryegrass from November through March — but maintaining healthy turf at Oro Valley's elevation requires adjustments compared to lower-elevation Tucson. The cooler nighttime temperatures at 2,700+ feet mean bermuda grass comes out of dormancy later in spring (mid-April vs early April in Tucson) and goes dormant earlier in fall. Overseeding timing shifts to mid-October rather than early October to ensure ryegrass germinates before cold nights arrive.",
          "Our Oro Valley lawn care program includes seasonal fertilization calibrated to foothill soil conditions, pre-emergent weed barriers for turf areas (different products than what we use in rock yards), overseeding support with watering schedule guidance, and regular monitoring for turf diseases like brown patch and dollar spot that thrive in Oro Valley's cooler, more humid microclimate during monsoon season.",
          "Healthy turf is actually the best weed suppression tool — a thick, well-fed bermuda grass lawn physically outcompetes weed seedlings. Our fertilization program focuses on building turf density as a first-line weed defense, supported by selective herbicides only when needed.",
        ],
      },
      {
        heading: "Oro Valley Weed Control Service Plans",
        paragraphs: [
          "Bucksworth offers flexible weed control plans for Oro Valley homeowners. Our Rock Yard Protection Plan provides pre-emergent applications timed to Oro Valley's elevation-adjusted calendar plus post-emergent spot treatments for breakthrough. Our Turf & Weed Plan combines lawn fertilization with integrated weed management for yards with grass. Our Premium Full-Yard Plan covers rock, turf, and hardscape areas with unlimited service calls for weed breakthrough between scheduled visits.",
          "Every Oro Valley plan includes a detailed initial assessment with photographs, weed species identification, and soil condition evaluation. We track your yard's progress across seasons and adjust the treatment plan as conditions change. New to Oro Valley? Ask about our new-homeowner program with first-year intensive treatment to establish a clean baseline. Call (520) 284-9930 for a free yard assessment.",
        ],
      },
    ],
    faqs: [
      { q: "How much does weed control cost in Oro Valley?", a: "Weed control plans for Oro Valley homes are based on lot size, landscape type, and elevation zone. Free initial assessment included. Call (520) 284-9930 for pricing specific to your property." },
      { q: "When should pre-emergent be applied in Oro Valley?", a: "Oro Valley's higher elevation shifts the pre-emergent calendar. Fall applications work best in late September to mid-October (2-3 weeks later than Tucson proper). Spring applications target February to early March. Our technicians time applications based on your property's specific elevation and microclimate." },
      { q: "What weeds are common in Oro Valley?", a: "Lower Oro Valley (Steam Pump Village area): spurge, puncturevine, buffelgrass. Mid-elevation (Rancho Vistoso, Sun City): bermuda grass invasion, spurge, Russian thistle. Upper Oro Valley (Canada Hills): globe chamomile, filaree, wild barley, foxtail." },
      { q: "Do you offer lawn fertilization and overseeding in Oro Valley?", a: "Yes. Our Oro Valley lawn program includes seasonal fertilization, overseeding timing adjusted for foothill elevation, and integrated weed control for turf areas. Bermuda transitions and winter ryegrass programs available." },
      { q: "Can you treat bermuda grass invading my rock yard?", a: "Yes. Bermuda grass invasion from adjacent turf or golf courses is one of the most common complaints in Rancho Vistoso and Sun City OV. We use systemic herbicides that kill the root network plus physical barriers to prevent runner migration." },
      { q: "Do you serve Rancho Vistoso and Sun City Oro Valley?", a: "Yes. We serve all Oro Valley communities including Rancho Vistoso, Sun City Oro Valley, Steam Pump Village, Canada Hills, and surrounding areas. Same-day service often available." },
      { q: "Is Bucksworth licensed for weed control in Pima County?", a: "Yes. All technicians hold Arizona Department of Agriculture applicator licenses. We carry liability insurance and use only EPA-registered herbicides. Bucksworth is Google Guaranteed and locally trusted across the Tucson metro." },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     WEED CONTROL — CHANDLER
     Priority: HIGH — East Valley presence needed
     Competitors: Aspire (dominant), Green Keeper, Quell Pest, Simply Green
     ═══════════════════════════════════════════════════════════════ */
  "chandler-az/weed-and-lawn-care": {
    metaTitle: "Weed Control Chandler AZ — Pre-Emergent & Desert Yard Treatment | Bucksworth",
    metaDescription: "Professional weed control in Chandler, AZ. Pre-emergent barriers, post-emergent treatment, and gravel yard maintenance for Ocotillo, Sun Groves, Chandler Heights & Clemente Ranch. Call (480) 422-8388.",
    heroHeadline: "Chandler Weed Control — East Valley Yard Specialists Since 2013",
    heroDescription: "Chandler's diverse landscape — from irrigated turf in Ocotillo to vast rock yards in Sun Groves and Chandler Heights — demands weed control expertise that adapts to every yard type. Bucksworth Home Services provides professional pre-emergent barriers, post-emergent treatment, and ongoing weed management for every Chandler community. Licensed applicators. Commercial-grade products. Results you can see.",
    introContent: [
      {
        heading: "Weed Control Services in Chandler, Maricopa County",
        paragraphs: [
          "Chandler is one of the East Valley's largest cities, with over 280,000 residents spread across zip codes 85224, 85225, 85226, 85248, 85249, and 85286. The city spans a dramatic range of development ages and styles — from 1960s block-construction homes near downtown (85225) to brand-new master-planned communities in south Chandler (85249). That diversity means Chandler's weed challenges are equally varied: older neighborhoods battle established perennial weeds with deep root systems, while new construction unleashes dormant desert seed banks that germinate the moment irrigation activates.",
          "Bucksworth Home Services has protected East Valley homes since 2013, and our weed control program is built specifically for desert landscapes. We use commercial-grade pre-emergent herbicides that outperform retail products, targeted post-emergent treatments calibrated to each weed species, and bermuda grass suppression technology for rock yards plagued by turf invasion from neighboring properties. Whether your Chandler home has a manicured lawn, a low-maintenance rock yard, or a mix of both, we build a plan that works.",
          "Ready for a weed-free Chandler yard? Call (480) 422-8388 for a free assessment. Same-day and next-day service available throughout Chandler, Gilbert, Mesa, and the East Valley.",
        ],
      },
      {
        heading: "Why Chandler Has Some of Arizona's Worst Weed Pressure",
        paragraphs: [
          "Chandler sits at the geographic center of the East Valley's most intense weed zone. Three factors drive this. First, the city's agricultural history: Chandler was built on cotton, dairy, and ostrich farming land, and that agricultural soil is enriched with nitrogen and packed with pigweed, amaranth, and Johnson grass seeds that thrive for decades after farming stops. Every time a new subdivision is graded on former farmland in south Chandler, those legacy seeds resurface.",
          "Second, Chandler's micro-irrigation infrastructure creates artificial oases in the desert. HOAs require drip-irrigated landscaping, median islands run constant irrigation, and neighboring golf courses (Ocotillo Golf Resort, San Marcos Golf Course) push moisture into adjacent residential areas. This constant water availability means weeds germinate in every month — not just during monsoon — making year-round treatment essential.",
          "Third, Chandler's position on the Gila River Indian Community boundary means the southern edge of the city borders undeveloped desert and agricultural land that serves as a permanent weed seed reservoir. Wind carries seeds north into Sun Groves, Chandler Heights, and the 85249 zip code every season, creating a cycle of reinfestation that single treatments can't break.",
        ],
      },
      {
        heading: "Chandler Neighborhood Weed Guide",
        paragraphs: [
          "Ocotillo (85248/85249) — South Chandler's premier lakefront community features a mix of turf yards, rock landscapes, and common areas irrigated by the Ocotillo lakes and golf courses. The lake and golf irrigation creates humid microclimates where nutsedge (a moisture-loving weed) thrives alongside standard desert weeds. Bermuda grass is the #1 complaint in Ocotillo rock yards — runners travel 10+ feet underground from irrigated common areas into adjacent gravel landscapes. Our Ocotillo program includes systemic bermuda suppression plus a standard pre-emergent schedule.",
          "Chandler Heights (85249) — Semi-rural area on Chandler's southeastern boundary with larger lot sizes, horse properties, and direct desert exposure. Chandler Heights faces the heaviest weed pressure of any Chandler community because properties border raw desert on at least one side, and many lots have natural desert easements that cannot be treated. We create defensive perimeter treatments along property lines and use extended-duration pre-emergents for the larger lot sizes common here.",
          "Sun Groves (85249) — Located near the Gila River boundary, Sun Groves deals with wind-carried weed seeds from adjacent undeveloped land. Russian thistle (tumbleweeds) and London Rocket are the dominant winter weeds, while spurge and puncturevine take over in summer. The flat, open terrain means wind distribution is aggressive — one untreated vacant lot can seed an entire block. Our Sun Groves program includes higher-concentration pre-emergent applications to combat the constant seed influx.",
          "Downtown Chandler / Andersen Springs (85224/85225/85226) — Older neighborhoods near the downtown core have established landscapes with mature trees and decades of compacted soil. Pre-emergent penetration in compacted soil requires mechanical agitation or higher application rates. Many older properties also have bermuda grass lawns that have spread uncontrolled into rock beds, sidewalk cracks, and fence lines. Our downtown-area program focuses on bermuda containment and crack-and-crevice treatment for hardscapes.",
          "Clemente Ranch (85286) — West Chandler community near the I-10 freeway corridor. Freeway construction and road median maintenance stir up weed seeds, and the commercial development around Chandler Fashion Center creates additional landscape maintenance challenges. Standard rock yard pre-emergent programs work well here when applied on schedule.",
        ],
      },
      {
        heading: "Year-Round Weed Calendar for Chandler",
        paragraphs: [
          "Chandler's warm climate means weeds germinate across all four seasons, each bringing different species. January through March: London Rocket, wild mustard, and filaree dominate — these cool-season annuals germinate in November/December after fall rains and reach peak growth by February. If your fall pre-emergent application was late or missed, these weeds will blanket rock yards by January. April through June: bermuda grass breaks dormancy and sends aggressive runners into rock yards and flower beds. Pre-emergent applied in March helps suppress summer annuals, but bermuda requires targeted post-emergent herbicide.",
          "July through September: monsoon season triggers the most intense weed flush of the year. Spurge, puncturevine, carpetweed, and pigweed germinate within days of the first summer storm and can cover a yard in two weeks. This is the season that separates professionally treated yards from untreated ones — a pre-emergent barrier applied in late June provides protection through the entire monsoon, while untreated yards become maintenance nightmares. October through December: fall cool-down triggers winter annual germination. A pre-emergent application in late September or early October is the single most important treatment of the year for Chandler homes.",
          "Bucksworth's Chandler weed calendar aligns treatments to these seasonal cycles: pre-emergent in October and March, post-emergent as needed through summer and monsoon, and bermuda suppression from April through October. This four-season approach keeps Chandler yards clean year-round.",
        ],
      },
      {
        heading: "Chandler Weed Control Pricing & Plans",
        paragraphs: [
          "Bucksworth offers tiered weed control plans for Chandler homeowners. Our Quarterly Rock Yard Plan provides pre-emergent barriers twice yearly plus two post-emergent cleanups — ideal for standard rock yards under 5,000 square feet. Our Monthly Protection Plan includes pre-emergent, monthly post-emergent spot treatments, and unlimited service calls for breakthrough weeds — perfect for south Chandler properties near desert edges where weed pressure is heaviest. Our Turf + Rock Combo Plan manages both lawn and gravel areas with integrated weed and feed treatments.",
          "All Chandler plans include a free initial assessment with weed species identification, landscape evaluation, and before/after photo tracking. We document your yard's condition at every visit so you can see measurable improvement. HOA violations for weeds? We offer expedited service to bring your yard into compliance within 48 hours. Call (480) 422-8388 for a free assessment and Chandler-specific pricing.",
        ],
      },
    ],
    faqs: [
      { q: "How much does weed control cost in Chandler?", a: "Weed control plans for Chandler homes vary by lot size, landscape type, and service frequency. Rock yard quarterly programs and monthly protection plans available. Free assessment included. Call (480) 422-8388 for pricing." },
      { q: "When should I apply pre-emergent in Chandler?", a: "Chandler needs two pre-emergent applications per year: late September/early October (before winter annuals) and late February/early March (before summer weeds and bermuda grass). These two applications provide the foundation for year-round weed prevention." },
      { q: "What are the worst weeds in Chandler AZ?", a: "Chandler's top weed problems are spurge (summer, flat-growing in gravel), bermuda grass invasion into rock yards, puncturevine (painful thorns, summer), London Rocket (winter, fast-growing), and pigweed/amaranth (monsoon season, from agricultural soil in south Chandler)." },
      { q: "Can you fix HOA weed violations in Chandler?", a: "Yes. We offer expedited weed treatment to bring yards into HOA compliance within 48 hours. We'll spray existing weeds, apply pre-emergent to prevent regrowth, and provide documentation you can share with your HOA management company." },
      { q: "How do you stop bermuda grass from invading rock yards?", a: "We use systemic herbicides that travel through bermuda grass runners to kill the root network, not just the visible blades. For severe invasions from adjacent turf or common areas, we can install physical root barriers. Multiple treatments over 2-3 months are typically required for complete bermuda removal." },
      { q: "Do you serve Ocotillo, Sun Groves, and Chandler Heights?", a: "Yes. We serve all Chandler communities including Ocotillo, Sun Groves, Chandler Heights, Downtown Chandler, Andersen Springs, Clemente Ranch, and surrounding areas. Same-day appointments often available." },
      { q: "Do you also offer pest control in Chandler?", a: "Yes. Bucksworth provides full pest and termite protection, scorpion control, HVAC service, and plumbing in addition to weed control throughout Chandler. Many homeowners bundle pest + weed service. Call (480) 422-8388." },
      { q: "Is Bucksworth licensed for herbicide application?", a: "Yes. All Bucksworth technicians carry current Arizona Department of Agriculture applicator licenses. We're fully insured, Google Guaranteed, and maintain a 4.9-star rating across 2,000+ Google reviews." },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     PEST & TERMITE — COOLIDGE
     Priority: MEDIUM — pos 18.6, 62 imp, 0 clk (Jun 19-25)
     ═══════════════════════════════════════════════════════════════ */
  "coolidge-az/pest-and-termite": {
    metaTitle: "Coolidge Pest & Termite Control — Licensed Pros, Same-Day Service | Bucksworth",
    metaDescription: "Pest control and termite treatment in Coolidge, AZ 85128. Scorpion removal, termite inspections, and rodent control for the Casa Grande Valley. Google Guaranteed. Call (480) 485-9790.",
    heroHeadline: "Coolidge Pest & Termite Control — Casa Grande Valley Experts",
    heroDescription: "Coolidge sits in the agricultural heart of the Casa Grande Valley, where irrigated farmland meets desert — creating year-round pest pressure from scorpions, termites, and rodents. Bucksworth provides comprehensive pest and termite protection for every Coolidge home.",
    introContent: [
      {
        heading: "Pest & Termite Services in Coolidge, Pinal County",
        paragraphs: [
          "Coolidge's position in the Casa Grande Valley surrounded by agricultural land creates a unique pest environment. Irrigation canals, cotton fields, and citrus groves harbor scorpions, termites, and rodents that migrate into residential neighborhoods as seasons change. Our Coolidge technicians provide targeted treatment for desert and agricultural pests including bark scorpions, subterranean termites, roof rats, ants, and roaches.",
          "Every Coolidge service includes a full property inspection, interior and exterior treatment, and ongoing protection. Same-day appointments available. Call (480) 485-9790 for a free inspection.",
        ],
      },
    ],
    faqs: [
      { q: "How much does pest control cost in Coolidge?", a: "Monthly pest control plans for Coolidge homes start at affordable rates based on home size and pest pressure. Free inspection included with every estimate. Call (480) 485-9790." },
      { q: "Do you offer termite warranties in Coolidge?", a: "Yes. We provide termite treatment with warranty protection for Coolidge properties. Free termite inspections available for all 85128 zip code homes." },
    ],
  },
};

export function getServiceHubOverride(citySlug: string, serviceSlug: string): ServiceHubOverride | undefined {
  const key = `${citySlug}/${serviceSlug}`;
  return OVERRIDES[key];
}
