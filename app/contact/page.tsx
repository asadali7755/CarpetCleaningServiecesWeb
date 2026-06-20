import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import ContactForm from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { SITE_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL, HOURS, waHref } from "@/components/constants";

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
        <section className="sub-hero">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="sep">/</span>
            <span style={{ color: "var(--green)" }}>Contact</span>
          </nav>
          <h1>Book your free inspection</h1>
          <p className="lead">Call, WhatsApp or send us a message — we&apos;ll get back with a no-obligation quote within the hour. Same-day service available across Dubai, Sharjah and Ajman.</p>
        </section>

        <section className="inner" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "10px var(--pad) 70px" }}>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Get in touch</h3>
              <ul className="contact-list">
                <li><span className="ic"><Icon name="phone" /></span><div><b>Call us</b><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></div></li>
                <li><span className="ic"><Icon name="whatsapp" /></span><div><b>WhatsApp</b><a href={waHref()} target="_blank" rel="noopener">Chat for a free quote</a></div></li>
                <li><span className="ic"><Icon name="mail" /></span><div><b>Email</b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></li>
                <li><span className="ic"><Icon name="clock" /></span><div><b>Hours</b><span>{HOURS}</span></div></li>
                <li><span className="ic"><Icon name="pin" /></span><div><b>Coverage</b><span>All 7 Emirates, UAE</span></div></li>
                <li><span className="ic"><Icon name="star" /></span><div><b>Google Business</b><a href="https://maps.app.goo.gl/Q4Qjx7GFZKZ1DSfz9" target="_blank" rel="noopener">View on Google Maps</a></div></li>
              </ul>
            </div>
            <div className="contact-card">
              <h3>Request a quote</h3>
              <ContactForm />
            </div>
          </div>

          {/* Google Business Profile Map */}
          <div style={{ marginTop: 32, borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e2e4c4f18e4!2sAlhaya%20Cleaning%20Services!5e0!3m2!1sen!2sae!4v1718900000000!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alhaya Cleaning Services - Google Business Profile Location"
            />
          </div>
        </section>
      </main>
      <Footer />
      <Fab />
    </div>
  );
}
