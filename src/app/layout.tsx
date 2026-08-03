import type { Metadata } from "next";
import { aggregateRating } from "@/lib/reviews";
import "@/styles/globals.css";
import "@/styles/site.css";
import { Oswald } from "next/font/google";
import WebMCPTools from "@/components/WebMCPTools";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstimatorProvider from "@/components/EstimatorProvider";
import Analytics from "@/components/Analytics";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getyourbucksworth.com"),
  title: {
    default:
      "Pest Control, HVAC & Plumbing | Bucksworth Home Services — Phoenix & Tucson AZ",
    template: "%s | Bucksworth Home Services",
  },
  description:
    "Family-owned pest control, AC repair, plumbing & weed control serving 33 cities in Phoenix & Tucson AZ since 2013. Google Guaranteed. AZ ROC #343924. Call (480) 422-8388.",
  keywords: [
    "pest control Phoenix",
    "pest control near me",
    "AC repair Phoenix",
    "plumbing Phoenix",
    "weed control Phoenix",
    "termite treatment Arizona",
    "HVAC Tucson",
    "scorpion control Phoenix",
    "air conditioning repair near me",
    "plumber near me Phoenix",
    "Bucksworth Home Services",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getyourbucksworth.com",
    siteName: "Bucksworth Home Services",
    title:
      "Pest Control, HVAC & Plumbing | Bucksworth Home Services",
    description:
      "Family-owned pest control, AC, plumbing & weed control serving 33 cities in Phoenix & Tucson AZ since 2013. Google Guaranteed.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Bucksworth Home Services — Pest Control, HVAC, Plumbing & Weed Control in Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bucksworth Home Services",
    description:
      "Pest control, AC, plumbing & weed control in Phoenix & Tucson AZ. Family-owned since 2013.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  other: {
    "google-site-verification": "",
  },
};

/* ── All 33 service area cities ── */
const ALL_CITIES = [
  "Phoenix","Scottsdale","Tempe","Mesa","Chandler","Gilbert","Glendale",
  "Peoria","Surprise","Goodyear","Buckeye","Avondale","Litchfield Park",
  "Sun City","Sun City West","Ahwatukee","Fountain Hills","Cave Creek",
  "Anthem","Queen Creek","San Tan Valley","Apache Junction","Gold Canyon",
  "Maricopa","Tucson","Oro Valley","Marana","Sahuarita","Green Valley",
  "Vail","Catalina Foothills","Casas Adobes","Tanque Verde",
];

/* ── Organization + LocalBusiness JSON-LD (site-wide) ── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PestControlService", "HVACBusiness", "Plumber"],
  "@id": "https://getyourbucksworth.com/#organization",
  name: "Bucksworth Home Services",
  legalName: "Bucksworth Home Services LLC",
  url: "https://getyourbucksworth.com",
  logo: "https://getyourbucksworth.com/images/bucksworth-mascot-clean.jpg",
  image: "https://getyourbucksworth.com/images/bucksworth-mascot-clean.jpg",
  description:
    "Bucksworth Home Services is a family-owned home services company founded in 2013 by Jordan and Taylor Moore. We provide pest control, termite treatment, air conditioning repair and installation, plumbing, water heater services, and weed control across 33 cities in the Phoenix and Tucson metro areas of Arizona. We are Google Guaranteed, licensed by the Arizona Registrar of Contractors (ROC #343924) and the Arizona Department of Agriculture (License #9613).",
  foundingDate: "2013",
  founder: [
    { "@type": "Person", name: "Jordan Moore", jobTitle: "Co-Founder & CEO" },
    { "@type": "Person", name: "Taylor Moore", jobTitle: "Co-Founder" },
  ],
  telephone: "(480) 422-8388",
  email: "info@getyourbucksworth.com",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Debit Card, Check",
  address: [
    {
      "@type": "PostalAddress",
      name: "Phoenix Branch",
      addressLocality: "Phoenix",
      addressRegion: "AZ",
      postalCode: "85001",
      addressCountry: "US",
      telephone: "(480) 422-8388",
    },
    {
      "@type": "PostalAddress",
      name: "Tucson Branch",
      addressLocality: "Tucson",
      addressRegion: "AZ",
      postalCode: "85701",
      addressCountry: "US",
      telephone: "(520) 284-9930",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4484,
    longitude: -112.074,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  aggregateRating: aggregateRating(),
  areaServed: ALL_CITIES.map((c) => ({ "@type": "City", name: c, containedInPlace: { "@type": "State", name: "Arizona" } })),
  sameAs: [
    "https://www.instagram.com/bucksworth.homeservices/",
    "https://www.google.com/maps/place/Bucksworth+Home+Services",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Pest & Termite Control",
        description: "Scorpions, termites, roaches, ants, spiders, rodents, bed bugs, mosquitoes, bees, and wasps. Monthly and bi-monthly plans.",
      },
      {
        "@type": "OfferCatalog",
        name: "Air Conditioning & Heating",
        description: "AC repair, installation, maintenance, duct cleaning, insulation. All major brands including Daikin, Trane, Carrier, Lennox, and Goodman.",
      },
      {
        "@type": "OfferCatalog",
        name: "Plumbing & Water Heaters",
        description: "Drain cleaning, water heater repair and replacement, leak detection, re-piping, water softeners, reverse osmosis.",
      },
      {
        "@type": "OfferCatalog",
        name: "Weed & Lawn Care",
        description: "Pre-emergent and post-emergent weed control, Bermuda grass maintenance, overseeding, fertilization, and gravel yard treatment.",
      },
    ],
  },
  knowsAbout: [
    "pest control", "termite treatment", "scorpion control", "bed bug treatment",
    "HVAC repair", "air conditioning installation", "furnace repair", "duct cleaning",
    "plumbing repair", "water heater installation", "drain cleaning", "leak detection",
    "weed control", "lawn care", "pre-emergent treatment",
    "Arizona pest control", "Phoenix home services",
  ],
  slogan: "Treat every customer the way we would treat our own grandmother.",
  award: ["Google Guaranteed", "AZ ROC Licensed #343924", "AG Licensed #9613"],
};

/* ── WebSite schema with SearchAction for sitelinks search box ── */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://getyourbucksworth.com/#website",
  name: "Bucksworth Home Services",
  url: "https://getyourbucksworth.com",
  description:
    "Bucksworth Home Services provides pest control, HVAC, plumbing, and weed control across 33 cities in Phoenix and Tucson, Arizona.",
  publisher: { "@id": "https://getyourbucksworth.com/#organization" },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://getyourbucksworth.com/sitemap-page?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={oswald.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-32.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#c8102e" />
{/* mascot preload removed — not above the fold */}
{/* hp_img_1.jpg preload removed — image is below the fold */}
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {/* Agency GTM removed — GA4 + Meta Pixel fire directly via Analytics component */}
        <Analytics />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <WebMCPTools />
        <EstimatorProvider
          mapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ""}
        >
          <Header />
          {children}
          <Footer />
        </EstimatorProvider>
      </body>
    </html>
  );
}
