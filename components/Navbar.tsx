"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof navItems)[number]["id"];

export default function Navbar() {
  const pathname = usePathname();

  const [activeSection, setActiveSection] =
    useState<SectionId>("accueil");

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

    return () =>
      window.removeEventListener("scroll", updateActiveSection);
  }, [pathname]);

  return (
    <nav
      className="fixed inset-x-0 top-4 z-50 px-4"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div
        className="
          mx-auto flex max-w-4xl items-center justify-between
          rounded-full border border-[var(--border)]
          bg-[var(--surface)] px-4 py-2.5
          text-[var(--foreground)]
          shadow-[var(--nav-shadow)]
          backdrop-blur-xl sm:px-5
        "
      >
        <Link
          href="/#accueil"
          aria-label="Retour à l’accueil"
          onClick={() => setMenuOpen(false)}
          className="
            rounded-full px-3 py-2 transition
            hover:bg-[var(--background)]
          "
        >
          <span className="text-xl font-semibold tracking-tight">
            M. A.
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <ul className="flex items-center gap-1 text-base font-medium">
            {navItems.map(({ id, label }) => {
              const isActive =
                pathname === "/" && activeSection === id;

              return (
                <li key={id}>
                  <Link
                    href={`/#${id}`}
                    aria-current={
                      isActive ? "location" : undefined
                    }
                    className={`block rounded-full px-5 py-2.5 transition ${
                      isActive
                        ? "bg-[var(--accent-strong)] text-white shadow-md"
                        : "text-[var(--muted)] hover:bg-[var(--background)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              menuOpen ? "Fermer le menu" : "Ouvrir le menu"
            }
            className="
              flex cursor-pointer flex-col gap-1.5
              rounded-full p-3 transition
              hover:bg-[var(--background)]
            "
          >
            <span
              className={`h-0.5 w-6 bg-[var(--foreground)] transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-[var(--foreground)] transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 bg-[var(--foreground)] transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <ul
          id="mobile-navigation"
          className="
            mx-auto mt-3 max-w-4xl rounded-2xl
            border border-[var(--border)]
            bg-[var(--surface)] p-3
            text-base font-medium
            text-[var(--foreground)]
            shadow-[var(--nav-shadow)]
            md:hidden
          "
        >
          {navItems.map(({ id, label }) => {
            const isActive =
              pathname === "/" && activeSection === id;

            return (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={
                    isActive ? "location" : undefined
                  }
                  className={`block rounded-xl px-4 py-3.5 transition ${
                    isActive
                      ? "bg-[var(--accent-strong)] text-white"
                      : "text-[var(--muted)] hover:bg-[var(--background)] hover:text-[var(--foreground)]"
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