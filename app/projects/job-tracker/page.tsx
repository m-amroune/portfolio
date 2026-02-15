"use client";

import Navbar from "../../../components/Navbar";
import ContactModal from "../../../components/ContactModal";

export default function JobTrackerPage() {
  return (
    <>
      <Navbar />
      <ContactModal />

      <main className="min-h-screen bg-[#020617] text-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
          <header className="space-y-4">
            <h1 className="text-3xl font-bold">Job Tracker</h1>
            <p className="text-slate-300">
              Application permettant de suivre des candidatures directement dans
              le navigateur.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Modules</h2>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>Création d’une candidature (entreprise et poste)</li>
              <li>Modification inline des informations</li>
              <li>
                Changement d’état par cycle (todo → applied → interview →
                rejected)
              </li>
              <li>Suppression avec confirmation</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Fonctionnement</h2>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>Interface sur une seule page sans navigation</li>
              <li>Mise à jour immédiate après interaction</li>
              <li>Persistance locale des données</li>
              <li>Restauration automatique au rechargement</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Technologies</h2>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>Next.js</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>localStorage</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Liens</h2>
            <div className="flex gap-4">
              <a
                href="https://m-a-job-tracker.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Démo
              </a>

              <a
                href="https://github.com/m-amroune/job-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/30 rounded-md hover:bg-white/10 transition"
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
