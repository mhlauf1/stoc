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
