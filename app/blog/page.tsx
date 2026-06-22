import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import { POSTS } from "@/lib/blogData";
import RequestCall from "@/components/RequestCall";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, waHref } from "@/components/constants";

const BLOG_THUMBS = [
  "/images/services/carpet-service-6.jpeg",
  "/images/services/carpet-service-7.jpeg",
  "/images/services/carpet-service-10.jpeg",
  "/images/services/carpet-service-4.jpeg",
  "/images/gallery/action-1.jpeg",
  "/images/services/carpet-service-8.jpeg",
  "/images/gallery/carpet-shampoo-cleaning.webp",
  "/images/gallery/deep-carpet-cleaning-process.webp",
  "/images/gallery/carpet-steam-extraction.jpeg",
];

export const metadata: Metadata = {
  title: "Carpet Cleaning Blog — Tips, Guides & Expert Advice | Al Haya",
  description:
    "Expert carpet cleaning articles from Al Haya. Tips for maintaining carpets in the UAE climate, stain removal advice, move-in/move-out guides, and more.",
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

  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />

      <main>
        <section className="sub-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <span style={{ color: "var(--green)" }}>Blog</span>
          </nav>
          <h1>Carpet Cleaning Blog</h1>
          <p className="lead">
            Expert articles, practical tips, and in-depth guides on carpet care, stain removal, and maintaining healthy carpets in the UAE climate.
          </p>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get a free quote →</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            <RequestCall className="btn-outline" />
          </div>
        </section>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 70px" }}>
          <div className="rel-grid rel-grid--img">
            {POSTS.map((p, i) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="rel-card rel-card--img">
                <div className="rel-card-img">
                  <Image src={BLOG_THUMBS[i % BLOG_THUMBS.length]} alt={`${p.title} — Al Haya Carpet Cleaning`} fill sizes="(max-width:600px) 100vw,(max-width:900px) 50vw,33vw" />
                </div>
                <div className="rel-card-content">
                  <h2 style={{ fontSize: "clamp(16px,2vw,20px)", margin: "8px 0 6px", fontFamily: "var(--display)", fontWeight: 600, color: "var(--text)" }}>{p.title}</h2>
                  <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 6 }}>{p.description.slice(0, 140)}…</p>
                  <span style={{ fontSize: 13, color: "var(--green)" }}>{p.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="cta-card">
            <div className="glow" />
            <div className="inner">
              <h2>Need professional carpet cleaning?</h2>
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
