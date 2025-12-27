"use client";

export default function Footer() {
  return (
    <footer className="py-8 bg-[#080B14] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <p className="text-white/50 text-base">
          © {new Date().getFullYear()} Moustapha Amroune — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
