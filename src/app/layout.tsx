import type { Metadata } from "next";
import "@/styles/globals.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bucksworth-site.vercel.app"),
  title: {
    default:
      "Bucksworth Home Services | Pest Control, HVAC, Plumbing & Weed Control in Phoenix & Tucson AZ",
    template: "%s | Bucksworth Home Services",
  },
  description:
    "Family-owned pest control, AC & heating, plumbing, water heaters, and weed & lawn care serving 33 cities across Phoenix and Tucson, Arizona since 2013. Google Guaranteed. Same-day service. AZ ROC #343924. Call (480) 422-8388.",
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
    url: "https://bucksworth-site.vercel.app",
    siteName: "Bucksworth Home Services",
    title:
      "Bucksworth Home Services | Pest Control, HVAC, Plumbing & Weed Control in Phoenix & Tucson AZ",
    description:
      "Family-owned home services company serving 33 cities across Phoenix and Tucson, Arizona since 2013. Pest control, AC & heating, plumbing, water heaters, and weed & lawn care.",
    images: [
      {
        url: "/images/bucksworth-mascot-clean.jpg",
        width: 400,
        height: 400,
        alt: "Bucksworth Home Services mascot",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Bucksworth Home Services",
    description:
      "Pest control, AC, plumbing & weed control in Phoenix & Tucson AZ",
    images: ["/images/bucksworth-mascot-clean.jpg"],
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
    canonical: "https://bucksworth-site.vercel.app",
  },
};

/* ── Organization JSON-LD (site-wide) ── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://bucksworth-site.vercel.app/#organization",
  name: "Bucksworth Home Services",
  url: "https://bucksworth-site.vercel.app",
  logo: "https://bucksworth-site.vercel.app/images/bucksworth-mascot-clean.jpg",
  image: "https://bucksworth-site.vercel.app/images/bucksworth-mascot-clean.jpg",
  description:
    "Family-owned pest control, AC & heating, plumbing, water heaters, and weed & lawn care serving Phoenix and Tucson, Arizona since 2013.",
  foundingDate: "2013",
  founder: [
    { "@type": "Person", name: "Jordan Moore" },
    { "@type": "Person", name: "Taylor Moore" },
  ],
  telephone: "(480) 422-8388",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Arizona" },
    { "@type": "City", name: "Phoenix" },
    { "@type": "City", name: "Tucson" },
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
        {children}
      </body>
    </html>
  );
}
