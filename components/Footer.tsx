import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icons";
import { BRAND, PHONE_DISPLAY, PHONE_TEL, EMAIL, HOURS, FACEBOOK_URL, LINKEDIN_URL } from "./constants";
import { SERVICES } from "@/lib/servicesData";

export default function Footer() {
  return (
    <footer className="ft" id="contact">
      <div className="ft-in">
        <div className="ft-grid">
          <div className="ft-col ft-about">
            <div className="nav-brand">
              <Image
                src="/images/alhaya-carpet-cleaning-services-dubai-logo.webp"
                alt="Alhaya Cleaning Services Logo - Carpet Deep Cleaning Dubai UAE"
                title="Alhaya Cleaning Services"
                width={44}
                height={44}
                loading="lazy"
                style={{ borderRadius: 10 }}
              />
              <span>
                <span className="brand-name">AL HAYA</span>
                <span className="brand-sub">CARPET CLEANING</span>
              </span>
            </div>
            <p>Professional carpet deep shampoo cleaning with rapid 2-4 hours dry time. Residential and commercial carpet cleaning, stain removal, and odor elimination across Dubai, Abu Dhabi, Sharjah and all UAE Emirates.</p>
            <div className="ft-social">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener" aria-label="Facebook" className="ft-social-link"><Icon name="facebook" /></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener" aria-label="LinkedIn" className="ft-social-link"><Icon name="linkedin" /></a>
            </div>
          </div>

          <div className="ft-col">
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/locations">Locations</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="ft-col">
            <h5>Services</h5>
            <ul>
              {SERVICES.slice(0, 4).map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>)}
            </ul>
          </div>

          <div className="ft-col">
            <h5>Get in touch</h5>
            <ul className="ft-contact">
              <li><Icon name="phone" /> <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
              <li><Icon name="mail" /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><Icon name="clock" /> <span>{HOURS}</span></li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <span>© {new Date().getFullYear()} {BRAND}. All rights reserved.</span>
          <span>carpetcleaningdubai.com</span>
        </div>
      </div>
    </footer>
  );
}
