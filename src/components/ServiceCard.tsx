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

const SERVICE_ICONS: Record<string, string> = {
  "pest-control": "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z",
  hvac: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h16v12H4zm4.5-7.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S6.17 9 7 9s1.5.67 1.5 1.5zm5 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm5 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S16.17 9 17 9s1.5.67 1.5 1.5z",
  plumbing:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  insulation:
    "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
};

const SERVICE_EMOJIS: Record<string, string> = {
  "pest-control": "\uD83D\uDC1B",
  hvac: "\u2744\uFE0F",
  plumbing: "\uD83D\uDD27",
  insulation: "\uD83C\uDFE0",
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

      {isOpen && (
        <div className="svc-card-body">
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
