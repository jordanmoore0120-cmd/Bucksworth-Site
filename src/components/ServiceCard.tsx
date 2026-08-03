"use client";

import { useState } from "react";
import Link from "next/link";
import type { ServiceVertical } from "@/lib/services";
import type { City } from "@/lib/cities";

interface ServiceCardProps {
  service: ServiceVertical;
  city: City;
  /** whether this card should be open by default */
  defaultOpen?: boolean;
}

const SERVICE_EMOJIS: Record<string, string> = {
  "pest-and-termite": "\uD83D\uDC1B",
  "air-conditioning-and-heating": "\u2744\uFE0F",
  "plumbing-and-water-heaters": "\uD83D\uDD27",
  "weed-and-lawn-care": "\uD83C\uDF3F",
};

export default function ServiceCard({
  service,
  city,
  defaultOpen = false,
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const emoji = SERVICE_EMOJIS[service.slug] || "";

  return (
    <div className={`svc-card ${isOpen ? "svc-card--open" : ""}`}>
      <button
        className="svc-card-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{ borderLeftColor: service.color }}
      >
        <div className="svc-card-title-wrap">
          <span className="svc-card-emoji">{emoji}</span>
          <div>
            <h3 className="svc-card-title">{service.name}</h3>
            <p className="svc-card-tagline">{service.tagline}</p>
          </div>
        </div>
        <span className="svc-card-toggle">
          {isOpen ? "Hide Services" : "Show Services"}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s",
              marginLeft: "6px",
            }}
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </span>
      </button>

      {/* Always rendered in HTML so crawlers see every city×service link.
          Collapsed state is visual only (SEO fix: Aug 2026). */}
      {(
        <div
          className="svc-card-body"
          style={{ display: isOpen ? undefined : "none" }}
          aria-hidden={!isOpen}
        >
          <div className="svc-card-grid">
            {service.subServices.map((sub) => (
              <Link
                key={sub.slug}
                href={`/${city.slug}/${service.slug}/${sub.slug}`}
                className="svc-sub-link"
              >
                <span className="svc-sub-name">{sub.name}</span>
                <span className="svc-sub-desc">{sub.shortDesc}</span>
                <span className="svc-sub-arrow" aria-hidden>
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
          <div className="svc-card-cta">
            <Link
              href={`/${city.slug}/${service.slug}`}
              className="btn-service-hub"
              style={{ backgroundColor: service.color }}
            >
              View All {service.name} Services in {city.name} &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
