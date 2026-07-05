import { NavLink } from "react-router-dom";
import { useState } from "react";

const links = [
  { to: "/", label: "Acasă" },
  { to: "/brands/la-sultane-de-saba", label: "La Sultane de Saba" },
  { to: "/brands/age-stop", label: "Age Stop" },
  { to: "/catalog", label: "Catalog" },
  { to: "/about", label: "Despre noi" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--line)", background: "var(--paper)ee", backdropFilter: "blur(6px)" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 rounded-full flex items-center justify-center font-display text-lg" style={{ background: "var(--ink)", color: "var(--paper)" }}>
            A
          </span>
          <span className="font-display text-lg tracking-tight">
            Andreas <span style={{ color: "var(--brass)" }}>Distribution</span>
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `eyebrow transition-opacity hover:opacity-70 ${isActive ? "" : "opacity-60"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-6 h-px bg-current" />
          <span className="w-6 h-px bg-current" />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: "var(--line)" }}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)} className="eyebrow">
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
