"use client";

import { useEffect } from "react";

/**
 * Invisible client component embedded in city/service/subservice pages.
 * Syncs the current page's city to localStorage so "Book Now" links
 * (which go to /request-service without params) always reflect
 * the city the user is currently viewing.
 */
export default function CitySync({
  branch,
  city,
  slug,
}: {
  branch: string;
  city: string;
  slug: string;
}) {
  useEffect(() => {
    try {
      localStorage.setItem("bsw_branch", branch);
      localStorage.setItem("bsw_city", city);
      localStorage.setItem("bsw_city_slug", slug);
      window.dispatchEvent(new Event("bsw-city-update"));
    } catch (_) {
      /* private browsing */
    }
  }, [branch, city, slug]);

  return null;
}
