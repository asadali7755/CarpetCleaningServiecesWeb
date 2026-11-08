import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
];

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages (Vercel Hobby was paused on 7 Nov 2026).
  // The enquiry form runs as a Pages Function (functions/api/enquiry.js); the
  // headers below are mirrored in public/_headers and the non-www -> www
  // redirect in functions/_middleware.js, since an export cannot run them.
  output: "export",
  reactCompiler: true,
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "carpetcleaningdubai.com" }],
        destination: "https://www.carpetcleaningdubai.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
