import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import CarpetBackdrop from "@/components/CarpetBackdrop";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import RequestCall from "@/components/RequestCall";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, EMAIL, HOURS, waHref } from "@/components/constants";
import QuoteCallSection from "@/components/QuoteCallSection";
import PageHero from "@/components/PageHero";
import RevealInit from "@/components/RevealInit";
import { SERVICES } from "@/lib/servicesData";
import { LOCATIONS, locationAnchor } from "@/lib/locationsData";
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
        a: "Al Haya Carpet Cleaning Services operates across all seven emirates of the UAE. Our team comes to your home or office. Our main service areas are Dubai (including Marina, Downtown, Jumeirah, Business Bay, Deira, Al Barsha, JBR, and Palm Jumeirah), Sharjah (Al Nahda, Al Majaz, Muwaileh, Al Taawun), and Ajman (Ajman City, Al Nuaimiya, Al Rashidiya). We also serve Abu Dhabi, Ras Al Khaimah, Umm Al Quwain, and Fujairah .",
      },
      {
        q: "How do I contact Al Haya Carpet Cleaning Services?",
        a: `You can reach Al Haya Carpet Cleaning Services by phone or WhatsApp at ${PHONE_DISPLAY} (international: ${PHONE_TEL}), by email at ${EMAIL}, or through our website contact form at ${SITE_URL}/contact. We are available daily from 8:00 AM to 10:00 PM. Same-day slots are often available.`,
      },
      {
        q: "Who comes to my home to clean the carpets?",
        a: "A trained, background-checked Al Haya team comes to your home or office anywhere in the UAE. They bring the cleaning equipment and eco-friendly products that are safe for children and pets.",
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
        a: "Al Haya Carpet Cleaning Services offers six core services across the UAE: (1) Carpet Deep Shampoo Cleaning — our main service, (2) Professional Carpet Stain Removal — treating coffee, tea, Karak, ink, grease, cosmetics, and pet stains, (3) Deep Carpet Odor Removing — treatment that targets the source of the smell instead of masking it, (4) Specialized Rug Care by Fabric Type — tailored cleaning for Persian, Oriental, wool, shaggy, and synthetic rugs, (5) Commercial and Office Carpet Cleaning — for offices, hotels, clinics and shops, with the visit time agreed around your working day, (6) Sofa and Upholstery Cleaning — fabric and leather deep cleaning for sofas, armchairs, majlis seating, and dining chairs.",
      },
      {
        q: "What is carpet deep shampoo cleaning and how does it work?",
        a: "Carpet deep shampoo cleaning is Al Haya's main service. A cleaning shampoo is worked into the carpet pile to break down compacted grime, dust and allergens. The extraction machine then rinses and vacuums at the same time, taking out the dirt and most of the water. The visit covers: a check of the fabric and stains, dust removal with a vacuum, deep shampoo, stain treatment, odour treatment where needed, extraction, and a final check with you. Drying time depends on the carpet and on the AC and airflow in the room.",
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
        a: "Yes. Al Haya provides professional commercial carpet cleaning for corporate offices, hotel corridors, retail showrooms, medical clinics, nurseries, and any high-traffic commercial environment. We agree the visit time with you so the cleaning fits around your working day. The service includes deep shampoo extraction, stain treatment and odour treatment where needed, and we serve businesses across all seven emirates of the UAE.",
      },
      {
        q: "Does Al Haya clean sofas and upholstery?",
        a: "Yes. Al Haya offers professional sofa and upholstery cleaning for sofas, armchairs, majlis seating, cushions, and dining chairs. We use fabric-specific methods including low-moisture extraction for delicate upholstery, steam sanitization for synthetic fabrics, and conditioning treatment for leather. Our service removes body oils, food spills, dust, and allergens that build up in soft furnishings. Done on site at your home or office; same-day slots are often available.",
      },
    ],
  },
  {
    id: "process",
    eyebrow: "/ HOW IT WORKS",
    title: "Our Cleaning Process",
    questions: [
      {
        q: "What is the step-by-step carpet cleaning process at Al Haya?",
        a: "This is how a carpet cleaning job with Al Haya works: Step 1 — Send a photo: WhatsApp us a photo and the rough size of the carpet. Step 2 — Free quote: we reply with a free quote and a time for the visit; same-day slots are often available. Step 3 — Our team comes to you: a trained, background-checked team arrives at your home or office. Step 4 — Dust removal: a vacuum pulls out dry dust and sand. Step 5 — Deep shampoo: shampoo is worked into the pile to loosen embedded grime. Step 6 — Stain treatment: stubborn marks are treated one by one. Step 7 — Extraction: the machine rinses the carpet and takes out the dirty water. Step 8 — Final check: we check the cleaned areas with you before we leave.",
      },
      {
        q: "How long does it take for carpets to dry after cleaning?",
        a: "Most of the water is taken out during the rinse, so the carpet is left damp, not soaked. How long it takes to dry fully depends on the carpet's thickness and fibre and on the AC and airflow in the room. Our team tells you on the day when the room can be used again.",
      },
      {
        q: "Do I get a quote before the cleaning is booked?",
        a: "Yes. Send a photo and the rough size of the carpet on WhatsApp and we reply with a free quote before anything is booked. On the day, our team also checks the fabric and the stains to choose the right cleaning method.",
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
        a: "Al Haya covers all areas of Dubai for carpet cleaning services including: Dubai Marina, Downtown Dubai, Jumeirah (including Jumeirah Beach Residence), Business Bay, Deira, Al Barsha, Palm Jumeirah, Arabian Ranches, Dubai Silicon Oasis, Dubai Sports City, Motor City, International City, Discovery Gardens, Al Quoz, Mirdif, Al Warqa, Bur Dubai, and all other Dubai communities. Same-day slots are often available across Dubai.",
      },
      {
        q: "Does Al Haya provide carpet cleaning in Sharjah?",
        a: "Yes, Al Haya provides full carpet cleaning services across Sharjah including Al Nahda, Al Majaz, Al Qasimia, Muwaileh, Al Taawun, University City, Al Khan, and Khor Fakkan. All our services are available in Sharjah: carpet deep shampoo cleaning, rug cleaning, sofa and upholstery cleaning, and office carpet cleaning. Same-day slots are often available.",
      },
      {
        q: "Is carpet cleaning available in Ajman, Abu Dhabi, RAK, UAQ, and Fujairah?",
        a: "Yes, Al Haya provides carpet cleaning services across all seven emirates of the UAE. In Ajman, we cover Ajman City, Al Nuaimiya, Al Rashidiya, Al Jurf, and surrounding areas. In Abu Dhabi, we serve Khalifa City, Al Ain, Mussafah, Saadiyat Island, Yas Island, and Al Reem Island. Ras Al Khaimah coverage includes RAK City, Al Hamra, Mina Al Arab, and Al Nakheel. In Umm Al Quwain, we serve UAQ City, Al Salamah, and Al Raas. Fujairah coverage includes Fujairah City, Dibba, Al Faseel, Khor Fakkan, and Kalba.",
      },
      {
        q: "Can Al Haya come to my home or office for carpet cleaning?",
        a: "Yes. Our team brings the cleaning equipment to your home, villa, apartment or office and cleans carpets, rugs and sofas in place, so you do not need to take anything anywhere. Same-day slots are often available.",
      },
    ],
  },
  {
    id: "pricing",
    eyebrow: "/ COST & BOOKING",
    title: "Pricing & Booking",
    questions: [
      {
        q: "How much does carpet cleaning cost in Dubai and the UAE?",
        a: `Carpet cleaning prices at Al Haya depend on three things: carpet size, fabric type (Persian, wool, synthetic, shaggy and so on) and how dirty or stained it is. For a free quote, send a photo and the rough size on WhatsApp to ${PHONE_DISPLAY}, or call us.`,
      },
      {
        q: "How do I book a carpet cleaning appointment with Al Haya?",
        a: `Booking carpet cleaning with Al Haya is simple: (1) Call or WhatsApp us at ${PHONE_DISPLAY} — available daily 8 AM to 10 PM, (2) Send an email to ${EMAIL}, or (3) Fill out the contact form at ${SITE_URL}/contact. Send a photo of the carpet and we reply with a free quote and the first free time. Same-day slots are often available.`,
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
        a: "Yes. Al Haya uses eco-friendly cleaning products that are safe for children and pets. Let the carpet dry fully before children play on it again.",
      },
      {
        q: "Does carpet cleaning help with allergies and indoor air quality?",
        a: "Yes. Professional carpet deep cleaning significantly improves indoor air quality by removing trapped allergens including dust mites, pollen, pet dander, mold spores, and fine sand particles. In the UAE, where air conditioning runs continuously and windows are rarely opened, carpets act as large-scale air filters that accumulate these particles over time. A deep shampoo and extraction physically removes much of this from the carpet fibres. Regular professional cleaning every 6-12 months is recommended for allergy sufferers.",
      },
      {
        q: "What equipment does Al Haya use for carpet cleaning?",
        a: "Our team brings portable carpet cleaning equipment to your home or office: a vacuum for dry dust and sand, shampoo and extraction machines that rinse and vacuum at the same time, spot-treatment tools for single stains, and air movers to help the carpet dry.",
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
        a: "Carpet shampooing and hot-water extraction (often called steam cleaning) work well together. Shampooing works a cleaning solution deep into the carpet pile to loosen dirt, grime and stains. Extraction then rinses the carpet with water and sucks the dirty water back out with strong suction. Al Haya combines both: we deep shampoo first to break down soiling, then rinse and extract.",
      },
      {
        q: "Can old, heavily soiled carpets be restored with professional cleaning?",
        a: "Often, yes. Carpets that look beyond saving — heavily soiled with years of embedded dirt, old stains, pet marks and odour — usually improve a lot with a deep shampoo and stain treatment. However, some permanent damage may occur from: bleach or chemical burns, color-fast dye transfer from clothing or furniture, severe sun fading, or long-term pet urine damage to the carpet backing. Send photos on WhatsApp and we tell you honestly, before anything is booked, what results to expect.",
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
        a: "What you get with Al Haya: (1) We come to you — carpets, rugs and sofas are cleaned at your home or office, (2) A trained, background-checked team, (3) A thorough process — shampoo, stain treatment and extraction in one visit, (4) All 7 Emirates — UAE coverage from a single provider, (5) Fabric-specific care — different methods for Persian, wool, shaggy and synthetic carpets, (6) Eco-friendly products that are safe for children and pets, (7) A free quote on WhatsApp before anything is booked, (8) Same-day slots, often available.",
      },
      {
        q: "Does Al Haya offer same-day carpet cleaning service?",
        a: "Yes. Same-day slots are often available. Message us on WhatsApp in the morning with a photo of the carpet and we tell you the first free time. For a large villa or office, booking a day or two ahead gives you more choice of times.",
      },
    ],
  },
];

const ALL_FAQS = GUIDE_SECTIONS.flatMap((s) => s.questions);

/* ---------- Metadata ---------- */

export const metadata: Metadata = {
  title: "Carpet Cleaning Guide UAE — FAQ, Tips & Advice",
  description:
    "Answers to common carpet cleaning questions in Dubai and the UAE: services, process, fabric care, stains and how to get a free quote on WhatsApp.",
  keywords: [
    "carpet cleaning guide Dubai",
    "carpet cleaning FAQ UAE",
    "how to clean carpets Dubai",
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
      "Expert carpet cleaning guide: services, cleaning process, pricing, fabric care tips, stain removal advice, and coverage across all 7 UAE Emirates.",
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
    <div className="page rp rp-carpet">
      <CarpetBackdrop variant="vine" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />

      <main>
        {/* Hero */}
        <PageHero
          variant="center"
          crumbs={[{ label: "Home", href: "/" }, { label: "Carpet Cleaning Guide" }]}
          eyebrow="The guide"
          title="Complete Guide to Professional Carpet Cleaning in the UAE"
          lead="Everything you need to know about carpet deep cleaning, stain removal, odor treatment, rug care, and maintaining healthy carpets in the UAE climate. Expert knowledge from Al Haya — trusted by homes and businesses across all seven Emirates."
          actions={
            <>
              <a className="rb-gold" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> Get a free quote</a>
              <a className="rb-line" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
              <RequestCall className="rb-line" />
            </>
          }
        />

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
                <span className="guide-fact-label">Team</span>
                <span className="guide-fact-value">Trained &amp; background-checked</span>
              </div>
              <div className="guide-fact">
                <span className="guide-fact-label">Quote</span>
                <span className="guide-fact-value">Free on WhatsApp</span>
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
            <div className="rel-grid rel-grid--img">
              {SERVICES.map((s) => (
                <Link className="rel-card rel-card--img" key={s.slug} href={`/services/${s.slug}`}>
                  <div className="rel-card-img">
                    <Image src={s.cardImg} alt={`${s.name} — Al Haya Carpet Cleaning`} fill sizes="(max-width:600px) 100vw,(max-width:900px) 50vw,33vw" />
                  </div>
                  <div className="rel-card-content">
                    <div className="ic"><Icon name={s.icon} /></div>
                    <h3>{s.name}</h3>
                    <p>{s.intro.slice(0, 120)}…</p>
                  </div>
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
                  <Icon name="pin" /> {locationAnchor(l)}
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
              <p>Send a photo on WhatsApp and get a free quote. Same-day slots are often available.</p>
              <div className="row">
                <a className="btn-green" href={waHref()} target="_blank" rel="noopener">WhatsApp us →</a>
                <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </section>

        <QuoteCallSection />
      </main>

      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
