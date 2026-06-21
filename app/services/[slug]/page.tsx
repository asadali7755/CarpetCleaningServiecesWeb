import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import { SERVICES, getService } from "@/lib/servicesData";
import { LOCATIONS } from "@/lib/locationsData";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, EMAIL, waHref } from "@/components/constants";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const title = s.h2;
  const description = `${s.intro} Free quote · ${PHONE_DISPLAY}.`.slice(0, 320);
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

  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />

      <main>
        <section className="sub-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <Link href="/services">Services</Link><span className="sep">/</span>
            <span style={{ color: "var(--green)" }}>{s.name}</span>
          </nav>
          <h1>{s.h2}</h1>
          <p className="lead">{s.intro}</p>
          <div className="cta-row">
            <a className="btn-green" href={waHref(`Hello, I'd like a quote for ${s.name}.`)} target="_blank" rel="noopener">Get a free quote →</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </section>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 30px" }}>
          <div className="svc-shot">
            <Image src={s.img} alt={`${s.name} — ${BRAND} Dubai UAE`} width={1280} height={720} loading="lazy" style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="prose">
            {s.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <ul className="feat-list">
            {s.feat.map((f) => (
              <li key={f.t}>
                <span className="ic"><Icon name="check" /></span>
                <div><b>{f.t}</b><p>{f.d}</p></div>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 30px" }}>
          <h2 className="sec-title" style={{ fontSize: "clamp(22px,3vw,32px)" }}>Frequently Asked Questions</h2>
          {s.faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {/* Areas */}
        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 30px" }}>
          <h2 className="sec-title" style={{ fontSize: "clamp(22px,3vw,32px)" }}>{s.name} across the UAE</h2>
          <div className="chips-row">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="chip-link"><Icon name="pin" /> {s.name} {l.name}</Link>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 70px" }}>
          <h2 className="sec-title" style={{ fontSize: "clamp(22px,3vw,32px)" }}>Other services</h2>
          <div className="rel-grid">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="rel-card">
                <div className="ic"><Icon name={r.icon} /></div>
                <h3>{r.name}</h3>
                <p>{r.intro.slice(0, 100)}…</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <Fab />
    </div>
  );
}
