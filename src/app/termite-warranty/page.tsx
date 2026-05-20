import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/site.css";

export const metadata: Metadata = {
  title: "Termite Warranty Registration | Transfer Your Builder Warranty",
  description:
    "Register and transfer your new construction termite warranty with Bucksworth Home Services. Your builder hired us for the pre-treatment — now protect your investment with annual inspections, repair & retreat coverage, and exclusive bundle pricing starting at $49/mo.",
  alternates: {
    canonical: "https://bucksworth-site.vercel.app/termite-warranty",
  },
};

const warrantySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Termite Warranty Registration & Transfer",
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
    "Termite repair and retreat warranty transfer for new construction homes. Annual inspections, lifetime renewal waiver with pest control bundle.",
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
        text: "When your new home was being built, your builder hired Bucksworth Home Services to perform a termite pre-treatment during the construction process. This treatment comes with a repair and retreat warranty that protects your home against termite damage. However, this warranty must be transferred into your name as the new homeowner to remain active.",
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
        text: "Yes. To maintain your termite warranty coverage, Bucksworth requires an annual termite inspection of your home. Our licensed technicians will inspect for signs of termite activity and ensure your treatment barrier remains effective.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the annual renewal cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard annual renewals keep your warranty active. However, when you bundle your termite warranty with any other Bucksworth service (like pest control), we waive your termite renewal fees for life — all for just $49/month.",
      },
    },
    {
      "@type": "Question",
      name: "What does the $49/month termite & pest bundle include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For $49/month you get full pest control service PLUS your termite repair and retreat warranty with annual inspections. Termite renewal fees are waived for life as long as you maintain the bundle. It's the best way to protect your home from both everyday pests and termite damage.",
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
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="tw-hero">
          <div className="tw-hero-inner">
            <span className="tw-badge">New Homeowner?</span>
            <h1>Termite Warranty Registration</h1>
            <p className="tw-hero-sub">
              Your builder hired Bucksworth to protect your home during
              construction. Now it&apos;s time to transfer that warranty into your
              name.
            </p>
            <div className="tw-hero-ctas">
              <a href="#register" className="tw-btn tw-btn--primary">
                Register My Warranty &darr;
              </a>
              <a href="tel:4804228388" className="tw-btn tw-btn--outline">
                Call (480) 422-8388
              </a>
            </div>
          </div>
        </section>

        {/* What happened */}
        <section className="tw-section">
          <div className="tw-container">
            <h2>What Is a Termite Pre-Treatment Warranty?</h2>
            <div className="tw-two-col">
              <div className="tw-col">
                <p>
                  During the construction of your new home, your builder hired
                  Bucksworth Home Services to perform a{" "}
                  <strong>termite pre-treatment</strong> — a critical step in
                  protecting your home&apos;s foundation and structure from
                  subterranean termites before the slab was even poured.
                </p>
                <p>
                  This pre-treatment comes with a{" "}
                  <strong>repair and retreat warranty</strong> that covers your
                  home against termite damage. If termites are ever found, we
                  come back, retreat the affected area, and repair the damage —
                  all at no additional cost to you.
                </p>
                <p>
                  <strong>
                    However, this warranty must be transferred into your name as
                    the homeowner to remain active.
                  </strong>{" "}
                  Don&apos;t let your builder&apos;s investment go to waste —
                  register below.
                </p>
              </div>
              <div className="tw-col tw-highlight-box">
                <h3>Your Warranty Covers:</h3>
                <ul className="tw-check-list">
                  <li>Subterranean termite damage repair</li>
                  <li>Full retreat of affected areas</li>
                  <li>Annual professional inspection</li>
                  <li>Peace of mind for your biggest investment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="tw-section tw-section--alt">
          <div className="tw-container">
            <h2>How the Warranty Transfer Works</h2>
            <div className="tw-steps">
              <div className="tw-step">
                <span className="tw-step-num">1</span>
                <h3>Register Online or Call</h3>
                <p>
                  Fill out the form below with your name, address, and builder
                  info. Or call us at (480) 422-8388 and we&apos;ll handle it
                  over the phone.
                </p>
              </div>
              <div className="tw-step">
                <span className="tw-step-num">2</span>
                <h3>We Verify the Pre-Treatment</h3>
                <p>
                  Our team confirms the pre-treatment was performed on your home
                  during construction and activates your warranty.
                </p>
              </div>
              <div className="tw-step">
                <span className="tw-step-num">3</span>
                <h3>Schedule Your First Inspection</h3>
                <p>
                  We&apos;ll schedule your required annual inspection. Our
                  licensed technician checks for termite activity and ensures
                  your barrier is intact.
                </p>
              </div>
              <div className="tw-step">
                <span className="tw-step-num">4</span>
                <h3>Stay Protected Year After Year</h3>
                <p>
                  Keep your warranty active with annual renewals and inspections.
                  Bundle with pest control and we&apos;ll waive renewals for
                  life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bundle deal */}
        <section className="tw-section tw-bundle">
          <div className="tw-container">
            <div className="tw-bundle-card">
              <div className="tw-bundle-badge">Best Value</div>
              <h2>
                Termite &amp; Pest Control Bundle
              </h2>
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
                <strong>Waive your termite renewal fees for life</strong> — just
                bundle with any other Bucksworth service.
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

        {/* Annual requirements */}
        <section className="tw-section">
          <div className="tw-container">
            <h2>Annual Inspection Requirements</h2>
            <div className="tw-two-col">
              <div className="tw-col">
                <p>
                  To maintain your termite warranty coverage, Bucksworth
                  requires an <strong>annual termite inspection</strong> of your
                  home. This isn&apos;t just a formality — Arizona&apos;s desert
                  climate creates conditions where subterranean termites thrive,
                  and early detection is the key to preventing costly damage.
                </p>
                <p>
                  During your annual inspection, our licensed technicians will:
                </p>
                <ul className="tw-check-list">
                  <li>
                    Inspect the foundation perimeter for mud tubes and termite
                    activity
                  </li>
                  <li>Check interior walls, baseboards, and door frames</li>
                  <li>Verify the chemical barrier remains effective</li>
                  <li>Document findings and provide a written report</li>
                  <li>
                    Recommend any additional treatment if activity is detected
                  </li>
                </ul>
              </div>
              <div className="tw-col">
                <div className="tw-highlight-box">
                  <h3>Renewal Options</h3>
                  <div className="tw-renewal-option">
                    <h4>Standard Renewal</h4>
                    <p>
                      Annual renewal fee keeps your warranty active. Includes
                      your required inspection.
                    </p>
                  </div>
                  <div className="tw-renewal-option tw-renewal-option--featured">
                    <h4>Bundle &amp; Save (Recommended)</h4>
                    <p>
                      Add pest control for just $49/mo total. Your termite
                      renewal fees are{" "}
                      <strong>waived for life</strong> — saving you hundreds
                      every year.
                    </p>
                  </div>
                </div>
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
                Fill out the form below and our team will verify your
                pre-treatment and activate your warranty. You can also call us
                directly at{" "}
                <a href="tel:4804228388" className="tw-inline-link">
                  (480) 422-8388
                </a>{" "}
                or{" "}
                <a href="tel:5202849930" className="tw-inline-link">
                  (520) 284-9930
                </a>
                .
              </p>
              <form
                className="tw-form"
                action="https://portal.hero.demand-iq.com"
                method="get"
                // @ts-expect-error WebMCP attributes not in React types yet
                toolname="register_termite_warranty"
                tooldescription="Register and transfer your new construction termite pre-treatment warranty into the homeowner's name"
              >
                <div className="tw-form-row">
                  <div className="tw-form-group">
                    <label htmlFor="tw-fname">First Name *</label>
                    <input
                      type="text"
                      id="tw-fname"
                      name="first_name"
                      required
                      placeholder="Your first name"
                      aria-required="true"
                    />
                  </div>
                  <div className="tw-form-group">
                    <label htmlFor="tw-lname">Last Name *</label>
                    <input
                      type="text"
                      id="tw-lname"
                      name="last_name"
                      required
                      placeholder="Your last name"
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="tw-form-row">
                  <div className="tw-form-group">
                    <label htmlFor="tw-email">Email *</label>
                    <input
                      type="email"
                      id="tw-email"
                      name="email"
                      required
                      placeholder="you@email.com"
                      aria-required="true"
                    />
                  </div>
                  <div className="tw-form-group">
                    <label htmlFor="tw-phone">Phone *</label>
                    <input
                      type="tel"
                      id="tw-phone"
                      name="phone"
                      required
                      placeholder="(480) 555-0123"
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="tw-form-group tw-form-group--full">
                  <label htmlFor="tw-address">Property Address *</label>
                  <input
                    type="text"
                    id="tw-address"
                    name="address"
                    required
                    placeholder="Full street address of your new home"
                    aria-required="true"
                  />
                </div>
                <div className="tw-form-row">
                  <div className="tw-form-group">
                    <label htmlFor="tw-builder">Builder Name</label>
                    <input
                      type="text"
                      id="tw-builder"
                      name="builder"
                      placeholder="e.g. DR Horton, Meritage, Lennar"
                    />
                  </div>
                  <div className="tw-form-group">
                    <label htmlFor="tw-close-date">Closing Date</label>
                    <input type="date" id="tw-close-date" name="close_date" />
                  </div>
                </div>
                <div className="tw-form-group tw-form-group--full">
                  <label className="tw-checkbox-label">
                    <input type="checkbox" name="bundle_interest" value="yes" />
                    <span>
                      I&apos;m interested in the $49/mo Termite &amp; Pest
                      bundle (waive renewal fees for life)
                    </span>
                  </label>
                </div>
                <button type="submit" className="tw-btn tw-btn--primary tw-btn--lg tw-submit">
                  Submit Warranty Registration
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="tw-section tw-final-cta">
          <div className="tw-container" style={{ textAlign: "center" }}>
            <h2>Protect Your Biggest Investment</h2>
            <p>
              Don&apos;t let your builder&apos;s termite warranty expire.
              Register today and keep your home protected for years to come.
            </p>
            <div className="tw-hero-ctas">
              <a href="tel:4804228388" className="tw-btn tw-btn--primary tw-btn--lg">
                Call (480) 422-8388
              </a>
              <a href="tel:5202849930" className="tw-btn tw-btn--outline tw-btn--lg">
                Tucson: (520) 284-9930
              </a>
            </div>
            <p className="tw-trust-line">
              AZ ROC #343924 &bull; AG License #9613 &bull; Google
              Guaranteed &bull; Family-Owned Since 2013
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
