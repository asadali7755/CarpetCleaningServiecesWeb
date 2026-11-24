import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RevealInit from "@/components/RevealInit";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import { POSTS } from "@/lib/blogData";
import { SITE_URL, PHONE_DISPLAY, PHONE_TEL, waHref } from "@/components/constants";

// Illustrations for article cards (not job photos).
const BLOG_THUMBS = [
  "/images/services/carpet-deep-shampoo-cleaning-card-dubai.webp",
  "/images/services/carpet-deep-cleaning-process-uae.webp",
  "/images/services/sofa-upholstery-cleaning-card-dubai.webp",
  "/images/services/professional-stain-removal-service-dubai.webp",
  "/images/gallery/professional-carpet-cleaning-technician-dubai.webp",
  "/images/services/specialized-rug-cleaning-service-dubai.webp",
  "/images/gallery/carpet-shampoo-deep-cleaning-dubai.webp",
  "/images/gallery/deep-carpet-cleaning-process-uae.webp",
  "/images/gallery/carpet-steam-extraction-cleaning-uae.webp",
];

export const metadata: Metadata = {
  title: "Carpet Cleaning Blog — Tips & Advice for UAE Homes",
  description:
    "Carpet care articles for UAE homes: sand, humidity, stains, odours, moving out and choosing the right carpet. Practical tips from the Al Haya team.",
  keywords: [
    "carpet cleaning blog",
    "carpet cleaning tips Dubai",
    "carpet care articles UAE",
    "Al Haya blog",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Carpet Cleaning Blog — Al Haya",
    description: "Expert carpet cleaning articles, tips and guides for UAE residents.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    ],
  };
  const [first, ...rest] = POSTS;

  return (
    <div className="page rp">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />

      <main>
        <PageHero
          variant="center"
          crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          eyebrow="Our Blog"
          title="Carpet Cleaning Blog"
          lead="Expert articles, practical tips, and in-depth guides on carpet care, stain removal, and maintaining healthy carpets in the UAE climate."
          actions={
            <>
              <a className="rb-gold" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> Get Free Quote</a>
              <a className="rb-line" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
            </>
          }
        />

        <section className="rh-sec" style={{ paddingTop: 20 }}>
          <div className="rh-wrap">
            {first && (
              <Link href={`/blog/${first.slug}`} className="bl-feature tilt" data-reveal="flip">
                <div className="bl-feature-img">
                  <Image src={BLOG_THUMBS[0]} alt={`${first.title} — Al Haya Carpet Cleaning`} fill sizes="(max-width:1000px) 100vw, 640px" className="kb" />
                </div>
                <div className="bl-feature-copy">
                  <span className="bl-meta">Featured · {first.date}</span>
                  <h2>{first.title}</h2>
                  <p className="rh-sub" style={{ marginTop: 0 }}>{first.description}</p>
                  <span className="rh-more">Read article <Icon name="arrow" /></span>
                </div>
              </Link>
            )}
            <div className="bl-grid" data-stagger>
              {rest.map((p, i) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="bl-card tilt">
                  <div className="bl-card-img">
                    <Image src={BLOG_THUMBS[(i + 1) % BLOG_THUMBS.length]} alt={`${p.title} — Al Haya Carpet Cleaning`} fill sizes="(max-width:720px) 100vw, 33vw" />
                  </div>
                  <div className="bl-card-body">
                    <span className="bl-meta">{p.date}</span>
                    <h2 className="bl-h">{p.title}</h2>
                    <p>{p.description.slice(0, 140)}…</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Need professional carpet cleaning?"
          text="Book a free inspection and get a no-obligation quote. Same-day service available across Dubai, Sharjah, and Ajman."
        />
      </main>

      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
