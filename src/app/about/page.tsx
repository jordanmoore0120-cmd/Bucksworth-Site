import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Bucksworth Home Services | Family-Owned Since 2013",
  description:
    "Meet Jordan & Taylor Moore — the Arizona family behind Bucksworth Home Services. Pest control, HVAC, plumbing & weed control across 33 cities in Phoenix and Tucson since 2013. AZ ROC #343924. Google Guaranteed.",
  alternates: { canonical: "https://www.getyourbucksworth.com/about" },
  openGraph: {
    title: "About Bucksworth Home Services | Family-Owned Since 2013",
    description: "Meet the Moores — the Arizona family behind Bucksworth Home Services. Serving 33 cities since 2013.",
    url: "https://www.getyourbucksworth.com/about",
    type: "website",
    images: [{ url: "/images/photos/family-portrait.jpg", width: 1200, height: 630, alt: "Jordan and Taylor Moore, founders of Bucksworth Home Services" }],
  },
};

/* ── About page schemas ── */
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.getyourbucksworth.com/about#aboutpage",
  name: "About Bucksworth Home Services",
  description: "Family-owned pest control, HVAC, plumbing, and weed control company serving 33 cities in Phoenix and Tucson, Arizona since 2013. Founded by Jordan and Taylor Moore.",
  url: "https://www.getyourbucksworth.com/about",
  mainEntity: { "@id": "https://www.getyourbucksworth.com/#organization" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getyourbucksworth.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.getyourbucksworth.com/about" },
  ],
};

const videoSchema = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Bucksworth Home Services truck at State Farm Stadium, Phoenix AZ",
    description: "Bucksworth Home Services branded truck driving past State Farm (Cardinals) Stadium in Glendale, Arizona.",
    thumbnailUrl: "https://www.getyourbucksworth.com/images/photos/truck-construction-site.jpg",
    contentUrl: "https://www.getyourbucksworth.com/videos/truck-statefarm.mp4",
    uploadDate: "2025-01-01",
    duration: "PT8S",
    publisher: { "@id": "https://www.getyourbucksworth.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Bucksworth Home Services truck at Tempe Town Lake, Arizona",
    description: "Bucksworth Home Services branded truck on the highway near Tempe Town Lake with the Phoenix skyline in the background.",
    thumbnailUrl: "https://www.getyourbucksworth.com/images/photos/truck-superstitions.jpg",
    contentUrl: "https://www.getyourbucksworth.com/videos/truck-tempetownlake.mp4",
    uploadDate: "2025-01-01",
    duration: "PT10S",
    publisher: { "@id": "https://www.getyourbucksworth.com/#organization" },
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
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
                We grew up in the trades, went to college, and got recruited to run a pest control office in the summer of 2011. Fell in love with it. Loved the customers, loved solving problems, and thought &mdash; yeah, we could do this forever.
              </p>
              <p>
                So in 2013 we started Bucksworth. The idea was simple: people don&rsquo;t call us because they want to &mdash; they call because they have a problem. We get to fix it and make them happy. That&rsquo;s still what gets us up in the morning.
              </p>
              <p>
                Not a franchise. Not a corporation. Just a real Arizona family taking care of real Arizona families &mdash; 33 cities and counting.
              </p>
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
              <img
                src="/images/photos/truck-superstitions.jpg"
                alt="Bucksworth Home Services truck in front of the Superstition Mountains at golden hour in Arizona"
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Gigi Promise with photo */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", margin: "0 0 48px" }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/photos/truck-construction-site.jpg"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
              >
                <source src="/videos/truck-statefarm.mp4" type="video/mp4" />
              </video>
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

          {/* One Company, Every Service */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", margin: "0 0 48px" }}>
            <div>
              <h2>One Company for Everything Your Home Needs</h2>
              <p>
                Most homeowners juggle three or four different companies just to keep their home running &mdash; one for pest control, another for AC, someone else for plumbing, and a separate crew for the yard. That is a lot of phone numbers, a lot of strangers in your house, and a lot of hoping the next company is as good as the last one.
              </p>
              <p>
                Bucksworth exists so you never have to roll those dice. One company, one phone number, one team that already knows your home and your family. Our technicians are trained across multiple trades, and every service we provide is backed by the same Gigi Promise. When you trust us with your pest control, you already know the kind of work we do &mdash; so when your AC goes out at 2 AM in July or your water heater starts leaking, you know exactly who to call.
              </p>
              <p>
                That is the whole point. We want to be the only home services company you will ever need.
              </p>
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
              >
                <source src="/videos/truck-tempetownlake.mp4" type="video/mp4" />
              </video>
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
            Phoenix: <a href="tel:+14804228388" style={{ color: "var(--red)" }}>(480) 422-8388</a>
            <br />
            Tucson: <a href="tel:+15202849930" style={{ color: "var(--red)" }}>(520) 284-9930</a>
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
