import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, EMAIL, HOURS, waHref } from "@/components/constants";
import { SERVICES } from "@/lib/servicesData";
import { LOCATIONS } from "@/lib/locationsData";
import { GUIDES } from "@/lib/guidesData";

/* ---------- Data ---------- */

const GUIDE_SECTIONS = [
  {
    id: "about",
    eyebrow: "/ WHO WE ARE",
    title: "About Al Haya Carpet Cleaning Services",
    questions: [
      {
        q: "What is Al Haya Carpet Cleaning Services?",
        a: "Al Haya Carpet Cleaning Services (Alhaya Cleaning Services) is a professional carpet deep cleaning company based in the UAE. We specialize in carpet deep shampoo cleaning, stubborn stain removal, carpet odor removing, specialized rug care by fabric type, commercial and office carpet cleaning, and sofa and upholstery cleaning. We serve residential and commercial clients across all seven emirates of the UAE — Dubai, Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah, Umm Al Quwain, and Fujairah.",
      },
      {
        q: "Where is Al Haya Carpet Cleaning located?",
        a: "Al Haya Carpet Cleaning Services operates across all seven emirates of the UAE. Our primary service areas are Dubai (including Marina, Downtown, Jumeirah, Business Bay, Deira, Al Barsha, JBR, and Palm Jumeirah), Sharjah (Al Nahda, Al Majaz, Muwaileh, Al Taawun), and Ajman (Ajman City, Al Nuaimiya, Al Rashidiya). We also serve Abu Dhabi, Ras Al Khaimah, Umm Al Quwain, and Fujairah on regular scheduled routes.",
      },
      {
        q: "How do I contact Al Haya Carpet Cleaning Services?",
        a: `You can reach Al Haya Carpet Cleaning Services by phone or WhatsApp at ${PHONE_DISPLAY} (international: ${PHONE_TEL}), by email at ${EMAIL}, or through our website contact form at ${SITE_URL}/contact. We are available daily from 8:00 AM to 10:00 PM, seven days a week including weekends and public holidays. Same-day appointments are available across Dubai, Sharjah, and Ajman.`,
      },
      {
        q: "Is Al Haya a licensed and insured cleaning company in the UAE?",
        a: "Yes. Al Haya Carpet Cleaning Services is a fully licensed, insured, and registered cleaning company operating across the United Arab Emirates. All our technicians are trained, uniformed, and background-checked. We carry full liability insurance covering your property during every cleaning job.",
      },
    ],
  },
  {
    id: "services",
    eyebrow: "/ WHAT WE DO",
    title: "Carpet Cleaning Services We Offer",
    questions: [
      {
        q: "What carpet cleaning services does Al Haya offer in the UAE?",
        a: "Al Haya Carpet Cleaning Services offers six core services across the UAE: (1) Carpet Deep Shampoo Cleaning — our signature service using industrial extraction with 2-4 hours dry time, (2) Professional Carpet Stain Removal — treating coffee, tea, Karak, ink, grease, cosmetics, and pet stains, (3) Deep Carpet Odor Removing — enzyme-based antimicrobial treatment that neutralizes odors at the molecular level, (4) Specialized Rug Care by Fabric Type — tailored cleaning for Persian, Oriental, wool, shaggy, and synthetic rugs, (5) Commercial and Office Carpet Cleaning — flexible after-hours scheduling for offices, hotels, clinics, and retail, (6) Sofa and Upholstery Cleaning — fabric and leather deep cleaning for sofas, armchairs, majlis seating, and dining chairs.",
      },
      {
        q: "What is carpet deep shampoo cleaning and how does it work?",
        a: "Carpet deep shampoo cleaning is Al Haya's signature service. The process involves applying a biodegradable, non-toxic deep cleaning shampoo to penetrate the carpet pile, breaking down compacted grime, dust mites, and allergens. Our advanced extraction technology then extracts 90% of water instantly during the rinse cycle. The full process includes: booking request, free inspection of fabric and stains, dust removal with high-power vacuum, deep shampoo application, enzyme stain treatment, high-heat steam sanitization, molecular odor neutralization, controlled air-drying, 30-point quality inspection, and delivery. Your carpet is fully dry, fresh, and ready to walk on within 2 to 4 hours.",
      },
      {
        q: "Can you remove stubborn stains from carpets in Dubai?",
        a: "Yes, Al Haya specializes in stubborn carpet stain removal across the UAE. Our technicians analyze the fabric type first and apply specialized, color-safe pre-treatment solutions to dissolve stains without damaging delicate fibers. We successfully treat difficult stains including: coffee and tea spills, Karak stains, ink marks, grease and oil, cosmetics and makeup, food spills, pet urine and messes, red wine, and mud or dirt. Each stain is treated individually with enzyme-based and pH-neutral solutions tailored to the specific type of spill and carpet fiber.",
      },
      {
        q: "How does Al Haya remove carpet odors?",
        a: "Al Haya's carpet odor removing service uses advanced antimicrobial and enzyme-based formulas that neutralize odor-causing bacteria at a molecular level. We do not mask unpleasant scents with artificial perfumes — we completely eliminate them. This is particularly important in the UAE climate, where high indoor humidity combined with continuous AC usage creates conditions that trap sour, musty smells inside floor coverings. Our treatment targets the root cause of odors including pet smells, food odors, smoke, mustiness, and general staleness.",
      },
      {
        q: "What types of rugs can Al Haya clean?",
        a: "Al Haya handles all rug and carpet fabric types with specialized care methods: (1) Persian and Oriental Rugs — low-moisture, pH-neutral hand wash approach to prevent vegetable dyes from bleeding, (2) Wool Carpets — low-temperature extraction to prevent shrinkage or fiber distortion, (3) Shaggy and Deep Pile Rugs — deep agitation process to pull hidden sand and pet hair from the base, (4) Synthetic Carpets (Nylon and Polyester) — high-pressure deep shampoo extraction for maximum stain removal. Each rug type receives a customized cleaning process to ensure the best results without damage.",
      },
      {
        q: "Does Al Haya offer commercial and office carpet cleaning?",
        a: "Yes. Al Haya provides professional commercial carpet cleaning for corporate offices, hotel corridors, retail showrooms, medical clinics, nurseries, and any high-traffic commercial environment. We offer flexible scheduling including after-hours and weekend appointments to ensure zero business downtime — your workspace is pristine by Monday morning. Our commercial service includes deep shampoo extraction, stain treatment, sanitization, and optional ongoing maintenance contracts. We serve commercial clients across all seven emirates of the UAE.",
      },
      {
        q: "Does Al Haya clean sofas and upholstery?",
        a: "Yes. Al Haya offers professional sofa and upholstery cleaning for sofas, armchairs, majlis seating, cushions, and dining chairs. We use fabric-specific methods including low-moisture extraction for delicate upholstery, steam sanitization for synthetic fabrics, and conditioning treatment for leather. Our service removes body oils, food spills, dust, and allergens that build up in soft furnishings. Available on-site at your home or office with same-day appointments across Dubai, Sharjah, and Ajman.",
      },
    ],
  },
  {
    id: "process",
    eyebrow: "/ HOW IT WORKS",
    title: "Our 11-Step Cleaning Process",
    questions: [
      {
        q: "What is the step-by-step carpet cleaning process at Al Haya?",
        a: "Al Haya follows an 11-step professional carpet cleaning process: Step 1 — Booking Request: Book online, by phone, or WhatsApp in under a minute. Step 2 — Free Inspection: We assess fabric type, stains, and determine the best cleaning method at no cost. Step 3 — Pickup or On-Site: Doorstep collection or we clean in place, your choice. Step 4 — Dust Removal: High-power vacuum and beating extracts dry dirt and grit. Step 5 — Deep Shampoo: Industrial extraction shampoo loosens embedded grime. Step 6 — Stain Treatment: Enzyme spot-treatment targets stubborn marks individually. Step 7 — Steam Sanitization: High-heat steam kills bacteria, mites, and allergens. Step 8 — Odor Removal: Neutralizers eliminate odors at the molecular source. Step 9 — Drying Process: Controlled air-drying restores loft without shrinkage. Step 10 — Quality Inspection: Final check against our 30-point quality standard. Step 11 — Delivery/Done: Carpet returned fresh, sanitized, and ready to enjoy.",
      },
      {
        q: "How long does it take for carpets to dry after cleaning?",
        a: "After Al Haya's carpet deep shampoo cleaning, your carpet will be completely dry, fresh, and ready to walk on within 2 to 4 hours. Our high-power industrial extraction machinery extracts 90% of moisture instantly during the rinse cycle. The exact drying time depends on your indoor AC settings and room ventilation. This rapid dry time is a key advantage of our service — most competitors require 12 to 24 hours for carpets to dry.",
      },
      {
        q: "Does Al Haya offer a free carpet inspection before cleaning?",
        a: "Yes. Every Al Haya cleaning job starts with a free inspection where our technician assesses the carpet's fabric type, condition, existing stains, and determines the best cleaning method. There is no obligation or charge for this inspection. Based on the assessment, we provide a transparent, fixed-price quote before any work begins — no hidden charges or surprise fees.",
      },
    ],
  },
  {
    id: "coverage",
    eyebrow: "/ WHERE WE SERVE",
    title: "Service Coverage Across UAE",
    questions: [
      {
        q: "Which areas in Dubai does Al Haya cover for carpet cleaning?",
        a: "Al Haya covers all areas of Dubai for carpet cleaning services including: Dubai Marina, Downtown Dubai, Jumeirah (including Jumeirah Beach Residence), Business Bay, Deira, Al Barsha, Palm Jumeirah, Arabian Ranches, Dubai Silicon Oasis, Dubai Sports City, Motor City, International City, Discovery Gardens, Al Quoz, Mirdif, Al Warqa, Bur Dubai, and all other Dubai communities. Same-day service is available across Dubai with response times of 30-60 minutes for most central areas.",
      },
      {
        q: "Does Al Haya provide carpet cleaning in Sharjah?",
        a: "Yes, Al Haya provides full carpet cleaning services across Sharjah including Al Nahda, Al Majaz, Al Qasimia, Muwaileh, Al Taawun, University City, Al Khan, and Khor Fakkan. All our services are available in Sharjah: carpet steam cleaning, rug cleaning, upholstery and mattress sanitisation, plus office and villa contracts. Same-day appointments are available with response times of 30-45 minutes.",
      },
      {
        q: "Is carpet cleaning available in Ajman, Abu Dhabi, RAK, UAQ, and Fujairah?",
        a: "Yes, Al Haya provides carpet cleaning services across all seven emirates of the UAE. In Ajman, we cover Ajman City, Al Nuaimiya, Al Rashidiya, Al Jurf, and surrounding areas. In Abu Dhabi, we serve Khalifa City, Al Ain, Mussafah, Saadiyat Island, Yas Island, and Al Reem Island. Ras Al Khaimah coverage includes RAK City, Al Hamra, Mina Al Arab, and Al Nakheel. In Umm Al Quwain, we serve UAQ City, Al Salamah, and Al Raas. Fujairah coverage includes Fujairah City, Dibba, Al Faseel, Khor Fakkan, and Kalba. Abu Dhabi, RAK, UAQ, and Fujairah are served on regular scheduled routes.",
      },
      {
        q: "Can Al Haya come to my home or office for carpet cleaning?",
        a: "Yes. Al Haya offers both on-site cleaning and pickup-and-return service. For on-site cleaning, our team brings all commercial-grade equipment to your home, villa, apartment, or office and cleans carpets, rugs, sofas, and mattresses in place. For rug cleaning, we also offer doorstep collection — we pick up your rugs, clean them at our facility, and return them fresh and sanitized. The choice is entirely yours. Same-day appointments are available across Dubai, Sharjah, and Ajman.",
      },
    ],
  },
  {
    id: "pricing",
    eyebrow: "/ COST & BOOKING",
    title: "Pricing, Booking & Guarantees",
    questions: [
      {
        q: "How much does carpet cleaning cost in Dubai and the UAE?",
        a: `Carpet cleaning pricing at Al Haya depends on three factors: carpet size (measured in square meters or feet), fabric type (Persian, wool, synthetic, shaggy, etc.), and level of soiling or staining. We provide a transparent, fixed-price quote before starting any work — no hidden charges, no surprise fees. For a free, no-obligation estimate, call or WhatsApp us at ${PHONE_DISPLAY}. We offer competitive pricing across all seven emirates with special rates for regular maintenance contracts and multi-item bookings.`,
      },
      {
        q: "How do I book a carpet cleaning appointment with Al Haya?",
        a: `Booking carpet cleaning with Al Haya is simple: (1) Call or WhatsApp us at ${PHONE_DISPLAY} — available daily 8 AM to 10 PM, (2) Send an email to ${EMAIL}, (3) Fill out the contact form at ${SITE_URL}/contact, or (4) Message us directly through our website chat. We aim to respond within the hour with a no-obligation quote. Same-day service is available across Dubai, Sharjah, and Ajman. For Abu Dhabi, RAK, UAQ, and Fujairah, bookings are typically scheduled within 48 hours on our regular routes.`,
      },
      {
        q: "Does Al Haya offer a satisfaction guarantee for carpet cleaning?",
        a: "Yes. Al Haya provides a 100% satisfaction guarantee on every carpet cleaning job. If you are not completely satisfied with any spot or area after our cleaning, we will re-clean it free of charge — this is a written guarantee included with every booking. Our 30-point quality inspection process ensures that every carpet meets our high standards before it is returned to you.",
      },
      {
        q: "What payment methods does Al Haya accept?",
        a: "Al Haya accepts multiple payment methods for your convenience: cash on completion, bank transfer, and digital payment. We do not require any advance payment — you pay only after the job is done and you are satisfied with the results. For commercial contracts and recurring maintenance, we offer monthly invoicing.",
      },
    ],
  },
  {
    id: "safety",
    eyebrow: "/ SAFETY & PRODUCTS",
    title: "Products, Safety & Health",
    questions: [
      {
        q: "Are Al Haya's carpet cleaning products safe for children and pets?",
        a: "Yes. All cleaning products used by Al Haya are completely non-toxic, eco-friendly, biodegradable, child-safe, and pet-safe. We never use harsh chemicals that could irritate skin, trigger allergies, or leave harmful residues on your carpets. Our products are specially formulated for the UAE environment where families with young children and pets need assurance that their soft furnishings are genuinely safe to sit, play, and sleep on after cleaning.",
      },
      {
        q: "Does carpet cleaning help with allergies and indoor air quality?",
        a: "Yes. Professional carpet deep cleaning significantly improves indoor air quality by removing trapped allergens including dust mites, pollen, pet dander, mold spores, and fine sand particles. In the UAE, where air conditioning runs continuously and windows are rarely opened, carpets act as large-scale air filters that accumulate these particles over time. Al Haya's high-heat steam sanitization kills bacteria, dust mites, and allergens, while our extraction process physically removes them from the carpet fibers. Regular professional cleaning every 6-12 months is recommended for allergy sufferers.",
      },
      {
        q: "What equipment does Al Haya use for carpet cleaning?",
        a: "Al Haya uses commercial-grade, industrial-strength carpet cleaning equipment including: high-power extraction machines that remove 90% of moisture instantly, industrial-grade deep shampoo units, high-temperature steam sanitization equipment (killing bacteria at 100°C+), specialized spot-treatment tools for individual stain removal, and high-velocity air movers for controlled drying. Our equipment is professional-grade — the same machines used by international hotel chains and commercial cleaning companies.",
      },
    ],
  },
  {
    id: "tips",
    eyebrow: "/ EXPERT ADVICE",
    title: "Carpet Care Tips & Knowledge",
    questions: [
      {
        q: "How often should I get my carpets professionally cleaned in the UAE?",
        a: "In the UAE, we recommend professional carpet deep cleaning every 6 to 12 months for residential carpets, and every 3 to 6 months for high-traffic areas or homes with children and pets. The UAE's desert environment means fine sand particles constantly settle into indoor fabrics, even with regular vacuuming. Additionally, continuous AC use creates humidity conditions that can trap moisture and odors in carpet fibers. Commercial carpets in offices and retail spaces should be professionally cleaned every 3 months to maintain hygiene standards and extend carpet life.",
      },
      {
        q: "How can I maintain my carpet between professional cleanings?",
        a: "Between professional deep cleanings, Al Haya recommends: (1) Vacuum at least twice a week, more in high-traffic areas, (2) Remove shoes at the door to prevent sand tracking, (3) Blot spills immediately with a clean cloth — never rub, as it pushes the stain deeper, (4) Rotate furniture periodically to prevent permanent indentations, (5) Use entry mats at all doorways, (6) Avoid direct sunlight on carpets to prevent fading, (7) Keep indoor humidity controlled with AC, (8) Address any spills or stains within 24 hours for the best chance of complete removal. For stubborn stains, avoid store-bought carpet cleaners — many contain bleaching agents that can permanently damage fibers. Call Al Haya for professional spot treatment instead.",
      },
      {
        q: "What is the difference between carpet shampooing and steam cleaning?",
        a: "Carpet shampooing and steam cleaning are two different but complementary methods. Carpet shampooing uses a biodegradable cleaning shampoo that is worked deep into the carpet pile to dissolve dirt, grime, and stains, then extracted using high-powered suction. Steam cleaning (hot water extraction) uses high-temperature water (100°C+) and powerful suction to sanitize and deep-clean the carpet, killing bacteria, dust mites, and allergens. Al Haya combines both methods in our 11-step process: we deep shampoo first to break down soiling, then follow with high-heat steam sanitization for thorough hygiene. This dual approach delivers superior results compared to either method alone.",
      },
      {
        q: "Can old, heavily soiled carpets be restored with professional cleaning?",
        a: "In most cases, yes. Al Haya has successfully restored carpets that appeared beyond saving — heavily soiled with years of embedded dirt, multiple old stains, pet damage, and odor buildup. Our industrial-grade extraction and multi-step treatment process can remove the vast majority of soiling and staining. However, some permanent damage may occur from: bleach or chemical burns, color-fast dye transfer from clothing or furniture, severe sun fading, or long-term pet urine damage to the carpet backing. We always provide an honest assessment during our free inspection — we will tell you upfront what results to expect.",
      },
      {
        q: "Why is carpet cleaning important in the UAE desert climate?",
        a: "The UAE's desert environment creates unique challenges for carpet care. Fine sand particles are carried indoors by wind and foot traffic, embedding themselves deep in carpet fibers where regular vacuuming cannot reach. Continuous air conditioning creates indoor humidity fluctuations that can trap moisture and develop musty odors. Dust storms deposit particulate matter that settles into soft furnishings. Additionally, the high temperatures outside mean most UAE residents spend significant time indoors, increasing carpet wear and the accumulation of body oils, food particles, and allergens. Professional deep cleaning every 6-12 months is essential to maintain healthy indoor air quality, extend carpet life, and prevent the buildup of bacteria and dust mites in this climate.",
      },
    ],
  },
  {
    id: "comparison",
    eyebrow: "/ WHY AL HAYA",
    title: "Why Choose Al Haya Over Others",
    questions: [
      {
        q: "What makes Al Haya different from other carpet cleaners in Dubai?",
        a: "Al Haya stands apart from other carpet cleaning companies in Dubai and the UAE for several reasons: (1) Rapid 2-4 Hour Dry Time — our industrial extraction removes 90% of moisture instantly, while most competitors require 12-24 hours, (2) 11-Step Process — a thorough, multi-stage cleaning process including shampoo, stain treatment, steam sanitization, and odor removal, (3) All 7 Emirates — full UAE coverage from a single provider, (4) Fabric-Specific Care — different cleaning methods for Persian, wool, shaggy, and synthetic — not one-size-fits-all, (5) 100% Satisfaction Guarantee — written guarantee with free re-cleaning, (6) Eco-Friendly Products — non-toxic, biodegradable, child-safe and pet-safe, (7) Transparent Pricing — fixed quote before starting, no hidden charges, (8) Same-Day Service — available across Dubai, Sharjah, and Ajman.",
      },
      {
        q: "Does Al Haya offer same-day carpet cleaning service?",
        a: "Yes. Al Haya offers same-day carpet cleaning service across Dubai, Sharjah, and Ajman. Book in the morning, enjoy fresh carpets the same evening. For Abu Dhabi, Ras Al Khaimah, Umm Al Quwain, and Fujairah, bookings are typically scheduled within 48 hours on our regular emirate routes. Emergency and urgent carpet cleaning requests are accommodated whenever possible — call or WhatsApp us to check availability.",
      },
    ],
  },
];

const ALL_FAQS = GUIDE_SECTIONS.flatMap((s) => s.questions);

/* ---------- Metadata ---------- */

export const metadata: Metadata = {
  title: "Complete Carpet Cleaning Guide UAE — FAQ, Tips & Expert Advice",
  description:
    "Everything you need to know about professional carpet cleaning in Dubai and the UAE. Comprehensive guide covering services, process, pricing, fabric care, stain removal, and expert tips from Al Haya Carpet Cleaning Services.",
  keywords: [
    "carpet cleaning guide Dubai",
    "carpet cleaning FAQ UAE",
    "how to clean carpets Dubai",
    "best carpet cleaner UAE",
    "carpet cleaning tips Dubai",
    "professional carpet cleaning advice",
    "carpet stain removal guide",
    "carpet care UAE desert climate",
    "Al Haya carpet cleaning",
    "carpet cleaning cost Dubai",
  ],
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: "Complete Carpet Cleaning Guide UAE — Al Haya",
    description:
      "Expert carpet cleaning guide: services, 11-step process, pricing, fabric care tips, stain removal advice, and coverage across all 7 UAE Emirates.",
    url: `${SITE_URL}/guides`,
  },
};

/* ---------- Schema ---------- */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Complete Carpet Cleaning Guide for Dubai and the UAE",
  description:
    "Comprehensive guide to professional carpet cleaning services, process, pricing, fabric care, and expert tips for the UAE desert climate.",
  author: { "@type": "Organization", name: BRAND, url: SITE_URL },
  publisher: { "@type": "Organization", name: BRAND, url: SITE_URL },
  mainEntityOfPage: `${SITE_URL}/guides`,
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Carpet Cleaning Guide", item: `${SITE_URL}/guides` },
  ],
};

/* ---------- Page ---------- */

export default function GuidesPage() {
  return (
    <div className="page">
      <Nav />
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </head>

      <main>
        {/* Hero */}
        <section className="sub-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <span style={{ color: "var(--green)" }}>Carpet Cleaning Guide</span>
          </nav>
          <h1>Complete Guide to Professional Carpet Cleaning in the UAE</h1>
          <p className="lead">
            Everything you need to know about carpet deep cleaning, stain removal, odor treatment, rug care, and maintaining healthy carpets in the UAE climate. Expert knowledge from Al Haya — trusted by homes and businesses across all seven Emirates.
          </p>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get a free quote →</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
          </div>
        </section>

        {/* Quick-nav TOC */}
        <section className="inner guide-toc-sec" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "0 var(--pad) 40px" }}>
          <div className="guide-toc">
            <h2 className="guide-toc-title">In this guide</h2>
            <nav className="guide-toc-grid">
              {GUIDE_SECTIONS.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="guide-toc-item">
                  <span className="guide-toc-eyebrow">{s.eyebrow}</span>
                  <span className="guide-toc-label">{s.title}</span>
                  <span className="guide-toc-count">{s.questions.length} questions</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Quick facts */}
        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "0 var(--pad) 50px" }}>
          <div className="guide-facts">
            <h2 className="guide-facts-title">Quick Facts — Al Haya Carpet Cleaning</h2>
            <div className="guide-facts-grid">
              <div className="guide-fact">
                <span className="guide-fact-label">Business Name</span>
                <span className="guide-fact-value">{BRAND}</span>
              </div>
              <div className="guide-fact">
                <span className="guide-fact-label">Phone / WhatsApp</span>
                <span className="guide-fact-value"><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></span>
              </div>
              <div className="guide-fact">
                <span className="guide-fact-label">Email</span>
                <span className="guide-fact-value"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
              </div>
              <div className="guide-fact">
                <span className="guide-fact-label">Hours</span>
                <span className="guide-fact-value">{HOURS}</span>
              </div>
              <div className="guide-fact">
                <span className="guide-fact-label">Coverage</span>
                <span className="guide-fact-value">All 7 UAE Emirates</span>
              </div>
              <div className="guide-fact">
                <span className="guide-fact-label">Dry Time</span>
                <span className="guide-fact-value">2 – 4 Hours</span>
              </div>
              <div className="guide-fact">
                <span className="guide-fact-label">Water Extraction</span>
                <span className="guide-fact-value">90% Instant</span>
              </div>
              <div className="guide-fact">
                <span className="guide-fact-label">Guarantee</span>
                <span className="guide-fact-value">100% Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ sections */}
        {GUIDE_SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="guide-section">
            <div className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "50px var(--pad)" }}>
              <div className="eyebrow teal">{section.eyebrow}</div>
              <h2 className="sec-title" style={{ marginBottom: 32 }}>{section.title}</h2>
              <div className="guide-qa-list">
                {section.questions.map((faq, i) => (
                  <details key={i} className="guide-qa" open={i === 0}>
                    <summary>
                      <span className="guide-qa-icon"><Icon name="arrow" /></span>
                      <span>{faq.q}</span>
                    </summary>
                    <div className="guide-qa-answer">
                      <p>{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Deep-dive guide articles */}
        <section className="guide-section" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "60px var(--pad)" }}>
            <div className="eyebrow teal">/ DEEP DIVE GUIDES</div>
            <h2 className="sec-title" style={{ marginBottom: 8 }}>In-Depth Carpet Cleaning Articles</h2>
            <p style={{ color: "var(--text-2)", fontSize: 16, marginBottom: 28, maxWidth: "60ch" }}>
              Detailed expert guides covering specific carpet cleaning topics — pricing, methods, stain removal, rug care, and more.
            </p>
            <div className="rel-grid">
              {GUIDES.map((g) => (
                <Link className="rel-card" key={g.slug} href={`/guides/${g.slug}`}>
                  <div className="ic"><Icon name="arrow" /></div>
                  <h3>{g.title.split("—")[0].trim()}</h3>
                  <p>{g.description.slice(0, 120)}…</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services quick links */}
        <section className="guide-section" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "60px var(--pad)" }}>
            <div className="eyebrow teal">/ OUR SERVICES</div>
            <h2 className="sec-title" style={{ marginBottom: 8 }}>Explore Our Services</h2>
            <p style={{ color: "var(--text-2)", fontSize: 16, marginBottom: 28, maxWidth: "60ch" }}>
              Learn more about each specialized carpet cleaning service we offer across the UAE.
            </p>
            <div className="rel-grid">
              {SERVICES.map((s) => (
                <Link className="rel-card" key={s.slug} href={`/services/${s.slug}`}>
                  <div className="ic"><Icon name={s.icon} /></div>
                  <h3>{s.name}</h3>
                  <p>{s.intro.slice(0, 120)}…</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Location quick links */}
        <section className="guide-section">
          <div className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "60px var(--pad)" }}>
            <div className="eyebrow teal">/ SERVICE AREAS</div>
            <h2 className="sec-title" style={{ marginBottom: 8 }}>Carpet Cleaning Across All Emirates</h2>
            <p style={{ color: "var(--text-2)", fontSize: 16, marginBottom: 28, maxWidth: "60ch" }}>
              We provide professional carpet cleaning services across all seven emirates of the United Arab Emirates.
            </p>
            <div className="chips-row">
              {LOCATIONS.map((l) => (
                <Link className="chip-link" key={l.slug} href={`/locations/${l.slug}`}>
                  <Icon name="pin" /> Carpet Cleaning {l.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="cta-card">
            <div className="glow" />
            <div className="inner">
              <h2>Ready to get your carpets deep cleaned?</h2>
              <p>Book a free inspection and get a no-obligation quote. Same-day service available across Dubai, Sharjah, and Ajman.</p>
              <div className="row">
                <a className="btn-green" href={waHref()} target="_blank" rel="noopener">WhatsApp us →</a>
                <a className="btn-outline" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Fab />
    </div>
  );
}
