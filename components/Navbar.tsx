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
  const [activeSection, setActiveSection] =
    useState<SectionId>("accueil");

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
  className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0D1326]/90 text-white backdrop-blur-md"
  role="navigation"
  aria-label="Navigation principale"
>
  <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
    <Link href="/#accueil" aria-label="Retour à l’accueil">
      <span className="text-xl font-semibold tracking-tight">
        M. A.
      </span>
    </Link>

    <ul className="flex items-center gap-5 text-base font-medium md:gap-8 md:text-lg">
      {navItems.map(({ id, label }) => {
        const isActive =
          pathname === "/" && activeSection === id;

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
  </div>
</nav>
  );
}
