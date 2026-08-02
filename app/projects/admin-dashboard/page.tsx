import Image from "next/image";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function AdminDashboardPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--background)] pt-32 text-[var(--foreground)]">
        <article className="mx-auto max-w-6xl px-6 pb-24">
          {/* Project introduction */}
          <header className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Admin Dashboard
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-left text-lg leading-8 text-[var(--muted)]">
              Application d’administration développée avec Next.js et
              TypeScript, permettant de gérer les utilisateurs, de suivre les
              commandes et leurs statuts, avec une authentification et des
              routes protégées.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://admin-dashboard-m-amroune.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  cursor-pointer rounded-xl
                  bg-[var(--accent-strong)] px-6 py-3
                  text-base font-medium text-white
                  transition hover:brightness-110
                "
              >
                Démo
              </a>

              <a
                href="https://github.com/m-amroune/admin-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  cursor-pointer rounded-xl
                  border border-[var(--border)]
                  px-6 py-3 text-base font-medium
                  text-[var(--foreground)] transition
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                "
              >
                Code
              </a>
            </div>
          </header>

          {/* Project preview */}
          <section className="mt-14">
            <div
              className="
                group overflow-hidden rounded-3xl
                border border-[var(--border)]
                bg-[var(--surface)] p-4 md:p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.24)]
                transition-shadow duration-500
                hover:shadow-[0_26px_70px_rgba(37,99,235,0.16)]
              "
            >
              <Image
                src="/projects/admin_dashboard.png"
                alt="Aperçu de l’Admin Dashboard"
                width={1200}
                height={750}
                priority
                className="
                  h-auto w-full rounded-2xl
                  transition-transform duration-700 ease-out
                  group-hover:scale-[1.01]
                "
              />
            </div>
          </section>

          {/* Project details */}
          <section className="mx-auto mt-20 max-w-4xl">
            <div className="border-t border-[var(--border)] py-10">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Modules
              </h2>

              <ul className="list-disc space-y-3 pl-6 text-lg leading-8 text-[var(--muted)] marker:text-[var(--accent)]">
                <li>
                  Authentification avec session par cookie et routes protégées
                </li>
                <li>
                  Gestion des utilisateurs : liste, création, suppression et
                  rôle (user / admin)
                </li>
                <li>
                  Gestion des commandes : liste, page détail et affichage du
                  statut
                </li>
              </ul>
            </div>

            <div className="border-t border-[var(--border)] py-10">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Fonctionnement
              </h2>

              <ul className="list-disc space-y-3 pl-6 text-lg leading-8 text-[var(--muted)] marker:text-[var(--accent)]">
                <li>Layout dashboard partagé avec navigation latérale</li>
                <li>CRUD utilisateurs</li>
                <li>Affichage des commandes et de leur statut</li>
                <li>Interface simple et structurée</li>
              </ul>
            </div>

            <div className="border-y border-[var(--border)] py-10">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Technologies
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "TypeScript",
                  "Prisma",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "Node.js",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full border border-[var(--border)]
                      bg-[var(--surface)] px-4 py-2
                      text-base font-medium text-[var(--muted)]
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}