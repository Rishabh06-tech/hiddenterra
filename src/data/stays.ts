// Curated nearby stays per destination, grouped by tier.
// These are real, well-known properties (or local categories) but always verify
// availability and pricing before booking.

export type StayTier = "Luxury" | "Standard" | "Budget";
export type Stay = { name: string; area: string; note?: string };
export type StaysByTier = Record<StayTier, Stay[]>;

const S = (luxury: Stay[], standard: Stay[], budget: Stay[]): StaysByTier => ({
  Luxury: luxury, Standard: standard, Budget: budget,
});

export const STAYS: Record<string, StaysByTier> = {
  gangtok: S(
    [
      { name: "Mayfair Spa Resort & Casino", area: "Lower Samdur Block", note: "Hilltop villas, full spa, Kanchenjunga views" },
      { name: "The Elgin Nor-Khill", area: "Stadium Road", note: "Heritage royal guesthouse, est. 1934" },
    ],
    [
      { name: "Summit Denzong Hotel & Spa", area: "Upper Cart Road", note: "Mid-luxe with valley views" },
      { name: "Hotel Sonam Delek", area: "Tibet Road", note: "Reliable mid-range, walkable to MG Marg" },
      { name: "Lemon Tree Hotel", area: "Ranipool", note: "Modern chain on the Gangtok outskirts" },
    ],
    [
      { name: "Zostel Gangtok", area: "Lower MG Marg", note: "Backpacker hostel with rooftop café" },
      { name: "Hotel Tibet", area: "Paljor Stadium Road", note: "Long-running budget Tibetan-run inn" },
    ],
  ),
  yumthang_valley: S(
    [{ name: "The Yarlam Resort", area: "Lachung", note: "Closest premium stay; valley-facing rooms" }],
    [
      { name: "Modern Residency", area: "Lachung", note: "Comfortable rooms, group-tour favourite" },
      { name: "Le Coxy Resort", area: "Lachung", note: "Clean wood-panelled rooms with heaters" },
    ],
    [
      { name: "Lachung Tourist Lodge (SNT)", area: "Lachung Bazaar", note: "Government lodge, basic but warm" },
      { name: "Local homestays via Dzumsa", area: "Lachung village", note: "Family kitchens, shared bathrooms" },
    ],
  ),
  zuluk: S(
    [{ name: "Zuluk Heritage Retreat", area: "Upper Zuluk", note: "Best-appointed lodge in the village" }],
    [
      { name: "Hotel Snow Leopard", area: "Zuluk", note: "Ensuite rooms, hot water, dining hall" },
      { name: "Old Silk Route Resort", area: "Zuluk", note: "Wooden chalets near the main viewpoint" },
    ],
    [
      { name: "Bhutia Homestay", area: "Zuluk village", note: "Family-run, home-cooked Bhutia meals" },
      { name: "Tamang Homestay", area: "Zuluk village", note: "Simple shared dorms, sunrise-friendly" },
    ],
  ),
  lachung: S(
    [{ name: "The Yarlam Resort", area: "Lachung", note: "Premium pinewood suites" }],
    [
      { name: "Etam Village Resort", area: "Lachung", note: "Mid-range with garden seating" },
      { name: "Apple Valley Inn", area: "Lachung", note: "Orchard-side rooms, cosy" },
    ],
    [
      { name: "Lachung Tourist Lodge", area: "Lachung Bazaar", note: "Govt-run, basic comforts" },
      { name: "Sonam Palgey Homestay", area: "Lachung village", note: "Authentic Lepcha hospitality" },
    ],
  ),
  chilika_lake: S(
    [{ name: "Swosti Chilika Resort", area: "Satapada", note: "Lakefront luxury, dolphin tours from jetty" }],
    [
      { name: "Panthanivas Barkul (OTDC)", area: "Barkul", note: "Government resort, lakeshore cottages" },
      { name: "Yatrinivas Rambha", area: "Rambha", note: "Quiet southern shore, sunset views" },
    ],
    [
      { name: "Hotel Ashoka", area: "Balugaon", note: "Town-side budget rooms near rail station" },
      { name: "Local guesthouses", area: "Satapada", note: "Family-run, basic amenities" },
    ],
  ),
  simlipal_national_park: S(
    [{ name: "Mayfair Palm Beach Resort", area: "Gopalpur (180 km)", note: "Pair with a coastal night before/after" }],
    [
      { name: "Aranya Nivas", area: "Lulung gate", note: "OTDC forest lodge, closest park stay" },
      { name: "Hotel Ambika", area: "Baripada", note: "Comfortable town hotel, AC rooms" },
    ],
    [
      { name: "FRH Chahala / Jamuani", area: "Inside park", note: "Forest Rest Houses — book via Forest Dept" },
      { name: "Yatri Niwas Baripada", area: "Baripada", note: "Basic but clean budget option" },
    ],
  ),
  satkosia_gorge: S(
    [{ name: "Mayfair Lagoon", area: "Bhubaneswar (175 km)", note: "Premium base before/after the gorge" }],
    [
      { name: "Tikarpada Nature Camp", area: "Tikarpada", note: "Eco-tents on the riverbank, OTDC-run" },
      { name: "Baghmunda Nature Camp", area: "Baghmunda", note: "Forest-edge tented camp" },
    ],
    [
      { name: "Forest Rest House Tikarpada", area: "Tikarpada", note: "Basic FRH, advance permission needed" },
      { name: "Panthanivas Angul", area: "Angul", note: "Budget OTDC in nearest town" },
    ],
  ),
  deomali_hills: S(
    [{ name: "Hello Koraput", area: "Koraput town", note: "Best-rated full-service hotel in the region" }],
    [
      { name: "Panthanivas Koraput (OTDC)", area: "Koraput", note: "Reliable mid-range with restaurant" },
      { name: "Hotel Raj Residency", area: "Koraput", note: "Clean AC rooms, central location" },
    ],
    [
      { name: "OTDC Yatri Niwas Jeypore", area: "Jeypore (40 km)", note: "Budget rooms, well-maintained" },
      { name: "Local homestays", area: "Pottangi / villages", note: "Arrange via Koraput tourism" },
    ],
  ),
  lonavala: S(
    [
      { name: "Della Resorts", area: "Kunegaon", note: "Adventure resort with luxury villas" },
      { name: "Fariyas Resort", area: "Frichley Hills", note: "Long-standing 5-star with valley views" },
    ],
    [
      { name: "The Machan", area: "Jambulne (30 km)", note: "Treehouse eco-resort" },
      { name: "Lonavala Citrus Hotel", area: "Tungarli", note: "Reliable mid-range, family-friendly" },
    ],
    [
      { name: "Zostel Lonavala", area: "Tungarli", note: "Hostel with lake-view dorms" },
      { name: "MTDC Karla Resort", area: "Karla", note: "Government cottages near the caves" },
    ],
  ),
  mahabaleshwar: S(
    [
      { name: "Le Méridien Mahabaleshwar", area: "Frederick Road", note: "Hilltop resort with infinity pool" },
      { name: "Evershine Resort", area: "Old Mahabaleshwar", note: "Premium villas in pine forest" },
    ],
    [
      { name: "Brightland Resort & Spa", area: "Nakinda Village", note: "Family resort with valley views" },
      { name: "Treebo Trend Saj Resort", area: "Mahabaleshwar Town", note: "Comfortable mid-range" },
    ],
    [
      { name: "MTDC Resort Mahabaleshwar", area: "Bombay Point Road", note: "Government cottages, great location" },
      { name: "Hotel Pramod", area: "Main Bazaar", note: "Walkable budget option" },
    ],
  ),
  bhandardara: S(
    [{ name: "The Anandvan Resort", area: "Shendi", note: "Lakefront premium cottages" }],
    [
      { name: "MTDC Holiday Resort", area: "Bhandardara", note: "Government cottages near Wilson Dam" },
      { name: "Aalishan Resort", area: "Shendi", note: "Mountain-view rooms, pool" },
    ],
    [
      { name: "Lakeside camping", area: "Arthur Lake", note: "Tented camps, monsoon and winter only" },
      { name: "Local homestays", area: "Shendi village", note: "Basic but warm hospitality" },
    ],
  ),
  tamhini_ghat: S(
    [{ name: "Saj by the Lake", area: "Mulshi (15 km)", note: "Lakefront luxury resort near the ghat" }],
    [
      { name: "Atmantan Wellness Resort", area: "Mulshi", note: "Wellness retreat with valley views" },
      { name: "Malhar Machi Resort", area: "Mulshi backwaters", note: "Mid-range with adventure activities" },
    ],
    [
      { name: "Camping at Plus Valley", area: "Tamhini", note: "Tented stays during clear-weather months" },
      { name: "Mulshi MTDC", area: "Mulshi Dam", note: "Budget government rooms" },
    ],
  ),
  ooty: S(
    [
      { name: "Taj Savoy Hotel", area: "Sylks Road", note: "Heritage cottages, est. 1829" },
      { name: "The Gateway Hotel Church Road", area: "Church Road", note: "Colonial-era luxury, central" },
    ],
    [
      { name: "Sterling Ooty Elk Hill", area: "Elk Hill", note: "Mid-range resort with valley views" },
      { name: "Welbeck Residency", area: "Club Road", note: "Comfortable, walkable to centre" },
    ],
    [
      { name: "Zostel Ooty", area: "Sheddon Road", note: "Hostel with mountain-view lounge" },
      { name: "YWCA Anandagiri", area: "Ettines Road", note: "Long-running budget guesthouse" },
    ],
  ),
  kodaikanal: S(
    [
      { name: "The Carlton", area: "Lake Road", note: "Lakeside heritage 5-star" },
      { name: "Sterling Kodai Lake", area: "Lake Road", note: "Premium lakefront resort" },
    ],
    [
      { name: "Hilltop Towers", area: "Club Road", note: "Reliable mid-range near boat club" },
      { name: "Villa Retreat", area: "Coaker's Walk", note: "Boutique heritage stay" },
    ],
    [
      { name: "Zostel Kodaikanal", area: "Bryant Park", note: "Hostel with garden lawns" },
      { name: "Hotel Astoria", area: "Anna Salai", note: "Bus-stand-adjacent budget rooms" },
    ],
  ),
  yelagiri: S(
    [{ name: "The Yelagiri Hills Resort", area: "Athanavur", note: "Best premium resort on the hill" }],
    [
      { name: "Sterling Yelagiri", area: "Punganur Lake Road", note: "Reliable mid-range with pool" },
      { name: "Jaladhama Resort", area: "Athanavur", note: "Family resort with activity zone" },
    ],
    [
      { name: "TTDC Hotel Tamil Nadu", area: "Athanavur", note: "Government budget rooms" },
      { name: "Local cottages", area: "Athanavur", note: "Basic, often rented for weekends" },
    ],
  ),
  courtallam_falls: S(
    [{ name: "Hotel Saaral Residency", area: "Courtallam", note: "Best-rated stay near Main Falls" }],
    [
      { name: "Hotel Tamil Nadu (TTDC)", area: "Courtallam", note: "Government mid-range, walkable to falls" },
      { name: "Hotel Janakiram", area: "Tenkasi (5 km)", note: "Comfortable AC rooms" },
    ],
    [
      { name: "Sri Murugan Lodge", area: "Courtallam", note: "Backpacker-friendly basic rooms" },
      { name: "Local lodges near Main Falls", area: "Courtallam", note: "Cheap, fill quickly in season" },
    ],
  ),
  manali: S(
    [
      { name: "The Himalayan", area: "Hadimba Road", note: "Castle-style luxury in pine forest" },
      { name: "Span Resort & Spa", area: "Katrain (15 km)", note: "Riverside premium retreat" },
    ],
    [
      { name: "Apple Country Resort", area: "Aleo", note: "Cottages by the Beas, mid-luxe" },
      { name: "Hotel Snow Valley Resorts", area: "Log Huts Area", note: "Reliable mid-range" },
    ],
    [
      { name: "Zostel Manali", area: "Old Manali", note: "Hostel with riverside common area" },
      { name: "GoStops Manali", area: "Old Manali", note: "Backpacker hostel, café onsite" },
    ],
  ),
  shimla: S(
    [
      { name: "Wildflower Hall, Oberoi", area: "Chharabra (13 km)", note: "Iconic luxury in cedar forest" },
      { name: "The Oberoi Cecil", area: "Chaura Maidan", note: "Heritage 5-star in central Shimla" },
    ],
    [
      { name: "Clarkes Hotel", area: "The Mall", note: "Classic mid-range, on the Mall Road" },
      { name: "Hotel Combermere", area: "The Mall", note: "Reliable, near Lift" },
    ],
    [
      { name: "Zostel Shimla", area: "The Ridge", note: "Backpacker hostel with terrace" },
      { name: "HPTDC Hotel Holiday Home", area: "Cart Road", note: "Government budget rooms" },
    ],
  ),
  chitkul: S(
    [{ name: "Zostel Plus Chitkul", area: "Chitkul village", note: "Premium-tier hostel; closest to luxury here" }],
    [
      { name: "Kinner Camps Chitkul", area: "Riverside", note: "Comfortable tented stays with meals" },
      { name: "Hotel Sangla Resort", area: "Sangla (25 km)", note: "Mid-range alternative in nearby Sangla" },
    ],
    [
      { name: "Thakur Guest House", area: "Chitkul village", note: "Long-running budget guesthouse" },
      { name: "Local homestays", area: "Chitkul", note: "Family-run, wood-fired meals included" },
    ],
  ),
  kalpa: S(
    [{ name: "The Grand Shangri-La", area: "Kalpa", note: "Best-appointed property facing Kinner Kailash" }],
    [
      { name: "Kinner Kailash Cottage (HPTDC)", area: "Kalpa", note: "Government cottages with mountain views" },
      { name: "Hotel Apple Pie", area: "Kalpa", note: "Mid-range with apple-orchard rooms" },
    ],
    [
      { name: "Blue Lotus Inn", area: "Kalpa", note: "Budget rooms, walkable to viewpoints" },
      { name: "Local homestays", area: "Kalpa village", note: "Authentic Kinnauri family stays" },
    ],
  ),
};

export const getStays = (slug: string) => STAYS[slug];
