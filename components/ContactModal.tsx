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
      className={
        inline
          ? `
              relative mx-auto w-full max-w-2xl
              rounded-2xl border border-[var(--border)]
              bg-[var(--surface)] text-[var(--foreground)]
              shadow-[var(--card-shadow)]
            `
          : `
              relative w-full max-w-lg
              rounded-3xl border border-[var(--border)]
              bg-[var(--surface)] text-[var(--foreground)]
              shadow-[0_24px_90px_rgba(0,0,0,0.45)]
            `
      }
      onClick={(event) => event.stopPropagation()}
    >
      {!inline && (
        <button
          type="button"
          onClick={closeModal}
          aria-label="Fermer"
          className="
            absolute right-4 top-4
            flex h-9 w-9 cursor-pointer items-center justify-center
            rounded-full border border-[var(--border)]
            bg-[var(--background)] text-[var(--muted)]
            transition
            hover:border-[var(--accent)]
            hover:text-[var(--foreground)]
          "
        >
          ✕
        </button>
      )}

      <div className={inline ? "p-6 md:p-10" : "p-6 md:p-8"}>
        {!inline && (
          <div className="mb-6 pr-10">
            <h3 className="text-2xl font-bold">Me contacter</h3>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="contact-name"
              className="block text-base font-medium text-[var(--muted)]"
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
                w-full rounded-xl
                border border-[var(--border)]
                bg-[var(--background)] px-4 py-3
                text-base text-[var(--foreground)]
                outline-none transition
                focus:border-[var(--accent)]
                focus:bg-[var(--surface-soft)]
              "
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-email"
              className="block text-base font-medium text-[var(--muted)]"
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
                w-full rounded-xl
                border border-[var(--border)]
                bg-[var(--background)] px-4 py-3
                text-base text-[var(--foreground)]
                outline-none transition
                focus:border-[var(--accent)]
                focus:bg-[var(--surface-soft)]
              "
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="block text-base font-medium text-[var(--muted)]"
            >
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              className="
                w-full resize-none rounded-xl
                border border-[var(--border)]
                bg-[var(--background)] px-4 py-3
                text-base text-[var(--foreground)]
                outline-none transition
                focus:border-[var(--accent)]
                focus:bg-[var(--surface-soft)]
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

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="
                inline-flex min-w-36 cursor-pointer
                items-center justify-center
                rounded-xl bg-[var(--accent-strong)]
                px-6 py-3
                text-base font-semibold text-white
                transition hover:brightness-110
                disabled:cursor-not-allowed disabled:opacity-60
              "
            >
              {status === "sending" ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}
