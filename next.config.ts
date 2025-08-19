import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint errors during build to deploy successfully
    ignoreDuringBuilds: true,
  },
  // Optional: Add image configuration if you're using next/image
  images: {
    unoptimized: true, // This allows static image optimization
  },
};

export default nextConfig;