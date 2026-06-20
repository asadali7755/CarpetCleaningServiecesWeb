import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import { Icon } from "@/components/Icons";
import { SERVICES } from "@/lib/servicesData";
import { LOCATIONS } from "@/lib/locationsData";
import { SITE_URL, PHONE_DISPLAY, PHONE_TEL, waHref } from "@/components/constants";

export const metadata: Metadata = {
  title: "Our Services — Carpet, Rug, Sofa & Mattress Cleaning",
  description: "Professional carpet, rug, sofa & upholstery, mattress, office and curtain cleaning across Dubai, Sharjah, Ajman and the UAE. Eco-friendly, same-day service.",
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesHub() {
  return (
    <div className="page">
      <Nav />
      <main>
        <section className="sub-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <span style={{ color: "var(--green)" }}>Services</span>
          </nav>
          <h1>Professional cleaning for every need</h1>
          <p className="lead">From deep carpet steam cleaning to delicate rugs, sofas, mattresses, office floors and curtains — one trusted team for your whole home or business, across all 7 emirates.</p>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Book a free quote →</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
          </div>
        </section>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 40px" }}>
          <div className="rel-grid">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="rel-card">
                <div className="ic"><Icon name={s.icon} /></div>
                <h3>{s.name}</h3>
                <p>{s.intro.slice(0, 120)}…</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 70px" }}>
          <h2 className="sec-title" style={{ fontSize: "clamp(22px,3vw,32px)" }}>Areas we serve</h2>
          <div className="chips-row">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="chip-link"><Icon name="pin" /> Carpet Cleaning {l.name}</Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Fab />
    </div>
  );
}
