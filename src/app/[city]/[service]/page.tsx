import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CITIES, getCityBySlug, getPhoneForBranch, getPhoneForBranchRaw } from "@/lib/cities";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { getNeighborhoods } from "@/lib/neighborhoods";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityBar from "@/components/CityBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import NearbyCities from "@/components/NearbyCities";
import "@/styles/site.css";

interface ServiceHubProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  const combos: { city: string; service: string }[] = [];
  for (const city of CITIES) {
    const services =
      city.branch === "phoenix"
        ? SERVICES
        : SERVICES.filter((s) => s.slug === "pest-and-termite" || s.slug === "weed-and-lawn-care");
    for (const svc of services) {
      combos.push({ city: city.slug, service: svc.slug });
    }
  }
  return combos;
}

export async function generateMetadata({ params }: ServiceHubProps): Promise<Metadata> {
  const { city: citySlug, service: svcSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(svcSlug);
  if (!city || !service) return {};

  const phone = getPhoneForBranch(city.branch);
  return {
    title: `${service.name} in ${city.name}, AZ | Bucksworth Home Services`,
    description: `Professional ${service.name.toLowerCase()} in ${city.name}, Arizona. ${service.tagline}. Same-day service, free inspections. Call ${phone}.`,
    alternates: { canonical: `https://bucksworth-site.vercel.app/${citySlug}/${svcSlug}` },
  };
}

export default async function ServiceHubPage({ params }: ServiceHubProps) {
  const { city: citySlug, service: svcSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(svcSlug);
  if (!city || !service) notFound();

  const phone = getPhoneForBranch(city.branch);
  const phoneRaw = getPhoneForBranchRaw(city.branch);

  // Service-specific FAQs with city name injected
  const localFaqs = service.faqs.map((faq) => ({
    q: faq.q.includes(city.name) ? faq.q : faq.q.replace(/\?$/, ` in ${city.name}?`),
    a: faq.a,
  }));

  // Nearby cities for this service
  const nearbyCities = CITIES.filter(
    (c) =>
      c.branch === city.branch &&
      c.slug !== city.slug
  );

  // Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} - ${city.name}, AZ`,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Bucksworth Home Services",
      telephone: phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "AZ",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
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
        <Breadcrumbs
          crumbs={[
            { label: city.name, href: `/${city.slug}` },
            { label: service.name },
          ]}
        />
      </div>

      {/* Hero with background image */}
      <section className="svc-hub-hero">
        <div className="svc-hub-hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.heroImage} alt={`${service.name} in ${city.name}`} />
        </div>
        <div className="svc-hub-hero-overlay" />
        <div className="svc-hub-hero-content">
          <p className="city-hero-eyebrow">{city.name}, Arizona</p>
          <h1>
            {service.name} in <span>{city.name}</span>
          </h1>
          <p>{service.tagline}. Bucksworth Home Services provides professional {service.name.toLowerCase()} for homes and businesses throughout {city.name} and {city.county} County.</p>
          <div className="city-hero-cta" style={{ marginTop: "20px" }}>
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

      {/* Sub-service grid */}
      <section className="svc-cards-section">
        <div className="container">
          <h2 className="section-title">
            {service.name} Services in {city.name}
          </h2>
          <div className="svc-hub-grid">
            {service.subServices.map((sub) => (
              <Link
                key={sub.slug}
                href={`/${city.slug}/${service.slug}/${sub.slug}`}
                className="svc-hub-card"
              >
                <h3>{sub.name}</h3>
                <p>{sub.longDesc}</p>
                <span className="svc-hub-card-link">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <ProcessSteps
        steps={service.process}
        color={service.color}
        title={`Our ${service.name} Process`}
      />

      {/* Mid-page CTA */}
      <CTASection
        city={city}
        variant="primary"
        headline={`Need ${service.name} in ${city.name}?`}
        subtext={`Same-day service available. Free inspections. Call ${phone} or get an online estimate.`}
      />

      {/* SEO content */}
      <section className="svc-hub-content">
        <div className="svc-hub-content-inner">
          <h2>{service.name} in {city.name}, Arizona</h2>
          <p>{service.description}</p>

          <h2>Why Choose Bucksworth for {service.name}</h2>
          <p>
            Bucksworth Home Services has been providing expert {service.name.toLowerCase()} in {city.name} and the {city.branch === "phoenix" ? "Phoenix" : "Tucson"} metro since 2013. Our technicians are licensed, insured, and trained specifically for Arizona&apos;s unique challenges. We offer same-day service, free inspections, and upfront pricing with no hidden fees.
          </p>
          <p>
            As a family-owned company, we treat every home like it&apos;s our Gigi&apos;s. That means honest work, quality materials, and a satisfaction guarantee on every job. We are Google Guaranteed and maintain a 4.8+ star rating across 2,000+ reviews from Arizona homeowners.
          </p>

          <h2>Serving All of {city.name} &amp; {city.county} County</h2>
          <p>
            Our {service.name.toLowerCase()} team serves every neighborhood in {city.name} ({city.zipCodes.join(", ")}) and the surrounding {city.branch === "phoenix" ? "Phoenix" : "Tucson"} metro area. Whether you need emergency service or want to schedule a routine appointment, we are here to help.
          </p>

          <h2>Our {service.name} Services Include</h2>
          <p>
            {service.subServices.map((sub) => sub.name).join(" \u2022 ")}
          </p>
          <p>
            Each service includes a thorough inspection, transparent pricing, professional treatment by licensed technicians, and our satisfaction guarantee. Call {phone} to schedule your free inspection in {city.name} today.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        faqs={localFaqs}
        title={`${service.name} FAQ - ${city.name}`}
      />

      {/* Nearby cities offering this service */}
      <section className="nearby-section">
        <h2 className="nearby-heading">
          {service.name} in Nearby Cities
        </h2>
        <div className="nearby-grid">
          {nearbyCities.map((c) => (
            <Link key={c.slug} href={`/${c.slug}/${service.slug}`} className="nearby-link">
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection city={city} variant="secondary" />

      <Footer />
    </>
  );
}
