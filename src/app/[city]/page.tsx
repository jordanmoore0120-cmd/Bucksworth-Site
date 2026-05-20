import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug, getPhoneForBranch, getPhoneForBranchRaw } from "@/lib/cities";
import { SERVICES } from "@/lib/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityBar from "@/components/CityBar";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import NearbyCities from "@/components/NearbyCities";
import "@/styles/site.css";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const phone = getPhoneForBranch(city.branch);
  const svcList =
    city.branch === "phoenix"
      ? "pest control, HVAC, plumbing & insulation"
      : "pest control & weed control";

  return {
    title: `${city.name}, AZ Home Services | ${svcList} | Bucksworth`,
    description: `Bucksworth Home Services in ${city.name}, Arizona. ${svcList} with same-day service, free inspections, and a satisfaction guarantee. Call ${phone}.`,
    alternates: { canonical: `https://bucksworth-site.vercel.app/${slug}` },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const phone = getPhoneForBranch(city.branch);
  const phoneRaw = getPhoneForBranchRaw(city.branch);

  // Filter services available in this city's branch
  const availableServices =
    city.branch === "phoenix"
      ? SERVICES
      : SERVICES.filter((s) => s.slug === "pest-control");

  const cityFaqs = [
    {
      q: `What home services does Bucksworth offer in ${city.name}?`,
      a:
        city.branch === "phoenix"
          ? `In ${city.name}, we offer comprehensive pest & termite control, HVAC/air conditioning repair and installation, plumbing services, insulation, and weed control. All services include free inspections and same-day availability.`
          : `In ${city.name}, we provide expert pest & termite control and weed control services. Both include free inspections and same-day availability. Call ${phone} to schedule.`,
    },
    {
      q: `How quickly can Bucksworth respond in ${city.name}?`,
      a: `We offer same-day and next-day service throughout ${city.name} and the surrounding ${city.branch === "phoenix" ? "Phoenix" : "Tucson"} metro area. For emergencies like AC failures or active pest infestations, we prioritize getting a technician to your home as quickly as possible.`,
    },
    {
      q: `Is Bucksworth licensed and insured in Arizona?`,
      a: `Yes. Bucksworth Home Services is fully licensed (AZ ROC #343924, AG License #9613), bonded, and insured. We are Google Guaranteed, meaning Google has verified our licenses and insurance. We have maintained a 4.8+ star rating across 2,000+ reviews.`,
    },
    {
      q: `Does Bucksworth offer free estimates in ${city.name}?`,
      a: `Absolutely. Every new customer in ${city.name} receives a free, no-obligation inspection and estimate. We believe in transparent, upfront pricing with no hidden fees or surprise charges. Call ${phone} or use our online estimator to get started.`,
    },
    {
      q: `What areas near ${city.name} do you serve?`,
      a: `We serve all of ${city.county} County and the surrounding ${city.branch === "phoenix" ? "Phoenix" : "Tucson"} metro area, including ${
        CITIES.filter((c) => c.branch === city.branch && c.slug !== city.slug)
          .slice(0, 5)
          .map((c) => c.name)
          .join(", ")
      }, and more. We cover 33 cities across Arizona.`,
    },
  ];

  // Schema.org LocalBusiness
  const schema = {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name: `Bucksworth Home Services - ${city.name}`,
    description: city.description,
    telephone: phone,
    url: `https://bucksworth-site.vercel.app/${slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "AZ",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.84",
      reviewCount: "50",
    },
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <CityBar currentCity={city} />

      <div className="container">
        <Breadcrumbs crumbs={[{ label: city.name }]} />
      </div>

      {/* Hero */}
      <section className="city-hero">
        <div className="city-hero-inner">
          <p className="city-hero-eyebrow">
            {city.branch === "phoenix" ? "Phoenix" : "Tucson"} Metro &bull;{" "}
            {city.county} County
          </p>
          <h1>
            Home Services in{" "}
            <span className="orange">{city.name}, Arizona</span>
          </h1>
          <p className="city-hero-desc">{city.description}</p>
          <div className="city-hero-badges">
            <span className="city-hero-badge">&#9733; 4.8 Stars (2,000+ Reviews)</span>
            <span className="city-hero-badge">&#10003; Google Guaranteed</span>
            <span className="city-hero-badge">&#9201; Same-Day Service</span>
            <span className="city-hero-badge">&#127968; Family Owned Since 2013</span>
          </div>
          <div className="city-hero-cta">
            <a href={`tel:${phoneRaw}`} className="btn-call">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
              Call {phone}
            </a>
            <a href="/#estimate-form" className="btn-estimate">
              Get Free Estimate &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="svc-cards-section">
        <div className="container">
          <h2 className="section-title">
            Our Services in {city.name}
          </h2>
          {availableServices.map((svc, i) => (
            <ServiceCard
              key={svc.slug}
              service={svc}
              city={city}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </section>

      {/* Process */}
      <ProcessSteps
        steps={[
          { step: 1, title: "Call or Book Online", desc: `Reach us at ${phone} or use our online estimator. Same-day service available in ${city.name}.` },
          { step: 2, title: "Free Inspection", desc: `A Bucksworth technician visits your ${city.name} home, inspects the issue, and provides an upfront written estimate.` },
          { step: 3, title: "Expert Service", desc: "Our licensed, insured team completes the work with quality materials and backs everything with our satisfaction guarantee." },
          { step: 4, title: "Ongoing Protection", desc: "We follow up to ensure satisfaction and offer ongoing maintenance plans to keep your home protected year-round." },
        ]}
        color="#dc2626"
        title={`How It Works in ${city.name}`}
      />

      {/* Mid-page CTA */}
      <CTASection city={city} variant="primary" />

      {/* SEO content body */}
      <section className="svc-hub-content">
        <div className="svc-hub-content-inner">
          <h2>Why {city.name} Homeowners Choose Bucksworth</h2>
          <p>
            {city.name} sits in {city.county} County with a population of approximately {city.population} residents. {city.description} Bucksworth Home Services has been serving {city.name} families since 2013 with honest, reliable home services that protect your biggest investment.
          </p>
          <p>
            Every Bucksworth technician is licensed, insured, and trained specifically for Arizona&apos;s unique challenges. From the extreme summer heat that pushes HVAC systems to their limits, to the year-round pest pressure from scorpions, termites, and rodents, we understand what {city.name} homes need because we live here too.
          </p>

          <h2>Serving All of {city.name}</h2>
          <p>
            We serve every neighborhood in {city.name} and the surrounding areas.{" "}
            {city.zipCodes.length > 0 && (
              <>
                Our service area in {city.name} includes zip codes{" "}
                {city.zipCodes.join(", ")}.{" "}
              </>
            )}
            Whether you&apos;re in a newer subdivision or an established neighborhood, Bucksworth provides the same level of expert service and attention to detail.
          </p>

          <h2>Arizona Licensed &amp; Google Guaranteed</h2>
          <p>
            Bucksworth Home Services holds Arizona ROC License #343924 and AG License #9613. We are Google Guaranteed, meaning Google has verified our business licenses, insurance, and background checks. When you hire Bucksworth in {city.name}, you&apos;re hiring a company that Google trusts enough to back with their own guarantee.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        faqs={cityFaqs}
        title={`${city.name} Home Services FAQ`}
        cityName={city.name}
      />

      {/* Bottom CTA */}
      <CTASection
        city={city}
        variant="secondary"
        headline={`Get Your Bucksworth in ${city.name}`}
        subtext="Free inspections. Same-day service. No gimmicks."
      />

      {/* Nearby cities */}
      <NearbyCities currentCity={city} />

      <Footer />
    </>
  );
}
