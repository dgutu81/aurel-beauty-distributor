import { Link } from "react-router-dom";
import { BRANDS, PRODUCTS } from "../data/catalog";
import PlaceholderImage from "../components/PlaceholderImage";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const lss = BRANDS[0];
  const as = BRANDS[1];
  const featured = [PRODUCTS[1], PRODUCTS[3], PRODUCTS[8], PRODUCTS[10]];

  return (
    <>
      {/* HERO — split diptych, the site's signature element */}
      <section className="relative">
        <div className="grid md:grid-cols-2 min-h-[86vh]">
          <Link
            to="/brands/la-sultane-de-saba"
            className="group relative flex items-end p-8 md:p-14 min-h-[46vh] md:min-h-full overflow-hidden"
            style={{ background: `linear-gradient(160deg, ${lss.accent}, #2c1119)` }}
          >
            <div className="absolute inset-0 opacity-15 mix-blend-overlay" style={{
              backgroundImage: "radial-gradient(circle at 30% 20%, white 0%, transparent 45%)",
            }} />
            <div className="relative text-white">
              <span className="eyebrow opacity-70">Brand 01</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 mb-3">La Sultane<br/>de Saba</h2>
              <p className="max-w-xs opacity-80 text-sm mb-6">{lss.tagline}</p>
              <span className="eyebrow inline-flex items-center gap-2 transition-transform group-hover:translate-x-1">
                Discover the brand →
              </span>
            </div>
          </Link>

          <Link
            to="/brands/age-stop"
            className="group relative flex items-end p-8 md:p-14 min-h-[46vh] md:min-h-full overflow-hidden"
            style={{ background: `linear-gradient(200deg, ${as.accent}, #1f2b25)` }}
          >
            <div className="absolute inset-0 opacity-15 mix-blend-overlay" style={{
              backgroundImage: "radial-gradient(circle at 70% 20%, white 0%, transparent 45%)",
            }} />
            <div className="relative text-white">
              <span className="eyebrow opacity-70">Brand 02</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 mb-3">Age Stop</h2>
              <p className="max-w-xs opacity-80 text-sm mb-6">{as.tagline}</p>
              <span className="eyebrow inline-flex items-center gap-2 transition-transform group-hover:translate-x-1">
                Discover the brand →
              </span>
            </div>
          </Link>
        </div>

        {/* Brass seam — connective signature between the two worlds */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full items-center justify-center font-display text-lg shadow-xl"
          style={{ background: "var(--brass)", color: "var(--ink)" }}>
          AB
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="mx-auto max-w-4xl px-6 text-center py-24">
        <span className="eyebrow" style={{ color: "var(--brass-dark)" }}>Official distribution</span>
        <h1 className="font-display text-3xl md:text-4xl mt-4 leading-snug">
          One distributor, two distinct worlds of beauty —
          brought to retailers, spas and salons across the region.
        </h1>
      </section>

      {/* BRAND SUMMARY BLOCKS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-8 pb-24">
        {BRANDS.map((b) => (
          <div key={b.slug} className="p-8 md:p-10 rounded-sm border flex flex-col gap-4" style={{ borderColor: "var(--line)", background: b.accentSoft }}>
            <span className="eyebrow" style={{ color: b.accent }}>{b.name}</span>
            <p className="font-display text-xl leading-relaxed" style={{ color: "var(--ink)" }}>{b.description}</p>
            <Link to={`/brands/${b.slug}`} className="eyebrow mt-2" style={{ color: b.accent }}>
              Explore {b.name} →
            </Link>
          </div>
        ))}
      </section>

      {/* CATALOG TEASER */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-28">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="eyebrow" style={{ color: "var(--brass-dark)" }}>Selected products</span>
            <h2 className="font-display text-3xl mt-2">From the catalog</h2>
          </div>
          <Link to="/catalog" className="eyebrow" style={{ color: "var(--brass-dark)" }}>
            View full catalog →
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
            <span className="eyebrow opacity-60">For retailers &amp; partners</span>
            <h2 className="font-display text-3xl mt-3 max-w-lg">
              Interested in carrying La Sultane de Saba or Age Stop?
            </h2>
          </div>
          <Link to="/contact" className="eyebrow px-7 py-4 rounded-full shrink-0" style={{ background: "var(--brass)", color: "var(--ink)" }}>
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
