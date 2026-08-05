import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import { SERVICES } from "@/lib/servicesData";
import { PHONE_DISPLAY, PHONE_TEL, waHref, SITE_URL } from "@/components/constants";

export const metadata: Metadata = {
  title: "Our Services — Carpet, Rug, Sofa & Mattress Cleaning",
  description: "Professional carpet, rug, sofa & upholstery, mattress, office and curtain cleaning across Dubai, Sharjah, Ajman and the UAE. Eco-friendly, same-day service.",
  alternates: { canonical: `${SITE_URL}/services` },
};

const borderColors = ["var(--teal)", "var(--coral)", "var(--purple)", "var(--green)"];

export default function ServicesHub() {
  return (
    <div className="page">
      <Nav />
      <main>
        <section
          className="sub-hero"
          style={{ background: "linear-gradient(180deg, #F5F3FF 0%, #FFFFFF 100%)" }}
        >
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <span style={{ color: "var(--teal)" }}>Services</span>
          </nav>
          <p className="eyebrow teal">Our Services</p>
          <h1 className="grad-text">Professional Carpet &amp; Upholstery Cleaning</h1>
          <p className="lead">
            Industry-leading equipment and eco-friendly solutions for homes and businesses across the UAE.
          </p>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get Free Quote</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </section>

        <section className="inner sec-cream" style={{ padding: "60px var(--pad) 70px" }}>
          <div className="rel-grid rel-grid--img" style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rel-card rel-card--img"
                style={{ borderTop: `4px solid ${borderColors[i % borderColors.length]}` }}
              >
                <div className="rel-card-img">
                  <Image src={s.cardImg} alt={`${s.name} — Al Haya Carpet Cleaning`} fill sizes="(max-width:600px) 100vw,(max-width:900px) 50vw,33vw" />
                </div>
                <div className="rel-card-content">
                  <div className="ic"><Icon name={s.icon} /></div>
                  <h3>{s.name}</h3>
                  <p>{s.intro.slice(0, 120)}…</p>
                  <span style={{ color: "var(--teal)", fontWeight: 600, fontSize: 14 }}>Learn More →</span>
                </div>
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
