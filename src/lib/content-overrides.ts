/* ──────────────────────────────────────────────
   content-overrides.ts — Unique content for priority pages
   
   When a city+subservice combo has an override, the subservice page
   uses this custom content instead of the generic buildContent() output.
   This allows 2,000+ word unique content for high-priority SEO pages.
   ────────────────────────────────────────────── */

export interface ContentBlock {
  heading: string;
  paragraphs: string[];
}

export interface ContentOverride {
  metaTitle: string;
  metaDescription: string;
  heroHeadline?: string; // Custom H1 (default: "{SubService} in {City}, AZ")
  heroDescription?: string; // Override longDesc in hero
  content: ContentBlock[];
  faqs: { q: string; a: string }[];
}

// Key format: "{citySlug}/{serviceSlug}/{subserviceSlug}"
const OVERRIDES: Record<string, ContentOverride> = {

  /* ═══════════════════════════════════════════════════════════════
     SCORPION CONTROL — TUCSON
     Priority: CRITICAL — monsoon season peaks late June
     Competitor: Perez Pest Solutions owns TUC scorpion SERP
     ═══════════════════════════════════════════════════════════════ */
  "tucson-az/pest-and-termite/scorpion-control": {
    metaTitle: "Scorpion Control Tucson AZ — Same-Day Bark Scorpion Removal | Bucksworth",
    metaDescription: "Expert scorpion control in Tucson, AZ. Bark scorpion removal, blacklight inspections, and perimeter sealing. Licensed, Google Guaranteed. Call (520) 284-9930 for same-day service.",
    heroHeadline: "Tucson Scorpion Control — Bark Scorpion Experts Since 2013",
    heroDescription: "Arizona bark scorpions are the most venomous scorpion in North America, and Tucson's unique desert basin geography makes it one of the worst cities in Arizona for scorpion infestations. Bucksworth Home Services provides comprehensive scorpion control across every Tucson neighborhood — from blacklight inspections and perimeter sealing to residual barrier treatments that stop scorpions before they reach your family.",
    content: [
      {
        heading: "Scorpion Control Services in Tucson, Pima County",
        paragraphs: [
          "Tucson sits in a basin surrounded by five mountain ranges — the Santa Catalinas, Rincons, Tucson Mountains, Santa Ritas, and Tortolitas — creating a unique geography that funnels scorpion populations directly into residential neighborhoods. The Arizona bark scorpion (Centruroides sculpturatus) thrives in this environment, sheltering in rocky foothills during the day and entering homes through gaps as narrow as a credit card at night.",
          "Bucksworth Home Services has provided scorpion control across the Tucson metro since 2013. Our licensed technicians understand that scorpion pressure in Sam Hughes (85716) is fundamentally different from what homeowners face in Rita Ranch (85747) or the Catalina Foothills (85718). Desert-edge properties near Sabino Canyon face constant migration from undeveloped land, while established midtown neighborhoods deal with scorpions that have adapted to irrigated landscaping and block wall construction.",
          "Need scorpion control in Tucson today? Call (520) 284-9930 — our Tucson dispatch team offers same-day and next-day appointments across all Tucson zip codes. Free blacklight inspection included with every estimate.",
        ],
      },
      {
        heading: "Why Tucson Has a Severe Scorpion Problem",
        paragraphs: [
          "Tucson's scorpion problem is worse than most Arizona cities for several measurable reasons. First, the city sits at approximately 2,600 feet elevation where the Sonoran Desert meets multiple mountain ecosystems. Bark scorpions live at elevations from desert floor to 7,000 feet, meaning every direction around Tucson harbors scorpion habitat. Unlike flat-terrain cities, Tucson's canyon washes — Rillito River, Pantano Wash, Tanque Verde Creek — serve as scorpion highways connecting wildland populations to residential areas.",
          "Second, Tucson's monsoon season (typically late June through September) creates ideal scorpion conditions. Sudden humidity spikes drive scorpions indoors seeking shelter, while monsoon flooding pushes ground-dwelling scorpions upward and outward into homes, garages, and pool areas. The 2024 and 2025 monsoon seasons each brought multiple severe storms that triggered scorpion surges across the Tucson metro — and the 2026 monsoon season is beginning now.",
          "Third, Tucson's housing stock includes a high proportion of block construction homes built on desert lots with minimal foundation sealing. These older homes — common in midtown, Sam Hughes, and the university area — have dozens of entry points that scorpions exploit: weep holes in block walls, gaps around plumbing penetrations, unsealed expansion joints, and deteriorated door sweeps.",
          "Arizona bark scorpion venom is a neurotoxin that causes intense pain, numbness, and in children or elderly individuals, potentially dangerous systemic reactions requiring emergency care. The Tucson poison control center consistently ranks scorpion stings among the top calls during monsoon season. This is not a pest you manage with DIY solutions.",
        ],
      },
      {
        heading: "Neighborhood-Level Scorpion Control Across Tucson",
        paragraphs: [
          "Catalina Foothills (85718, 85750) — Properties in the Catalina Foothills face the highest scorpion pressure in the Tucson metro. Homes bordering Sabino Canyon, Finger Rock Trail, and Ventana Canyon share their landscape with dense scorpion populations in the rocky foothills. Our technicians service Catalina Foothills properties with extended perimeter treatments that account for the desert-residential interface, including rock wall and retaining wall treatment that generic pest companies miss entirely.",
          "Sam Hughes & Midtown Tucson (85716, 85711, 85712) — These established neighborhoods near the University of Arizona have older block construction with hundreds of potential scorpion entry points per home. Our midtown Tucson scorpion service includes a comprehensive entry-point audit, crack and crevice treatment, weep hole screening, and residual barrier application. Many Sam Hughes homeowners who switched to Bucksworth from national chains report a dramatic reduction in indoor scorpion sightings within the first treatment cycle.",
          "Rita Ranch & Southeast Tucson (85747) — This master-planned community was built on raw desert, displacing scorpion populations that never fully left. Homes backing to desert washes or open lots require aggressive perimeter management. Our Rita Ranch clients typically see the most activity during monsoon months when flooding drives scorpions from underground burrows into garages and first-floor living areas.",
          "Tanque Verde (85749) — Upscale east-side properties near the Rincon Mountains deal with both bark scorpions and the larger (but less dangerous) desert hairy scorpion. The rocky terrain and large lot sizes require extended treatment zones. Our Tanque Verde service protocol covers not just the home perimeter but outbuildings, pool equipment areas, and decorative rock features where scorpions aggregate.",
          "South Tucson (85713) & Drexel Heights — Older construction and proximity to the Santa Cruz River corridor create consistent scorpion activity. Dense housing means that untreated neighboring properties can reinfest treated homes. Bucksworth addresses this with longer-lasting residual products that maintain barrier effectiveness even when nearby properties go untreated.",
        ],
      },
      {
        heading: "How Bucksworth Eliminates Scorpions in Tucson Homes",
        paragraphs: [
          "Every Tucson scorpion control job begins with a UV blacklight inspection — the only reliable method for locating scorpions in and around a property. Bark scorpions fluoresce bright green-blue under UV light, allowing our technicians to find them in cracks, behind furniture, under bark, and in wall voids that visual inspection would miss. We conduct this inspection at dusk or after dark when scorpions are most active and visible.",
          "Based on the inspection findings, your technician develops a targeted treatment plan with three components. First, direct elimination of any scorpions found during inspection using professional-grade products. Second, residual barrier treatment around the entire home perimeter, entry points, window frames, door thresholds, garage door seals, and plumbing penetrations. Third, a sealing and exclusion plan identifying every gap, crack, and opening that scorpions could use to enter your home.",
          "We use professional-grade residual insecticides specifically effective against scorpions — products not available in retail stores that maintain effectiveness through Tucson's extreme UV exposure and monsoon moisture. The barrier is applied to exterior foundation walls, expansion joints, garage door tracks, and around all utility penetrations. Interior treatment targets wall voids, closets, and dark areas where scorpions harbor.",
          "Exclusion is the most important long-term scorpion control measure. Our technicians identify and seal entry points using weatherproof caulk, copper mesh, door sweeps, and weep hole screens. A properly sealed Tucson home can reduce scorpion entry by 80-90 percent even without chemical treatment. Combined with our residual barrier, exclusion creates a defense system that keeps working between scheduled treatments.",
          "Ongoing maintenance is critical in Tucson. Scorpion pressure does not stop after one treatment — populations in the surrounding desert and neighboring properties continuously attempt to recolonize. Our Tucson scorpion maintenance plans include quarterly treatments (bi-monthly during monsoon season for high-pressure properties), annual blacklight re-inspection, and barrier touch-ups after major storms.",
        ],
      },
      {
        heading: "Monsoon Season Scorpion Surge — What Tucson Homeowners Must Know",
        paragraphs: [
          "Tucson's monsoon season runs from approximately late June through September, and it is the most critical period for scorpion control. Monsoon storms bring three conditions that dramatically increase scorpion activity in Tucson homes: sudden humidity increases (scorpions are attracted to moisture), ground saturation that floods scorpion burrows and forces them to the surface, and thermal disruption that changes scorpion movement patterns.",
          "The first major monsoon storms typically trigger the largest scorpion surge of the year. Homeowners who wait until they see scorpions inside to call for service are already weeks behind — by that point, scorpions have established interior harborage and multiple entry routes. Bucksworth strongly recommends scheduling your pre-monsoon scorpion treatment no later than mid-June to establish barrier protection before the first storms arrive.",
          "During monsoon season, our Tucson team increases staffing and extends service hours to handle surge demand. Emergency scorpion calls — especially homes with children, elderly residents, or previous sting incidents — receive priority routing. Call (520) 284-9930 to schedule your monsoon-season protection or request emergency service.",
        ],
      },
      {
        heading: "Scorpion Control Coverage: Every Tucson Zip Code",
        paragraphs: [
          "Bucksworth serves every Tucson neighborhood and zip code — 85701, 85705, 85710, 85711, 85712, 85713, 85716, 85719, and all surrounding areas including Catalina Foothills, Rita Ranch, Tanque Verde, Marana, and Oro Valley. Our Tucson-based technicians live in these communities and know the specific scorpion challenges each area faces.",
          "Our Tucson dispatch center at (520) 284-9930 is staffed during business hours for scheduling. Most Tucson scorpion control appointments are available same-day or next-day. Maintenance plan members receive priority scheduling, discounted rates, and a dedicated technician who tracks your property history and knows your specific scorpion pressure points.",
        ],
      },
      {
        heading: "Why Tucson Families Trust Bucksworth for Scorpion Control",
        paragraphs: [
          "Bucksworth is family-owned by Jordan and Taylor Moore, who founded the company in 2013 with a simple philosophy: treat every home like it is Gigi's. That means honest assessments — we will tell you if your scorpion problem requires aggressive treatment or if basic exclusion will solve it — quality materials, fair prices, and genuine care for your family's safety.",
          "We are one of the few Tucson-area pest control companies that is Google Guaranteed, meaning Google independently verified our licenses, insurance, and employee backgrounds. Arizona ROC #343924 and AG License #9613 are active and in good standing. We carry full liability insurance, and every technician passes background checks and ongoing training specific to Arizona scorpion biology and treatment methods.",
          "Ready for your free scorpion inspection in Tucson? Call (520) 284-9930 today. No trip fees, no hidden charges, no high-pressure sales — just a thorough blacklight inspection, honest findings, and a written estimate you can count on. Same-day appointments available across all Tucson zip codes.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does scorpion control cost in Tucson, AZ?",
        a: "Tucson scorpion control pricing depends on your home's size, construction type, property layout, and severity of infestation. Initial treatment typically includes a blacklight inspection, perimeter sealing assessment, and full barrier application. Bucksworth provides a free on-site inspection and written estimate before starting — no trip fees. Call (520) 284-9930 for your free Tucson estimate.",
      },
      {
        q: "When is scorpion season in Tucson?",
        a: "Scorpions are active in Tucson year-round, but peak activity runs from late May through October, with the worst period during monsoon season (late June through September). Monsoon storms flood scorpion burrows and drive them into homes. We recommend establishing barrier treatment before monsoon season begins.",
      },
      {
        q: "Are bark scorpions in Tucson dangerous?",
        a: "Yes. The Arizona bark scorpion (Centruroides sculpturatus) is the most venomous scorpion in North America. Stings cause intense pain, numbness, and muscle twitching. Children, elderly individuals, and people with compromised immune systems are at higher risk for severe reactions. If stung, contact Tucson poison control at (800) 222-1222 and seek medical attention if symptoms escalate.",
      },
      {
        q: "Can I get same-day scorpion control in Tucson?",
        a: "Yes. Bucksworth offers same-day and next-day scorpion control throughout Tucson and surrounding communities. Emergency situations — especially homes with children or previous sting incidents — receive priority routing. Call our Tucson dispatch at (520) 284-9930 to check today's availability.",
      },
      {
        q: "How do I keep scorpions out of my Tucson home?",
        a: "The most effective long-term strategy is exclusion: sealing every crack, gap, and opening where scorpions can enter. This includes door sweeps, weep hole screens, plumbing penetrations, and expansion joints. Combined with professional residual barrier treatment and regular maintenance, a properly sealed Tucson home can reduce scorpion entry by 80-90%. Our technicians identify and address these entry points during every service visit.",
      },
      {
        q: "What Tucson neighborhoods have the worst scorpion problems?",
        a: "Catalina Foothills, Tanque Verde, Rita Ranch, and any properties near desert washes or mountain foothills experience the heaviest scorpion pressure. However, older midtown neighborhoods like Sam Hughes and the university area also have significant issues due to block construction with unsealed entry points. Bucksworth provides neighborhood-specific treatment plans across all Tucson zip codes.",
      },
      {
        q: "Is Bucksworth licensed for scorpion control in Tucson?",
        a: "Absolutely. Bucksworth holds Arizona ROC License #343924, AG License #9613, and is Google Guaranteed — meaning Google independently verified our business licenses, insurance, and employee backgrounds. We have served Tucson-area homeowners since 2013 and carry full commercial liability insurance.",
      },
      {
        q: "How often should I have scorpion treatment in Tucson?",
        a: "For most Tucson homes, quarterly treatment maintains effective barrier protection. Properties with high scorpion pressure — foothills locations, desert-edge lots, or homes with documented infestation history — benefit from bi-monthly treatment during monsoon season (June through September). Your technician will recommend the appropriate schedule based on your property's specific conditions.",
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     SCORPION CONTROL — MARANA
     Priority: HIGH — fragmented SERP, easy win
     ═══════════════════════════════════════════════════════════════ */
  "marana-az/pest-and-termite/scorpion-control": {
    metaTitle: "Scorpion Control Marana AZ — Bark Scorpion Removal & Prevention | Bucksworth",
    metaDescription: "Professional scorpion control in Marana, AZ. Bark scorpion elimination, blacklight inspections, perimeter sealing for Continental Ranch, Dove Mountain & Gladden Farms. Call (520) 284-9930.",
    heroHeadline: "Marana Scorpion Control — Protecting Families from Continental Ranch to Dove Mountain",
    heroDescription: "Marana's rapid expansion from agricultural land into the Sonoran Desert has displaced thousands of bark scorpions directly into new residential communities. Bucksworth Home Services provides comprehensive scorpion control throughout Marana — from blacklight inspections and colony elimination to long-term perimeter sealing that protects your family year-round.",
    content: [
      {
        heading: "Scorpion Control Services in Marana, Pima County",
        paragraphs: [
          "Marana has transformed from a quiet agricultural town into one of southern Arizona's fastest-growing communities, with master-planned developments like Continental Ranch, Gladden Farms, Dove Mountain, and Saguaro Ranch pushing residential construction directly into raw Sonoran Desert. This rapid development is the primary driver of Marana's scorpion problem — every new home, road, and retention basin built on undisturbed desert displaces bark scorpion populations that have lived in that soil for generations.",
          "Bucksworth Home Services has provided scorpion control across the Marana area since 2013. Our licensed technicians understand that Continental Ranch (85653) properties face different scorpion challenges than homes in Dove Mountain (85658) or Gladden Farms. Desert-edge construction, proximity to the Tortolita Mountains, and Marana's network of desert washes each create distinct scorpion entry patterns that require tailored treatment approaches.",
          "Need scorpion control in Marana today? Call (520) 284-9930 — our Tucson-area dispatch offers same-day and next-day appointments throughout Marana. Free blacklight inspection included with every estimate.",
        ],
      },
      {
        heading: "Why Marana's Scorpion Problem Is Getting Worse",
        paragraphs: [
          "Marana's population has surged in recent years as master-planned communities continue expanding northwest of Tucson. Every construction site tears up desert terrain where bark scorpions nest in underground burrows, beneath rocks, and inside packrat middens. Displaced scorpions migrate toward existing structures — your home — seeking the shelter, moisture, and prey insects that residential properties provide.",
          "The Tortolita Mountains immediately north of Marana serve as a massive scorpion reservoir. These foothills harbor bark scorpion populations that migrate downslope during warm months, following the Rillito River corridor and natural washes directly into Marana neighborhoods. Homes in Dove Mountain and Continental Ranch sit squarely in these migration corridors.",
          "Marana's irrigation infrastructure — canals, retention basins, and irrigated landscaping — creates microhabitats that sustain scorpion prey insects (crickets, roaches, beetles) year-round. Where prey thrives, scorpions follow. A property with cricket problems in spring almost certainly has a scorpion problem by summer.",
          "During monsoon season (late June through September), Marana's flat terrain and desert washes channel stormwater directly through residential areas. Flooding forces ground-dwelling scorpions to the surface and into garages, first-floor rooms, and pool enclosures. The first major monsoon storms of each season consistently trigger the highest scorpion call volume of the year.",
        ],
      },
      {
        heading: "Neighborhood Scorpion Control Across Marana",
        paragraphs: [
          "Continental Ranch (85653) — Marana's largest master-planned community sits where agricultural land meets desert foothills. Properties along the community's desert edges and near retention basins experience the highest scorpion activity. Block wall construction with unsealed weep holes is the number one scorpion entry point in Continental Ranch — our technicians seal these on every service visit. Homes on the north and west edges of Continental Ranch facing undeveloped desert require extended perimeter treatment zones.",
          "Dove Mountain (85658) — Nestled in the Tortolita Mountain foothills, Dove Mountain properties face constant scorpion migration from rocky desert terrain. The elevation, natural rock outcroppings, and resort-style landscaping with decorative boulders create ideal scorpion harborage within feet of living spaces. Our Dove Mountain service protocol includes rock feature treatment, landscape lighting inspection (scorpions hunt near lights where insects gather), and extended foundation treatment.",
          "Gladden Farms (85653) — Located on Marana's western edge near agricultural and open desert land, Gladden Farms sees scorpion activity from both farmland pest populations and desert migration. Newer construction generally has tighter building envelopes, but concrete expansion joints, garage door seals, and utility penetrations still provide scorpion access. Our Gladden Farms clients benefit from preventive sealing before scorpion season peaks.",
          "Saguaro Ranch (85653) — This newer development is built on previously undisturbed desert, meaning displaced scorpion populations are still actively seeking new territory. First-year and second-year homeowners in Saguaro Ranch typically experience the highest scorpion activity as displaced populations settle into new patterns. Our aggressive initial treatment plan for new Saguaro Ranch homes establishes barriers before scorpions find entry points.",
          "Properties near the Rillito River Park corridor face a unique challenge — the riparian habitat along the Rillito supports dense insect populations and provides a sheltered migration path for scorpions moving between the Tortolita foothills and developed areas. Homes within a quarter mile of the Rillito should expect above-average scorpion pressure and may benefit from our enhanced perimeter treatment plan.",
        ],
      },
      {
        heading: "Understanding Bark Scorpion Behavior in Marana",
        paragraphs: [
          "Arizona bark scorpions (Centruroides sculpturatus) are the most medically significant scorpion species in the United States and the dominant species in the Marana area. Unlike the larger desert hairy scorpion, bark scorpions are climbers — they scale walls, ceilings, and textured stucco with ease. This climbing ability means that entry points at any height, not just ground level, are potential access routes into your home. In Marana homes, we frequently find bark scorpions entering through second-story weep holes, attic vents, and gaps around roofline utilities.",
          "Bark scorpions are also unique among Arizona scorpions in their social behavior — they aggregate in groups, sometimes dozens at a time, in preferred harborage sites. A single block wall cavity or landscape timber can harbor 20-30 scorpions. When our blacklight inspection reveals a harborage site, direct treatment of that single location can eliminate more scorpions than treating an entire untargeted perimeter.",
          "Understanding scorpion foraging patterns helps Marana homeowners reduce attraction factors. Scorpions hunt at night, targeting crickets, roaches, and other soft-bodied insects. Outdoor lighting near entryways attracts insects, which in turn attracts scorpions. Switching to yellow or amber LED bulbs, moving light fixtures away from doors, and reducing ground-level debris that harbors prey insects are all practical steps that complement professional treatment.",
        ],
      },
      {
        heading: "Bucksworth's Marana Scorpion Elimination Process",
        paragraphs: [
          "Every Marana scorpion control service begins with a professional UV blacklight inspection. Bark scorpions fluoresce bright green-blue under ultraviolet light, allowing our technicians to locate scorpions hiding in block wall cracks, under landscape edging, behind outdoor furniture, and inside wall voids. We conduct inspections during evening hours when scorpions are most active and visible.",
          "Treatment starts with direct elimination of every scorpion located during inspection, followed by a three-zone barrier system. Zone 1 covers the immediate home perimeter — foundation walls, door thresholds, window frames, and all utility penetrations. Zone 2 extends to block walls, fence lines, and landscape features within 10 feet of the home. Zone 3 addresses the broader property edge, focusing on desert-residential interface areas, washes, and rock features.",
          "Exclusion sealing is critical for Marana homes. Our technicians identify and seal every gap, crack, and opening that bark scorpions can exploit. This includes weep holes in block walls (the single most common scorpion entry point in Marana), gaps around plumbing and electrical penetrations, deteriorated door sweeps, garage door weather-stripping, and concrete expansion joints. Properly sealed homes see 80-90 percent fewer indoor scorpion sightings even between treatments.",
          "We use professional-grade residual insecticides selected specifically for southern Arizona conditions — products that maintain effectiveness through intense UV exposure, 110-degree heat, and monsoon moisture. Retail products available at hardware stores typically break down in weeks under Marana's sun; professional formulations maintain their barrier for 60-90 days.",
          "Ongoing maintenance keeps your Marana home protected year-round. Most Marana properties benefit from quarterly scorpion service, with bi-monthly treatment during monsoon season for desert-edge homes in Dove Mountain and Continental Ranch's perimeter lots. Maintenance plan members receive priority scheduling, automatic reminders, and a dedicated technician who knows your property's specific scorpion history.",
        ],
      },
      {
        heading: "Monsoon Season Scorpion Protection for Marana Homes",
        paragraphs: [
          "Marana's monsoon season is the most dangerous period for scorpion encounters in your home. The combination of sudden humidity increases, ground flooding, and disrupted scorpion habitat creates a surge of scorpion activity that peaks within 24-48 hours of each major storm. Homeowners who wait until after the first storm to schedule treatment face longer wait times and higher scorpion exposure.",
          "Bucksworth recommends scheduling your pre-monsoon scorpion treatment by mid-June to ensure your home's barrier is fresh and your exclusion seals are intact before the first storms arrive. Our Marana team increases capacity during monsoon season to handle surge demand, but pre-season clients always receive priority scheduling.",
          "Call (520) 284-9930 to schedule your Marana monsoon scorpion protection or request emergency service. Homes with children, elderly residents, or pets receive priority routing for urgent calls.",
        ],
      },
      {
        heading: "Scorpion Control Coverage: All Marana Zip Codes",
        paragraphs: [
          "Bucksworth serves every Marana neighborhood — zip codes 85653 and 85658 — plus surrounding communities including Tucson, Oro Valley, Catalina Foothills, and Red Rock. Our Tucson-based technicians live in and around the Marana area and understand the specific scorpion challenges each neighborhood faces.",
          "Most Marana scorpion control appointments are available same-day or next-day. Maintenance plan members enjoy priority scheduling, discounted rates, and a dedicated technician assigned to your property. Call (520) 284-9930 to get started.",
        ],
      },
      {
        heading: "Why Marana Homeowners Choose Bucksworth for Scorpion Control",
        paragraphs: [
          "Bucksworth is family-owned by Jordan and Taylor Moore, founded in 2013 with the philosophy of treating every home like it is Gigi's. In Marana, that means honest assessments — we will not sell you a premium scorpion package if basic exclusion and a standard barrier will solve your problem. It also means we show up on time, explain exactly what we are doing and why, and follow up to make sure it worked.",
          "We are Google Guaranteed, meaning Google independently verified our licenses, insurance, and employee backgrounds. Arizona ROC #343924 and AG License #9613 are active and in good standing. When you hire Bucksworth for scorpion control in Marana, the work is backed by both our satisfaction guarantee and Google's.",
          "Ready for your free scorpion inspection in Marana? Call (520) 284-9930 today. No trip fees, no hidden charges, no pressure — just a thorough blacklight inspection, honest findings, and a written estimate. Same-day appointments available throughout Marana.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does scorpion control cost in Marana, AZ?",
        a: "Marana scorpion control pricing depends on your home's size, lot size, construction type, and proximity to desert or washes. Initial treatment includes a blacklight inspection, perimeter sealing assessment, and full barrier application. Bucksworth provides a free on-site inspection and written estimate — no trip fees. Call (520) 284-9930 for your free Marana estimate.",
      },
      {
        q: "When is scorpion season in Marana?",
        a: "Scorpions are active in Marana year-round, but peak activity runs from late May through October, with the worst period during monsoon season (late June through September). Monsoon flooding drives scorpions from underground burrows into homes. Pre-monsoon treatment by mid-June is recommended for the best protection.",
      },
      {
        q: "Why are there so many scorpions in Marana?",
        a: "Marana's rapid residential development on former desert and agricultural land displaces bark scorpion populations directly into new neighborhoods. The Tortolita Mountains serve as a massive scorpion reservoir, and desert washes channel scorpion migration into communities like Continental Ranch and Dove Mountain. Irrigation infrastructure sustains prey insects that attract scorpions year-round.",
      },
      {
        q: "Can I get same-day scorpion control in Marana?",
        a: "Yes. Bucksworth offers same-day and next-day scorpion control throughout Marana. Emergency situations — homes with children, elderly residents, or active scorpion sightings — receive priority routing. Call (520) 284-9930 to check availability.",
      },
      {
        q: "What is the best way to prevent scorpions in Marana homes?",
        a: "Professional exclusion sealing is the most effective long-term scorpion prevention for Marana homes. Sealing weep holes, plumbing penetrations, door sweeps, and expansion joints can reduce indoor scorpion entry by 80-90%. Combined with professional residual barrier treatment, most Marana homes see dramatic improvement within the first treatment cycle.",
      },
      {
        q: "Is Bucksworth licensed for scorpion control in Marana?",
        a: "Yes. Bucksworth holds Arizona ROC License #343924, AG License #9613, and is Google Guaranteed. We carry full commercial liability insurance and every technician passes background checks and ongoing training specific to Arizona scorpion biology and treatment methods.",
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     SCORPION CONTROL — ORO VALLEY
     Priority: HIGH — Perez Pest + Blue Sky dominate, BSW absent
     ═══════════════════════════════════════════════════════════════ */
  "oro-valley-az/pest-and-termite/scorpion-control": {
    metaTitle: "Scorpion Control Oro Valley AZ — Bark Scorpion Experts | Bucksworth",
    metaDescription: "Professional scorpion control in Oro Valley, AZ. Bark scorpion removal, blacklight inspections & perimeter sealing for Rancho Vistoso, Sun City & Canada Hills. Call (520) 284-9930.",
    heroHeadline: "Oro Valley Scorpion Control — Catalina Foothill Protection Specialists",
    heroDescription: "Oro Valley's position at the base of the Santa Catalina Mountains makes it one of the highest scorpion-pressure communities in the Tucson metro. Bucksworth Home Services provides expert scorpion control across every Oro Valley neighborhood — from Rancho Vistoso to Sun City to Canada Hills — with blacklight inspections, professional exclusion sealing, and residual barrier treatments that keep bark scorpions out of your home.",
    content: [
      {
        heading: "Scorpion Control Services in Oro Valley, Pima County",
        paragraphs: [
          "Oro Valley occupies the northwest slope of the Santa Catalina Mountains, placing every neighborhood in this community directly in the path of scorpion populations that descend from the rocky foothills. The Arizona bark scorpion (Centruroides sculpturatus) is the dominant species in Oro Valley, thriving in the decomposed granite, rock outcroppings, and Sonoran Desert terrain that surrounds — and in many cases runs through — the town's residential developments.",
          "Bucksworth Home Services has provided scorpion control across Oro Valley since 2013. Our technicians service Rancho Vistoso (85755), Sun City Oro Valley (85755), Steam Pump Village (85737), Canada Hills, and every other OV neighborhood with treatment plans tailored to each area's specific scorpion pressure. Properties near Catalina State Park and Pusch Ridge face constant scorpion migration that requires a fundamentally different approach than homes in the town's more developed interior.",
          "Call (520) 284-9930 for same-day or next-day scorpion control anywhere in Oro Valley. Every appointment includes a free UV blacklight inspection — the only reliable method for finding bark scorpions on your property.",
        ],
      },
      {
        heading: "Why Oro Valley Is a Scorpion Hotspot",
        paragraphs: [
          "Oro Valley's geography creates among the worst scorpion conditions in Pima County. The Santa Catalina Mountains rise to over 9,000 feet directly east of town, with bark scorpions inhabiting every elevation from the desert floor through the foothills. These mountains are not just scenery — they are a permanent, inexhaustible scorpion source. Scorpions migrate downslope following natural washes, rocky drainage channels, and the Cañada del Oro wash that cuts through the heart of Oro Valley.",
          "The town's master-planned communities were built on desert terrain that harbored dense scorpion populations. Unlike communities built on former agricultural land, Oro Valley's developments cleared rocky desert — the exact habitat bark scorpions prefer. Construction displaces surface populations, but scorpions in deeper burrows, rock crevices, and packrat nests survive and emerge months or even years later into finished neighborhoods.",
          "Oro Valley's elevation (approximately 2,700-3,200 feet depending on neighborhood) places it in the bark scorpion's optimal comfort zone. Combined with the irrigated landscaping, block wall construction, and decorative rock features common in OV homes, the result is an environment that both produces and attracts scorpions at high density.",
          "Monsoon season amplifies Oro Valley's scorpion problem dramatically. The Catalina Mountain front concentrates monsoon moisture, producing intense localized storms that cause flash flooding through the town's washes and drainage systems. This flooding displaces scorpions en masse into residential areas. The 2026 monsoon season begins this month — Oro Valley homeowners should have their scorpion barriers in place now.",
        ],
      },
      {
        heading: "Neighborhood Scorpion Control in Oro Valley",
        paragraphs: [
          "Rancho Vistoso (85755) — Oro Valley's largest community sits along the Cañada del Oro wash corridor with direct exposure to mountain-to-valley scorpion migration. Golf course irrigation and retention lakes sustain high insect populations that attract scorpions from surrounding desert. Homes along the community's northern and eastern edges facing Pusch Ridge experience the highest pressure. Our Rancho Vistoso protocol includes extended-zone barrier treatment and specific attention to block wall weep holes, which are the primary entry point in this community.",
          "Sun City Oro Valley (85755) — This active adult community has established landscaping and aging construction that creates multiple scorpion entry opportunities. Worn door sweeps, deteriorated weather-stripping, and gaps around plumbing penetrations are common issues. Our Sun City Oro Valley service prioritizes exclusion sealing and interior treatment of closets, garages, and utility rooms where scorpions tend to shelter. We schedule appointments around community activity calendars and provide extra communication for residents managing the service themselves.",
          "Steam Pump Village & Canada Hills (85737) — These foothill communities closest to the Catalina Mountains face the most intense scorpion pressure in Oro Valley. Properties near Steam Pump Ranch and along the Cañada del Oro have direct desert-to-home scorpion pathways with minimal buffer. Our treatment plan for these areas includes Zone 3 extended perimeter treatment, rock feature treatment, and monthly monitoring during peak monsoon months.",
          "Catalina State Park Area — Homes adjacent to or near Catalina State Park share their border with protected desert habitat that supports healthy scorpion populations. While the park's preservation is valuable, it also means there will never be development or treatment to reduce the neighboring scorpion population. Our properties near the park require the most robust treatment plans: tight exclusion sealing, maximum-strength barrier products, and a monitoring schedule that catches resurgence early.",
        ],
      },
      {
        heading: "How Bucksworth Eliminates Scorpions in Oro Valley",
        paragraphs: [
          "Every Oro Valley scorpion service begins with a professional UV blacklight inspection conducted at dusk or after dark. Bark scorpions fluoresce bright green-blue under ultraviolet light, making them visible in cracks, under rocks, behind shutters, inside block wall cavities, and in landscape features where daytime visual inspection finds nothing. This inspection establishes a baseline count and map of scorpion activity on your property.",
          "Based on inspection findings, your technician builds a three-zone treatment plan. Zone 1: the home envelope — foundation, door frames, window frames, garage door seals, plumbing penetrations, electrical conduits, and any visible cracks or gaps. Zone 2: the immediate yard — block walls, fence lines, landscape edging, decorative rock features, and outdoor storage within 10 feet of the home. Zone 3: the property edge and desert interface — washes, natural rock formations, and undeveloped areas adjacent to your lot.",
          "Exclusion sealing is particularly critical in Oro Valley, where scorpion pressure is relentless. Our technicians identify and seal every entry point using materials rated for Arizona's extreme UV and heat: weather-rated silicone caulk for static gaps, copper mesh for weep holes and larger openings, commercial-grade door sweeps, and specialized sealant for expansion joints. A single unsealed weep hole can allow dozens of scorpions to enter a home over a season.",
          "We apply professional-grade residual insecticides formulated for the southwest — products that maintain barrier effectiveness for 60-90 days despite Oro Valley's intense sun, heat, and monsoon moisture. Retail products degrade within weeks in these conditions. Our products are applied as micro-encapsulated formulations that release active ingredients gradually, maintaining consistent protection between scheduled treatments.",
          "Ongoing maintenance is essential in Oro Valley because the surrounding desert and mountain scorpion reservoir never diminishes. Most OV properties need quarterly service, with bi-monthly treatment recommended during monsoon months (June through September) for mountain-facing and desert-edge properties. Maintenance plan members get priority scheduling, automatic reminders, and a dedicated technician who knows your property's scorpion history and vulnerability points.",
        ],
      },
      {
        heading: "Preparing for Monsoon Season in Oro Valley",
        paragraphs: [
          "The monsoon season beginning in late June is the most critical period for Oro Valley scorpion control. The Catalina Mountain front produces some of southern Arizona's most intense monsoon storms, with concentrated rainfall that causes rapid flash flooding through the Cañada del Oro and tributary washes. Each major storm event pushes a new wave of scorpions from mountain and wash habitats into residential areas.",
          "Bucksworth strongly recommends pre-monsoon scorpion treatment by mid-June to ensure barrier protection is at full strength before the first storms. This includes a fresh barrier application, inspection and repair of all exclusion seals, and removal of harborage conditions (woodpiles, debris, ground-contact storage) near the home. Homeowners who establish pre-monsoon protection consistently report fewer indoor scorpion encounters through the entire July-September peak period.",
          "Call (520) 284-9930 to schedule your pre-monsoon scorpion service in Oro Valley. Emergency scorpion calls receive priority routing — especially homes with children, elderly residents, or active stinging incidents.",
        ],
      },
      {
        heading: "Scorpion Control Coverage: All Oro Valley Zip Codes",
        paragraphs: [
          "Bucksworth serves every neighborhood in Oro Valley — zip codes 85737 and 85755 — plus Catalina Foothills, Marana, Tucson, and all surrounding Tucson metro communities. Our technicians are based locally and typically arrive within 30 minutes of your location.",
          "Most Oro Valley appointments are available same-day or next-day. Maintenance plan members enjoy priority scheduling, discounted rates, and a dedicated technician who knows your property. Call (520) 284-9930 to get started with your free blacklight inspection.",
        ],
      },
      {
        heading: "Why Oro Valley Homeowners Trust Bucksworth",
        paragraphs: [
          "Bucksworth is family-owned by Jordan and Taylor Moore, founded in 2013 with one principle: treat every home like it is Gigi's. For Oro Valley homeowners, that means honest scorpion assessments based on what we actually find during inspection — not fear-based upselling. We recommend what your property genuinely needs, explain the options clearly, and let you decide.",
          "We are Google Guaranteed, meaning Google independently verified our licenses, insurance, and employee backgrounds. Arizona ROC #343924 and AG License #9613 are active and in good standing. With over 2,000 five-star reviews across the metro area and a 4.8-star average, Bucksworth has earned the trust of thousands of Arizona families — including hundreds throughout Oro Valley and the Tucson metro.",
          "Ready for your free scorpion inspection in Oro Valley? Call (520) 284-9930 today. No trip fees, no hidden charges, no high-pressure sales. Just an honest evaluation, a thorough blacklight inspection, and a written estimate you can count on. Same-day appointments available.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does scorpion control cost in Oro Valley, AZ?",
        a: "Oro Valley scorpion control pricing depends on your home's size, lot size, proximity to desert or mountain terrain, and severity of infestation. Initial treatment includes a blacklight inspection, entry-point assessment, and full barrier application. Bucksworth provides a free on-site inspection and written estimate — no trip fees. Call (520) 284-9930.",
      },
      {
        q: "Why does Oro Valley have so many scorpions?",
        a: "Oro Valley sits at the base of the Santa Catalina Mountains, which serve as a permanent, inexhaustible scorpion habitat. Bark scorpions migrate downslope through natural washes directly into residential areas. The town's rocky desert terrain, elevation, and irrigated landscaping create ideal conditions for both scorpions and their prey insects. Monsoon flooding amplifies the problem seasonally.",
      },
      {
        q: "When is the best time to start scorpion control in Oro Valley?",
        a: "The ideal time is before monsoon season — schedule by mid-June to have barriers in place before the first storms. However, scorpions are active year-round in Oro Valley due to the mountain habitat, so treatment is effective any time of year. Call (520) 284-9930 to schedule.",
      },
      {
        q: "Can I get same-day scorpion control in Oro Valley?",
        a: "Yes. Bucksworth offers same-day and next-day scorpion control throughout Oro Valley. Emergency calls — homes with children, elderly residents, or active scorpion encounters — receive priority routing. Call (520) 284-9930.",
      },
      {
        q: "What Oro Valley neighborhoods have the worst scorpion problems?",
        a: "Properties nearest the Catalina Mountains and Pusch Ridge — including areas near Catalina State Park, Steam Pump Village, and Canada Hills — experience the highest scorpion pressure. However, all Oro Valley neighborhoods see significant activity due to the surrounding desert terrain. Even interior communities like Sun City Oro Valley require regular treatment.",
      },
      {
        q: "How do I scorpion-proof my Oro Valley home?",
        a: "Professional exclusion sealing is the most effective method: seal weep holes, plumbing penetrations, door sweeps, window frames, and expansion joints. Remove harborage near the home (woodpiles, debris, ground-level storage). Reduce outdoor lighting that attracts insects (scorpion prey). Combined with professional barrier treatment, these measures can reduce indoor scorpion entry by 80-90%.",
      },
      {
        q: "Is Bucksworth licensed for pest control in Oro Valley?",
        a: "Yes. Bucksworth holds Arizona ROC License #343924, AG License #9613, and is Google Guaranteed by Google. We carry full commercial liability insurance and every technician passes background checks and specialized training in Arizona scorpion control methods.",
      },
    ],
  },
};

/**
 * Get content override for a specific city/service/subservice combo.
 * Returns undefined if no override exists (page should use default buildContent).
 */
export function getContentOverride(
  citySlug: string,
  serviceSlug: string,
  subserviceSlug: string
): ContentOverride | undefined {
  const key = `${citySlug}/${serviceSlug}/${subserviceSlug}`;
  return OVERRIDES[key];
}

/**
 * Check if an override exists without loading the full content.
 */
export function hasContentOverride(
  citySlug: string,
  serviceSlug: string,
  subserviceSlug: string
): boolean {
  const key = `${citySlug}/${serviceSlug}/${subserviceSlug}`;
  return key in OVERRIDES;
}
