import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Bucksworth Home Services | Family-Owned Since 2013",
  description:
    "Meet the family behind Bucksworth Home Services. Founded by Jordan & Taylor Moore in 2013, we serve 33 cities across Phoenix and Tucson with pest control, HVAC, plumbing, and weed control.",
  alternates: { canonical: "https://bucksworth-site.vercel.app/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* Hero with family photo */}
      <section className="city-hero" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="/images/photos/family-portrait.jpg"
            alt="Jordan and Taylor Moore with their family — founders of Bucksworth Home Services"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
            loading="eager"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(26,26,46,0.82) 0%, rgba(26,26,46,0.5) 100%)" }} />
        </div>
        <div className="city-hero-inner" style={{ position: "relative", zIndex: 1 }}>
          <p className="city-hero-eyebrow">Our Story</p>
          <h1>
            About <span className="orange">Bucksworth Home Services</span>
          </h1>
          <p className="city-hero-desc">
            Family-owned. Arizona-rooted. Treating every home like it&apos;s our Gigi&apos;s since 2013.
          </p>
        </div>
      </section>

      {/* Photo + Story split */}
      <section className="svc-hub-content">
        <div className="svc-hub-content-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", margin: "0 0 48px" }}>
            <div>
              <h2>Our Story</h2>
              <p>
                Bucksworth Home Services was founded in 2013 by Jordan and Taylor Moore with a simple mission: provide Arizona homeowners with honest, reliable home services at fair prices. What started as a small pest control operation serving a handful of Phoenix neighborhoods has grown into a full-service home services company covering 33 cities across the Phoenix and Tucson metro areas.
              </p>
              <p>
                The name &ldquo;Bucksworth&rdquo; comes from our family &mdash; and our mascot, the buck with the Arizona flag, represents everything we stand for: strength, pride in our state, and a commitment to protecting Arizona homes. We are not a franchise. We are not a national corporation with a call center in another state. We are a real Arizona family serving real Arizona families.
              </p>
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
              <img
                src="/images/photos/crew-on-site.jpg"
                alt="Ryan, a Bucksworth Home Services technician in uniform, ready to serve customers"
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Gigi Promise with photo */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", margin: "0 0 48px" }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
              <img
                src="/images/photos/tech-service-action.jpg"
                alt="Bucksworth technician treating the perimeter of an Arizona home"
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="lazy"
              />
            </div>
            <div>
              <h2>The Gigi Promise</h2>
              <p>
                We all come into this world the same way &mdash; completely dependent on the people who love us most. And if we are fortunate enough to grow old, we leave this life the same way: relying on others to take care of us. That truth sits at the center of everything we do at Bucksworth.
              </p>
              <p>
                When you call us, it is because you need help. When you choose us over every other option, it is because you are trusting us to show up and serve you the right way. We do not take that lightly. Our goal is simple: treat every customer the way we would treat our own grandmother. Not as a transaction. Not as a number on a route sheet. As someone who deserves honesty, respect, and work done right &mdash; every single time.
              </p>
              <p>
                That is the Gigi Promise. It is why we:
              </p>
              <ul style={{ margin: "12px 0 20px 20px", lineHeight: "2.2" }}>
                <li>Show up on time, every time</li>
                <li>Explain what we are doing and why before we start</li>
                <li>Provide written prices before any work begins</li>
                <li>Clean up after ourselves like it is our own home</li>
                <li>Stand behind our work with a satisfaction guarantee</li>
                <li>Never recommend services you do not need</li>
              </ul>
              <p>
                If we would not do it in Gigi&apos;s house, we do not do it in yours.
              </p>
            </div>
          </div>

          <h2>What We Do</h2>
          <p>
            Bucksworth Home Services provides four core services to homes and businesses throughout Arizona:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", margin: "20px 0 40px" }}>
            {[
              { name: "Pest & Termite Control", desc: "Scorpions, termites, roaches, ants, spiders, rodents, bed bugs, mosquitoes, bees, and wasps. Monthly and bi-monthly plans with same-day emergency service.", href: "/phoenix-az/pest-and-termite", color: "#b91c1c" },
              { name: "Air Conditioning & Heating", desc: "AC repair, installation, maintenance, duct cleaning, insulation, and energy audits. All major brands including Daikin, Trane, Carrier, Lennox, and Goodman.", href: "/phoenix-az/air-conditioning-and-heating", color: "#1e3a5f" },
              { name: "Plumbing & Water Heaters", desc: "Drain cleaning, water heater repair and replacement, leak detection, re-piping, water softeners, reverse osmosis, and emergency plumbing service.", href: "/phoenix-az/plumbing-and-water-heaters", color: "#0e7490" },
              { name: "Weed & Lawn Care", desc: "Pre-emergent and post-emergent weed control, Bermuda grass maintenance, overseeding, fertilization, and gravel yard treatment.", href: "/phoenix-az/weed-and-lawn-care", color: "#15803d" },
            ].map((svc) => (
              <Link key={svc.name} href={svc.href} style={{ display: "block", padding: "20px", background: "var(--g50)", borderRadius: "8px", borderLeft: `4px solid ${svc.color}`, textDecoration: "none", color: "inherit" }}>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>{svc.name}</h3>
                <p style={{ fontSize: "14px", color: "var(--g600)", lineHeight: "1.5", margin: 0 }}>{svc.desc}</p>
              </Link>
            ))}
          </div>

          {/* Photo gallery strip — branded truck, pre-treat, HVAC tech */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", margin: "0 0 48px" }}>
            <div style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "16/9" }}>
              <img src="/images/photos/branded-truck-home.jpg" alt="Bucksworth branded truck parked in front of a beautiful Arizona home" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
            </div>
            <div style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "16/9" }}>
              <img src="/images/photos/tech-spraying-detail.jpg" alt="Bucksworth technician applying termite pre-treatment to new construction framing" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
            </div>
            <div style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "16/9" }}>
              <img src="/images/photos/hvac-tech-soldering.jpg" alt="Bucksworth HVAC technician soldering copper refrigerant lines" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
            </div>
          </div>

          {/* Business Model with photo */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", margin: "0 0 48px" }}>
            <div>
              <h2>Our Business Model</h2>
              <p>
                We built Bucksworth on a simple idea: acquire customers through affordable pest control, then earn their trust with great service so they choose us for everything else their home needs. When your pest technician does an incredible job month after month, you are going to call us first when your AC goes out or your water heater leaks. That is not a sales tactic &mdash; it is a relationship built on trust and consistent performance.
              </p>
              <p>
                This model allows us to offer pest control at competitive rates while building a long-term relationship with each customer. Our average customer stays with us for years, not months, because we deliver real value on every visit. We cross-sell and upsell only when it genuinely benefits the homeowner, never to hit a quota.
              </p>
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
              <img
                src="/images/photos/tech-hvac-rooftop.jpg"
                alt="Bucksworth HVAC technician inspecting rooftop condenser units"
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="lazy"
              />
            </div>
          </div>

          <h2>Our Service Area</h2>
          <p>
            Bucksworth Home Services covers 33 cities across two Arizona metros:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", margin: "16px 0 24px" }}>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Phoenix Metro (24 Cities)</h3>
              <p style={{ fontSize: "14px", color: "var(--g600)", lineHeight: "1.8" }}>
                Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, Buckeye, Avondale, Litchfield Park, Sun City, Sun City West, Ahwatukee, Fountain Hills, Cave Creek, Anthem, Queen Creek, San Tan Valley, Apache Junction, Gold Canyon, Maricopa
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>Tucson Metro (9 Cities)</h3>
              <p style={{ fontSize: "14px", color: "var(--g600)", lineHeight: "1.8" }}>
                Tucson, Oro Valley, Marana, Sahuarita, Green Valley, Vail, Catalina Foothills, Casas Adobes, Tanque Verde
              </p>
            </div>
          </div>
          <p>
            Both branches operate independently with dedicated dispatch, technicians, and phone numbers. Phoenix: (480) 422-8388. Tucson: (520) 284-9930.
          </p>

          <h2>Our Credentials</h2>
          <ul style={{ margin: "12px 0 20px 20px", lineHeight: "2.2" }}>
            <li><strong>AZ ROC License #343924</strong> &mdash; Licensed contractor with the Arizona Registrar of Contractors</li>
            <li><strong>AG License #9613</strong> &mdash; Arizona Department of Agriculture licensed pest management company</li>
            <li><strong>Google Guaranteed</strong> &mdash; Background-checked and verified by Google for your protection</li>
            <li><strong>4.8+ Star Rating</strong> &mdash; Over 2,000 five-star reviews from Arizona homeowners</li>
            <li><strong>NATE-Certified Technicians</strong> &mdash; Industry-leading HVAC certification</li>
            <li><strong>EPA-Approved Products</strong> &mdash; Safe for families, pets, and the environment</li>
            <li><strong>Family Owned &amp; Operated</strong> &mdash; Not a franchise, not a corporation</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            Ready to experience the Bucksworth difference? Call us today for a free inspection and estimate:
          </p>
          <p style={{ fontSize: "18px", fontWeight: 700 }}>
            Phoenix: <a href="tel:4804228388" style={{ color: "var(--red)" }}>(480) 422-8388</a>
            <br />
            Tucson: <a href="tel:5202849930" style={{ color: "var(--red)" }}>(520) 284-9930</a>
          </p>
        </div>
      </section>

      {/* Responsive overrides for about page grids */}
      <style>{`
        @media (max-width: 768px) {
          .svc-hub-content-inner > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          .svc-hub-content-inner > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
