import type { City } from "@/lib/cities";
import { getPhoneForBranch } from "@/lib/cities";

interface CTASectionProps {
  city: City;
  variant?: "primary" | "secondary";
  headline?: string;
  subtext?: string;
}

export default function CTASection({
  city,
  variant = "primary",
  headline,
  subtext,
}: CTASectionProps) {
  const phone = getPhoneForBranch(city.branch);
  const phoneRaw = phone.replace(/[^0-9]/g, "");

  const h =
    headline || `Ready to Get Your Bucksworth in ${city.name}?`;
  const sub =
    subtext ||
    "Same-day service available. Free inspections. No gimmicks, just honest work.";

  return (
    <section className={`cta-block cta-block--${variant}`}>
      <div className="cta-block-inner">
        <h2 className="cta-heading">{h}</h2>
        <p className="cta-subtext">{sub}</p>
        <div className="cta-buttons">
          <a href={`tel:${phoneRaw}`} className="cta-btn cta-btn--phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
            Call {phone}
          </a>
          <a href="/#estimate-form" className="cta-btn cta-btn--estimate">
            Get Online Estimate &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
