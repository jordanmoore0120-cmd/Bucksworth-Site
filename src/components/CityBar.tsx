"use client";

import { useState } from "react";
import Link from "next/link";
import { CITIES, getPhoneForBranch } from "@/lib/cities";
import type { City } from "@/lib/cities";

interface CityBarProps {
  currentCity: City;
}

export default function CityBar({ currentCity }: CityBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const phone = getPhoneForBranch(currentCity.branch);
  const phoneRaw = phone.replace(/[^0-9]/g, "");

  const phxCities = CITIES.filter((c) => c.branch === "phoenix").sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const tucCities = CITIES.filter((c) => c.branch === "tucson").sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="city-bar">
      <div className="city-bar-inner">
        <button
          className="city-bar-selector"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7 }}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
          You are in: <strong>{currentCity.name}</strong>
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>

        <a href={`tel:${phoneRaw}`} className="city-bar-phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
          </svg>
          {phone}
        </a>
      </div>

      {isOpen && (
        <div className="city-bar-dropdown">
          <div className="city-bar-dropdown-grid">
            <div className="city-bar-branch">
              <h4>Phoenix Metro (24 Cities)</h4>
              {phxCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className={`city-bar-link ${c.slug === currentCity.slug ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <div className="city-bar-branch">
              <h4>Tucson Metro (9 Cities)</h4>
              {tucCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className={`city-bar-link ${c.slug === currentCity.slug ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
