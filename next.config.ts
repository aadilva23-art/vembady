import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ttkprestige.com" },
      { protocol: "https", hostname: "butterflyindia.com" },
      { protocol: "https", hostname: "www.shop.preethi.in" },
      { protocol: "https", hostname: "www.hawkinscookers.com" },
      { protocol: "https", hostname: "images.seeklogo.com" },
      { protocol: "https", hostname: "nolta.in" },
      { protocol: "https", hostname: "www.laopala.in" },
      { protocol: "https", hostname: "cdn.freebiesupply.com" },
    ],
  },
};

export default nextConfig;
