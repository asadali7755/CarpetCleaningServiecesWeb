import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RevealInit from "@/components/RevealInit";
import { Globe, InfiniteGallery, ContainerScroll, CardSticky } from "@/components/lazy";
import { Icon } from "@/components/Icons";
import RequestCall from "@/components/RequestCall";
import { PHONE_DISPLAY, PHONE_TEL, waHref, SITE_URL, BRAND, EMAIL } from "@/components/constants";
import { SERVICES } from "@/lib/servicesData";
import { LOCATIONS } from "@/lib/locationsData";

const STEPS = [
  { n: "01", title: "Booking Request", desc: "Book online, by phone or WhatsApp in under a minute." },
  { n: "02", title: "Free Inspection", desc: "We assess fabric, stains and the best cleaning method — at no cost." },
  { n: "03", title: "Pickup or On-Site", desc: "Doorstep collection or we clean in place — your choice." },
  { n: "04", title: "Dust Removal", desc: "High-power vacuum and beating extracts dry dirt and grit." },
  { n: "05", title: "Deep Shampoo", desc: "Industrial extraction shampoo loosens embedded grime." },
  { n: "06", title: "Stain Treatment", desc: "Enzyme spot-treatment targets stubborn marks individually." },
  { n: "07", title: "Steam Sanitization", desc: "High-heat steam kills bacteria, mites and allergens." },
  { n: "08", title: "Odor Removal", desc: "Neutralizers eliminate odors at the molecular source." },
  { n: "09", title: "Drying Process", desc: "Controlled air-drying restores loft without shrinkage." },
  { n: "10", title: "Quality Inspection", desc: "Final check against our 30-point quality standard." },
  { n: "11", title: "Delivery / Done", desc: "Carpet returned fresh, sanitized and ready to enjoy." },
];

const GALLERY_IMAGES = [
  { src: "/images/gallery/before-after-1.jpeg", alt: "Carpet before and after deep cleaning — Alhaya Dubai" },
  { src: "/images/gallery/before-after-2.jpeg", alt: "Stain removal before and after — carpet cleaning UAE" },
  { src: "/images/gallery/before-after-3.jpeg", alt: "Professional carpet shampoo results — before and after" },
  { src: "/images/gallery/before-after-4.jpeg", alt: "Deep carpet stain removal — before and after by Alhaya" },
  { src: "/images/gallery/before-after-5.jpeg", alt: "Carpet odor and stain removal — before and after" },
  { src: "/images/gallery/action-1.jpeg", alt: "Alhaya technician deep cleaning oriental rug in Dubai" },
  { src: "/images/gallery/before-after-6.jpeg", alt: "Wool carpet deep cleaning before and after" },
  { src: "/images/gallery/before-after-7.jpeg", alt: "Persian rug stain removal before and after — Alhaya" },
  { src: "/images/gallery/before-after-8.jpeg", alt: "Carpet restoration before and after — UAE" },
  { src: "/images/gallery/action-2.jpeg", alt: "Professional carpet cleaning technician with equipment" },
  { src: "/images/gallery/carpet-shampoo-cleaning.webp", alt: "Carpet shampoo deep cleaning service — professional results UAE" },
  { src: "/images/gallery/carpet-cleaning-machine.webp", alt: "Industrial carpet cleaning machine in action — Alhaya Dubai" },
  { src: "/images/gallery/deep-carpet-cleaning-process.webp", alt: "Deep carpet cleaning process — stain and odor removal UAE" },
  { src: "/images/gallery/professional-carpet-cleaning-team.jpeg", alt: "Professional carpet cleaning team — Alhaya Cleaning Services" },
  { src: "/images/gallery/carpet-steam-extraction.jpeg", alt: "Carpet steam extraction cleaning — hot water extraction UAE" },
  { src: "/images/gallery/clean-carpet-result.webp", alt: "Clean carpet result after professional deep cleaning by Alhaya" },
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

      {/* PROCESS */}
      <section className="sec-process">
        <div className="inner">
          <div className="proc-head" data-reveal>
            <div>
              <div className="eyebrow">/ HOW IT WORKS</div>
              <h2 className="sec-title">A meticulous 11-step process, handled end to end.</h2>
            </div>
            <p>From the moment you book to the moment we return your carpet — every stage is tracked, inspected and quality-checked.</p>
          </div>
        </div>

        <div id="process" className="proc-gallery-wrap" data-reveal>
          <InfiniteGallery images={GALLERY_IMAGES} visibleCount={14} speed={1.2} className="proc-gallery" />
          <div className="proc-gallery-cap"><span className="dot" /> DEEP-CLEANED CARPETS · DUBAI · SHARJAH · AJMAN · UAE</div>
        </div>

        <div className="inner">
          <ContainerScroll className="pstack">
            {STEPS.map((s, i) => (
              <CardSticky key={s.n} index={i} incrementY={48} incrementZ={0} topOffset={84} className="proc-card pstack-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="bgimg" src={GALLERY_IMAGES[i % GALLERY_IMAGES.length].src} alt="" loading="lazy" />
                <div className="veil" />
                <div className="topline" />
                <div className="body">
                  <div className="row">
                    <div className="proc-num">{s.n}</div>
                    <span className="step-pill">STEP {s.n}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </CardSticky>
            ))}
          </ContainerScroll>
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
