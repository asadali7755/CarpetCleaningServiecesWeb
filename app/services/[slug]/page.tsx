import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RevealInit from "@/components/RevealInit";
import PageHero from "@/components/PageHero";
import AutoVideo from "@/components/AutoVideo";
import BeforeAfter from "@/components/BeforeAfter";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBand from "@/components/CtaBand";
import RequestCall from "@/components/RequestCall";
import { Icon } from "@/components/Icons";
import { SERVICES, getService } from "@/lib/servicesData";
import { LOCATIONS } from "@/lib/locationsData";
import { SERVICE_MEDIA, FRAMES } from "@/lib/media";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, EMAIL, waHref } from "@/components/constants";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const title = s.h2;
  const description = s.metaDesc;
  const url = `${SITE_URL}/services/${s.slug}`;
  return {
    title,
    description,
    keywords: s.kw.replace(/ · /g, ", "),
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: s.img, width: 1200, height: 630, alt: s.name }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const url = `${SITE_URL}/services/${s.slug}`;
  const related = SERVICES.filter((x) => x.slug !== s.slug);
  const media = SERVICE_MEDIA[s.slug] || {};
  const pairs = media.pairs || (media.pair ? [media.pair] : []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.name,
    name: s.h2,
    description: s.intro,
    url,
    image: `${SITE_URL}${s.img}`,
    provider: { "@type": "LocalBusiness", name: BRAND, telephone: PHONE_TEL, email: EMAIL, url: SITE_URL, priceRange: "$$" },
    areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: l.name })),
    offers: { "@type": "Offer", priceCurrency: "AED", availability: "https://schema.org/InStock" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: s.name, item: url },
    ],
  };

  // Hero media: a real job video when we have one, otherwise the service image.
  const heroMedia = media.clip ? (
    <div className="ph-frame ph-frame-video">
      <AutoVideo src={media.clip.src} poster={media.clip.poster} label={media.clip.label} eager />
      <span className="rh-live"><i /> Real job video</span>
      <span className="ph-float-card"><Icon name="leaf" /> Eco-friendly, safe for kids &amp; pets</span>
    </div>
  ) : (
    <div className="ph-frame ph-frame-img">
      <Image src={s.img} alt={`${s.name} — ${BRAND} Dubai UAE`} fill priority sizes="(max-width:1000px) 100vw, 560px" className="kb" />
      <span className="ph-float-card"><Icon name="leaf" /> Eco-friendly, safe for kids &amp; pets</span>
    </div>
  );

  const half = Math.ceil(s.body.length / 2);

  return (
    <div className="page rp">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />

      <main>
        <PageHero
          variant="split"
          crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: s.name }]}
          eyebrow={`Service ${s.num}`}
          title={s.h2}
          lead={s.intro}
          actions={
            <>
              <a className="rb-gold" href={waHref(`Hello, I'd like a quote for ${s.name}.`)} target="_blank" rel="noopener"><Icon name="whatsapp" /> Get a free quote</a>
              <a className="rb-line" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
              <RequestCall className="rb-line" />
            </>
          }
          chips={["Trained & background-checked", "At your home or office", "Same-day slots"]}
          media={heroMedia}
        />

        {/* Highlights — glass cards that flip in one by one */}
        <section className="hl">
          <div className="rh-wrap">
            <ul className="hl-grid" data-stagger>
              {s.feat.map((f) => (
                <li key={f.t} className="hl-card">
                  <span className="rh-ic"><Icon name="check" /></span>
                  <b>{f.t}</b>
                  <p>{f.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Article with a sticky quote card */}
        <section className="rh-sec ar">
          <div className="rh-wrap ar-grid">
            <article className="ar-body">
              <p className="rh-eyebrow" data-reveal>About this service</p>
              {s.body.slice(0, half).map((p, i) => (
                <p key={i} className={i === 0 ? "ar-first" : undefined} data-reveal="blur">{p}</p>
              ))}
              {s.images[0] && (
                <figure className="ar-img" data-reveal="clip">
                  <Image src={s.images[0]} alt={`${s.name} — carpet cleaning in Dubai`} width={760} height={420} loading="lazy" sizes="(max-width:900px) 100vw, 720px" />
                </figure>
              )}
              {s.body.slice(half).map((p, i) => (
                <p key={i} data-reveal="blur">{p}</p>
              ))}
            </article>
            <aside className="ar-side">
              <div className="ar-card">
                <div className="ar-card-img">
                  <Image src={FRAMES.rug.src} alt={FRAMES.rug.alt} fill sizes="340px" />
                </div>
                <b>Free quote in minutes</b>
                <p>Send a photo of your {s.name.toLowerCase()} job on WhatsApp and we reply with a quote.</p>
                <a className="rb-gold" href={waHref(`Hello, I'd like a quote for ${s.name}.`)} target="_blank" rel="noopener"><Icon name="whatsapp" /> WhatsApp us</a>
                <a className="ar-call" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> {PHONE_DISPLAY}</a>
              </div>
            </aside>
          </div>
        </section>

        {/* Real before / after */}
        {pairs.length > 0 && (
          <section className="rh-sec rh-results">
            <div className="rh-wrap rh-results-grid">
              <div data-reveal="left">
                <p className="rh-eyebrow">Real result</p>
                <h2 className="rh-h2">Before &amp; after from our own jobs</h2>
                <p className="rh-sub">Drag the handle to compare. These are photos from our team&apos;s work, not stock images.</p>
              </div>
              <div data-reveal="right"><BeforeAfter pairs={pairs} /></div>
            </div>
          </section>
        )}

        <ProcessSteps />

        {s.specialist && (
          <section className="rh-sec sp">
            <div className="rh-wrap">
              <div className="sp-card" data-reveal="zoom">
                <p>{s.specialist.lead}</p>
                <div className="rh-cta">
                  <a className="rb-gold" href={s.specialist.href}>{s.specialist.label} →</a>
                  {s.specialist.links.map((l) => (
                    <a key={l.href} className="rb-line" href={l.href}>{l.label}</a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ — numbered accordion */}
        <section className="rh-sec fq">
          <div className="rh-wrap fq-grid">
            <div className="fq-head" data-reveal="left">
              <p className="rh-eyebrow">FAQ</p>
              <h2 className="rh-h2">Frequently Asked Questions</h2>
              <p className="rh-sub">Still unsure? Ask us on WhatsApp — we usually reply quickly.</p>
            </div>
            <div className="fq-list" data-stagger>
              {s.faqs.map((f, i) => (
                <details className="rh-qa fq-item" key={f.q}>
                  <summary><span className="fq-n">{String(i + 1).padStart(2, "0")}</span>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Areas — moving pills */}
        <section className="rh-sec ap">
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">Where we work</p>
              <h2 className="rh-h2">{s.name} across the UAE</h2>
            </div>
          </div>
          <div className="ap-rail">
            <div className="ap-track">
              {[...LOCATIONS, ...LOCATIONS].map((l, i) => (
                <Link
                  key={`${l.slug}-${i}`}
                  href={`/locations/${l.slug}`}
                  className="ap-pill"
                  aria-hidden={i >= LOCATIONS.length ? "true" : undefined}
                  tabIndex={i >= LOCATIONS.length ? -1 : undefined}
                >
                  <Icon name="pin" /> {s.name} {l.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related — swipe slider */}
        <section className="rh-sec rl">
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">More services</p>
              <h2 className="rh-h2">Other services</h2>
            </div>
            <div className="rl-slider">
              {related.map((r) => (
                <Link key={r.slug} href={`/services/${r.slug}`} className="rl-card tilt">
                  <div className="rl-img">
                    <Image src={r.cardImg} alt={`${r.name} — Al Haya Carpet Cleaning`} fill sizes="(max-width:600px) 80vw, 320px" />
                  </div>
                  <div className="rl-body">
                    <span className="rh-ic"><Icon name={r.icon} /></span>
                    <h3>{r.name}</h3>
                    <p>{r.intro.slice(0, 100)}…</p>
                    <span className="rh-more">Explore <Icon name="arrow" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand msg={`Hello, I'd like a quote for ${s.name}.`} />
      </main>

      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
