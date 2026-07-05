import { BRANDS } from "../data/catalog";

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
        <span className="eyebrow" style={{ color: "var(--brass-dark)" }}>About us</span>
        <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6">
          Bringing distinctive beauty brands to our market
        </h1>
        <p className="opacity-70 text-lg leading-relaxed">
          Aurel Beauty Distribution is the official regional distributor of La Sultane de Saba
          and Age Stop. We work with retailers, spas, salons and beauty professionals to make
          two very different — and equally distinctive — cosmetics worlds available locally.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-8 pb-24">
        <div className="p-8 rounded-sm" style={{ background: "var(--paper-raised)" }}>
          <h3 className="font-display text-2xl mb-3">What we do</h3>
          <ul className="space-y-3 text-sm opacity-80 leading-relaxed">
            <li>— Import and distribution of both brands' full product ranges</li>
            <li>— Support for retail, spa and salon partners</li>
            <li>— Local point of contact for orders, stock and product information</li>
            <li>— Brand presentation materials and product training</li>
          </ul>
        </div>
        <div className="p-8 rounded-sm" style={{ background: "var(--paper-raised)" }}>
          <h3 className="font-display text-2xl mb-3">Why two brands</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            La Sultane de Saba and Age Stop sit at opposite ends of the beauty spectrum —
            one rooted in sensory, oriental ritual, the other in clinical anti-aging
            performance. Together they let our partners offer a genuinely complete
            range to their own customers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-28">
        <h2 className="font-display text-3xl mb-10 text-center">The brands we distribute</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {BRANDS.map((b) => (
            <div key={b.slug} className="p-8 rounded-sm border" style={{ borderColor: "var(--line)", background: b.accentSoft }}>
              <span className="eyebrow" style={{ color: b.accent }}>{b.tagline}</span>
              <h3 className="font-display text-2xl mt-2 mb-3">{b.name}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
