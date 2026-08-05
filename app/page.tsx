import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RevealInit from "@/components/RevealInit";
import { Icon } from "@/components/Icons";
import { PHONE_DISPLAY, PHONE_TEL, waHref, SITE_URL, BRAND, EMAIL } from "@/components/constants";
import { SERVICES } from "@/lib/servicesData";
import { LOCATIONS } from "@/lib/locationsData";

const PRICES: Record<string, string> = {
  "carpet-cleaning": "25/sq meter",
  "stain-removal": "100",
  "odor-removal": "200",
  "rug-cleaning": "150",
  "commercial-carpet-cleaning": "15/sq meter",
  "sofa-upholstery-cleaning": "120",
};

const ACCENTS = ["teal", "coral", "purple", "green"];

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
      <section className="hero">
        <div className="hero-col">
          <div className="hero-badge"><Icon name="star" /> Rated 4.9/5 by 500+ Customers</div>
          <h1 className="grad-text">Professional Carpet Cleaning Dubai</h1>
          <p className="hero-lead">
            Expert carpet, rug and upholstery cleaning across all 7 UAE Emirates. Deep shampoo extraction,
            stubborn stain removal, and odor treatment — fast drying, eco-friendly, and fully transparent pricing.
          </p>
          <div className="hero-cta">
            <a className="btn-cta" href={waHref()} target="_blank" rel="noopener">Get Free Quote</a>
            <a className="btn-outline btn-teal" href={`tel:${PHONE_TEL}`}>Call Now</a>
          </div>
          <div className="hero-trust">
            <span className="trust-green"><Icon name="check" /> Licensed &amp; Insured</span>
            <span className="trust-green"><Icon name="check" /> Eco-Friendly Products</span>
            <span className="trust-teal"><Icon name="check" /> Same-Day Available</span>
          </div>
        </div>
        <div className="hero-col hero-img-col">
          <Image
            src="/images/gallery/professional-carpet-cleaning-technician-dubai.webp"
            alt="Professional carpet cleaning technician deep cleaning a carpet in Dubai"
            fill
            priority
            sizes="(max-width:900px) 100vw, 45vw"
          />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="inner">
          <div className="trust-item"><Icon name="clock" /><span>Same Day Service<small>Book today, cleaned today</small></span></div>
          <div className="trust-item"><Icon name="leaf" /><span>Eco-Friendly<small>Safe for family &amp; pets</small></span></div>
          <div className="trust-item"><Icon name="pin" /><span>7 Emirates<small>Complete UAE coverage</small></span></div>
          <div className="trust-item"><Icon name="check" /><span>Satisfaction Guaranteed<small>100% happiness promise</small></span></div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="inner">
          <div className="stat"><div className="stat-num">7</div><div className="stat-label">UAE Emirates Covered</div></div>
          <div className="stat"><div className="stat-num">2-4<small>hrs</small></div><div className="stat-label">Average Dry Time</div></div>
          <div className="stat"><div className="stat-num">500+</div><div className="stat-label">Happy Customers</div></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="sec-services">
        <div className="inner">
          <div className="svc-head" data-reveal>
            <div className="eyebrow teal">/ OUR SERVICES</div>
            <h2 className="sec-title grad-text">Specialist carpet care, done right.</h2>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <Link
                className={`svc-card svc-card-${ACCENTS[i % ACCENTS.length]}`}
                data-reveal
                key={s.slug}
                href={`/services/${s.slug}`}
              >
                <div className="svc-card-icon"><Icon name={s.icon} /></div>
                <h3>{s.name}</h3>
                <p>{s.intro}</p>
                <div className="svc-card-price">Starting from AED {PRICES[s.slug]}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="sec-cream before-after">
        <div className="inner">
          <div className="svc-head" data-reveal>
            <div className="eyebrow coral">/ RESULTS</div>
            <h2 className="sec-title grad-text">See The Difference</h2>
          </div>
          <div className="ba-wrap" data-reveal>
            <div className="ba-panel ba-before">
              <span className="ba-label">BEFORE</span>
            </div>
            <div className="ba-divider"><Icon name="sparkle" /></div>
            <div className="ba-panel ba-after">
              <span className="ba-label">AFTER</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS / WHY CHOOSE US */}
      <section className="sec-lavender">
        <div className="inner">
          <div className="svc-head" data-reveal>
            <div className="eyebrow purple">/ WHY US</div>
            <h2 className="sec-title grad-text">Why Choose Al Haya</h2>
          </div>
          <div className="process-grid" data-reveal>
            <div className="process-item">
              <div className="process-icon"><Icon name="clipboard" /></div>
              <h3>Transparent Pricing</h3>
              <p>Fixed, upfront quotes before we start — no hidden charges, no surprise fees after the job is done.</p>
            </div>
            <div className="process-item">
              <div className="process-icon"><Icon name="shield" /></div>
              <h3>Certified Professionals</h3>
              <p>Trained, background-checked technicians who follow a consistent, quality-controlled cleaning process on every job.</p>
            </div>
            <div className="process-item">
              <div className="process-icon"><Icon name="leaf" /></div>
              <h3>Eco-Friendly Products</h3>
              <p>Non-toxic, biodegradable, child-safe and pet-safe solutions used across every carpet, rug and upholstery service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="sec-areas sec-mint">
        <div className="inner">
          <div className="svc-head" data-reveal>
            <div className="eyebrow teal">/ COVERAGE</div>
            <h2 className="sec-title grad-text">Serving All 7 Emirates</h2>
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
            <div className="eyebrow purple">/ FAQ</div>
            <h2 className="sec-title grad-text">Frequently Asked Questions</h2>
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
            <h2>Ready for a Spotless Carpet?</h2>
            <p>Don&apos;t live with hidden sand, stubborn stains, or musty odors. Book the top-rated residential and commercial carpet cleaning specialists in the Emirates.</p>
            <div className="row">
              <a className="btn-cta" href={waHref()} target="_blank" rel="noopener">Get a Free Quote →</a>
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
