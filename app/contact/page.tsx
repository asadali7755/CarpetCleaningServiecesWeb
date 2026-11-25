import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import CarpetBackdrop from "@/components/CarpetBackdrop";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import RevealInit from "@/components/RevealInit";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { FRAMES } from "@/lib/media";
import { PHONE_DISPLAY, PHONE_TEL, waHref, SITE_URL, EMAIL, HOURS } from "@/components/constants";
import QuoteCallSection from "@/components/QuoteCallSection";

export const metadata: Metadata = {
  title: "Contact — Book Carpet Cleaning in the UAE",
  description: "Book carpet, rug, sofa or mattress cleaning across Dubai, Sharjah, Ajman and the UAE. Call, WhatsApp or send us a message for a free quote.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927577.8847531937!2d55.4692488!3d24.74914795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dc22e5a8d45%3A0x5f56211bd03d48bd!2sMadinat%20Alhaya%20Building%20Cleaning%20Services!5e0!3m2!1sen!2s!4v1780844711725!5m2!1sen!2s";

export default function Contact() {
  return (
    <div className="page rp rp-carpet">
      <CarpetBackdrop variant="zellige" />
      <Nav />
      <main>
        <PageHero
          variant="center"
          crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          eyebrow="Contact Us"
          title="Get Your Free Quote Today"
          lead="Reach out via phone, WhatsApp, email, or fill in the form below. We reply during business hours, daily 8 AM – 10 PM."
          actions={
            <>
              <a className="rb-gold" href={waHref()} target="_blank" rel="noopener"><Icon name="whatsapp" /> Get Free Quote</a>
              <a className="rb-line" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> Call {PHONE_DISPLAY}</a>
            </>
          }
        />

        {/* Contact tiles */}
        <section className="rh-wrap" style={{ position: "relative", zIndex: 2 }}>
          <div className="ct-tiles" data-stagger>
            <a className="ct-tile wa" href={waHref()} target="_blank" rel="noopener">
              <span className="rh-ic"><Icon name="whatsapp" /></span>
              <b>Chat on WhatsApp</b>
              <span>Instant response during business hours</span>
            </a>
            <a className="ct-tile" href={`tel:${PHONE_TEL}`}>
              <span className="rh-ic"><Icon name="phone" /></span>
              <b>Phone</b>
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a className="ct-tile" href={`mailto:${EMAIL}`}>
              <span className="rh-ic"><Icon name="mail" /></span>
              <b>Email</b>
              <span>{EMAIL}</span>
            </a>
            <div className="ct-tile">
              <span className="rh-ic"><Icon name="clock" /></span>
              <b>Hours</b>
              <span>{HOURS}</span>
            </div>
          </div>
        </section>

        {/* Form + photo */}
        <section className="rh-sec">
          <div className="rh-wrap ct-form-grid">
            <div className="ct-form-card" data-reveal="left">
              <p className="rh-eyebrow">Send a message</p>
              <h2 className="rh-h2" style={{ fontSize: "clamp(26px,3vw,36px)" }}>Request a Free Quote</h2>
              <ContactForm />
            </div>
            <div className="ct-side" data-reveal="right">
              <div className="ct-photo">
                <Image src={FRAMES.rug.src} alt={FRAMES.rug.alt} fill sizes="(max-width:1000px) 100vw, 520px" />
              </div>
              <div className="ct-badges" data-stagger>
                <div><b>7 Emirates</b><span>Full UAE Coverage</span></div>
                <div><b>Same Day</b><span>Service Available</span></div>
                <div><b>100%</b><span>Satisfaction Guarantee</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Business Profile */}
        <section className="rh-sec" style={{ paddingTop: 0 }}>
          <div className="rh-wrap">
            <div className="ct-map" data-reveal="zoom">
              <div className="ct-map-copy">
                <p className="rh-eyebrow">On Google</p>
                <h2 className="rh-h2" style={{ fontSize: "clamp(26px,3vw,36px)" }}>Find Us on Google</h2>
                <p className="rh-sub">Check our reviews, location &amp; business hours on Google.</p>
                <a href="https://maps.app.goo.gl/qAog9d6usteD2jsH6" target="_blank" rel="noopener noreferrer" className="rb-gold" style={{ marginTop: 20 }}>
                  View Our Google Business Profile ↗
                </a>
              </div>
              <div className="ct-map-frame">
                <iframe
                  src={MAP_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Madinat Alhaya Building Cleaning Services on Google Maps"
                />
              </div>
            </div>
          </div>
        </section>
        <QuoteCallSection />
      </main>
      <Footer />
      <Fab />
      <RevealInit />
    </div>
  );
}
