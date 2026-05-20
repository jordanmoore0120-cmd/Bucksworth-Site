import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CITIES,
  getCityBySlug,
  getPhoneForBranch,
  getPhoneForBranchRaw,
} from "@/lib/cities";
import {
  SERVICES,
  getServiceBySlug,
  getSubServiceBySlug,
} from "@/lib/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CityBar from "@/components/CityBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import "@/styles/site.css";

interface SubServicePageProps {
  params: Promise<{ city: string; service: string; subservice: string }>;
}

/* ── Static params: generate all city x service x sub-service combos ── */
export async function generateStaticParams() {
  const combos: { city: string; service: string; subservice: string }[] = [];
  for (const city of CITIES) {
    const verticals =
      city.branch === "phoenix"
        ? SERVICES
        : SERVICES.filter((s) => s.slug === "pest-control");
    for (const svc of verticals) {
      for (const sub of svc.subServices) {
        combos.push({
          city: city.slug,
          service: svc.slug,
          subservice: sub.slug,
        });
      }
    }
  }
  return combos;
}

/* ── Meta ── */
export async function generateMetadata({
  params,
}: SubServicePageProps): Promise<Metadata> {
  const { city: cSlug, service: sSlug, subservice: ssSlug } = await params;
  const city = getCityBySlug(cSlug);
  const service = getServiceBySlug(sSlug);
  const sub = service ? getSubServiceBySlug(sSlug, ssSlug) : undefined;
  if (!city || !service || !sub) return {};

  const phone = getPhoneForBranch(city.branch);
  return {
    title: `${sub.name} in ${city.name}, AZ | ${service.name} | Bucksworth`,
    description: `Professional ${sub.name.toLowerCase()} in ${city.name}, Arizona. ${sub.shortDesc} Same-day service, free inspections. Call ${phone}.`,
    alternates: {
      canonical: `https://bucksworth-site.vercel.app/${cSlug}/${sSlug}/${ssSlug}`,
    },
  };
}

/* ── Page ── */
export default async function SubServicePage({
  params,
}: SubServicePageProps) {
  const { city: cSlug, service: sSlug, subservice: ssSlug } = await params;
  const city = getCityBySlug(cSlug);
  const service = getServiceBySlug(sSlug);
  const sub = service ? getSubServiceBySlug(sSlug, ssSlug) : undefined;
  if (!city || !service || !sub) notFound();

  const phone = getPhoneForBranch(city.branch);
  const phoneRaw = getPhoneForBranchRaw(city.branch);
  const branch = city.branch === "phoenix" ? "Phoenix" : "Tucson";

  // Build contextual content blocks for 1200+ word target
  const content = buildContent(sub.name, sub.longDesc, city.name, branch, city.county, phone, service.name, city.zipCodes, city.population);

  // Related sub-services (same vertical, excluding current)
  const relatedSubs = service.subServices.filter((s) => s.slug !== ssSlug);

  // Nearby cities with this service
  const nearbyCities = CITIES.filter(
    (c) =>
      c.branch === city.branch &&
      c.slug !== city.slug &&
      (city.branch === "phoenix" || service.slug === "pest-control")
  );

  // FAQs
  const faqs = buildFaqs(sub.name, city.name, phone, service.name, branch);

  // Schema.org
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${sub.name} - ${city.name}, AZ`,
    description: sub.longDesc,
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
    areaServed: { "@type": "City", name: city.name },
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
            { label: service.name, href: `/${city.slug}/${service.slug}` },
            { label: sub.name },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="city-hero">
        <div className="city-hero-inner">
          <p className="city-hero-eyebrow">
            {city.name}, Arizona &bull; {service.name}
          </p>
          <h1>
            <span className="orange">{sub.name}</span> in {city.name}, AZ
          </h1>
          <p className="city-hero-desc">{sub.longDesc}</p>
          <div className="city-hero-badges">
            <span className="city-hero-badge">&#9733; 4.8 Stars</span>
            <span className="city-hero-badge">&#10003; Licensed &amp; Insured</span>
            <span className="city-hero-badge">&#9201; Same-Day Available</span>
            <span className="city-hero-badge">&#128176; Free Estimates</span>
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

      {/* Deep SEO content - 1200+ words */}
      <section className="svc-hub-content">
        <div className="svc-hub-content-inner">
          {content.map((block, i) => (
            <div key={i}>
              <h2>{block.heading}</h2>
              {block.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Process steps */}
      <ProcessSteps
        steps={service.process}
        color={service.color}
        title={`Our ${sub.name} Process`}
      />

      {/* Mid CTA */}
      <CTASection
        city={city}
        variant="primary"
        headline={`Need ${sub.name} in ${city.name}?`}
        subtext={`Same-day service. Free inspections. Call ${phone} or book online.`}
      />

      {/* FAQ */}
      <FAQAccordion faqs={faqs} title={`${sub.name} FAQ - ${city.name}`} />

      {/* Related services */}
      <section className="svc-cards-section">
        <div className="container">
          <h2 className="section-title">
            Other {service.name} Services in {city.name}
          </h2>
          <div className="svc-hub-grid">
            {relatedSubs.slice(0, 6).map((rs) => (
              <Link
                key={rs.slug}
                href={`/${city.slug}/${service.slug}/${rs.slug}`}
                className="svc-hub-card"
              >
                <h3>{rs.name}</h3>
                <p>{rs.shortDesc}</p>
                <span className="svc-hub-card-link">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities for this sub-service */}
      <section className="nearby-section">
        <h2 className="nearby-heading">
          {sub.name} in Nearby Cities
        </h2>
        <div className="nearby-grid">
          {nearbyCities.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}/${service.slug}/${sub.slug}`}
              className="nearby-link"
            >
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

/* ═══════════════════════════════════════════════════════════════════
   Content Builder — generates 1200+ word SEO-rich content
   Unique per sub-service x city combination
   ═══════════════════════════════════════════════════════════════════ */
interface ContentBlock {
  heading: string;
  paragraphs: string[];
}

function buildContent(
  subName: string,
  longDesc: string,
  cityName: string,
  branch: string,
  county: string,
  phone: string,
  verticalName: string,
  zipCodes: string[],
  population: string
): ContentBlock[] {
  const zips = zipCodes.length > 0 ? zipCodes.join(", ") : "";

  return [
    {
      heading: `Professional ${subName} in ${cityName}, Arizona`,
      paragraphs: [
        `${longDesc} Bucksworth Home Services has been the trusted choice for ${subName.toLowerCase()} in ${cityName} and the greater ${branch} metro area since 2013. Our licensed, insured technicians bring years of Arizona-specific experience to every job.`,
        `${cityName} homeowners face unique challenges that generic solutions cannot address. With a population of approximately ${population} residents across ${county} County, the demand for expert ${subName.toLowerCase()} continues to grow. Bucksworth meets that demand with same-day service availability, transparent pricing, and a satisfaction guarantee on every job.`,
        `Whether you are dealing with an emergency situation or planning preventive maintenance, our ${cityName} ${subName.toLowerCase()} team is ready to help. Call ${phone} for a free inspection and upfront estimate with no hidden fees or surprise charges.`,
      ],
    },
    {
      heading: `Why ${cityName} Homes Need ${subName}`,
      paragraphs: [
        `Arizona's extreme climate creates conditions that make ${subName.toLowerCase()} essential for every homeowner. Summer temperatures in ${cityName} routinely exceed 110 degrees Fahrenheit, while the monsoon season brings sudden moisture that compounds existing problems. These environmental factors make proactive ${subName.toLowerCase()} not just a convenience but a necessity for protecting your home and family.`,
        `The Sonoran Desert environment surrounding ${cityName} brings additional challenges. Desert wildlife, extreme UV exposure, mineral-heavy water, and dramatic temperature swings between day and night all take a toll on residential systems. Bucksworth technicians are trained specifically for these Arizona conditions and use materials and methods proven to perform in our harsh climate.`,
        `Many ${cityName} neighborhoods were built during different construction eras, each with its own set of common issues. Whether you live in a newer subdivision or an established community, our technicians understand the specific challenges your home faces and tailor our ${subName.toLowerCase()} approach accordingly.`,
      ],
    },
    {
      heading: `Our ${subName} Approach in ${cityName}`,
      paragraphs: [
        `At Bucksworth, we believe in doing the job right the first time. Our ${subName.toLowerCase()} process starts with a thorough inspection of your ${cityName} home to identify the root cause of any issues, not just the symptoms. We then provide a detailed, written estimate before any work begins so you know exactly what to expect.`,
        `Our technicians use professional-grade equipment and materials that are specifically chosen for Arizona conditions. We do not cut corners or use generic products that may not hold up in our extreme environment. Every solution is designed for long-term performance and backed by our satisfaction guarantee.`,
        `After completing the work, we walk you through everything we did, explain what to watch for going forward, and discuss preventive measures that can save you money in the long run. We also offer ongoing maintenance plans that keep your home protected year-round with regular scheduled service visits.`,
      ],
    },
    {
      heading: `Serving All of ${cityName} & ${county} County`,
      paragraphs: [
        `Bucksworth Home Services provides ${subName.toLowerCase()} throughout all of ${cityName} and the surrounding ${branch} metro area.${zips ? ` Our service area in ${cityName} covers zip codes ${zips} and all adjacent communities.` : ""} No matter which neighborhood you call home, we deliver the same level of expert service and attention to detail.`,
        `We understand that every area of ${cityName} has its own characteristics that affect home maintenance needs. From the landscaping styles to the soil composition to the typical construction methods used in each neighborhood, our technicians factor in all of these local variables when providing ${subName.toLowerCase()} services.`,
        `Our ${branch} dispatch center ensures quick response times throughout ${cityName}. When you call ${phone}, we can typically schedule a same-day or next-day appointment. For emergencies, we prioritize getting a technician to your home as quickly as possible.`,
      ],
    },
    {
      heading: `Why Choose Bucksworth for ${subName}`,
      paragraphs: [
        `Bucksworth Home Services is family-owned and operated, founded right here in Arizona in 2013 by Jordan and Taylor Moore. We treat every home like it is our Gigi's, which means honest work, quality materials, and genuine care for our customers. That philosophy has earned us a 4.8-star rating across thousands of reviews from Arizona homeowners.`,
        `We are Google Guaranteed, meaning Google has independently verified our business licenses, insurance coverage, and employee background checks. When you hire Bucksworth for ${subName.toLowerCase()} in ${cityName}, you are hiring a company that one of the world's largest technology companies trusts enough to back with their own guarantee.`,
        `Our credentials include Arizona ROC License #343924 and AG License #9613. Every technician is fully licensed, insured, and undergoes ongoing training to stay current with the latest ${subName.toLowerCase()} techniques, materials, and industry best practices. We invest in our team so we can deliver the best possible results for your home.`,
        `Ready to schedule your free ${subName.toLowerCase()} inspection in ${cityName}? Call us today at ${phone} or use our online estimator to get started. Same-day service is available, and we never charge for estimates or inspections.`,
      ],
    },
  ];
}

/* ── FAQ Builder ── */
function buildFaqs(
  subName: string,
  cityName: string,
  phone: string,
  verticalName: string,
  branch: string
): { q: string; a: string }[] {
  return [
    {
      q: `How much does ${subName.toLowerCase()} cost in ${cityName}?`,
      a: `The cost of ${subName.toLowerCase()} in ${cityName} varies depending on the scope of work, the size of your home, and the specific issues involved. Bucksworth provides free, no-obligation inspections and detailed written estimates before any work begins. Call ${phone} for your free estimate.`,
    },
    {
      q: `How quickly can Bucksworth provide ${subName.toLowerCase()} in ${cityName}?`,
      a: `We offer same-day and next-day ${subName.toLowerCase()} service throughout ${cityName} and the ${branch} metro area. For emergencies, we prioritize rapid response. Call ${phone} to schedule.`,
    },
    {
      q: `Is Bucksworth licensed for ${subName.toLowerCase()} in Arizona?`,
      a: `Yes. Bucksworth Home Services holds Arizona ROC License #343924 and AG License #9613. We are fully licensed, bonded, insured, and Google Guaranteed. Every technician undergoes background checks and ongoing training.`,
    },
    {
      q: `Does Bucksworth offer a warranty on ${subName.toLowerCase()}?`,
      a: `Yes, all of our ${subName.toLowerCase()} work comes with a satisfaction guarantee. We also offer ongoing maintenance plans that provide regular service visits and priority scheduling. Specific warranty terms are provided with your written estimate.`,
    },
    {
      q: `What areas near ${cityName} do you cover for ${subName.toLowerCase()}?`,
      a: `We serve all of ${cityName} and the surrounding ${branch} metro area, covering 33 cities across Arizona. Whether you are in ${cityName} proper or a nearby community, our technicians can be at your home quickly.`,
    },
    {
      q: `Do I need to be home during ${subName.toLowerCase()} service?`,
      a: `For most ${subName.toLowerCase()} services, we recommend being home for the initial inspection so we can walk you through our findings and discuss the recommended approach. However, for ongoing maintenance visits, we can work with your schedule and handle exterior services while you are away.`,
    },
  ];
}
