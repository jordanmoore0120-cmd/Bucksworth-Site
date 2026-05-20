import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "getyourbucksworth.com",
      },
    ],
  },
};

export default nextConfig;
