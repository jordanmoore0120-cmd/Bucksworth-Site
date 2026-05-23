/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "getyourbucksworth.com" },
      { protocol: "https", hostname: "www.getyourbucksworth.com" },
      { protocol: "https", hostname: "w74.506.myftpupload.com" },
      { protocol: "https", hostname: "*.myftpupload.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
        // Service root URL redirects (Footer links)
        { source: "/pest-and-termite", destination: "/phoenix-az/pest-and-termite", permanent: true },
        { source: "/air-conditioning-and-heating", destination: "/phoenix-az/air-conditioning-and-heating", permanent: true },
        { source: "/plumbing-and-water-heaters", destination: "/phoenix-az/plumbing-and-water-heaters", permanent: true },
        { source: "/weed-and-lawn-care", destination: "/phoenix-az/weed-and-lawn-care", permanent: true },
        // Legacy page redirects
        { source: "/contact", destination: "/request-service", permanent: true },
        { source: "/careers", destination: "/about", permanent: true },
        // Existing redirects
        { source: "/phoenix/pest-control", destination: "/phoenix-az", permanent: true },
        { source: "/phoenix/hvac-services/residential/ac-services/repair", destination: "/phoenix-az", permanent: true },
        { source: "/phoenix/hvac-services/residential", destination: "/phoenix-az", permanent: true },
        { source: "/phoenix/pest-control/rodent-control", destination: "/phoenix-az", permanent: true },
        { source: "/centipede-pest-control", destination: "/", permanent: true },
        { source: "/bed-bug-pest-control", destination: "/", permanent: true },
        { source: "/silverfish-pest-control", destination: "/", permanent: true },
        { source: "/phoenix/refrigeration/walk-in-coolers-freezers", destination: "/phoenix-az", permanent: true },
        { source: "/phoenix/hvac-services/indoor-air-quality/carbon-monoxide-detection", destination: "/phoenix-az", permanent: true },
        { source: "/phoenix/refrigeration/ice-machines", destination: "/phoenix-az", permanent: true },
        { source: "/amana", destination: "/", permanent: true },
        { source: "/bee-pest-control", destination: "/", permanent: true },
        { source: "/day-night", destination: "/", permanent: true },
        { source: "/accessibility-statement", destination: "/", permanent: true },
        { source: "/bird-pest-control", destination: "/", permanent: true }
    ];
  },
};

export default nextConfig;
