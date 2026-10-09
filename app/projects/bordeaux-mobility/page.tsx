import Image from "next/image";
import Link from "next/link";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function BordeauxMobilityPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--background)] pt-28 text-[var(--foreground)]">
        <article className="mx-auto max-w-6xl px-6 pb-24">
          {/* Project introduction */}
          <header className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <Link
                href="/projects"
                className="
                  inline-flex cursor-pointer items-center
                  rounded-full border border-[var(--border)]
                  bg-[var(--surface)] px-5 py-2.5
                  text-base font-medium text-[var(--muted)]
                  transition
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                "
              >
                ← Retour aux projets
              </Link>
            </div>

            <h1
              className="
                text-3xl font-semibold tracking-tight
                text-blue-300 md:text-4xl
              "
            >
              Bordeaux Mobility
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-left text-lg leading-8 text-[var(--muted)]">
              {
                "Application Angular permettant de consulter en temps réel la disponibilité des stations vélo de Bordeaux Métropole, avec recherche, filtres et favoris."
              }
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://bordeaux-mobility-m-a.vercel.app/"
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
                href="https://github.com/m-amroune/bordeaux-mobility"
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
          <section className="relative mt-10">
            <div
              className="
                pointer-events-none absolute
                inset-x-24 -top-10 h-40
                rounded-full bg-blue-500/10
                blur-3xl
              "
            />

            <div
              className="
                relative mx-auto max-w-4xl
                overflow-hidden rounded-3xl
                border border-blue-400/10
                bg-gradient-to-br
                from-[var(--surface)]
                via-[var(--surface)]
                to-blue-500/5
                p-3 md:p-4
                shadow-[var(--card-shadow)]
                transition-shadow duration-500
                hover:shadow-[var(--card-shadow-hover)]
              "
            >
              <Image
                src="/projects/bordeaux-mobility-views.png"
                alt="Aperçu de Bordeaux Mobility"
                width={1200}
                height={750}
                priority
                className="
                  h-auto w-full rounded-2xl
                  transition-transform duration-700 ease-out
                  hover:scale-[1.01]
                "
              />
            </div>
          </section>

          {/* Project details */}
          <section className="mx-auto mt-14 max-w-4xl">
            {/* Features */}
            <div className="border-t border-[var(--border)] py-10">
              <h2
                className="
                  mb-6 text-2xl font-semibold tracking-tight
                  text-blue-300 md:text-3xl
                "
              >
                Fonctionnalités
              </h2>

              <ul
                className="
                  list-disc space-y-3 pl-6
                  text-lg leading-8 text-[var(--muted)]
                  marker:text-blue-300/80
                "
              >
                <li>
                  Consultation en temps réel des vélos et places disponibles
                </li>

                <li>
                  Recherche des stations et filtres selon leur disponibilité
                </li>

                <li>
                  {
                    "Page de détail avec types de vélos, état de la station et dernière mise à jour"
                  }
                </li>

                <li>
                  Gestion de stations favorites conservées dans le localStorage
                </li>

                <li>
                  Affichage de l&apos;adresse de la station et lien direct vers
                  Google Maps
                </li>

                <li>
                  Rafraîchissement manuel des données
                </li>
              </ul>
            </div>

            {/* Fonctionnement */}
            <div className="border-t border-[var(--border)] py-10">
              <h2
                className="
                  mb-6 text-2xl font-semibold tracking-tight
                  text-blue-300 md:text-3xl
                "
              >
                Fonctionnement
              </h2>

              <ul
                className="
                  list-disc space-y-3 pl-6
                  text-lg leading-8 text-[var(--muted)]
                  marker:text-blue-300/80
                "
              >
                <li>
                  Données récupérées depuis l&apos;Open Data de Bordeaux
                  Métropole
                </li>

                <li>
                  Gestion des flux de données avec HttpClient et RxJS
                </li>

                <li>
                  Utilisation des Signals et Reactive Forms pour gérer
                  l&apos;état et les filtres de l&apos;interface
                </li>

                <li>
                  {
                    "Adresse obtenue à partir des coordonnées grâce au service de géocodage de l'IGN"
                  }
                </li>

                <li>
                  Interface mobile-first adaptée progressivement aux écrans
                  plus larges
                </li>

                <li>
                  Tests unitaires et composants avec Vitest et Angular TestBed
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="border-y border-[var(--border)] py-10">
              <h2
                className="
                  mb-6 text-2xl font-semibold tracking-tight
                  text-blue-300 md:text-3xl
                "
              >
                Technologies
              </h2>

              <div className="flex flex-wrap gap-3">
                {[
                  "Angular",
                  "TypeScript",
                  "RxJS",
                  "Vitest",
                  "Angular TestBed",
                  "GitHub Actions",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border border-blue-400/15
                      bg-blue-400/[0.04]
                      px-4 py-2
                      text-base font-medium
                      text-slate-300
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