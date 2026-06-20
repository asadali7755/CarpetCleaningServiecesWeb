export const BRAND = "Alhaya Cleaning Services";
export const SITE_URL = "https://www.carpetcleaningdubai.com";
export const EMAIL = "Madinatalhaya@gmail.com";

export const PHONE_DISPLAY = "055 127 5545";
export const PHONE_TEL = "+971551275545";
export const WHATSAPP = "971551275545";
export const WHATSAPP_MSG =
  "Hello, I need carpet cleaning services in Dubai.";

export const HOURS = "Daily 8:00 AM – 10:00 PM";

export interface Emirate {
  slug: string;
  name: string;
  ar: string;
  priority: boolean; // true = primary ranking target (Dubai, Sharjah, Ajman)
}

// Order matters: primary targets first for nav + internal-link prominence.
export const EMIRATES: Emirate[] = [
  { slug: "dubai", name: "Dubai", ar: "دبي", priority: true },
  { slug: "sharjah", name: "Sharjah", ar: "الشارقة", priority: true },
  { slug: "ajman", name: "Ajman", ar: "عجمان", priority: true },
  { slug: "abu-dhabi", name: "Abu Dhabi", ar: "أبوظبي", priority: false },
  { slug: "ras-al-khaimah", name: "Ras Al Khaimah", ar: "رأس الخيمة", priority: false },
  { slug: "umm-al-quwain", name: "Umm Al Quwain", ar: "أم القيوين", priority: false },
  { slug: "fujairah", name: "Fujairah", ar: "الفجيرة", priority: false },
];

export const EMIRATE_NAMES = EMIRATES.map((e) => e.name);

export function waHref(msg: string = WHATSAPP_MSG): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}
