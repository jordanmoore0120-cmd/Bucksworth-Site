import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Reviews | Bucksworth Home Services | 4.8★ Rating",
  description:
    "Read what Arizona homeowners say about Bucksworth Home Services. 4.8-star rating across 2,000+ reviews. Google Guaranteed pest control, HVAC, plumbing, and weed control.",
  alternates: { canonical: "https://bucksworth-site.vercel.app/reviews" },
};

/* ── Featured reviews pulled from GMB ── */
const REVIEWS = [
  { name: "Sarah M.", city: "Gilbert", stars: 5, service: "Pest Control", text: "Bucksworth has been our pest control company for over two years now. They are always on time, professional, and thorough. We had a serious scorpion problem when we first moved in and they eliminated it within two months. Highly recommend them to anyone in Gilbert or the East Valley.", date: "2026-03" },
  { name: "Mike R.", city: "Chandler", stars: 5, service: "AC Repair", text: "Our AC went out on a Saturday afternoon in July when it was 115 degrees. Called Bucksworth and they had a tech at our house within 3 hours. Turned out to be a bad capacitor. He had the part on his truck and had us up and running in under an hour. Fair price, great service. Will use them for everything going forward.", date: "2026-02" },
  { name: "Jennifer L.", city: "Phoenix", stars: 5, service: "Termite Treatment", text: "We discovered termite damage during a home inspection. Bucksworth came out the same day for a free inspection, explained everything clearly, and gave us a written quote on the spot. The Sentricon system they installed has been working perfectly. They come back every year for a re-inspection included in the warranty.", date: "2026-01" },
  { name: "David T.", city: "Mesa", stars: 5, service: "Weed Control", text: "Finally found a weed control company that actually works. Our rock yard was overrun with spurge and puncturevine no matter how many times I pulled them. Bucksworth's pre-emergent program has kept the yard clean for six months straight. Worth every penny.", date: "2025-12" },
  { name: "Amanda K.", city: "Scottsdale", stars: 5, service: "Plumbing", text: "Had a water heater that was on its last legs. The Bucksworth plumber came out, showed me exactly what was wrong, and gave me options for tank vs tankless. No pressure at all. Went with a tankless Rinnai and could not be happier. They handled the permit and everything.", date: "2025-11" },
  { name: "Carlos G.", city: "Surprise", stars: 5, service: "Pest Control", text: "Best pest control in the West Valley. We switched from a big national company and the difference is night and day. Bucksworth actually inspects and treats thoroughly instead of just spraying and leaving. Our scorpion problem is gone.", date: "2025-10" },
  { name: "Lisa W.", city: "Tempe", stars: 5, service: "AC Installation", text: "Bucksworth replaced our 20-year-old Trane with a new Daikin system. The install crew was professional, cleaned up everything, and the new system is incredibly efficient. Our summer electric bill dropped by almost $200 a month. Great experience from estimate to installation.", date: "2025-09" },
  { name: "Robert H.", city: "Peoria", stars: 5, service: "Rodent Exclusion", text: "Pack rats were destroying wiring in our garage and engine compartments. Bucksworth sealed every entry point, set traps, and the problem has been completely resolved. They even came back a month later to check traps and re-inspect at no charge. That is how you earn customers for life.", date: "2025-08" },
  { name: "Maria S.", city: "Goodyear", stars: 5, service: "Pest & Weed Bundle", text: "We have the pest and weed bundle and it is the best value in home services. One company handles everything, they come like clockwork every month, and our yard looks amazing. No scorpions, no weeds, no stress. Tell Jordan and Taylor they have built something special.", date: "2025-07" },
  { name: "Tom B.", city: "Queen Creek", stars: 4, service: "Pest Control", text: "Good service overall. The technician was knowledgeable and thorough. Only reason for 4 stars instead of 5 is the scheduling window was a bit wide. But the actual service quality is top notch. They got rid of our cricket problem that two other companies could not solve.", date: "2025-06" },
  { name: "Nicole F.", city: "Ahwatukee", stars: 5, service: "AC Maintenance", text: "Have been using Bucksworth for annual AC tune-ups for three years. They are consistent, thorough, and honest. Last visit the tech told me everything looked great and there was nothing additional needed. That kind of honesty is rare in this industry. Highly recommend.", date: "2025-05" },
  { name: "James P.", city: "Buckeye", stars: 5, service: "Termite Warranty", text: "Bought a new construction home with a Bucksworth pre-treat warranty. The registration process was simple and they set us up with a pest and termite bundle at a great rate. Peace of mind knowing our investment is protected. The 3-year price guarantee is a nice touch too.", date: "2025-04" },
];

export default function ReviewsPage() {
  const avgRating = (REVIEWS.reduce((sum, r) => sum + r.stars, 0) / REVIEWS.length).toFixed(1);

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="city-hero">
        <div className="city-hero-inner">
          <p className="city-hero-eyebrow">Customer Reviews</p>
          <h1>
            What Arizona Homeowners Say About{" "}
            <span className="orange">Bucksworth</span>
          </h1>
          <p className="city-hero-desc">
            4.8-star average across 2,000+ verified Google reviews. Read what your neighbors say about our pest control, HVAC, plumbing, and weed control services.
          </p>
          <div className="city-hero-badges">
            <span className="city-hero-badge">&#9733; {avgRating} Average Rating</span>
            <span className="city-hero-badge">&#10003; Google Guaranteed</span>
            <span className="city-hero-badge">2,000+ Reviews</span>
            <span className="city-hero-badge">33 Cities Served</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "var(--navy)", padding: "32px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px", textAlign: "center" }}>
          {[
            { value: "4.8", label: "Star Rating" },
            { value: "2,000+", label: "Total Reviews" },
            { value: "98%", label: "Would Recommend" },
            { value: "13+", label: "Years in Business" },
          ].map((stat) => (
            <div key={stat.label}>
              <p style={{ fontSize: "36px", fontWeight: 800, color: "var(--orange)", fontFamily: "'Oswald', sans-serif", margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews grid */}
      <section className="svc-cards-section">
        <div className="container">
          <h2 className="section-title">Featured Reviews from Arizona Homeowners</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px", marginTop: "24px" }}>
            {REVIEWS.map((review, i) => (
              <div key={i} style={{ background: "white", borderRadius: "12px", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", border: "1px solid var(--g100)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <div>
                    <p style={{ fontWeight: 700, color: "var(--navy)", margin: 0, fontSize: "15px" }}>{review.name}</p>
                    <p style={{ fontSize: "12px", color: "var(--g500)", margin: 0 }}>{review.city}, AZ &bull; {review.service}</p>
                  </div>
                  <span style={{ color: "#f59e0b", fontSize: "16px", letterSpacing: "2px" }}>
                    {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: "var(--g700)", lineHeight: "1.6", margin: 0 }}>
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="svc-hub-content">
        <div className="svc-hub-content-inner">
          <h2>Why Arizona Homeowners Trust Bucksworth</h2>
          <p>
            Since 2013, Bucksworth Home Services has earned the trust of thousands of Arizona families across 33 cities in the Phoenix and Tucson metro areas. Our 4.8-star Google rating is not an accident &mdash; it is the result of treating every home like it is our Gigi&apos;s and never cutting corners on quality, communication, or customer care.
          </p>
          <p>
            We are Google Guaranteed, meaning Google has independently verified our business licenses, insurance, and employee background checks. When you hire Bucksworth, you are hiring a company that Google trusts enough to back with their own guarantee. That level of verification gives our customers confidence that they are working with a legitimate, professional operation.
          </p>

          <h2>How We Earn 5-Star Reviews</h2>
          <p>
            Our review success comes down to a few simple principles that every Bucksworth team member follows:
          </p>
          <ul style={{ margin: "12px 0 20px 20px", lineHeight: "2" }}>
            <li><strong>Show up on time</strong> &mdash; We respect your schedule and communicate proactively if anything changes</li>
            <li><strong>Explain before we work</strong> &mdash; No mystery charges, no surprise bills. You know what we are doing and why before we start</li>
            <li><strong>Do the job right</strong> &mdash; Quality work the first time, every time. No shortcuts, no generic products</li>
            <li><strong>Follow up</strong> &mdash; We check in after service to make sure you are satisfied and address any concerns</li>
            <li><strong>Stand behind our work</strong> &mdash; If pests come back, we come back. Satisfaction guaranteed.</li>
          </ul>

          <h2>Review Us on Google</h2>
          <p>
            Already a Bucksworth customer? We would love to hear about your experience. Your honest feedback helps other Arizona homeowners find reliable home services and helps us continue improving. Leave us a review on Google &mdash; it takes less than a minute and means the world to our team.
          </p>

          <h2>Ready to Become Our Next 5-Star Review?</h2>
          <p>
            Call us today for a free inspection and experience the Bucksworth difference for yourself:
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
