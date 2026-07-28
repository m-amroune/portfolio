// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof navItems)[number]["id"];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<SectionId>("accueil");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const updateActiveSection = () => {
      const pageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (pageBottom) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 120;
      let currentSection: SectionId = "accueil";

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [pathname]);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0D1326]/95 text-white backdrop-blur-md"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/#accueil"
          aria-label="Retour à l’accueil"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-xl font-semibold tracking-tight">M. A.</span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 text-lg font-medium md:flex">
          {navItems.map(({ id, label }) => {
            const isActive = pathname === "/" && activeSection === id;

            return (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative block py-2 transition ${
                    isActive
                      ? "text-blue-300"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {label}

                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-blue-400 transition-transform ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex cursor-pointer flex-col gap-1.5 rounded-lg p-2 transition hover:bg-white/10 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <ul
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0D1326] px-6 py-4 text-base font-medium md:hidden"
        >
          {navItems.map(({ id, label }) => {
            const isActive = pathname === "/" && activeSection === id;

            return (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={`block border-b border-white/10 py-4 transition last:border-b-0 ${
                    isActive
                      ? "text-blue-300"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
