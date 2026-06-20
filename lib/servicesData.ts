// Single source of truth for services — used by the /services hub, the
// dynamic /services/[slug] pages, the homepage grid, footer and sitemap.
// Server-safe (no "use client").

export interface Feat { t: string; d: string; }

export interface ServiceDetail {
  num: string;
  slug: string;
  name: string;   // short label
  h2: string;     // page H1 / heading
  icon: string;   // Icons.tsx key
  kw: string;     // comma-ready keywords (· separated)
  img: string;    // hero/preview image
  intro: string;
  body: string[];
  feat: Feat[];
}

export const SERVICES: ServiceDetail[] = [
  {
    num: "01", slug: "carpet-cleaning", name: "Carpet Deep Shampoo", h2: "Carpet Deep Shampoo Cleaning Dubai & UAE",
    icon: "carpet", kw: "carpet deep shampoo cleaning · best carpet shampooing services Dubai · professional carpet cleaning UAE",
    img: "/images/gallery/action-1.jpeg",
    intro: "Our signature carpet deep shampoo cleaning process penetrates deep into the pile to break down compacted grime, dust mites, and allergens — essential for maintaining indoor air quality in the UAE.",
    body: [
      "Our carpet deep shampoo cleaning process penetrates deep into the pile to break down compacted grime, dust mites, and allergens. This service is essential for maintaining indoor air quality in the UAE, where fine sand particles constantly settle into indoor fabrics. We lift the pile, revive fading colors, and leave your carpets feeling soft and thoroughly sanitized.",
      "Our advanced extraction technology extracts 90% of water instantly during the rinse cycle. Thanks to our high-velocity moisture extraction, your carpets are fully dry, fresh, and ready to walk on in just 2 to 4 hours. We exclusively utilize non-toxic, biodegradable, child-safe, and pet-safe deep cleaning shampoos.",
    ],
    feat: [
      { t: "90% Water Extraction", d: "Heavy-duty industrial machinery extracts moisture instantly during the rinse cycle." },
      { t: "2-4 Hours Dry Time", d: "High-velocity moisture extraction means carpets are ready to walk on rapidly." },
      { t: "Eco-Friendly Products", d: "Non-toxic, biodegradable, child-safe and pet-safe deep cleaning shampoos." },
      { t: "All Fibre Types", d: "Wool, synthetic, shaggy, deep pile — every carpet type handled safely." },
    ],
  },
  {
    num: "02", slug: "stain-removal", name: "Stain Removal", h2: "Professional Carpet Stain Removal UAE",
    icon: "spray", kw: "stubborn carpet stain removal UAE · carpet stain removing · coffee tea stain removal carpet",
    img: "/images/gallery/before-after-4.jpeg",
    intro: "Don't let accidental spills ruin your expensive flooring. We specialize in stubborn carpet stain removal UAE, successfully treating difficult spots such as coffee, tea, Karak, ink, grease, cosmetics, and pet messes.",
    body: [
      "Our technicians analyze the fabric type first, applying specialized, color-safe pre-treatment solutions to dissolve the stain without damaging the delicate underlying fibers. We treat each stain individually with enzyme-based and pH-neutral solutions tailored to the specific type of spill.",
      "From accidental coffee and Karak spills to ink, grease, cosmetics, and pet messes — our stubborn carpet stain removal UAE service restores your carpet to its original condition. Combined with our deep shampoo process, stains are lifted from the root, not just masked.",
    ],
    feat: [
      { t: "Fabric-First Analysis", d: "Technicians assess your carpet's fibre type before choosing the treatment." },
      { t: "Color-Safe Solutions", d: "Pre-treatment dissolves stains without damaging delicate underlying fibers." },
      { t: "All Stain Types", d: "Coffee, Karak, ink, grease, cosmetics, pet messes and more." },
      { t: "Root-Level Removal", d: "Stains lifted from the base of the fibre, not just surface-masked." },
    ],
  },
  {
    num: "03", slug: "odor-removal", name: "Odor Removal", h2: "Deep Carpet Odor Removing Services Dubai",
    icon: "wind", kw: "carpet odor removing · carpet smell removal Dubai · musty carpet cleaning UAE",
    img: "/images/gallery/before-after-5.jpeg",
    intro: "High indoor humidity combined with continuous AC usage can trap sour, musty smells inside your floor coverings. Our targeted carpet odor removing service neutralizes odor-causing bacteria at a molecular level.",
    body: [
      "Our carpet odor removing service does not just mask unpleasant scents with artificial perfumes. We use advanced antimicrobial and enzyme-based formulas that neutralize odor-causing bacteria at a molecular level, completely eliminating pet odors and staleness.",
      "In the UAE climate, high indoor humidity combined with continuous AC usage creates the perfect conditions for trapped odors. Our process treats the root cause — not the symptom — leaving your carpets genuinely fresh and clean-smelling.",
    ],
    feat: [
      { t: "Molecular Neutralization", d: "Enzyme-based formulas destroy odor-causing bacteria at the source." },
      { t: "No Artificial Masking", d: "We eliminate odors, not cover them with perfume." },
      { t: "Pet Odor Specialist", d: "Completely removes pet urine and animal odors from carpet fibres." },
      { t: "Anti-Microbial Treatment", d: "Prevents odor bacteria from returning after cleaning." },
    ],
  },
  {
    num: "04", slug: "rug-cleaning", name: "Specialized Rug Care", h2: "Specialized Rug Cleaning by Fabric Type — Dubai",
    icon: "rug", kw: "Persian rug cleaning Dubai · wool carpet cleaning · shaggy rug cleaning UAE · oriental rug care",
    img: "/images/gallery/before-after-7.jpeg",
    intro: "Different weaves require precise care. We are fully equipped to handle a wide range of specialized fabrics and rug styles safely — from antique Persian to modern synthetic.",
    body: [
      "Persian and Oriental Rugs: Antique and handmade treasures require a low-moisture, pH-neutral hand wash approach to prevent delicate vegetable dyes from bleeding. Wool Carpets: Natural wool fibers naturally trap oils and moisture — we use low-temperature extraction to prevent shrinkage or fiber distortion.",
      "Shaggy and Deep Pile Rugs: Long fibers hold onto incredible amounts of hidden sand and pet hair. Our deep agitation process pulls debris out from the absolute base of the rug. Synthetic Carpets (Nylon and Polyester): Commonly found in UAE offices and modern apartments, these resilient fibers handle high-pressure deep shampoo extraction exceptionally well for maximum stain removal.",
    ],
    feat: [
      { t: "Persian & Oriental", d: "Low-moisture, pH-neutral hand wash protects vegetable dyes from bleeding." },
      { t: "Wool Carpets", d: "Low-temperature extraction prevents shrinkage or fiber distortion." },
      { t: "Shaggy & Deep Pile", d: "Deep agitation pulls sand and pet hair from the base of the rug." },
      { t: "Synthetic (Nylon/Poly)", d: "High-pressure deep shampoo extraction for maximum stain removal." },
    ],
  },
  {
    num: "05", slug: "commercial-carpet-cleaning", name: "Commercial Cleaning", h2: "Commercial & Office Carpet Cleaning UAE",
    icon: "office", kw: "office carpet cleaning service UAE · commercial carpet cleaning · residential and commercial carpet cleaning",
    img: "/images/gallery/action-2.jpeg",
    intro: "Designed for high-traffic environments including corporate offices, hotel corridors, retail showrooms, clinics, and nurseries. We offer flexible, after-hours or weekend scheduling to ensure zero business downtime.",
    body: [
      "Commercial Carpet Solutions: Designed for high-traffic environments including corporate offices, hotel corridors, retail showrooms, clinics, and nurseries. We offer flexible, after-hours or weekend scheduling to ensure zero business downtime, leaving your workspace pristine by Monday morning.",
      "Residential Carpet Care: Dedicated to keeping your home safe and hygienic for toddlers, children, and pets. We clean everything from bedroom carpets to large living room statement rugs. Our residential and commercial carpet cleaning service covers all seven emirates with rapid 2-4 hours dry time.",
    ],
    feat: [
      { t: "Zero Downtime", d: "After-hours and weekend scheduling — workspace pristine by Monday." },
      { t: "All Property Types", d: "Offices, hotels, clinics, retail showrooms, nurseries, villas." },
      { t: "Residential Care", d: "Safe and hygienic cleaning for homes with children and pets." },
      { t: "Nationwide Coverage", d: "Available across all seven Emirates of the UAE." },
    ],
  },
  {
    num: "06", slug: "sofa-upholstery-cleaning", name: "Sofa & Upholstery", h2: "Sofa & Upholstery Cleaning Dubai",
    icon: "sofa", kw: "sofa cleaning Dubai · upholstery cleaning UAE · furniture deep cleaning",
    img: "/images/gallery/before-after-6.jpeg",
    intro: "Gentle yet effective deep cleaning for sofas, armchairs, majlis seating, cushions and dining chairs — removing stains, dust and odors for a fresh, sanitized living space.",
    body: [
      "We use fabric-specific methods: low-moisture extraction for delicate upholstery, steam sanitization for synthetic fabrics, and conditioning treatment for leather. Every job removes body oils, food spills, dust and the allergens that build up in soft furnishings.",
      "Sofa and upholstery cleaning is available on-site at your home or office, with same-day appointments across Dubai, Sharjah and Ajman. Combined with our carpet cleaning, it's a full home refresh.",
    ],
    feat: [
      { t: "Fabric & Leather Safe", d: "Tailored method for every material — no shrinkage or fading." },
      { t: "Stain & Odor Removal", d: "Lifts food, drink, body-oil and pet marks at the source." },
      { t: "Deep Sanitization", d: "Removes dust mites and bacteria from cushions and seams." },
      { t: "On-Site, Same-Day", d: "We clean in place — ready to use within hours." },
    ],
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
