// Single source of truth for emirate coverage — used by /locations hub,
// /locations/[slug] pages, homepage coverage strip and sitemap.

export interface Location {
  slug: string;
  name: string;
  ar: string;
  h1: string;
  intro: string;
  body: string[];
  areas: string[];
  resp: string;        // response-time line
  cityCount: number;
}

export const LOCATIONS: Location[] = [
  {
    slug: "dubai", name: "Dubai", ar: "دبي",
    h1: "Carpet Cleaning Dubai — Homes, Villas & Offices",
    intro: "Al Haya is Dubai's trusted on-demand carpet cleaning service. From Marina towers to Jumeirah villas and Business Bay offices, we deep-clean, steam-sanitise and restore carpets, rugs, sofas and mattresses — with same-day pickup, clean and return anywhere in the city.",
    body: [
      "Dubai is our busiest service area, with multiple crews on the road daily. We cover carpet steam cleaning, rug cleaning, sofa & upholstery cleaning, mattress sanitisation, office carpets and curtain cleaning — all with eco-friendly, child- and pet-safe products.",
      "Same-day and emergency appointments are available across Dubai, with most central areas reached within 30–60 minutes. Free quote on call or WhatsApp, transparent fixed pricing and a 100% satisfaction guarantee.",
    ],
    areas: ["Dubai Marina", "Downtown Dubai", "Jumeirah", "Business Bay", "Deira", "Al Barsha", "JBR", "Palm Jumeirah"],
    resp: "30 – 60 mins", cityCount: 6,
  },
  {
    slug: "sharjah", name: "Sharjah", ar: "الشارقة",
    h1: "Carpet Cleaning Sharjah — Fast, Trusted Service",
    intro: "Professional carpet, rug, sofa and mattress cleaning across Sharjah. From Al Majaz apartments to Muwaileh villas, our trained crew delivers deep steam cleaning and same-day service with eco-friendly products.",
    body: [
      "We serve all of Sharjah with carpet steam cleaning, rug cleaning, upholstery and mattress sanitisation, plus office and villa contracts. Pickup-and-return is available for rugs and curtains.",
      "Same-day appointments across Sharjah, transparent pricing and a written satisfaction guarantee on every job.",
    ],
    areas: ["Al Nahda", "Al Majaz", "Al Qasimia", "Muwaileh", "Al Taawun", "University City", "Al Khan", "Khor Fakkan"],
    resp: "30 – 45 mins", cityCount: 5,
  },
  {
    slug: "ajman", name: "Ajman", ar: "عجمان",
    h1: "Carpet Cleaning Ajman — Homes & Apartments",
    intro: "Reliable carpet and upholstery cleaning across Ajman. We deep-clean carpets, rugs, sofas and mattresses for apartments and villas — same-day service, eco-friendly products and fair, fixed pricing.",
    body: [
      "Our Ajman crew covers carpet steam cleaning, rug cleaning, sofa & upholstery, mattress sanitisation and curtain cleaning. Dense apartment communities get fast turnaround thanks to local scheduling.",
      "Free quotes and a 100% satisfaction guarantee on every Ajman booking.",
    ],
    areas: ["Ajman City", "Al Nuaimiya", "Al Rashidiya", "Al Jurf", "Al Hamidiya", "Al Rumailah"],
    resp: "30 – 45 mins", cityCount: 2,
  },
  {
    slug: "abu-dhabi", name: "Abu Dhabi", ar: "أبوظبي",
    h1: "Carpet Cleaning Abu Dhabi — Capital Service",
    intro: "Deep carpet, rug, sofa and mattress cleaning across Abu Dhabi — from Khalifa City villas to Corniche apartments and Mussafah commercial spaces. Eco-friendly products and reliable, scheduled service.",
    body: [
      "We run regular Abu Dhabi routes covering the full service range: carpet steam cleaning, rug cleaning, upholstery, mattress sanitisation and commercial contracts. Bookings are typically scheduled within 48 hours.",
      "Free on-site quote across the emirate, with overnight and weekend slots for commercial clients.",
    ],
    areas: ["Abu Dhabi City", "Khalifa City", "Al Ain", "Mussafah", "Saadiyat Island", "Yas Island", "Al Reem Island"],
    resp: "35 – 55 mins", cityCount: 4,
  },
  {
    slug: "ras-al-khaimah", name: "Ras Al Khaimah", ar: "رأس الخيمة",
    h1: "Carpet Cleaning Ras Al Khaimah (RAK)",
    intro: "Carpet, rug and upholstery cleaning across Ras Al Khaimah — villas, apartments and resorts. Deep steam cleaning with eco-friendly products on a regular weekly RAK route.",
    body: [
      "Our complete service range is available in RAK: carpet steam cleaning, rug cleaning, sofa & mattress cleaning and curtain cleaning. Hotels and resorts can arrange ongoing maintenance contracts.",
      "Weekly scheduled routes mean booking lead time is rarely more than a few days.",
    ],
    areas: ["RAK City", "Al Hamra", "Mina Al Arab", "Al Nakheel", "Al Marjan Island", "Khuzam"],
    resp: "45 – 65 mins", cityCount: 3,
  },
  {
    slug: "umm-al-quwain", name: "Umm Al Quwain", ar: "أم القيوين",
    h1: "Carpet Cleaning Umm Al Quwain (UAQ)",
    intro: "Professional carpet and upholstery cleaning across Umm Al Quwain. Deep steam cleaning for carpets, rugs, sofas and mattresses with eco-friendly products and fair pricing.",
    body: [
      "All Al Haya services are available in UAQ: carpet steam cleaning, rug cleaning, upholstery, mattress sanitisation and curtain cleaning. We combine UAQ visits with our Ajman and RAK routes to keep travel costs out of your quote.",
      "Free site visit and quotation, with no minimum job size.",
    ],
    areas: ["UAQ City", "Al Salamah", "Al Raas", "Al Haditha", "UAQ Marina", "Al Riqqah"],
    resp: "40 – 60 mins", cityCount: 2,
  },
  {
    slug: "fujairah", name: "Fujairah", ar: "الفجيرة",
    h1: "Carpet Cleaning Fujairah — East Coast Service",
    intro: "Carpet, rug, sofa and mattress cleaning across Fujairah and the east coast — homes, villas and resorts. Deep steam cleaning with eco-friendly products on a regular Fujairah route.",
    body: [
      "Every Al Haya service is available in Fujairah: carpet steam cleaning, rug cleaning, upholstery, mattress sanitisation and curtain cleaning. Resorts on the coast benefit from scheduled maintenance contracts.",
      "Hotels and larger residences typically book a week or two ahead; smaller jobs combine into our regular Fujairah route.",
    ],
    areas: ["Fujairah City", "Dibba", "Al Faseel", "Sakamkam", "Khor Fakkan", "Kalba"],
    resp: "50 – 70 mins", cityCount: 3,
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
