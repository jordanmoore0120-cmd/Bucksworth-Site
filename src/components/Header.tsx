"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";

/* ── Approximate city-center coordinates for geo-detection ── */
const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  "ahwatukee-az": { lat: 33.3384, lng: -111.9838 },
  "anthem-az": { lat: 33.8644, lng: -112.1468 },
  "apache-junction-az": { lat: 33.4151, lng: -111.5496 },
  "buckeye-az": { lat: 33.3703, lng: -112.5838 },
  "casa-grande-az": { lat: 32.8795, lng: -111.7574 },
  "catalina-foothills-az": { lat: 32.2988, lng: -110.9186 },
  "chandler-az": { lat: 33.3062, lng: -111.8413 },
  "coolidge-az": { lat: 32.9776, lng: -111.5174 },
  "florence-az": { lat: 33.0314, lng: -111.3873 },
  "fountain-hills-az": { lat: 33.6117, lng: -111.7174 },
  "gilbert-az": { lat: 33.3528, lng: -111.7890 },
  "gold-canyon-az": { lat: 33.3737, lng: -111.4421 },
  "goodyear-az": { lat: 33.4353, lng: -112.3577 },
  "green-valley-az": { lat: 31.8543, lng: -111.0002 },
  "laveen-az": { lat: 33.3620, lng: -112.1674 },
  "litchfield-park-az": { lat: 33.4934, lng: -112.3577 },
  "marana-az": { lat: 32.4366, lng: -111.2253 },
  "maricopa-az": { lat: 33.0581, lng: -112.0476 },
  "mesa-az": { lat: 33.4152, lng: -111.8315 },
  "oro-valley-az": { lat: 32.3909, lng: -110.9665 },
  "paradise-valley-az": { lat: 33.5310, lng: -111.9426 },
  "peoria-az": { lat: 33.5806, lng: -112.2374 },
  "phoenix-az": { lat: 33.4484, lng: -112.0740 },
  "queen-creek-az": { lat: 33.2487, lng: -111.6343 },
  "red-rock-az": { lat: 32.5975, lng: -111.2541 },
  "sahuarita-az": { lat: 31.9576, lng: -110.9554 },
  "san-tan-valley-az": { lat: 33.2007, lng: -111.5584 },
  "scottsdale-az": { lat: 33.4942, lng: -111.9261 },
  "surprise-az": { lat: 33.6292, lng: -112.3680 },
  "tempe-az": { lat: 33.4255, lng: -111.9400 },
  "tucson-az": { lat: 32.2226, lng: -110.9747 },
  "vail-az": { lat: 32.0478, lng: -110.7104 },
  "valencia-west-az": { lat: 32.1344, lng: -111.1113 },
};

/* Tucson-only service slugs */
const TUCSON_SERVICES = new Set(["pest-and-termite", "weed-and-lawn-care"]);

function haversine(lat1: number, lng1: number, lat2: number, lng2: number) {
  const toRad = (n: number) => (n * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 3959;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileBranch, setMobileBranch] = useState<"phoenix" | "tucson">("phoenix");
  const [detectedCity, setDetectedCity] = useState<string | null>(null);
  const [detectedCitySlug, setDetectedCitySlug] = useState<string | null>(null);
  const [cityPickerOpen, setCityPickerOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  const phxCities = CITIES.filter((c) => c.branch === "phoenix").sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const tucCities = CITIES.filter((c) => c.branch === "tucson").sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const branchPhone =
    mobileBranch === "phoenix" ? "(480) 422-8388" : "(520) 284-9930";
  const branchPhoneRaw =
    mobileBranch === "phoenix" ? "4804228388" : "5202849930";
  /* Use the detected city slug for nav links; fall back to branch default */
  const branchCitySlug =
    detectedCitySlug ?? (mobileBranch === "phoenix" ? "phoenix-az" : "tucson-az");
  const branchCities = mobileBranch === "phoenix" ? phxCities : tucCities;

  /* The label shown in the branch bar — shows detected city name if available */
  const branchLabel = detectedCity ?? (mobileBranch === "phoenix" ? "Phoenix" : "Tucson");

  /* Filter services based on branch — Tucson only has pest + weed */
  const branchServices =
    mobileBranch === "tucson"
      ? SERVICES.filter((s) => TUCSON_SERVICES.has(s.slug))
      : SERVICES;

  /* ── Hydrate from localStorage first (instant), then upgrade with live geo ── */
  useEffect(() => {
    try {
      const savedBranch = localStorage.getItem("bsw_branch") as "phoenix" | "tucson" | null;
      const savedCity = localStorage.getItem("bsw_city");
      const savedSlug = localStorage.getItem("bsw_city_slug");
      if (savedBranch && savedCity && savedSlug) {
        setMobileBranch(savedBranch);
        setDetectedCity(savedCity);
        setDetectedCitySlug(savedSlug);
      }
    } catch (_) { /* private browsing */ }

    /* Listen for localStorage changes from other components (e.g. homepage zip lookup) */
    const onStorage = () => {
      try {
        const b = localStorage.getItem("bsw_branch") as "phoenix" | "tucson" | null;
        const c = localStorage.getItem("bsw_city");
        const sl = localStorage.getItem("bsw_city_slug");
        if (b && c && sl) {
          setMobileBranch(b);
          setDetectedCity(c);
          setDetectedCitySlug(sl);
        }
      } catch (_) {}
    };
    window.addEventListener("storage", onStorage);
    /* Also listen for a custom event (same-tab localStorage updates don't fire "storage") */
    window.addEventListener("bsw-city-update", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("bsw-city-update", onStorage);
    };
  }, []);

  /* ── Auto-detect nearest city on mount — ONLY if no city saved yet ── */
  useEffect(() => {
    /* If user already picked a city (via zip, city picker, or previous GPS),
       respect that choice. GPS only runs for first-time visitors. */
    try {
      if (localStorage.getItem("bsw_city_slug")) return;
    } catch (_) { /* private browsing */ }

    if (!("geolocation" in navigator)) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        let bestSlug = "phoenix-az";
        let bestDist = Infinity;
        for (const [slug, coords] of Object.entries(CITY_COORDS)) {
          const d = haversine(latitude, longitude, coords.lat, coords.lng);
          if (d < bestDist) {
            bestDist = d;
            bestSlug = slug;
          }
        }
        const city = CITIES.find((c) => c.slug === bestSlug);
        if (city) {
          setMobileBranch(city.branch);
          setDetectedCity(city.name);
          setDetectedCitySlug(city.slug);
          /* Persist to localStorage so other pages can read it */
          try {
            localStorage.setItem("bsw_branch", city.branch);
            localStorage.setItem("bsw_city", city.name);
            localStorage.setItem("bsw_city_slug", city.slug);
          } catch (_) { /* private browsing */ }
        }
      },
      () => {
        /* Geo denied — keep default */
      },
      { timeout: 8000 }
    );
  }, []);

  /* Close mega menu on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [servicesOpen]);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top utility bar */}
      <div className="util-bar">
        <div className="container">
          <span className="util-badge">&#10003; Google Guaranteed</span>
          <span className="util-text">
            Serving 33 Cities Across Phoenix &amp; Tucson
          </span>
          <div className="util-right">
            <span className="util-lic">AZ ROC #343924</span>
            <a
              href="tel:4804228388"
              className="util-phone"
              aria-label="Call Bucksworth at (480) 422-8388"
            >
              (480) 422-8388
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="site-hdr">
        <div className="container site-hdr-inner">
          <Link href="/" className="logo-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bucksworth-mascot-clean.jpg"
              alt="Bucksworth Home Services"
              width={200}
              height={228}
              className="logo-img"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="desk-nav"
            role="navigation"
            aria-label="Main Navigation"
          >
            <div className="nav-dd" ref={megaRef}>
              <button
                className="nav-dd-btn"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Home Services menu"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Home Services{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="nav-mega">
                  <div className="mega-services-grid">
                    {SERVICES.map((svc) => (
                      <div key={svc.slug} className="mega-svc-col">
                        <Link
                          href={`/${branchCitySlug}/${svc.slug}`}
                          className="mega-svc-title"
                          style={{ color: svc.color }}
                          onClick={() => setServicesOpen(false)}
                        >
                          {svc.name}
                        </Link>
                        {svc.subServices.slice(0, 6).map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/${branchCitySlug}/${svc.slug}/${sub.slug}`}
                            className="mega-sub-link"
                            onClick={() => setServicesOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                        {svc.subServices.length > 6 && (
                          <Link
                            href={`/${svc.slug}`}
                            className="mega-sub-more"
                            onClick={() => setServicesOpen(false)}
                          >
                            + {svc.subServices.length - 6} more &rarr;
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mega-cities-bar">
                    <span className="mega-cities-label">
                      Choose your city:
                    </span>
                    <div className="mega-cities-chips">
                      {[
                        "Phoenix",
                        "Scottsdale",
                        "Mesa",
                        "Gilbert",
                        "Chandler",
                        "Tempe",
                        "Surprise",
                        "Tucson",
                      ].map((name) => {
                        const city = CITIES.find((c) => c.name === name);
                        if (!city) return null;
                        return (
                          <Link
                            key={city.slug}
                            href={`/${city.slug}`}
                            className="mega-city-chip"
                            onClick={() => setServicesOpen(false)}
                          >
                            {city.name}
                          </Link>
                        );
                      })}
                      <Link
                        href="/#find-city"
                        className="mega-city-chip mega-city-chip--all"
                        onClick={() => setServicesOpen(false)}
                      >
                        All 33 Cities &darr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/job-site-work" className="nav-link">
              Job Site Work
            </Link>
            <Link href="/reviews" className="nav-link">
              Reviews
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>

            <a
              href="tel:4804228388"
              className="nav-phone-btn"
              aria-label="Call Bucksworth at (480) 422-8388"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
              (480) 422-8388
            </a>
            <a
              href="https://bucksworth.pestportals.com/landing/index"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-pay-btn"
              aria-label="Pay your bill"
            >
              Pay Bill
            </a>
            <a
              href="/request-service"
              className="nav-cta-btn"
              aria-label="Schedule a service"
            >
              Request Service
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="mobile-ctrls">
            <a
              href={`tel:${branchPhoneRaw}`}
              className="mobile-phone-ic"
              aria-label="Call us"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
            </a>
            <button
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ===== STICKY MOBILE ACTION BAR (4 buttons) ===== */}
      {!mobileOpen && (
        <div className="sticky-action-bar">
          <a href={`tel:${branchPhoneRaw}`} className="sticky-action-btn sticky-action-call" aria-label="Call now">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
            <span>Call</span>
          </a>
          <button
            className="sticky-action-btn sticky-action-quote"
            onClick={() => {
              /* Open the Demand IQ journey via shadow-DOM button */
              const host = document.getElementById("demand-iq-journey");
              const shadow = host?.shadowRoot;
              const btn = shadow?.querySelector<HTMLButtonElement>(
                "button[id*='stickybanner'], button.MuiButton-root"
              );
              if (btn) { btn.click(); return; }
              /* Fallback: navigate to request-service */
              window.location.href = "/request-service";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13 10h-3V7H8v3H5v2h3v3h2v-3h3v-2zm6-4h-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v16l4-4h10a2 2 0 002-2v-1h2a2 2 0 002-2V8a2 2 0 00-2-2zm-4 8H6.83L5 15.17V4h10v10zm4-4h-2V8h-8V6h10v4z"/>
            </svg>
            <span>Quote</span>
          </button>
          <Link href="/request-service" className="sticky-action-btn sticky-action-book">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"/>
            </svg>
            <span>Book</span>
          </Link>
          <a href="https://bucksworth.pestportals.com/landing/index" target="_blank" rel="noopener noreferrer" className="sticky-action-btn sticky-action-pay" aria-label="Pay your bill">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2zm-6 7h4v2h-4v-2z"/>
            </svg>
            <span>Pay</span>
          </a>
        </div>
      )}

      {/* ===== ABC-STYLE MOBILE DRAWER ===== */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="mobile-drawer-top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bucksworth-mascot-clean.jpg"
                alt="Bucksworth Home Services"
                width={150}
                height={171}
                loading="lazy"
              />
              <button
                className="mobile-close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                &#10005;
              </button>
            </div>

            {/* Branch selector bar — shows detected city */}
            <button
              className="mobile-branch-bar"
              onClick={() => setCityPickerOpen(!cityPickerOpen)}
              aria-expanded={cityPickerOpen}
            >
              <span>
                You are in <strong>{branchLabel}</strong>
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{
                  transform: cityPickerOpen ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>

            {/* City picker dropdown — flat list, no branch toggle */}
            {cityPickerOpen && (
              <div className="mobile-city-picker" style={{ maxHeight: "50vh", overflowY: "auto" }}>
                <p className="mobile-city-picker-label">
                  Choose Your City:
                </p>
                {[...phxCities, ...tucCities].sort((a, b) => a.name.localeCompare(b.name)).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className={`mobile-city-option${detectedCitySlug === city.slug ? " mobile-city-option--active" : ""}`}
                    onClick={() => {
                      setMobileBranch(city.branch);
                      setDetectedCity(city.name);
                      setDetectedCitySlug(city.slug);
                      try {
                        localStorage.setItem("bsw_branch", city.branch);
                        localStorage.setItem("bsw_city", city.name);
                        localStorage.setItem("bsw_city_slug", city.slug);
                        window.dispatchEvent(new Event("bsw-city-update"));
                      } catch (_) {}
                      setCityPickerOpen(false);
                      setMobileOpen(false);
                    }}
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Clean nav links */}
            <div className="mobile-drawer-body">
              {/* Home Services — expandable, FILTERED by branch */}
              <button
                className="mobile-nav-item mobile-nav-item--expandable"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
              >
                <span>HOME SERVICES</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{
                    transform: mobileServicesOpen
                      ? "rotate(180deg)"
                      : "none",
                    transition: "transform 0.2s",
                  }}
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="mobile-services-list">
                  {branchServices.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/${branchCitySlug}/${svc.slug}`}
                      className="mobile-service-link"
                      style={{ color: svc.color }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {svc.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/job-site-work"
                className="mobile-nav-item"
                onClick={() => setMobileOpen(false)}
              >
                JOB SITE WORK
              </Link>
              <Link
                href="/reviews"
                className="mobile-nav-item"
                onClick={() => setMobileOpen(false)}
              >
                REVIEWS
              </Link>
              <Link
                href="/about"
                className="mobile-nav-item"
                onClick={() => setMobileOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/blog"
                className="mobile-nav-item"
                onClick={() => setMobileOpen(false)}
              >
                BLOG
              </Link>

              {/* Social & review links — branch-aware */}
              <div className="mobile-social-row">
                <a
                  href={
                    mobileBranch === "phoenix"
                      ? "https://www.google.com/maps/place/Bucksworth+Home+Services/@33.4484,-112.074"
                      : "https://www.google.com/maps/place/Bucksworth+Home+Services+Tucson"
                  }
                  target="_blank"
                  rel="noopener"
                  className="mobile-social-link"
                  aria-label="Google Business Profile"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/bucksworth.homeservices/"
                  target="_blank"
                  rel="noopener"
                  className="mobile-social-link"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a
                  href="https://www.facebook.com/bucksworthservices/"
                  target="_blank"
                  rel="noopener"
                  className="mobile-social-link"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://www.youtube.com/@bucksworthhomeservices"
                  target="_blank"
                  rel="noopener"
                  className="mobile-social-link"
                  aria-label="YouTube"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>

              {/* Phone number — changes with branch */}
              <a
                href={`tel:${branchPhoneRaw}`}
                className="mobile-nav-phone"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
                </svg>
                {branchPhone}
              </a>

              {/* CTA */}
              <a
                href="/request-service"
                className="mobile-cta"
                onClick={() => setMobileOpen(false)}
              >
                Request Service &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
