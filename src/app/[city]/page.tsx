import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/lib/cities";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `${city.name} Pest Control, HVAC & Plumbing | Bucksworth Home Services`,
    description: `Bucksworth Home Services in ${city.name}, AZ — pest control, HVAC, plumbing & insulation for ${city.population} residents. Call now for same-day service.`,
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const phone = city.branch === "phoenix" ? "(480) 422-8388" : "(520) 284-9930";
  const phoneHref = city.branch === "phoenix" ? "tel:+14804228388" : "tel:+15202849930";

  const serviceCards = [
    {
      title: "Pest & Termite Control",
      href: `/pest-control`,
      icon: "\uD83D\uDC1B",
      items: ["Scorpion Control", "Termite Treatment", "Roach Elimination", "Ant Control", "Spider Prevention", "Rodent Exclusion"],
    },
    {
      title: "HVAC / Air Conditioning",
      href: `/hvac`,
      icon: "\u2744\uFE0F",
      items: ["AC Repair", "AC Installation", "Heating Repair", "Maintenance Plans", "Duct Cleaning", "Smart Thermostat"],
    },
    {
      title: "Plumbing",
      href: `/plumbing`,
      icon: "\uD83D\uDD27",
      items: ["Leak Repair", "Water Heater", "Drain Cleaning", "Sewer Line", "Fixture Install", "Re-piping"],
    },
    {
      title: "Insulation",
      href: `/insulation`,
      icon: "\uD83C\uDFE0",
      items: ["Attic Insulation", "Blown-In", "Spray Foam", "Energy Audit"],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="city-hero">
        <div className="city-hero-inner">
          <h1>Home Services in {city.name}, Arizona</h1>
          <p>{city.description}</p>
          <div className="city-hero-actions">
            <a href={phoneHref} className="btn-primary">
              Call {phone}
            </a>
            <Link href="/contact" className="btn-secondary">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="city-services">
        <h2>Our Services in {city.name}</h2>
        <div className="service-grid">
          {serviceCards.map((svc) => (
            <div key={svc.title} className="service-card">
              <div className="service-card-header">
                <span className="service-icon">{svc.icon}</span>
                <h3>{svc.title}</h3>
              </div>
              <ul>
                {svc.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={svc.href} className="service-link">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Service Area */}
      <section className="city-area">
        <h2>Serving {city.name} &amp; Surrounding Areas</h2>
        <p>
          We proudly serve {city.name} (population {city.population}) and neighboring
          communities. ZIP codes include: {city.zipCodes.join(", ")}.
        </p>
        <p>
          <strong>{city.branch === "phoenix" ? "Phoenix Branch" : "Tucson Branch"}</strong> —{" "}
          <a href={phoneHref}>{phone}</a>
        </p>
      </section>

      {/* CTA */}
      <section className="city-cta">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of {city.name} homeowners who trust Bucksworth.</p>
        <div className="city-hero-actions">
          <a href={phoneHref} className="btn-primary">
            Call Now: {phone}
          </a>
          <Link href="/contact" className="btn-secondary">
            Schedule Online
          </Link>
        </div>
      </section>
    </main>
  );
}
