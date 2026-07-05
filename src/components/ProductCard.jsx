import PlaceholderImage from "./PlaceholderImage";
import { getBrand } from "../data/catalog";

export default function ProductCard({ product }) {
  const brand = getBrand(product.brand);
  return (
    <article className="group flex flex-col border rounded-sm overflow-hidden bg-white/40" style={{ borderColor: "var(--line)" }}>
      <PlaceholderImage letter={product.image} accent={brand.accent} className="aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-[1.03]" />
      <div className="p-5 flex flex-col gap-1.5 flex-1">
        <span className="eyebrow" style={{ color: brand.accent }}>{brand.name}</span>
        <h3 className="font-display text-lg leading-snug">{product.name}</h3>
        <p className="text-sm opacity-70 leading-relaxed">{product.description}</p>
      </div>
    </article>
  );
}
