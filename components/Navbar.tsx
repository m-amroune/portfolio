// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="w-full bg-white/90 backdrop-blur shadow-md sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center px-6 py-3 max-w-5xl mx-auto">
        {/* Brand / home link */}
        <Link href="/" aria-label="Go to home">
          <span className="text-black font-semibold text-lg tracking-tight">
            M. A.
          </span>
        </Link>

        {/* Navigation links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Projets
            </Link>
          </li>

          <li>
            {/* Triggers the global contact modal */}
            <button
              onClick={() => window.dispatchEvent(new Event("open-contact"))}
              className="text-sm font-medium hover:text-blue-300 transition cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}



