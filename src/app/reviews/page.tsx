import { Metadata } from "next";
import Link from "next/link";
import { REVIEWS, REVIEW_TOTALS } from "@/lib/reviews";

/* ────────────────────────────────────────────────────────────────
   CUSTOMER REVIEWS

   Real reviews from our Google Business Profile (Phoenix + Tucson),
   synced daily into content/reviews.json by the reviews bot. Totals
   and ratings are the live GBP numbers; every review shown is a real
   customer review, never written or paraphrased by us.
──────────────────────────────────────────────────────────────── */

const PHONE_PHX = "(480) 422-8388";
const PHONE_TUC = "(520) 284-9930";

interface LiveReview {
  author: string;
  rating: number;
  text: string;
  when: string;
  publishTime?: string;
}
interface ReviewsData {
  rating: number;
  total: number;
  reviews: LiveReview[];
}

/** How many individual reviews to render on the page. */
const SHOWN = 200;

function monthYear(date: string): string {
  if (!date) return "";
  const [y, m] = date.split("-");
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return `${months[Number(m) - 1] ?? ""} ${y}`.trim();
}

/**
 * Real reviews, straight from our Google Business Profile. The data is synced
 * daily by the reviews bot into content/reviews.json, so the totals here are
 * always the live GBP numbers — no API key required at request time.
 */
function getGoogleReviews(): ReviewsData {
  return {
    rating: REVIEW_TOTALS.rating,
    total: REVIEW_TOTALS.count,
    reviews: REVIEWS.slice(0, SHOWN).map((r) => ({
      author: r.author,
      rating: r.rating,
      text: r.text,
      when: monthYear(r.date),
      publishTime: r.date,
    })),
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const data = getGoogleReviews();
  const ratingPart = data ? `${data.rating.toFixed(1)}-Star Rating` : "Customer Reviews";
  return {
    title: `Customer Reviews | ${ratingPart}`,
    description: data
      ? `Read what Arizona homeowners say about Bucksworth Home Services — ${data.rating.toFixed(1)} stars across ${data.total.toLocaleString()} Google reviews. Pest control, HVAC, plumbing, and weed control.`
      : "Read what Arizona homeowners say about Bucksworth Home Services — pest control, HVAC, plumbing, and weed control across Phoenix and Tucson.",
    alternates: { canonical: "https://www.getyourbucksworth.com/reviews" },
  };
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.getyourbucksworth.com" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: "https://www.getyourbucksworth.com/reviews" },
  ],
};

export default function ReviewsPage() {
  const data = getGoogleReviews();

  // Build review/rating schema ONLY from real Google data.
  const reviewSchema = data
    ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.getyourbucksworth.com/#organization",
        name: "Bucksworth Home Services",
        url: "https://www.getyourbucksworth.com",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: data.rating.toFixed(2),
          reviewCount: String(data.total),
          bestRating: "5",
          worstRating: "1",
        },
        review: data.reviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.author },
          ...(r.publishTime ? { datePublished: r.publishTime.slice(0, 10) } : {}),
          reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
          reviewBody: r.text,
        })),
      }
    : null;

  const ratingLabel = data ? data.rating.toFixed(1) : null;
  const totalLabel = data ? data.total.toLocaleString() : null;

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {reviewSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      )}

      {/* Hero */}
      <section className="city-hero">
        <div className="city-hero-inner">
          <p className="city-hero-eyebrow">Customer Reviews</p>
          <h1>
            What Arizona Homeowners Say About <span className="orange">Bucksworth</span>
          </h1>
          <p className="city-hero-desc">
            {data
              ? `${ratingLabel}-star average across ${totalLabel} Google reviews. Read what your neighbors say about our pest control, HVAC, plumbing, and weed control services.`
              : "Read what your neighbors say about our pest control, HVAC, plumbing, and weed control services across Phoenix and Tucson."}
          </p>
          <div className="city-hero-badges">
            {data && <span className="city-hero-badge">&#9733; {ratingLabel} Average Rating</span>}
            <span className="city-hero-badge">&#10003; Google Guaranteed</span>
            {data && <span className="city-hero-badge">{totalLabel} Reviews</span>}
            <span className="city-hero-badge">33 Cities Served</span>
          </div>
        </div>
      </section>

      {/* Stats bar — only shown when we have real numbers */}
      {data && (
        <section style={{ background: "var(--navy)", padding: "32px 0" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px", textAlign: "center" }}>
            {[
              { value: ratingLabel as string, label: "Star Rating" },
              { value: totalLabel as string, label: "Google Reviews" },
              { value: "13+", label: "Years in Business" },
              { value: "33", label: "Cities Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <p style={{ fontSize: "36px", fontWeight: 800, color: "var(--orange)", fontFamily: "'Oswald', sans-serif", margin: 0 }}>{stat.value}</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Live reviews grid — real Google reviews only */}
      {data && data.reviews.length > 0 && (
        <section className="svc-cards-section">
          <div className="container">
            <h2 className="section-title">Recent Reviews from Google</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px", marginTop: "24px" }}>
              {data.reviews.map((review, i) => (
                <div key={i} style={{ background: "white", borderRadius: "12px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid var(--g100)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <div>
                      <p style={{ fontWeight: 700, color: "var(--navy)", margin: 0, fontSize: "15px" }}>{review.author}</p>
                      {review.when && <p style={{ fontSize: "12px", color: "var(--g500)", margin: 0 }}>{review.when}</p>}
                    </div>
                    <span style={{ color: "#f59e0b", fontSize: "16px", letterSpacing: "2px" }}>
                      {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--g700)", lineHeight: "1.6", margin: 0 }}>&ldquo;{review.text}&rdquo;</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "13px", color: "var(--g500)", marginTop: "16px", textAlign: "center" }}>
              Showing our {data.reviews.length} most recent reviews. See all {totalLabel} on our{" "}
              <a href="https://www.google.com/search?q=Bucksworth+Home+Services+reviews" target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)", textDecoration: "underline" }}>
                Google Business Profile
              </a>.
            </p>
          </div>
        </section>
      )}

      {/* SEO content */}
      <section className="svc-hub-content">
        <div className="svc-hub-content-inner">
          <h2>Why Arizona Homeowners Trust Bucksworth</h2>
          <p>
            Since 2013, Bucksworth Home Services has earned the trust of Arizona families across 33 cities in the Phoenix and Tucson metro areas. Our reputation is built on treating every home with care and never cutting corners on quality, communication, or customer service.
          </p>
          <p>
            We are Google Guaranteed, meaning Google has independently verified our business licenses, insurance, and employee background checks. When you hire Bucksworth, you are hiring a company that Google trusts enough to back with their own guarantee.
          </p>

          <h2>How We Earn 5-Star Reviews</h2>
          <p>Our review success comes down to a few simple principles that every Bucksworth team member follows:</p>
          <ul style={{ margin: "12px 0 20px 20px", lineHeight: "2" }}>
            <li><strong>Show up on time</strong> &mdash; We respect your schedule and communicate proactively if anything changes</li>
            <li><strong>Explain before we work</strong> &mdash; No mystery charges, no surprise bills</li>
            <li><strong>Do the job right</strong> &mdash; Quality work the first time, every time</li>
            <li><strong>Follow up</strong> &mdash; We check in after service to make sure you are satisfied</li>
            <li><strong>Stand behind our work</strong> &mdash; If pests come back, we come back. Satisfaction guaranteed.</li>
          </ul>

          <h2>Review Us on Google</h2>
          <p>
            Already a Bucksworth customer? We would love to hear about your experience. Your honest feedback helps other Arizona homeowners find reliable home services. Leave us a review on Google &mdash; it takes less than a minute and means the world to our team.
          </p>

          <h2>Ready to Become Our Next 5-Star Review?</h2>
          <p>Call us today for a free inspection and experience the Bucksworth difference for yourself:</p>
          <p style={{ fontSize: "18px", fontWeight: 700 }}>
            Phoenix: <a href="tel:+14804228388" style={{ color: "var(--red)" }}>{PHONE_PHX}</a>
            <br />
            Tucson: <a href="tel:+15202849930" style={{ color: "var(--red)" }}>{PHONE_TUC}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
