"use client";

import { useState } from "react";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const phxCities = CITIES.filter((c) => c.branch === "phoenix").sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const tucCities = CITIES.filter((c) => c.branch === "tucson").sort((a, b) =>
    a.name.localeCompare(b.name)
  );

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
            <a href="tel:4804228388" className="util-phone">
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
              src="https://getyourbucksworth.com/wp-content/uploads/bucksworth2-e1759741638670.png"
              alt="Bucksworth Home Services"
              width={160}
              height={48}
              className="logo-img"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="desk-nav" role="navigation" aria-label="Main">
            {/* Services dropdown */}
            <div className="nav-dd">
              <button
                className="nav-dd-btn"
                aria-expanded={servicesOpen}
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setLocationsOpen(false);
                }}
              >
                Services{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
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
                          href={`/${svc.slug}`}
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
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div className="nav-dd">
              <button
                className="nav-dd-btn"
                aria-expanded={locationsOpen}
                onClick={() => {
                  setLocationsOpen(!locationsOpen);
                  setServicesOpen(false);
                }}
              >
                Locations{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {locationsOpen && (
                <div className="nav-mega nav-mega--locs">
                  <div className="mega-loc-grid">
                    <div>
                      <h4 className="mega-branch-title">Phoenix Metro (24 Cities)</h4>
                      <div className="mega-city-grid">
                        {phxCities.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/${c.slug}`}
                            className="mega-city-link"
                            onClick={() => setLocationsOpen(false)}
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="mega-branch-title">Tucson Metro (9 Cities)</h4>
                      <div className="mega-city-grid">
                        {tucCities.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/${c.slug}`}
                            className="mega-city-link"
                            onClick={() => setLocationsOpen(false)}
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/reviews" className="nav-link" onClick={() => { setServicesOpen(false); setLocationsOpen(false); }}>
              Reviews
            </Link>
            <Link href="/about" className="nav-link" onClick={() => { setServicesOpen(false); setLocationsOpen(false); }}>
              About
            </Link>
            <a
              href="tel:4804228388"
              className="nav-phone-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.66.59 1 1 0 011 1v3.59a1 1 0 01-1 1A17 17 0 013 4.92a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.59 3.66 1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
              (480) 422-8388
            </a>
            <a href="/#estimate-form" className="nav-cta-btn">
              Free Estimate
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="mobile-ctrls">
            <a href="tel:4804228388" className="mobile-phone-ic" aria-label="Call us">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
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

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://getyourbucksworth.com/wp-content/uploads/bucksworth2-e1759741638670.png"
                alt="Bucksworth"
                width={130}
                height={39}
              />
              <button
                className="mobile-close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                &#10005;
              </button>
            </div>
            <div className="mobile-drawer-body">
              <a href="tel:4804228388" className="mobile-phone-link">
                &#128222; (480) 422-8388
              </a>
              <a href="tel:5202849930" className="mobile-phone-link">
                &#128222; (520) 284-9930
              </a>

              {SERVICES.map((svc) => (
                <div key={svc.slug} className="mobile-section">
                  <Link
                    href={`/${svc.slug}`}
                    className="mobile-section-title"
                    style={{ color: svc.color }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {svc.name}
                  </Link>
                </div>
              ))}

              <div className="mobile-section">
                <span className="mobile-section-label">Top Locations</span>
                <div className="mobile-city-list">
                  {["phoenix-az", "scottsdale-az", "mesa-az", "chandler-az", "gilbert-az", "tempe-az", "tucson-az"].map(
                    (slug) => {
                      const city = CITIES.find((c) => c.slug === slug);
                      return city ? (
                        <Link
                          key={slug}
                          href={`/${slug}`}
                          className="mobile-city-chip"
                          onClick={() => setMobileOpen(false)}
                        >
                          {city.name}
                        </Link>
                      ) : null;
                    }
                  )}
                </div>
              </div>

              <Link href="/reviews" className="mobile-link" onClick={() => setMobileOpen(false)}>
                Reviews
              </Link>
              <Link href="/about" className="mobile-link" onClick={() => setMobileOpen(false)}>
                About
              </Link>
              <a
                href="/#estimate-form"
                className="mobile-cta"
                onClick={() => setMobileOpen(false)}
              >
                Get Free Estimate &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
