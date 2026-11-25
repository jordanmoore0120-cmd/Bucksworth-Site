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
};

export function getLocalNote(
  citySlug: string,
  serviceSlug: string,
  subserviceSlug: string
): ContentBlock | undefined {
  return NOTES[`${citySlug}/${serviceSlug}/${subserviceSlug}`];
}
