import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import HomeScripts from "@/components/HomeScripts";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.getyourbucksworth.com",
  },
};

// Organization + WebSite JSON-LD for entity graph
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.getyourbucksworth.com/#organization",
  name: "Bucksworth Home Services",
  legalName: "Bucksworth Home Services LLC",
  url: "https://www.getyourbucksworth.com",
  logo: "https://www.getyourbucksworth.com/images/bucksworth-logo.png",
  image: "https://www.getyourbucksworth.com/images/bucksworth-logo.png",
  description:
    "Arizona's trusted home services company providing pest control, air conditioning, heating, plumbing, water heaters, weed control, and lawn care across 33 cities in the Phoenix and Tucson metro areas. Family-owned since 2013.",
  foundingDate: "2013",
  founder: [
    { "@type": "Person", name: "Jordan Moore" },
    { "@type": "Person", name: "Taylor Moore" },
  ],
  telephone: "(480) 422-8388",
  email: "info@getyourbucksworth.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "2073 W Houston Ave Suite 101",
      addressLocality: "Apache Junction",
      addressRegion: "AZ",
      postalCode: "85120",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "3430 E Sunrise Dr Suite 180",
      addressLocality: "Tucson",
      addressRegion: "AZ",
      postalCode: "85718",
      addressCountry: "US",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4152,
    longitude: -111.5496,
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
    { "@type": "City", name: "Glendale" },
    { "@type": "City", name: "Goodyear" },
    { "@type": "City", name: "Oro Valley" },
    { "@type": "City", name: "Marana" },
  ],
  sameAs: [
    "https://www.facebook.com/bucksworthhomeservices",
    "https://www.instagram.com/bucksworthhomeservices",
    "https://www.youtube.com/@bucksworthhomeservices",
    "https://www.yelp.com/biz/bucksworth-home-services-apache-junction",
    "https://www.google.com/maps/place/Bucksworth+Home+Services",
    "https://www.bbb.org/us/az/apache-junction/profile/pest-control/bucksworth-home-services-1126-1000094916",
    "https://nextdoor.com/pages/bucksworth-home-services-apache-junction-az",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.84",
    reviewCount: "2000",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bucksworth Home Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Pest & Termite Control",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scorpion Control" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Termite Treatment" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roach Elimination" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ant Control" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mosquito Control" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Air Conditioning & Heating",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heating Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ductwork" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Plumbing & Water Heaters",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Detection" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Line Services" } },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Weed & Lawn Care",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Emergent Weed Control" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Fertilization" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bermuda Grass Control" } },
        ],
      },
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, Financing",
  currenciesAccepted: "USD",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.getyourbucksworth.com/#website",
  url: "https://www.getyourbucksworth.com",
  name: "Bucksworth Home Services",
  description:
    "Pest control, air conditioning, heating, plumbing, and lawn care for homes across Phoenix and Tucson, Arizona.",
  publisher: {
    "@id": "https://www.getyourbucksworth.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.getyourbucksworth.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <>
        <HomeContent />
        <HomeScripts />
      </>
    </>
  );
}
