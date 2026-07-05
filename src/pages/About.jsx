import { BRANDS } from "../data/catalog";

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
        <span className="eyebrow" style={{ color: "var(--brass-dark)" }}>Despre noi</span>
        <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6">
          Aducem branduri de cosmetice distincte pe piața locală
        </h1>
        <p className="opacity-70 text-lg leading-relaxed">
          Andreas Distribution SRL este distribuitorul oficial al brandurilor La Sultane de Saba
          și Age Stop. Lucrăm cu retaileri, spa-uri, saloane și profesioniști din domeniul frumuseții
          pentru a face disponibile local două lumi de cosmetice foarte diferite — și la fel de distincte.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-8 pb-24">
        <div className="p-8 rounded-sm" style={{ background: "var(--paper-raised)" }}>
          <h3 className="font-display text-2xl mb-3">Ce facem</h3>
          <ul className="space-y-3 text-sm opacity-80 leading-relaxed">
            <li>— Import și distribuție a gamei complete de produse ale ambelor branduri</li>
            <li>— Suport pentru partenerii din retail, spa și saloane</li>
            <li>— Punct local de contact pentru comenzi, stoc și informații despre produse</li>
            <li>— Materiale de prezentare și training pentru produse</li>
          </ul>
        </div>
        <div className="p-8 rounded-sm" style={{ background: "var(--paper-raised)" }}>
          <h3 className="font-display text-2xl mb-3">De ce mai multe branduri</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            La Sultane de Saba și Age Stop se află la capete opuse ale universului de frumusețe —
            unul înrădăcinat în ritualul senzorial oriental, celălalt în performanța clinică
            anti-aging. Împreună, permit partenerilor noștri să ofere o gamă cu adevărat completă
            propriilor clienți. Pe măsură ce distribuim și alte branduri, această gamă va continua
            să crească.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-28">
        <h2 className="font-display text-3xl mb-10 text-center">Brandurile pe care le distribuim</h2>
        <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
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
