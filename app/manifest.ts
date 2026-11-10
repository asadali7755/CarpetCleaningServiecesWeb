import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alhaya Cleaning Services - Carpet Deep Cleaning UAE",
    short_name: "Alhaya Cleaning",
    description:
      "Professional carpet deep shampoo cleaning with 2-4 hours dry time across all UAE Emirates.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#c8a84e",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
