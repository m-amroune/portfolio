"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  // Listen for the custom "open-contact" event to open the contact modal
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-contact", handler as EventListener);

    return () =>
      window.removeEventListener("open-contact", handler as EventListener);
  }, []);

  return (
    <>
      <footer className="py-8 bg-[#080B14] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center">
          <p className="text-white/50 text-base">
            © {new Date().getFullYear()} Moustapha Amroune — Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Contact modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              Envoyer un message
            </h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot field (spam protection) */}
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <input
                type="text"
                name="name"
                placeholder="Nom"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                name="message"
                placeholder="Votre message…"
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}



