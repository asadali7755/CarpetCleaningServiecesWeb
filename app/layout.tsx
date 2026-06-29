import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./components.css";
import { Analytics } from "@vercel/analytics/next";
import {
  BRAND,
  SITE_URL,
  PHONE_TEL,
  EMAIL,
  EMIRATE_NAMES,
} from "@/components/constants";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Professional Carpet Deep Cleaning Services UAE | Alhaya Cleaning Services",
    template: "%s | Alhaya Cleaning Services",
  },
  description:
    "Professional carpet deep shampoo cleaning with 2-4 hours dry time. Residential and commercial carpet cleaning across Dubai, Abu Dhabi, Sharjah & all UAE Emirates. Stubborn stain removal & odor elimination.",
  keywords: [
    "carpet deep shampoo cleaning",
    "professional carpet cleaning UAE",
    "best carpet shampooing services Dubai",
    "residential and commercial carpet cleaning",
    "stubborn carpet stain removal UAE",
    "carpet odor removing",
    "office carpet cleaning service UAE",
    "2 to 4 hours dry time carpet cleaning",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "_-vQKQOsCp1OneIzFkRapkrepu__SWvH520xZMzyi7k" },
  alternates: { canonical: SITE_URL },
  other: {
    "theme-color": "#16a34a",
    "msapplication-TileColor": "#16a34a",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: BRAND,
    title: "Professional Carpet Deep Cleaning Services UAE | Alhaya Cleaning Services",
    description:
      "Residential and commercial carpet deep shampoo cleaning with 2-4 hours dry time. Erase stubborn stains and eliminate odors across all UAE Emirates.",
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
    title: "Professional Carpet Deep Cleaning Services UAE | Alhaya Cleaning Services",
    description:
      "Carpet deep shampoo cleaning with 2-4 hours dry time. Stubborn stain removal across all UAE Emirates.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BRAND,
  description:
    "Professional carpet deep shampoo cleaning with rapid 2-4 hours dry time. Residential and commercial carpet cleaning, stubborn stain removal, and odor elimination across all UAE Emirates.",
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
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly site info" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
