import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import CarpetBackdrop from "@/components/CarpetBackdrop";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import { GUIDES, getGuide } from "@/lib/guidesData";
import RequestCall from "@/components/RequestCall";
import PageHero from "@/components/PageHero";
import RevealInit from "@/components/RevealInit";
import CtaBand from "@/components/CtaBand";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, waHref } from "@/components/constants";

const GUIDE_IMAGES = [
  "/images/services/sofa-upholstery-cleaning-card-dubai.webp",
  "/images/services/carpet-deep-cleaning-process-uae.webp",
  "/images/services/carpet-deep-shampoo-cleaning-card-dubai.webp",
  "/images/gallery/commercial-carpet-cleaning-technician-uae.webp",
  "/images/services/specialized-rug-cleaning-service-dubai.webp",
  "/images/gallery/industrial-carpet-cleaning-machine-dubai.webp",
  "/images/gallery/professional-carpet-cleaning-team-dubai.webp",
  "/images/gallery/carpet-steam-extraction-cleaning-uae.webp",
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
    <div className="page rp rp-carpet">
      <CarpetBackdrop variant="vine" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />

      <main>
        <PageHero
          variant="center"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: g.title.split("—")[0].trim() },
          ]}
          eyebrow="Guide"
          title={g.h1}
          lead={g.description}
          actions={
            <>
              <a className="rb-gold" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> Get a free quote</a>
              <a className="rb-line" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
              <RequestCall className="rb-line" />
            </>
          }
        />

        <section className="rh-wrap" style={{ paddingBottom: 30 }}>
          <div className="post-cover" data-reveal="clip">
            <Image src={GUIDE_IMAGES[GUIDES.findIndex((x) => x.slug === g.slug) % GUIDE_IMAGES.length]} alt={`${g.title} — Al Haya Carpet Cleaning Dubai`} width={1280} height={520} loading="lazy" sizes="(max-width:1320px) 100vw, 1200px" />
          </div>
          <div className="prose post-body">
            {g.body.map((p, i) => <p key={i} data-reveal="blur">{p}</p>)}
          </div>
        </section>

        {/* FAQ */}
        <section className="rh-sec fq">
          <div className="rh-wrap fq-grid">
            <div className="fq-head" data-reveal="left">
              <p className="rh-eyebrow">FAQ</p>
              <h2 className="rh-h2">Frequently Asked Questions</h2>
            </div>
            <div className="fq-list" data-stagger>
              {g.faqs.map((f, i) => (
                <details className="rh-qa fq-item" key={f.q}>
                  <summary><span className="fq-n">{String(i + 1).padStart(2, "0")}</span>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other guides */}
        {others.length > 0 && (
          <section className="rh-sec">
            <div className="rh-wrap">
              <div className="rh-head" data-reveal>
                <p className="rh-eyebrow">Keep reading</p>
                <h2 className="rh-h2">More Carpet Cleaning Guides</h2>
              </div>
              <div className="rl-slider">
                {others.slice(0, 6).map((r) => (
                  <Link key={r.slug} href={`/guides/${r.slug}`} className="rl-card tilt">
                    <div className="rl-body">
                      <h3>{r.title.split("—")[0].trim()}</h3>
                      <p>{r.description.slice(0, 120)}…</p>
                      <span className="rh-more">Read <Icon name="arrow" /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBand
          title="Ready to get your carpets deep cleaned?"
          text="Book a free inspection and get a no-obligation quote. Same-day service available across Dubai, Sharjah, and Ajman."
        />
      </main>

      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
