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
  body: string[];
  areas: string[];
  resp: string;        // response-time line
  cityCount: number;
  faqs: Faq[];
}

export const LOCATIONS: Location[] = [
  {
    slug: "dubai", name: "Dubai", ar: "دبي", image: "/emirates/dubai.webp",
    h1: "Carpet Cleaning Dubai — Homes, Villas & Offices",
    intro: "Al Haya is Dubai's trusted on-demand carpet cleaning service. From Marina towers to Jumeirah villas and Business Bay offices, we deep-clean, steam-sanitise and restore carpets, rugs, sofas and mattresses — with same-day pickup, clean and return anywhere in the city.",
    body: [
      "Dubai is our busiest service area, with multiple crews on the road daily. We cover carpet deep shampoo cleaning, rug cleaning, sofa and upholstery cleaning, mattress sanitisation, office carpet cleaning and curtain cleaning — all with eco-friendly, child-safe and pet-safe products. Same-day and emergency appointments are available across Dubai, with most central areas reached within 30 to 60 minutes.",
      "Dubai Marina and JBR tower apartments present specific carpet cleaning challenges. High-rise buildings mean carpets are rarely exposed to fresh air, trapping cooking odors and dust in the fibres over time. Compact apartment layouts mean furniture sits on carpets continuously, creating compression marks and hidden soiling underneath. Our technicians are experienced with tower apartment logistics — we bring all equipment in portable units and work efficiently in smaller spaces.",
      "Jumeirah, Al Barsha, and Arabian Ranches villas often have large statement rugs, wall-to-wall fitted carpets, and extensive majlis seating areas. Villa cleaning typically requires longer appointments and more equipment. We schedule villa jobs with dedicated time blocks to ensure every room receives thorough attention. For villas with Persian or handmade rugs, we offer specialized care including pickup, off-site cleaning, and delivery.",
      "Business Bay, DIFC, and Downtown Dubai offices are among the busiest commercial spaces in the UAE. High foot traffic, daily sand ingress, and regular coffee and food spills mean office carpets degrade faster than residential ones. We provide after-hours and weekend cleaning for commercial clients, ensuring zero business downtime. Regular maintenance contracts are available with monthly or quarterly scheduling.",
      "Deira, Bur Dubai, and Al Qusais residential areas have a high concentration of apartments with wall-to-wall fitted carpets. These carpets accumulate sand and dust rapidly due to proximity to construction zones and main roads. Our deep shampoo extraction process is particularly effective for fitted carpets that cannot be removed for cleaning — we clean in place with full extraction, and the carpets are walkable within 2 to 4 hours.",
      "All Dubai carpet cleaning jobs include a free pre-inspection, transparent fixed pricing with no hidden charges, and a satisfaction guarantee. We bring all equipment, water, and supplies — you do not need to prepare anything. Free quotes are available on call or WhatsApp.",
    ],
    areas: ["Dubai Marina", "Downtown Dubai", "Jumeirah", "Business Bay", "Deira", "Al Barsha", "JBR", "Palm Jumeirah", "Arabian Ranches", "Al Qusais", "Bur Dubai", "DIFC", "Motor City", "Silicon Oasis", "JVC", "Springs"],
    resp: "30 – 60 mins", cityCount: 16,
    faqs: [
      { q: "How quickly can Al Haya reach my location in Dubai?", a: "We reach most central Dubai areas — Marina, Downtown, Jumeirah, Business Bay, Deira, Al Barsha — within 30 to 60 minutes of booking confirmation. Same-day service is available across all Dubai communities." },
      { q: "Do you offer carpet cleaning for Dubai Marina apartments?", a: "Yes. Our technicians bring all equipment in portable units designed for high-rise buildings. We work efficiently in compact apartment spaces and handle building access logistics including parking and elevator coordination." },
      { q: "Is same-day carpet cleaning available in Dubai?", a: "Yes. Book in the morning and have your carpets cleaned the same day. Same-day availability covers all Dubai areas. For large villa jobs or commercial spaces, we recommend booking a day ahead to ensure a dedicated time block." },
      { q: "Do you clean office carpets in Business Bay and DIFC?", a: "Yes. We provide after-hours and weekend commercial carpet cleaning for offices in Business Bay, DIFC, Downtown, and all Dubai business districts. Regular maintenance contracts are available with monthly or quarterly scheduling." },
      { q: "Can you clean Persian rugs in Jumeirah villas?", a: "Yes. We offer specialised Persian and Oriental rug cleaning with pickup and delivery across Jumeirah, Arabian Ranches, and all Dubai villa communities. Each rug is inspected, tested for dye fastness, and cleaned using low-moisture pH-neutral methods." },
    ],
  },
  {
    slug: "sharjah", name: "Sharjah", ar: "الشارقة", image: "/emirates/sharjah.webp",
    h1: "Carpet Cleaning Sharjah — Fast, Trusted Service",
    intro: "Professional carpet, rug, sofa and mattress cleaning across Sharjah. From Al Majaz apartments to Muwaileh villas, our trained crew delivers deep steam cleaning and same-day service with eco-friendly products.",
    body: [
      "We serve all of Sharjah with carpet deep shampoo cleaning, rug cleaning, upholstery and mattress sanitisation, plus office and villa contracts. Pickup-and-return is available for rugs and curtains. Same-day appointments across Sharjah, transparent pricing and a written satisfaction guarantee on every job.",
      "Sharjah is home to many families who value clean, hygienic living spaces for their children. The combination of desert sand, high humidity from the coastal location, and air conditioning creates conditions where carpets collect allergens and dust faster than in drier climates. Our deep cleaning process removes these allergens along with the visible dirt, leaving carpets genuinely clean at the fibre level — not just surface-clean.",
      "Al Nahda, Al Taawun, and Al Khan are popular residential areas with a mix of apartments and small villas. Carpets in these neighbourhoods face heavy daily use from active families. Our team is based close to the Sharjah-Dubai border, giving us rapid response times to these areas — typically 30 to 45 minutes from booking confirmation to arrival.",
      "Muwaileh and University City have a growing number of newer apartment communities and student housing. These modern buildings often have light-coloured carpets that show stains quickly. We offer targeted stain removal combined with full deep cleaning for these properties, keeping light carpets looking fresh without the risk of discolouration from harsh chemicals.",
      "Al Majaz, Al Qasimia, and the older parts of central Sharjah include traditional homes with large majlis areas and handmade rugs. We clean majlis cushions and seating on-site with low-moisture methods that protect decorative fabrics. Handmade and Persian rugs from these homes can be picked up for off-site cleaning and returned cleaned and dried.",
      "Commercial carpet cleaning in Sharjah is available for offices, retail spaces, clinics, and educational institutions. We offer flexible scheduling including evening and weekend appointments. Regular maintenance contracts help businesses maintain professional-looking carpets throughout the year.",
    ],
    areas: ["Al Nahda", "Al Majaz", "Al Qasimia", "Muwaileh", "Al Taawun", "University City", "Al Khan", "Khor Fakkan", "Al Mamzar", "Al Gharb", "Al Ramla", "Industrial Area"],
    resp: "30 – 45 mins", cityCount: 12,
    faqs: [
      { q: "Does Al Haya offer same-day carpet cleaning in Sharjah?", a: "Yes. Same-day appointments are available across Sharjah with response times of 30 to 45 minutes. Our team is based close to the Sharjah-Dubai border, giving us rapid access to Al Nahda, Al Taawun, Al Khan, Al Majaz, and surrounding areas." },
      { q: "Do you clean majlis carpets and seating in Sharjah?", a: "Yes. We clean majlis cushions and seating on-site using low-moisture methods that protect decorative fabrics. Handmade and Persian rugs from Sharjah homes can be picked up for off-site cleaning and returned cleaned and dried." },
      { q: "Are your products safe for children in Sharjah apartments?", a: "Yes. All our cleaning products are non-toxic, biodegradable, child-safe, and pet-safe. Once the carpet is fully dry (2 to 4 hours), it is completely safe for children to play on. We never use harsh chemicals that could leave harmful residues." },
      { q: "Do you serve Muwaileh and University City in Sharjah?", a: "Yes. We serve all Sharjah communities including Muwaileh, University City, Al Nahda, Al Majaz, Al Qasimia, Al Taawun, Al Khan, Khor Fakkan, and surrounding areas. Light-coloured carpets common in newer buildings receive targeted stain removal combined with full deep cleaning." },
    ],
  },
  {
    slug: "ajman", name: "Ajman", ar: "عجمان", image: "/emirates/ajman.webp",
    h1: "Carpet Cleaning Ajman — Homes & Apartments",
    intro: "Reliable carpet and upholstery cleaning across Ajman. We deep-clean carpets, rugs, sofas and mattresses for apartments and villas — same-day service, eco-friendly products and fair, fixed pricing.",
    body: [
      "Our Ajman crew covers carpet deep shampoo cleaning, rug cleaning, sofa and upholstery cleaning, mattress sanitisation and curtain cleaning. Dense apartment communities in Ajman get fast turnaround thanks to local scheduling. Free quotes and a satisfaction guarantee on every booking.",
      "Ajman is one of the most densely populated emirates in terms of residential apartment buildings. The compact living spaces mean carpets receive heavy daily foot traffic, and many families have children and pets sharing the same carpeted areas. Our cleaning products are specifically chosen to be non-toxic and safe for young children and animals — an important consideration for Ajman families.",
      "Al Nuaimiya and Al Rashidiya are Ajman's busiest residential districts, with high-rise apartment towers lining the main roads. Carpets in these buildings are often wall-to-wall fitted, meaning they cannot be removed for cleaning. Our portable extraction equipment is designed for exactly this situation — we clean fitted carpets in place with full moisture extraction, and they are ready to walk on within 2 to 4 hours.",
      "Al Jurf and Al Hamidiya include a mix of villas and townhouses that often have larger carpeted areas and multiple rugs. Villa appointments in Ajman are scheduled with enough time to cover all rooms thoroughly. We bring additional equipment for larger jobs and can combine carpet cleaning with sofa and mattress cleaning for a complete home refresh.",
      "Ajman's proximity to Sharjah and Dubai means we can combine Ajman visits with our routes to neighbouring emirates, keeping travel costs out of your quote. There is no minimum job size — whether you need a single rug cleaned or an entire villa, we quote the same fair, fixed pricing.",
    ],
    areas: ["Ajman City", "Al Nuaimiya", "Al Rashidiya", "Al Jurf", "Al Hamidiya", "Al Rumailah", "Al Mowaihat", "Emirates City", "Al Tallah"],
    resp: "30 – 45 mins", cityCount: 9,
    faqs: [
      { q: "Is carpet cleaning available in Al Nuaimiya and Al Rashidiya?", a: "Yes. We serve all Ajman communities including Al Nuaimiya, Al Rashidiya, Al Jurf, Al Hamidiya, Al Rumailah, Al Mowaihat, Emirates City, and Al Tallah. Our portable extraction equipment is designed for wall-to-wall fitted carpets common in Ajman apartments." },
      { q: "Is there a minimum job size for carpet cleaning in Ajman?", a: "No. Whether you need a single rug cleaned or an entire villa, we quote the same fair, fixed pricing. There is no minimum job size or surcharge for smaller appointments in Ajman." },
      { q: "Can I combine carpet and sofa cleaning in one visit?", a: "Yes. Combining carpet cleaning with sofa, mattress, or curtain cleaning in a single appointment is more cost-effective than booking separate visits. Many Ajman families book a complete home refresh combining all services." },
      { q: "How long does carpet cleaning take in an Ajman apartment?", a: "A standard 1-2 bedroom apartment carpet cleaning takes approximately 1 to 2 hours. The carpets are then walkable within 2 to 4 hours of drying time. Villa appointments with multiple rooms and rugs are scheduled with longer dedicated time blocks." },
    ],
  },
  {
    slug: "abu-dhabi", name: "Abu Dhabi", ar: "أبوظبي", image: "/emirates/abu-dhabi.webp",
    h1: "Carpet Cleaning Abu Dhabi — Capital Service",
    intro: "Deep carpet, rug, sofa and mattress cleaning across Abu Dhabi — from Khalifa City villas to Corniche apartments and Mussafah commercial spaces. Eco-friendly products and reliable, scheduled service.",
    body: [
      "We run regular Abu Dhabi routes covering the full service range: carpet deep shampoo cleaning, rug cleaning, upholstery, mattress sanitisation and commercial carpet contracts. Bookings are typically scheduled within 48 hours, with priority slots available for urgent requests. Free on-site quote across the emirate, with overnight and weekend slots for commercial clients.",
      "Abu Dhabi's residential landscape ranges from Corniche waterfront towers to sprawling Khalifa City villas. Each property type presents different carpet cleaning requirements. Tower apartments typically have smaller, heavily used carpeted areas that need frequent cleaning. Villas often have large Persian or Oriental rugs, extensive living room carpets, and separate majlis rooms — all requiring different cleaning approaches.",
      "Mussafah and the industrial areas have significant commercial carpet cleaning demand from offices, warehouses with carpeted office sections, and worker accommodation that requires regular sanitisation. We offer flexible commercial scheduling for Abu Dhabi businesses, including after-hours and weekend appointments to avoid disrupting operations.",
      "Saadiyat Island, Yas Island, and Al Reem Island represent Abu Dhabi's newer residential communities, with modern buildings and contemporary interiors. Carpets in these properties tend to be lighter colours and modern styles that show soiling quickly. Our deep shampoo process restores these carpets to their original appearance without the colour fading or texture changes that can occur with harsh cleaning methods.",
      "Al Ain, while technically part of Abu Dhabi emirate, has a distinct climate — hotter, drier, and with more dust than the coastal capital. Carpets in Al Ain homes accumulate desert dust rapidly and benefit from more frequent professional cleaning. We schedule Al Ain visits on dedicated routes to provide consistent service to this important inland area.",
    ],
    areas: ["Abu Dhabi City", "Khalifa City", "Al Ain", "Mussafah", "Saadiyat Island", "Yas Island", "Al Reem Island", "Corniche", "Al Wahda", "Mohamed Bin Zayed City"],
    resp: "35 – 55 mins", cityCount: 10,
    faqs: [
      { q: "How far in advance should I book carpet cleaning in Abu Dhabi?", a: "We run regular Abu Dhabi routes. Bookings are typically scheduled within 48 hours, with priority slots available for urgent requests. For large commercial spaces, booking 3 to 5 days ahead ensures a dedicated team and time block." },
      { q: "Do you serve Khalifa City and Saadiyat Island?", a: "Yes. We serve all Abu Dhabi areas including Khalifa City, Saadiyat Island, Yas Island, Al Reem Island, Corniche, Al Wahda, Mohamed Bin Zayed City, Mussafah, and Abu Dhabi City centre. Al Ain is also covered on dedicated routes." },
      { q: "Is commercial carpet cleaning available in Mussafah?", a: "Yes. We offer flexible commercial scheduling for Abu Dhabi businesses in Mussafah and the industrial areas, including after-hours and weekend appointments. Offices, warehouses with carpeted sections, and worker accommodation all receive the same professional service." },
      { q: "Do you offer carpet cleaning in Al Ain?", a: "Yes. Al Ain is covered on dedicated routes. The hotter, drier climate means carpets accumulate desert dust faster than in coastal Abu Dhabi. We schedule Al Ain visits regularly to provide consistent service to this important inland area." },
    ],
  },
  {
    slug: "ras-al-khaimah", name: "Ras Al Khaimah", ar: "رأس الخيمة", image: "/emirates/ras-al-khaimah2.webp",
    h1: "Carpet Cleaning Ras Al Khaimah (RAK)",
    intro: "Carpet, rug and upholstery cleaning across Ras Al Khaimah — villas, apartments and resorts. Deep steam cleaning with eco-friendly products on a regular weekly RAK route.",
    body: [
      "Our complete service range is available in RAK: carpet deep shampoo cleaning, rug cleaning, sofa and mattress cleaning, and curtain cleaning. Hotels and resorts can arrange ongoing maintenance contracts. Weekly scheduled routes mean booking lead time is rarely more than a few days.",
      "Ras Al Khaimah has a growing residential population, with new villa communities and apartment developments expanding across the emirate. Al Hamra Village and Mina Al Arab are popular waterfront communities where humidity from the coast can contribute to musty carpet odors. Our odor removal treatment addresses this specific issue, which is common in RAK's coastal properties.",
      "RAK's hotel and resort sector is an important part of our commercial business. Properties along the coast and near Jebel Jais mountain welcome guests year-round and need their carpets maintained to hospitality standards. We offer regular maintenance contracts with flexible scheduling that works around guest occupancy patterns.",
      "Al Nakheel and RAK City centre have established residential areas with a mix of villas and apartments. Families in these areas benefit from the same quality of service we provide in Dubai and Sharjah — the same equipment, products, and trained technicians. All RAK appointments include free pre-inspection and transparent fixed pricing.",
      "We combine our RAK visits with Umm Al Quwain routes to maintain cost-effective service across the northern emirates. This means we can keep our pricing competitive for RAK customers while providing the same thorough cleaning process used across all seven emirates.",
    ],
    areas: ["RAK City", "Al Hamra", "Mina Al Arab", "Al Nakheel", "Al Marjan Island", "Khuzam", "Julfar", "Al Dhait"],
    resp: "45 – 65 mins", cityCount: 8,
    faqs: [
      { q: "How often does Al Haya visit Ras Al Khaimah?", a: "We run weekly scheduled routes to RAK. Booking lead time is rarely more than a few days. Hotels and resorts with ongoing maintenance contracts receive priority scheduling that works around guest occupancy patterns." },
      { q: "Do you clean hotel carpets in RAK?", a: "Yes. We offer regular maintenance contracts for hotels and resorts along the RAK coast and near Jebel Jais. Our scheduling works around guest check-in and check-out patterns to ensure zero disruption to hospitality operations." },
      { q: "Is the pricing the same as in Dubai?", a: "Yes. Our pricing is based on carpet size, fabric type, and condition — not location. RAK customers receive the same fair, transparent pricing as our Dubai and Sharjah clients. We combine RAK visits with northern emirate routes to keep travel costs out of your quote." },
    ],
  },
  {
    slug: "umm-al-quwain", name: "Umm Al Quwain", ar: "أم القيوين", image: "/emirates/umm-al-quwain.webp",
    h1: "Carpet Cleaning Umm Al Quwain (UAQ)",
    intro: "Professional carpet and upholstery cleaning across Umm Al Quwain. Deep steam cleaning for carpets, rugs, sofas and mattresses with eco-friendly products and fair pricing.",
    body: [
      "All Al Haya services are available in UAQ: carpet deep shampoo cleaning, rug cleaning, upholstery, mattress sanitisation and curtain cleaning. We combine UAQ visits with our Ajman and RAK routes to keep travel costs out of your quote. Free site visit and quotation, with no minimum job size.",
      "Umm Al Quwain is a quieter emirate with a mix of established residential areas and newer developments. UAQ City and Al Salamah have family homes with traditional carpets and majlis seating that benefit from regular professional cleaning. The relatively lower humidity compared to coastal Dubai means carpets in UAQ homes tend to accumulate dry sand and dust rather than moisture-related odors.",
      "Al Raas, Al Haditha, and the waterfront areas have properties ranging from traditional villas to modern apartments. Carpet cleaning needs in these areas are similar to other northern emirates — removing accumulated desert sand, treating food and beverage stains, and sanitising carpets for families with children. Our eco-friendly, non-toxic products are particularly valued by families concerned about chemical residues.",
      "Commercial properties in UAQ, including offices, clinics, and retail spaces, have access to the same professional carpet cleaning we provide across the UAE. We offer regular maintenance scheduling and fixed pricing for UAQ businesses.",
      "Despite being one of the smaller emirates, UAQ residents receive the same quality of service, equipment, and trained technicians as our Dubai and Abu Dhabi customers. There are no compromises on product quality or cleaning thoroughness — every job follows the same process regardless of location.",
    ],
    areas: ["UAQ City", "Al Salamah", "Al Raas", "Al Haditha", "UAQ Marina", "Al Riqqah", "Old Town", "Al Abraq"],
    resp: "40 – 60 mins", cityCount: 8,
    faqs: [
      { q: "Does Al Haya serve Umm Al Quwain regularly?", a: "Yes. We combine UAQ visits with our Ajman and RAK routes, maintaining regular service to Umm Al Quwain. Travel costs are absorbed into our routing — they do not appear on your quote." },
      { q: "Is there a minimum order for carpet cleaning in UAQ?", a: "No. Whether you need a single rug or an entire villa cleaned, we provide the same service and pricing. There is no minimum job size or surcharge for UAQ appointments." },
      { q: "Are the same products and equipment used as in Dubai?", a: "Yes. UAQ residents receive the same quality of service, equipment, products, and trained technicians as our Dubai and Abu Dhabi customers. There are no compromises on product quality or cleaning thoroughness regardless of location." },
    ],
  },
  {
    slug: "fujairah", name: "Fujairah", ar: "الفجيرة", image: "/emirates/fujairah.webp",
    h1: "Carpet Cleaning Fujairah — East Coast Service",
    intro: "Carpet, rug, sofa and mattress cleaning across Fujairah and the east coast — homes, villas and resorts. Deep steam cleaning with eco-friendly products on a regular Fujairah route.",
    body: [
      "Every Al Haya service is available in Fujairah: carpet deep shampoo cleaning, rug cleaning, upholstery, mattress sanitisation and curtain cleaning. Resorts on the east coast benefit from scheduled maintenance contracts. Hotels and larger residences typically book a week or two ahead, while smaller jobs combine into our regular Fujairah route.",
      "Fujairah's east coast location gives it a different climate profile from the western emirates. Higher humidity from the Indian Ocean, combined with the mountainous terrain that traps moisture, means carpets in Fujairah homes are particularly susceptible to musty odors and mildew growth in the fibres. Our antimicrobial treatment addresses this specific east coast challenge, neutralising mildew at the source.",
      "Fujairah City and Dibba are the main residential centres where we serve families with carpet, rug, and upholstery cleaning. Al Faseel and Sakamkam have growing residential developments with modern apartments and villas that need regular carpet maintenance. Our deep shampoo process handles both the sand ingress common to all UAE locations and the humidity-related issues specific to the east coast.",
      "Khor Fakkan and Kalba, while technically in Sharjah emirate, are geographically on the east coast and are covered by our Fujairah route. Residents and businesses in these towns receive the same service as Fujairah City customers, with no additional travel surcharges.",
      "The east coast hotel and resort industry relies on consistently clean carpets for guest satisfaction. We provide regular maintenance contracts for hospitality properties across Fujairah, with scheduling that works around guest check-in and check-out patterns. Lobby, corridor, and room carpets are all covered under our commercial service agreements.",
    ],
    areas: ["Fujairah City", "Dibba", "Al Faseel", "Sakamkam", "Khor Fakkan", "Kalba", "Masafi", "Bidiyah"],
    resp: "50 – 70 mins", cityCount: 8,
    faqs: [
      { q: "Does Al Haya cover the Fujairah east coast?", a: "Yes. We serve all east coast locations including Fujairah City, Dibba, Al Faseel, Sakamkam, and Bidiyah. Khor Fakkan and Kalba, while technically in Sharjah emirate, are also covered on our Fujairah route with no additional travel surcharges." },
      { q: "How does east coast humidity affect carpet cleaning?", a: "Fujairah's higher humidity from the Indian Ocean can cause musty odors and mildew growth in carpet fibres. Our antimicrobial treatment addresses this specific east coast challenge, neutralising mildew at the source rather than masking it with fragrances." },
      { q: "Do you offer carpet cleaning for east coast resorts?", a: "Yes. We provide regular maintenance contracts for hospitality properties across the east coast. Scheduling works around guest occupancy patterns, covering lobby, corridor, and room carpets under our commercial service agreements." },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
