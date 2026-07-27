"use client";

import Image from "next/image";

import Navbar from "../../../components/Navbar";
import ContactModal from "../../../components/ContactModal";

export default function AdminDashboardPage() {
  return (
    <>
      <Navbar />
      <ContactModal />

     <main className="min-h-screen bg-gradient-to-b from-[#17213A] via-[#111827] to-[#17213A] text-white">
        <div className="mx-auto max-w-5xl space-y-16 px-6 py-20">
          <section className="space-y-8 border-b border-white/10 pb-14">
            {/* Project introduction */}
            <header className="space-y-6 text-center">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Admin Dashboard
              </h1>

              <p className="mx-auto max-w-3xl text-left leading-relaxed text-slate-300">
                Application d’administration développée avec Next.js et
                TypeScript, permettant de gérer les utilisateurs, de suivre les
                commandes et leurs statuts, avec une authentification et des
                routes protégées.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://admin-dashboard-m-amroune.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-blue-600/80 px-4 py-2 transition hover:bg-blue-600"
                >
                  Démo
                </a>

                <a
                  href="https://github.com/m-amroune/admin-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-white/20 bg-white/5 px-4 py-2 transition hover:bg-white/10"
                >
                  Code
                </a>
              </div>
            </header>

            {/* Project preview */}
            <div className="group overflow-hidden rounded-2xl border border-blue-300/25 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-violet-500/15 p-6 md:p-8 shadow-[0_24px_70px_rgba(37,99,235,0.18)] transition-all duration-500 hover:border-blue-300/45 hover:shadow-[0_28px_85px_rgba(37,99,235,0.3)]">
              <Image
                src="/projects/admin_dashboard.png"
                alt="Aperçu de l’Admin Dashboard"
                width={1200}
                height={750}
                className="h-auto w-full scale-[0.96] rounded-xl shadow-2xl transition-transform duration-500 ease-out group-hover:scale-100"
                priority
              />
            </div>
          </section>

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
        </div>
      </main>
    </>
  );
}
