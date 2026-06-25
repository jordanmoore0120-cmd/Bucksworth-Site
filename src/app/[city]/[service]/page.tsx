import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CITIES, getCityBySlug, getPhoneForBranch, getPhoneForBranchRaw, type City } from "@/lib/cities";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { getNeighborhoods, type Neighborhood } from "@/lib/neighborhoods";
import CityBar from "@/components/CityBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import CitySync from "@/components/CitySync";
import NearbyCities from "@/components/NearbyCities";
import OtherServices from "@/components/OtherServices";
import RelatedPosts from "@/components/RelatedPosts";
import { getRelatedBlogPostsForServiceHub } from "@/lib/blog-links";
import { getServiceHubOverride } from "@/lib/service-hub-overrides";

interface ServiceHubProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  const combos: { city: string; service: string }[] = [];
  for (const city of CITIES) {
    const services =
      city.branch === "phoenix"
        ? SERVICES
        : SERVICES.filter((s) => s.slug === "pest-and-termite" || s.slug === "weed-and-lawn-care");
    for (const svc of services) {
      combos.push({ city: city.slug, service: svc.slug });
    }
  }
  return combos;
}

export async function generateMetadata({ params }: ServiceHubProps): Promise<Metadata> {
  const { city: citySlug, service: svcSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(svcSlug);
  if (!city || !service) return {};

  const hubOverride = getServiceHubOverride(citySlug, svcSlug);
  if (hubOverride) {
    return {
      title: hubOverride.metaTitle,
      description: hubOverride.metaDescription,
      alternates: { canonical: `https://www.getyourbucksworth.com/${citySlug}/${svcSlug}` },
    };
  }

  const phone = getPhoneForBranch(city.branch);
  const isAJ = citySlug === "apache-junction-az";
  const metaDescription = isAJ
    ? `${service.name} in ${city.name}, AZ — headquartered locally at 2073 W Houston Ave. ${service.tagline}. Same-day service, free inspections. Call ${phone}.`
    : `${service.name} in ${city.name}, AZ. ${service.tagline}. Same-day service, free inspections. Call ${phone}.`;
  return {
    title: `${service.name} in ${city.name}, AZ`,
    description: metaDescription,
    alternates: { canonical: `https://www.getyourbucksworth.com/${citySlug}/${svcSlug}` },
  };
}

/* ─── Pillar-page content helpers ────────────────────────────── */

function getSeasonalContent(svcSlug: string, cityName: string, nhoods: Neighborhood[], landmarks: string[], population: string, county: string) {
  const n0 = nhoods[0]?.name || "central " + cityName;
  const n1 = nhoods[1]?.name || "surrounding neighborhoods";
  const n2 = nhoods[2]?.name || "outer communities";
  const n0d = nhoods[0]?.desc ? ` ${nhoods[0].desc}` : "";
  const n1d = nhoods[1]?.desc ? ` ${nhoods[1].desc}` : "";
  const lm = landmarks.length > 0 ? landmarks[0] : "the surrounding desert";
  const lm2 = landmarks.length > 1 ? landmarks[1] : "nearby preserves";
  const zips = nhoods[0]?.zips?.[0] || "";
  const zipNote = zips ? ` (zip ${zips})` : "";

  const seasonalMap: Record<string, { title: string; seasons: { name: string; detail: string }[] }> = {
    "pest-and-termite": {
      title: `Seasonal Pest Calendar for ${cityName}, ${county} County`,
      seasons: [
        { name: "Spring (March–May)", detail: `As temperatures climb past 80°F in ${cityName}, scorpion activity surges dramatically — especially in neighborhoods like ${n0}${zipNote} where${n0d || " desert terrain meets residential construction."}  Bark scorpions emerge from winter hiding spots in block walls, expansion joints, and under rocks near ${lm}. Termite swarmers take flight during spring rains across the ${population}-resident community, and ant colonies expand aggressively. This is the most critical time for perimeter treatments and termite inspections in ${cityName}.` },
        { name: "Summer (June–August)", detail: `${cityName} summers regularly exceed 110°F, driving pests indoors seeking water and cool shelter across all ${county} County communities. In ${n1},${n1d || " scorpions, roaches, and crickets are at peak activity."} Monsoon rains in July and August create standing water near ${lm2} that breeds mosquitoes within 48 hours. We increase service frequency for summer months and add mosquito fogging to protect outdoor living spaces in neighborhoods from ${n0} to ${n2}.` },
        { name: "Fall (September–November)", detail: `Cooling temperatures bring relief to ${cityName} residents in ${n0} and ${n1} but also drive rodents indoors for warmth. Pack rats and roof rats begin nesting in attics, garages, and engine compartments — particularly in established neighborhoods near ${lm} where mature landscaping provides cover. Black widows are most aggressive in fall across ${cityName} as they protect egg sacs. This is ideal timing for rodent exclusion and spider treatments.` },
        { name: "Winter (December–February)", detail: `While winter is the quietest pest season in ${cityName}, the ${population} homes here are far from pest-free. In ${n2} and throughout ${county} County, scorpions hibernate in clusters inside walls, German roaches breed indoors year-round, and termites remain active underground near ${lm2}. Winter is the perfect time for preventive termite treatments and thorough inspections in neighborhoods like ${n0} before spring activity begins.` },
      ],
    },
    "air-conditioning-and-heating": {
      title: `HVAC Seasonal Guide for ${cityName}, ${county} County`,
      seasons: [
        { name: "Spring (March–May)", detail: `Spring is the most important time for AC maintenance in ${cityName}. Across ${n0}${zipNote} and ${n1}, homes built in different eras have different HVAC needs — older systems in established areas need more attention than newer installations.${n0d ? ` In ${n0}, ${n0d.trim().toLowerCase()}` : ""} Before triple-digit heat arrives, schedule a tune-up to clean coils, check refrigerant levels, test capacitors, and verify thermostat calibration. A pre-season tune-up can improve efficiency by 15–20% for ${cityName}'s ${population} residents.` },
        { name: "Summer (June–August)", detail: `With ${cityName} temperatures exceeding 115°F, your AC runs 12–18 hours per day. This extreme load causes capacitor failures, refrigerant leaks, and compressor breakdowns across ${county} County — from ${n0} to ${n2}. Homes near ${lm} face additional heat radiation from surrounding terrain. We offer same-day emergency AC repair throughout ${cityName} and keep common parts in stock. If your system is 15+ years old, summer breakdowns often signal it is time for a high-efficiency replacement.` },
        { name: "Fall (September–November)", detail: `Fall is the ideal time for AC replacement in ${cityName}. Demand drops, manufacturer rebates are highest, and installation crews have maximum availability across ${county} County. ${n1d ? `Homeowners in ${n1} — ${n1d.trim().toLowerCase()} —` : `Homeowners in ${n1}`} can take advantage of off-season pricing. It is also time to switch to heating mode and test your furnace or heat pump before the first cold snap. We check heat exchangers for cracks, test ignition systems, and verify carbon monoxide safety.` },
        { name: "Winter (December–February)", detail: `${cityName} winters can drop below freezing at night, especially in areas near ${lm} at higher elevations. If your heating system in ${n0} or ${n2} has not been serviced, it may struggle or fail when you need it most. We also recommend this season for ductwork inspections and insulation upgrades — ${cityName} homes lose 20–40% of conditioned air through leaky ducts and insufficient attic insulation.` },
      ],
    },
    "plumbing-and-water-heaters": {
      title: `Plumbing Seasonal Tips for ${cityName}, ${county} County`,
      seasons: [
        { name: "Spring (March–May)", detail: `Spring is when ${cityName} homeowners in ${n0} and ${n1} discover winter pipe damage. Temperature fluctuations stress joints and fittings throughout ${county} County, and irrigation systems reactivated after winter may reveal leaks.${n0d ? ` In ${n0}, ${n0d.trim().toLowerCase()}` : ""} Schedule a plumbing inspection to check supply lines, water heater anodes, and irrigation connections before summer demand peaks across ${cityName}'s ${population} homes.` },
        { name: "Summer (June–August)", detail: `High water usage in ${cityName} summers strains plumbing systems across every neighborhood from ${n0}${zipNote} to ${n2}. Water heaters work harder, garbage disposals see more use, and hard water mineral buildup accelerates — ${county} County water is among the hardest in the country at 15–25+ grains per gallon. If your water heater is over 8 years old, summer is when failures are most common. We recommend flushing your water heater annually and installing a water softener to extend fixture life.` },
        { name: "Fall (September–November)", detail: `Fall is ideal for water heater replacement and whole-home re-piping in ${cityName}. Demand is lower in ${n1} and across ${county} County, and you can schedule at your convenience. We also recommend drain cleaning before holiday gatherings put extra strain on kitchen and bathroom drains. Many older homes near ${lm} still have original plumbing that benefits from a fall inspection.` },
        { name: "Winter (December–February)", detail: `Freezing nights in ${cityName} can burst exposed pipes, especially in garages, attics, and exterior walls in neighborhoods like ${n2} closer to the desert edge near ${lm2}. Insulate exposed pipes, disconnect garden hoses, and know where your main water shutoff valve is located. If temperatures drop below 32°F, let faucets drip slightly to prevent freezing. Our emergency plumbing team serves all of ${cityName} same-day.` },
      ],
    },
    "weed-and-lawn-care": {
      title: `Weed & Lawn Seasonal Guide for ${cityName}, ${county} County`,
      seasons: [
        { name: "Spring (March–May)", detail: `Spring is the most aggressive weed season in ${cityName}. In ${n0}${zipNote} and ${n1}, desert weeds like spurge, puncturevine, and Russian thistle germinate rapidly as temperatures warm.${n0d ? ` ${n0d.trim()}` : ""} Pre-emergent herbicides applied in February–March create a barrier that prevents weed seeds from establishing across ${cityName}'s neighborhoods. If weeds are already visible, post-emergent treatments target them at the root.` },
        { name: "Summer (June–August)", detail: `${cityName} summer heat above 110°F suppresses most weed growth in ${county} County but creates stress on Bermuda grass lawns throughout ${n1} and ${n2}. Proper irrigation timing (early morning, deep and infrequent), mowing height (2–3 inches), and fertilization keep lawns healthy. Monsoon rains in July trigger a second wave of weed germination near ${lm} that requires follow-up treatment for ${cityName}'s ${population} homes.` },
        { name: "Fall (September–November)", detail: `Fall is overseeding season for Bermuda lawns in ${cityName}. From ${n0} to ${n2}, annual ryegrass keeps yards green through winter while Bermuda goes dormant. A second round of pre-emergent in October prevents winter annual weeds like London Rocket and Sahara mustard across ${county} County. Fertilize overseeded lawns every 4–6 weeks for best results.` },
        { name: "Winter (December–February)", detail: `Winter weeds in ${cityName} include Bermuda grass (ironically), London Rocket, and various mustards — especially in rock yards near ${lm} and ${lm2}. Pre-emergent from fall should be holding across ${n0} and ${n1}, but spot treatments may be needed. February is the critical window for spring pre-emergent application — apply too late and you will be fighting weeds all season in ${cityName}.` },
      ],
    },
  };
  return seasonalMap[svcSlug] || null;
}

function getCommonProblems(svcSlug: string, cityName: string, nhoods: Neighborhood[], landmarks: string[]) {
  const n0 = nhoods[0]?.name || cityName;
  const n1 = nhoods[1]?.name || "nearby neighborhoods";
  const n2 = nhoods[2]?.name || "surrounding areas";
  const n0d = nhoods[0]?.desc || "";
  const n1d = nhoods[1]?.desc || "";
  const lm = landmarks[0] || "the desert";
  const lm2 = landmarks[1] || "nearby preserves";
  const problemsMap: Record<string, { problem: string; signs: string; solution: string }[]> = {
    "pest-and-termite": [
      { problem: `Scorpion Infestations in ${n0} & ${cityName}`, signs: `Finding bark scorpions inside the home, especially in bathrooms, closets, and near doorways.${n0d ? ` In ${n0}, ${n0d.toLowerCase()}` : ""} Activity increases at night and during warm months throughout ${cityName}.`, solution: `We perform a UV blacklight inspection to locate scorpions, apply targeted residual treatments to harborage areas, seal entry points at the foundation, and install weatherstripping on doors and garage entries. Monthly service from ${n0} to ${n2} maintains the protective barrier.` },
      { problem: `Termite Damage Near ${lm}`, signs: `Mud tubes on foundation walls, hollow-sounding wood, discarded wings near windows, bubbling or peeling paint. Subterranean termites cause 95% of termite damage in Arizona, and homes near ${lm} in ${cityName} are particularly susceptible due to soil moisture patterns.`, solution: `We install Sentricon baiting stations around your foundation and apply Termidor liquid barrier treatment. For active infestations, we treat affected wood directly. All treatments for ${cityName} homeowners include a renewable warranty with annual re-inspections.` },
      { problem: `Rodent Activity in ${n1} & ${n2}`, signs: `Droppings in cabinets or garage, gnaw marks on wires, noises in walls or attic at night. ${n1d ? `In ${n1}, ${n1d.toLowerCase()}` : `Neighborhoods near ${lm2} see higher rodent pressure.`} Nesting material in storage areas and chewed irrigation lines are common in ${cityName}.`, solution: `Our rodent exclusion program includes trapping and removal, complete exterior inspection, sealing of all entry points (gaps as small as a quarter), sanitation of contaminated areas, and follow-up monitoring across every ${cityName} neighborhood.` },
    ],
    "air-conditioning-and-heating": [
      { problem: `AC Not Cooling in ${cityName} Heat`, signs: `Air blowing warm or lukewarm, AC running constantly but not reaching set temperature. Homes in ${n0} and ${n1} face particularly intense heat loads.${n0d ? ` ${n0d}` : ""} Unusually high electric bills signal a system struggling to keep up.`, solution: `We diagnose the root cause — low refrigerant from a leak, a failed capacitor, dirty evaporator or condenser coils, a malfunctioning compressor, or incorrect thermostat settings. Our ${cityName} trucks carry common parts for same-day repair from ${n0} to ${n2}.` },
      { problem: `High Energy Bills in ${n0} & ${cityName}`, signs: `Monthly electric bills exceeding $400–$600 in summer, AC running 18+ hours per day, rooms that never cool evenly. Homes near ${lm} at higher elevations may see different patterns than those in ${n1}.`, solution: `We perform a comprehensive energy audit including duct leakage testing, insulation evaluation, and system efficiency measurement for ${cityName} homes. Solutions include duct sealing (Aeroseal), attic insulation upgrade to R-38+, smart thermostat installation, or replacement with a high-efficiency (16+ SEER2) system that can cut energy costs 30–50%.` },
      { problem: `Uneven Temperatures in ${cityName} Homes`, signs: `Some rooms are hot while others are cold, thermostat wars between family members. In ${n0}, older construction often has different duct layouts than newer homes in ${n2}, leading to different comfort issues.`, solution: `Uneven temperatures usually indicate duct problems — leaks, undersized ducts, or poor design. We test airflow at every vent, inspect ductwork for leaks and kinks, and recommend solutions including duct repair, zoning systems, or supplemental mini-split installations for problem areas in ${cityName}.` },
    ],
    "plumbing-and-water-heaters": [
      { problem: `Hard Water Damage in ${n0} & ${cityName}`, signs: `White mineral buildup on faucets and showerheads, spots on dishes, dry skin and hair. ${cityName} residents in ${n0} and ${n1} deal with some of the hardest water in Arizona at 15–25+ grains per gallon, causing reduced water heater efficiency and scale buildup inside pipes.`, solution: `We install whole-home water softeners and reverse osmosis drinking water systems for ${cityName} homeowners. For existing scale in older homes near ${lm}, we flush water heaters and descale fixtures. Softened water extends the life of your appliances and plumbing by 30–50%.` },
      { problem: `Water Heater Failure in ${cityName}`, signs: `Lukewarm or cold water, rumbling or popping noises from the tank, rust-colored water, puddles around the base. Hard water in ${n1} and throughout ${cityName} accelerates water heater wear — units over 8–10 years old are at highest risk.`, solution: `We offer same-day water heater replacement with both traditional tank and tankless options throughout ${cityName}. We handle all permits, disposal of the old unit, and code-required upgrades. Tankless units provide endless hot water and save 20–30% on water heating costs.` },
      { problem: `Slow or Clogged Drains in ${cityName}`, signs: `Water draining slowly in showers, sinks, or tubs, gurgling sounds, multiple drains backing up simultaneously. Homes near ${lm} and in ${n2} with mature landscaping often deal with root intrusion in sewer lines.`, solution: `We use professional hydro-jetting and video camera inspection to clear and diagnose drain problems across ${cityName}. Simple clogs are cleared same-day. For recurring issues, we camera-inspect the sewer line to identify root intrusion, bellies, or deteriorating pipe.` },
    ],
    "weed-and-lawn-care": [
      { problem: `Persistent Weeds in ${n0} Rock Yards`, signs: `Weeds growing through rock landscaping near ${lm}, spurge and puncturevine spreading in gravel. In ${n0} and ${n1}, weeds return within weeks of pulling them —${n0d ? ` ${n0d.toLowerCase()}` : " desert conditions make it worse."}`, solution: `We apply a combination of pre-emergent herbicides (to prevent new germination) and post-emergent treatments (to kill existing weeds at the root) across ${cityName}. Unlike hand-pulling, our treatments prevent regrowth for 3–6 months. Quarterly service keeps rock yards in ${n0} and ${n2} weed-free year-round.` },
      { problem: `Bermuda Grass Lawn Decline in ${n1}`, signs: `Thin, patchy lawn, brown spots despite watering, excessive thatch buildup near ${lm2}. Lawns in ${n1} and ${cityName}'s newer developments may not green up in spring, with weed invasion filling thin areas.`, solution: `We evaluate irrigation timing, mowing practices, and soil condition for ${cityName} lawns. Solutions include core aeration, dethatching, targeted fertilization with Arizona-appropriate formulations, and overseeding with winter ryegrass in fall. Proper lawn care in ${n0} through ${n2} reduces weed pressure naturally.` },
      { problem: `HOA Weed Violations in ${cityName}`, signs: `New construction homes in ${n2} and ${n1} with gravel yards quickly overrun by weeds. HOA violation notices for weeds, constant cycle of pulling and regrowth. Many ${cityName} HOAs have strict landscape requirements.`, solution: `Our pre-emergent program creates an invisible barrier in the soil that prevents weed seeds from germinating in ${cityName} neighborhoods. Applied quarterly, this keeps gravel and rock yards from ${n0} to ${n2} clean with minimal effort. We also offer weed fabric installation for long-term prevention.` },
    ],
  };
  return problemsMap[svcSlug] || [];
}

function getWhyChooseContent(svcSlug: string, cityName: string, branch: string, nhoods: Neighborhood[], landmarks: string[]) {
  const metro = branch === "phoenix" ? "Phoenix" : "Tucson";
  const n0 = nhoods[0]?.name || cityName;
  const n1 = nhoods[1]?.name || "nearby neighborhoods";
  const n0d = nhoods[0]?.desc || "";
  const lm = landmarks[0] || "the surrounding area";
  const reasons: Record<string, { heading: string; detail: string }[]> = {
    "pest-and-termite": [
      { heading: `Licensed & Insured Technicians Serving ${n0}`, detail: `Every Bucksworth pest technician holds an active Arizona pest management license and is background-checked, drug-tested, and trained specifically for the Sonoran Desert pest ecosystem. From ${n0} to ${n1} and across all of ${cityName}, our AZ ROC license #343924 and AG License #9613 ensure full regulatory compliance.` },
      { heading: `Same-Day Emergency Service in ${cityName}`, detail: `When you find a scorpion in your baby's crib or a bee hive over your front door near ${lm}, you need help now — not next week. We offer same-day service for urgent pest situations throughout ${cityName} and maintain enough capacity to respond to emergencies within hours.` },
      { heading: "EPA-Approved Products Only", detail: `We use only EPA-registered products applied by licensed professionals across ${cityName}. Our treatments are safe for children, pets, and the environment when applied as directed. We follow all Integrated Pest Management (IPM) principles to minimize chemical use while maximizing effectiveness in neighborhoods like ${n0} and ${n1}.` },
      { heading: "Satisfaction Guarantee", detail: `If pests return between your regular service visits in ${n0}, ${n1}, or anywhere in ${cityName}, we come back and retreat at no additional charge. Period. We stand behind our work because our reputation in the ${metro} community depends on your referrals.` },
      { heading: `Free Inspections for ${cityName} Homeowners`, detail: `Every new pest control customer in ${cityName} receives a thorough, no-obligation inspection. Whether you are in ${n0} or ${n1}, our technician will identify current pest activity, potential entry points, conducive conditions, and customized treatment recommendations — before you spend a dime.` },
      { heading: "Transparent Pricing, No Hidden Fees", detail: `You will know exactly what your service costs before we begin anywhere in ${cityName}. No surprise charges, no high-pressure upsells, no bait-and-switch pricing. Our pest and termite plans start at affordable monthly rates with no long-term contracts required.` },
    ],
    "air-conditioning-and-heating": [
      { heading: "AZ ROC Licensed HVAC Contractor", detail: `Bucksworth Home Services holds AZ ROC License #343924 for HVAC installation and repair throughout ${cityName}. Our technicians are NATE-certified and factory-trained on Daikin, Trane, Carrier, Lennox, Goodman, and all major brands serving ${n0} through ${n1}.` },
      { heading: `Same-Day Emergency AC Repair Near ${lm}`, detail: `When your AC fails at 3pm on a 115°F day in ${cityName}, you cannot wait. Whether you are in ${n0} or ${n1}, we stock common parts on every truck — capacitors, contactors, motors, and thermostats — and offer same-day emergency repair. Most repairs are completed in a single visit.` },
      { heading: `Energy Efficiency for ${cityName} Homes`, detail: `${cityName} homeowners spend $3,000–$5,000+ annually on cooling. We specialize in reducing that cost for residents from ${n0} to ${n1} through high-efficiency equipment (16–20+ SEER2), Aeroseal duct sealing, attic insulation upgrades, and smart thermostat optimization. Many customers save 30–50% on cooling costs.` },
      { heading: "Financing Available", detail: `Major HVAC replacements are an investment for ${cityName} homeowners. We offer flexible financing options including 0% APR plans, low monthly payments, and quick approval. We work with multiple lenders to find the best terms for your budget — from ${n0} to ${n1}.` },
      { heading: "All Brands, All Systems", detail: `Rooftop package units, split systems, mini-splits, heat pumps, gas furnaces — we service them all across ${cityName}. Whether your ${n0} home has a 1950s swamp cooler that needs replacing or a brand-new variable-speed system in ${n1}, our technicians have the training and tools.` },
      { heading: "Full-System Warranty", detail: `Every HVAC installation in ${cityName} includes manufacturer warranty coverage (5–12 years depending on equipment) plus Bucksworth labor warranty. We register your equipment with the manufacturer, handle warranty claims, and stand behind our installations throughout the ${metro} area.` },
    ],
    "plumbing-and-water-heaters": [
      { heading: `Licensed Plumbers Serving ${cityName}`, detail: `Our plumbers hold active Arizona licenses and specialize in the unique plumbing challenges of ${cityName} homes — hard water in ${n0}, copper pipe corrosion in ${n1}, polybutylene replacement, and desert soil conditions near ${lm} that affect sewer lines. AZ ROC #343924.` },
      { heading: `Same-Day Plumbing in ${n0} & Beyond`, detail: `Burst pipe? Sewer backup? No hot water? We offer same-day emergency plumbing service from ${n0} to ${n1} and all of ${cityName}. Our trucks carry common parts and equipment so most repairs are completed in one visit without return trips.` },
      { heading: "Upfront Pricing Before Work Begins", detail: `We diagnose the problem, explain your options, and provide a written price before we start any work in ${cityName}. No hourly billing surprises, no charges for looking at the problem. You approve the price or we leave — no pressure.` },
      { heading: `Water Quality Solutions for ${cityName}`, detail: `${cityName} water is among the hardest in the country (15–25+ grains per gallon). From ${n0} to ${n1}, we install whole-home water softeners, reverse osmosis systems, and water filtration to protect your plumbing, appliances, and family health.` },
      { heading: "Full Code Compliance", detail: `We pull permits for all work that requires them in ${cityName}, pass inspections on the first visit, and ensure your plumbing meets current Arizona building codes. This protects your home, your insurance, and your resale value throughout the ${metro} area.` },
      { heading: `24/7 Emergency Availability in ${cityName}`, detail: `Plumbing emergencies do not wait for business hours. Call us any time from ${n0} or ${n1} for burst pipes, sewer backups, gas line concerns, or water heater failures. We dispatch a licensed plumber to ${cityName} as quickly as possible.` },
    ],
    "weed-and-lawn-care": [
      { heading: `Weed Expertise for ${cityName} Yards`, detail: `We know the desert around ${lm}. Spurge, puncturevine, Russian thistle, London Rocket, foxtail, Bermuda grass — we identify and treat every weed species common to ${n0}, ${n1}, and all of ${cityName}. Our technicians are trained specifically for Sonoran Desert conditions, not generic lawn care.` },
      { heading: "Pre-Emergent Prevention Programs", detail: `The most effective weed control happens before weeds appear in ${cityName}. Our quarterly pre-emergent program creates a chemical barrier in the soil that prevents weed seeds from germinating. Applied at the right time, this keeps yards from ${n0} to ${n1} 90–95% weed-free year-round.` },
      { heading: `Affordable Plans for ${cityName} Homeowners`, detail: `Our weed and lawn care plans start at competitive monthly rates in ${cityName}. Bundle with pest control for the best value — our Pest + Weed package starts at just $79/month for complete yard protection across ${n0} and ${n1}.` },
      { heading: "Licensed Applicators", detail: `Our technicians hold Arizona pesticide applicator licenses and follow all state regulations for herbicide application in ${cityName}. We use commercial-grade products not available at retail stores, applied at precise rates for maximum effectiveness and safety across the ${metro} area.` },
      { heading: `HOA-Compliant Service in ${n0} & ${n1}`, detail: `Many ${cityName} HOAs require weed-free yards and can issue fines for violations. Our regular service schedule keeps your ${n0} or ${n1} property in compliance and looking great. We provide service documentation if your HOA requests proof of treatment.` },
      { heading: "Satisfaction Guarantee", detail: `If weeds return between treatments anywhere in ${cityName}, we come back and retreat at no extra charge. Our goal is a clean, weed-free yard every day — not just on treatment day.` },
    ],
  };
  return reasons[svcSlug] || [];
}

export default async function ServiceHubPage({ params }: ServiceHubProps) {
  const { city: citySlug, service: svcSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(svcSlug);
  if (!city || !service) notFound();

  const phone = getPhoneForBranch(city.branch);
  const phoneRaw = getPhoneForBranchRaw(city.branch);
  const neighborhoods = getNeighborhoods(city.slug);
  const metro = city.branch === "phoenix" ? "Phoenix" : "Tucson";

  // Check for service hub content override (unique content for priority pages)
  const hubOverride = getServiceHubOverride(citySlug, svcSlug);

  // Get related blog posts for internal cross-linking
  const relatedPosts = getRelatedBlogPostsForServiceHub(citySlug, svcSlug, 6);

  const localFaqs = hubOverride?.faqs || service.faqs.map((faq) => ({
    q: faq.q.includes(city.name) ? faq.q : faq.q.replace(/\?$/, ` in ${city.name}?`),
    a: faq.a,
  }));

  const nearbyCities = CITIES.filter(
    (c) => c.branch === city.branch && c.slug !== city.slug
  );

  const nhoods = neighborhoods.neighborhoods;
  const lmarks = neighborhoods.landmarks;
  const seasonalContent = getSeasonalContent(svcSlug, city.name, nhoods, lmarks, String(city.population), city.county);
  const commonProblems = getCommonProblems(svcSlug, city.name, nhoods, lmarks);
  const whyChoose = getWhyChooseContent(svcSlug, city.name, city.branch, nhoods, lmarks);

  // Schema.org - Service + FAQPage
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} - ${city.name}, AZ`,
    description: service.description,
    provider: {
      "@type": ({"pest-and-termite":"PestControlService","air-conditioning-and-heating":"HVACBusiness","plumbing-and-water-heaters":"Plumber","weed-and-lawn-care":"LandscapingBusiness"} as Record<string,string>)[service.slug] || "LocalBusiness",
      name: "Bucksworth Home Services",
      telephone: phone,
      url: "https://www.getyourbucksworth.com",
      address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: "AZ", addressCountry: "US" },
      geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
      areaServed: [{ "@type": "City", name: city.name }, { "@type": "State", name: "Arizona" }],
      priceRange: "$$",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.84", reviewCount: "2000", bestRating: "5" },
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.84", reviewCount: "2000", bestRating: "5" },
    areaServed: { "@type": "City", name: city.name },
    serviceType: service.name,
    dateModified: "2026-06-21",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Services`,
      itemListElement: service.subServices.map((sub) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: sub.name, description: sub.shortDesc },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getyourbucksworth.com" },
      { "@type": "ListItem", position: 2, name: city.name, item: `https://www.getyourbucksworth.com/${citySlug}` },
      { "@type": "ListItem", position: 3, name: service.name, item: `https://www.getyourbucksworth.com/${citySlug}/${svcSlug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CitySync branch={city.branch} city={city.name} slug={city.slug} />
      <CityBar currentCity={city} />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs crumbs={[{ label: city.name, href: `/${city.slug}` }, { label: service.name }]} />
        </div>

        {/* ── HERO ── */}
        <section className="svc-hub-hero">
          <div className="svc-hub-hero-bg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.heroImage} alt={`${service.name} in ${city.name}`} width={1200} height={800} loading="eager" fetchPriority="high" />
          </div>
          <div className="svc-hub-hero-overlay" />
          <div className="svc-hub-hero-content">
            <p className="city-hero-eyebrow">{city.branch === "phoenix" ? "Phoenix Metro" : "Tucson Metro"} &bull; {city.county} County</p>
            <h1>{hubOverride?.heroHeadline || <>{service.name} in <span>{city.name}, Arizona</span></>}</h1>
            <p>{hubOverride?.heroDescription || <>{service.tagline}. Bucksworth Home Services provides professional {service.name.toLowerCase()} for homes and businesses throughout {city.name} and the greater {metro} metro area.{city.slug === "apache-junction-az" ? " Headquartered right here in Apache Junction." : ""} Licensed, insured, and Google Guaranteed.</>}</p>
            <div className="city-hero-cta" style={{ marginTop: "20px" }}>
              <a href={`tel:${phoneRaw}`} className="btn-call" aria-label={`Call Bucksworth at ${phone}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" /></svg>
                Call {phone}
              </a>
              {service.slug !== "plumbing-and-water-heaters" && (
                <a href={`/request-service?city=${city.slug}&service=${service.slug}`} className="btn-estimate">Get Free Estimate &rarr;</a>
              )}
            </div>
          </div>
        </section>

        {/* ── INTRO CONTENT ── */}
        {hubOverride ? (
          <>
            {hubOverride.introContent.map((block, i) => (
              <section key={i} className="svc-hub-content" style={i % 2 === 1 ? { background: "var(--g50)" } : undefined}>
                <div className="svc-hub-content-inner">
                  <h2>{block.heading}</h2>
                  {block.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </>
        ) : (
          <section className="svc-hub-content">
            <div className="svc-hub-content-inner">
              <h2>{service.name} in {city.name}, Arizona</h2>
              <p>{service.description}</p>
              <p>{city.description}</p>
              <p>
                Whether you live in {nhoods.length > 0 ? nhoods.slice(0, 3).map(n => `${n.name} (${n.zips[0] || ""})`).join(", ") : city.name} or anywhere else in the {city.zipCodes.join(", ")} zip code{city.zipCodes.length > 1 ? "s" : ""}, our {service.name.toLowerCase()} team is ready to help.{nhoods[0]?.desc ? ` In ${nhoods[0].name}, ${nhoods[0].desc.toLowerCase()}` : ""} We serve every neighborhood across {city.name}&apos;s {city.population ? `${Number(city.population).toLocaleString()}-person community` : "community"} and provide same-day service for urgent situations. Call {phone} to schedule your free inspection today.
              </p>
            </div>
          </section>
        )}

        {/* ── SUB-SERVICE GRID ── */}
        <section className="svc-cards-section">
          <div className="container">
            <h2 className="section-title">{service.name} Services in {city.name}</h2>
            <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 32px", color: "var(--g600)", fontSize: "16px", lineHeight: "1.6" }}>
              We offer a complete range of {service.name.toLowerCase()} services for {city.name} homeowners and businesses. Click any service below for detailed information, pricing guidance, and to schedule service.
            </p>
            <div className="svc-hub-grid">
              {service.subServices.map((sub) => (
                <Link key={sub.slug} href={`/${city.slug}/${service.slug}/${sub.slug}`} className="svc-hub-card">
                  <h3>{sub.name}</h3>
                  <p>{sub.longDesc}</p>
                  <span className="svc-hub-card-link">Learn More &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS STEPS ── */}
        <ProcessSteps steps={service.process} color={service.color} title={`Our ${service.name} Process in ${city.name}`} />

        {/* ── WHY CHOOSE BUCKSWORTH ── */}
        <section className="svc-hub-content">
          <div className="svc-hub-content-inner">
            <h2>Why {city.name} Homeowners Choose Bucksworth for {service.name}</h2>
            <p>
              Since 2013, Bucksworth Home Services has been the trusted choice for {service.name.toLowerCase()} in {city.name} and across the {metro} metro area. We are a family-owned company that treats every home like it&apos;s our Gigi&apos;s — that means honest work, quality materials, and a satisfaction guarantee on every job. Here&apos;s what sets us apart:
            </p>
            {whyChoose.map((reason, i) => (
              <div key={i} style={{ marginBottom: "24px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--navy)", marginBottom: "6px" }}>{reason.heading}</h3>
                <p>{reason.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MID-PAGE CTA ── */}
        <CTASection
          city={city}
          variant="primary"
          headline={`Ready for ${service.name} in ${city.name}?`}
          subtext={`Same-day service available. Free inspections for new customers. Call ${phone}${service.slug !== "plumbing-and-water-heaters" ? " or get an instant online estimate." : "."}`}
          hideEstimate={service.slug === "plumbing-and-water-heaters"}
        />

        {/* ── COMMON PROBLEMS ── */}
        {commonProblems.length > 0 && (
          <section className="svc-hub-content">
            <div className="svc-hub-content-inner">
              <h2>Common {service.name} Problems in {city.name}</h2>
              <p>
                {city.name} homes face unique {service.name.toLowerCase()} challenges due to Arizona&apos;s extreme climate, desert environment, and local building practices. Here are the most common issues we solve for {city.name} homeowners:
              </p>
              {commonProblems.map((p, i) => (
                <div key={i} style={{ marginBottom: "28px", padding: "20px", background: "var(--g50)", borderRadius: "8px", borderLeft: `4px solid ${service.color}` }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>{p.problem}</h3>
                  <p><strong>Signs to watch for:</strong> {p.signs}</p>
                  <p><strong>Our solution:</strong> {p.solution}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── SEASONAL GUIDE ── */}
        {seasonalContent && (
          <section className="svc-hub-content" style={{ background: "var(--g50)" }}>
            <div className="svc-hub-content-inner">
              <h2>{seasonalContent.title}</h2>
              <p>
                Arizona&apos;s climate creates year-round {service.name.toLowerCase()} needs in {city.name}. Understanding what to expect each season helps you stay ahead of problems and avoid emergencies. Here&apos;s your seasonal guide:
              </p>
              {seasonalContent.seasons.map((s, i) => (
                <div key={i} style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: service.color, marginBottom: "6px" }}>{s.name}</h3>
                  <p>{s.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── NEIGHBORHOODS WE SERVE ── */}
        {nhoods.length > 0 && (
          <section className="svc-hub-content">
            <div className="svc-hub-content-inner">
              <h2>{service.name} for Every {city.name} Neighborhood</h2>
              <p>
                Our {service.name.toLowerCase()} team serves every neighborhood and community in {city.name}, including:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "6px 16px", margin: "16px 0 20px" }}>
                {nhoods.map((n) => (
                  <span key={n.name} style={{ color: "var(--g700)", fontSize: "14px", padding: "4px 0" }}>&bull; {n.name}</span>
                ))}
              </div>
              <p>
                No matter where you are in {city.name} ({city.zipCodes.join(", ")}), we provide the same fast, professional service. Our technicians know {city.name}&apos;s neighborhoods and the specific {service.name.toLowerCase()} challenges each area faces.
              </p>
            </div>
          </section>
        )}

        {/* ── LOCAL HEADQUARTERS (Apache Junction only) ── */}
        {city.slug === "apache-junction-az" && (
          <section className="svc-hub-content" style={{ background: "var(--g50)" }}>
            <div className="svc-hub-content-inner">
              <h2>Headquartered Right Here in Apache Junction</h2>
              <p>
                Unlike other companies that serve Apache Junction from miles away, <strong>Bucksworth Home Services is headquartered at 2073 W Houston Ave, Suite 101, Apache Junction, AZ 85120</strong>. When you call us, you are calling your neighbors. Our technicians live in the 85118, 85119, and 85120 zip codes, and we know the unique {service.name.toLowerCase()} challenges that come with living at the base of the Superstition Mountains.
              </p>
              <p>
                Because our main office is in Apache Junction, we offer the fastest response times in the area — often arriving same-day for {service.name.toLowerCase()} calls. We have been serving the Superstition Foothills, Gold Canyon, Apache Trail corridor, and surrounding communities since 2013, and our 4.9-star rating with nearly 2,000 reviews from the Apache Junction area speaks for itself.
              </p>
              <p>
                <strong>Call your local team directly: <a href="tel:+14804228388">(480) 422-8388</a></strong>
              </p>
            </div>
          </section>
        )}

        {/* ── SERVICE AREA + CREDENTIALS ── */}
        <section className="svc-hub-content">
          <div className="svc-hub-content-inner">
            <h2>Serving {city.name} &amp; the {metro} Metro Since 2013</h2>
            <p>
              Bucksworth Home Services is a locally owned and operated company founded by Jordan and Taylor Moore in 2013. What started as a small pest control operation has grown into a full-service home services provider serving 33 cities across Phoenix and Tucson — including every neighborhood in {city.name} from {nhoods[0]?.name || "the city center"} to {nhoods[nhoods.length - 1]?.name || "the surrounding areas"}.{lmarks.length > 0 ? ` Whether you live near ${lmarks[0]} or in the ${city.zipCodes[0] || ""} zip code area, we treat your home like family.` : ""} We are proud to call Arizona home, and our commitment to the {city.name} community shows in everything we do.
            </p>
            <p>
              Our credentials include:
            </p>
            <ul style={{ margin: "12px 0 20px 20px", lineHeight: "2" }}>
              <li><strong>AZ ROC License #343924</strong> — Licensed contractor with the Arizona Registrar of Contractors</li>
              <li><strong>AG License #9613</strong> — Arizona Department of Agriculture licensed pest management company</li>
              <li><strong>Google Guaranteed</strong> — Background-checked and verified by Google for your protection</li>
              <li><strong>4.8+ Star Rating</strong> — Over 2,000 five-star reviews from Arizona homeowners</li>
              <li><strong>BBB Accredited</strong> — Committed to trust, transparency, and ethical business practices</li>
              <li><strong>Family Owned</strong> — Not a franchise, not a corporation. A real Arizona family serving real Arizona families.</li>
            </ul>
            <p>
              When you call Bucksworth, you are supporting a local business that reinvests in {city.name} and the {metro} community. We hire locally, train extensively, and treat every customer like family. That is the Bucksworth difference.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQAccordion faqs={localFaqs} title={`${service.name} FAQ — ${city.name}, AZ`} />

        {/* ── NEARBY CITIES ── */}
        <section className="nearby-section">
          <h2 className="nearby-heading">{service.name} in Nearby Cities</h2>
          <div className="nearby-grid">
            {nearbyCities.map((c) => (
              <Link key={c.slug} href={`/${c.slug}/${service.slug}`} className="nearby-link">{c.name}</Link>
            ))}
          </div>
        </section>

        {/* ── RELATED BLOG POSTS ── */}
        <RelatedPosts
          posts={relatedPosts}
          cityName={city.name}
          serviceName={service.name}
        />

        {/* ── OTHER SERVICES ── */}
        <OtherServices city={city} currentServiceSlug={service.slug} />

        {/* ── BOTTOM CTA ── */}
        <CTASection city={city} variant="secondary" hideEstimate={service.slug === "plumbing-and-water-heaters"} />
      </main>
    </>
  );
}
