import Link from "next/link";
import { SERVICES } from "@/lib/services";
import type { City } from "@/lib/cities";

interface OtherServicesProps {
  city: City;
  currentServiceSlug: string;
}

const SERVICE_ICONS: Record<string, string> = {
  "pest-and-termite": "\uD83D\uDC1B",
  "air-conditioning-and-heating": "\u2744\uFE0F",
  "plumbing-and-water-heaters": "\uD83D\uDEB0",
  "weed-and-lawn-care": "\uD83C\uDF3F",
};

export default function OtherServices({
  city,
  currentServiceSlug,
}: OtherServicesProps) {
  const availableServices =
    city.branch === "phoenix"
      ? SERVICES
      : SERVICES.filter(
          (s) =>
            s.slug === "pest-and-termite" || s.slug === "weed-and-lawn-care"
        );

  const otherServices = availableServices.filter(
    (s) => s.slug !== currentServiceSlug
  );

  if (otherServices.length === 0) return null;

  return (
    <section className="other-services" aria-label={`Other services available in ${city.name}`}>
      <div className="other-services-inner">
        <h2 className="other-services-heading">
          Other Services in {city.name}
        </h2>
        <div className="other-services-grid">
          {otherServices.map((svc) => (
            <Link
              key={svc.slug}
              href={`/${city.slug}/${svc.slug}`}
              className="other-service-card"
              aria-label={`${svc.name} in ${city.name}`}
            >
              <span className="other-service-icon" aria-hidden="true">
                {SERVICE_ICONS[svc.slug] || "\uD83D\uDD27"}
              </span>
              <span className="other-service-name">{svc.name}</span>
              <span className="other-service-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
