"use client";

import React, { useEffect, useState } from "react";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // Open the modal from anywhere using a custom event
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-contact", handler);
    return () => window.removeEventListener("open-contact", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");

    const formData = new FormData(form);

    // Netlify expects URL-encoded payload
    const body = new URLSearchParams(
      Array.from(formData.entries()).map(([k, v]) => [k, String(v)])
    ).toString();

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error("Submit failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white text-gray-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setStatus("idle");
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Fermer"
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
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              Ne remplissez pas ce champ : <input name="bot-field" />
            </label>
          </p>

          <input
            type="text"
            name="name"
            placeholder="Nom"
            required
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            placeholder="Votre message…"
            rows={3}
            required
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {status === "success" && (
            <p className="text-sm text-green-700">Message envoyé.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700">Erreur d’envoi. Réessaie.</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
          >
            {status === "sending" ? "Envoi…" : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
}
