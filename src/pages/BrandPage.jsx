import { useParams, Link, Navigate } from "react-router-dom";
import { getBrand, getCategoriesForBrand, getProductsForBrand } from "../data/catalog";
import PlaceholderImage from "../components/PlaceholderImage";
import ProductCard from "../components/ProductCard";

export default function BrandPage() {
  const { slug } = useParams();
  const brand = getBrand(slug);
  if (!brand) return <Navigate to="/catalog" replace />;

  const categories = getCategoriesForBrand(slug);
  const products = getProductsForBrand(slug);

  return (
    <>
      <section className="relative min-h-[56vh] flex items-end p-8 md:p-16" style={{ background: `linear-gradient(160deg, ${brand.accent}, #201014)` }}>
        <div className="text-white max-w-2xl">
          <span className="eyebrow opacity-70">Distributed brand</span>
          <h1 className="font-display text-4xl md:text-6xl mt-3 mb-4">{brand.name}</h1>
          <p className="opacity-85 text-lg leading-relaxed">{brand.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <span className="eyebrow" style={{ color: brand.accent }}>Categories</span>
        <h2 className="font-display text-3xl mt-2 mb-10">Browse by category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/catalog?brand=${brand.slug}&category=${c.slug}`}
              className="group p-6 rounded-sm border flex flex-col gap-6 justify-between min-h-[140px]"
              style={{ borderColor: "var(--line)", background: brand.accentSoft }}
            >
              <span className="font-display text-lg">{c.name}</span>
              <span className="eyebrow opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: brand.accent }}>
                View products →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-28">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="eyebrow" style={{ color: brand.accent }}>Full range</span>
            <h2 className="font-display text-3xl mt-2">{brand.name} products</h2>
          </div>
          <Link to={`/catalog?brand=${brand.slug}`} className="eyebrow" style={{ color: brand.accent }}>
            Open in catalog →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
