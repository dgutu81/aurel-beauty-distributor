// Placeholder vizual — se folosește până sunt disponibile poze reale.
// De înlocuit ulterior cu <img src="..." /> în ProductCard / paginile de brand.
export default function PlaceholderImage({ letter = "•", accent = "#A9803D", className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${accent}1a, ${accent}33)`,
      }}
    >
      <span
        className="font-display select-none"
        style={{ color: accent, fontSize: "3.2rem", opacity: 0.55 }}
      >
        {letter}
      </span>
      <span
        className="absolute bottom-2 right-3 eyebrow"
        style={{ color: accent, opacity: 0.6, fontSize: "0.6rem" }}
      >
        Poză produs
      </span>
    </div>
  );
}
