import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bucksworth Home Services collects, uses, and protects your information, including our text messaging (SMS) policy. Mobile information and opt-in consent are never shared or sold to third parties for marketing.",
  alternates: {
    canonical: "https://www.getyourbucksworth.com/privacy-policy",
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
      name: "Privacy Policy",
      item: "https://www.getyourbucksworth.com/privacy-policy",
    },
  ],
};

const EFFECTIVE_DATE = "September 18, 2026";

export default function PrivacyPolicyPage() {
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
            Privacy <span className="orange">Policy</span>
          </h1>
          <p className="city-hero-desc">
            How we collect, use, and protect your information &mdash; including
            our text messaging policy. Effective {EFFECTIVE_DATE}.
          </p>
        </div>
      </section>

      <section className="svc-hub-content">
        <div className="svc-hub-content-inner" style={{ maxWidth: "860px" }}>
          <p>
            Bucksworth Home Services LLC (&ldquo;Bucksworth,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides
            pest control, termite protection, weed and lawn care, air
            conditioning, heating, and plumbing services across the Phoenix and
            Tucson metro areas. This Privacy Policy explains what information we
            collect, how we use it, and the choices you have. It applies to
            getyourbucksworth.com and to the services we provide by phone, text,
            email, and in person.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect only what we need to serve you:</p>
          <ul>
            <li>
              <strong>Information you give us.</strong> Your name, service
              address, phone number, email address, gate codes or access
              instructions, details about the pest, weed, plumbing, or HVAC
              issue you are dealing with, and any notes or photos you send us.
            </li>
            <li>
              <strong>Payment information.</strong> Processed by our
              PCI-compliant payment processors. We do not store full card numbers
              on our own servers.
            </li>
            <li>
              <strong>Service records.</strong> Appointment history, technician
              notes, inspection findings, treatments applied, warranty
              registrations, and billing history.
            </li>
            <li>
              <strong>Calls and messages.</strong> Calls to and from our offices
              may be recorded or monitored for quality and training. Text
              message conversations with us are stored as part of your customer
              record.
            </li>
            <li>
              <strong>Website and device information.</strong> IP address,
              browser type, pages visited, and referring source, collected
              through cookies and standard analytics tools so we can see which
              pages help people and which do not.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To schedule, perform, and follow up on the services you request</li>
            <li>To confirm appointments and let you know when a technician is on the way</li>
            <li>To send invoices, receipts, and billing notices, and to process payments</li>
            <li>To answer your questions and respond to service issues</li>
            <li>To register and administer termite warranties and service agreements</li>
            <li>To send service reminders and, if you have opted in, occasional offers</li>
            <li>To meet Arizona licensing, pesticide-application recordkeeping, and other legal requirements</li>
            <li>To improve our website, our scheduling, and how we answer the phone</li>
          </ul>

          <h2 id="sms">Text Messaging (SMS) Policy</h2>
          <p>
            <strong>
              Mobile information will not be shared with third parties or
              affiliates for marketing or promotional purposes. All of the above
              categories exclude text messaging originator opt-in data and
              consent; this information will not be shared with any third
              parties.
            </strong>
          </p>
          <ul>
            <li>
              <strong>How you opt in.</strong> You may opt in to text messages by
              giving us your mobile number when you request service, book an
              appointment, or ask us to text you, or by texting us first.
              Consent to receive texts is never a condition of purchasing any
              service.
            </li>
            <li>
              <strong>What we send.</strong> Appointment confirmations and
              reminders, technician arrival notices, service follow-ups, billing
              and payment notices, replies to your questions, and &mdash; only if
              you opted in to marketing &mdash; occasional promotions.
            </li>
            <li>
              <strong>Message frequency.</strong> Varies based on your service
              schedule and your conversations with us.
            </li>
            <li>
              <strong>Cost.</strong> Message and data rates may apply. We do not
              charge for text messages.
            </li>
            <li>
              <strong>How to stop.</strong> Reply <strong>STOP</strong> to any
              message to opt out. You will receive one confirmation and no
              further texts. Reply <strong>HELP</strong> for help, or call us at
              the number for your area listed below.
            </li>
            <li>
              <strong>Carriers.</strong> Mobile carriers are not liable for
              delayed or undelivered messages.
            </li>
          </ul>

          <h2>How We Share Information &mdash; and How We Do Not</h2>
          <p>
            <strong>We do not sell your personal information.</strong> We do not
            share your mobile number, your text messaging opt-in, or your consent
            records with third parties or affiliates for their marketing
            purposes. Period.
          </p>
          <p>We share information only in these limited cases:</p>
          <ul>
            <li>
              <strong>Service providers who work for us.</strong> Scheduling and
              field service software, payment processors, phone and text message
              providers, email providers, and analytics providers &mdash; each
              only to the extent needed to do their job for us, and under
              agreements that prohibit using your information for their own
              marketing.
            </li>
            <li>
              <strong>When you ask us to.</strong> For example, sharing an
              inspection report with your builder, realtor, escrow company, or
              property manager.
            </li>
            <li>
              <strong>Legal requirements.</strong> When required by law,
              subpoena, state licensing or regulatory authority, or to protect
              the safety, rights, or property of our customers, our team, or the
              public.
            </li>
            <li>
              <strong>Business transfer.</strong> If Bucksworth is ever involved
              in a merger, acquisition, or sale of assets, customer information
              may transfer as part of that transaction, subject to this policy.
            </li>
          </ul>

          <h2>Cookies and Analytics</h2>
          <p>
            Our website uses cookies and similar technologies to keep the site
            working, understand how visitors use it, and measure our advertising.
            You can block or delete cookies in your browser settings; some parts
            of the site may not work as well if you do.
          </p>

          <h2>Data Retention and Security</h2>
          <p>
            We keep customer and service records as long as needed to serve you,
            honor warranties, and meet Arizona recordkeeping and tax
            requirements, and then dispose of them securely. We use
            administrative, technical, and physical safeguards to protect your
            information. No system is perfectly secure, so we cannot guarantee
            absolute security.
          </p>

          <h2>Your Choices</h2>
          <ul>
            <li>
              <strong>Texts:</strong> reply STOP to opt out at any time.
            </li>
            <li>
              <strong>Marketing email:</strong> use the unsubscribe link in any
              message. You will still receive service and billing messages
              related to your account.
            </li>
            <li>
              <strong>Access, correction, or deletion:</strong> contact us and we
              will update or delete your information, except records we are
              required to keep by law or that we need to honor an active warranty
              or unpaid balance.
            </li>
          </ul>

          <h2>Children&rsquo;s Privacy</h2>
          <p>
            Our services are for homeowners and businesses. We do not knowingly
            collect personal information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            If we change this policy we will update the effective date at the top
            of this page. Material changes affecting how we use your information
            will be posted here.
          </p>

          <h2>Contact Us</h2>
          <p>
            Bucksworth Home Services LLC
            <br />
            2073 W Houston Ave Suite 101, Apache Junction, AZ 85120
            <br />
            Phoenix metro: <a href="tel:+14804228388">(480) 422-8388</a>
            <br />
            Tucson metro: <a href="tel:+15202849930">(520) 284-9930</a>
            <br />
            Email: <a href="mailto:info@getyourbucksworth.com">info@getyourbucksworth.com</a>
            <br />
            AZ ROC #343924 | AG License #9613
          </p>

          <p style={{ marginTop: "32px" }}>
            <Link href="/">&larr; Back to Bucksworth Home Services</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
