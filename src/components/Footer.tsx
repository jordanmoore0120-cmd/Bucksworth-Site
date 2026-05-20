import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { SERVICES } from "@/lib/services";

export default function Footer() {
  const phxCities = CITIES.filter((c) => c.branch === "phoenix").sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const tucCities = CITIES.filter((c) => c.branch === "tucson").sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <footer className="site-footer" role="contentinfo">
      {/* Main footer grid */}
      <div className="container">
        <div className="footer-main">
          {/* Brand column */}
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bucksworth-mascot-clean.jpg"
              alt="Bucksworth Home Services"
              width={120}
              height={137}
              className="footer-logo"
              loading="lazy"
            />
            <p className="footer-brand-text">
              Family-owned pest control, AC &amp; heating, plumbing, and weed &amp; lawn care serving
              Phoenix and Tucson, Arizona since 2013. We treat every home like
              it&apos;s Gigi&apos;s.
            </p>
            <div className="footer-phones">
              <a href="tel:4804228388" className="footer-phone">
                Phoenix: (480) 422-8388
              </a>
              <a href="tel:5202849930" className="footer-phone">
                Tucson: (520) 284-9930
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            {SERVICES.map((svc) => (
              <div key={svc.slug} className="footer-svc-group">
                <Link href={`/${svc.slug}`} className="footer-svc-title">
                  {svc.name}
                </Link>
                {svc.subServices.slice(0, 4).map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/phoenix-az/${svc.slug}/${sub.slug}`}
                    className="footer-sub-link"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Company column */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <Link href="/about" className="footer-link">About Us</Link>
            <Link href="/reviews" className="footer-link">Reviews</Link>
            <Link href="/careers" className="footer-link">Careers</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
            <Link href="/job-site-work" className="footer-link">Job Site Work</Link>
            <Link href="/termite-warranty" className="footer-link">Termite Warranty</Link>
            <Link href="/sitemap-page" className="footer-link">Sitemap</Link>
            <a
              href="https://www.instagram.com/bucksworth.homeservices/"
              target="_blank"
              rel="noopener"
              className="footer-link"
            >
              Instagram
            </a>
          </div>

          {/* Locations column */}
          <div className="footer-col">
            <h4 className="footer-heading">Phoenix Metro</h4>
            <div className="footer-city-list">
              {phxCities.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="footer-city-link">
                  {c.name}
                </Link>
              ))}
            </div>
            <h4 className="footer-heading" style={{ marginTop: "20px" }}>
              Tucson Metro
            </h4>
            <div className="footer-city-list">
              {tucCities.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="footer-city-link">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer sitemap bar (for Google) */}
      <div className="footer-sitemap">
        <div className="container">
          <h4 className="footer-sitemap-title">Sitemap</h4>
          <div className="footer-sitemap-links">
            <Link href="/">Home</Link>
            {SERVICES.map((svc) => (
              <Link key={svc.slug} href={`/${svc.slug}`}>
                {svc.name}
              </Link>
            ))}
            {CITIES.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`}>
                {c.name}, AZ
              </Link>
            ))}
            <Link href="/about">About</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; 2026 Bucksworth Home Services LLC. All rights reserved. AZ
            ROC #343924 | AG License #9613
          </p>
        </div>
      </div>
    </footer>
  );
}
