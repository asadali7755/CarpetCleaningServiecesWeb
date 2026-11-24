import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export interface Crumb { label: string; href?: string }

// Shared hero for inner pages. Three looks so pages do not feel the same:
//  - "split":  text left, framed media right (service pages)
//  - "banner": full-width photo with a glass text card (location pages)
//  - "center": centred text over a soft pattern with a media row below (hubs)
export default function PageHero({
  variant = "split",
  crumbs,
  eyebrow,
  title,
  lead,
  actions,
  chips,
  media,
  bg,
  bgAlt,
  children,
}: {
  variant?: "split" | "banner" | "center";
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  chips?: string[];
  media?: ReactNode;
  bg?: string;
  bgAlt?: string;
  children?: ReactNode;
}) {
  const crumbNav = (
    <nav className="ph-crumbs" aria-label="Breadcrumb">
      {crumbs.map((c, i) => (
        <span key={i}>
          {i > 0 && <span className="ph-sep">/</span>}
          {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
        </span>
      ))}
    </nav>
  );
  const text = (
    <>
      {crumbNav}
      {eyebrow && <p className="rh-eyebrow">{eyebrow}</p>}
      <h1 className="ph-title">{title}</h1>
      {lead && <p className="ph-lead">{lead}</p>}
      {actions && <div className="rh-cta">{actions}</div>}
      {chips && chips.length > 0 && (
        <ul className="ph-chips">
          {chips.map((c) => <li key={c}>{c}</li>)}
        </ul>
      )}
      {children}
    </>
  );

  if (variant === "banner") {
    return (
      <section className="ph ph-banner">
        {bg && <Image src={bg} alt={bgAlt || ""} fill priority sizes="100vw" className="ph-banner-bg" />}
        <div className="ph-banner-shade" aria-hidden="true" />
        <div className="rh-wrap ph-banner-inner">
          <div className="ph-glass">{text}</div>
          {media && <div className="ph-banner-media">{media}</div>}
        </div>
      </section>
    );
  }

  if (variant === "center") {
    return (
      <section className="ph ph-center">
        <div className="ph-pattern" aria-hidden="true" />
        <div className="rh-wrap ph-center-inner">{text}</div>
        {media && <div className="rh-wrap ph-center-media">{media}</div>}
      </section>
    );
  }

  return (
    <section className="ph ph-split">
      <div className="rh-hero-glow" aria-hidden="true" />
      <div className="rh-wrap ph-split-grid">
        <div className="ph-split-copy">{text}</div>
        {media && <div className="ph-split-media">{media}</div>}
      </div>
    </section>
  );
}
