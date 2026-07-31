"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HomeProjectCard from "../components/HomeProjectCard";
import Footer from "../components/Footer";
import ContactModal from "@/components/ContactModal";

import {
  Code2,
  Layers,
  Database,
  Wrench,
  MonitorSmartphone,
  Linkedin,
  Github,
} from "lucide-react";

export default function Home() {
  // Hero text slides
  const aboutContent = {
    intro:
      "J’approfondis ma pratique du développement web en travaillant sur des projets personnels, en parallèle de certifications en ligne. Mon axe principal est React, Next.js et TypeScript, avec un travail complémentaire sur le back-end et les bases de données.",
    openClassrooms:
      "J’ai suivi un parcours de formation développeur d'applications Javascript React chez OpenClassrooms, basé sur la réalisation de projets complets. J’y ai travaillé l’intégration responsive, React, les appels API et l’organisation du code.",
    freeCodeCamp:
      "Avec FreeCodeCamp, j’ai complété ma pratique sur JavaScript, React, le back-end et les bases de données. Ce parcours m’a aidé à relier le front-end à la logique serveur et à la gestion des données.",
  };

  // Projects displayed on the home page
  const projects = [
    {
      title: "Admin Dashboard",
      image: "/projects/admin_dashboard.png",
      demo: "https://admin-dashboard-m-amroune.vercel.app/login",
      repo: "https://github.com/m-amroune/admin-dashboard",
      description:
        "Interface d’administration permettant de gérer des utilisateurs et des commandes avec authentification et opérations CRUD.",
      tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "Tailwind"],
    },
    {
      title: "Job Tracker",
      image: "/projects/job_tracker.png",
      demo: "https://m-a-job-tracker.vercel.app/",
      repo: "https://github.com/m-amroune/job-tracker",
      description:
        "Application de suivi de candidatures avec gestion des statuts, filtres et mise à jour des informations.",
      tech: ["Next.js", "TypeScript", "React"],
    },
    {
      title: "GitHub Resume Generator",
      image: "/projects/github_resume_generator.png",
      demo: "https://m-a-github-resume-generator.vercel.app/",
      repo: "https://github.com/m-amroune/github-resume-generator",
      description:
        "Génération d’un CV à partir d’un profil GitHub public avec sélection des repositories et gestion des erreurs API.",
      tech: ["Next.js", "TypeScript", "React", "Tailwind"],
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* ===================== HERO ===================== */}
<section
  id="accueil"
  className="relative flex min-h-[70vh] items-center overflow-hidden px-6 pb-24 pt-32 sm:min-h-[58vh] sm:pb-20 sm:pt-32 md:px-12 lg:min-h-[70vh] lg:px-16 lg:pb-24 lg:pt-32"
>
  {/* Background decoration */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[-150px] top-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
    <div className="absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-indigo-500/20 blur-2xl" />
  </div>

  <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 sm:grid-cols-[minmax(0,1fr)_5rem] sm:gap-8 md:gap-12 lg:gap-16">
    {/* Left column: identity and hero content */}
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
        Moustapha Amroune
      </h1>

      <h2 className="text-2xl font-semibold leading-tight text-[var(--accent)] md:text-4xl">
  Développeur Front-End
  <span className="block">React · Next.js · TypeScript</span>
</h2>

{/* Primary actions */}
<div className="flex flex-wrap gap-4 pt-2">
  <Link
    href="#projets"
    className="
      cursor-pointer rounded-lg
      bg-[var(--accent-strong)] px-6 py-3
      text-base font-medium text-white
      transition hover:brightness-110
    "
  >
    Voir mes projets
  </Link>

  <Link
    href="#contact"
    className="
      cursor-pointer rounded-lg
      border border-[var(--accent)]
      px-6 py-3 text-base font-medium
      text-[var(--accent)]
      transition hover:bg-white/[0.06]
    "
  >
    Me contacter
  </Link>
</div>
    </div>

    {/* Right column: social links */}
    <div className="flex justify-center sm:-translate-x-4 sm:justify-end md:-translate-x-12 lg:-translate-x-24">
      <div className="flex items-center gap-5 sm:gap-7">
        <div className="hidden h-36 w-px bg-[var(--border)] sm:block" />

<div className="flex items-center gap-5 sm:flex-col sm:gap-7">
  <a
    href="https://github.com/m-amroune"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="cursor-pointer p-2 text-[var(--muted)] transition hover:-translate-y-1 hover:text-[var(--accent)]"
  >
    <Github size={46} />
  </a>

  <a
    href="https://www.linkedin.com/in/moustapha-amroune-839986182/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="cursor-pointer p-2 text-[var(--muted)] transition hover:-translate-y-1 hover:text-[var(--accent)]"
  >
    <Linkedin size={46} />
  </a>
</div>
      </div>
    </div>
  </div>
</section>

        {/* ===================== ABOUT ===================== */}
        <section
          id="a-propos"
          className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--surface)] px-6 py-16 md:py-24"
        >
          <motion.div
  className="mx-auto max-w-6xl"
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 2, ease: "easeOut" }}
>
            <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
              À propos
            </h2>

            <div className="mx-auto max-w-2xl space-y-6">
  <p className="text-justify text-lg leading-8 text-[var(--muted)]">
    {aboutContent.intro}
  </p>

  <p className="text-justify text-lg leading-8 text-[var(--muted)]">
    {aboutContent.openClassrooms}
  </p>

  <p className="text-justify text-lg leading-8 text-[var(--muted)]">
    {aboutContent.freeCodeCamp}
  </p>
</div>

            {/* Skills */}
            <div className="mt-16 border-t border-[var(--border)] pt-16">
  <div className="space-y-4 text-center">
    <h3 className="text-3xl font-bold md:text-4xl">Compétences</h3>

    <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
      Conception d’interfaces, intégration, logique front-end, APIs et
      bases de données.
    </p>
  </div>

              <motion.div
  className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6"
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
                <SkillCard
                  className="lg:col-span-2"
                  icon={<Code2 size={28} className="text-blue-400" />}
                  title="Langages"
                  text="JavaScript, TypeScript, Python, HTML, CSS, SASS, Tailwind, SQL"
                />

                <SkillCard
                  className="lg:col-span-2"
                  icon={<Layers size={28} className="text-indigo-400" />}
                  title="Stack technique"
                  text="React, Next.js, Redux, Node.js, Express"
                />

                <SkillCard
                  className="lg:col-span-2"
                  icon={<Database size={28} className="text-green-400" />}
                  title="Bases de données"
                  text="MongoDB (Atlas), PostgreSQL"
                />

                <SkillCard
                  className="lg:col-span-2 lg:col-start-2"
                  icon={<Wrench size={28} className="text-orange-400" />}
                  title="Outils"
                  text="Git, GitHub, Vite, Docker, Replit, Linux, Bash"
                />

                <SkillCard
                  className="lg:col-span-2"
                  icon={
                    <MonitorSmartphone size={28} className="text-purple-400" />
                  }
                  title="UX / UI"
                  text="Figma, Responsive Design"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ===================== PROJECTS ===================== */}
        <section
          id="projets"
         className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--background)] px-6 py-16 text-[var(--foreground)] md:py-24"
        >
          <motion.div
  className="mx-auto max-w-5xl space-y-10"
  initial={{ opacity: 0, scale: 0.98 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.12 }}
  transition={{ duration: 1.4, ease: "easeOut" }}
>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Mes projets</h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.95fr_1.15fr]">
              <HomeProjectCard {...projects[0]} variant="tall" />

              <div className="grid gap-5">
                <HomeProjectCard {...projects[1]} variant="wide" />
                <HomeProjectCard {...projects[2]} variant="wide" />
              </div>
            </div>

            <div className="text-center">
            <Link
  href="/projects"
  className="
    inline-flex cursor-pointer items-center gap-2
    rounded-xl border border-[var(--border)]
    bg-[var(--surface)] px-6 py-3
    text-base font-medium text-[var(--foreground)]
    transition
    hover:border-[var(--accent)]
    hover:text-[var(--accent)]
  "
>
  Voir tous les projets →
</Link>
            </div>
          </motion.div>
        </section>

        {/* ===================== CONTACT ===================== */}
<section
  id="contact"
  className="scroll-mt-20 overflow-hidden border-t border-[var(--border)] bg-[var(--surface-soft)] px-6 py-16 md:py-24"
>
  <motion.div
    className="mx-auto max-w-5xl"
    initial={{ opacity: 0, x: 32 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 1.4, ease: "easeOut" }}
  >
    <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
      Contact
    </h2>

    <ContactModal inline />
  </motion.div>
</section>
      </main>

      <ContactModal />
      <Footer />
    </>
  );
}

/* ===================== SKILL CARD ===================== */

function SkillCard({
  icon,
  title,
  text,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
}) {
  return (
   <div
  className={`
    rounded-2xl border border-[var(--border)]
    bg-[var(--background)] p-6
    transition duration-300
    hover:-translate-y-1
    hover:border-[var(--accent)]/40
    ${className}
  `}
>
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-base leading-relaxed text-[var(--muted)]">{text}</p>
    </div>
  );
}
