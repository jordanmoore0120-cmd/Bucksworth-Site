import type { Metadata } from "next";
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
  metadataBase: new URL("https://getyourbucksworth.com"),
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.84",
    reviewCount: "2000",
    bestRating: "5",
    worstRating: "1",
  },
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
        {/* Critical CSS for hero section - eliminates render-blocking delay for FCP/LCP */}
        <style dangerouslySetInnerHTML={{ __html: `:root{--red:#d4192c;--red-dark:#b5131f;--red-light:#e8283b;--navy:#002664;--navy-dark:#001a47;--navy-light:#04449c;--orange:#ff9c00;--orange-light:#ffb833;--gold:#fed700;--white:#FFF;--g50:#F8F9FA;--g100:#F1F3F5;--g200:#E9ECEF;--g300:#DEE2E6;--g500:#4b5563;--g700:#495057;--g900:#212529}.hero .container{display:grid;grid-template-columns:1fr 440px;gap:40px;align-items:end;position:relative;z-index:1}.hero-text{padding-bottom:56px}.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,156,0,.15);border:1px solid rgba(255,156,0,.4);padding:6px 16px;border-radius:4px;font-size:13px;color:var(--orange);font-weight:600;letter-spacing:.5px;text-transform:uppercase;margin-bottom:20px}.hero h1{font-family:'Oswald',sans-serif;font-size:48px;font-weight:700;line-height:1.05;margin-bottom:16px;letter-spacing:1px;text-transform:uppercase}.hero h1 .orange{color:var(--orange)}.hero .tagline{font-size:17px;color:rgba(255,255,255,.75);margin-bottom:28px;line-height:1.6}.zip-selector{background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.2);border-radius:12px;padding:24px;margin-bottom:28px}.zip-selector label{font-family:'Oswald',sans-serif;font-size:16px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px;display:block;color:var(--orange)}.zip-row{display:flex;gap:10px}.zip-input{flex:1;padding:14px 16px;border-radius:8px;border:none;font-size:16px;font-family:inherit;background:var(--white);color:var(--g900)}.zip-input::placeholder{color:var(--g500)}.zip-btn{background:var(--red);color:white;border:none;padding:14px 28px;border-radius:8px;font-family:'Oswald',sans-serif;font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:1px;cursor:pointer;white-space:nowrap}.zip-btn:hover{background:var(--red-light)}.zip-or{text-align:center;font-size:13px;color:rgba(255,255,255,.5);margin:12px 0;text-transform:uppercase;letter-spacing:1px}.city-quick-links{display:flex;flex-wrap:wrap;gap:6px}.city-quick:hover{background:rgba(255,255,255,.15);color:white;border-color:rgba(255,255,255,.3)}.hero-proof{display:flex;gap:20px;font-size:13px;color:rgba(255,255,255,.6)}.hero-proof span{display:flex;align-items:center;gap:6px}.hero-proof .check{color:var(--orange);font-size:16px}.hero-right{display:flex;flex-direction:column;align-items:center}.hero-form{background:var(--white);border-radius:12px;padding:28px;box-shadow:0 20px 60px rgba(0,0,0,.3);width:100%;margin-bottom:-30px;position:relative;z-index:2;border-top:4px solid var(--red)}.hero-form .form-label{color:var(--red);font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px}.hero-form h3{color:var(--g900);font-family:'Oswald',sans-serif;font-size:22px;font-weight:700;margin-bottom:4px;text-transform:uppercase}.hero-form .subtitle{color:var(--g500);font-size:13px;margin-bottom:16px}.hero-form input,.hero-form select,.hero-form textarea{width:100%;padding:10px 12px;border:1.5px solid var(--g200);border-radius:6px;font-size:14px;font-family:inherit;margin-bottom:10px;background:var(--g50)}.hero-form input:focus,.hero-form select:focus{outline:none;border-color:var(--navy);background:white}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}.btn-submit{width:100%;background:var(--red);color:white;padding:13px;border:none;border-radius:6px;font-size:16px;font-weight:700;font-family:'Oswald',sans-serif;text-transform:uppercase;letter-spacing:1px;cursor:pointer}.btn-submit:hover{background:var(--red-light)}.hf-cards{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}.hf-card:hover{border-color:var(--navy);transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.1)}.hf-card--selected .hf-card-label{background:var(--red);color:white}.hf-card-img{width:100%;height:100px;background-size:cover;background-position:center}.hf-card-label{display:block;padding:8px 4px;font-size:13px;font-weight:700;font-family:'Oswald',sans-serif;text-transform:uppercase;color:var(--navy);letter-spacing:.5px;transition:all .2s}.hf-fields{display:none}.hf-fields-title{color:var(--navy);font-family:'Oswald',sans-serif;font-size:16px;font-weight:700;margin-bottom:12px;text-transform:uppercase;letter-spacing:.5px}.section-eyebrow{color:var(--red);font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px}.city-grid-section .section-eyebrow{text-align:center}.emergency h2 .orange{color:var(--orange)}.footer-cta h2 .orange{color:var(--orange)}.zip-result{display:none;background:var(--white);border:2px solid var(--red);border-radius:8px;padding:14px 20px;margin-top:12px;color:var(--g900);font-size:14px;font-weight:500;box-shadow:0 4px 20px rgba(0,0,0,.2)}.zip-result a{color:var(--red);font-weight:700;text-decoration:none;font-size:15px}.zip-result.show{display:block}.zip-no-match{display:none;margin-top:8px;font-size:13px;color:rgba(255,255,255,.7)}.zip-no-match.show{display:block}@media(max-width:968px){.hero .container{grid-template-columns:1fr}.hero h1{font-size:36px}.trust-bar .container{grid-template-columns:repeat(2,1fr)}.services-grid{grid-template-columns:repeat(2,1fr)}.gigi-grid,.areas-grid{grid-template-columns:1fr}.gigi-video{max-height:480px;max-width:270px;margin:0 auto}.reviews-grid,.content-categories{grid-template-columns:1fr}.emergency .container{grid-template-columns:1fr;text-align:center}.city-grid{grid-template-columns:1fr}.zip-row{flex-direction:column}}.skip-link{position:absolute;top:-100px;left:16px;background:#C41E3A;color:white;padding:8px 16px;z-index:10000;font-weight:700;border-radius:0 0 8px 8px;text-decoration:none;transition:top 0.2s;}.skip-link:focus{top:0;}.hero-brand{font-size:1.05rem;line-height:1.7;color:rgba(255,255,255,0.88);max-width:580px;margin:0 0 28px 0;font-style:italic;}.zip-result{margin-top:12px;padding:10px 16px;border-radius:8px;font-size:0.9rem;font-weight:600;display:none;}` }} />
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
