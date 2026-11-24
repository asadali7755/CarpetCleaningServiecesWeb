import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RevealInit from "@/components/RevealInit";
import PageHero from "@/components/PageHero";
import PhotoStrip from "@/components/PhotoStrip";
import ProcessSteps from "@/components/ProcessSteps";
import QuoteCallSection from "@/components/QuoteCallSection";
import RequestCall from "@/components/RequestCall";
import { Icon } from "@/components/Icons";
import { LOCATIONS, getLocation, locationAnchor } from "@/lib/locationsData";
import { SERVICES } from "@/lib/servicesData";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, EMAIL, waHref } from "@/components/constants";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  const title = l.h1;
  const description = l.metaDesc;
  const url = `${SITE_URL}/locations/${l.slug}`;
  return {
    title,
    description,
    keywords: `carpet cleaning ${l.name}, rug cleaning ${l.name}, sofa cleaning ${l.name}, mattress cleaning ${l.name}`,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: l.image, width: 1200, height: 630, alt: `Carpet cleaning ${l.name}` }] },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();

  const url = `${SITE_URL}/locations/${l.slug}`;
  const others = LOCATIONS.filter((x) => x.slug !== l.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${BRAND} — ${l.name}`,
    description: l.intro,
    url,
    telephone: PHONE_TEL,
    email: EMAIL,
    priceRange: "$$",
    image: `${SITE_URL}/images/gallery/professional-carpet-cleaning-technician-dubai.webp`,
    areaServed: { "@type": "City", name: l.name },
    address: { "@type": "PostalAddress", addressLocality: l.name, addressRegion: l.name, addressCountry: "AE" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/locations` },
      { "@type": "ListItem", position: 3, name: l.name, item: url },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: l.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="page rp">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />

      <main>
        <PageHero
          variant="banner"
          bg={l.image}
          bgAlt={`Carpet cleaning in ${l.name}`}
          crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/locations" }, { label: l.name }]}
          eyebrow={`Service area · ${l.name}`}
          title={l.h1}
          lead={l.intro}
          actions={
            <>
              <a className="rb-gold" href={waHref(`Hi Al Haya, I need carpet cleaning in ${l.name}.`)} target="_blank" rel="noopener"><Icon name="whatsapp" /> Book in {l.name}</a>
              <a className="rb-line" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
              <RequestCall className="rb-line" />
            </>
          }
          media={
            <div className="lp-stats" data-stagger>
              <div className="lp-stat"><b>{l.resp}</b><span>Avg. response</span></div>
              <div className="lp-stat"><b>{l.cityCount}+</b><span>Areas covered</span></div>
              <div className="lp-stat"><b>7 days</b><span>8 AM – 10 PM</span></div>
              <div className="lp-stat"><b>100%</b><span>Guarantee</span></div>
            </div>
          }
        />

        {/* Magazine-style text */}
        <section className="rh-sec">
          <div className="rh-wrap">
            {l.seeAlso && (
              <div className="lp-see" data-stagger>
                {l.seeAlso.map((s) => (
                  <Link key={s.href} href={s.href}>
                    <Icon name="arrow" />
                    <span><small>{s.before}</small>{s.label}</span>
                  </Link>
                ))}
              </div>
            )}
            <div className="mg-grid">
              {l.body.map((p, i) => (
                <p key={i} data-reveal={i === 0 ? "flip" : "blur"}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Real work strip */}
        <section className="rh-strip-sec" style={{ paddingBottom: 30 }}>
          <p className="rh-strip-label"><span className="rh-dot" /> Real photos from our jobs</p>
          <PhotoStrip />
        </section>

        {/* Neighbourhoods — pills pop in */}
        <section className="rh-sec">
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">Neighbourhoods</p>
              <h2 className="rh-h2">Neighbourhoods we cover in {l.name}</h2>
            </div>
            <ul className="nb-grid" data-stagger>
              {l.areas.map((a) => <li key={a}><Icon name="pin" /> {a}</li>)}
            </ul>
          </div>
        </section>

        {/* Services in this emirate — tilt cards */}
        <section className="rh-sec rh-services">
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">What we clean</p>
              <h2 className="rh-h2">Our services in {l.name}</h2>
            </div>
            <div className="rh-svc-grid">
              {SERVICES.map((s, i) => (
                <Link className="rh-svc tilt" data-reveal="zoom" key={s.slug} href={`/services/${s.slug}`}>
                  <div className="rh-svc-img">
                    <Image src={s.cardImg} alt={`${s.name} in ${l.name} — Al Haya Carpet Cleaning`} fill sizes="(max-width:600px) 100vw,(max-width:1000px) 50vw,33vw" />
                    <span className="rh-svc-num">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="rh-svc-body">
                    <h3>{s.name}</h3>
                    <p>{s.intro}</p>
                    <div className="rh-svc-foot"><span className="rh-more">Explore <Icon name="arrow" /></span></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ProcessSteps title={`Booking in ${l.name}`} />

        {/* FAQ — question cards */}
        <section className="rh-sec">
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">FAQ</p>
              <h2 className="rh-h2">Frequently Asked Questions — {l.name}</h2>
            </div>
            <div className="fc-grid" data-stagger>
              {l.faqs.map((f) => (
                <div className="fc-card" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other emirates — swipe row */}
        <section className="rh-sec rh-areas">
          <div className="rh-wrap">
            <div className="rh-head" data-reveal>
              <p className="rh-eyebrow">Coverage</p>
              <h2 className="rh-h2">Other emirates we serve</h2>
            </div>
            <div className="em-row">
              {others.map((o) => (
                <Link key={o.slug} href={`/locations/${o.slug}`} className="rh-area">
                  <Image src={o.image} alt={locationAnchor(o)} fill sizes="260px" />
                  <span className="rh-area-body">
                    <b>{locationAnchor(o)}</b>
                    <small><Icon name="pin" /> {o.resp} response</small>
                  </span>
                </Link>
              ))}
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
