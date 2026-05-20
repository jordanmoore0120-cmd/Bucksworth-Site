import { notFound } from "next/navigation";
import { getCityBySlug, getAllCities } from "@/lib/cities";
import type { Metadata } from "next";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  const cities = getAllCities();
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: `Pest Control, HVAC & Home Services in ${city.name}, AZ`,
    description: `Bucksworth Home Services offers expert pest control, HVAC, plumbing, and weed control in ${city.name}, AZ. Family-owned since 2013. Call ${city.phone} for a free estimate.`,
    alternates: {
      canonical: `/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="badges">
            <span className="badge">&#10003; Google Guaranteed</span>
            <span className="badge">Family-Owned Since 2013</span>
            <span className="badge">4.8 Star Rating</span>
          </div>
          <h1>
            Home Services in <span className="highlight">{city.name}, AZ</span>
          </h1>
          <p className="hero-sub">{city.localFacts}</p>
          <div className="hero-ctas">
            <a href="/contact" className="btn-primary">
              Get a Free Estimate &rarr;
            </a>
            <a href={`tel:${city.phone.replace(/[^+\d]/g, "")}`} className="btn-secondary">
              {city.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <h2>
            Our Services in <span className="highlight">{city.name}</span>
          </h2>
          <p className="section-intro">
            Bucksworth Home Services provides comprehensive pest control, HVAC,
            plumbing, and home services to {city.name} homeowners. Every service
            backed by our satisfaction guarantee.
          </p>
          <div className="services-grid">
            {city.services.map((svc) => (
              <div key={svc.slug} className="service-card">
                <h3>
                  <a href={`/${city.slug}/${svc.slug}`}>{svc.name}</a>
                </h3>
                <p>{svc.description}</p>
                {svc.subServices.length > 0 && (
                  <details>
                    <summary>Show Services</summary>
                    <ul className="sub-services">
                      {svc.subServices.map((sub) => (
                        <li key={sub.slug}>
                          <a href={`/${svc.slug}/${sub.slug}`}>{sub.name}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
