import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Bucksworth Home Services is committed to making getyourbucksworth.com usable for everyone. We work toward WCAG 2.2 Level AA. Report an accessibility barrier by phone at (480) 422-8388 or through our request-service form.",
  alternates: {
    canonical: "https://www.getyourbucksworth.com/accessibility",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.getyourbucksworth.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Accessibility Statement",
      item: "https://www.getyourbucksworth.com/accessibility",
    },
  ],
};

const LAST_REVIEWED = "September 30, 2026";

export default function AccessibilityPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="city-hero">
        <div className="city-hero-inner">
          <p className="city-hero-eyebrow">Legal</p>
          <h1>
            Accessibility <span className="orange">Statement</span>
          </h1>
          <p className="city-hero-desc">
            Our commitment to a website everyone can use. Last reviewed{" "}
            {LAST_REVIEWED}.
          </p>
        </div>
      </section>

      <section className="svc-hub-content">
        <div className="svc-hub-content-inner" style={{ maxWidth: "860px" }}>
          <p>
            Bucksworth Home Services LLC wants every customer to be able to find
            information, request service, and reach us on
            getyourbucksworth.com, including people who use screen readers,
            keyboard navigation, magnification, voice control, or other
            assistive technology.
          </p>

          <h2>Our Standard</h2>
          <p>
            We are working to conform to the{" "}
            <a
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG) 2.2
            </a>{" "}
            at Level AA. These guidelines explain how to make web content more
            accessible for people with disabilities.
          </p>

          <h2>What We Do</h2>
          <ul>
            <li>Use real headings in a logical order on every page.</li>
            <li>Write text alternatives for meaningful images.</li>
            <li>
              Show phone numbers and service areas as real text, not only inside
              images.
            </li>
            <li>Label every field on our service request form.</li>
            <li>
              Provide a &ldquo;Skip to main content&rdquo; link and support
              keyboard navigation.
            </li>
            <li>Check text and button colors against WCAG AA contrast ratios.</li>
            <li>
              Review pages for accessibility as we add or change content on the
              site.
            </li>
          </ul>

          <h2>Known Limitations</h2>
          <p>
            Some parts of the site may not yet fully meet WCAG 2.2 AA. This can
            include older blog articles, embedded videos and maps, and tools run
            by third parties, such as our online bill-pay portal. If anything
            gets in your way, please tell us and we will help you another way,
            including by phone.
          </p>

          <h2>Feedback and Help</h2>
          <p>
            If you have trouble using any part of this website, or you need
            information in a different format, please contact us. Tell us the
            page address and what happened, and we will work to fix it and help
            you in the meantime.
          </p>
          <ul>
            <li>
              Phone: <a href="tel:+14804228388">(480) 422-8388</a>
            </li>
            <li>
              Online: <Link href="/request-service">Request service form</Link>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:customercare@getyourbucksworth.com">
                customercare@getyourbucksworth.com
              </a>
            </li>
          </ul>

          <h2>Ongoing Review</h2>
          <p>
            Accessibility is ongoing work, not a one-time fix. We review this
            statement as the site changes and update the &ldquo;Last
            reviewed&rdquo; date above each time we do.
          </p>

          <p style={{ marginTop: "32px" }}>
            <Link href="/">&larr; Back to Bucksworth Home Services</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
