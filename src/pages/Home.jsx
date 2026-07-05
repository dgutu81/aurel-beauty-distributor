import { Link } from "react-router-dom";
import { BRANDS, PRODUCTS } from "../data/catalog";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featured = [PRODUCTS[1], PRODUCTS[3], PRODUCTS[8], PRODUCTS[10]];

  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
        <span className="eyebrow" style={{ color: "var(--brass-dark)" }}>Distribuitor oficial</span>
        <h1 className="font-display text-4xl md:text-6xl mt-5 mb-6 leading-tight">
          Branduri de cosmetice distincte,<br className="hidden md:block" /> aduse aproape de tine
        </h1>
        <p className="opacity-70 text-lg max-w-2xl mx-auto leading-relaxed">
          Andreas Distribution SRL este distribuitorul oficial al brandurilor La Sultane de Saba
          și Age Stop pentru retaileri, spa-uri și saloane din România.
        </p>
      </section>

      {/* BRAND CARDS — layout dinamic: se adaptează automat la câte branduri sunt în src/data/catalog.js,
          nu mai e un grid fix de 2 coloane, ca să poți adăuga branduri noi fără să strici designul */}
      <section className="px-6 lg:px-10 pb-24">
        <div
          className="mx-auto max-w-7xl grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {BRANDS.map((b) => (
            <Link
              key={b.slug}
              to={`/brands/${b.slug}`}
              className="group relative flex flex-col justify-end min-h-[360px] p-8 md:p-10 rounded-sm overflow-hidden text-white"
              style={{ background: `linear-gradient(160deg, ${b.accent}, #201014)` }}
            >
              <div
                className="absolute inset-0 opacity-15 mix-blend-overlay"
                style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 0%, transparent 45%)" }}
              />
              <div className="relative">
                <span className="eyebrow opacity-70">Brand distribuit</span>
                <h2 className="font-display text-3xl md:text-4xl mt-3 mb-3">{b.name}</h2>
                <p className="max-w-xs opacity-80 text-sm mb-6">{b.tagline}</p>
                <span className="eyebrow inline-flex items-center gap-2 transition-transform group-hover:translate-x-1">
                  Descoperă brandul →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BRAND SUMMARY — aceeași logică dinamică, grid auto-fit */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          {BRANDS.map((b) => (
            <div key={b.slug} className="p-8 md:p-10 rounded-sm border flex flex-col gap-4" style={{ borderColor: "var(--line)", background: b.accentSoft }}>
              <span className="eyebrow" style={{ color: b.accent }}>{b.name}</span>
              <p className="font-display text-xl leading-relaxed" style={{ color: "var(--ink)" }}>{b.description}</p>
              <Link to={`/brands/${b.slug}`} className="eyebrow mt-2" style={{ color: b.accent }}>
                Explorează {b.name} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOG TEASER */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-28">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="eyebrow" style={{ color: "var(--brass-dark)" }}>Produse selectate</span>
            <h2 className="font-display text-3xl mt-2">Din catalog</h2>
          </div>
          <Link to="/catalog" className="eyebrow" style={{ color: "var(--brass-dark)" }}>
            Vezi catalogul complet →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 lg:px-10 pb-28">
        <div className="mx-auto max-w-7xl rounded-sm p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ background: "var(--ink)", color: "var(--paper)" }}>
          <div>
            <span className="eyebrow opacity-60">Pentru retaileri și parteneri</span>
            <h2 className="font-display text-3xl mt-3 max-w-lg">
              Vrei să distribui La Sultane de Saba sau Age Stop?
            </h2>
          </div>
          <Link to="/contact" className="eyebrow px-7 py-4 rounded-full shrink-0" style={{ background: "var(--brass)", color: "var(--ink)" }}>
            Contactează-ne
          </Link>
        </div>
      </section>
    </>
  );
}
