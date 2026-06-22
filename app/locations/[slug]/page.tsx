import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import { LOCATIONS, getLocation } from "@/lib/locationsData";
import { SERVICES } from "@/lib/servicesData";
import RequestCall from "@/components/RequestCall";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, EMAIL, waHref } from "@/components/constants";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  const title = l.h1;
  const description = `${l.intro}`.slice(0, 320);
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
    image: `${SITE_URL}/images/gallery/action-1.jpeg`,
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
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />

      <main>
        <div className="loc-hero">
          <Image src={l.image} alt={`Carpet cleaning in ${l.name}`} fill sizes="100vw" priority className="loc-hero-bg" />
          <div className="loc-hero-overlay" />
          <section className="sub-hero">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span>
              <Link href="/locations">Service Areas</Link><span className="sep">/</span>
              <span style={{ color: "var(--green)" }}>{l.name}</span>
            </nav>
            <h1>{l.h1}</h1>
            <p className="lead">{l.intro}</p>
            <div className="cta-row">
              <a className="btn-green" href={waHref(`Hi Al Haya, I need carpet cleaning in ${l.name}.`)} target="_blank" rel="noopener">Book in {l.name} →</a>
              <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
              <RequestCall className="btn-outline" />
            </div>
            <div className="area-stats">
              <div className="s"><b>{l.resp}</b><span>Avg. response</span></div>
              <div className="s"><b>{l.cityCount}+</b><span>Areas covered</span></div>
              <div className="s"><b>7 days</b><span>8 AM – 10 PM</span></div>
              <div className="s"><b>100%</b><span>Guarantee</span></div>
            </div>
          </section>
        </div>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 30px" }}>
          <div className="prose">
            {l.body.map((p, i) => (
              <div key={i}>
                <p>{p}</p>
                {i === 0 && (
                  <div className="prose-img">
                    <Image src="/images/services/carpet-service-6.jpeg" alt={`Professional carpet cleaning service in ${l.name}`} width={760} height={420} loading="lazy" style={{ width: "100%", height: "auto" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <h2 className="sec-title" style={{ fontSize: "clamp(20px,2.6vw,28px)", marginTop: 18 }}>Neighbourhoods we cover in {l.name}</h2>
          <div className="chips-row">
            {l.areas.map((a) => <span key={a} className="chip-link"><Icon name="pin" /> {a}</span>)}
          </div>
        </section>

        {/* FAQ */}
        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 30px" }}>
          <h2 className="sec-title" style={{ fontSize: "clamp(22px,3vw,32px)" }}>Frequently Asked Questions — {l.name}</h2>
          {l.faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {/* Services offered here */}
        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 30px" }}>
          <h2 className="sec-title" style={{ fontSize: "clamp(22px,3vw,32px)" }}>Our services in {l.name}</h2>
          <div className="rel-grid rel-grid--img">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="rel-card rel-card--img">
                <div className="rel-card-img">
                  <Image src={s.cardImg} alt={`${s.name} in ${l.name} — Al Haya Carpet Cleaning`} fill sizes="(max-width:600px) 100vw,(max-width:900px) 50vw,33vw" />
                </div>
                <div className="rel-card-content">
                  <div className="ic"><Icon name={s.icon} /></div>
                  <h3>{s.name}</h3>
                  <p>{s.intro.slice(0, 100)}…</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Other emirates */}
        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 70px" }}>
          <h2 className="sec-title" style={{ fontSize: "clamp(20px,2.6vw,28px)" }}>Other emirates we serve</h2>
          <div className="chips-row">
            {others.map((o) => (
              <Link key={o.slug} href={`/locations/${o.slug}`} className="chip-link"><Icon name="pin" /> Carpet Cleaning {o.name}</Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <Fab />
    </div>
  );
}
