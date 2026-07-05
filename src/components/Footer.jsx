import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-32 border-t" style={{ borderColor: "var(--line)", background: "var(--ink)", color: "var(--paper)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-xl mb-3">
            Andreas <span style={{ color: "var(--brass)" }}>Distribution</span> SRL
          </div>
          <p className="text-sm max-w-sm opacity-70 leading-relaxed">
            Distribuitor oficial al brandurilor de cosmetice La Sultane de Saba și Age Stop.
            Aducem lumi diferite de frumusețe către retaileri, spa-uri și saloane.
          </p>
        </div>

        <div>
          <div className="eyebrow opacity-50 mb-4">Branduri</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/brands/la-sultane-de-saba" className="hover:opacity-70">La Sultane de Saba</Link></li>
            <li><Link to="/brands/age-stop" className="hover:opacity-70">Age Stop</Link></li>
            <li><Link to="/catalog" className="hover:opacity-70">Catalog complet</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow opacity-50 mb-4">Companie</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:opacity-70">Despre noi</Link></li>
            <li><Link to="/contact" className="hover:opacity-70">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 border-t flex flex-col sm:flex-row justify-between gap-2 text-xs opacity-50" style={{ borderColor: "rgba(237,230,216,0.15)" }}>
        <span>© {new Date().getFullYear()} Andreas Distribution SRL. Toate drepturile rezervate.</span>
        <span>București, România</span>
      </div>
    </footer>
  );
}
