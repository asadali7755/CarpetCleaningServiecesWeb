import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RevealInit from "@/components/RevealInit";
import { Globe, InfiniteGallery } from "@/components/lazy";
import { Icon } from "@/components/Icons";
import RequestCall from "@/components/RequestCall";
import { PHONE_DISPLAY, PHONE_TEL, waHref, SITE_URL, BRAND, EMAIL } from "@/components/constants";
import { SERVICES } from "@/lib/servicesData";
import { LOCATIONS } from "@/lib/locationsData";

const GALLERY_IMAGES = [
  { src: "/images/gallery/professional-carpet-cleaning-technician-dubai.webp", alt: "Professional carpet cleaning technician deep cleaning oriental rug in Dubai by Alhaya Cleaning Services" },
  { src: "/images/gallery/commercial-carpet-cleaning-technician-uae.webp", alt: "Commercial carpet cleaning technician with industrial equipment servicing offices across UAE" },
  { src: "/images/gallery/carpet-shampoo-deep-cleaning-dubai.webp", alt: "Carpet shampoo deep cleaning service showing professional results in Dubai homes and offices" },
  { src: "/images/gallery/industrial-carpet-cleaning-machine-dubai.webp", alt: "Industrial carpet cleaning machine extracting dirt and stains from residential carpet in Dubai" },
  { src: "/images/gallery/deep-carpet-cleaning-process-uae.webp", alt: "Deep carpet cleaning process removing embedded stains and odors across UAE Emirates" },
  { src: "/images/gallery/professional-carpet-cleaning-team-dubai.webp", alt: "Professional carpet cleaning team from Alhaya Cleaning Services ready for residential and commercial jobs in Dubai" },
  { src: "/images/gallery/carpet-steam-extraction-cleaning-uae.webp", alt: "Carpet steam extraction hot water cleaning method sanitizing carpets across UAE by Alhaya" },
  { src: "/images/gallery/clean-carpet-after-professional-cleaning-dubai.webp", alt: "Clean fresh carpet result after professional deep shampoo cleaning by Alhaya Dubai" },
];

const FAQS = [
  { q: "How long does it take for the carpet to dry?", a: "Our high-power industrial extraction machinery vacuums out the vast majority of moisture instantly. Your carpet will be completely dry, fresh, and ready to walk on within a rapid 2 to 4 hours, depending on your indoor AC settings and room ventilation." },
  { q: "Do you provide carpet cleaning services outside of Dubai?", a: "Yes, we provide comprehensive commercial and residential carpet cleaning services all over the UAE. Our mobile teams travel directly to your villa, apartment, or office building in Abu Dhabi, Sharjah, Ajman, Al Ain, Fujairah, and Ras Al Khaimah." },
  { q: "Are your cleaning chemicals safe for pets and children?", a: "Absolutely. At Alhaya Cleaning Services, we prioritize your family's health. All of our deep shampooing and carpet odor removing products are completely non-toxic, eco-friendly, and biodegradable." },
  { q: "What types of carpets and rugs can you clean?", a: "We handle all fabric types — Persian and Oriental rugs with pH-neutral hand wash, wool carpets with low-temperature extraction, shaggy deep pile rugs with deep agitation, and synthetic nylon/polyester carpets with high-pressure deep shampoo extraction." },
  { q: "How much does carpet cleaning cost?", a: "Pricing depends on carpet size, fabric type, and level of soiling. We provide a transparent, fixed quote before starting — no hidden charges. Call or WhatsApp 0551275545 for a free estimate." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Carpet Cleaning",
  provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_TEL, email: EMAIL, url: SITE_URL },
  areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: l.name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Carpet Cleaning Services UAE",
    itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Home() {
  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Nav />

      {/* HERO */}
      <section id="coverage" className="hero">
        <div className="hero-col">
          <div className="hero-badge"><span className="dot" /> LIVE ACROSS ALL 7 EMIRATES</div>
          <h1>Professional Carpet Deep<br /><span className="grad">Cleaning Services UAE</span></h1>
          <p className="hero-lead">
            Residential and commercial carpet deep shampoo cleaning with a rapid 2 to 4 hours dry time.
            Erase stubborn stains and eliminate odors — serving Dubai, Abu Dhabi, Sharjah and all Emirates.
          </p>
          <div className="hero-cta">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get a Free Quote via WhatsApp →</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            <RequestCall className="btn-outline" />
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">7</div><div className="stat-label">Emirates served</div></div>
            <div className="stat-div" />
            <div><div className="stat-num">2-4<small>hrs</small></div><div className="stat-label">Dry time</div></div>
            <div className="stat-div" />
            <div><div className="stat-num">90%</div><div className="stat-label">Water extraction</div></div>
          </div>
        </div>
        <Globe />
      </section>

      {/* GALLERY */}
      <section className="sec-process">
        <div id="process" className="proc-gallery-wrap" data-reveal>
          <InfiniteGallery images={GALLERY_IMAGES} visibleCount={14} speed={1.2} className="proc-gallery" />
          <div className="proc-gallery-cap"><span className="dot" /> PROFESSIONAL CARPET CLEANING · DUBAI · SHARJAH · AJMAN · UAE</div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="sec-services">
        <div className="inner">
          <div className="svc-head" data-reveal>
            <div className="eyebrow teal">/ WHAT WE DO</div>
            <h2 className="sec-title">Specialist carpet care, done right.</h2>
          </div>
          <div className="svc-list">
            {SERVICES.map((s, i) => (
              <Link className={`svc-row${i % 2 === 1 ? " svc-row-rev" : ""}`} data-reveal key={s.slug} href={`/services/${s.slug}`}>
                <div className="svc-row-img">
                  <Image src={s.cardImg} alt={`${s.name} service — Al Haya Carpet Cleaning Dubai`} fill sizes="(max-width:768px) 100vw, 45vw" />
                </div>
                <div className="svc-row-content">
                  <div className="svc-row-num">{s.num}</div>
                  <div className="svc-icon"><Icon name={s.icon} /></div>
                  <h3>{s.name}</h3>
                  <p className="svc-row-intro">{s.intro}</p>
                  <div className="svc-row-feats">
                    {s.feat.slice(0, 3).map((f) => (
                      <div className="svc-row-feat" key={f.t}>
                        <span className="svc-row-feat-dot" />
                        <span>{f.t}</span>
                      </div>
                    ))}
                  </div>
                  <span className="svc-more">Learn more <Icon name="arrow" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="sec-areas">
        <div className="inner">
          <div className="svc-head" data-reveal>
            <div className="eyebrow">/ COVERAGE</div>
            <h2 className="sec-title">Carpet cleaning across all 7 emirates.</h2>
          </div>
          <div className="coverage-grid" data-reveal>
            {LOCATIONS.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="coverage-card">
                <div className="coverage-card-img">
                  <Image src={l.image} alt={`Carpet Cleaning ${l.name}`} fill sizes="(max-width:600px) 100vw,(max-width:900px) 50vw,33vw" />
                </div>
                <div className="coverage-card-body">
                  <h3>Carpet Cleaning {l.name}</h3>
                  <span className="coverage-card-meta"><Icon name="pin" /> {l.resp} response · {l.cityCount}+ areas</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec-faq">
        <div className="inner" style={{ maxWidth: 820 }}>
          <div className="svc-head" data-reveal>
            <div className="eyebrow teal">/ FAQ</div>
            <h2 className="sec-title">Questions, answered.</h2>
          </div>
          {FAQS.map((f) => (
            <details className="faq-item" data-reveal key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-card" data-reveal>
          <div className="glow" />
          <div className="inner">
            <h2>Ready for a Spotless, Fresh Carpet?</h2>
            <p>Don&apos;t live with hidden sand, stubborn stains, or musty odors. Book the top-rated residential and commercial carpet cleaning specialists in the Emirates.</p>
            <div className="row">
              <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get a Free Quote →</a>
              <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
