import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "adventurous-falcon-212.convex.site",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
