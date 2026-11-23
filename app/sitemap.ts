import type { MetadataRoute } from "next";
import { SITE_URL } from "@/components/constants";
import { SERVICES } from "@/lib/servicesData";
import { LOCATIONS } from "@/lib/locationsData";
import { GUIDES } from "@/lib/guidesData";
import { POSTS } from "@/lib/blogData";

// When a page's content last changed (YYYY-MM-DD). Update the matching date
// whenever you change that page's text, so Google sees which pages are new.
// Do not use the build time: then every page looks changed on every deploy.
const UPDATED = {
  home: "2026-11-23",
  servicesHub: "2026-11-23",
  locationsHub: "2026-09-15",
  gallery: "2026-08-14",
  guidesHub: "2026-11-23",
  blogHub: "2026-08-05",
  about: "2026-11-23",
  contact: "2026-09-14",
  services: "2026-11-23", // lib/servicesData.ts
  locations: "2026-11-23", // lib/locationsData.ts
  guides: "2026-11-23", // lib/guidesData.ts
};

const d = (s: string) => new Date(`${s}T00:00:00Z`);

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed: [string, string][] = [
    ["", UPDATED.home],
    ["/services", UPDATED.servicesHub],
    ["/locations", UPDATED.locationsHub],
    ["/gallery", UPDATED.gallery],
    ["/guides", UPDATED.guidesHub],
    ["/blog", UPDATED.blogHub],
    ["/about", UPDATED.about],
    ["/contact", UPDATED.contact],
  ];
  const pages = fixed.map(([p, date]) => ({
    url: `${SITE_URL}${p}`,
    lastModified: d(date),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const services = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: d(UPDATED.services),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const primary = new Set(["dubai", "sharjah", "ajman"]);
  const locations = LOCATIONS.map((l) => ({
    url: `${SITE_URL}/locations/${l.slug}`,
    lastModified: d(UPDATED.locations),
    changeFrequency: "monthly" as const,
    priority: primary.has(l.slug) ? 0.8 : 0.6,
  }));
  const guides = GUIDES.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: d(UPDATED.guides),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  // Blog posts carry their own date.
  const blog = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: d(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  return [...pages, ...services, ...locations, ...guides, ...blog];
}
