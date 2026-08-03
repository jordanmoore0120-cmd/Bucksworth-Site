import Link from "next/link";
import { pickReviews, REVIEW_TOTALS, type Review } from "@/lib/reviews";

interface ReviewsSectionProps {
  /** Stable seed — use the page path so each page shows a consistent set. */
  seed: string;
  branch: "phoenix" | "tucson";
  /** Review tag to prefer: "pest" | "weed" | "ac" */
  tag?: string;
  count?: number;
  heading?: string;
  /** Included in the Review schema as the thing being reviewed. */
  itemReviewedName: string;
}

function stars(n: number) {
  return "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);
}

function formatDate(d: string) {
  if (!d) return "";
  const [y, m] = d.split("-");
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return `${months[Number(m) - 1] ?? ""} ${y}`.trim();
}

export default function ReviewsSection({
  seed,
  branch,
  tag,
  count = 6,
  heading,
  itemReviewedName,
}: ReviewsSectionProps) {
  const reviews: Review[] = pickReviews(seed, { branch, tag, count });
  if (reviews.length === 0) return null;

  const branchTotals = REVIEW_TOTALS.byBranch[branch] ?? REVIEW_TOTALS;
  const title =
    heading ??
    `What Our ${branch === "tucson" ? "Tucson-Area" : "Valley"} Customers Say`;

  const schema = reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "LocalBusiness", name: itemReviewedName },
    author: { "@type": "Person", name: r.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: r.date,
    reviewBody: r.text,
    publisher: { "@type": "Organization", name: "Google" },
  }));

  return (
    <section className="reviews-section">
      <h2 className="reviews-heading">{title}</h2>
      <p className="reviews-subhead">
        <Link href="/reviews" className="reviews-subhead-link">
          {branchTotals.count.toLocaleString()} Google reviews · {branchTotals.rating.toFixed(1)} average
        </Link>{" "}
        · verified from our Google Business Profile ·{" "}
        <Link href="/reviews" className="reviews-subhead-link">read them all</Link>
      </p>
      <div className="reviews-grid">
        {reviews.map((r) => (
          <figure key={r.id} className="review-card">
            <div className="review-stars" aria-label={`${r.rating} out of 5 stars`}>
              {stars(r.rating)}
            </div>
            <blockquote className="review-text">{r.text}</blockquote>
            <figcaption className="review-meta">
              <span className="review-author">{r.author}</span>
              {r.date && <span className="review-date"> · {formatDate(r.date)}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
