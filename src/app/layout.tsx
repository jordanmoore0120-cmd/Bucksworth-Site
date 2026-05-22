import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/site.css";
import "@/styles/job-site-work.css";
import { Oswald } from "next/font/google";
import WebMCPTools from "@/components/WebMCPTools";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemandIQ from "@/components/DemandIQ";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getyourbucksworth.com"),
  title: {
    default:
      "Pest Control, HVAC & Plumbing | Bucksworth Home Services",
    template: "%s | Bucksworth Home Services",
  },
  description:
    "Family-owned pest control, AC, plumbing & weed control serving 33 cities in Phoenix & Tucson AZ since 2013. Google Guaranteed. Call (480) 422-8388.",
  keywords: [
    "pest control Phoenix",
    "AC repair Phoenix",
    "plumbing Phoenix",
    "weed control Phoenix",
    "termite treatment Arizona",
    "HVAC Tucson",
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
      "Family-owned pest control, AC, plumbing & weed control serving 33 cities in Phoenix & Tucson AZ since 2013.",
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
      "Pest control, AC, plumbing & weed control in Phoenix & Tucson AZ",
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
  alternates: {
    canonical: "https://getyourbucksworth.com",
  },
};

/* ── Organization JSON-LD (site-wide) ── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": [
    "https://schema.org/PestControlService",
    "https://schema.org/HVACBusiness",
    "https://schema.org/Plumber",
    "https://schema.org/LandscapingBusiness"
  ],
  "@id": "https://getyourbucksworth.com/#organization",
  name: "Bucksworth Home Services",
  url: "https://getyourbucksworth.com",
  logo: "https://getyourbucksworth.com/images/bucksworth-mascot-clean.jpg",
  image: "https://getyourbucksworth.com/images/bucksworth-mascot-clean.jpg",
  description:
    "Family-owned pest control, AC & heating, plumbing, water heaters, and weed & lawn care serving Phoenix and Tucson, Arizona since 2013.",
  foundingDate: "2013",
  founder: [
    { "@type": "Person", name: "Jordan Moore" },
    { "@type": "Person", name: "Taylor Moore" },
  ],
  telephone: "(480) 422-8388",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Phoenix, AZ",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85001",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4484,
    longitude: -112.074,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.84",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    { "@type": "State", name: "Arizona" },
    { "@type": "City", name: "Phoenix" },
    { "@type": "City", name: "Tucson" },
    { "@type": "City", name: "Mesa" },
    { "@type": "City", name: "Chandler" },
    { "@type": "City", name: "Gilbert" },
    { "@type": "City", name: "Scottsdale" },
    { "@type": "City", name: "Tempe" },
    { "@type": "City", name: "Peoria" },
    { "@type": "City", name: "Surprise" },
    { "@type": "City", name: "Goodyear" },
  ],
  sameAs: [
    "https://www.instagram.com/bucksworth.homeservices/",
    "https://getyourbucksworth.com",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Services",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Pest & Termite Control" },
      { "@type": "OfferCatalog", name: "Air Conditioning & Heating" },
      { "@type": "OfferCatalog", name: "Plumbing & Water Heaters" },
      { "@type": "OfferCatalog", name: "Weed & Lawn Care" },
    ],
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
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#c8102e" />
        <link
          rel="preload"
          as="image"
          href="/images/bucksworth-mascot-clean.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <WebMCPTools />
        <DemandIQ />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
