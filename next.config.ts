import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["*"]
    },
  },
  images: {
    domains: ["img.clerk.com"],
  },
};

export default nextConfig;
