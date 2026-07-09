import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RequestCall from "@/components/RequestCall";
import GalleryClient from "@/components/GalleryClient";
import { SITE_URL, BRAND, PHONE_DISPLAY, PHONE_TEL, waHref } from "@/components/constants";

export const metadata: Metadata = {
  title: "Gallery — Real Carpet Cleaning Results Dubai & UAE",
  description:
    "Browse real carpet cleaning photos and videos from Alhaya Cleaning Services. See before-after results, deep shampoo cleaning, stain removal, rug care and sofa cleaning across Dubai and all UAE Emirates.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: "Gallery — Real Carpet Cleaning Results | Alhaya Cleaning Services",
    description: "See real carpet cleaning results — photos and videos of deep shampoo cleaning, stain removal, and rug care across Dubai & UAE.",
    url: `${SITE_URL}/gallery`,
    siteName: BRAND,
    type: "website",
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Carpet Cleaning Gallery — Real Work Results",
  description: "Professional carpet cleaning photos and videos showing real results across Dubai and UAE by Alhaya Cleaning Services.",
  url: `${SITE_URL}/gallery`,
  publisher: {
    "@type": "LocalBusiness",
    name: BRAND,
    url: SITE_URL,
  },
};

export default function GalleryPage() {
  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <Nav />
      <main>
        <section className="sub-hero gal-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span style={{ color: "var(--green)" }}>Gallery</span>
          </nav>
          <h1>Our Work Speaks for Itself</h1>
          <p className="lead">
            Real photos and videos from real jobs — no stock images, no filters. Browse our carpet cleaning,
            stain removal, rug care and sofa cleaning results across Dubai, Abu Dhabi, Sharjah and all UAE Emirates.
          </p>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get a Free Quote →</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            <RequestCall className="btn-outline" />
          </div>
        </section>

        <section className="gal-section">
          <div className="inner">
            <GalleryClient />
          </div>
        </section>

        <section className="cta">
          <div className="cta-card" data-reveal>
            <div className="glow" />
            <div className="inner">
              <h2>Want Results Like These?</h2>
              <p>Every photo and video you see is from a real job by our trained professionals. Book your carpet, rug, or sofa cleaning today and see the difference.</p>
              <div className="row">
                <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get a Free Quote →</a>
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
