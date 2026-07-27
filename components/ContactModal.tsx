"use client";

import { FormEvent, useEffect, useState } from "react";

type ContactModalProps = {
  inline?: boolean;
};

export default function ContactModal({ inline = false }: ContactModalProps) {
  const [open, setOpen] = useState(inline);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const closeModal = () => {
    setOpen(false);
    setStatus("idle");
  };

  // Open the modal from anywhere using a custom event
  useEffect(() => {
    if (inline) return;

    const handler = () => setOpen(true);

    window.addEventListener("open-contact", handler);

    return () => window.removeEventListener("open-contact", handler);
  }, [inline]);

  // Close the modal with Escape
  useEffect(() => {
    if (inline || !open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inline, open]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
    <div
      className={
        inline
          ? "w-full"
          : "fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      }
      onClick={inline ? undefined : closeModal}
    >
      <div
        className={`
  relative w-full
  rounded-3xl border border-white/10
  bg-[#0f172a] text-white
  shadow-[0_24px_90px_rgba(0,0,0,0.45)]
  ${inline ? "mx-auto max-w-2xl" : "max-w-lg"}
`}
        onClick={(e) => e.stopPropagation()}
      >
        {!inline && (
          <button
            type="button"
            onClick={closeModal}
            className="
            absolute right-4 top-4
            flex h-9 w-9 items-center justify-center
            rounded-full border border-white/10
            bg-white/5 text-white/70
            transition hover:bg-white/10 hover:text-white
          "
            aria-label="Fermer"
          >
            ✕
          </button>
        )}

        <div className="p-6 md:p-8">
          {!inline && (
            <div className="mb-6 space-y-2 pr-10">
              <h3 className="text-2xl font-bold">Me contacter</h3>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className="block text-base font-medium text-white/70"
              >
                Nom
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                className="
        w-full rounded-xl border border-white/10
        bg-white/[0.06] px-4 py-3
        text-white
        outline-none transition
        focus:border-blue-400/70 focus:bg-white/[0.08]
      "
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="block text-base font-medium text-white/70"
              >
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="
        w-full rounded-xl border border-white/10
        bg-white/[0.06] px-4 py-3
        text-white
        outline-none transition
        focus:border-blue-400/70 focus:bg-white/[0.08]
      "
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="block text-base font-medium text-white/70"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="
        w-full resize-none rounded-xl border border-white/10
        bg-white/[0.06] px-4 py-3
        text-white
        outline-none transition
        focus:border-blue-400/70 focus:bg-white/[0.08]
      "
              />
            </div>

            {status === "success" && (
              <p className="rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-base text-green-300">
                Message envoyé.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-base text-red-300">
                Erreur d’envoi.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="
      w-full rounded-xl bg-blue-600 px-5 py-3
      font-semibold text-white transition
      hover:bg-blue-500
      disabled:cursor-not-allowed disabled:opacity-60
    "
            >
              {status === "sending" ? "Envoi..." : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
