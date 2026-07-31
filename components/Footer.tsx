"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-base text-[var(--muted)]">
          © {new Date().getFullYear()} Moustapha Amroune — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
