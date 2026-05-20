import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Job Site Work | New Construction Pre-Treatment | Bucksworth Home Services",
  description:
    "Bucksworth Home Services provides pest pre-treatment, termite barriers, plumbing rough-ins, and HVAC installations for new construction and commercial job sites across Arizona.",
  alternates: { canonical: "https://bucksworth-site.vercel.app/job-site-work" },
};

export default function JobSiteWorkPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="city-hero">
        <div className="city-hero-inner">
          <p className="city-hero-eyebrow">Commercial &amp; New Construction</p>
          <h1>
            <span className="orange">Job Site Work</span> &amp; Builder Services
          </h1>
          <p className="city-hero-desc">
            Pre-construction pest treatment, termite barriers, HVAC installations, and plumbing rough-ins for builders, general contractors, and commercial properties across Arizona.
          </p>
          <div className="city-hero-badges">
            <span className="city-hero-badge">&#9733; AZ ROC #343924</span>
            <span className="city-hero-badge">&#10003; AG License #9613</span>
            <span className="city-hero-badge">&#9201; Builder Scheduling</span>
            <span className="city-hero-badge">&#128176; Volume Pricing</span>
          </div>
          <div className="city-hero-cta">
            <a href="tel:4804228388" className="btn-call">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
              Call (480) 422-8388
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="svc-cards-section">
        <div className="container">
          <h2 className="section-title">Builder &amp; Job Site Services</h2>
          <div className="svc-hub-grid">
            {[
              { name: "Termite Pre-Treatment", desc: "Soil treatment and Sentricon barrier installation before concrete pour. Meets ARS 32-2301 requirements. Includes builder warranty documentation and homeowner warranty transfer.", icon: "🛡️" },
              { name: "Pest Pre-Treatment", desc: "Perimeter and sub-slab pest treatment during pre-construction phase. Protects against scorpions, ants, and roaches from day one of occupancy.", icon: "🏗️" },
              { name: "New Construction HVAC", desc: "Ductwork rough-in, system sizing, equipment installation, and start-up for residential and light commercial new construction. All major brands available.", icon: "❄️" },
              { name: "Plumbing Rough-In", desc: "Water supply and DWV rough-in for new construction. Top-out, trim-out, and fixture installation. Permit management and inspection coordination included.", icon: "🔧" },
              { name: "Builder Warranties", desc: "One-year builder warranties for pest and termite treatment that transfer to the new homeowner. Includes warranty registration portal and renewal options.", icon: "📋" },
              { name: "Commercial Pest Management", desc: "IPM programs for restaurants, offices, warehouses, HOA communities, and multi-family properties. Monthly reporting and compliance documentation included.", icon: "🏢" },
            ].map((svc) => (
              <div key={svc.name} className="svc-hub-card" style={{ cursor: "default" }}>
                <span style={{ fontSize: "32px", display: "block", marginBottom: "8px" }}>{svc.icon}</span>
                <h3>{svc.name}</h3>
                <p>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="svc-hub-content">
        <div className="svc-hub-content-inner">
          <h2>New Construction Services Across Arizona</h2>
          <p>
            Bucksworth Home Services partners with builders and general contractors throughout the Phoenix and Tucson metro areas to provide essential pre-construction and construction-phase services. From termite pre-treatment before the concrete pour to final HVAC system start-up and plumbing trim-out, we handle every phase of the build on your schedule.
          </p>
          <p>
            We understand that builders work on tight timelines. Our job site teams are trained to coordinate with other trades, work within construction schedules, and complete each phase on time so you never have to hold up production waiting on us. We maintain dedicated builder scheduling lines and assign account managers to each builder relationship.
          </p>

          <h2>Termite Pre-Treatment for New Construction</h2>
          <p>
            Arizona law requires termite pre-treatment on all new residential construction. Bucksworth provides both soil pre-treatment and Sentricon barrier system installation that meets all Arizona Department of Agriculture and Structural Pest Control Commission requirements. Our pre-treatments include:
          </p>
          <ul style={{ margin: "12px 0 20px 20px", lineHeight: "2" }}>
            <li>Sub-slab soil treatment before concrete pour</li>
            <li>Perimeter barrier treatment after foundation</li>
            <li>Sentricon baiting station installation</li>
            <li>Builder warranty documentation and filing</li>
            <li>Homeowner warranty transfer at closing</li>
            <li>Annual re-inspection included in warranty</li>
          </ul>
          <p>
            Our termite pre-treatment warranty transfers directly to the new homeowner at closing. We handle all the paperwork and set up the new homeowner with our warranty registration system so they can easily convert to an ongoing pest and termite protection plan.
          </p>

          <h2>Builder Warranty Program</h2>
          <p>
            Our builder warranty program is designed to make the builder-to-homeowner transition seamless. When a new home closes, the termite warranty transfers to the new owner automatically. We then reach out to the homeowner with a welcome package that includes:
          </p>
          <ul style={{ margin: "12px 0 20px 20px", lineHeight: "2" }}>
            <li>Warranty registration and documentation</li>
            <li>Free initial pest inspection</li>
            <li>Special pricing on pest and termite bundles</li>
            <li>Three-year price guarantee on ongoing service</li>
            <li>Priority scheduling for warranty re-inspections</li>
          </ul>
          <p>
            This program benefits both the builder and the homeowner. Builders can offer a premium termite warranty as part of their package, and homeowners get a trusted service provider from day one.
          </p>

          <h2>Volume Pricing for Builders</h2>
          <p>
            We offer competitive volume pricing for builders with multiple lots, subdivisions, or ongoing construction projects. Our pricing scales based on project size, and we provide dedicated account management for builders with 10 or more homes per year. Contact us directly to discuss builder pricing and set up an account.
          </p>

          <h2>Service Areas for Job Site Work</h2>
          <p>
            Bucksworth provides job site and new construction services throughout the Phoenix metro area including Phoenix, Mesa, Chandler, Gilbert, Scottsdale, Tempe, Glendale, Peoria, Surprise, Goodyear, Buckeye, Queen Creek, San Tan Valley, and Maricopa. We also serve the Tucson metro for pest and weed control pre-treatment.
          </p>

          <h2>Contact Our Builder Services Team</h2>
          <p>
            Ready to set up a builder account or schedule job site work? Contact our commercial services team:
          </p>
          <p style={{ fontSize: "18px", fontWeight: 700 }}>
            Phoenix: <a href="tel:4804228388" style={{ color: "var(--red)" }}>(480) 422-8388</a>
            <br />
            Tucson: <a href="tel:5202849930" style={{ color: "var(--red)" }}>(520) 284-9930</a>
          </p>
        </div>
      </section>
    </main>
  );
}
