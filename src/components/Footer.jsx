import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-32 border-t" style={{ borderColor: "var(--line)", background: "var(--ink)", color: "var(--paper)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-xl mb-3">
            Aurel <span style={{ color: "var(--brass)" }}>Beauty</span> Distribution
          </div>
          <p className="text-sm max-w-sm opacity-70 leading-relaxed">
            Official distributor of La Sultane de Saba and Age Stop cosmetics.
            Bringing two distinct beauty worlds to retailers, spas and salons.
          </p>
        </div>

        <div>
          <div className="eyebrow opacity-50 mb-4">Brands</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/brands/la-sultane-de-saba" className="hover:opacity-70">La Sultane de Saba</Link></li>
            <li><Link to="/brands/age-stop" className="hover:opacity-70">Age Stop</Link></li>
            <li><Link to="/catalog" className="hover:opacity-70">Full Catalog</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow opacity-50 mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:opacity-70">About Us</Link></li>
            <li><Link to="/contact" className="hover:opacity-70">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 border-t flex flex-col sm:flex-row justify-between gap-2 text-xs opacity-50" style={{ borderColor: "rgba(237,230,216,0.15)" }}>
        <span>© {new Date().getFullYear()} Aurel Beauty Distribution. All rights reserved.</span>
        <span>Chișinău, Moldova</span>
      </div>
    </footer>
  );
}
