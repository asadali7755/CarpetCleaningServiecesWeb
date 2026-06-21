// Single source of truth for services — used by the /services hub, the
// dynamic /services/[slug] pages, the homepage grid, footer and sitemap.
// Server-safe (no "use client").

export interface Feat { t: string; d: string; }
export interface Faq { q: string; a: string; }

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
  faqs: Faq[];
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
      "The UAE desert climate presents unique challenges for carpet care. Fine sand, carried indoors by wind and foot traffic, works its way into the base of carpet fibres where regular vacuuming cannot reach. Over time, this abrasive grit wears down individual fibres, dulling colours and weakening the weave. Our deep shampoo process uses controlled agitation at the correct temperature for your carpet type to loosen and suspend these particles before our extraction machinery removes them entirely.",
      "We begin every job with a thorough pre-inspection. Our technicians assess the fibre type, dye stability, existing damage, and the specific stains or problem areas you want addressed. This step determines the exact shampoo concentration, water temperature, and dwell time for your carpet. A one-size-fits-all approach risks shrinkage on wool, colour bleeding on silk blends, or incomplete cleaning on high-traffic synthetic surfaces — so we tailor the method to every carpet.",
      "Once the assessment is complete, we pre-treat high-traffic zones and visible stains with targeted solutions before the main shampoo pass. The deep shampoo is applied with rotary or oscillating machines that work the cleaning agent into every layer of the pile. After sufficient dwell time, our industrial extraction equipment rinses and vacuums simultaneously, pulling out dissolved dirt along with the vast majority of moisture.",
      "After extraction, we perform a post-clean inspection under bright light to confirm stain removal and pile uniformity. If any spots need additional treatment, we address them immediately. The result is a carpet that looks refreshed, feels softer underfoot, and is free from the allergens and bacteria that accumulate between professional cleans.",
      "We serve residential and commercial clients across all seven Emirates. Whether you need a single bedroom carpet cleaned in a Dubai Marina apartment or an entire floor of office carpeting in Business Bay, our teams arrive with the same equipment and follow the same process. All pricing is quoted upfront — no hidden charges, no surprise fees after the job is done.",
    ],
    feat: [
      { t: "90% Water Extraction", d: "Heavy-duty industrial machinery extracts moisture instantly during the rinse cycle." },
      { t: "2-4 Hours Dry Time", d: "High-velocity moisture extraction means carpets are ready to walk on rapidly." },
      { t: "Eco-Friendly Products", d: "Non-toxic, biodegradable, child-safe and pet-safe deep cleaning shampoos." },
      { t: "All Fibre Types", d: "Wool, synthetic, shaggy, deep pile — every carpet type handled safely." },
    ],
    faqs: [
      { q: "How long does carpet deep shampoo cleaning take?", a: "A standard room (up to 20 sqm) typically takes 30 to 45 minutes for the cleaning process itself. Drying takes an additional 2 to 4 hours depending on ventilation and AC settings. Larger areas or heavily soiled carpets may require more time." },
      { q: "Is carpet deep shampoo cleaning safe for children and pets?", a: "Yes. All of our deep cleaning shampoos are non-toxic, biodegradable, and free from harsh chemicals. They are completely safe for children and pets once the carpet is dry, which usually takes 2 to 4 hours." },
      { q: "How often should I get my carpet professionally cleaned in Dubai?", a: "For homes in the UAE, we recommend professional deep shampoo cleaning every 3 to 6 months. High-traffic areas, homes with pets, or carpets exposed to heavy sand ingress may benefit from quarterly cleaning. Office carpets in busy environments should be cleaned every 2 to 3 months." },
      { q: "Can you clean wall-to-wall fitted carpets?", a: "Yes, we clean wall-to-wall fitted carpets on-site using our portable extraction equipment. The process is the same as for loose carpets — pre-treatment, deep shampoo, extraction, and drying — all done in your home or office without removing the carpet." },
      { q: "Do I need to move furniture before the cleaning?", a: "We recommend clearing small items from the carpeted area. Our technicians can work around larger furniture if needed, though moving it allows for a more thorough clean. We do not charge extra for working around furniture." },
      { q: "What is the difference between carpet shampooing and steam cleaning?", a: "Carpet shampooing uses a cleaning solution agitated into the fibres followed by extraction, which is effective for heavy soiling and stain removal. Steam cleaning (hot water extraction) uses heated water under pressure. We use a combination of both techniques depending on the carpet type and condition for the best results." },
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
      "Stain removal success depends on acting correctly from the start. Many homeowners in the UAE unknowingly set stains permanently by scrubbing with hot water or applying bleach-based household cleaners. Once a stain is heat-set or chemically altered, even professional treatment becomes difficult. Our advice: blot the spill immediately with a clean white cloth — never rub — and call us as soon as possible. Fresh stains have the highest removal rate.",
      "Different stain types require different chemistry. Tannin-based stains from coffee, tea, and Karak respond to oxidizing agents. Protein-based stains from food, blood, or pet accidents need enzyme solutions that break down organic matter. Oil and grease stains require solvent-based pre-sprays. Ink and dye stains often need reducing agents applied carefully to avoid spreading. Our technicians carry a full range of treatment solutions and select the right one based on the stain composition and carpet fibre.",
      "For older, set-in stains that have been present for weeks or months, we use a multi-step process: initial pre-spray to soften and re-activate the stain, followed by agitation, dwell time, and extraction. Stubborn marks may require a second treatment cycle. We are honest about outcomes — some very old or previously treated stains may lighten significantly but not disappear completely. We will tell you what to expect before we begin.",
      "Our stain removal service is available as a standalone treatment or combined with our full carpet deep shampoo cleaning for a complete refresh. Combining both services is the most cost-effective approach when your carpet has multiple stained areas alongside general soiling.",
    ],
    feat: [
      { t: "Fabric-First Analysis", d: "Technicians assess your carpet's fibre type before choosing the treatment." },
      { t: "Color-Safe Solutions", d: "Pre-treatment dissolves stains without damaging delicate underlying fibers." },
      { t: "All Stain Types", d: "Coffee, Karak, ink, grease, cosmetics, pet messes and more." },
      { t: "Root-Level Removal", d: "Stains lifted from the base of the fibre, not just surface-masked." },
    ],
    faqs: [
      { q: "Can you remove old, set-in carpet stains?", a: "In most cases, yes. Old stains that have been present for weeks or months can be significantly reduced or fully removed using our multi-step treatment process. However, some very old stains or those previously treated with household chemicals may lighten but not disappear entirely. We assess each stain before starting and give you an honest expectation." },
      { q: "What types of carpet stains can you treat?", a: "We treat all common stain types found in UAE homes: coffee, tea, Karak chai, red wine, ink, grease, cosmetics, food spills, blood, pet urine, pet vomit, henna, paint, and mud. Each stain type requires a different treatment approach, which our technicians select based on the stain composition." },
      { q: "Will stain removal damage my carpet's colour?", a: "No. We use colour-safe, pH-neutral solutions and always test on a small hidden area first. Our technicians are trained to match the treatment to your carpet's dye type, whether it is a synthetic dye, vegetable dye, or natural colour. We never use bleach on carpets." },
      { q: "How much does carpet stain removal cost?", a: "Pricing depends on the number of stains, their size, and the type of carpet fibre. We provide a fixed quote before starting — no hidden charges. For a few spot stains, it is often more economical to combine stain treatment with a full carpet deep shampoo cleaning." },
      { q: "Should I try to clean a stain myself before calling you?", a: "We recommend blotting the spill immediately with a clean white cloth to absorb as much liquid as possible. Do not rub or scrub, as this pushes the stain deeper. Avoid using household bleach, vinegar, or hot water on the stain, as these can set it permanently. Call us as soon as possible — fresh stains have the highest success rate." },
    ],
  },
  {
    num: "03", slug: "odor-removal", name: "Odor Removal", h2: "Deep Carpet Odor Removing Services Dubai",
    icon: "wind", kw: "carpet odor removing · carpet smell removal Dubai · musty carpet cleaning UAE",
    img: "/images/gallery/before-after-5.jpeg",
    intro: "High indoor humidity combined with continuous AC usage can trap sour, musty smells inside your floor coverings. Our targeted carpet odor removing service neutralizes odor-causing bacteria at a molecular level.",
    body: [
      "Our carpet odor removing service does not just mask unpleasant scents with artificial perfumes. We use advanced antimicrobial and enzyme-based formulas that neutralize odor-causing bacteria at a molecular level, completely eliminating pet odors and staleness.",
      "In the UAE climate, high indoor humidity combined with continuous AC usage creates the perfect conditions for trapped odors. Closed-environment living — where windows rarely open due to heat — means that smells from cooking, pets, and daily life accumulate in soft furnishings faster than in temperate climates. Our process treats the root cause, not the symptom, leaving your carpets genuinely fresh and clean-smelling.",
      "Pet odors are among the most persistent carpet problems we encounter in Dubai homes. Dog and cat urine penetrates through the carpet pile into the backing and sometimes into the underpad or subfloor beneath. Surface cleaning removes the visible stain but leaves the odor source untouched. Our treatment uses enzyme-based solutions that break down uric acid crystals — the actual source of the persistent smell — rather than covering them with fragrance.",
      "Musty and mildew odors are common in UAE apartments where carpets are laid over concrete in buildings with high ambient humidity. When AC condensation or minor water leaks introduce moisture beneath the carpet, bacterial growth produces that characteristic sour smell. We treat these cases with antimicrobial solutions applied to the carpet base, combined with thorough extraction to remove as much moisture as possible. In severe cases, we may recommend lifting the carpet to treat the underside directly.",
      "Smoke odor, cooking smells, and general staleness respond well to our deep shampoo and extraction process combined with a final antimicrobial rinse. The extraction removes the particles carrying the odor, while the antimicrobial treatment prevents bacterial regrowth. After treatment, carpets smell clean — not perfumed, not chemically treated — just genuinely clean.",
      "We recommend combining odor removal with our deep shampoo cleaning service for the most complete result. Odor-causing bacteria are embedded in the same grime and organic matter that our deep cleaning process removes. Treating both together is more effective and more economical than addressing them separately.",
    ],
    feat: [
      { t: "Molecular Neutralization", d: "Enzyme-based formulas destroy odor-causing bacteria at the source." },
      { t: "No Artificial Masking", d: "We eliminate odors, not cover them with perfume." },
      { t: "Pet Odor Specialist", d: "Completely removes pet urine and animal odors from carpet fibres." },
      { t: "Anti-Microbial Treatment", d: "Prevents odor bacteria from returning after cleaning." },
    ],
    faqs: [
      { q: "Can you remove pet urine smell from carpet?", a: "Yes. Pet urine odor is caused by uric acid crystals that remain in the carpet fibre and backing even after the visible stain is cleaned. Our enzyme-based treatment breaks down these crystals at a molecular level, eliminating the odor permanently rather than masking it with fragrance." },
      { q: "Why does my carpet smell worse after I clean it myself?", a: "This commonly happens when too much water is used without proper extraction. The moisture reactivates bacteria and organic matter trapped in the carpet backing, producing a strong musty smell. It can also occur when cleaning solutions are not fully rinsed out. Our industrial extraction equipment removes the moisture that causes this problem." },
      { q: "How long does carpet odor removal take?", a: "The treatment itself takes 30 to 60 minutes depending on the area size and severity. Drying takes 2 to 4 hours. For severe pet odor or mildew cases that require multiple treatment cycles, we may need 60 to 90 minutes of treatment time." },
      { q: "Is the odor removal treatment safe for my family?", a: "Completely safe. Our antimicrobial and enzyme-based solutions are non-toxic, biodegradable, and safe for children and pets once the carpet is dry. We do not use harsh chemicals, ammonia, or strong solvents." },
      { q: "Will the smell come back after treatment?", a: "If the source of the odor is fully treated, no. Our enzyme solutions break down the organic matter causing the smell, and our antimicrobial treatment prevents bacterial regrowth. However, if the source is ongoing — such as a pet that continues to urinate on the carpet — the odor will return and the area will need retreatment." },
    ],
  },
  {
    num: "04", slug: "rug-cleaning", name: "Specialized Rug Care", h2: "Specialized Rug Cleaning by Fabric Type — Dubai",
    icon: "rug", kw: "Persian rug cleaning Dubai · wool carpet cleaning · shaggy rug cleaning UAE · oriental rug care",
    img: "/images/gallery/before-after-7.jpeg",
    intro: "Different weaves require precise care. We are fully equipped to handle a wide range of specialized fabrics and rug styles safely — from antique Persian to modern synthetic.",
    body: [
      "Persian and Oriental Rugs: Antique and handmade treasures require a low-moisture, pH-neutral hand wash approach to prevent delicate vegetable dyes from bleeding. We inspect the fringe, selvedge edges, and backing for any existing damage before cleaning. Hand-knotted rugs are cleaned flat, never folded or agitated aggressively, to protect the weave structure and preserve the rug's value.",
      "Wool Carpets: Natural wool fibers naturally trap oils and moisture, and they are sensitive to both temperature and pH. We use low-temperature extraction combined with wool-safe, pH-neutral cleaning agents to prevent shrinkage, felting, or fiber distortion. Wool requires careful drying — too much heat causes permanent damage, so we control airflow and temperature throughout the process.",
      "Shaggy and Deep Pile Rugs: Long fibers hold onto incredible amounts of hidden sand, dust, and pet hair that regular vacuuming leaves behind. Our deep agitation process uses specialized tools that reach the absolute base of the rug, pulling debris out from beneath the long pile without tangling or damaging the fibers. These rugs often look dramatically different after cleaning because of how much hidden dirt they accumulate.",
      "Synthetic Carpets (Nylon and Polyester): Commonly found in UAE offices, hotel rooms, and modern apartments, these resilient fibers handle more aggressive cleaning methods well. We use high-pressure deep shampoo extraction at higher temperatures than we would for natural fibres, achieving maximum stain and soil removal. Synthetic carpets typically dry faster than natural fibres and respond well to our rapid 2-4 hour dry time process.",
      "Silk and Silk-Blend Rugs: Silk is the most delicate fibre we work with. It requires very low moisture, cold water, and extremely gentle agitation. We clean silk rugs by hand using specialized silk-safe solutions and dry them flat in controlled conditions. Colour testing is mandatory before any cleaning begins on silk, as some dyes are more reactive than others.",
      "Regardless of the rug type, every job begins with a detailed inspection and fibre identification. We photograph existing damage, test dye fastness on a hidden area, and discuss the cleaning plan with you before we start. This transparency ensures you know exactly what to expect and that your rug receives the correct treatment for its specific material.",
    ],
    feat: [
      { t: "Persian & Oriental", d: "Low-moisture, pH-neutral hand wash protects vegetable dyes from bleeding." },
      { t: "Wool Carpets", d: "Low-temperature extraction prevents shrinkage or fiber distortion." },
      { t: "Shaggy & Deep Pile", d: "Deep agitation pulls sand and pet hair from the base of the rug." },
      { t: "Synthetic (Nylon/Poly)", d: "High-pressure deep shampoo extraction for maximum stain removal." },
    ],
    faqs: [
      { q: "Can you clean antique Persian rugs safely?", a: "Yes. We use a low-moisture, pH-neutral hand wash technique specifically designed for handmade rugs with vegetable dyes. We inspect the fringe, selvedge, and backing for existing damage before cleaning, and we test dye fastness on a hidden area before applying any solution. Our process is gentle enough for antique pieces." },
      { q: "How do you clean a shaggy rug without damaging the pile?", a: "We use specialized tools designed for deep pile that reach the base of the rug without tangling the long fibres. The process involves careful agitation from the base up, loosening trapped sand and dirt, followed by extraction. The result is usually dramatic because shaggy rugs hide a surprising amount of debris." },
      { q: "Do you offer rug pickup and delivery?", a: "Yes. For rugs that benefit from off-site cleaning — such as heavily soiled rugs, delicate handmade pieces, or rugs needing extended drying time — we offer free pickup and delivery across Dubai, Sharjah, and Ajman. We wrap and transport your rug carefully to our cleaning facility and return it cleaned, dried, and ready to use." },
      { q: "How long does rug cleaning take?", a: "On-site cleaning for a standard rug takes 30 to 60 minutes plus 2 to 4 hours drying time. Off-site cleaning for delicate or heavily soiled rugs typically takes 3 to 5 days, including proper drying in controlled conditions. We give you an estimated timeline when we assess your rug." },
      { q: "Can you repair rug fringe or edges during cleaning?", a: "Minor fringe combing and straightening is included with every rug cleaning. For significant fringe damage, reweaving, or edge repair, we can recommend specialized rug repair services. We document any existing damage before cleaning so you have a clear record." },
    ],
  },
  {
    num: "05", slug: "commercial-carpet-cleaning", name: "Commercial Cleaning", h2: "Commercial & Office Carpet Cleaning UAE",
    icon: "office", kw: "office carpet cleaning service UAE · commercial carpet cleaning · residential and commercial carpet cleaning",
    img: "/images/gallery/action-2.jpeg",
    intro: "Designed for high-traffic environments including corporate offices, hotel corridors, retail showrooms, clinics, and nurseries. We offer flexible, after-hours or weekend scheduling to ensure zero business downtime.",
    body: [
      "Commercial carpets face a level of wear that residential carpets simply do not experience. Hundreds of shoes crossing the same paths daily grind sand and grit into the fibre base, creating visible traffic lanes and accelerating carpet aging. Our commercial carpet cleaning service is designed to reverse this damage and extend the useful life of your office or commercial carpeting.",
      "We understand that business operations cannot stop for carpet cleaning. That is why we offer flexible scheduling: after-hours cleaning (typically starting at 6 PM or later), weekend appointments, and phased zone-by-zone cleaning for large offices that need to maintain partial access. With our rapid 2-4 hour dry time, carpets cleaned on Friday evening are fully dry and ready for foot traffic by Saturday morning.",
      "Office buildings, hotels, and retail spaces in the UAE deal with unique challenges. Fine desert sand tracked in by visitors is highly abrasive and accumulates rapidly in entryway carpets. Air conditioning systems circulate dust that settles into carpet fibres. Coffee and food spills in break rooms and meeting areas create stain patterns. We address all of these with a combination of pre-treatment, deep shampoo extraction, and targeted spot treatment.",
      "For businesses with ongoing carpet maintenance needs, we provide regular service agreements. Monthly, bi-monthly, or quarterly cleaning schedules are available depending on your foot traffic and carpet condition. Regular maintenance is significantly more cost-effective than waiting for carpets to reach a visibly dirty state, as the accumulated grit causes permanent fibre damage that cannot be reversed.",
      "We serve a wide range of commercial environments across all seven Emirates: corporate offices and co-working spaces, hotel lobbies and guest room corridors, retail showrooms and boutiques, medical clinics and dental offices, nurseries and daycare centres, gyms and fitness studios, restaurants and cafes. Each environment has specific cleaning requirements, and our technicians adjust the process accordingly.",
      "All commercial work is quoted with a fixed price before we begin. We conduct a free site survey to assess the area, carpet type, condition, and access requirements, then provide a written quote with no hidden charges. Large-scale projects — such as hotel floor rotations or post-construction cleaning — are quoted per square metre with volume discounts.",
    ],
    feat: [
      { t: "Zero Downtime", d: "After-hours and weekend scheduling — workspace pristine by Monday." },
      { t: "All Property Types", d: "Offices, hotels, clinics, retail showrooms, nurseries, villas." },
      { t: "Residential Care", d: "Safe and hygienic cleaning for homes with children and pets." },
      { t: "Nationwide Coverage", d: "Available across all seven Emirates of the UAE." },
    ],
    faqs: [
      { q: "Can you clean our office carpets outside of business hours?", a: "Yes. We offer after-hours scheduling starting from 6 PM, weekend cleaning, and early morning slots. Our rapid 2-4 hour dry time means carpets cleaned on a Friday evening are fully dry and ready for foot traffic before the next business day." },
      { q: "How often should office carpets be professionally cleaned?", a: "For most offices, we recommend professional deep cleaning every 2 to 3 months. High-traffic areas like lobbies, corridors, and meeting rooms may need monthly cleaning. We can set up a regular maintenance schedule based on your specific foot traffic and carpet condition." },
      { q: "Do you offer carpet cleaning contracts for businesses?", a: "Yes. We provide regular service agreements with monthly, bi-monthly, or quarterly cleaning schedules. Contract clients receive priority scheduling and volume-based pricing. We conduct a free site survey to recommend the right frequency for your space." },
      { q: "Can you clean carpets in a busy office without disrupting work?", a: "Yes. For large offices that cannot shut down entirely, we offer zone-by-zone cleaning. We clean one section at a time while the rest of the office remains in use. With our rapid dry time, cleaned areas are walkable within a few hours." },
      { q: "What commercial spaces do you service?", a: "We serve corporate offices, co-working spaces, hotel lobbies and corridors, retail showrooms, medical clinics, dental offices, nurseries, gyms, fitness studios, restaurants, and cafes across all seven UAE Emirates. Each environment receives a cleaning approach tailored to its specific carpet type and usage pattern." },
    ],
  },
  {
    num: "06", slug: "sofa-upholstery-cleaning", name: "Sofa & Upholstery", h2: "Sofa & Upholstery Cleaning Dubai",
    icon: "sofa", kw: "sofa cleaning Dubai · upholstery cleaning UAE · furniture deep cleaning",
    img: "/images/gallery/before-after-6.jpeg",
    intro: "Gentle yet effective deep cleaning for sofas, armchairs, majlis seating, cushions and dining chairs — removing stains, dust and odors for a fresh, sanitized living space.",
    body: [
      "We use fabric-specific methods: low-moisture extraction for delicate upholstery, steam sanitization for synthetic fabrics, and conditioning treatment for leather. Every job removes body oils, food spills, dust and the allergens that build up in soft furnishings over months of daily use.",
      "Sofa and upholstery cleaning is available on-site at your home or office, with same-day appointments across Dubai, Sharjah and Ajman. Combined with our carpet cleaning, it is a full home refresh that covers every soft surface in your living space.",
      "UAE homes and offices present specific challenges for upholstery. Air conditioning runs continuously, circulating dust that settles into fabric pores. Body oils and sweat from warm temperatures transfer to sofa arms and headrests. Food and drink spills — especially coffee, tea, and Karak — are daily occurrences. Without regular professional cleaning, these substances build up layer by layer, eventually changing the colour and texture of the fabric.",
      "Majlis seating is a significant part of Emirati and Gulf culture, and we treat these pieces with particular care. Traditional majlis cushions are often large, densely stuffed, and upholstered in decorative fabrics that require gentle handling. We clean majlis seating on-site, applying low-moisture methods that protect embroidery, patterns, and fabric integrity while thoroughly removing the dust and body oils that accumulate from regular use.",
      "Leather sofas require a completely different approach from fabric upholstery. We clean leather with pH-balanced leather cleaning solutions that remove dirt and body oils without stripping the protective finish. After cleaning, we apply a leather conditioning treatment that restores moisture and flexibility, preventing the cracking and drying that is common in the UAE's air-conditioned indoor environments.",
      "Our upholstery cleaning process begins with a thorough vacuum to remove loose dust, crumbs, and debris from cushions, crevices, and seams. We then pre-treat any visible stains, apply the appropriate cleaning method for the fabric type, extract moisture and dissolved soil, and finish with a final inspection. The entire process for a standard three-seater sofa takes approximately 45 to 60 minutes, with the upholstery ready to use within 2 to 4 hours.",
    ],
    feat: [
      { t: "Fabric & Leather Safe", d: "Tailored method for every material — no shrinkage or fading." },
      { t: "Stain & Odor Removal", d: "Lifts food, drink, body-oil and pet marks at the source." },
      { t: "Deep Sanitization", d: "Removes dust mites and bacteria from cushions and seams." },
      { t: "On-Site, Same-Day", d: "We clean in place — ready to use within hours." },
    ],
    faqs: [
      { q: "How long does sofa cleaning take?", a: "A standard three-seater sofa takes approximately 45 to 60 minutes for the cleaning process. Drying time is typically 2 to 4 hours depending on the fabric type and ventilation. Larger sets or heavily soiled pieces may take longer." },
      { q: "Can you clean leather sofas?", a: "Yes. We use pH-balanced leather cleaning solutions that remove dirt and body oils without damaging the protective finish. After cleaning, we apply a conditioning treatment that restores moisture and prevents the cracking and drying that commonly occurs in air-conditioned environments." },
      { q: "Do you clean majlis seating?", a: "Yes. We have extensive experience cleaning traditional majlis cushions and seating. We use low-moisture methods that protect decorative fabrics, embroidery, and patterns while thoroughly removing dust and body oils. All majlis cleaning is done on-site." },
      { q: "Is sofa cleaning safe for my pets and children?", a: "Completely safe. Our cleaning solutions are non-toxic, biodegradable, and free from harsh chemicals. Once the upholstery is dry — typically within 2 to 4 hours — it is safe for children and pets to sit on." },
      { q: "Can you remove pet hair from sofas?", a: "Yes. Our pre-cleaning vacuum process uses upholstery-specific attachments that extract pet hair from fabric pores, crevices, and seams. This is followed by the deep cleaning process which removes any remaining hair along with dander and allergens." },
    ],
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
