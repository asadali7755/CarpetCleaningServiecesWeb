"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icons";
import { PHONE_DISPLAY, PHONE_TEL, waHref } from "./constants";
import { useRequestCall } from "./RequestCallModal";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { open: openModal } = useRequestCall();
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand" aria-label="Alhaya Carpet Cleaning Services Dubai">
          <Image
            src="/images/alhaya-carpet-cleaning-services-dubai-logo.webp"
            alt="Alhaya Carpet Cleaning Services Dubai - Professional Carpet Deep Cleaning UAE"
            title="Alhaya Cleaning Services"
            width={44}
            height={44}
            priority
            style={{ borderRadius: 10 }}
          />
          <span>
            <span className="brand-name">AL HAYA</span>
            <span className="brand-sub">CARPET CLEANING</span>
          </span>
        </Link>

        <nav className="nav-menu">
          {LINKS.map((l) => <Link key={l.href} className="nav-link" href={l.href}>{l.label}</Link>)}
          <a className="nav-phone-pill" href={`tel:${PHONE_TEL}`}><Icon name="phone" /> {PHONE_DISPLAY}</a>
          <button className="btn-req-call" onClick={openModal}>Request a Call</button>
          <a className="btn-green" href={waHref()} target="_blank" rel="noopener">GET QUOTE</a>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <Icon name={open ? "x" : "menu"} />
          </button>
        </nav>
      </div>

      <div className={`nav-mobile${open ? " open" : ""}`}>
        {LINKS.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
        <button className="btn-req-mob" onClick={() => { setOpen(false); openModal(); }}>Request a Call</button>
        <a className="btn-book" href={waHref()} target="_blank" rel="noopener" onClick={() => setOpen(false)}>Get Quote</a>
      </div>
    </header>
  );
}
