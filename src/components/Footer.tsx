import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://getyourbucksworth.com/wp-content/uploads/bucksworth2-e1759741638670.png"
            alt="Bucksworth Home Services"
            width={140}
            height={42}
          />
          <p style={{ marginTop: "12px", lineHeight: 1.6 }}>
            Family-owned pest control, HVAC, plumbing, and home services serving
            Phoenix and Tucson, Arizona since 2013.
          </p>
        </div>
        <div>
          <h4>Services</h4>
          <Link href="/pest-control">Pest &amp; Termite Control</Link>
          <Link href="/hvac">HVAC / Air Conditioning</Link>
          <Link href="/plumbing">Plumbing</Link>
          <Link href="/insulation">Insulation</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Top Locations</h4>
          <Link href="/phoenix-az">Phoenix</Link>
          <Link href="/scottsdale-az">Scottsdale</Link>
          <Link href="/mesa-az">Mesa</Link>
          <Link href="/gilbert-az">Gilbert</Link>
          <Link href="/tucson-az">Tucson</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2026 Bucksworth Home Services LLC. All rights reserved. AZ ROC
          #343924 | AG License #9613
        </p>
      </div>
    </footer>
  );
}
