"use client";

import Navbar from "../../../components/Navbar";
import ContactModal from "../../../components/ContactModal";

export default function GithubResumeGeneratorPage() {
  return (
    <>
      <Navbar />
      <ContactModal />

      <main className="min-h-screen bg-[#020617] text-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
          <header className="space-y-4 pb-10 border-b border-white/10 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              GitHub Resume Generator
            </h1>

            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Application générant une page type CV à partir d’un profil GitHub
              public.
            </p>
          </header>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Modules</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 marker:text-blue-500">
              <li>Récupération des données publiques via l’API GitHub</li>
              <li>Sélection automatique des repositories</li>
              <li>Calcul des langages les plus utilisés</li>
              <li>Gestion des erreurs (404, rate limit, échec fetch)</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Fonctionnement</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 marker:text-blue-500">
              <li>Récupération jusqu’à 100 repositories publics</li>
              <li>
                Priorité aux repositories non fork avec description et étoiles
              </li>
              <li>
                Fallback sur les repositories non fork triés par mise à jour
              </li>
              <li>Génération d’un layout imprimable (print PDF)</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Technologies</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 marker:text-blue-500">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Liens</h2>

            <div className="flex gap-4">
              <a
                href="https://m-a-github-resume-generator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-blue-600/80 backdrop-blur hover:bg-blue-600 transition"
              >
                Démo
              </a>

              <a
                href="https://github.com/m-amroune/github-resume-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                Code
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
