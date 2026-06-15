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
import { getNeighborhoods } from "@/lib/neighborhoods";
import CityBar from "@/components/CityBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/ProcessSteps";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import RelatedPosts from "@/components/RelatedPosts";
import { getRelatedBlogPosts } from "@/lib/blog-links";
import CitySync from "@/components/CitySync";
import OtherServices from "@/components/OtherServices";

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
        : SERVICES.filter((s) => s.slug === "pest-and-termite" || s.slug === "weed-and-lawn-care");
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
    title: `${sub.name} in ${city.name}, AZ`,
    description: `${sub.name} in ${city.name}, AZ. ${sub.shortDesc} Licensed & insured. Same-day service available. Call ${phone} for a free estimate.`,
    alternates: {
      canonical: `https://www.getyourbucksworth.com/${cSlug}/${sSlug}/${ssSlug}`,
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

  // Get neighborhood data for hyper-local content
  const nd = getNeighborhoods(cSlug);

  // Build contextual content blocks for 1200+ word target
  const content = buildContent(sub.name, sub.longDesc, city.name, branch, city.county, phone, service.name, city.zipCodes, city.population, nd.neighborhoods, nd.landmarks);

  // Related sub-services (same vertical, excluding current)
  const relatedSubs = service.subServices.filter((s) => s.slug !== ssSlug);

  // Nearby cities with this service
  const nearbyCities = CITIES.filter(
    (c) =>
      c.branch === city.branch &&
      c.slug !== city.slug &&
      true
  );

  // FAQs
  const faqs = buildFaqs(sub.name, city.name, phone, service.name, branch);

  // Get related blog posts for internal cross-linking
  const relatedPosts = getRelatedBlogPosts(cSlug, ssSlug, sSlug, 4);

  // Schema.org Service
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.getyourbucksworth.com/${cSlug}/${sSlug}/${ssSlug}#service`,
    name: `${sub.name} – ${city.name}, AZ`,
    description: sub.longDesc,
    serviceType: sub.name,
    provider: {
      "@type": ({"pest-and-termite":"PestControlService","air-conditioning-and-heating":"HVACBusiness","plumbing-and-water-heaters":"Plumber","weed-and-lawn-care":"LandscapingBusiness"} as Record<string,string>)[service.slug] || "LocalBusiness",
      name: "Bucksworth Home Services",
      telephone: phone,
      url: "https://www.getyourbucksworth.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "AZ",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
      priceRange: "$$",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.84", reviewCount: "2000", bestRating: "5" },
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.84", reviewCount: "2000", bestRating: "5" },
    areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: "Arizona" } },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://www.getyourbucksworth.com/request-service`,
      servicePhone: { "@type": "ContactPoint", telephone: phone, contactType: "customer service" },
    },
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getyourbucksworth.com" },
      { "@type": "ListItem", position: 2, name: city.name, item: `https://www.getyourbucksworth.com/${cSlug}` },
      { "@type": "ListItem", position: 3, name: service.name, item: `https://www.getyourbucksworth.com/${cSlug}/${sSlug}` },
      { "@type": "ListItem", position: 4, name: sub.name, item: `https://www.getyourbucksworth.com/${cSlug}/${sSlug}/${ssSlug}` },
    ],
  };

  // FAQPage schema for agentic search
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CitySync branch={city.branch} city={city.name} slug={city.slug} />
      <CityBar currentCity={city} />
      <main id="main-content">
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
            <a href={`/request-service?city=${city.slug}&service=${service.slug}`} className="btn-estimate">
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
        subtext={`Same-day service. Free inspections. Call ${phone}${service.slug !== "plumbing-and-water-heaters" ? " or book online." : "."}`}
        hideEstimate={service.slug === "plumbing-and-water-heaters"}
      />

      {/* FAQ */}
      <FAQAccordion faqs={faqs} title={`${sub.name} FAQ - ${city.name}`} />

      {/* Related blog posts — internal cross-linking for SEO */}
      <RelatedPosts
        posts={relatedPosts}
        cityName={city.name}
        serviceName={sub.name}
      />

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

      {/* Other services in this city */}
      <OtherServices city={city} currentServiceSlug={service.slug} />

      {/* Bottom CTA */}
      <CTASection city={city} variant="secondary" hideEstimate={service.slug === "plumbing-and-water-heaters"} />

      </main>
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
  population: string,
  neighborhoods: { name: string; zips: string[]; desc: string }[],
  landmarks: string[]
): ContentBlock[] {
  const zips = zipCodes.length > 0 ? zipCodes.join(", ") : "";
  const n0 = neighborhoods[0];
  const n1 = neighborhoods[1];
  const n2 = neighborhoods[2];
  const n3 = neighborhoods[3];
  const topNhoods = neighborhoods.slice(0, 5).map((n) => n.name);
  const svc = subName.toLowerCase();

  // Hash city+sub for deterministic variation
  const hash = (cityName + subName).split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const variant = hash % 3;

  // Branch-specific climate details
  const climateDetail = branch === "Phoenix"
    ? `The Valley of the Sun averages 299 days of sunshine per year, driving temperatures above 115°F in peak summer. ${cityName} sits within the ${county} County heat island where pavement and rooftops amplify daytime temperatures and slow nighttime cooling.`
    : `The Tucson basin sits at 2,600 feet elevation where the Santa Cruz River corridor and five surrounding mountain ranges create a unique microclimate. ${cityName} in ${county} County experiences intense monsoon storms from July through September that bring flash flooding, humidity spikes, and rapid pest migration.`;

  // Population-based community description
  const popNum = parseInt(population.replace(/[^0-9]/g, ""));
  const communityType = popNum > 200000
    ? `As one of Arizona's largest cities with approximately ${population} residents, ${cityName} has an enormous range of housing stock — from 1960s ranch homes to brand-new master-planned communities`
    : popNum > 50000
    ? `${cityName}'s growing population of approximately ${population} residents means a mix of established neighborhoods and new construction, each presenting different ${svc} challenges`
    : `${cityName} is a tight-knit community of approximately ${population} residents where neighbors share recommendations and word of mouth matters — which is exactly why Bucksworth maintains a 4.8-star rating here`;

  return [
    {
      heading: `${subName} Services in ${cityName}, ${county} County`,
      paragraphs: [
        `${longDesc} Bucksworth Home Services has delivered expert ${svc} in ${cityName} since 2013, and we understand that ${county} County properties face conditions that national chains and generic providers simply cannot address.${n0 ? ` From ${n0.name}${n0.zips[0] ? ` (${n0.zips[0]})` : ""} to ${n1 ? n1.name : "surrounding areas"}${n1?.zips[0] ? ` (${n1.zips[0]})` : ""}, our licensed technicians tailor every job to the specific property and neighborhood.` : ""}`,
        `${communityType}. Bucksworth matches the right technician, equipment, and approach to each situation, backed by same-day availability and free upfront estimates.`,
        `Need ${svc} in ${cityName} today? Call ${phone} — our ${branch} dispatch team can often get a technician to your door within hours, not days.`,
      ],
    },
    {
      heading: `Neighborhood-Level ${subName} in ${cityName}`,
      paragraphs: [
        n0
          ? `${n0.name} — ${n0.desc} Our technicians who service ${n0.name} properties know these conditions and arrive prepared with the right equipment and materials for the job.`
          : `${cityName}'s neighborhoods vary widely in age, construction style, and landscaping. Desert-adjacent properties face different ${svc} challenges than homes in established, irrigated communities. Our technicians evaluate each property individually.`,
        n1
          ? `${n1.name} — ${n1.desc} The contrast between ${n0 ? n0.name : "other areas"} and ${n1.name} is exactly why Bucksworth never uses a one-size-fits-all approach in ${cityName}.`
          : `Whether your home backs up to open desert or sits in a mature subdivision with irrigated landscaping, Bucksworth adapts our ${svc} methods to your specific environment.`,
        n2
          ? `${n2.name} — ${n2.desc}${n3 ? ` And over in ${n3.name}, ${n3.desc.charAt(0).toLowerCase() + n3.desc.slice(1)}` : ""} Every ${cityName} zip code — ${zips || "all local codes"} — gets the same expert attention.`
          : `We cover every ${cityName} zip code — ${zips || "call for coverage"} — with the same expert attention. Local knowledge matters, and our ${branch}-based technicians have it.`,
        landmarks.length > 1
          ? `Whether your property is near ${landmarks[0]}, ${landmarks[1]}${landmarks.length > 2 ? `, or ${landmarks[2]}` : ""}, you are in our service zone. ${cityName} homeowners near these landmarks deal with specific ${svc} patterns our team has seen hundreds of times.`
          : landmarks.length === 1
          ? `Homes near ${landmarks[0]} and throughout ${cityName} are all within our service zone. Local conditions near major landmarks often create predictable ${svc} patterns our team knows well.`
          : ``,
      ].filter(Boolean),
    },
    {
      heading: variant === 0
        ? `Why ${cityName} Properties Are Vulnerable Without ${subName}`
        : variant === 1
        ? `The ${cityName} Environment and Your Home: Why ${subName} Matters`
        : `${subName} Challenges Specific to ${cityName}, Arizona`,
      paragraphs: [
        climateDetail,
        variant === 0
          ? `For ${cityName} homeowners, this means ${svc} is not optional — it is part of responsible home maintenance. The desert does not forgive neglect. A small issue in March becomes an emergency by July when temperatures and pest activity both peak. Bucksworth's preventive approach catches problems early when they are cheapest and easiest to resolve.`
          : variant === 1
          ? `These conditions directly impact ${cityName} homes. ${county} County's hard water, alkaline soil, and UV-battered building materials create a cascade of maintenance challenges. Bucksworth technicians train specifically for the ${branch} metro's unique conditions and use materials rated for Arizona's extreme environment.`
          : `${cityName}'s position in the ${branch} metro creates a distinct set of ${svc} demands. The combination of extreme heat, monsoon moisture, desert wildlife, and rapid development means homeowners need a provider who understands this specific area — not just Arizona in general, but ${cityName} in particular.`,
        `${n0 ? `In neighborhoods like ${n0.name}, ${n0.desc.charAt(0).toLowerCase() + n0.desc.slice(1)}` : `Across ${cityName}`} Our team factors in your home's age, construction type, lot orientation, landscaping, and proximity to washes or preserve areas when designing a ${svc} plan that actually works long-term.`,
      ],
    },
    {
      heading: `How Bucksworth Handles ${subName} in ${cityName}`,
      paragraphs: [
        `Every ${svc} job in ${cityName} starts with a thorough property assessment. Our technician inspects the exterior, interior access points, and key risk areas specific to your neighborhood. You get a written scope of work and firm price before we touch anything.`,
        variant === 0
          ? `We use commercial-grade products and equipment that withstand Arizona's heat, UV, and monsoon moisture. Nothing we install or apply is generic big-box store product — it is selected specifically for ${county} County conditions and your home's construction type.`
          : variant === 1
          ? `Our ${branch} warehouse stocks professional-grade materials chosen for local conditions. We do not use residential-grade products that degrade in ${cityName}'s extreme UV and heat. Every solution is designed to perform through Arizona's toughest months.`
          : `Bucksworth maintains a local inventory of professional-grade materials at our ${branch} facility, which means we do not have to order parts or products — your ${svc} job gets done on the first visit with the right materials, not whatever a big-box store had on the shelf.`,
        `After the work is complete, we walk you through what we did, what to watch for, and how to prevent future issues. Most ${cityName} customers choose one of our ongoing maintenance plans — scheduled visits that keep your home protected year-round and catch small problems before they become expensive emergencies.`,
      ],
    },
    {
      heading: `${subName} Coverage: ${topNhoods.length > 0 ? topNhoods.join(", ") : cityName} & Surrounding Areas`,
      paragraphs: [
        `Bucksworth serves every corner of ${cityName} and the surrounding ${branch} metro — ${zips ? `zip codes ${zips}` : "all local zip codes"} and adjacent communities.${topNhoods.length > 0 ? ` Our most-served neighborhoods include ${topNhoods.join(", ")}${neighborhoods.length > 5 ? `, plus ${neighborhoods.length - 5} additional areas` : ""}.` : ""}`,
        `Our ${branch} dispatch center is staffed during business hours to ensure fast scheduling. When you call ${phone}, most ${cityName} appointments are available same-day or next-day. Emergency ${svc} calls get priority routing to the nearest available technician.`,
        `Already a Bucksworth customer in ${cityName}? Our maintenance plan members get priority scheduling, discounted rates, and a dedicated technician who knows your property history. Ask about our annual plans when you call.`,
      ],
    },
    {
      heading: `Why ${cityName} Homeowners Trust Bucksworth for ${subName}`,
      paragraphs: [
        `Bucksworth is family-owned by Jordan and Taylor Moore, who founded the company in Apache Junction in 2013 with one truck and a simple philosophy: treat every home like it is Gigi's. That means honest assessments, quality materials, fair prices, and genuine care. It has earned us 2,000+ five-star reviews from homeowners across the ${branch} metro, including families throughout ${cityName}.`,
        `We are one of the few ${branch}-area companies that is Google Guaranteed — meaning Google independently verified our licenses, insurance, and employee backgrounds. Arizona ROC #343924 and AG License #9613 are active and in good standing. When you hire Bucksworth for ${svc} in ${cityName}, the work is backed by both our guarantee and Google's.`,
        `Ready for your free ${svc} assessment in ${cityName}? Call ${phone} today. No trip fees, no hidden charges, no pressure — just an honest evaluation and a written estimate you can count on. Same-day appointments available across all ${cityName} zip codes.`,
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
  const svc = subName.toLowerCase();
  return [
    {
      q: `How much does ${svc} cost in ${cityName}, AZ?`,
      a: `${subName} pricing in ${cityName} depends on your home's size, the scope of work, and specific conditions at your property. Bucksworth always provides a free on-site inspection and written estimate before starting — no trip fees or hidden charges. Call ${phone} for your free ${cityName} estimate.`,
    },
    {
      q: `Can I get same-day ${svc} in ${cityName}?`,
      a: `Yes. Bucksworth offers same-day and next-day ${svc} throughout ${cityName} and the ${branch} metro area. Our dispatch team at ${phone} can check today's availability for your zip code. Emergency situations get priority routing.`,
    },
    {
      q: `Is Bucksworth licensed for ${svc} in ${cityName}?`,
      a: `Absolutely. Bucksworth Home Services holds Arizona ROC License #343924, AG License #9613, and is Google Guaranteed — meaning Google has independently verified our business licenses, insurance, and employee background checks. We have served ${cityName} homeowners since 2013.`,
    },
    {
      q: `What warranty does Bucksworth offer on ${svc}?`,
      a: `All ${svc} work in ${cityName} comes with our satisfaction guarantee. Maintenance plan members receive extended coverage and priority scheduling. Your technician will explain the specific warranty terms included with your written estimate before any work begins.`,
    },
    {
      q: `What ${cityName} neighborhoods does Bucksworth serve for ${svc}?`,
      a: `We serve every neighborhood and zip code in ${cityName} as well as surrounding ${branch} metro communities — 33 cities total. Whether you are in ${cityName} proper or a nearby area, our technicians are typically 30 minutes or less from your door.`,
    },
    {
      q: `Do I need to be home for ${svc} service in ${cityName}?`,
      a: `We recommend being home for the initial inspection so our technician can walk you through findings and recommendations. For ongoing maintenance visits, many ${cityName} customers give us exterior access instructions and we handle everything while you are at work.`,
    },
  ];
}
