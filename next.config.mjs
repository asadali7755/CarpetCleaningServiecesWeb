// Plain JavaScript on purpose; do not rename back to next.config.ts.
// Hostinger's build server has glibc < 2.29, too old for the native SWC
// binary of next >= 16.4.5, so Next falls back to WASM SWC. Hostinger wraps
// this file in a generated config that imports it, and WASM SWC cannot
// transpile a wrapped .ts config (ERR_MODULE_NOT_FOUND). Keep it free of
// imports of local .ts files and of __dirname.

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
  // One year, this host only (no includeSubDomains / preload).
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  // Hostinger shared hosting caps how many processes a build may start, so
  // keep the build to one worker.
  experimental: { cpus: 1 },
  // Serve AVIF first (smallest), WebP as fallback.
  images: { formats: ["image/avif", "image/webp"] },
  turbopack: {
    root: process.cwd(),
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
      // Old guides and posts merged into the page that targets the same
      // search (Nov 2026 audit, step 7). Keep these redirects permanently.
      ...[
        ["/guides/carpet-cleaning-cost-dubai", "/"],
        ["/guides/carpet-cleaning-safety-products", "/"],
        ["/guides/carpet-shampooing-vs-steam-cleaning", "/services/carpet-cleaning"],
        ["/guides/remove-carpet-stains-guide", "/services/stain-removal"],
        ["/guides/persian-rug-cleaning-guide", "/services/rug-cleaning"],
        ["/guides/commercial-carpet-cleaning-guide", "/services/commercial-carpet-cleaning"],
        ["/guides/carpet-care-tips-dubai", "/guides/how-often-clean-carpet-uae"],
        ["/blog/sofa-cleaning-dubai-complete-guide", "/services/sofa-upholstery-cleaning"],
      ].map(([source, destination]) => ({ source, destination, statusCode: 301 })),
    ];
  },
};

export default nextConfig;
