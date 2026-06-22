import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import RequestCall from "@/components/RequestCall";
import { SITE_URL, PHONE_DISPLAY, PHONE_TEL, waHref } from "@/components/constants";

export const metadata: Metadata = {
  title: "About Us — Trusted Carpet Cleaning in the UAE",
  description: "Al Haya Carpet Services is a trusted, eco-friendly carpet, rug and upholstery cleaning company serving homes and businesses across all 7 emirates of the UAE.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const WHY = [
  { t: "Trained & certified crew", d: "Uniformed, background-checked technicians using commercial-grade equipment." },
  { t: "Eco-friendly & safe", d: "Non-toxic products that are safe for children, pets and sensitive skin." },
  { t: "Same-day service", d: "Book in the morning, enjoy fresh carpets the same evening across Dubai." },
  { t: "100% satisfaction", d: "Not happy with a spot? We re-clean it free — written guarantee on every job." },
  { t: "Transparent pricing", d: "Clear fixed quote before we start. No hidden charges, ever." },
  { t: "All of the UAE", d: "Coverage across all seven emirates, residential and commercial." },
];

export default function About() {
  return (
    <div className="page">
      <Nav />
      <main>
        <section className="sub-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <span style={{ color: "var(--green)" }}>About Us</span>
          </nav>
          <h1>Trusted carpet care, across the UAE</h1>
          <p className="lead">Al Haya Carpet Services is an on-demand carpet, rug, sofa and mattress cleaning company built on one promise — spotless results and healthier homes, delivered fast and done right.</p>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get a free quote →</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            <RequestCall className="btn-outline" />
          </div>
        </section>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 30px" }}>
          <div className="about-hero-img">
            <Image src="/images/services/carpet-service-6.jpeg" alt="Al Haya technician deep cleaning an oriental rug with extraction equipment in Dubai" width={1280} height={720} priority style={{ width: "100%", height: "auto" }} />
          </div>
          <div className="prose">
            <p>Carpets, rugs and upholstery trap dust, allergens and bacteria that ordinary vacuuming never reaches. We combine deep shampoo extraction, high-temperature steam sanitisation and careful stain treatment to restore your soft furnishings to a fresh, hygienic, like-new condition.</p>
            <p>From a single rug to a full villa or a multi-floor office, our trained crew brings commercial-grade equipment and eco-friendly products to every job — with pickup-and-return for rugs and curtains, and convenient on-site service for carpets, sofas and mattresses.</p>
          </div>
          <div className="about-split">
            <div className="about-split-img">
              <Image src="/images/gallery/professional-carpet-cleaning-team.jpeg" alt="Professional carpet cleaning team at Al Haya Cleaning Services Dubai" width={600} height={400} loading="lazy" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="about-split-img">
              <Image src="/images/services/carpet-service-7.jpeg" alt="Industrial carpet cleaning machine in action — rug deep shampoo UAE" width={600} height={400} loading="lazy" style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
          <ul className="feat-list" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            {WHY.map((w) => (
              <li key={w.t}><span className="ic"><Icon name="check" /></span><div><b>{w.t}</b><p>{w.d}</p></div></li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
      <Fab />
    </div>
  );
}
