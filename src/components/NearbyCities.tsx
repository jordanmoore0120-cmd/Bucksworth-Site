import Link from "next/link";
import { CITIES, getPhoneForBranch } from "@/lib/cities";
import type { City } from "@/lib/cities";

interface NearbyCitiesProps {
  currentCity: City;
  title?: string;
}

export default function NearbyCities({
  currentCity,
  title = "Nearby Service Areas",
}: NearbyCitiesProps) {
  const nearby = CITIES.filter(
    (c) => c.branch === currentCity.branch && c.slug !== currentCity.slug
  ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="nearby-section">
      <h2 className="nearby-heading">{title}</h2>
      <div className="nearby-grid">
        {nearby.map((c) => (
          <Link key={c.slug} href={`/${c.slug}`} className="nearby-link">
            {c.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
