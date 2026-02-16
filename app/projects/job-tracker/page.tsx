"use client";

import Navbar from "../../../components/Navbar";
import ContactModal from "../../../components/ContactModal";

export default function JobTrackerPage() {
  return (
    <>
      <Navbar />
      <ContactModal />

      <main className="min-h-screen bg-[#020617] text-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
          <header className="space-y-4 pb-10 border-b border-white/10 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Job Tracker</h1>

            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Application permettant de suivre des candidatures avec stockage
              local des données (localStorage).
            </p>
          </header>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Modules</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 marker:text-blue-500">
              <li>Création d’une candidature (entreprise et poste)</li>
              <li>Modification inline des informations</li>
              <li>
                Changement d’état par cycle (todo → applied → interview →
                rejected)
              </li>
              <li>Suppression avec confirmation</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Fonctionnement</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 marker:text-blue-500">
              <li>Interface sur une seule page sans navigation</li>
              <li>Mise à jour immédiate après interaction</li>
              <li>Persistance locale des données</li>
              <li>Restauration automatique au rechargement</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Technologies</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 marker:text-blue-500">
              <li>Next.js</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>localStorage</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Liens</h2>

            <div className="flex gap-4">
              <a
                href="https://m-a-job-tracker.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-blue-600/80 backdrop-blur hover:bg-blue-600 transition"
              >
                Démo
              </a>

              <a
                href="https://github.com/m-amroune/job-tracker"
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
