/* ──────────────────────────────────────────────
   local-notes.ts — City-specific notes appended to templated sub-service pages
   Key format: "{citySlug}/{serviceSlug}/{subserviceSlug}"
   Facts come from neighborhoods.ts and llms.txt only (site-tasks #16: city-swap audit).
   ────────────────────────────────────────────── */

import type { ContentBlock } from "./content-overrides";

const NOTES: Record<string, ContentBlock> = {
  "apache-junction-az/pest-and-termite/scorpion-control": {
    heading: "What We See on Scorpion Calls in Apache Junction",
    paragraphs: [
      "Apache Junction is where our company is headquartered, on West Houston Avenue, so these are streets and desert edges our technicians drive every day. Scorpion pressure here follows the terrain: homes in the Superstition Foothills (85119) and Gold Canyon (85118) sit right against the Superstition Mountains, while properties along the Apache Trail (85120) are surrounded by rugged, undisturbed desert. Near Lost Dutchman State Park, rock piles, washes and block walls give bark scorpions daytime shelter just feet from the house. On these properties we start with a blacklight walk of the block wall, rock borders and garage door, because that is where entry points show up first.",
    ],
  },
  "san-tan-valley-az/pest-and-termite/scorpion-control": {
    heading: "What We See on Scorpion Calls in San Tan Valley",
    paragraphs: [
      "San Tan Valley is mostly newer construction built on former desert floor, and that changes the scorpion problem. In Bella Via (85143), building has displaced scorpion populations that now shelter in fresh block walls, landscape rock and utility boxes. Johnson Ranch (85143) backs onto desert washes that act as travel routes, and Pecan Creek (85140) borders open desert on the east side. Homes close to San Tan Mountain Regional Park and Goldmine Mountain see the most migration. On these homes we check weep holes, garage door seals and plumbing penetrations carefully, and we re-inspect the perimeter after monsoon storms.",
    ],
  },
  "mesa-az/pest-and-termite/mosquito-control": {
    heading: "What We See on Mosquito Calls in Mesa",
    paragraphs: [
      "Most Mesa mosquito calls start with water we can point to. In Dobson Ranch (85202), the lake and the mature landscaping around it keep shade and moisture close to backyards, and yards near Mesa Riverview and Red Mountain Park see the same pattern after summer storms. In East Mesa and Superstition Springs (85206, 85209), the spike follows monsoon rain, when pots, toys, pool covers and clogged yard drains hold water for days. On every visit we walk the yard for standing water first, show you what to dump or fix, then treat the shaded plants and walls where adult mosquitoes rest during the day.",
    ],
  },
  "chandler-az/pest-and-termite/rodent-exclusion": {
    heading: "What We See on Rodent Calls in Chandler",
    paragraphs: [
      "Rodent work in Chandler looks different from one side of the city to the other. In Andersen Springs (85224, 85226), near Chandler Fashion Center, mature trees and dense shrubs give roof rats cover and a path onto the roof, so we check roof vents, eaves and where branches touch the house. In Ocotillo (85248, 85249), the lakes and desert edge bring more rodent traffic into yards and garages. In Chandler Heights, on the semi-rural southern border, we also look at sheds, wood piles and block walls. Whatever the neighborhood, we remove the rodents first, then seal the gaps they used so they can't come back in.",
    ],
  },
  "gilbert-az/pest-and-termite/rodent-exclusion": {
    heading: "What We See on Rodent Calls in Gilbert",
    paragraphs: [
      "In Gilbert, rodent pressure tends to follow water and trees. Val Vista Lakes (85234, 85295) is a lakefront community where water features draw rodents into yards, and Cooley Station's mature trees give roof rats a way onto the roof. Higley and Agritopia (85236, 85296) were farmland not long ago, and rodents that lived in the fields now live beside homes. At Power Ranch and Seville on the southeast edge, desert-side lots bring pack rats close to garages and block walls. Our technicians trap and remove first, then seal roof vents, garage door gaps and utility openings, the entry points we find most often on Gilbert homes.",
    ],
  },
  "tucson-az/pest-and-termite/rodent-exclusion": {
    heading: "What We See on Rodent and Pack Rat Calls in Tucson",
    paragraphs: [
      "Tucson rodent calls split into two kinds. On the desert edge, in the Catalina Foothills (85718), Tanque Verde against the Rincon Mountains (85749) and Saddlebrooke to the north, pack rats are the main problem: they nest in brush and rock piles, then move into garages and engine bays. In older central neighborhoods like Sam Hughes (85716), Midtown (85711, 85712) and South Tucson, older construction leaves more gaps for roof rats and mice to get inside. We match the work to the house: removal and nest clean-out first, then sealing the openings we find, from garage door gaps to roof and utility penetrations.",
    ],
  },
  "phoenix-az/pest-and-termite/spider-prevention": {
    heading: "What We See on Spider Calls in Phoenix",
    paragraphs: [
      "Phoenix spider calls are mostly about black widows in the places people reach without looking: block walls, garages, patio furniture, meter boxes and the corners of covered patios. Desert-edge areas like Desert Ridge (85050, 85054), Deer Valley and the South Mountain foothills tend to have more insects around the house at night, and more insects means more spiders. In established neighborhoods such as Arcadia and Moon Valley, mature landscaping and citrus give spiders shelter close to the walls. We clear webs, treat cracks and crevices around the house and garage, and treat the perimeter to cut down the insects spiders feed on.",
    ],
  },
  "mesa-az/pest-and-termite/ant-control": {
    heading: "What We See on Ant Calls in Mesa",
    paragraphs: [
      "Ant problems in Mesa change with the setting. In Dobson Ranch (85202) and Alta Mesa (85204), mature landscaping and irrigated yards keep ant colonies close to the house, and trails show up along patios, kitchens and bathrooms. In Las Sendas, Red Mountain and Eastmark, where homes sit next to open desert, we see more harvester ant mounds in gravel yards and along sidewalks. Before we treat, our technicians identify the ant, because baits that work on one species can be ignored by another. Then we follow the trails back toward the nest and treat the colony, the trails and the entry points.",
    ],
  },
  "tucson-az/pest-and-termite/bee-wasp-removal": {
    heading: "What We See on Bee and Wasp Calls in Tucson",
    paragraphs: [
      "Bee and wasp calls in Tucson come from two kinds of homes. In older central neighborhoods like Sam Hughes (85716), Midtown (85711, 85712) and South Tucson, older construction has more gaps, so bees often move into wall voids, attics and eaves. On the desert edge, in Rita Ranch (85747), Tanque Verde (85749) and the Catalina Foothills (85718), we find hives in meter boxes, irrigation valve boxes, sheds and block walls, and paper wasp nests under patio covers. Bees in Arizona can be defensive, so don't spray or seal a hive yourself. We find where the bees go in, remove the hive or nest, and treat the spot so a new colony is less likely to move in.",
    ],
  },
  "apache-junction-az/pest-and-termite/bee-wasp-removal": {
    heading: "What We See on Bee and Wasp Calls in Apache Junction",
    paragraphs: [
      "Apache Junction sits against open desert, and that shapes our bee and wasp calls. Homes in the Superstition Foothills (85119) and along the Apache Trail (85120) have more sheds, outbuildings and block walls, and those are where we find most hives and wasp nests. Water draws bees in summer, so leaking hose bibs, pool edges and drip lines near the house are common trouble spots. Paper wasps build under eaves and patio covers. If you see bees going in and out of one opening, keep people and pets back and call us. We remove the hive or nest, treat the spot, and point out the openings that should be sealed so bees don't move back in.",
    ],
  },
  "tucson-az/pest-and-termite/mosquito-control": {
    heading: "What We See on Mosquito Calls in Tucson",
    paragraphs: [
      "Most Tucson mosquito calls come after monsoon storms, when water sits for days in places homeowners don't check. In Sam Hughes (85716) and Midtown (85711, 85712), shaded yards with older trees and irrigated beds keep mosquitoes close to patios. In Rita Ranch (85747), Tanque Verde (85749) and the Catalina Foothills (85718), we find standing water in plant saucers, pool covers, rain barrels, clogged yard drains and low spots in gravel. On every visit we walk the yard for water first and show you what to dump or fix, then treat the shaded plants and walls where adult mosquitoes rest during the day.",
    ],
  },
  "san-tan-valley-az/pest-and-termite/rodent-exclusion": {
    heading: "What We See on Rodent Calls in San Tan Valley",
    paragraphs: [
      "San Tan Valley is mostly newer homes built on former desert floor, so rodent calls usually start at the edge of the desert. In Johnson Ranch (85143), homes back onto desert washes that rodents use as travel routes. In Pecan Creek (85140) on the east side, and on lots near San Tan Mountain Regional Park and Goldmine Mountain, pack rats nest in brush and landscape rock, then move into garages and engine bays. On newer homes the gaps we find most are at garage door seals, utility and plumbing penetrations and roof vents. We trap and remove the rodents first, then seal the entry points so they can't get back in.",
    ],
  },
  "buckeye-az/pest-and-termite/termite-treatment": {
    heading: "What We See on Termite Calls in Buckeye",
    paragraphs: [
      "Much of Buckeye is newer construction pushing into raw desert, in communities like Verrado in the White Tank Mountain foothills (85396), Tartesso (85396), Sundance (85326) and Festival Ranch (85326). Subterranean termites already live in that soil, and on newer homes we often find mud tubes on the slab edge, along block walls and in the garage. If your builder hired Bucksworth for the pre-construction treatment, your home may already have warranty coverage, so check that before paying for a new treatment. We inspect the whole home first, then recommend a treatment for what we actually find, and every treatment includes a warranty and an annual re-inspection.",
    ],
  },
};

export function getLocalNote(
  citySlug: string,
  serviceSlug: string,
  subserviceSlug: string
): ContentBlock | undefined {
  return NOTES[`${citySlug}/${serviceSlug}/${subserviceSlug}`];
}
