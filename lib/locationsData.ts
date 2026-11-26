// Single source of truth for emirate coverage — used by /locations hub,
// /locations/[slug] pages, homepage coverage strip and sitemap.

export interface Faq { q: string; a: string }

export interface Location {
  slug: string;
  name: string;
  ar: string;
  image: string;
  h1: string;
  intro: string;
  metaDesc: string; // meta description, max 155 characters
  body: string[];
  areas: string[];
  cityCount: number;
  faqs: Faq[];
  // Link text used when other pages link here. Default: "Carpet Cleaning {name}".
  // Dubai uses its own so "carpet cleaning dubai" stays with the home page.
  anchor?: string;
  // Extra internal links shown at the top of the page body.
  seeAlso?: { before: string; label: string; href: string }[];
}

export function locationAnchor(l: Location): string {
  return l.anchor ?? `Carpet Cleaning ${l.name}`;
}

export const LOCATIONS: Location[] = [
  {
    slug: "dubai", name: "Dubai", ar: "دبي", image: "/emirates/dubai.webp",
    metaDesc: "Carpet, rug and sofa cleaning at homes, villas and offices across Dubai: Marina, JLT, Jumeirah, Business Bay, Deira and more. Free quote on WhatsApp.",
    h1: "Dubai Areas We Cover — Marina, JLT, Jumeirah, Deira & More",
    anchor: "Dubai Areas We Cover",
    seeAlso: [
      { before: "For an overview of the service, see", label: "carpet cleaning in Dubai", href: "/" },
      { before: "For Persian, wool and silk rugs, see", label: "rug cleaning in Dubai", href: "/services/rug-cleaning" },
    ],
    intro: "Our trained, background-checked team cleans carpets, rugs and sofas at homes, villas and offices in every part of Dubai, from Marina and JLT towers to Jumeirah villas, Business Bay offices and Deira apartments. Here is what each area usually needs.",
    body: [
      "Each part of Dubai brings its own carpet problems: closed windows and cooking smells in Marina and JLT towers, large rugs and majlis seating in Jumeirah and Al Barsha villas, heavy foot traffic in Business Bay offices, and sand and dust from building sites near Deira and Al Qusais. We plan each visit around the area and the home, and we use eco-friendly products that are safe for children and pets.",
      "Newer communities such as JVC, Motor City, Silicon Oasis and The Springs have many family villas and townhouses, with fitted carpet in the bedrooms and rugs in the living room. Children and pets mean more spills and more dust, so we treat stains first and then deep shampoo the whole carpet.",
      "Dubai Marina and JBR tower apartments present specific carpet cleaning challenges. High-rise buildings mean carpets are rarely exposed to fresh air, trapping cooking odors and dust in the fibres over time. Compact apartment layouts mean furniture sits on carpets continuously, creating compression marks and hidden soiling underneath. Our technicians are experienced with tower apartment logistics — we bring all equipment in portable units and work efficiently in smaller spaces.",
      "Jumeirah, Al Barsha, and Arabian Ranches villas often have large statement rugs, wall-to-wall fitted carpets, and extensive majlis seating areas. Villa cleaning typically requires longer appointments and more equipment. We plan villa visits so every room gets proper attention, and Persian or handmade rugs are checked first and cleaned with a method that suits their fibre.",
      "Business Bay, DIFC, and Downtown Dubai offices are among the busiest commercial spaces in the UAE. High foot traffic, daily sand ingress, and regular coffee and food spills mean office carpets degrade faster than residential ones. We agree the visit time with each office so the cleaning fits around the working day.",
      "Deira, Bur Dubai, and Al Qusais residential areas have a high concentration of apartments with wall-to-wall fitted carpets. These carpets accumulate sand and dust rapidly due to proximity to construction zones and main roads. Our deep shampoo extraction process is particularly effective for fitted carpets that cannot be removed for cleaning — we clean them in place and extract the dirty water with our machines.",
      "For any Dubai job, send a photo and the rough size of the carpet on WhatsApp and we reply with a free quote. Our trained, background-checked team brings the cleaning equipment to your home or office.",
    ],
    areas: ["Dubai Marina", "Downtown Dubai", "Jumeirah", "Business Bay", "Deira", "Al Barsha", "JBR", "Palm Jumeirah", "Arabian Ranches", "Al Qusais", "Bur Dubai", "DIFC", "Motor City", "Silicon Oasis", "JVC", "Springs"],
    cityCount: 16,
    faqs: [
      { q: "Which Dubai areas do you cover?", a: "All of Dubai, including Marina, JLT, Downtown, Jumeirah, Business Bay, Deira, Al Barsha, JVC, Motor City and Silicon Oasis. Our team comes to your home or office and cleans on site." },
      { q: "Do you offer carpet cleaning for Dubai Marina apartments?", a: "Yes. Our technicians bring all equipment in portable units designed for high-rise buildings. We work efficiently in compact apartment spaces and handle building access logistics including parking and elevator coordination." },
      { q: "Is same-day carpet cleaning available in Dubai?", a: "Same-day slots are often available across Dubai. Message us on WhatsApp in the morning with a photo of the carpet and we tell you the first free time. For a large villa or office, booking a day ahead gives you more choice of times." },
      { q: "Do you clean office carpets in Business Bay and DIFC?", a: "Yes. We clean office carpets in Business Bay, DIFC, Downtown and other Dubai business districts, and agree the visit time with you so the work fits around office hours." },
      { q: "Can you clean Persian rugs in Jumeirah villas?", a: "Yes. We clean Persian and Oriental rugs in Jumeirah, Arabian Ranches and other villa communities. Each rug is checked first, its colours are tested, and it is cleaned with a gentle method that suits the fibre." },
    ],
  },
  {
    slug: "sharjah", name: "Sharjah", ar: "الشارقة", image: "/emirates/sharjah.webp",
    metaDesc: "Carpet, rug and sofa cleaning at homes and offices across Sharjah, from Al Majaz and Al Nahda to Muwaileh. Trained team, free quote on WhatsApp.",
    h1: "Carpet Cleaning Sharjah — Homes, Villas & Offices",
    intro: "Professional carpet, rug, sofa and mattress cleaning across Sharjah. From Al Majaz apartments to Muwaileh villas, our trained crew delivers deep cleaning with eco-friendly products, and same-day slots are often available.",
    body: [
      "We serve all of Sharjah with carpet deep shampoo cleaning, rug cleaning, upholstery and mattress sanitisation, plus office carpet cleaning, all done at your home or office. Same-day slots are often available, and a quote on WhatsApp is free.",
      "Sharjah is home to many families who value clean, hygienic living spaces for their children. The combination of desert sand, high humidity from the coastal location, and air conditioning creates conditions where carpets collect allergens and dust faster than in drier climates. Our deep cleaning process removes these allergens along with the visible dirt, leaving carpets genuinely clean at the fibre level — not just surface-clean.",
      "Al Nahda, Al Taawun, and Al Khan are popular residential areas with a mix of apartments and small villas. Carpets in these neighbourhoods face heavy daily use from active families. Same-day slots are often available in these areas.",
      "Muwaileh and University City have a growing number of newer apartment communities and student housing. These modern buildings often have light-coloured carpets that show stains quickly. We offer targeted stain removal combined with full deep cleaning for these properties, keeping light carpets looking fresh without the risk of discolouration from harsh chemicals.",
      "Al Majaz, Al Qasimia, and the older parts of central Sharjah include traditional homes with large majlis areas and handmade rugs. We clean majlis cushions and seating on-site with low-moisture methods that protect decorative fabrics. Handmade and Persian rugs from these homes are checked first and cleaned with a gentle method that suits the fibre.",
      "Commercial carpet cleaning in Sharjah is available for offices, retail spaces, clinics, and educational institutions. We agree the visit time with you so the cleaning fits around opening hours, and regular cleaning keeps carpets looking professional through the year.",
    ],
    areas: ["Al Nahda", "Al Majaz", "Al Qasimia", "Muwaileh", "Al Taawun", "University City", "Al Khan", "Khor Fakkan", "Al Mamzar", "Al Gharb", "Al Ramla", "Industrial Area"],
    cityCount: 12,
    faqs: [
      { q: "Does Al Haya offer same-day carpet cleaning in Sharjah?", a: "Yes. Same-day slots are often available across Sharjah, including Al Nahda, Al Taawun, Al Khan and Al Majaz. Message us on WhatsApp with a photo of the carpet and we tell you the first free time." },
      { q: "Do you clean majlis carpets and seating in Sharjah?", a: "Yes. We clean majlis cushions and seating on-site using low-moisture methods that protect decorative fabrics. Handmade and Persian rugs are cleaned with a gentle method that suits the fibre." },
      { q: "Are your products safe for children in Sharjah apartments?", a: "Yes. We use eco-friendly cleaning products that are safe for children and pets. Let the carpet dry fully before children play on it again." },
      { q: "Do you serve Muwaileh and University City in Sharjah?", a: "Yes. We serve all Sharjah communities including Muwaileh, University City, Al Nahda, Al Majaz, Al Qasimia, Al Taawun, Al Khan, Khor Fakkan, and surrounding areas. Light-coloured carpets common in newer buildings receive targeted stain removal combined with full deep cleaning." },
    ],
  },
  {
    slug: "ajman", name: "Ajman", ar: "عجمان", image: "/emirates/ajman.webp",
    metaDesc: "Carpet, rug, sofa and mattress cleaning for apartments and villas across Ajman. Eco-friendly products, safe for kids and pets. Free quote on WhatsApp.",
    h1: "Carpet Cleaning Ajman — Homes & Apartments",
    intro: "Reliable carpet and upholstery cleaning across Ajman. We deep-clean carpets, rugs, sofas and mattresses for apartments and villas — same-day slots, eco-friendly products and a free quote on WhatsApp.",
    body: [
      "Our Ajman crew covers carpet deep shampoo cleaning, rug cleaning, sofa and upholstery cleaning, mattress sanitisation and curtain cleaning. Send a photo on WhatsApp for a free quote.",
      "Ajman is one of the most densely populated emirates in terms of residential apartment buildings. The compact living spaces mean carpets receive heavy daily foot traffic, and many families have children and pets sharing the same carpeted areas. We use eco-friendly cleaning products that are safe for children and pets — an important point for Ajman families.",
      "Al Nuaimiya and Al Rashidiya are Ajman's busiest residential districts, with high-rise apartment towers lining the main roads. Carpets in these buildings are often wall-to-wall fitted, meaning they cannot be removed for cleaning. Our portable extraction equipment is designed for exactly this situation — we clean fitted carpets in place and extract the dirty water with our machines.",
      "Al Jurf and Al Hamidiya include a mix of villas and townhouses that often have larger carpeted areas and multiple rugs. Villa appointments in Ajman are scheduled with enough time to cover all rooms thoroughly. We bring additional equipment for larger jobs and can combine carpet cleaning with sofa and mattress cleaning for a complete home refresh.",
      "Whether you need a single rug cleaned or a whole villa, send a photo and the rough size on WhatsApp and we reply with a free quote for the job.",
    ],
    areas: ["Ajman City", "Al Nuaimiya", "Al Rashidiya", "Al Jurf", "Al Hamidiya", "Al Rumailah", "Al Mowaihat", "Emirates City", "Al Tallah"],
    cityCount: 9,
    faqs: [
      { q: "Is carpet cleaning available in Al Nuaimiya and Al Rashidiya?", a: "Yes. We serve all Ajman communities including Al Nuaimiya, Al Rashidiya, Al Jurf, Al Hamidiya, Al Rumailah, Al Mowaihat, Emirates City, and Al Tallah. Our portable extraction equipment is designed for wall-to-wall fitted carpets common in Ajman apartments." },
      { q: "How do I get a quote for carpet cleaning in Ajman?", a: "Send a photo and the rough size of the carpet, rug or sofa on WhatsApp. We reply with a free quote for the job, whether it is one rug or a whole villa." },
      { q: "Can I combine carpet and sofa cleaning in one visit?", a: "Yes. Carpets, rugs and sofas can be cleaned in the same visit. Many Ajman families book a complete home refresh." },
      { q: "How long does carpet cleaning take in an Ajman apartment?", a: "It depends on how many rooms and rugs there are and how dirty they are. Send photos on WhatsApp and we tell you how long the visit will take along with your free quote. Drying time depends on the carpet and on the AC and airflow in the room." },
    ],
  },
  {
    slug: "abu-dhabi", name: "Abu Dhabi", ar: "أبوظبي", image: "/emirates/abu-dhabi.webp",
    metaDesc: "Carpet, rug and sofa cleaning in Abu Dhabi, from Khalifa City villas to Corniche flats and Mussafah offices. Free quote on WhatsApp.",
    h1: "Carpet Cleaning Abu Dhabi — Homes, Villas & Offices",
    seeAlso: [
      { before: "In Mussafah or Musaffah Shabiya? See", label: "carpet cleaning in Mussafah", href: "/locations/abu-dhabi/mussafah" },
    ],
    intro: "Deep carpet, rug, sofa and mattress cleaning across Abu Dhabi — from Khalifa City villas to Corniche apartments and Mussafah commercial spaces. Eco-friendly products, safe for kids and pets, and a free quote on WhatsApp.",
    body: [
      "We cover the full service range across Abu Dhabi: carpet deep shampoo cleaning, rug cleaning, upholstery, mattress cleaning and office carpet cleaning, all done at your home or office. Send a photo on WhatsApp for a free quote and the first free time.",
      "Abu Dhabi's residential landscape ranges from Corniche waterfront towers to sprawling Khalifa City villas. Each property type presents different carpet cleaning requirements. Tower apartments typically have smaller, heavily used carpeted areas that need frequent cleaning. Villas often have large Persian or Oriental rugs, extensive living room carpets, and separate majlis rooms — all requiring different cleaning approaches.",
      "Mussafah and the industrial areas have significant commercial carpet cleaning demand from offices, warehouses with carpeted office sections, and worker accommodation that requires regular sanitisation. We agree the visit time with each business so the cleaning does not get in the way of work.",
      "Saadiyat Island, Yas Island, and Al Reem Island represent Abu Dhabi's newer residential communities, with modern buildings and contemporary interiors. Carpets in these properties tend to be lighter colours and modern styles that show soiling quickly. Our deep shampoo process restores these carpets to their original appearance without the colour fading or texture changes that can occur with harsh cleaning methods.",
      "Al Ain, while technically part of Abu Dhabi emirate, has a distinct climate — hotter, drier, and with more dust than the coastal capital. Carpets in Al Ain homes accumulate desert dust rapidly and benefit from more frequent professional cleaning. We clean carpets in Al Ain homes too — send a photo on WhatsApp for a free quote.",
    ],
    areas: ["Abu Dhabi City", "Khalifa City", "Al Ain", "Mussafah", "Saadiyat Island", "Yas Island", "Al Reem Island", "Corniche", "Al Wahda", "Mohamed Bin Zayed City"],
    cityCount: 10,
    faqs: [
      { q: "How far in advance should I book carpet cleaning in Abu Dhabi?", a: "Message us on WhatsApp with your area and a photo of the carpet, and we tell you the first free time. Same-day slots are often available; for a large office or villa, booking a few days ahead gives you more choice of times." },
      { q: "Do you serve Khalifa City and Saadiyat Island?", a: "Yes. We serve all Abu Dhabi areas including Khalifa City, Saadiyat Island, Yas Island, Al Reem Island, Corniche, Al Wahda, Mohamed Bin Zayed City, Mussafah, and Abu Dhabi City centre. Al Ain is covered too." },
      { q: "Is commercial carpet cleaning available in Mussafah?", a: "Yes. We clean office, showroom and warehouse-office carpets in Mussafah and the industrial areas, as well as staff accommodation, and agree the visit time with you. Our Mussafah page has the details." },
      { q: "Do you offer carpet cleaning in Al Ain?", a: "Yes. The hotter, drier climate means carpets in Al Ain collect desert dust faster than in coastal Abu Dhabi, so a regular deep clean helps. Send a photo on WhatsApp for a free quote." },
    ],
  },
  {
    slug: "ras-al-khaimah", name: "Ras Al Khaimah", ar: "رأس الخيمة", image: "/emirates/ras-al-khaimah2.webp",
    metaDesc: "Carpet, rug and upholstery cleaning for villas, apartments and offices across Ras Al Khaimah. Eco-friendly products. Free quote on WhatsApp.",
    h1: "Carpet Cleaning Ras Al Khaimah (RAK)",
    intro: "Carpet, rug and upholstery cleaning across Ras Al Khaimah — villas, apartments and resorts. Deep cleaning with eco-friendly products and a free quote on WhatsApp.",
    body: [
      "Our complete service range is available in RAK: carpet deep shampoo cleaning, rug cleaning, sofa and mattress cleaning, and curtain cleaning. Message us on WhatsApp with a photo for a free quote and the first free time.",
      "Ras Al Khaimah has a growing residential population, with new villa communities and apartment developments expanding across the emirate. Al Hamra Village and Mina Al Arab are popular waterfront communities where humidity from the coast can contribute to musty carpet odors. Our odor removal treatment addresses this specific issue, which is common in RAK's coastal properties.",
      "Hotels, resorts and holiday homes along the coast and near Jebel Jais welcome guests year-round, and their carpets need to look right every day. We clean hospitality carpets too and plan the visit around guest check-in and check-out.",
      "Al Nakheel and RAK City centre have established residential areas with a mix of villas and apartments. Families in these areas benefit from the same quality of service we provide in Dubai and Sharjah — the same equipment, products, and trained technicians. Every RAK job starts with a free quote on WhatsApp.",
      "RAK customers get the same cleaning process, eco-friendly products and trained, background-checked team as customers in Dubai and Sharjah.",
    ],
    areas: ["RAK City", "Al Hamra", "Mina Al Arab", "Al Nakheel", "Al Marjan Island", "Khuzam", "Julfar", "Al Dhait"],
    cityCount: 8,
    faqs: [
      { q: "How soon can you clean carpets in Ras Al Khaimah?", a: "Message us on WhatsApp with your area and a photo of the carpet, and we tell you the first free time along with a free quote." },
      { q: "Do you clean hotel carpets in RAK?", a: "Yes. We clean carpets for hotels and resorts along the RAK coast and near Jebel Jais, and plan the visit around guest check-in and check-out." },
    ],
  },
  {
    slug: "umm-al-quwain", name: "Umm Al Quwain", ar: "أم القيوين", image: "/emirates/umm-al-quwain.webp",
    metaDesc: "Carpet, rug, sofa and mattress cleaning at homes and offices across Umm Al Quwain. Eco-friendly products, safe for kids and pets. Free quote.",
    h1: "Carpet Cleaning Umm Al Quwain (UAQ)",
    intro: "Professional carpet and upholstery cleaning across Umm Al Quwain. Deep steam cleaning for carpets, rugs, sofas and mattresses with eco-friendly products, safe for kids and pets.",
    body: [
      "All Al Haya services are available in UAQ: carpet deep shampoo cleaning, rug cleaning, upholstery, mattress sanitisation and curtain cleaning. Send a photo on WhatsApp for a free quote.",
      "Umm Al Quwain is a quieter emirate with a mix of established residential areas and newer developments. UAQ City and Al Salamah have family homes with traditional carpets and majlis seating that benefit from regular professional cleaning. The relatively lower humidity compared to coastal Dubai means carpets in UAQ homes tend to accumulate dry sand and dust rather than moisture-related odors.",
      "Al Raas, Al Haditha, and the waterfront areas have properties ranging from traditional villas to modern apartments. Carpet cleaning needs in these areas are similar to other northern emirates — removing accumulated desert sand, treating food and beverage stains, and sanitising carpets for families with children. Our eco-friendly products, safe for children and pets, are valued by families who worry about harsh chemicals.",
      "Commercial properties in UAQ, including offices, clinics, and retail spaces, have access to the same professional carpet cleaning we provide across the UAE. We agree the visit time with each business.",
      "Despite being one of the smaller emirates, UAQ residents receive the same quality of service, equipment, and trained technicians as our Dubai and Abu Dhabi customers. There are no compromises on product quality or cleaning thoroughness — every job follows the same process regardless of location.",
    ],
    areas: ["UAQ City", "Al Salamah", "Al Raas", "Al Haditha", "UAQ Marina", "Al Riqqah", "Old Town", "Al Abraq"],
    cityCount: 8,
    faqs: [
      { q: "Does Al Haya serve Umm Al Quwain regularly?", a: "Yes. We clean carpets, rugs and sofas across Umm Al Quwain, including UAQ City, Al Salamah, Al Raas and Al Haditha. Message us on WhatsApp for a free quote and the first free time." },
      { q: "Are the same products and equipment used as in Dubai?", a: "Yes. UAQ residents receive the same quality of service, equipment, products, and trained technicians as our Dubai and Abu Dhabi customers. There are no compromises on product quality or cleaning thoroughness regardless of location." },
    ],
  },
  {
    slug: "fujairah", name: "Fujairah", ar: "الفجيرة", image: "/emirates/fujairah.webp",
    metaDesc: "Carpet, rug, sofa and mattress cleaning in Fujairah and on the east coast, at homes, villas and offices. Free quote on WhatsApp.",
    h1: "Carpet Cleaning Fujairah — East Coast Service",
    intro: "Carpet, rug, sofa and mattress cleaning across Fujairah and the east coast — homes, villas and resorts. Deep cleaning with eco-friendly products and a free quote on WhatsApp.",
    body: [
      "Every Al Haya service is available in Fujairah: carpet deep shampoo cleaning, rug cleaning, upholstery, mattress sanitisation and curtain cleaning. Message us on WhatsApp with a photo for a free quote and the first free time.",
      "Fujairah's east coast location gives it a different climate profile from the western emirates. Higher humidity from the Indian Ocean, combined with the mountainous terrain that traps moisture, means carpets in Fujairah homes are particularly susceptible to musty odors and mildew growth in the fibres. Our antimicrobial treatment addresses this specific east coast challenge, neutralising mildew at the source.",
      "Fujairah City and Dibba are the main residential centres where we serve families with carpet, rug, and upholstery cleaning. Al Faseel and Sakamkam have growing residential developments with modern apartments and villas that need regular carpet maintenance. Our deep shampoo process handles both the sand ingress common to all UAE locations and the humidity-related issues specific to the east coast.",
      "Khor Fakkan and Kalba, while technically in Sharjah emirate, are geographically on the east coast and are covered too, with the same service as Fujairah City.",
      "The east coast hotel and resort industry relies on consistently clean carpets for guest satisfaction. We clean lobby, corridor and room carpets for hospitality properties across Fujairah and plan the visit around guest check-in and check-out.",
    ],
    areas: ["Fujairah City", "Dibba", "Al Faseel", "Sakamkam", "Khor Fakkan", "Kalba", "Masafi", "Bidiyah"],
    cityCount: 8,
    faqs: [
      { q: "Does Al Haya cover the Fujairah east coast?", a: "Yes. We serve all east coast locations including Fujairah City, Dibba, Al Faseel, Sakamkam, and Bidiyah. Khor Fakkan and Kalba, while technically in Sharjah emirate, are also covered." },
      { q: "How does east coast humidity affect carpet cleaning?", a: "Fujairah's higher humidity from the Indian Ocean can cause musty odors and mildew growth in carpet fibres. Our antimicrobial treatment addresses this specific east coast challenge, neutralising mildew at the source rather than masking it with fragrances." },
      { q: "Do you offer carpet cleaning for east coast resorts?", a: "Yes. We clean lobby, corridor and room carpets for hotels and resorts on the east coast and plan the visit around guest check-in and check-out." },
    ],
  },
  {
    slug: "dibba", name: "Dibba", ar: "دبا", image: "/emirates/dibba.webp",
    metaDesc: "Carpet, rug, sofa and mattress cleaning in Dibba, on the UAE east coast, at homes and villas. Eco-friendly products. Free quote on WhatsApp.",
    h1: "Carpet Cleaning Dibba — East Coast Town, Two Emirates",
    intro: "Carpet, rug, sofa and mattress cleaning in Dibba — the UAE's east-coast town split across Fujairah and Sharjah. Deep steam cleaning with eco-friendly products, covering both Dibba Al-Fujairah and Dibba Al-Hisn.",
    body: [
      "Every Al Haya service is available in Dibba: carpet deep shampoo cleaning, rug cleaning, sofa and upholstery cleaning, mattress sanitisation and curtain cleaning. Message us on WhatsApp with a photo for a free quote and the first free time.",
      "Dibba is unusual among UAE towns in that it sits across three jurisdictions — Dibba Al-Fujairah, Dibba Al-Hisn in Sharjah, and Dibba Bay'ah across the border in Oman's Musandam. We serve the UAE side of town, both Dibba Al-Fujairah and Dibba Al-Hisn, as one service area, with the same booking process on either side.",
      "Like the rest of the east coast, Dibba's coastal humidity and mountain backdrop mean carpets and upholstery are more prone to trapping moisture and dust than in the drier western emirates. Our deep extraction process removes embedded sand and treats musty odors at the source rather than masking them.",
      "Dibba's homes range from established villas near the town centre to newer coastal properties and holiday homes along the corniche. We bring the same equipment and trained technicians used across all seven emirates, and every Dibba job starts with a free quote on WhatsApp.",
    ],
    areas: ["Dibba Al-Fujairah", "Dibba Al-Hisn", "Dibba Port", "Al Aqah"],
    cityCount: 4,
    faqs: [
      { q: "Do you serve both Dibba Al-Fujairah and Dibba Al-Hisn?", a: "Yes. We cover both sides of Dibba — Dibba Al-Fujairah and Dibba Al-Hisn in Sharjah — as one service area." },
      { q: "How soon can you clean carpets in Dibba?", a: "Message us on WhatsApp with your location in Dibba and a photo of the carpet, and we tell you the first free time along with a free quote. For a large villa, booking a day or two ahead gives you more choice of times." },
      { q: "Do you clean carpets in Dibba's holiday homes and coastal villas?", a: "Yes. Dibba's coastal properties and holiday homes are prone to trapping moisture from the sea air — our deep extraction and odor-removal process is well suited to this, and we bring all equipment so nothing needs preparing in advance." },
    ],
  },
];

/**
 * "carpet cleaning <emirate> price/cost" is searched for every emirate, so each
 * page answers it (without a figure: quotes depend on the carpet).
 */
function withPriceFaq(l: Location): Location {
  if (l.faqs.some((f) => /\b(cost|price|pricing)\b/i.test(f.q))) return l;
  return {
    ...l,
    faqs: [
      {
        q: `How much does carpet cleaning cost in ${l.name}?`,
        a: `It depends on the carpet's size, its fibre (wool, silk or synthetic) and how stained or dusty it is. Send a photo and the rough size on WhatsApp and we reply with a free quote for your carpets in ${l.name}.`,
      },
      ...l.faqs,
    ],
  };
}

export function getLocation(slug: string): Location | undefined {
  const l = LOCATIONS.find((x) => x.slug === slug);
  return l ? withPriceFaq(l) : undefined;
}
