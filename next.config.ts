import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async rewrites() {
    // Industry report viewers are static documents in public/reports-html/
    // (built by scripts/build-report-viewers.mjs); serve them under Insights.
    return [
      {
        source: "/insights/reports/:slug",
        destination: "/reports-html/:slug/index.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/cfo-advisory",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
