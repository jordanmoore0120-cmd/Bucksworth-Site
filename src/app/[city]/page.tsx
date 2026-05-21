import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CITIES, getCityBySlug, getPhoneForBranch, getPhoneForBranchRaw } from "@/lib/cities";
import { SERVICES } from "@/lib/services";
import { getNeighborhoods } from "@/lib/neighborhoods";
import CityBar from "@/components/CityBar";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import NearbyCities from "@/components/NearbyCities";

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
  const nd = getNeighborhoods(slug);
  const topAreas = nd.neighborhoods.slice(0, 3).map((n) => n.name).join(", ");

  const svcList =
    city.branch === "phoenix"
      ? "pest control, HVAC, plumbing & insulation"
      : "pest control & weed control";

  return {
    title: `${city.name}, AZ Home Services | ${svcList} | Bucksworth`,
    description: `Bucksworth Home Services in ${city.name}, Arizona \u2014 serving ${topAreas} and all neighborhoods. ${svcList} with same-day service, free inspections. Call ${phone}.`,
    alternates: { canonical: `https://bucksworth-site.vercel.app/${slug}` },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const phone = getPhoneForBranch(city.branch);
  const phoneRaw = getPhoneForBranchRaw(city.branch);
  const nd = getNeighborhoods(slug);
  const branch = city.branch === "phoenix" ? "Phoenix" : "Tucson";

  // Filter services available in this city's branch
  const availableServices =
    city.branch === "phoenix"
      ? SERVICES
      : SERVICES.filter((s) => s.slug === "pest-and-termite" || s.slug === "weed-and-lawn-care");

  // Build neighborhood-enriched FAQs
  const topAreas = nd.neighborhoods.slice(0, 5).map((n) => n.name);
  const cityFaqs = [
    {
      q: `What neighborhoods in ${city.name} does Bucksworth serve?`,
      a: `We serve every neighborhood in ${city.name}, including ${topAreas.join(", ")}${nd.neighborhoods.length > 5 ? `, and ${nd.neighborhoods.length - 5} more` : ""}. Whether you live near ${nd.landmarks[0] || city.name + " proper"} or on the other side of town, our technicians know your area and can typically arrive the same day.`,
    },
    {
      q: `What home services does Bucksworth offer in ${city.name}?`,
      a:
        city.branch === "phoenix"
          ? `In ${city.name}, we offer comprehensive pest & termite control, HVAC/air conditioning repair and installation, plumbing services, insulation, and weed control. All services include free inspections and same-day availability across all ${city.name} zip codes: ${city.zipCodes.join(", ")}.`
          : `In ${city.name}, we provide expert pest & termite control and weed control services. Both include free inspections and same-day availability across zip codes ${city.zipCodes.join(", ")}. Call ${phone} to schedule.`,
    },
    {
      q: `How quickly can Bucksworth respond in ${city.name}?`,
      a: `We offer same-day and next-day service throughout ${city.name} and the ${branch} metro area. Our ${branch} dispatch center is strategically located to reach all ${city.name} neighborhoods quickly. For emergencies like AC failures or active pest infestations, we prioritize rapid response.`,
    },
    {
      q: `Is Bucksworth licensed and insured in Arizona?`,
      a: `Yes. Bucksworth Home Services is fully licensed (AZ ROC #343924, AG License #9613), bonded, and insured. We are Google Guaranteed, meaning Google has verified our licenses and insurance. We have maintained a 4.8+ star rating across 2,000+ reviews from homeowners throughout ${city.name} and the ${branch} metro.`,
    },
    {
      q: `Does Bucksworth offer free estimates in ${city.name}?`,
      a: `Absolutely. Every customer in ${city.name} receives a free, no-obligation inspection and estimate. We provide transparent, upfront pricing with no hidden fees or surprise charges. Call ${phone} or use our online estimator to get started.`,
    },
    {
      q: `What makes ${city.name} homes unique for pest control?`,
      a: nd.neighborhoods.length > 0
        ? `${city.name} faces specific challenges that generic providers miss. For example, ${nd.neighborhoods[0].desc} Our technicians understand these neighborhood-level differences and customize their approach for each area of ${city.name}.`
        : `${city.name} is surrounded by the Sonoran Desert, which creates unique pest pressures that generic providers cannot address. Our technicians are trained specifically for Arizona conditions and customize their approach for every home.`,
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
    areaServed: [
      { "@type": "City", name: city.name },
      ...nd.neighborhoods.map((n) => ({
        "@type": "Neighborhood" as const,
        name: n.name,
        containedInPlace: { "@type": "City" as const, name: city.name },
      })),
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.84",
      reviewCount: "2000",
    },
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CityBar currentCity={city} />
      <main id="main-content">
      <div className="container">
        <Breadcrumbs crumbs={[{ label: city.name }]} />
      </div>

      {/* Hero with real photo background */}
      <section className="city-hero" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src={city.branch === "phoenix" ? "/images/photos/truck-driving-phoenix.jpg" : "/images/photos/tech-outdoor-service.jpg"}
            alt={`Bucksworth Home Services in ${city.name}, Arizona`}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            loading="eager"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(26,26,46,0.88) 0%, rgba(26,26,46,0.65) 100%)" }} />
        </div>
        <div className="city-hero-inner" style={{ position: "relative", zIndex: 1 }}>
          <p className="city-hero-eyebrow">
            {branch} Metro &bull; {city.county} County
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
            <a href="https://portal.hero.demand-iq.com" target="_blank" rel="noopener" className="btn-estimate">
              Get Free Estimate &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="svc-cards-section">
        <div className="container">
          <h2 className="section-title">Our Services in {city.name}</h2>
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

      {/* ═══════════════════════════════════════════
          NEIGHBORHOOD & ZIP CODE SECTION
          ═══════════════════════════════════════════ */}
      {nd.neighborhoods.length > 0 && (
        <section className="svc-hub-content neighborhood-section">
          <div className="svc-hub-content-inner">
            <h2>Neighborhoods We Serve in {city.name}</h2>
            <p>
              Bucksworth provides expert home services to every corner of {city.name}. 
              Our technicians don&apos;t just know {city.name} &mdash; they know your specific 
              neighborhood and the challenges that come with it. Here are some of the 
              communities we serve:
            </p>

            <div className="neighborhood-grid">
              {nd.neighborhoods.map((n) => (
                <div key={n.name} className="neighborhood-card">
                  <h3>{n.name}</h3>
                  <p className="neighborhood-zips">
                    {n.zips.length > 0 && <>ZIP: {n.zips.join(", ")}</>}
                  </p>
                  <p>{n.desc}</p>
                </div>
              ))}
            </div>

            {nd.landmarks.length > 0 && (
              <>
                <h3>Local Landmarks &amp; Areas We Cover</h3>
                <p>
                  Whether you live near {nd.landmarks.slice(0, -1).join(", ")}
                  {nd.landmarks.length > 1 ? `, or ${nd.landmarks[nd.landmarks.length - 1]}` : nd.landmarks[0]} &mdash; 
                  Bucksworth has technicians who know your area and can be at your door 
                  the same day you call {phone}.
                </p>
              </>
            )}
          </div>
        </section>
      )}

      {/* ZIP Code Coverage */}
      {city.zipCodes.length > 0 && (
        <section className="svc-hub-content zip-section">
          <div className="svc-hub-content-inner">
            <h2>{city.name} ZIP Codes We Service</h2>
            <div className="zip-grid">
              {city.zipCodes.map((zip) => {
                const matchingNeighborhood = nd.neighborhoods.find((n) =>
                  n.zips.includes(zip)
                );
                return (
                  <div key={zip} className="zip-card">
                    <span className="zip-code">{zip}</span>
                    {matchingNeighborhood && (
                      <span className="zip-area">{matchingNeighborhood.name}</span>
                    )}
                  </div>
                );
              })}
            </div>
            <p>
              Don&apos;t see your zip code listed? We likely still serve your area. 
              Bucksworth covers all of {city.name} and the surrounding {branch} metro area. 
              Call {phone} to confirm service availability at your address.
            </p>
          </div>
        </section>
      )}

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

      {/* Deep SEO Content with neighborhood context */}
      <section className="svc-hub-content">
        <div className="svc-hub-content-inner">
          <h2>Why {city.name} Homeowners Choose Bucksworth</h2>
          <p>
            {city.name} sits in {city.county} County with a population of approximately {city.population} residents. {city.description} Bucksworth Home Services has been the trusted choice for {city.name} families since 2013 with honest, reliable home services that protect your biggest investment.
          </p>
          <p>
            What sets Bucksworth apart in {city.name} is our neighborhood-level knowledge. 
            {nd.neighborhoods.length > 2 && (
              <>
                {" "}A home in {nd.neighborhoods[0].name} faces completely different challenges than one in {nd.neighborhoods[1].name}. {nd.neighborhoods[0].desc} Meanwhile, in {nd.neighborhoods[1].name}, {nd.neighborhoods[1].desc.toLowerCase()} Our technicians understand these differences and tailor every service call to your specific situation.
              </>
            )}
          </p>

          <h2>Arizona&apos;s Climate and Your {city.name} Home</h2>
          <p>
            Arizona&apos;s extreme environment creates conditions that demand expert home services. Summer temperatures in {city.name} regularly exceed 110&deg;F, stressing HVAC systems that were designed for moderate climates. The monsoon season brings sudden moisture that can drive scorpions and termites indoors, cause plumbing backups from flash flooding, and overwhelm aging insulation. Winter temperature swings between day and night create expansion and contraction cycles that open cracks in foundations &mdash; entry points for pests and causes of plumbing leaks.
          </p>
          <p>
            {nd.neighborhoods.length > 0 && (
              <>
                These challenges intensify in specific {city.name} neighborhoods. Near {nd.landmarks[0] || "the desert edge"}, the natural landscape pushes wildlife directly into residential areas. In established communities like {nd.neighborhoods[nd.neighborhoods.length > 2 ? 2 : 0].name}, aging construction means more entry points for pests, older HVAC ductwork that leaks conditioned air, and plumbing systems approaching their lifespan limits.
              </>
            )}
          </p>

          <h2>Complete Zip Code Coverage Across {city.name}</h2>
          <p>
            Our {branch} dispatch center ensures fast response times across all of {city.name}.
            {city.zipCodes.length > 0 && (
              <> We actively service zip codes {city.zipCodes.join(", ")} and all adjacent areas.</>
            )}
            {" "}When you call {phone}, we typically schedule same-day or next-day appointments. For HVAC emergencies during Arizona&apos;s extreme summers, or active scorpion infestations, we prioritize getting a technician to your {city.name} home as quickly as possible.
          </p>
          <p>
            No matter which {city.name} neighborhood you call home &mdash; whether it&apos;s a newer master-planned community, an established neighborhood with mature landscaping, or a custom home on the desert&apos;s edge &mdash; Bucksworth delivers the same level of expert service, transparent pricing, and satisfaction guarantee.
          </p>

          <h2>Arizona Licensed &amp; Google Guaranteed</h2>
          <p>
            Bucksworth Home Services is family-owned by Jordan and Taylor Moore, founded right here in Arizona in 2013. We treat every home like it&apos;s Gigi&apos;s &mdash; with honest work, quality materials, and genuine care. That philosophy has earned us a 4.8-star rating across 2,000+ reviews from Arizona homeowners, including many of your neighbors right here in {city.name}.
          </p>
          <p>
            We hold Arizona ROC License #343924 and AG License #9613. We are Google Guaranteed, meaning Google has independently verified our business licenses, insurance coverage, and employee background checks. Every technician is fully licensed, insured, and undergoes ongoing training to stay current with the latest techniques, materials, and industry best practices.
          </p>
          <p>
            Ready to protect your {city.name} home? Call us today at {phone} or use our online estimator. Free inspections, same-day service, no contracts, no gimmicks, no bait-and-switch. Just honest, expert home services from your Arizona neighbors.
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

      </main>
    </>
  );
}
