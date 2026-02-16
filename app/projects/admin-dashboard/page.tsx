"use client";

import Navbar from "../../../components/Navbar";
import ContactModal from "../../../components/ContactModal";

export default function AdminDashboardPage() {
  return (
    <>
      <Navbar />
      <ContactModal />

      <main className="min-h-screen bg-[#020617] text-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
          <header className="space-y-4 pb-10 border-b border-white/10 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Admin Dashboard
            </h1>

            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Application d’administration permettant de gérer des utilisateurs
              et des commandes.
            </p>
          </header>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Modules</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 marker:text-blue-500">
              <li>
                Authentification avec session par cookie et routes protégées
              </li>
              <li>
                Gestion des utilisateurs : liste, création, suppression et rôle
                (user / admin)
              </li>
              <li>
                Gestion des commandes : liste, page détail et affichage du
                statut
              </li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Fonctionnement</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 marker:text-blue-500">
              <li>Layout dashboard partagé avec navigation latérale</li>
              <li>CRUD utilisateurs</li>
              <li>Affichage des commandes et de leur statut</li>
              <li>Interface simple et structurée</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Technologies</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 marker:text-blue-500">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Prisma</li>
              <li>PostgreSQL</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-lg bg-white/5 border border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold">Liens</h2>

            <div className="flex gap-4">
              <a
                href="https://admin-dashboard-m-amroune.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-blue-600/80 backdrop-blur hover:bg-blue-600 transition"
              >
                Démo
              </a>

              <a
                href="https://github.com/m-amroune/admin-dashboard"
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
