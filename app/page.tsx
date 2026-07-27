"use client";

import { useState } from "react";
import Link from "next/link";

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
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

export default function Home() {
  // Controls the active slide in the hero text card
  const [aboutIndex, setAboutIndex] = useState(0);

  // Hero text slides (content only, no dates)
  const aboutSlides = [
    {
      label: null,
      text: "J’approfondis ma pratique du développement web en travaillant sur des projets personnels, en parallèle de certifications en ligne. Mon axe principal est React, Next.js et TypeScript, avec un travail complémentaire sur le back-end et les bases de données.",
    },
    {
      label: "OpenClassrooms",
      text: "J’ai suivi le parcours Front-End d’OpenClassrooms, basé sur la réalisation de projets complets. J’y ai travaillé l’intégration responsive, React, les appels API et l’organisation du code.",
    },
    {
      label: "FreeCodeCamp",
      text: "Avec FreeCodeCamp, j’ai complété ma pratique sur JavaScript, React, le back-end et les bases de données. Ce parcours m’a aidé à relier le front-end à la logique serveur et à la gestion des données.",
    },
  ];

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

      <main className="bg-[#0A0F1F] text-white">
        {/* ===================== HERO ===================== */}
        <section
          id="accueil"
          className="relative min-h-[70vh] flex items-center px-6 md:px-12 lg:px-16"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-[-100px] left-[-150px]" />
            <div className="absolute w-[450px] h-[450px] bg-indigo-500/20 rounded-full blur-2xl bottom-[-150px] right-[-100px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-12 max-w-7xl mx-auto">
            {/* Left column: identity and hero content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Moustapha Amroune
              </h1>

              <h2 className="text-blue-400 text-2xl md:text-4xl font-semibold">
                Développeur <span className="whitespace-nowrap">Front-End</span>{" "}
                <span className="whitespace-nowrap">
                  React · Next.js · TypeScript
                </span>
              </h2>

           

              {/* Primary actions */}
              <div className="flex gap-4 mt-6">
                <Link
                  href="/projects"
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-medium transition"
                >
                  Voir mes projets
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    window.dispatchEvent(new Event("open-contact"))
                  }
                  className="px-6 py-3 rounded-lg border border-blue-500 text-blue-300 hover:bg-blue-900/40 transition font-medium"
                >
                  Me contacter
                </button>
              </div>
            </div>

            {/* Right column: social / contact cards */}
            <div className="flex justify-center md:justify-start md:pl-10">
              <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                <a
                  href="https://github.com/m-amroune"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    rounded-2xl p-8
                    bg-white/5 border border-white/10
                    backdrop-blur-md
                    shadow-[0_20px_45px_rgba(0,0,0,0.55)]
                    hover:bg-white/10 hover:border-white/20
                    transition
                    flex items-center justify-center
                    cursor-pointer
                    hover:scale-[1.03]
                  "
                >
                  <Github size={56} className="text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/moustapha-amroune-839986182/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    rounded-2xl p-8
                    bg-white/5 border border-white/10
                    backdrop-blur-md
                    shadow-[0_20px_45px_rgba(0,0,0,0.55)]
                    hover:bg-white/10 hover:border-white/20
                    transition
                    flex items-center justify-center
                    cursor-pointer
                    hover:scale-[1.03]
                  "
                >
                  <Linkedin size={56} className="text-white" />
                </a>

                <button
                  onClick={() =>
                    window.dispatchEvent(new Event("open-contact"))
                  }
                  aria-label="Contact"
                  className="
                    col-span-2
                    rounded-2xl p-8
                    bg-white/5 border border-white/10
                    backdrop-blur-md
                    shadow-[0_20px_45px_rgba(0,0,0,0.55)]
                    hover:bg-white/10 hover:border-white/20
                    transition
                    flex items-center justify-center
                    cursor-pointer
                    hover:scale-[1.03]
                  "
                >
                  <Mail size={64} className="text-white" />
                </button>
              </div>
            </div>
          </div>
       </section>

{/* ===================== ABOUT ===================== */}
<section
  id="a-propos"
  className="border-t border-white/10 bg-[#0D1326] px-6 py-20"
>
  <div className="mx-auto max-w-6xl">
    <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
      À propos
    </h2>

    <div
      className="
        mx-auto max-w-3xl
        rounded-2xl border border-white/10
        bg-white/5 p-6 backdrop-blur-md
        shadow-[0_18px_50px_rgba(0,0,0,0.35)]
      "
    >
      {aboutSlides[aboutIndex].label ? (
        <div className="mb-2 text-base font-semibold text-white/80">
          {aboutSlides[aboutIndex].label}
        </div>
      ) : (
        <div className="mb-4">
          <span className="inline-block h-1 w-10 rounded-full bg-blue-400/80" />
        </div>
      )}

      <p className="text-lg leading-relaxed text-blue-100/90">
        {aboutSlides[aboutIndex].text}
      </p>

      <div className="mt-5 flex gap-3">
        {aboutSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setAboutIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === aboutIndex
                ? "bg-white"
                : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>

    {/* Skills */}
    <div className="mt-16 border-t border-white/10 pt-16">
      <div className="space-y-4 text-center">
        <h3 className="text-3xl font-bold md:text-4xl">Compétences</h3>

        <p className="mx-auto max-w-2xl text-white/70">
          Conception d’interfaces, intégration, logique front-end, APIs et
          bases de données.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SkillCard
          icon={<Code2 size={28} className="text-blue-400" />}
          title="Langages"
          text="JavaScript, TypeScript, Python, HTML, CSS, SASS, Tailwind, SQL"
        />
        <SkillCard
          icon={<Layers size={28} className="text-indigo-400" />}
          title="Stack technique"
          text="React, Next.js, Redux, Node.js, Express"
        />
        <SkillCard
          icon={<Database size={28} className="text-green-400" />}
          title="Bases de données"
          text="MongoDB (Atlas), PostgreSQL"
        />
        <SkillCard
          icon={<Wrench size={28} className="text-orange-400" />}
          title="Outils"
          text="Git, GitHub, Vite, Docker, Replit, Linux, Bash"
        />
        <SkillCard
          icon={<MonitorSmartphone size={28} className="text-purple-400" />}
          title="UX / UI"
          text="Figma, Responsive Design"
        />
      </div>
    </div>
  </div>
</section>

        {/* ===================== PROJECTS ===================== */}
        <section
          id="projets"
         className="px-6 py-20 bg-gradient-to-b from-[#17213A] via-[#111827] to-[#17213A] text-white border-t border-white/10"
        >
          <div className="max-w-5xl mx-auto space-y-10">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600/80 hover:bg-blue-700 transition border border-white/10 shadow-md hover:shadow-blue-900/30"
              >
                Voir tous les projets →
              </Link>
            </div>
          </div>
                </section>

        {/* ===================== CONTACT ===================== */}
        <section
          id="contact"
          className="border-t border-white/10 bg-[#0D1326] px-6 py-20"
        >
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-10 text-3xl font-bold md:text-4xl">
              Contact
            </h2>

            <ContactModal inline />
          </div>
        </section>
      </main>

      <ContactModal />
      <Footer />
    </>
  );
}

/* ===================== SKILL CARD ===================== */
// Simple presentational component for skill blocks
function SkillCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/10 transition hover:-translate-y-1">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-white/70 text-sm">{text}</p>
    </div>
  );
}
