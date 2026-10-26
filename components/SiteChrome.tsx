import Link from "next/link";
import { SITE, waLink } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-in">
        <Link href="/" className="brand" aria-label="KhadMunshi home">
          Khad<span>Munshi</span>
        </Link>
        <nav aria-label="Main">
          <Link href="/#features">Features</Link>
          <Link href="/#faq">Sawal-jawab</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/resources">Free sheets</Link>
          <Link href="/pilot">Pilot</Link>
          <Link className="btn btn-sm" href="/demo">
            Live demo
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-in">
        <div>
          <div className="brand">
            Khad<span>Munshi</span>
          </div>
          <p>{SITE.tagline}. Fertilizer aur pesticide dukaan ka khata, bill, stock aur supplier ka hisaab.</p>
          <p>
            WhatsApp: <a href={waLink()}>{SITE.whatsappDisplay}</a>
          </p>
        </div>
        <div>
          <h3>Blog</h3>
          <ul>
            <li><Link href="/blog/rabi-season-udhaar-plan-fertilizer-dealer">Rabi udhaar plan</Link></li>
            <li><Link href="/blog/pesticide-shop-expiry-batch-tracking">Expiry tracking</Link></li>
            <li><Link href="/blog/khata-register-excel-or-app-fertilizer-shop">Register, Excel ya app</Link></li>
            <li><Link href="/blog/recover-udhaar-from-farmers-5-step-routine">Udhaar recovery</Link></li>
          </ul>
        </div>
        <div>
          <h3>Seekhein</h3>
          <ul>
            <li><Link href="/blog">Saari posts</Link></li>
            <li><Link href="/resources">Free sheets</Link></li>
            <li><Link href="/pilot">Pilot shop program</Link></li>
            <li><Link href="/demo">Live demo</Link></li>
            <li><Link href="/about">Hamare baare mein</Link></li>
            <li><a href="/downloads/kisan-udhaar-tracker.csv">Free udhaar tracker</a></li>
            <li><a href="/downloads/expiry-tracker.csv">Free expiry list</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} KhadMunshi. Screens mein dikhaye gaye naam aur raqam demo data hain.</span>
        <span>
          Photos: <a href="https://www.pexels.com" rel="noopener">Pexels</a>
        </span>
      </div>
    </footer>
  );
}
