import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RevealInit from "@/components/RevealInit";
import HeroEnquiryCard from "@/components/HeroEnquiryCard";
import AutoVideo from "@/components/AutoVideo";
import BeforeAfter, { type BAPair } from "@/components/BeforeAfter";
import PhotoStrip from "@/components/PhotoStrip";
import CarpetBackdrop from "@/components/CarpetBackdrop";
import { Icon } from "@/components/Icons";
import { PHONE_DISPLAY, PHONE_TEL, waHref, SITE_URL, BRAND, EMAIL } from "@/components/constants";
import { SERVICES } from "@/lib/servicesData";
import { LOCATIONS, locationAnchor } from "@/lib/locationsData";

const PRICES: Record<string, string> = {
  "carpet-cleaning": "25/sq meter",
  "stain-removal": "100",
  "odor-removal": "200",
  "rug-cleaning": "150",
  "commercial-carpet-cleaning": "15/sq meter",
  "sofa-upholstery-cleaning": "120",
};

const FAQS = [
  { q: "How long does it take for the carpet to dry?", a: "Most of the water is taken out during the rinse, so your carpet will be dry, fresh, and ready to walk on within 2 to 4 hours, depending on your indoor AC settings and room ventilation." },
  { q: "Do you provide carpet cleaning services outside of Dubai?", a: "Yes, we provide comprehensive commercial and residential carpet cleaning services all over the UAE. Our mobile teams travel directly to your villa, apartment, or office building in Abu Dhabi, Sharjah, Ajman, Al Ain, Fujairah, and Ras Al Khaimah." },
  { q: "Are your cleaning chemicals safe for pets and children?", a: "Absolutely. At Alhaya Cleaning Services, we prioritize your family's health. All of our deep shampooing and carpet odor removing products are completely non-toxic, eco-friendly, and biodegradable." },
  { q: "What types of carpets and rugs can you clean?", a: "We handle all fabric types — Persian and Oriental rugs with pH-neutral hand wash, wool carpets with low-temperature extraction, shaggy deep pile rugs with deep agitation, and synthetic nylon/polyester carpets with high-pressure deep shampoo extraction." },
  { q: "How much does carpet cleaning cost?", a: "Pricing depends on carpet size, fabric type, and level of soiling. Synthetic carpets are the quickest to clean; wool needs wool-safe products and more time, and Persian, handmade and silk rugs need a slow, low-moisture hand clean. Heavy stains such as coffee, karak, oil or pet marks can need extra treatment. Combining carpet, rug and sofa cleaning in one visit also saves a second trip. We provide a transparent, fixed quote before starting — no hidden charges. Call or WhatsApp 0551275545 for a free estimate." },
];

// Real job photos from the team (Madinat Alhaya / Al Haya), cropped from the
// before/after posts. Keep this list to real photos only.
const RESULTS: BAPair[] = [
  { before: "/media/ba-extraction-before.jpg", after: "/media/ba-extraction-after.jpg", title: "Deep extraction and rinse — living-room carpet", w: 577, h: 683 },
  { before: "/media/ba-shampoo-before.jpg", after: "/media/ba-shampoo-after.jpg", title: "Deep shampoo and scrubbing — fitted carpet", w: 540, h: 690 },
  { before: "/media/ba-spot-stain-before.jpg", after: "/media/ba-spot-stain-after.jpg", title: "Spot stain removal and deep extraction", w: 553, h: 650 },
  { before: "/media/ba-deep-clean-before.jpg", after: "/media/ba-deep-clean-after.jpg", title: "Deep cleaning of a heavily soiled carpet", w: 580, h: 390 },
];

const CLIPS = [
  { src: "/media/rug-shampoo-machine-dubai.mp4", poster: "/media/rug-shampoo-machine-dubai-poster.webp", label: "Rotary shampoo on a living-room rug", tag: "Rug shampoo", wide: true },
  { src: "/media/fitted-carpet-extraction-dubai.mp4", poster: "/media/fitted-carpet-extraction-dubai-poster.webp", label: "Hot-water extraction on a fitted carpet", tag: "Extraction", wide: false },
  { src: "/media/office-carpet-shampoo-uae.mp4", poster: "/media/office-carpet-shampoo-uae-poster.webp", label: "Shampoo machine on an office carpet", tag: "Office carpet", wide: false },
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
    <div className="page rp rp-home">
      <CarpetBackdrop />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Nav />

      {/* HERO */}
      <section className="rh-hero">
        <div className="rh-hero-glow" aria-hidden="true" />
        <div className="rh-wrap rh-hero-grid">
          <div className="rh-hero-copy">
            <p className="rh-kicker"><span className="rh-dot" /> Dubai · Sharjah · Ajman · all 7 emirates</p>
            <h1 className="rh-h1">Carpet Cleaning in <em>Dubai</em> &amp; the UAE</h1>
            <p className="rh-lead">
              Expert carpet, rug and upholstery cleaning across all 7 UAE Emirates. Deep shampoo extraction,
              stubborn stain removal, and odor treatment — fast drying, eco-friendly, and fully transparent pricing.
            </p>
            <div className="rh-cta">
              <a className="rb-gold" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> Get Free Quote</a>
              <a className="rb-line" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call Now</a>
            </div>
            <ul className="rh-chips">
              <li><Icon name="check" /> Trained &amp; Background-Checked</li>
              <li><Icon name="leaf" /> Eco-Friendly Products</li>
              <li><Icon name="clock" /> Same-Day Available</li>
            </ul>
            <a href="#results" className="rh-proof">
              <span className="rh-proof-img">
                <Image src="/media/ba-extraction-after.jpg" alt="Carpet after deep extraction by our team" fill sizes="64px" />
              </span>
              <span><b>See real before &amp; after</b><small>Photos and videos from our own jobs</small></span>
              <Icon name="arrow" />
            </a>
          </div>

          <div className="rh-hero-media">
            <div className="rh-frame rh-frame-main">
              <AutoVideo src={CLIPS[0].src} poster={CLIPS[0].poster} label={CLIPS[0].label} eager />
              <span className="rh-live"><i /> Real job video</span>
            </div>
            <div className="rh-frame rh-frame-side">
              <AutoVideo src={CLIPS[1].src} poster={CLIPS[1].poster} label={CLIPS[1].label} />
            </div>
            <div className="rh-hero-form">
              <HeroEnquiryCard />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="rh-trust">
        <div className="rh-wrap rh-trust-grid">
          <div className="rh-trust-item"><span className="rh-ic"><Icon name="clock" /></span><span>Same Day Service<small>Book today, cleaned today</small></span></div>
          <div className="rh-trust-item"><span className="rh-ic"><Icon name="leaf" /></span><span>Eco-Friendly<small>Safe for family &amp; pets</small></span></div>
          <div className="rh-trust-item"><span className="rh-ic"><Icon name="pin" /></span><span>7 Emirates<small>Complete UAE coverage</small></span></div>
          <div className="rh-trust-item"><span className="rh-ic"><Icon name="check" /></span><span>Satisfaction Guaranteed<small>100% happiness promise</small></span></div>
        </div>
      </section>

      {/* STATS */}
      <section className="rh-stats">
        <div className="rh-wrap rh-stats-grid">
          <div className="rh-stat"><b>7</b><span>UAE Emirates Covered</span></div>
          <div className="rh-stat"><b>2-4<small>hrs</small></b><span>Average Dry Time</span></div>
          <div className="rh-stat"><b>Free</b><span>Quote on WhatsApp</span></div>
        </div>
      </section>

      {/* PHOTO STRIP — real jobs, endless slide */}
      <section className="rh-strip-sec">
        <p className="rh-strip-label"><span className="rh-dot" /> From our recent jobs</p>
        <PhotoStrip />
      </section>

      {/* BEFORE / AFTER — real photos */}
      <section id="results" className="rh-sec rh-results">
        <div className="rh-wrap rh-results-grid">
          <div className="rh-results-copy" data-reveal="left">
            <p className="rh-eyebrow">Results</p>
            <h2 className="rh-h2">See The Difference</h2>
            <p className="rh-sub">Real before and after photos from our own carpet cleaning jobs. Drag the handle to compare.</p>
            <ul className="rh-ticks">
              <li><Icon name="check" /> Sand, dust and grime lifted from the pile</li>
              <li><Icon name="check" /> Traffic lanes and spot stains treated</li>
              <li><Icon name="check" /> Done at your home or office</li>
            </ul>
            <a className="rb-gold" href={waHref("Hi, I'd like a free quote. Here are photos of my carpet:")} target="_blank" rel="noopener"><Icon name="whatsapp" /> Send us a photo</a>
          </div>
          <div data-reveal="right">
            <BeforeAfter pairs={RESULTS} />
          </div>
        </div>
      </section>

      {/* VIDEOS — real jobs */}
      <section className="rh-sec rh-videos">
        <div className="rh-wrap">
          <div className="rh-head" data-reveal>
            <p className="rh-eyebrow">Watch us work</p>
            <h2 className="rh-h2">Real jobs, filmed by our team</h2>
          </div>
          <div className="rh-video-grid">
            {CLIPS.map((c) => (
              <figure key={c.src} className={`rh-video${c.wide ? " wide" : ""}`} data-reveal="zoom">
                <AutoVideo src={c.src} poster={c.poster} label={c.label} />
                <figcaption><span>{c.tag}</span>{c.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="rh-sec rh-services">
        <div className="rh-wrap">
          <div className="rh-head" data-reveal>
            <p className="rh-eyebrow">Our services</p>
            <h2 className="rh-h2">Specialist carpet care, done right.</h2>
          </div>
          <div className="rh-svc-grid">
            {SERVICES.map((s, i) => (
              <Link className="rh-svc" data-reveal key={s.slug} href={`/services/${s.slug}`}>
                <div className="rh-svc-img">
                  <Image src={s.cardImg} alt={`${s.name} service — Al Haya Carpet Cleaning Dubai`} fill sizes="(max-width:600px) 100vw,(max-width:1000px) 50vw,33vw" />
                  <span className="rh-svc-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="rh-svc-body">
                  <h3>{s.name}</h3>
                  <p>{s.intro}</p>
                  <div className="rh-svc-foot">
                    <span className="rh-price">Starting from AED {PRICES[s.slug]}</span>
                    <span className="rh-more">Explore <Icon name="arrow" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="rh-sec rh-why">
        <div className="rh-wrap rh-why-grid">
          <div className="rh-why-media" data-reveal="left">
            <Image src="/media/rug-shampoo-lather-dubai.jpg" alt="Our technician shampooing a rug with a rotary machine" fill sizes="(max-width:900px) 100vw, 560px" />
            <span className="rh-why-badge"><Icon name="leaf" /> Eco-friendly products, safe for kids &amp; pets</span>
          </div>
          <div data-reveal="right">
            <p className="rh-eyebrow">Why us</p>
            <h2 className="rh-h2">Why Choose Al Haya</h2>
            <div className="rh-why-list">
              <div className="rh-why-item">
                <span className="rh-ic"><Icon name="clipboard" /></span>
                <div><h3>Transparent Pricing</h3><p>Fixed, upfront quotes before we start — no hidden charges, no surprise fees after the job is done.</p></div>
              </div>
              <div className="rh-why-item">
                <span className="rh-ic"><Icon name="shield" /></span>
                <div><h3>Trained, Checked Team</h3><p>Trained, background-checked technicians who come to your home or office and follow the same careful process on every job.</p></div>
              </div>
              <div className="rh-why-item">
                <span className="rh-ic"><Icon name="leaf" /></span>
                <div><h3>Eco-Friendly Products</h3><p>Non-toxic, biodegradable, child-safe and pet-safe solutions used across every carpet, rug and upholstery service.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="rh-sec rh-areas">
        <div className="rh-wrap">
          <div className="rh-head" data-reveal>
            <p className="rh-eyebrow">Coverage</p>
            <h2 className="rh-h2">Serving All 7 Emirates</h2>
          </div>
          <div className="rh-area-grid">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="rh-area" data-reveal="zoom">
                <Image src={l.image} alt={locationAnchor(l)} fill sizes="(max-width:600px) 50vw,(max-width:1000px) 33vw,25vw" />
                <span className="rh-area-body">
                  <b>{locationAnchor(l)}</b>
                  <small><Icon name="pin" /> {l.resp} response · {l.cityCount}+ areas</small>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rh-sec rh-faq">
        <div className="rh-wrap rh-faq-grid">
          <div className="rh-faq-side" data-reveal="left">
            <p className="rh-eyebrow">FAQ</p>
            <h2 className="rh-h2">Frequently Asked Questions</h2>
            <div className="rh-faq-card">
              <div className="rh-faq-card-img">
                <Image src="/media/fitted-carpet-clean-strip-dubai.jpg" alt="Clean strip left by extraction on a fitted carpet" fill sizes="360px" />
              </div>
              <p>Not sure what your carpet needs? Send a photo on WhatsApp and we will tell you.</p>
              <a className="rb-gold" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> Ask on WhatsApp</a>
            </div>
          </div>
          <div data-reveal>
            {FAQS.map((f) => (
              <details className="rh-qa" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rh-sec rh-cta-sec">
        <div className="rh-wrap">
          <div className="rh-cta-card" data-reveal="zoom">
            <div className="rh-cta-media" aria-hidden="true">
              <Image src="/media/ba-extraction-after.jpg" alt="" fill sizes="(max-width:900px) 100vw, 40vw" />
            </div>
            <div className="rh-cta-copy">
              <h2>Ready for a Spotless Carpet?</h2>
              <p>Don&apos;t live with hidden sand, stubborn stains, or musty odors. Book carpet cleaning at your home or office anywhere in the Emirates.</p>
              <div className="rh-cta">
                <a className="rb-gold" href={waHref()} target="_blank" rel="noopener">Get a Free Quote →</a>
                <a className="rb-ghost" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
              </div>
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
