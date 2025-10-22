import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  env:{
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
};

export default nextConfig;
