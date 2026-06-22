import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import { GUIDES, getGuide } from "@/lib/guidesData";
import RequestCall from "@/components/RequestCall";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, waHref } from "@/components/constants";

const GUIDE_IMAGES = [
  "/images/services/carpet-service-10.jpeg",
  "/images/services/carpet-service-7.jpeg",
  "/images/services/carpet-service-6.jpeg",
  "/images/gallery/action-2.jpeg",
  "/images/services/carpet-service-8.jpeg",
  "/images/gallery/carpet-cleaning-machine.webp",
  "/images/gallery/professional-carpet-cleaning-team.jpeg",
  "/images/gallery/carpet-steam-extraction.jpeg",
];

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  const url = `${SITE_URL}/guides/${g.slug}`;
  return {
    title: g.title,
    description: g.description,
    keywords: g.kw.join(", "),
    alternates: { canonical: url },
    openGraph: { title: g.title, description: g.description, url },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const url = `${SITE_URL}/guides/${g.slug}`;
  const others = GUIDES.filter((x) => x.slug !== g.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.h1,
    description: g.description,
    author: { "@type": "Organization", name: BRAND, url: SITE_URL },
    publisher: { "@type": "Organization", name: BRAND, url: SITE_URL },
    mainEntityOfPage: url,
    datePublished: "2026-06-21",
    dateModified: "2026-06-21",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: g.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: g.title, item: url },
    ],
  };

  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />

      <main>
        <section className="sub-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <Link href="/guides">Guides</Link><span className="sep">/</span>
            <span style={{ color: "var(--green)" }}>{g.title.split("—")[0].trim()}</span>
          </nav>
          <h1>{g.h1}</h1>
          <p className="lead">{g.description}</p>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get a free quote →</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            <RequestCall className="btn-outline" />
          </div>
        </section>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 30px" }}>
          <div className="about-hero-img" style={{ marginBottom: 28 }}>
            <Image src={GUIDE_IMAGES[GUIDES.findIndex((x) => x.slug === g.slug) % GUIDE_IMAGES.length]} alt={`${g.title} — Al Haya Carpet Cleaning Dubai`} width={1280} height={520} loading="lazy" style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="prose">
            {g.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        {/* FAQ */}
        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 30px" }}>
          <h2 className="sec-title" style={{ fontSize: "clamp(22px,3vw,32px)" }}>Frequently Asked Questions</h2>
          {g.faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        {/* Other guides */}
        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 70px" }}>
          <h2 className="sec-title" style={{ fontSize: "clamp(22px,3vw,32px)" }}>More Carpet Cleaning Guides</h2>
          <div className="rel-grid">
            {others.slice(0, 6).map((r) => (
              <Link key={r.slug} href={`/guides/${r.slug}`} className="rel-card">
                <div className="ic"><Icon name="arrow" /></div>
                <h3>{r.title.split("—")[0].trim()}</h3>
                <p>{r.description.slice(0, 120)}…</p>
              </Link>
            ))}
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
                <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
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
