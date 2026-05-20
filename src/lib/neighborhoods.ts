/* ──────────────────────────────────────────────
   neighborhoods.ts — Hyper-local neighborhood data
   Real neighborhoods, zip codes, landmarks for 33 cities
   ────────────────────────────────────────────── */

export interface Neighborhood {
  name: string;
  zips: string[];
  desc: string;
}

export interface CityNeighborhoods {
  neighborhoods: Neighborhood[];
  landmarks: string[];
}

export const NEIGHBORHOODS: Record<string, CityNeighborhoods> = {
  "phoenix-az": {
    neighborhoods: [
      { name: "Arcadia", zips: ["85018", "85008"], desc: "Tree-lined streets and citrus groves near Camelback Mountain attract roof rats, ants, and scorpions." },
      { name: "Ahwatukee Foothills", zips: ["85044", "85048"], desc: "Backed against South Mountain Preserve, where desert pests migrate into homes year-round." },
      { name: "North Phoenix", zips: ["85085", "85086", "85087"], desc: "New construction near the Sonoran Desert border creates prime habitat for bark scorpions and packrats." },
      { name: "Downtown Phoenix", zips: ["85003", "85004", "85006"], desc: "Urban core with older construction, roach and rodent pressure from commercial activity." },
      { name: "Biltmore", zips: ["85016"], desc: "Luxury homes near the Arizona Biltmore with mature landscaping that harbors pests." },
      { name: "Encanto-Palmcroft", zips: ["85007", "85009"], desc: "Historic neighborhood with 1920s-era homes needing termite and pest protection." },
      { name: "South Mountain", zips: ["85040", "85041", "85042"], desc: "Desert-edge community where rattlesnakes, scorpions, and coyotes are common backyard visitors." },
      { name: "Maryvale", zips: ["85031", "85033", "85035"], desc: "Established West Phoenix neighborhood with block construction homes prone to scorpion entry." },
      { name: "Moon Valley", zips: ["85022", "85023"], desc: "North-central Phoenix community with golf courses and mature trees that attract rodents and birds." },
      { name: "Desert Ridge", zips: ["85050", "85054"], desc: "Master-planned community built on raw desert, where bark scorpions were displaced during construction." },
      { name: "Paradise Valley Village", zips: ["85032"], desc: "Family-friendly northeast Phoenix area near Dreamy Draw where packrats and roof rats thrive." },
      { name: "Laveen Village", zips: ["85339"], desc: "South Phoenix farming community where agriculture and desert meet, creating heavy pest pressure." },
      { name: "Camelback East", zips: ["85018", "85016"], desc: "Upscale area near Camelback Mountain where luxury landscaping attracts diverse pest species." },
      { name: "Deer Valley", zips: ["85024", "85027", "85029"], desc: "Northwest Phoenix neighborhood near Deer Valley Park with desert-edge scorpion activity." },
      { name: "Estrella Village", zips: ["85043"], desc: "Far west Phoenix with new development pushing into the Estrella Mountain foothills." },
    ],
    landmarks: ["Camelback Mountain", "South Mountain Preserve", "Papago Park", "Phoenix Mountains Preserve", "Desert Botanical Garden", "Arizona Biltmore"],
  },
  "scottsdale-az": {
    neighborhoods: [
      { name: "Old Town Scottsdale", zips: ["85251"], desc: "Entertainment district with older construction needing pest barriers and plumbing updates." },
      { name: "North Scottsdale", zips: ["85255", "85262", "85266"], desc: "Desert luxury estates on large lots where scorpions, rattlesnakes, and javelinas roam freely." },
      { name: "McCormick Ranch", zips: ["85258", "85257"], desc: "Lakeside community where mature trees and water features attract mosquitoes, rodents, and birds." },
      { name: "Gainey Ranch", zips: ["85258"], desc: "Gated luxury community with extensive landscaping that creates microhabitats for pests." },
      { name: "DC Ranch", zips: ["85255"], desc: "McDowell Mountain foothill community where desert wildlife regularly enters residential areas." },
      { name: "Grayhawk", zips: ["85255"], desc: "North Scottsdale master-planned community built on former desert terrain." },
      { name: "Scottsdale Ranch", zips: ["85258", "85260"], desc: "Established community with aging HVAC systems and plumbing infrastructure." },
      { name: "Kierland", zips: ["85254"], desc: "Mixed-use area near Kierland Commons with commercial and residential pest management needs." },
    ],
    landmarks: ["McDowell Sonoran Preserve", "Camelback Mountain", "Pinnacle Peak", "WestWorld", "Scottsdale Fashion Square"],
  },
  "mesa-az": {
    neighborhoods: [
      { name: "Red Mountain", zips: ["85207", "85215"], desc: "Northeast Mesa near the Usery Mountains, a hotspot for scorpions and desert wildlife." },
      { name: "East Mesa", zips: ["85205", "85206", "85208", "85209"], desc: "Rapidly growing area near the Superstitions with heavy bark scorpion and packrat activity." },
      { name: "Downtown Mesa", zips: ["85201", "85210"], desc: "Historic core with older homes needing termite inspections and updated plumbing." },
      { name: "Dobson Ranch", zips: ["85202"], desc: "Established lakeside community where mature landscaping attracts diverse pests." },
      { name: "Alta Mesa", zips: ["85204"], desc: "Central Mesa neighborhood with block construction homes and common roof rat entry points." },
      { name: "Las Sendas", zips: ["85207"], desc: "Upscale foothill community surrounded by desert preserve with constant scorpion pressure." },
      { name: "Eastmark", zips: ["85212"], desc: "Newest master-planned community displacing desert wildlife into adjacent homes." },
      { name: "Superstition Springs", zips: ["85206", "85209"], desc: "Suburban area near the Superstition Freeway with seasonal pest spikes during monsoon." },
    ],
    landmarks: ["Usery Mountain Regional Park", "Superstition Mountains", "Mesa Riverview", "Dobson Ranch Lake", "Red Mountain Park"],
  },
  "gilbert-az": {
    neighborhoods: [
      { name: "Val Vista Lakes", zips: ["85295", "85234"], desc: "Lakefront community where water features attract mosquitoes and rodents." },
      { name: "Agritopia", zips: ["85296"], desc: "Farm-to-table community with agricultural areas that draw specific pest species." },
      { name: "Power Ranch", zips: ["85297"], desc: "Master-planned community at Gilbert's southeast edge bordering desert." },
      { name: "Seville", zips: ["85298"], desc: "Gated community on Gilbert's eastern edge where desert pests are common." },
      { name: "Cooley Station", zips: ["85233", "85295"], desc: "Established neighborhood in central Gilbert with mature trees and older HVAC systems." },
      { name: "Freeman Farms", zips: ["85234"], desc: "Family neighborhood near Heritage District with diverse pest management needs." },
      { name: "Higley", zips: ["85236"], desc: "Former agricultural area now residential, with pest populations adapted to the transition." },
    ],
    landmarks: ["Riparian Preserve", "Gilbert Heritage District", "San Tan Mountain Regional Park", "Cosmo Park"],
  },
  "chandler-az": {
    neighborhoods: [
      { name: "Ocotillo", zips: ["85248", "85249"], desc: "Lakefront community in south Chandler where water features and desert edge create pest diversity." },
      { name: "Sun Groves", zips: ["85249"], desc: "South Chandler neighborhood near Gila River Indian Community with heavy pest pressure." },
      { name: "Downtown Chandler", zips: ["85225"], desc: "Historic core with older commercial and residential buildings needing integrated pest management." },
      { name: "Chandler Heights", zips: ["85249"], desc: "Semi-rural area on Chandler's southern border with scorpion and snake activity." },
      { name: "Andersen Springs", zips: ["85224", "85226"], desc: "Established community near Chandler Fashion Center with mature landscaping." },
      { name: "Clemente Ranch", zips: ["85286"], desc: "Family neighborhood in west Chandler near the 10 freeway with typical suburban pest needs." },
    ],
    landmarks: ["Chandler Fashion Center", "Tumbleweed Park", "Ocotillo Golf Resort", "Intel Chandler Campus"],
  },
  "tempe-az": {
    neighborhoods: [
      { name: "ASU Campus Area", zips: ["85281"], desc: "Dense housing near Arizona State University with apartment-specific pest challenges." },
      { name: "South Tempe", zips: ["85284"], desc: "Family neighborhoods with established trees, block walls, and seasonal roof rat pressure." },
      { name: "The Lakes", zips: ["85282"], desc: "Lakefront community where water features attract mosquitoes and create humid microclimate." },
      { name: "Tempe Royal Palms", zips: ["85283"], desc: "Established central Tempe neighborhood with older homes needing termite and HVAC service." },
      { name: "Papago Park Area", zips: ["85281"], desc: "Near the park and zoo, where desert wildlife migrates into residential areas." },
    ],
    landmarks: ["Tempe Town Lake", "Papago Park", "Arizona State University", "Tempe Beach Park", "Hayden Butte"],
  },
  "surprise-az": {
    neighborhoods: [
      { name: "Surprise Farms", zips: ["85388"], desc: "Former farmland now master-planned community with transitional pest populations." },
      { name: "Marley Park", zips: ["85379"], desc: "Award-winning community with parks and lakes attracting specific pest species." },
      { name: "Sun City Grand", zips: ["85374"], desc: "Active adult community with established landscaping and aging HVAC systems." },
      { name: "Asante", zips: ["85387"], desc: "Northwest Surprise community at the desert's edge with bark scorpion activity." },
      { name: "Desert Oasis", zips: ["85379"], desc: "Newer community west of the 303 with desert-displaced pest populations." },
    ],
    landmarks: ["Surprise Stadium", "White Tank Mountain Regional Park", "Surprise Recreation Campus"],
  },
  "peoria-az": {
    neighborhoods: [
      { name: "Vistancia", zips: ["85383"], desc: "North Peoria master-planned community near Lake Pleasant with desert pests." },
      { name: "Westwing Mountain", zips: ["85383"], desc: "Foothill community built into the desert landscape where scorpions are displaced." },
      { name: "Old Town Peoria", zips: ["85345"], desc: "Historic area with older homes needing termite, plumbing, and HVAC updates." },
      { name: "Terramar", zips: ["85382"], desc: "Central Peoria community with mature landscaping and standard suburban pest needs." },
      { name: "Lake Pleasant Heights", zips: ["85383"], desc: "North Peoria area near Lake Pleasant with desert-edge wildlife encounters." },
    ],
    landmarks: ["Lake Pleasant", "Peoria Sports Complex", "Rio Vista Recreation Center"],
  },
  "goodyear-az": {
    neighborhoods: [
      { name: "Estrella Mountain Ranch", zips: ["85338"], desc: "Master-planned community backed against Estrella Mountain with desert pest migration." },
      { name: "Palm Valley", zips: ["85395"], desc: "Established Goodyear community with mature palm trees that harbor roof rats." },
      { name: "Canyon Trails", zips: ["85338"], desc: "Growing community on Goodyear's south side where new construction meets desert." },
      { name: "Pebble Creek", zips: ["85395"], desc: "Active adult community with golf courses and lakes that attract pests." },
    ],
    landmarks: ["Estrella Mountain Regional Park", "Goodyear Ballpark", "Phoenix Goodyear Airport"],
  },
  "buckeye-az": {
    neighborhoods: [
      { name: "Verrado", zips: ["85396"], desc: "Master-planned community in the White Tank Mountain foothills with desert pest encounters." },
      { name: "Tartesso", zips: ["85396"], desc: "New community expanding into raw desert where scorpions and rattlesnakes are common." },
      { name: "Sundance", zips: ["85326"], desc: "Growing residential area south of I-10 with typical desert pest challenges." },
      { name: "Festival Ranch", zips: ["85326"], desc: "Newer development on Buckeye's eastern edge with transitional pest populations." },
    ],
    landmarks: ["White Tank Mountain Regional Park", "Skyline Regional Park", "Buckeye Hills Regional Park"],
  },
  "queen-creek-az": {
    neighborhoods: [
      { name: "Sossaman Estates", zips: ["85142"], desc: "Semi-rural Queen Creek area with horse properties and diverse pest management needs." },
      { name: "Hastings Farms", zips: ["85142"], desc: "Family community where agricultural heritage creates unique pest pressures." },
      { name: "Encanterra", zips: ["85140"], desc: "Resort-style community at Queen Creek's edge with desert wildlife encounters." },
      { name: "Queen Creek Crossing", zips: ["85142"], desc: "Commercial and residential growth area with construction-displaced pests." },
    ],
    landmarks: ["Queen Creek Wash", "San Tan Mountain Regional Park", "Schnepf Farms"],
  },
  "ahwatukee-az": {
    neighborhoods: [
      { name: "Ahwatukee Foothills", zips: ["85044", "85045"], desc: "Desert foothill community surrounded by South Mountain where scorpions are the #1 concern." },
      { name: "Ahwatukee Lakes", zips: ["85044"], desc: "Community near man-made lakes attracting mosquitoes and waterside pests." },
      { name: "Mountain Park Ranch", zips: ["85048"], desc: "South Mountain foothill neighborhood with constant bark scorpion pressure from the preserve." },
      { name: "Club West", zips: ["85048"], desc: "Golf community on Ahwatukee's southeast edge bordering desert terrain." },
    ],
    landmarks: ["South Mountain Park", "Ahwatukee Country Club", "Desert Foothills Park"],
  },
  "fountain-hills-az": {
    neighborhoods: [
      { name: "Eagle Mountain", zips: ["85268"], desc: "Golf community surrounded by McDowell Mountain with rattlesnake and scorpion encounters." },
      { name: "SunRidge Canyon", zips: ["85268"], desc: "Desert foothill community where javelinas and coyotes visit properties regularly." },
      { name: "Firerock", zips: ["85268"], desc: "Luxury custom home community built into the desert landscape." },
    ],
    landmarks: ["Fountain Park", "McDowell Mountain Regional Park", "Fountain Hills Fountain"],
  },
  "paradise-valley-az": {
    neighborhoods: [
      { name: "Mummy Mountain", zips: ["85253"], desc: "Ultra-luxury estates on Mummy Mountain with extensive desert-edge landscaping." },
      { name: "Lincoln Drive Corridor", zips: ["85253"], desc: "Prestigious homes along Lincoln Drive between Camelback and Mummy Mountains." },
      { name: "Paradise Valley Ranchos", zips: ["85253"], desc: "Large-lot properties with horse facilities, citrus groves, and diverse pest needs." },
    ],
    landmarks: ["Camelback Mountain", "Mummy Mountain", "Mountain Shadows Resort", "The Phoenician"],
  },
  "anthem-az": {
    neighborhoods: [
      { name: "Anthem Country Club", zips: ["85086"], desc: "Golf community at I-17 and Anthem Way with desert-edge pest encounters." },
      { name: "Anthem Parkside", zips: ["85086"], desc: "Family neighborhood with parks and trails connecting to the Sonoran Desert." },
      { name: "Anthem Civic Center Area", zips: ["85086"], desc: "Central Anthem near the water park and community center." },
    ],
    landmarks: ["Anthem Community Park", "Anthem Outlet Mall", "Daisy Mountain"],
  },
  "apache-junction-az": {
    neighborhoods: [
      { name: "Superstition Foothills", zips: ["85119"], desc: "Homes near the Superstition Wilderness where desert pests are at their most active." },
      { name: "Gold Canyon", zips: ["85118"], desc: "Desert community at the base of the Superstitions with constant scorpion and snake pressure." },
      { name: "Apache Trail Area", zips: ["85120"], desc: "Properties along the historic Apache Trail surrounded by rugged desert terrain." },
    ],
    landmarks: ["Superstition Mountains", "Lost Dutchman State Park", "Goldfield Ghost Town", "Canyon Lake"],
  },
  "san-tan-valley-az": {
    neighborhoods: [
      { name: "Johnson Ranch", zips: ["85143"], desc: "Master-planned community where homes back up to desert washes and scorpion habitat." },
      { name: "Pecan Creek", zips: ["85140"], desc: "Growing neighborhood on the east side with desert-adjacent pest challenges." },
      { name: "Bella Via", zips: ["85143"], desc: "Newer San Tan community built on former desert floor with displaced scorpion populations." },
    ],
    landmarks: ["San Tan Mountain Regional Park", "Goldmine Mountain", "Ironwood Drive corridor"],
  },
  "casa-grande-az": {
    neighborhoods: [
      { name: "Mission Royale", zips: ["85194"], desc: "Active adult community with golf courses attracting diverse pest species." },
      { name: "Coyote Ranch", zips: ["85122"], desc: "Desert community on Casa Grande's east side with scorpion and rodent activity." },
      { name: "Downtown Casa Grande", zips: ["85122"], desc: "Historic core with older buildings needing termite and pest management." },
    ],
    landmarks: ["Casa Grande Ruins National Monument", "Francisco Grande", "Casa Grande Mountain Park"],
  },
  "maricopa-az": {
    neighborhoods: [
      { name: "The Villages at Rancho El Dorado", zips: ["85138"], desc: "Master-planned community built on raw desert with bark scorpion displacement." },
      { name: "Province", zips: ["85138"], desc: "Active adult community with desert-edge landscaping and seasonal pest spikes." },
      { name: "Tortosa", zips: ["85138"], desc: "Growing community on Maricopa's north side adjacent to open desert." },
      { name: "Alterra", zips: ["85139"], desc: "One of Maricopa's newest communities where construction displaces native desert pests." },
    ],
    landmarks: ["Copper Sky Recreation Complex", "Maricopa Agricultural Center", "Ak-Chin Indian Community"],
  },
  "laveen-az": {
    neighborhoods: [
      { name: "Laveen Meadows", zips: ["85339"], desc: "Newer residential development on former agricultural land with transitional pest populations." },
      { name: "Laveen Farms", zips: ["85339"], desc: "Semi-rural area where farming and desert create a unique pest ecosystem." },
      { name: "Rogers Ranch", zips: ["85339"], desc: "South Laveen neighborhood near South Mountain's western edge." },
    ],
    landmarks: ["South Mountain Park (western access)", "Cesar Chavez Park", "Laveen Elementary District"],
  },
  "litchfield-park-az": {
    neighborhoods: [
      { name: "Litchfield Park Historic Core", zips: ["85340"], desc: "Charming downtown area with mature trees and older homes needing pest and HVAC service." },
      { name: "Village at Litchfield Park", zips: ["85340"], desc: "Resort-adjacent residential area with established landscaping." },
      { name: "Wigwam Creek", zips: ["85340"], desc: "Community near the Wigwam resort with manicured grounds that attract pests." },
    ],
    landmarks: ["The Wigwam Resort", "Litchfield Park Historic District", "Litchfield Elementary Park"],
  },
  "florence-az": {
    neighborhoods: [
      { name: "Anthem at Merrill Ranch", zips: ["85132"], desc: "Master-planned community on Florence's north side with desert-edge pest activity." },
      { name: "Magic Ranch", zips: ["85132"], desc: "Equestrian community with large lots and diverse pest management needs." },
      { name: "Historic Florence", zips: ["85132"], desc: "Arizona's first state capital with historic adobe buildings needing specialty pest protection." },
    ],
    landmarks: ["Pinal County Courthouse", "McFarland State Historic Park", "Tom Mix Monument"],
  },
  "coolidge-az": {
    neighborhoods: [
      { name: "Downtown Coolidge", zips: ["85128"], desc: "Historic town center with older construction and agricultural pest pressure." },
      { name: "Coolidge Estates", zips: ["85128"], desc: "Residential area surrounded by farmland attracting rodents and insects." },
    ],
    landmarks: ["Casa Grande Ruins National Monument", "Coolidge Municipal Airport"],
  },
  "gold-canyon-az": {
    neighborhoods: [
      { name: "Superstition Mountain Golf Club", zips: ["85118"], desc: "Luxury golf community at the base of the Superstition Mountains." },
      { name: "Mountainbrook Village", zips: ["85118"], desc: "Master-planned community surrounded by desert trails and wildlife corridors." },
      { name: "Peralta Trail Area", zips: ["85118"], desc: "Properties near popular hiking trails with constant desert wildlife encounters." },
    ],
    landmarks: ["Superstition Mountains", "Peralta Trailhead", "Goldfield Ghost Town"],
  },
  "tucson-az": {
    neighborhoods: [
      { name: "Sam Hughes", zips: ["85716"], desc: "Historic neighborhood near University of Arizona with older homes needing termite and pest service." },
      { name: "Catalina Foothills", zips: ["85718"], desc: "Luxury homes in the Catalina Mountain foothills where scorpions and packrats are common." },
      { name: "Oro Valley/Northwest", zips: ["85737"], desc: "Growing northwest corridor with desert-edge communities and constant pest pressure." },
      { name: "Midtown Tucson", zips: ["85711", "85712"], desc: "Central Tucson with a mix of older and newer construction and diverse pest challenges." },
      { name: "Rita Ranch", zips: ["85747"], desc: "Southeast Tucson master-planned community with desert-displaced scorpion populations." },
      { name: "Tanque Verde", zips: ["85749"], desc: "Upscale east-side community backed against the Rincon Mountains with desert wildlife." },
      { name: "Marana/Northwest", zips: ["85653"], desc: "Fast-growing area where new construction pushes into the Sonoran Desert." },
      { name: "South Tucson", zips: ["85713"], desc: "Urban area with older construction and year-round pest management needs." },
      { name: "Saddlebrooke", zips: ["85739"], desc: "Active adult community north of Tucson in the foothills with scorpion and packrat activity." },
      { name: "Dove Mountain", zips: ["85658"], desc: "Resort community in the Tortolita Mountains with premium desert-edge living." },
    ],
    landmarks: ["Saguaro National Park", "Mount Lemmon", "Tucson Mountain Park", "Sabino Canyon", "University of Arizona"],
  },
  "oro-valley-az": {
    neighborhoods: [
      { name: "Rancho Vistoso", zips: ["85755"], desc: "Master-planned community with golf courses and desert-edge landscapes." },
      { name: "Sun City Oro Valley", zips: ["85755"], desc: "Active adult community with established yards and aging HVAC systems." },
      { name: "Steam Pump Village", zips: ["85737"], desc: "Historic area with newer construction near the Catalina Mountains." },
      { name: "Canada Hills", zips: ["85737"], desc: "Foothill community with mountain views and desert wildlife encounters." },
    ],
    landmarks: ["Catalina State Park", "Tohono Chul Park", "Pusch Ridge"],
  },
  "marana-az": {
    neighborhoods: [
      { name: "Continental Ranch", zips: ["85653"], desc: "Large master-planned community where homes border desert washes." },
      { name: "Dove Mountain", zips: ["85658"], desc: "Resort-adjacent community in the Tortolita Mountain foothills." },
      { name: "Gladden Farms", zips: ["85653"], desc: "Growing community on Marana's western edge near agricultural and desert areas." },
      { name: "Saguaro Ranch", zips: ["85653"], desc: "Newer development with typical Sonoran Desert pest management needs." },
    ],
    landmarks: ["Tortolita Mountains", "Marana Regional Airport", "Rillito River Park"],
  },
  "catalina-foothills-az": {
    neighborhoods: [
      { name: "Skyline Country Club", zips: ["85718"], desc: "Luxury golf community in the Catalina Mountain foothills." },
      { name: "Ventana Canyon", zips: ["85750"], desc: "Resort-adjacent community with desert-edge landscaping and wildlife." },
      { name: "Canyon View", zips: ["85718"], desc: "Upscale area with mountain views and typical foothill pest challenges." },
    ],
    landmarks: ["Ventana Canyon", "Finger Rock Trail", "Sabino Canyon"],
  },
  "sahuarita-az": {
    neighborhoods: [
      { name: "Rancho Sahuarita", zips: ["85629"], desc: "Master-planned community with lakes, parks, and desert-edge pest activity." },
      { name: "Quail Creek", zips: ["85629"], desc: "Active adult community surrounded by open desert and agricultural land." },
      { name: "Las Campanas", zips: ["85629"], desc: "Newer residential area on Sahuarita's south side." },
    ],
    landmarks: ["Sahuarita Lake", "ASARCO Mineral Discovery Center", "Titan Missile Museum"],
  },
  "green-valley-az": {
    neighborhoods: [
      { name: "Green Valley Recreation", zips: ["85614"], desc: "Active adult community with golf courses and established desert landscaping." },
      { name: "Continental", zips: ["85614"], desc: "Southern Green Valley area near Tubac with rural pest challenges." },
      { name: "Desert Hills", zips: ["85622"], desc: "Semi-rural area between Green Valley and Tucson with diverse pest pressures." },
    ],
    landmarks: ["Madera Canyon", "Santa Rita Mountains", "Tubac Presidio"],
  },
  "vail-az": {
    neighborhoods: [
      { name: "Del Lago", zips: ["85641"], desc: "Growing community southeast of Tucson with desert-edge scorpion and snake activity." },
      { name: "Rocking K Ranch", zips: ["85641"], desc: "Semi-rural area near Saguaro National Park East with constant desert wildlife encounters." },
      { name: "Civano", zips: ["85641"], desc: "Sustainable community with green building and desert-adapted pest management." },
    ],
    landmarks: ["Colossal Cave Mountain Park", "Saguaro National Park East", "Rincon Mountains"],
  },
  "red-rock-az": {
    neighborhoods: [
      { name: "Red Rock", zips: ["85745"], desc: "Rural desert community northwest of Tucson where open terrain brings constant pest visitors." },
      { name: "Picture Rocks", zips: ["85743"], desc: "Semi-rural area near Saguaro National Park West with rattlesnake and scorpion encounters." },
    ],
    landmarks: ["Saguaro National Park West", "Ironwood Forest National Monument"],
  },
  "valencia-west-az": {
    neighborhoods: [
      { name: "Valencia West", zips: ["85757"], desc: "Suburban community on Tucson's southwest side with typical desert pest management needs." },
      { name: "Drexel Heights", zips: ["85757"], desc: "Established south Tucson area with older homes and seasonal pest spikes." },
    ],
    landmarks: ["Tucson Estates Park", "San Xavier del Bac Mission"],
  },
};

export function getNeighborhoods(citySlug: string): CityNeighborhoods {
  return NEIGHBORHOODS[citySlug] || { neighborhoods: [], landmarks: [] };
}
