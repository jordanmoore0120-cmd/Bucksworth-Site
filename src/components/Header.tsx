"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileBranch, setMobileBranch] = useState<"phoenix" | "tucson">("phoenix");
  const [cityPickerOpen, setCityPickerOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  const phxCities = CITIES.filter((c) => c.branch === "phoenix").sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const tucCities = CITIES.filter((c) => c.branch === "tucson").sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const branchPhone = mobileBranch === "phoenix" ? "(480) 422-8388" : "(520) 284-9930";
  const branchPhoneRaw = mobileBranch === "phoenix" ? "4804228388" : "5202849930";
  const branchCitySlug = mobileBranch === "phoenix" ? "phoenix-az" : "tucson-az";
  const branchLabel = mobileBranch === "phoenix" ? "Phoenix" : "Tucson";
  const branchCities = mobileBranch === "phoenix" ? phxCities : tucCities;

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
    return () => { document.body.style.overflow = ""; };
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
            <a href="tel:4804228388" className="util-phone" aria-label="Call Bucksworth at (480) 422-8388">
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
          <nav className="desk-nav" role="navigation" aria-label="Main Navigation">
            <div className="nav-dd" ref={megaRef}>
              <button
                className="nav-dd-btn"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-label="Home Services menu"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Home Services{" "}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="nav-mega">
                  <div className="mega-services-grid">
                    {SERVICES.map((svc) => (
                      <div key={svc.slug} className="mega-svc-col">
                        <Link
                          href={`/phoenix-az/${svc.slug}`}
                          className="mega-svc-title"
                          style={{ color: svc.color }}
                          onClick={() => setServicesOpen(false)}
                        >
                          {svc.name}
                        </Link>
                        {svc.subServices.slice(0, 6).map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/phoenix-az/${svc.slug}/${sub.slug}`}
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
                    <span className="mega-cities-label">Choose your city:</span>
                    <div className="mega-cities-chips">
                      {["Phoenix", "Scottsdale", "Mesa", "Gilbert", "Chandler", "Tempe", "Surprise", "Tucson"].map((name) => {
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
                      <Link href="/#find-city" className="mega-city-chip mega-city-chip--all" onClick={() => setServicesOpen(false)}>
                        All 33 Cities &darr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/job-site-work" className="nav-link">Job Site Work</Link>
            <Link href="/reviews" className="nav-link">Reviews</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/blog" className="nav-link">Blog</Link>

            <a href="tel:4804228388" className="nav-phone-btn" aria-label="Call Bucksworth at (480) 422-8388">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
              (480) 422-8388
            </a>
            <a href="/request-service" className="nav-cta-btn" aria-label="Schedule a service">
              Request Service
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="mobile-ctrls">
            <a href="tel:4804228388" className="mobile-phone-ic" aria-label="Call us">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
            </a>
            <button
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* ===== ABC-STYLE MOBILE DRAWER ===== */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
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
              <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                &#10005;
              </button>
            </div>

            {/* Branch selector bar — ABC "You are in Austin" style */}
            <button
              className="mobile-branch-bar"
              onClick={() => setCityPickerOpen(!cityPickerOpen)}
              aria-expanded={cityPickerOpen}
            >
              <span>You are in <strong>{branchLabel}</strong></span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ transform: cityPickerOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>

            {/* City picker dropdown */}
            {cityPickerOpen && (
              <div className="mobile-city-picker">
                <p className="mobile-city-picker-label">Choose a Location Near You:</p>
                <button
                  className={`mobile-city-option ${mobileBranch === "phoenix" ? "mobile-city-option--active" : ""}`}
                  onClick={() => { setMobileBranch("phoenix"); setCityPickerOpen(false); }}
                >
                  Phoenix Metro
                </button>
                <button
                  className={`mobile-city-option ${mobileBranch === "tucson" ? "mobile-city-option--active" : ""}`}
                  onClick={() => { setMobileBranch("tucson"); setCityPickerOpen(false); }}
                >
                  Tucson Metro
                </button>
                <div className="mobile-city-picker-divider" />
                <p className="mobile-city-picker-label" style={{ marginTop: 8 }}>
                  {mobileBranch === "phoenix" ? "Phoenix" : "Tucson"} Cities:
                </p>
                {branchCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="mobile-city-option"
                    onClick={() => { setCityPickerOpen(false); setMobileOpen(false); }}
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Clean nav links */}
            <div className="mobile-drawer-body">
              {/* Home Services — expandable */}
              <button
                className="mobile-nav-item mobile-nav-item--expandable"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
              >
                <span>HOME SERVICES</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="mobile-services-list">
                  {SERVICES.map((svc) => (
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

              <Link href="/job-site-work" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>
                JOB SITE WORK
              </Link>
              <Link href="/reviews" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>
                REVIEWS
              </Link>
              <Link href="/about" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>
                ABOUT
              </Link>
              <Link href="/blog" className="mobile-nav-item" onClick={() => setMobileOpen(false)}>
                BLOG
              </Link>

              {/* Social & review links — branch-aware */}
              <div className="mobile-social-row">
                <a href={mobileBranch === "phoenix"
                  ? "https://www.google.com/maps/place/Bucksworth+Home+Services/@33.4484,-112.074"
                  : "https://www.google.com/maps/place/Bucksworth+Home+Services+Tucson"
                } target="_blank" rel="noopener" className="mobile-social-link" aria-label="Google Business Profile">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                </a>
                <a href="https://www.instagram.com/bucksworth.homeservices/" target="_blank" rel="noopener" className="mobile-social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.facebook.com/bucksworthservices/" target="_blank" rel="noopener" className="mobile-social-link" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.youtube.com/@bucksworthhomeservices" target="_blank" rel="noopener" className="mobile-social-link" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>

              {/* Phone number — changes with branch */}
              <a href={`tel:${branchPhoneRaw}`} className="mobile-nav-phone">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
