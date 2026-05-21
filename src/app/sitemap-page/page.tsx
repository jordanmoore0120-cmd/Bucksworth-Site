import { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Sitemap | Bucksworth Home Services",
  description:
    "Complete sitemap for Bucksworth Home Services. Browse all service pages, city pages, and resources for pest control, HVAC, plumbing, and weed control across Arizona.",
  alternates: { canonical: "https://getyourbucksworth.com/sitemap-page" },
};

export default function SitemapPage() {
  const phoenixCities = CITIES.filter((c) => c.branch === "phoenix");
  const tucsonCities = CITIES.filter((c) => c.branch === "tucson");

  return (
    <main id="main-content">
      <section className="city-hero" style={{ padding: "60px 0 40px" }}>
        <div className="city-hero-inner">
          <h1>
            <span className="orange">Sitemap</span>
          </h1>
          <p className="city-hero-desc">
            Browse all pages on the Bucksworth Home Services website.
          </p>
        </div>
      </section>

      <section className="svc-hub-content">
        <div className="svc-hub-content-inner" style={{ maxWidth: "1100px" }}>
          {/* Main pages */}
          <h2>Main Pages</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px" }}>
            <li><Link href="/" style={{ color: "var(--navy)" }}>Home</Link></li>
            <li><Link href="/about" style={{ color: "var(--navy)" }}>About Us</Link></li>
            <li><Link href="/reviews" style={{ color: "var(--navy)" }}>Reviews</Link></li>
            <li><Link href="/job-site-work" style={{ color: "var(--navy)" }}>Job Site Work</Link></li>
            <li><Link href="/termite-warranty" style={{ color: "var(--navy)" }}>Termite Warranty Registration</Link></li>
          </ul>

          {/* Services */}
          <h2 style={{ marginTop: "32px" }}>Services</h2>
          {SERVICES.map((svc) => (
            <div key={svc.slug} style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "16px", color: "var(--navy)", marginBottom: "8px" }}>
                <Link href={`/phoenix-az/${svc.slug}`} style={{ color: "var(--navy)", textDecoration: "underline" }}>
                  {svc.name}
                </Link>
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "4px" }}>
                {svc.subServices.map((sub) => (
                  <li key={sub.slug}>
                    <Link href={`/phoenix-az/${svc.slug}/${sub.slug}`} style={{ color: "var(--g600)", fontSize: "14px" }}>
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Phoenix cities */}
          <h2 style={{ marginTop: "32px" }}>Phoenix Metro Service Areas</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "6px" }}>
            {phoenixCities.map((city) => (
              <li key={city.slug}>
                <Link href={`/${city.slug}`} style={{ color: "var(--g600)", fontSize: "14px" }}>
                  {city.name}, AZ
                </Link>
              </li>
            ))}
          </ul>

          {/* Tucson cities */}
          <h2 style={{ marginTop: "32px" }}>Tucson Metro Service Areas</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "6px" }}>
            {tucsonCities.map((city) => (
              <li key={city.slug}>
                <Link href={`/${city.slug}`} style={{ color: "var(--g600)", fontSize: "14px" }}>
                  {city.name}, AZ
                </Link>
              </li>
            ))}
          </ul>

          {/* Full service x city matrix (collapsed) */}
          <h2 style={{ marginTop: "32px" }}>All Service Pages by City</h2>
          <p style={{ fontSize: "14px", color: "var(--g500)", marginBottom: "16px" }}>
            Over 1,100 unique service pages covering every service in every city we serve.
          </p>
          {SERVICES.map((svc) => (
            <details key={svc.slug} style={{ marginBottom: "16px", border: "1px solid var(--g100)", borderRadius: "8px", padding: "12px 16px" }}>
              <summary style={{ fontWeight: 700, color: "var(--navy)", cursor: "pointer", fontSize: "15px" }}>
                {svc.name} ({phoenixCities.length + (svc.slug === "pest-and-termite" || svc.slug === "weed-and-lawn-care" ? tucsonCities.length : 0)} cities)
              </summary>
              <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "4px" }}>
                {[...phoenixCities, ...(svc.slug === "pest-and-termite" || svc.slug === "weed-and-lawn-care" ? tucsonCities : [])].map((city) => (
                  <Link key={city.slug} href={`/${city.slug}/${svc.slug}`} style={{ color: "var(--g600)", fontSize: "13px" }}>
                    {svc.name} in {city.name}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
