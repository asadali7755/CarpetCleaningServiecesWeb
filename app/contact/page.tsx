import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import ContactForm from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { PHONE_DISPLAY, PHONE_TEL, waHref, SITE_URL, EMAIL, HOURS } from "@/components/constants";
import QuoteCallSection from "@/components/QuoteCallSection";

export const metadata: Metadata = {
  title: "Contact — Book Carpet Cleaning in the UAE",
  description: "Book carpet, rug, sofa or mattress cleaning across Dubai, Sharjah, Ajman and the UAE. Call, WhatsApp or send us a message for a free quote.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function Contact() {
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
            <span style={{ color: "var(--teal)" }}>Contact</span>
          </nav>
          <p className="eyebrow teal">Contact Us</p>
          <h1 className="grad-text">Get Your Free Quote Today</h1>
          <p className="lead">
            Reach out via phone, WhatsApp, email, or fill in the form below. We respond within 30 minutes during business hours.
          </p>
          <div className="cta-row">
            <a className="btn-green" href={waHref()} target="_blank" rel="noopener">Get Free Quote</a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </section>

        <section className="inner sec-lavender" style={{ padding: "60px var(--pad) 70px" }}>
          <div style={{ maxWidth: "var(--maxw)", margin: "0 auto" }}>
            <div className="contact-grid">
              <div className="contact-card">
                <h3>Request a Free Quote</h3>
                <ContactForm />
              </div>
              <div
                className="contact-card"
                style={{ background: "var(--green)", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: 14 }}
              >
                <div style={{ fontSize: 40 }}><Icon name="whatsapp" /></div>
                <h3 style={{ color: "#fff" }}>Chat on WhatsApp</h3>
                <p style={{ color: "rgba(255,255,255,0.9)" }}>Instant response during business hours</p>
                <a
                  href={waHref()}
                  target="_blank"
                  rel="noopener"
                  style={{
                    background: "#fff",
                    color: "var(--green)",
                    fontWeight: 700,
                    padding: "12px 28px",
                    borderRadius: 999,
                    textDecoration: "none",
                  }}
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            <div className="rel-grid" style={{ marginTop: 40 }}>
              <div className="contact-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10 }}>
                <div className="ic"><Icon name="phone" /></div>
                <h3>Phone</h3>
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </div>
              <div className="contact-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10 }}>
                <div className="ic"><Icon name="mail" /></div>
                <h3>Email</h3>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="contact-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10 }}>
                <div className="ic"><Icon name="clock" /></div>
                <h3>Hours</h3>
                <span>{HOURS}</span>
              </div>
            </div>

            <div
              className="contact-card"
              style={{
                marginTop: 40,
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                gap: 20,
                textAlign: "center",
              }}
            >
              <div>
                <div className="grad-text" style={{ fontSize: 28, fontWeight: 800 }}>7 Emirates</div>
                <div style={{ color: "var(--text-2)", fontSize: 14 }}>Full UAE Coverage</div>
              </div>
              <div>
                <div className="grad-text" style={{ fontSize: 28, fontWeight: 800 }}>Same Day</div>
                <div style={{ color: "var(--text-2)", fontSize: 14 }}>Service Available</div>
              </div>
              <div>
                <div className="grad-text" style={{ fontSize: 28, fontWeight: 800 }}>100%</div>
                <div style={{ color: "var(--text-2)", fontSize: 14 }}>Satisfaction Guarantee</div>
              </div>
            </div>

            {/* Google Business Profile */}
            <div className="cc-map-section">
              <h2 className="cc-map-title">Find Us on Google</h2>
              <p className="cc-map-sub">Check our reviews, location &amp; business hours on Google.</p>
              <div className="cc-map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927577.8847531937!2d55.4692488!3d24.74914795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dc22e5a8d45%3A0x5f56211bd03d48bd!2sMadinat%20Alhaya%20Building%20Cleaning%20Services!5e0!3m2!1sen!2s!4v1780844711725!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Madinat Alhaya Building Cleaning Services on Google Maps"
                />
              </div>
              <div className="cc-gbp-wrap">
                <a
                  href="https://maps.app.goo.gl/qAog9d6usteD2jsH6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cc-gbp-btn"
                >
                  View Our Google Business Profile ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <QuoteCallSection />
      </main>
      <Footer />
      <Fab />
    </div>
  );
}
