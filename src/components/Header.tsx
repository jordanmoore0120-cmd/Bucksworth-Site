import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://getyourbucksworth.com/wp-content/uploads/bucksworth2-e1759741638670.png"
            alt="Bucksworth Home Services"
            width={160}
            height={48}
          />
        </Link>
        <nav className="nav" role="navigation" aria-label="Main">
          <Link href="/pest-control">Pest Control</Link>
          <Link href="/hvac">HVAC</Link>
          <Link href="/plumbing">Plumbing</Link>
          <Link href="/insulation">Insulation</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
          <a href="tel:+14804228388" className="nav-phone">
            (480) 422-8388
          </a>
        </nav>
      </div>
    </header>
  );
}
