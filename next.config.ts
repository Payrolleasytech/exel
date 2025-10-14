import type { NextConfig } from "next";

const baseUrl = process.env.NEXT_STRAPI_API_URL || '';
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [baseUrl, "tidy-fish-f8bacf1595.media.strapiapp.com"]
  }
};

export default nextConfig;
