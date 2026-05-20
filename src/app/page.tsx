import Link from "next/link";
import { getPhoenixCities, getTucsonCities } from "@/lib/cities";

export default function Home() {
  const phoenixCities = getPhoenixCities();
  const tucsonCities = getTucsonCities();

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1>
            Pest Control, HVAC &amp; Plumbing
            <br />
            <span className="hero-accent">Phoenix &amp; Tucson, Arizona</span>
          </h1>
          <p className="hero-sub">
            Family-owned since 2013. One call covers your entire home — pest control,
            air conditioning, plumbing, and insulation.
          </p>
          <div className="hero-actions">
            <a href="tel:+14804228388" className="btn-primary">
              Phoenix: (480) 422-8388
            </a>
            <a href="tel:+15202849930" className="btn-primary btn-tucson">
              Tucson: (520) 284-9930
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Full-Service Home Protection</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Pest &amp; Termite Control</h3>
            <p>Scorpions, termites, roaches, ants, spiders, rodents — we eliminate them all with eco-friendly treatments.</p>
            <Link href="/pest-control" className="service-link">Learn More</Link>
          </div>
          <div className="service-card">
            <h3>HVAC / Air Conditioning</h3>
            <p>AC repair, installation, and maintenance to keep your home cool in Arizona&apos;s extreme heat.</p>
            <Link href="/hvac" className="service-link">Learn More</Link>
          </div>
          <div className="service-card">
            <h3>Plumbing</h3>
            <p>Leak repair, water heaters, drain cleaning, and re-piping from licensed Arizona plumbers.</p>
            <Link href="/plumbing" className="service-link">Learn More</Link>
          </div>
          <div className="service-card">
            <h3>Insulation</h3>
            <p>Attic insulation, blown-in, and spray foam to cut your energy bills and keep temps stable.</p>
            <Link href="/insulation" className="service-link">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="locations">
        <h2>Cities We Serve</h2>
        <div className="locations-grid">
          <div>
            <h3>Phoenix Metro</h3>
            <ul>
              {phoenixCities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`}>{city.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Tucson Area</h3>
            <ul>
              {tucsonCities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`}>{city.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="trust-item">
          <strong>4.84</strong>
          <span>Google Rating (50 Reviews)</span>
        </div>
        <div className="trust-item">
          <strong>AZ ROC #343924</strong>
          <span>Licensed &amp; Bonded</span>
        </div>
        <div className="trust-item">
          <strong>Since 2013</strong>
          <span>Family Owned</span>
        </div>
        <div className="trust-item">
          <strong>100%</strong>
          <span>Review Response Rate</span>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Get Your Free Quote Today</h2>
        <p>Same-day service available throughout Phoenix and Tucson.</p>
        <div className="hero-actions">
          <a href="tel:+14804228388" className="btn-primary">Call Now: (480) 422-8388</a>
          <Link href="/contact" className="btn-secondary">Schedule Online</Link>
        </div>
      </section>
    </main>
  );
}
