import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termite Warranty & Protection | Bucksworth Home Services",
  description:
    "Complete termite protection for Arizona homeowners. Register your new construction pre-treatment warranty, schedule annual inspections, explore treatment options, or bundle with pest control starting at $49/mo. AZ ROC #343924 | AG License #9613.",
  alternates: {
    canonical: "https://bucksworth-site.vercel.app/termite-warranty",
  },
};

const warrantySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Termite Warranty & Protection",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Bucksworth Home Services",
    telephone: "(480) 422-8388",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Phoenix",
      addressRegion: "AZ",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Phoenix" },
    { "@type": "City", name: "Tucson" },
  ],
  description:
    "Complete termite warranty, treatment, and inspection services for Arizona homes. Pre-treatment warranty registration, annual inspections, and pest control bundles.",
  offers: {
    "@type": "Offer",
    name: "Termite & Pest Control Bundle",
    price: "49",
    priceCurrency: "USD",
    description:
      "Bundle termite warranty with pest control for just $49/month. Termite renewal fees waived for life.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a termite pre-treatment warranty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When your new home was being built, your builder hired a licensed pest control company like Bucksworth to apply termite treatment before the concrete slab was poured. Arizona law (R3-8-309) requires a minimum 3-year retreatment warranty on all pre-treatments. If termites appear within that period, the company must retreat the affected area at no charge. This warranty transfers to you as the homeowner — but you must register it to keep it active.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my home was pre-treated by Bucksworth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check your closing documents for a termite pre-treatment certificate or warranty letter from Bucksworth Home Services. You can also call us at (480) 422-8388 and we'll look up your property address in our records. If your builder is one of our partners, we likely treated your home.",
      },
    },
    {
      "@type": "Question",
      name: "How do I transfer my termite warranty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill out the warranty registration form on this page or call us at (480) 422-8388. We'll verify the pre-treatment was performed on your home and transfer the warranty into your name. The process is quick and straightforward.",
      },
    },
    {
      "@type": "Question",
      name: "Are annual inspections required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. To maintain your termite warranty coverage beyond the initial 3-year period, Bucksworth requires an annual termite inspection of your home. Our licensed technicians will inspect for signs of termite activity and ensure your treatment barrier remains effective. The annual inspection is included when you bundle with pest control.",
      },
    },
    {
      "@type": "Question",
      name: "What does the $49/month termite & pest bundle include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For $49/month you get full pest control service (scorpions, roaches, ants, spiders, rodents) PLUS your termite repair and retreat warranty with annual inspections. Termite renewal fees are waived for life as long as you maintain the bundle.",
      },
    },
    {
      "@type": "Question",
      name: "What if my home wasn't pre-treated or the warranty expired?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No problem. We offer full termite treatment for existing homes including liquid barrier treatments (Termidor), Sentricon baiting systems, and spot treatments for drywood termites. Every treatment comes with its own warranty. Call us for a free termite inspection.",
      },
    },
    {
      "@type": "Question",
      name: "I'm a builder — how do I set up a pre-treatment account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bucksworth provides termite pre-treatment programs for general contractors, home builders, and developers across Arizona. We offer volume pricing for subdivisions, dedicated account management, and priority scheduling. Call (480) 422-8388 to set up a builder account.",
      },
    },
  ],
};

export default function TermiteWarrantyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(warrantySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main id="main-content">
        {/* Hero */}
        <section className="tw-hero">
          <div className="tw-hero-inner">
            <span className="tw-badge">Arizona&apos;s Termite Experts</span>
            <h1>Termite Warranty &amp; Protection</h1>
            <p className="tw-hero-sub">
              Whether you bought a new construction home we pre-treated, need a termite inspection, or want treatment for an existing home — we&apos;ve got you covered.
            </p>
            <div className="tw-hero-ctas">
              <a href="#register" className="tw-btn tw-btn--primary">
                Register My Warranty &darr;
              </a>
              <a href="#inspection" className="tw-btn tw-btn--outline">
                Schedule Inspection &darr;
              </a>
              <a href="tel:4804228388" className="tw-btn tw-btn--outline">
                Call (480) 422-8388
              </a>
            </div>
          </div>
        </section>

        {/* Quick-nav cards */}
        <section className="tw-section">
          <div className="tw-container">
            <h2>How Can We Help With Termites?</h2>
            <div className="tw-nav-cards">
              <a href="#register" className="tw-nav-card">
                <span className="tw-nav-icon">&#128203;</span>
                <h3>Register Warranty</h3>
                <p>New construction homeowner? Transfer your builder&apos;s pre-treatment warranty into your name.</p>
              </a>
              <a href="#inspection" className="tw-nav-card">
                <span className="tw-nav-icon">&#128269;</span>
                <h3>Schedule Inspection</h3>
                <p>Annual warranty inspection or free termite check for your existing home.</p>
              </a>
              <a href="#treatment" className="tw-nav-card">
                <span className="tw-nav-icon">&#128736;</span>
                <h3>Termite Treatment</h3>
                <p>Active termite problem? We offer same-day treatment with Termidor, Sentricon, and more.</p>
              </a>
              <a href="#bundle" className="tw-nav-card tw-nav-card--featured">
                <span className="tw-nav-icon">&#11088;</span>
                <h3>Pest + Termite Bundle</h3>
                <p>$49/mo — full pest control plus termite warranty with renewal fees waived for life.</p>
              </a>
            </div>
          </div>
        </section>

        {/* New Construction Warranty */}
        <section className="tw-section tw-section--alt">
          <div className="tw-container">
            <h2>New Construction Termite Warranty</h2>
            <div className="tw-two-col">
              <div className="tw-col">
                <h3>What Is a Pre-Treatment Warranty?</h3>
                <p>
                  When your new home was built, your builder hired Bucksworth to apply termite treatment <strong>before the concrete slab was poured</strong>. This creates a chemical barrier that protects your home&apos;s foundation from subterranean termites.
                </p>
                <p>
                  Under Arizona law (<strong>R3-8-309</strong>), this treatment comes with a <strong>minimum 3-year retreatment guarantee</strong>. If termites appear within that period, we retreat the affected area at no charge to you.
                </p>
                <p>
                  <strong>But here&apos;s the catch:</strong> this warranty must be <strong>registered and transferred into your name</strong> as the homeowner to remain active. Many new homeowners don&apos;t know about this and let valuable coverage lapse.
                </p>
              </div>
              <div className="tw-col tw-highlight-box">
                <h3>Your Pre-Treatment Warranty Covers:</h3>
                <ul className="tw-check-list">
                  <li>Subterranean termite damage retreatment</li>
                  <li>Full retreat of affected areas at no cost</li>
                  <li>Minimum 3-year coverage by Arizona law</li>
                  <li>Extendable with annual inspections and renewals</li>
                  <li>Transferable if you sell your home</li>
                </ul>
                <p className="tw-highlight-note">
                  <strong>Not sure if your home was pre-treated by Bucksworth?</strong> Call us at <a href="tel:4804228388">(480) 422-8388</a> and we&apos;ll look up your address.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="tw-section">
          <div className="tw-container">
            <h2>How the Warranty Transfer Works</h2>
            <div className="tw-steps">
              <div className="tw-step">
                <span className="tw-step-num">1</span>
                <h3>Register Online or Call</h3>
                <p>
                  Fill out the form below with your name, address, and builder info. Or call us at (480) 422-8388 and we&apos;ll handle it over the phone.
                </p>
              </div>
              <div className="tw-step">
                <span className="tw-step-num">2</span>
                <h3>We Verify the Pre-Treatment</h3>
                <p>
                  Our team confirms the pre-treatment was performed on your home during construction and activates your warranty coverage.
                </p>
              </div>
              <div className="tw-step">
                <span className="tw-step-num">3</span>
                <h3>Schedule Your First Inspection</h3>
                <p>
                  We&apos;ll schedule your annual termite inspection. Our licensed technician checks for activity and ensures your barrier is intact.
                </p>
              </div>
              <div className="tw-step">
                <span className="tw-step-num">4</span>
                <h3>Stay Protected Year After Year</h3>
                <p>
                  Keep your warranty active with annual renewals. Bundle with pest control and we waive renewal fees for life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Annual Inspections */}
        <section className="tw-section tw-section--alt" id="inspection">
          <div className="tw-container">
            <h2>Termite Inspections</h2>
            <div className="tw-two-col">
              <div className="tw-col">
                <h3>Annual Warranty Inspections</h3>
                <p>
                  To maintain your termite warranty coverage beyond the initial 3-year period, an <strong>annual termite inspection</strong> is required. This isn&apos;t just paperwork — Arizona&apos;s Sonoran Desert is home to several species of subterranean termites that actively feed year-round due to our warm climate.
                </p>
                <p>During your inspection, our licensed technicians will:</p>
                <ul className="tw-check-list">
                  <li>Inspect the foundation perimeter for mud tubes and termite activity</li>
                  <li>Check interior walls, baseboards, and door frames</li>
                  <li>Verify the chemical barrier remains effective</li>
                  <li>Document findings and provide a written report</li>
                  <li>Recommend treatment if any activity is detected</li>
                </ul>

                <h3 style={{ marginTop: "24px" }}>Free Inspections for Non-Warranty Homes</h3>
                <p>
                  Don&apos;t have a warranty? No problem. We offer <strong>free termite inspections</strong> for any Arizona home. If we find activity, we&apos;ll provide treatment options and a written quote before any work begins.
                </p>

                <div className="tw-inspection-cta">
                  <a href="/request-service" className="tw-btn tw-btn--primary">
                    Schedule an Inspection
                  </a>
                  <span className="tw-inspection-note">or call <a href="tel:4804228388">(480) 422-8388</a></span>
                </div>
              </div>
              <div className="tw-col">
                <div className="tw-highlight-box">
                  <h3>Renewal Options</h3>
                  <div className="tw-renewal-option">
                    <h4>Standard Annual Renewal</h4>
                    <p>
                      Annual renewal fee keeps your warranty active. Includes your required inspection and full retreatment coverage.
                    </p>
                  </div>
                  <div className="tw-renewal-option tw-renewal-option--featured">
                    <h4>Bundle &amp; Save (Recommended)</h4>
                    <p>
                      Add pest control for just $49/mo total. Your termite renewal fees are <strong>waived for life</strong> — saving you hundreds every year while also protecting against scorpions, roaches, ants, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment options */}
        <section className="tw-section" id="treatment">
          <div className="tw-container">
            <h2>Termite Treatment Options</h2>
            <p className="tw-section-intro">
              Whether you have an active infestation or want preventive protection, we offer the most effective termite treatments available in Arizona.
            </p>
            <div className="tw-treatment-grid">
              <div className="tw-treatment-card">
                <h3>Liquid Barrier Treatment</h3>
                <p className="tw-treatment-brand">Termidor&reg; &amp; Taurus&reg;</p>
                <p>
                  The gold standard in termite control. A continuous chemical barrier is applied around your home&apos;s foundation. Termites that contact the treated soil are eliminated and spread the treatment to the colony through contact — destroying the entire colony, not just individual termites.
                </p>
                <ul className="tw-treatment-specs">
                  <li><strong>Best for:</strong> Active infestations, post-construction protection</li>
                  <li><strong>Effectiveness:</strong> 100% colony elimination in published studies</li>
                  <li><strong>Warranty:</strong> Included with every treatment</li>
                </ul>
              </div>
              <div className="tw-treatment-card">
                <h3>Sentricon&reg; Baiting System</h3>
                <p className="tw-treatment-brand">Always Active&trade; Technology</p>
                <p>
                  In-ground bait stations installed around your home&apos;s perimeter. Worker termites find the bait, share it with the colony, and the entire colony — including the queen — is eliminated. Stations are monitored during every service visit.
                </p>
                <ul className="tw-treatment-specs">
                  <li><strong>Best for:</strong> Ongoing monitoring and prevention</li>
                  <li><strong>Effectiveness:</strong> EPA-proven colony elimination</li>
                  <li><strong>Warranty:</strong> Continuous coverage with active service</li>
                </ul>
              </div>
              <div className="tw-treatment-card">
                <h3>Spot &amp; Localized Treatment</h3>
                <p className="tw-treatment-brand">Drywood &amp; targeted applications</p>
                <p>
                  Targeted treatment for isolated termite activity — including drywood termites in attic framing, door frames, or window sills. We inject treatment directly into the affected wood without disrupting your entire home.
                </p>
                <ul className="tw-treatment-specs">
                  <li><strong>Best for:</strong> Drywood termites, isolated activity</li>
                  <li><strong>Effectiveness:</strong> Direct colony contact</li>
                  <li><strong>Warranty:</strong> Area-specific warranty included</li>
                </ul>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <Link href="/request-service" className="tw-btn tw-btn--primary">
                Get a Free Termite Inspection
              </Link>
            </div>
          </div>
        </section>

        {/* Bundle deal */}
        <section className="tw-section tw-bundle" id="bundle">
          <div className="tw-container">
            <div className="tw-bundle-card">
              <div className="tw-bundle-badge">Best Value</div>
              <h2>Termite &amp; Pest Control Bundle</h2>
              <div className="tw-price">
                <span className="tw-price-amount">$49</span>
                <span className="tw-price-period">/month</span>
              </div>
              <p className="tw-price-note">3-year price guarantee</p>
              <ul className="tw-bundle-features">
                <li>
                  <span className="tw-check" aria-hidden="true">&#10003;</span>
                  Full pest control service (interior &amp; exterior)
                </li>
                <li>
                  <span className="tw-check" aria-hidden="true">&#10003;</span>
                  Termite repair &amp; retreat warranty
                </li>
                <li>
                  <span className="tw-check" aria-hidden="true">&#10003;</span>
                  Annual termite inspection included
                </li>
                <li>
                  <span className="tw-check" aria-hidden="true">&#10003;</span>
                  Termite renewal fees waived for life
                </li>
                <li>
                  <span className="tw-check" aria-hidden="true">&#10003;</span>
                  Scorpion, roach, ant, spider, rodent coverage
                </li>
                <li>
                  <span className="tw-check" aria-hidden="true">&#10003;</span>
                  Same-day service when you need it
                </li>
              </ul>
              <p className="tw-bundle-waiver">
                <strong>Waive your termite renewal fees for life</strong> — just bundle with any other Bucksworth service.
              </p>
              <div className="tw-bundle-ctas">
                <a href="tel:4804228388" className="tw-btn tw-btn--primary tw-btn--lg">
                  Call to Bundle: (480) 422-8388
                </a>
                <a href="#register" className="tw-btn tw-btn--outline">
                  Register Warranty First &darr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="tw-section tw-section--alt">
          <div className="tw-container">
            <h2>Frequently Asked Questions</h2>
            <div className="tw-faq-list">
              {(faqSchema.mainEntity as Array<{
                "@type": string;
                name: string;
                acceptedAnswer: { "@type": string; text: string };
              }>).map((q, i) => (
                <details key={i} className="tw-faq-item">
                  <summary className="tw-faq-q">{q.name}</summary>
                  <p className="tw-faq-a">{q.acceptedAnswer.text}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Registration form */}
        <section className="tw-section" id="register">
          <div className="tw-container">
            <div className="tw-form-wrapper">
              <h2>Register Your Termite Warranty</h2>
              <p className="tw-form-intro">
                Bought a new construction home that Bucksworth pre-treated? Fill out the form below and our team will verify your pre-treatment and activate your warranty. You can also call us directly at{" "}
                <a href="tel:4804228388" className="tw-inline-link">(480) 422-8388</a>{" "}
                or{" "}
                <a href="tel:5202849930" className="tw-inline-link">(520) 284-9930</a>.
              </p>
              <form
                className="tw-form"
                action="/request-service"
                method="get"
              >
                <div className="tw-form-row">
                  <div className="tw-form-group">
                    <label htmlFor="tw-fname">First Name *</label>
                    <input type="text" id="tw-fname" name="first_name" required placeholder="Your first name" aria-required="true" />
                  </div>
                  <div className="tw-form-group">
                    <label htmlFor="tw-lname">Last Name *</label>
                    <input type="text" id="tw-lname" name="last_name" required placeholder="Your last name" aria-required="true" />
                  </div>
                </div>
                <div className="tw-form-row">
                  <div className="tw-form-group">
                    <label htmlFor="tw-email">Email *</label>
                    <input type="email" id="tw-email" name="email" required placeholder="you@email.com" aria-required="true" />
                  </div>
                  <div className="tw-form-group">
                    <label htmlFor="tw-phone">Phone *</label>
                    <input type="tel" id="tw-phone" name="phone" required placeholder="(480) 555-0123" aria-required="true" />
                  </div>
                </div>
                <div className="tw-form-group tw-form-group--full">
                  <label htmlFor="tw-address">Property Address *</label>
                  <input type="text" id="tw-address" name="address" required placeholder="Full street address of your new home" aria-required="true" />
                </div>
                <div className="tw-form-row">
                  <div className="tw-form-group">
                    <label htmlFor="tw-builder">Builder Name</label>
                    <input type="text" id="tw-builder" name="builder" placeholder="e.g. DR Horton, Meritage, Lennar" />
                  </div>
                  <div className="tw-form-group">
                    <label htmlFor="tw-close-date">Closing Date</label>
                    <input type="date" id="tw-close-date" name="close_date" />
                  </div>
                </div>
                <div className="tw-form-group tw-form-group--full">
                  <label htmlFor="tw-request-type">What do you need?</label>
                  <select id="tw-request-type" name="request_type">
                    <option value="warranty-transfer">Transfer my builder&apos;s warranty</option>
                    <option value="annual-inspection">Schedule annual inspection</option>
                    <option value="termite-treatment">I have a termite problem</option>
                    <option value="bundle-info">Tell me about the $49/mo bundle</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="tw-form-group tw-form-group--full">
                  <label className="tw-checkbox-label">
                    <input type="checkbox" name="bundle_interest" value="yes" />
                    <span>I&apos;m interested in the $49/mo Termite &amp; Pest bundle (waive renewal fees for life)</span>
                  </label>
                </div>
                <button type="submit" className="tw-btn tw-btn--primary tw-btn--lg tw-submit">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Builder section (brief) */}
        <section className="tw-section tw-section--alt">
          <div className="tw-container">
            <div className="tw-builder-section">
              <h2>Builders &amp; General Contractors</h2>
              <p>
                Bucksworth provides termite pre-treatment programs for general contractors, home builders, and developers across Arizona. Our treatments meet all <strong>ARS 32-2301</strong> requirements and include warranties that seamlessly transfer to new homeowners at closing.
              </p>
              <ul className="tw-check-list">
                <li>Volume pricing for subdivisions and multi-lot projects</li>
                <li>Dedicated account management</li>
                <li>Priority scheduling to keep your builds on track</li>
                <li>Warranties transfer seamlessly to homeowners at closing</li>
                <li>Full compliance with Arizona Structural Pest Control Commission</li>
              </ul>
              <a href="tel:4804228388" className="tw-btn tw-btn--primary" style={{ marginTop: "16px" }}>
                Set Up a Builder Account: (480) 422-8388
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tw-section tw-final-cta">
          <div className="tw-container" style={{ textAlign: "center" }}>
            <h2>Protect Your Biggest Investment</h2>
            <p>
              Don&apos;t let your termite warranty lapse. Whether you need to register a new construction warranty, schedule an inspection, or get treatment — we&apos;re here to help.
            </p>
            <div className="tw-hero-ctas">
              <a href="tel:4804228388" className="tw-btn tw-btn--primary tw-btn--lg">
                Phoenix: (480) 422-8388
              </a>
              <a href="tel:5202849930" className="tw-btn tw-btn--outline tw-btn--lg">
                Tucson: (520) 284-9930
              </a>
            </div>
            <p className="tw-trust-line">
              AZ ROC #343924 &bull; AG License #9613 &bull; Google Guaranteed &bull; Family-Owned Since 2013
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
