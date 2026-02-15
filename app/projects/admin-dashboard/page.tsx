"use client";

import Navbar from "../../../components/Navbar";
import ContactModal from "../../../components/ContactModal";

export default function AdminDashboardPage() {
  return (
    <>
      <Navbar />
      <ContactModal />

      <main className="min-h-screen bg-[#020617] text-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
          <header className="space-y-4">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-slate-300">
              Application d’administration permettant de gérer des utilisateurs
              et des commandes.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Modules</h2>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
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

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Fonctionnement</h2>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>Layout dashboard partagé avec navigation latérale</li>
              <li>CRUD utilisateurs</li>
              <li>Affichage des commandes et de leur statut</li>
              <li>Interface simple et structurée</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Technologies</h2>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Prisma</li>
              <li>PostgreSQL</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Liens</h2>
            <div className="flex gap-4">
              <a
                href="https://admin-dashboard-m-amroune.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Démo
              </a>

              <a
                href="https://github.com/m-amroune/admin-dashboard"
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
