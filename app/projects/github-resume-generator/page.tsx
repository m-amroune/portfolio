import Image from "next/image";
import Link from "next/link";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function GithubResumeGeneratorPage() {
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
  GitHub Resume Generator
</h1>

<p className="mx-auto mt-5 max-w-2xl text-left text-lg leading-8 text-[var(--muted)]">
  {
    "Application générant une page type CV depuis un profil GitHub public, avec sélection personnalisable des repositories et synthèse des données du profil."
  }
</p>

<div className="mt-6 flex flex-wrap justify-center gap-4">
  <a
    href="https://m-a-github-resume-generator.vercel.app/"
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
    href="https://github.com/m-amroune/github-resume-generator"
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
      src="/projects/github_resume_generator.png"
      alt="Aperçu du GitHub Resume Generator"
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
        Récupération du profil GitHub et des repositories publics
      </li>

      <li>
        Sélection automatique des repositories les plus pertinents
      </li>

      <li>
        Sélection manuelle avec ajout, retrait et réorganisation
      </li>

      <li>
        Calcul des langages utilisés et des statistiques du profil
      </li>

      <li>
        Mise en cache des recherches avec TanStack Query
      </li>

      <li>
        Gestion des erreurs API et des limites de requêtes GitHub
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
        Récupération de 100 repositories publics au maximum
      </li>

      <li>
        Choix de 6, 10, 15 ou 20 repositories à afficher
      </li>

      <li>
        Priorité aux repositories non fork avec description et étoiles
      </li>

      <li>
        {
          "Calcul des langages sur l'ensemble des repositories non fork récupérés"
        }
      </li>

      <li>
        Affichage des étoiles, forks, langage principal et dernière mise à jour
      </li>

      <li>
        Génération du CV dans une version imprimable
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
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
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