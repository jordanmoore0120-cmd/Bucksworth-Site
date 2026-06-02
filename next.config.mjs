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
        // Old /phoenix/ service pages → specific new pages (fixed: was generic /phoenix-az)
        { source: "/phoenix/pest-control", destination: "/phoenix-az/pest-and-termite", permanent: true },
        { source: "/phoenix/pest-control/rodent-control", destination: "/phoenix-az/pest-and-termite/rodent-exclusion", permanent: true },
        { source: "/phoenix/hvac-services/residential", destination: "/phoenix-az/air-conditioning-and-heating", permanent: true },
        { source: "/phoenix/hvac-services/residential/ac-services/repair", destination: "/phoenix-az/air-conditioning-and-heating/ac-repair", permanent: true },
        { source: "/phoenix/refrigeration/walk-in-coolers-freezers", destination: "/phoenix-az/air-conditioning-and-heating", permanent: true },
        { source: "/phoenix/refrigeration/ice-machines", destination: "/phoenix-az/air-conditioning-and-heating", permanent: true },
        { source: "/phoenix/hvac-services/indoor-air-quality/carbon-monoxide-detection", destination: "/phoenix-az/air-conditioning-and-heating", permanent: true },
        // Old /phoenix/ pages that were 404 → now redirected
        { source: "/phoenix/lawn-weed-control", destination: "/phoenix-az/weed-and-lawn-care", permanent: true },
        { source: "/phoenix/plumbing", destination: "/phoenix-az/plumbing-and-water-heaters", permanent: true },
        // Old generic pest pages → specific pest page
        { source: "/centipede-pest-control", destination: "/phoenix-az/pest-and-termite", permanent: true },
        { source: "/bed-bug-pest-control", destination: "/phoenix-az/pest-and-termite", permanent: true },
        { source: "/silverfish-pest-control", destination: "/phoenix-az/pest-and-termite", permanent: true },
        { source: "/bee-pest-control", destination: "/phoenix-az/pest-and-termite/bee-wasp-removal", permanent: true },
        { source: "/bird-pest-control", destination: "/phoenix-az/pest-and-termite", permanent: true },
        // Old misc pages
        { source: "/company", destination: "/about", permanent: true },
        { source: "/amana", destination: "/phoenix-az/air-conditioning-and-heating", permanent: true },
        { source: "/day-night", destination: "/phoenix-az/air-conditioning-and-heating", permanent: true },
        { source: "/accessibility-statement", destination: "/about", permanent: true },
        // Old city-specific pages that were 404
        { source: "/pest-control-peoria-az", destination: "/peoria-az/pest-and-termite", permanent: true },
        { source: "/pest-control-apache-junction-az", destination: "/apache-junction-az/pest-and-termite", permanent: true },
        { source: "/pest-control-apache-junction", destination: "/apache-junction-az/pest-and-termite", permanent: true },
        // Phase 2: Old WordPress service page redirects (top broken internal link targets)
        { source: "/pest-control-az", destination: "/phoenix-az/pest-and-termite", permanent: true },
        { source: "/air-conditioning-maintenance", destination: "/phoenix-az/air-conditioning-and-heating/ac-maintenance", permanent: true },
        { source: "/air-ducts", destination: "/phoenix-az/air-conditioning-and-heating/ductwork", permanent: true },
        { source: "/spider-pest-control", destination: "/phoenix-az/pest-and-termite/spider-prevention", permanent: true },
        { source: "/ant-pest-control", destination: "/phoenix-az/pest-and-termite/ant-control", permanent: true },
        { source: "/air-conditioning-installation", destination: "/phoenix-az/air-conditioning-and-heating/ac-installation", permanent: true },
        { source: "/news", destination: "/blog", permanent: true },
        { source: "/products", destination: "/", permanent: true },
        { source: "/roof-rats-pest-control", destination: "/phoenix-az/pest-and-termite/rodent-exclusion", permanent: true },
        { source: "/heating-repairs", destination: "/phoenix-az/air-conditioning-and-heating/heating-repair", permanent: true },
        { source: "/wasp-pest-control", destination: "/phoenix-az/pest-and-termite/bee-wasp-removal", permanent: true },
        { source: "/ductless-hvac", destination: "/phoenix-az/air-conditioning-and-heating/mini-split-systems", permanent: true },
        { source: "/goodman", destination: "/phoenix-az/air-conditioning-and-heating", permanent: true },
        { source: "/service-area", destination: "/sitemap-page", permanent: true },
        { source: "/millipede-pest-control", destination: "/phoenix-az/pest-and-termite", permanent: true },
        { source: "/fly-pest-control", destination: "/phoenix-az/pest-and-termite", permanent: true },
        { source: "/yellow-jackets-pest-control", destination: "/phoenix-az/pest-and-termite/bee-wasp-removal", permanent: true },
        { source: "/commercial-refrigeration", destination: "/phoenix-az/air-conditioning-and-heating", permanent: true },
        { source: "/reviews", destination: "/", permanent: true },
        { source: "/hornet-pest-control", destination: "/phoenix-az/pest-and-termite/bee-wasp-removal", permanent: true },
        { source: "/scorpion-control", destination: "/phoenix-az/pest-and-termite/scorpion-control", permanent: true },
        { source: "/scorpion-pest-control", destination: "/phoenix-az/pest-and-termite/scorpion-control", permanent: true },
        { source: "/pest-control", destination: "/phoenix-az/pest-and-termite", permanent: true },
        { source: "/termite-control", destination: "/phoenix-az/pest-and-termite/termite-treatment", permanent: true },
        { source: "/plumbing", destination: "/phoenix-az/plumbing-and-water-heaters", permanent: true },
        { source: "/weed-control", destination: "/phoenix-az/weed-and-lawn-care", permanent: true },
        // City-specific old WordPress pages
        { source: "/plumbing-queen-creek", destination: "/queen-creek-az/plumbing-and-water-heaters", permanent: true },
        { source: "/pest-control-san-tan-valley-az", destination: "/san-tan-valley-az/pest-and-termite", permanent: true },
        { source: "/best-pest-control-tucson-az", destination: "/tucson-az/pest-and-termite", permanent: true },
        { source: "/emergency-plumbing-tempe", destination: "/tempe-az/plumbing-and-water-heaters", permanent: true },
        { source: "/pest-control-mesa-az", destination: "/mesa-az/pest-and-termite", permanent: true },
        { source: "/gilbert-pest-control", destination: "/gilbert-az/pest-and-termite", permanent: true },
        { source: "/pest-control-gilbert-az", destination: "/gilbert-az/pest-and-termite", permanent: true },
        { source: "/pest-control-gilbert", destination: "/gilbert-az/pest-and-termite", permanent: true },
        { source: "/pest-control-tucson-az", destination: "/tucson-az/pest-and-termite", permanent: true },
        { source: "/mesa-pest-control", destination: "/mesa-az/pest-and-termite", permanent: true },
        { source: "/queen-creek-pest-control", destination: "/queen-creek-az/pest-and-termite", permanent: true },
        { source: "/tempe-ac-repair", destination: "/tempe-az/air-conditioning-and-heating/ac-repair", permanent: true },
        { source: "/phoenix-insulation", destination: "/phoenix-az/air-conditioning-and-heating/attic-insulation", permanent: true },
        { source: "/phoenix-air-conditioning-maintenance", destination: "/phoenix-az/air-conditioning-and-heating/ac-maintenance", permanent: true },
        { source: "/apache-junction-pest-control", destination: "/apache-junction-az/pest-and-termite", permanent: true },
        { source: "/pest-control-chandler-az", destination: "/chandler-az/pest-and-termite", permanent: true },
        { source: "/pest-control-chandler", destination: "/chandler-az/pest-and-termite", permanent: true },
        { source: "/pest-control-surprise-az", destination: "/surprise-az/pest-and-termite", permanent: true },
        { source: "/pest-control-sun-city-az", destination: "/sun-city-az/pest-and-termite", permanent: true },
        { source: "/pest-control-marana-az", destination: "/marana-az/pest-and-termite", permanent: true },
        { source: "/weed-control-marana-az", destination: "/marana-az/weed-and-lawn-care", permanent: true },
        { source: "/plumbing-phoenix", destination: "/phoenix-az/plumbing-and-water-heaters", permanent: true },
        { source: "/insulation-services", destination: "/phoenix-az/air-conditioning-and-heating/attic-insulation", permanent: true },
    ];
  },
};

export default nextConfig;
