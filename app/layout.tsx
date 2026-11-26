import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import "./components.css";
import "./royal.css";
import "./pages.css";
import { Analytics } from "@vercel/analytics/next";
import { ClientProviders } from "@/components/ClientProviders";
import {
  BRAND,
  SITE_URL,
  PHONE_TEL,
  EMAIL,
  EMIRATE_NAMES,
} from "@/components/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  // One weight only, to keep the font download small (headings are all 700).
  weight: ["700"],
  variable: "--font-display",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Carpet Cleaning Dubai & UAE | Home & Office Service",
    // No brand suffix: it pushed 38 of 39 titles over 60 characters, and the
    // brand name is still being decided. Keep each page title <= 60 chars.
    template: "%s",
  },
  description:
    "Carpet cleaning in Dubai, Abu Dhabi, Sharjah and all UAE emirates: deep shampoo at your home or office, stain and odour removal. Free quote on WhatsApp.",
  keywords: [
    "carpet deep shampoo cleaning",
    "professional carpet cleaning UAE",
    "carpet shampooing services Dubai",
    "residential and commercial carpet cleaning",
    "stubborn carpet stain removal UAE",
    "carpet odor removing",
    "office carpet cleaning service UAE",
    "carpet cleaning at home Dubai",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "_-vQKQOsCp1OneIzFkRapkrepu__SWvH520xZMzyi7k" },
  alternates: { canonical: SITE_URL },
  other: {
    "theme-color": "#1E3A8A",
    "msapplication-TileColor": "#1E3A8A",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: BRAND,
    title: "Carpet Cleaning Dubai & UAE | Home & Office Service",
    description:
      "Carpet deep shampoo cleaning at your home or office, with stain and odour removal across all UAE Emirates. Free quote on WhatsApp.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Alhaya Cleaning Services - Professional Carpet Deep Cleaning UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Cleaning Dubai & UAE | Home & Office Service",
    description:
      "Carpet deep shampoo cleaning at your home or office. Stain and odour removal across all UAE Emirates.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BRAND,
  description:
    "Professional carpet deep shampoo cleaning at your home or office. Residential and commercial carpet cleaning, stubborn stain removal and odour treatment across all UAE Emirates.",
  url: SITE_URL,
  telephone: PHONE_TEL,
  email: EMAIL,
  priceRange: "$$",
  logo: `${SITE_URL}/images/alhaya-carpet-cleaning-services-dubai-logo.webp`,
  image: `${SITE_URL}/images/gallery/professional-carpet-cleaning-technician-dubai.webp`,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
  areaServed: EMIRATE_NAMES.map((n) => ({ "@type": "City", name: n })),
  hasMap: "https://maps.app.goo.gl/Q4Qjx7GFZKZ1DSfz9",
  sameAs: ["https://maps.app.goo.gl/Q4Qjx7GFZKZ1DSfz9"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly site info" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </head>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}
