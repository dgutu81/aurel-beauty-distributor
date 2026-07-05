import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BRANDS, CATEGORIES, PRODUCTS } from "../data/catalog";
import ProductCard from "../components/ProductCard";

export default function Catalog() {
  const [params, setParams] = useSearchParams();
  const [brandFilter, setBrandFilter] = useState(params.get("brand") || "all");
  const [categoryFilter, setCategoryFilter] = useState(params.get("category") || "all");

  useEffect(() => {
    setBrandFilter(params.get("brand") || "all");
    setCategoryFilter(params.get("category") || "all");
  }, [params]);

  const visibleCategories = useMemo(
    () => (brandFilter === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.brand === brandFilter)),
    [brandFilter]
  );

  const products = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (brandFilter !== "all" && p.brand !== brandFilter) return false;
      if (categoryFilter !== "all" && p.category !== categoryFilter) return false;
      return true;
    });
  }, [brandFilter, categoryFilter]);

  function updateBrand(slug) {
    const next = new URLSearchParams();
    if (slug !== "all") next.set("brand", slug);
    setParams(next);
  }

  function updateCategory(slug) {
    const next = new URLSearchParams(params);
    if (slug === "all") next.delete("category");
    else next.set("category", slug);
    setParams(next);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
      <span className="eyebrow" style={{ color: "var(--brass-dark)" }}>Catalog</span>
      <h1 className="font-display text-4xl mt-3 mb-4">Catalog complet de produse</h1>
      <p className="opacity-70 max-w-xl mb-12">
        Răsfoiește gama completă distribuită de Andreas Distribution, pentru ambele branduri.
        Acesta este un catalog de prezentare — pentru prețuri și comenzi, te rugăm să ne contactezi direct.
      </p>

      {/* Filtru branduri */}
      <div className="flex flex-wrap gap-3 mb-6">
        <FilterPill active={brandFilter === "all"} onClick={() => updateBrand("all")}>
          Toate brandurile
        </FilterPill>
        {BRANDS.map((b) => (
          <FilterPill key={b.slug} active={brandFilter === b.slug} accent={b.accent} onClick={() => updateBrand(b.slug)}>
            {b.name}
          </FilterPill>
        ))}
      </div>

      {/* Filtru categorii */}
      <div className="flex flex-wrap gap-3 mb-14 pb-6 border-b" style={{ borderColor: "var(--line)" }}>
        <FilterPill active={categoryFilter === "all"} onClick={() => updateCategory("all")} subtle>
          Toate categoriile
        </FilterPill>
        {visibleCategories.map((c) => (
          <FilterPill key={c.slug} active={categoryFilter === c.slug} onClick={() => updateCategory(c.slug)} subtle>
            {c.name}
          </FilterPill>
        ))}
      </div>

      {products.length === 0 ? (
        <p className="opacity-60">Niciun produs nu corespunde acestui filtru momentan.</p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}

function FilterPill({ active, onClick, children, accent = "var(--brass)", subtle = false }) {
  return (
    <button
      onClick={onClick}
      className="eyebrow px-4 py-2 rounded-full border transition-colors"
      style={
        active
          ? { background: accent, borderColor: accent, color: "white" }
          : { borderColor: "var(--line)", color: subtle ? "var(--ink-soft)" : "var(--ink)" }
      }
    >
      {children}
    </button>
  );
}
