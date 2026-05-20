/* ──────────────────────────────────────────────
   services.ts — Complete service data layer
   4 verticals × sub-services, all with SEO content
   ────────────────────────────────────────────── */

export interface SubService {
  name: string;
  slug: string;
  icon: string; // SVG path or emoji-safe HTML entity
  shortDesc: string;
  longDesc: string; // 2-3 sentences for service hub cards
}

export interface ServiceVertical {
  name: string;
  slug: string;
  tagline: string;
  icon: string;
  heroImage: string;
  color: string; // accent color
  phone: { phoenix: string; tucson: string };
  description: string; // SEO paragraph for hub page
  subServices: SubService[];
  process: { step: number; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServiceVertical[] = [
  /* ═══════════════════════════════════════════
     1. PEST & TERMITE CONTROL
     ═══════════════════════════════════════════ */
  {
    name: "Pest & Termite Control",
    slug: "pest-control",
    tagline: "Arizona's Most Trusted Pest Experts",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    heroImage: "/images/pest-damage-leaves.jpg",
    color: "#16a34a",
    phone: { phoenix: "(480) 422-8388", tucson: "(520) 284-9930" },
    description:
      "Bucksworth Home Services provides comprehensive pest and termite control for homes and businesses across Phoenix and Tucson, Arizona. Our licensed technicians use EPA-approved treatments to eliminate scorpions, termites, roaches, ants, spiders, rodents, bed bugs, and more. With same-day service, free inspections, and a satisfaction guarantee, we protect Arizona families from the desert's toughest pests year-round.",
    subServices: [
      {
        name: "Scorpion Control",
        slug: "scorpion-control",
        icon: "scorpion",
        shortDesc: "Eliminate bark scorpions and prevent re-entry",
        longDesc:
          "Arizona bark scorpions are the most venomous scorpion in North America. Our targeted scorpion control program includes blacklight inspections, perimeter sealing, and residual treatments that create a protective barrier around your home. We eliminate existing populations and prevent new ones from entering.",
      },
      {
        name: "Termite Treatment",
        slug: "termite-treatment",
        icon: "termite",
        shortDesc: "Subterranean & drywood termite elimination",
        longDesc:
          "Arizona termites cause millions in damage annually. Our termite programs include Sentricon baiting systems, liquid barrier treatments (Termidor), spot treatments for drywood termites, and pre-construction treatments for new builds. Every treatment includes a warranty and annual re-inspection.",
      },
      {
        name: "Roach Elimination",
        slug: "roach-elimination",
        icon: "roach",
        shortDesc: "German & American roach treatments",
        longDesc:
          "Our roach elimination program uses gel baits, growth regulators, and residual sprays to break the breeding cycle. We target German roaches in kitchens and bathrooms and American/sewer roaches at entry points. Most infestations are eliminated within 2-3 treatments.",
      },
      {
        name: "Ant Control",
        slug: "ant-control",
        icon: "ant",
        shortDesc: "Fire ants, harvester ants & carpenter ants",
        longDesc:
          "Arizona is home to fire ants, harvester ants, and carpenter ants that damage property and deliver painful stings. Our ant control targets colonies at the source with granular baits and perimeter treatments. We identify species and customize the treatment approach for lasting results.",
      },
      {
        name: "Spider Prevention",
        slug: "spider-prevention",
        icon: "spider",
        shortDesc: "Black widow & brown recluse treatments",
        longDesc:
          "Black widows and brown recluse spiders thrive in Arizona's climate. Our spider prevention program includes web removal, crack and crevice treatments, perimeter spraying, and reducing insect prey that attracts spiders. We keep your home safe from venomous species year-round.",
      },
      {
        name: "Rodent Exclusion",
        slug: "rodent-exclusion",
        icon: "rodent",
        shortDesc: "Rats, mice & pack rat removal + sealing",
        longDesc:
          "Pack rats, roof rats, and mice cause electrical damage, contamination, and health risks. Our rodent exclusion program includes trapping, removal, sanitization, and physical sealing of all entry points. We close gaps as small as a quarter to prevent re-entry.",
      },
      {
        name: "Bed Bug Treatment",
        slug: "bed-bug-treatment",
        icon: "bedbug",
        shortDesc: "Heat treatment & chemical elimination",
        longDesc:
          "Our bed bug program uses a combination of heat treatments and targeted chemical applications to eliminate all life stages — eggs, nymphs, and adults. We treat mattresses, furniture, baseboards, and wall voids. Follow-up inspections ensure complete eradication.",
      },
      {
        name: "Mosquito Control",
        slug: "mosquito-control",
        icon: "mosquito",
        shortDesc: "Yard fogging & breeding site elimination",
        longDesc:
          "Arizona's monsoon season creates ideal mosquito breeding conditions. Our mosquito program includes backyard fogging, larvicide treatments in standing water, and barrier sprays on vegetation where mosquitoes rest. Enjoy your outdoor spaces without the bites.",
      },
      {
        name: "Weed Control",
        slug: "weed-control",
        icon: "weed",
        shortDesc: "Pre & post-emergent lawn & gravel treatments",
        longDesc:
          "Desert weeds like spurge, puncture vine, and bermuda grass invade Arizona yards year-round. Our weed control program includes pre-emergent barriers that prevent germination and post-emergent treatments that eliminate existing weeds. We treat gravel, rock, and turf landscapes.",
      },
      {
        name: "Bee & Wasp Removal",
        slug: "bee-wasp-removal",
        icon: "bee",
        shortDesc: "Safe hive removal & wasp nest treatment",
        longDesc:
          "Africanized honey bees and paper wasps are aggressive in Arizona's heat. Our bee and wasp team safely removes hives and nests from walls, eaves, trees, and structures. We relocate honey bees when possible and treat wasp nests to prevent rebuilding.",
      },
    ],
    process: [
      { step: 1, title: "Free Inspection", desc: "We inspect your property inside and out, identifying pest activity, entry points, and risk areas." },
      { step: 2, title: "Custom Plan", desc: "Based on our findings, we create a targeted treatment plan specific to your home and pest pressure." },
      { step: 3, title: "Expert Treatment", desc: "Our licensed technicians apply EPA-approved treatments using the latest equipment and methods." },
      { step: 4, title: "Ongoing Protection", desc: "Regular service visits maintain your pest barrier and catch new activity before it becomes a problem." },
    ],
    faqs: [
      { q: "How often should I get pest control in Arizona?", a: "We recommend monthly or bi-monthly service in Arizona due to year-round pest pressure. Scorpions, roaches, and ants are active in every season, with peak activity during monsoon (July-September) and spring warm-up (March-May)." },
      { q: "Is pest control safe for kids and pets?", a: "Yes. We use EPA-approved products and apply them strategically in cracks, crevices, and exterior perimeters. We recommend staying off treated exterior areas for 30 minutes after service. Interior treatments are placed in areas away from children and pets." },
      { q: "Do you offer free pest inspections?", a: "Absolutely. Every new customer receives a free, no-obligation inspection. Our technician will identify current pest activity, potential entry points, and risk factors, then recommend a customized treatment plan." },
      { q: "How quickly can you respond to a pest emergency?", a: "We offer same-day and next-day service for urgent pest situations including scorpion infestations, bee/wasp nests near doorways, and rodent sightings. Call us and we will get a technician to your home as quickly as possible." },
      { q: "What is your termite warranty?", a: "Our termite treatments include a renewable warranty. We perform annual re-inspections and retreatments as needed at no additional cost during the warranty period. We also offer termite warranties for new construction pre-treatments." },
    ],
  },

  /* ═══════════════════════════════════════════
     2. HVAC / AIR CONDITIONING
     ═══════════════════════════════════════════ */
  {
    name: "HVAC / Air Conditioning",
    slug: "hvac",
    tagline: "Keep Your Home Cool When Arizona Heats Up",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    heroImage: "/images/hvac-rooftop-install.jpg",
    color: "#2563eb",
    phone: { phoenix: "(480) 422-8388", tucson: "(520) 284-9930" },
    description:
      "Bucksworth Home Services is a licensed HVAC contractor serving Phoenix and Tucson, Arizona. When summer temperatures hit 115°F, your AC is not a luxury — it is a lifeline. Our NATE-certified technicians install, repair, and maintain all major brands including Daikin, Trane, Carrier, Lennox, and Goodman. From emergency AC repairs to full system replacements with financing, we keep Arizona homes comfortable year-round. AZ ROC #343924.",
    subServices: [
      {
        name: "AC Repair",
        slug: "ac-repair",
        icon: "wrench",
        shortDesc: "Same-day emergency AC repair service",
        longDesc:
          "When your AC goes out in Arizona summer, every minute matters. Our technicians diagnose and repair all makes and models — compressor failures, refrigerant leaks, capacitor replacements, fan motor issues, and thermostat problems. Same-day service available 7 days a week.",
      },
      {
        name: "AC Installation",
        slug: "ac-installation",
        icon: "install",
        shortDesc: "New system installation with financing",
        longDesc:
          "We install high-efficiency air conditioning systems from Daikin, Trane, Carrier, and Goodman. Every installation includes a Manual J load calculation, proper ductwork evaluation, and manufacturer warranty registration. Financing options available with payments as low as $89/month.",
      },
      {
        name: "AC Maintenance",
        slug: "ac-maintenance",
        icon: "maintenance",
        shortDesc: "Bi-annual tune-ups to prevent breakdowns",
        longDesc:
          "Our AC maintenance program includes coil cleaning, refrigerant level checks, electrical connection inspection, thermostat calibration, and filter replacement. Regular maintenance extends system life by 5-7 years and prevents 95% of emergency breakdowns.",
      },
      {
        name: "Heating Repair",
        slug: "heating-repair",
        icon: "flame",
        shortDesc: "Heat pump & furnace repair services",
        longDesc:
          "Arizona winter nights can drop into the 30s. We repair heat pumps, gas furnaces, and electric heaters. Common issues include ignitor failures, heat exchanger cracks, blower motor problems, and thermostat malfunctions. Fast response when you need warmth.",
      },
      {
        name: "Ductwork",
        slug: "ductwork",
        icon: "duct",
        shortDesc: "Duct repair, sealing & replacement",
        longDesc:
          "Leaky ductwork wastes up to 30% of your cooling energy in Arizona attics where temperatures exceed 150°F. We inspect, seal, repair, and replace ductwork to improve efficiency, reduce energy bills, and improve indoor air quality throughout your home.",
      },
      {
        name: "Mini Split Systems",
        slug: "mini-split-systems",
        icon: "minisplit",
        shortDesc: "Ductless AC for additions & problem rooms",
        longDesc:
          "Mini split systems are perfect for Arizona room additions, garages, casitas, and rooms that are always too hot or too cold. We install single and multi-zone ductless systems from Daikin and Mitsubishi with SEER ratings up to 30 for maximum efficiency.",
      },
      {
        name: "Smart Thermostat",
        slug: "smart-thermostat",
        icon: "thermostat",
        shortDesc: "Ecobee, Nest & Honeywell installation",
        longDesc:
          "Smart thermostats save Arizona homeowners 15-23% on cooling costs by learning your schedule and optimizing runtime. We install and configure Ecobee, Nest, and Honeywell systems with proper C-wire connections and WiFi integration.",
      },
      {
        name: "Indoor Air Quality",
        slug: "indoor-air-quality",
        icon: "air",
        shortDesc: "Filtration, UV lights & humidification",
        longDesc:
          "Arizona's dry, dusty air creates indoor air quality challenges. We install HEPA filtration systems, UV germicidal lights, whole-home humidifiers, and air purifiers that remove dust, allergens, bacteria, and VOCs from your indoor environment.",
      },
      {
        name: "Insulation",
        slug: "insulation",
        icon: "insulation",
        shortDesc: "Attic & wall insulation for energy savings",
        longDesc:
          "Proper insulation is critical in Arizona where attic temperatures exceed 160°F in summer. We install blown-in fiberglass, cellulose, and spray foam insulation in attics, walls, and crawl spaces. Most homes see 20-40% reduction in cooling costs after insulation upgrades.",
      },
    ],
    process: [
      { step: 1, title: "Diagnostic Call", desc: "We listen to your symptoms, check your system history, and schedule a visit — often same-day for emergencies." },
      { step: 2, title: "Full Inspection", desc: "Our technician inspects your entire system — indoor unit, outdoor unit, ductwork, thermostat, and electrical connections." },
      { step: 3, title: "Honest Estimate", desc: "We explain exactly what is wrong, show you the options, and give you upfront pricing before any work begins." },
      { step: 4, title: "Expert Repair", desc: "Our NATE-certified techs complete the repair with quality parts and back everything with our satisfaction guarantee." },
    ],
    faqs: [
      { q: "How much does AC repair cost in Phoenix?", a: "Most AC repairs in Phoenix range from $150-$600 depending on the issue. Common repairs like capacitor replacement are on the lower end, while compressor or coil replacements are higher. We provide upfront pricing before starting any work." },
      { q: "When should I replace my AC instead of repairing it?", a: "Consider replacement if your system is 15+ years old, uses R-22 refrigerant (phased out), needs a compressor replacement, or repair costs exceed 50% of a new system. We help you weigh the options honestly." },
      { q: "How long does a new AC installation take?", a: "Most residential AC installations are completed in one day (6-8 hours). Complex installations involving ductwork modification or multi-zone systems may take 2 days. We schedule around your availability." },
      { q: "Do you offer financing for new AC systems?", a: "Yes. We offer financing through multiple lenders with options including 0% APR for qualified buyers, low monthly payments starting at $89/month, and same-as-cash options for 12-18 months." },
      { q: "How often should I service my AC in Arizona?", a: "We recommend bi-annual maintenance — once in spring before cooling season and once in fall before heating season. Arizona systems work harder than anywhere in the country, so regular maintenance is essential for longevity and efficiency." },
    ],
  },

  /* ═══════════════════════════════════════════
     3. PLUMBING
     ═══════════════════════════════════════════ */
  {
    name: "Plumbing",
    slug: "plumbing",
    tagline: "Honest Plumbing That Won't Drain Your Wallet",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    heroImage: "/images/hvac-soldering.jpg",
    color: "#0891b2",
    phone: { phoenix: "(480) 422-8388", tucson: "(520) 284-9930" },
    description:
      "Bucksworth Home Services provides licensed plumbing services for homes and businesses across Phoenix and Tucson, Arizona. From emergency leak repairs to full re-pipes and water heater installations, our plumbers handle it all with upfront pricing and no hidden fees. Arizona's hard water, extreme heat, and aging infrastructure create unique plumbing challenges that our experienced team knows how to solve. AZ ROC #343924.",
    subServices: [
      {
        name: "Leak Detection & Repair",
        slug: "leak-detection-repair",
        icon: "leak",
        shortDesc: "Electronic leak detection & slab leak repair",
        longDesc:
          "Arizona slab foundations make leak detection critical. We use electronic listening equipment and thermal imaging to locate hidden leaks under slabs, in walls, and underground without unnecessary demolition. Once found, we repair or reroute lines with minimal disruption.",
      },
      {
        name: "Water Heater Services",
        slug: "water-heater-services",
        icon: "waterheater",
        shortDesc: "Tank & tankless water heater repair/install",
        longDesc:
          "Arizona's hard water shortens water heater life to 8-10 years. We install and repair tank and tankless water heaters from Rheem, AO Smith, Rinnai, and Navien. Tankless units provide endless hot water and save up to 30% on energy costs.",
      },
      {
        name: "Drain Cleaning",
        slug: "drain-cleaning",
        icon: "drain",
        shortDesc: "Hydro jetting & drain snake services",
        longDesc:
          "Slow drains, clogs, and sewer backups require professional clearing. We use motorized drain snakes for simple clogs and hydro jetting (4,000 PSI) for stubborn blockages, grease buildup, and root intrusion in main sewer lines.",
      },
      {
        name: "Sewer Line Services",
        slug: "sewer-line-services",
        icon: "sewer",
        shortDesc: "Camera inspection, repair & replacement",
        longDesc:
          "Our sewer camera inspections reveal root intrusion, pipe bellies, cracks, and blockages. We offer traditional dig repairs, trenchless pipe lining (cured-in-place), and pipe bursting for full sewer line replacement with minimal yard disruption.",
      },
      {
        name: "Re-Piping",
        slug: "re-piping",
        icon: "pipes",
        shortDesc: "Whole-home copper & PEX re-piping",
        longDesc:
          "Many Arizona homes built before 1985 have polybutylene pipes prone to failure. We re-pipe homes with copper or PEX piping, replacing all supply lines, valves, and connections. Most whole-home re-pipes are completed in 1-2 days.",
      },
      {
        name: "Fixture Installation",
        slug: "fixture-installation",
        icon: "faucet",
        shortDesc: "Faucets, toilets, garbage disposals & more",
        longDesc:
          "We install all plumbing fixtures including kitchen and bathroom faucets, toilets, garbage disposals, dishwashers, washing machine hookups, and outdoor hose bibs. Professional installation prevents leaks and ensures manufacturer warranty compliance.",
      },
      {
        name: "Water Softener",
        slug: "water-softener",
        icon: "softener",
        shortDesc: "Hard water treatment systems",
        longDesc:
          "Phoenix water hardness averages 15-25 grains per gallon — among the hardest in the nation. We install whole-home water softeners, reverse osmosis systems, and filtration units that protect your plumbing, extend appliance life, and improve water taste.",
      },
      {
        name: "Gas Line Services",
        slug: "gas-line-services",
        icon: "gas",
        shortDesc: "Gas line repair, installation & leak detection",
        longDesc:
          "We install and repair natural gas and propane lines for water heaters, furnaces, stoves, dryers, pool heaters, fire pits, and BBQ grills. All gas work includes pressure testing and leak detection to ensure safety compliance.",
      },
    ],
    process: [
      { step: 1, title: "Call or Book Online", desc: "Describe your plumbing issue and we will schedule a visit — same-day available for emergencies like leaks and backups." },
      { step: 2, title: "Diagnose the Problem", desc: "Our plumber inspects the issue, explains what is wrong in plain language, and provides an upfront written estimate." },
      { step: 3, title: "Fix It Right", desc: "We complete the repair or installation using quality materials and back our work with a satisfaction guarantee." },
      { step: 4, title: "Prevent Future Issues", desc: "We inspect connected systems, recommend preventive measures, and make sure everything is working properly before we leave." },
    ],
    faqs: [
      { q: "How much does a plumber cost in Phoenix?", a: "Service calls in Phoenix typically range from $89-$150 for the diagnostic visit, with repairs ranging from $150-$800 depending on complexity. We always provide an upfront written estimate before starting any work." },
      { q: "Do you offer emergency plumbing service?", a: "Yes. We provide same-day emergency plumbing service for active leaks, sewer backups, no hot water, and burst pipes. Call us anytime and we will get a plumber to your home as quickly as possible." },
      { q: "How long do water heaters last in Arizona?", a: "Tank water heaters typically last 8-12 years in Arizona due to hard water mineral buildup. Tankless units last 15-20 years with proper maintenance. We recommend annual flushing to extend the life of any water heater." },
      { q: "Should I get a water softener in Phoenix?", a: "We strongly recommend it. Phoenix has some of the hardest water in the country (15-25 GPG). Hard water damages pipes, water heaters, dishwashers, and fixtures. A water softener pays for itself by extending the life of your plumbing system." },
      { q: "What is the cost of a whole-home re-pipe?", a: "Whole-home re-pipes in Phoenix typically range from $4,000-$10,000 depending on home size, number of fixtures, and pipe material (copper vs PEX). We provide free estimates and financing options for larger projects." },
    ],
  },

  /* ═══════════════════════════════════════════
     4. INSULATION
     ═══════════════════════════════════════════ */
  {
    name: "Insulation",
    slug: "insulation",
    tagline: "Cut Your Energy Bills by Up to 40%",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
    heroImage: "/images/bigger-equipment.jpg",
    color: "#d97706",
    phone: { phoenix: "(480) 422-8388", tucson: "(520) 284-9930" },
    description:
      "Bucksworth Home Services installs professional insulation for homes across Phoenix and Tucson, Arizona. With attic temperatures exceeding 160°F in summer, proper insulation is the single most impactful upgrade for reducing energy costs and improving comfort. Our insulation services include attic insulation, wall insulation, spray foam, and radiant barriers — all designed for Arizona's extreme climate.",
    subServices: [
      {
        name: "Attic Insulation",
        slug: "attic-insulation",
        icon: "attic",
        shortDesc: "Blown-in fiberglass & cellulose",
        longDesc:
          "Your attic is the biggest source of heat gain in an Arizona home. We install blown-in fiberglass and cellulose insulation to R-38 or higher, creating a thermal barrier that keeps your home cool in summer and warm in winter while reducing AC strain and energy bills.",
      },
      {
        name: "Spray Foam Insulation",
        slug: "spray-foam",
        icon: "sprayfoam",
        shortDesc: "Open & closed cell spray foam",
        longDesc:
          "Spray foam insulation provides the highest R-value per inch and creates an air-tight seal that stops heat transfer and air leakage. We install open-cell and closed-cell spray foam in attics, walls, rim joists, and crawl spaces for maximum energy efficiency.",
      },
      {
        name: "Radiant Barrier",
        slug: "radiant-barrier",
        icon: "barrier",
        shortDesc: "Reflective attic barrier installation",
        longDesc:
          "Radiant barriers reflect up to 97% of radiant heat in your attic, reducing attic temperatures by 20-30°F. Combined with insulation, a radiant barrier is one of the most cost-effective upgrades for Arizona homes, paying for itself in energy savings within 2-3 years.",
      },
      {
        name: "Wall Insulation",
        slug: "wall-insulation",
        icon: "wall",
        shortDesc: "Retrofit injection foam for existing walls",
        longDesc:
          "Many Arizona homes have uninsulated or under-insulated walls. We use injection foam that fills wall cavities without removing drywall. This retrofit solution improves comfort, reduces noise, and can lower energy bills by 15-25%.",
      },
    ],
    process: [
      { step: 1, title: "Energy Assessment", desc: "We inspect your current insulation levels, identify heat gain sources, and measure R-values throughout your home." },
      { step: 2, title: "Custom Recommendation", desc: "Based on your home, budget, and goals, we recommend the most cost-effective insulation solution with projected savings." },
      { step: 3, title: "Professional Install", desc: "Our trained crew installs insulation efficiently and cleanly, typically completing most homes in one day." },
      { step: 4, title: "Energy Savings", desc: "Most homeowners see a 20-40% reduction in cooling costs within the first month. We follow up to ensure you are seeing results." },
    ],
    faqs: [
      { q: "How much can insulation save on my energy bill?", a: "Most Arizona homeowners see a 20-40% reduction in cooling costs after proper insulation. The exact savings depend on your home's current insulation levels, HVAC efficiency, and home size. Many insulation upgrades pay for themselves within 2-3 years." },
      { q: "What R-value do I need in Arizona?", a: "The Department of Energy recommends R-38 to R-60 for Arizona attics (Climate Zone 2). Most existing Arizona homes have R-19 or less. We measure your current levels and bring them up to recommended standards." },
      { q: "How long does insulation installation take?", a: "Most attic insulation jobs are completed in 4-6 hours. Spray foam installations typically take one full day. Wall insulation retrofit can take 1-2 days depending on home size. We work around your schedule." },
      { q: "Is spray foam worth the extra cost?", a: "Spray foam costs more upfront but provides the highest R-value per inch, creates an air-tight seal, and lasts the lifetime of your home without settling or degrading. For Arizona attics, it provides superior performance over blown-in insulation." },
    ],
  },
];

/* ── Helper functions ── */

export function getServiceBySlug(slug: string): ServiceVertical | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getSubServiceBySlug(
  serviceSlug: string,
  subSlug: string
): SubService | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.subServices.find((ss) => ss.slug === subSlug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
