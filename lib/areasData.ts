// Area pages: one page per high-demand neighbourhood inside an emirate,
// served at /locations/{parent}/{slug}. Add an area only when Search Console
// shows real demand for it, and write its text from scratch: each area page
// needs its own content, not the emirate page with the name swapped.
//
// Business facts allowed here (confirmed by the owner): work is done at the
// customer's place, trained and background-checked team, eco-friendly products
// safe for kids and pets, same-day slots, free quote on WhatsApp. Do not add
// prices, guarantees, response times, pickup or drying times.
import type { Faq } from "@/lib/locationsData";

// Paragraphs may hold internal links written as [text](/path).
// fig: a real job photo shown beside the chapter (keys of FRAMES in lib/media.ts).
export interface AreaSection { h2: string; paras: string[]; fig?: "strip" | "office" | "rug" }

export interface Area {
  slug: string;
  parent: string; // slug of the emirate in lib/locationsData.ts
  name: string;
  altNames?: string[]; // other spellings people search for
  title: string; // <title>, max 60 characters
  metaDesc: string; // max 155 characters
  h1: string;
  intro: string;
  chips: string[]; // short tags under the hero buttons
  highlights: { t: string; d: string }[];
  // Links shown above the chapters, after the link back to the emirate page.
  seeAlso: { before: string; label: string; href: string }[];
  sections: AreaSection[];
  clip: "rug" | "fitted" | "office";
  pairs: ("extraction" | "shampoo" | "spot" | "deep")[];
  nearby: string[];
  faqs: Faq[];
  updated: string; // YYYY-MM-DD, for the sitemap
}

export const AREAS: Area[] = [
  {
    slug: "mussafah",
    parent: "abu-dhabi",
    name: "Mussafah",
    altNames: ["Musaffah"],
    title: "Carpet Cleaning Mussafah, Abu Dhabi | Homes & Offices",
    metaDesc: "Carpet, rug and sofa cleaning in Mussafah (Musaffah), Abu Dhabi: Shabiya homes, industrial-area offices and staff housing. Free quote on WhatsApp.",
    h1: "Carpet Cleaning in Mussafah, Abu Dhabi",
    intro: "Carpet, rug and sofa cleaning in Mussafah (Musaffah) — at family homes in Shabiya, offices and showrooms in the industrial area, and staff accommodation. Our trained, background-checked team comes to you and cleans on site with eco-friendly products that are safe for children and pets.",
    chips: ["Homes", "Offices & showrooms", "Staff accommodation", "Same-day slots"],
    seeAlso: [
      { before: "For offices and warehouses, see", label: "Commercial carpet cleaning", href: "/services/commercial-carpet-cleaning" },
    ],
    highlights: [
      { t: "We come to you", d: "Homes, offices, showrooms and staff housing anywhere in Mussafah. The carpet is cleaned where it lies." },
      { t: "Trained, checked team", d: "Every cleaner is trained and background-checked before they enter your home or workplace." },
      { t: "Safe for kids & pets", d: "Eco-friendly cleaning products, so families in Shabiya can use the room again with peace of mind." },
      { t: "Free quote on WhatsApp", d: "Send a photo and the rough size. Same-day slots are often available." },
    ],
    sections: [
      {
        h2: "Carpet cleaning for Mussafah homes",
        fig: "strip",
        paras: [
          "Mussafah is not only an industrial area. Shabiya — the residential sectors ME-9 to ME-12 — is full of family villas and apartment buildings, and that is where most of our home carpet cleaning in Mussafah happens. Typical jobs are fitted carpet in the bedrooms, a large rug in the living room and a majlis with floor seating that gets used every day.",
          "Living next to an industrial zone has one clear effect on carpets: fine dust. Trucks, workshops and building sites around the M sectors send dust into the air, and it settles deep in the carpet pile where a home vacuum cannot reach. Over a few months a light carpet turns grey, the walkways darken first, and the room starts to smell stale even after it is cleaned.",
          "A deep clean fixes this. We vacuum out the loose dust first, [treat stains and spots](/services/stain-removal), then shampoo the carpet and extract the dirty water with our machines, so the dust comes out instead of being pushed further down. Rugs get the same care, and we can clean the sofa or majlis cushions in the same visit.",
        ],
      },
      {
        h2: "Office, showroom and warehouse carpets in the industrial area",
        fig: "office",
        paras: [
          "Offices in the Mussafah industrial area have a harder life than offices in the city. Staff and customers walk in from workshops, garages and loading bays, and they bring oil, grease and grit with them. Carpet tiles near the entrance and in the corridors wear out first, and coffee and food spills add to it in meeting rooms and staff rooms.",
          "We clean office, showroom and warehouse-office carpets on site. Tell us your working hours and which rooms matter most, and we agree a visit time that keeps the work out of your way. For larger premises see our [commercial carpet cleaning service](/services/commercial-carpet-cleaning).",
        ],
      },
      {
        h2: "Staff accommodation and shared rooms",
        paras: [
          "Mussafah has many staff accommodation buildings. Where several people share a room, carpets and sofas are used all day and night, and dust, sweat and food quickly turn into odours. Simply spraying air freshener does not help for long.",
          "For shared accommodation we combine deep shampoo cleaning with [odour treatment](/services/odor-removal), working room by room so the building stays in use. Companies managing several buildings can send us the list of rooms on WhatsApp for one quote.",
        ],
      },
      {
        h2: "Rug and sofa cleaning in Mussafah",
        fig: "rug",
        paras: [
          "Many Mussafah homes have wool, Persian-style or machine-made rugs that need gentler handling than fitted carpet. We check the fibre and colours before cleaning and choose the method to suit the rug — more on our [rug cleaning](/services/rug-cleaning) page. Fabric sofas, dining chairs and majlis seating are cleaned on site with upholstery tools (see [sofa and upholstery cleaning](/services/sofa-upholstery-cleaning)).",
        ],
      },
    ],
    clip: "office",
    pairs: ["deep", "shampoo", "spot"],
    nearby: ["Mohamed Bin Zayed City", "Khalifa City", "Shakhbout City", "Al Shamkha", "Baniyas", "Abu Dhabi City"],
    faqs: [
      { q: "Do you offer carpet cleaning in Mussafah, Abu Dhabi?", a: "Yes. We clean carpets, rugs and sofas at homes in Mussafah Shabiya, at offices, showrooms and warehouse offices in the industrial area, and in staff accommodation. Our team comes to your place and cleans on site." },
      { q: "How much does carpet cleaning cost in Mussafah?", a: "It depends on the size of the carpet, its fibre and how dusty or stained it is. Send a photo and the rough size on WhatsApp and we reply with a free quote for your carpet in Mussafah." },
      { q: "Can you clean office carpets in the Mussafah industrial area?", a: "Yes. We clean office, showroom and warehouse-office carpets, including carpet tiles with oil and grease tracked in from workshops. Tell us your working hours and we agree a visit time that suits you." },
      { q: "Do you clean sofas and rugs in Mussafah as well?", a: "Yes. Rugs, fabric sofas, dining chairs and majlis seating can be cleaned in the same visit as your carpets." },
      { q: "Can I book carpet cleaning in Mussafah for the same day?", a: "Same-day slots are often available. Message us on WhatsApp with your location in Mussafah and a photo of the carpet, and we tell you the first free time." },
      { q: "Are your cleaning products safe for children and pets?", a: "Yes. We use eco-friendly cleaning products that are safe for children and pets." },
    ],
    updated: "2026-11-25",
  },
  {
    slug: "dubai-marina",
    parent: "dubai",
    name: "Dubai Marina",
    title: "Carpet Cleaning Dubai Marina | Apartments & Holiday Homes",
    metaDesc: "Carpet, rug and sofa cleaning in Dubai Marina and JBR towers: apartments, holiday homes and offices, cleaned on site. Free quote on WhatsApp.",
    h1: "Carpet Cleaning in Dubai Marina",
    intro: "Carpet, rug and sofa cleaning in Dubai Marina and JBR — tower apartments, furnished holiday homes and offices. Our trained, background-checked team comes up to your flat and cleans on site with eco-friendly products that are safe for children and pets.",
    chips: ["Tower apartments", "Holiday homes", "Move-out cleaning", "Same-day slots"],
    seeAlso: [
      { before: "For Persian, wool and viscose rugs, see", label: "Rug cleaning in Dubai", href: "/services/rug-cleaning" },
    ],
    highlights: [
      { t: "We come up to you", d: "Our machines are portable, so the carpet is cleaned in your flat — nothing has to leave the building." },
      { t: "Trained, checked team", d: "Every cleaner is trained and background-checked before they enter your home." },
      { t: "Safe for kids & pets", d: "Eco-friendly cleaning products that are safe for children and pets." },
      { t: "Free quote on WhatsApp", d: "Send a photo and the rough size. Same-day slots are often available." },
    ],
    sections: [
      {
        h2: "Carpet cleaning in Marina tower apartments",
        fig: "strip",
        paras: [
          "Most homes in Dubai Marina and JBR are apartments high above the canal, and that shapes how carpets get dirty. Windows stay closed for most of the year, the AC recirculates the same air, and cooking smells and dust settle into the carpet instead of leaving the flat. Fine sand still gets in through balcony doors and on shoes, and the sea air adds humidity, which keeps odours in the fibres.",
          "Marina layouts are compact, so sofas, beds and rugs sit in the same place on the carpet all year. The walkway from the door to the kitchen and balcony goes grey first, and the carpet under the furniture hides dust you only see when the room is moved around.",
          "We vacuum out the loose sand first, [treat stains and spots](/services/stain-removal), then deep shampoo the carpet and rinse it with our extraction machine so the dirt and most of the water come out together. Bedrooms with fitted carpet and a living-room rug can be done in the same visit.",
        ],
      },
      {
        h2: "Getting into your building",
        paras: [
          "Marina towers have their own rules for contractors: which entrance and service lift to use, where the van can park, and in some buildings an access permit from the building management. When you book, tell us the building name and anything the management has asked for, and we plan the visit around it.",
          "Our machines are portable and go up in the service lift, so nothing needs to be carried out of the building. All you need to do is clear small items and breakables off the carpet before the team arrives.",
        ],
      },
      {
        h2: "Holiday homes and rented apartments",
        paras: [
          "Dubai Marina and JBR have a large number of furnished holiday homes and rented flats. Carpets and sofas in these homes get far more use than in a family home, and every new guest notices a stain or a smell. Between bookings, a deep clean of the carpets and sofa keeps the flat looking the way it does in the photos.",
          "Tenants moving out often need the carpets cleaned before handing the keys back, and landlords before new tenants move in. For smoke, pet or damp smells we add [odour treatment](/services/odor-removal). Property managers with several units can send the list on WhatsApp for one quote.",
        ],
      },
      {
        h2: "Rugs and sofas in Dubai Marina",
        fig: "rug",
        paras: [
          "Marina apartments often have a statement rug in the living room — wool, Persian-style or viscose, which looks like silk. Viscose rugs lose their shine and can turn brown if they get too wet, so we check the fibre and colours before cleaning and choose a gentle method for each rug. More on our [rug cleaning](/services/rug-cleaning) page.",
          "Fabric sofas, dining chairs and cushions are cleaned on site in the same visit (see [sofa and upholstery cleaning](/services/sofa-upholstery-cleaning)).",
        ],
      },
    ],
    clip: "fitted",
    pairs: ["extraction", "spot", "shampoo"],
    nearby: ["JBR", "JLT", "Dubai Media City", "Dubai Internet City", "Al Sufouh", "Palm Jumeirah", "Bluewaters Island", "Emirates Hills"],
    faqs: [
      { q: "Do you offer carpet cleaning in Dubai Marina?", a: "Yes. We clean carpets, rugs and sofas in Dubai Marina and JBR apartments, holiday homes and offices. Our team comes up to your flat and cleans on site." },
      { q: "How much does carpet cleaning cost in Dubai Marina?", a: "It depends on the size of the carpet, its fibre and how dirty or stained it is. Send a photo and the rough size on WhatsApp and we reply with a free quote for your flat in Dubai Marina." },
      { q: "Can your team get into my Marina tower?", a: "Tell us the building name when you book, along with any rules the management has for contractors, such as the service lift, parking or an access permit. We plan the visit around them. Our machines are portable and go up in the service lift." },
      { q: "Do you clean holiday homes and rented flats between guests or tenants?", a: "Yes. We deep clean carpets and sofas in holiday homes between bookings, and in rented flats before move-out or move-in. Property managers can send the list of units on WhatsApp for one quote." },
      { q: "Can I book carpet cleaning in Dubai Marina for the same day?", a: "Same-day slots are often available. Message us on WhatsApp with your building name and a photo of the carpet, and we tell you the first free time." },
      { q: "Can you clean a viscose rug?", a: "Yes, with care. Viscose (art silk) rugs lose their shine and can turn brown if they get too wet, so we check the fibre first and use a gentle method that suits the rug." },
    ],
    updated: "2026-11-26",
  },
];

export function getArea(parent: string, slug: string): Area | undefined {
  return AREAS.find((a) => a.parent === parent && a.slug === slug);
}

export function areasFor(parent: string): Area[] {
  return AREAS.filter((a) => a.parent === parent);
}

export function areaPath(a: Area): string {
  return `/locations/${a.parent}/${a.slug}`;
}
