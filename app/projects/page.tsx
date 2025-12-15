"use client";

import { motion } from "framer-motion";

import Navbar from "../../components/Navbar";
import ProjectBlock from "../../components/ProjectBlock";

// Project list displayed on the Projects page
const projects = [
  {
    title: "Random Quote Machine",
    demo: "https://m-a-random-quote-machine.netlify.app/",
    repo: "https://github.com/m-amroune/random-quote-machine",
    image: "/projects/random_quote_machine.png",
    description:
      "Générateur de citations aléatoires avec bouton de rafraîchissement et partage.",
    tech: ["JavaScript", "React", "Vite", "CSS"],
  },
  {
    title: "Markdown Previewer",
    demo: "https://m-a-markdown-previewer.netlify.app/",
    repo: "https://github.com/m-amroune/markdown-previewer",
    image: "/projects/markdown_previewer.png",
    description:
      "Éditeur Markdown avec aperçu HTML en temps réel (style GitHub-flavored).",
    tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    title: "Drum Machine",
    demo: "https://m-a-drum-machine.netlify.app/",
    repo: "https://github.com/m-amroune/drum-machine",
    image: "/projects/drum_machine.png",
    description:
      "Boîte à rythmes interactive pilotable à la souris et au clavier (audio pads).",
    tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    title: "JavaScript Calculator",
    demo: "https://m-a-javascript-calculator.netlify.app/",
    repo: "https://github.com/m-amroune/calculator-javascript",
    image: "/projects/javascript_calculator.png",
    description:
      "Calculatrice responsive avec gestion des enchaînements d’opérations et décimales.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    title: "25 + 5 Clock",
    demo: "https://m-a-25-5-clock.netlify.app/",
    repo: "https://github.com/m-amroune/25-5-clock",
    image: "/projects/25_5_clock.png",
    description:
      "Minuteur Pomodoro complet avec gestion des sessions et des pauses.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
  {
    title: "API Exercise Tracker",
    repo: "https://github.com/m-amroune/exercice-tracker",
    image: "/projects/exercise_tracker.png",
    description:
      "API permettant de créer des utilisateurs, enregistrer des exercices et consulter l’historique.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Kasa",
    demo: "https://kasa-m-amroune.netlify.app/",
    repo: "https://github.com/m-amroune/kasa",
    image: "/projects/kasa.png",
    description:
      "Application de location immobilière avec navigation dynamique et composants réutilisables.",
    tech: ["JavaScript", "React", "React Router", "CSS"],
  },
  {
    title: "Fisheye",
    demo: "https://fisheye-m-amroune.netlify.app/",
    repo: "https://github.com/m-amroune/Fisheye",
    image: "/projects/fisheye.png",
    description:
      "Plateforme de photographes avec modales, filtres et forte attention à l’accessibilité.",
    tech: ["HTML", "Sass", "JavaScript"],
  },
  {
    title: "Les Petits Plats",
    demo: "https://les-petits-plats-m-amroune.netlify.app/",
    repo: "https://github.com/m-amroune/les_petits_plats",
    image: "/projects/les_petits_plats.png",
    description:
      "Moteur de recherche de recettes avec filtres multi-critères en JavaScript.",
    tech: ["HTML", "Sass", "JavaScript"],
  },
  {
    title: "URL Shortener Microservice",
    repo: "https://github.com/m-amroune/url-shortener-ms",
    image: "/projects/url_shortener_microservice.png",
    description:
      "Microservice de raccourcissement d’URL avec validation et redirection.",
    tech: ["JavaScript", "Node.js", "Express"],
  },
  {
    title: "Salon Appointment Scheduler",
    repo: "https://github.com/m-amroune/salon-appointment-scheduler",
    image: "/projects/salon_appointment_scheduler.png",
    description:
      "CLI tool to manage a salon appointment system (services, clients, schedules).",
    tech: ["PostgreSQL", "SQL", "Linux", "Bash"],
  },
  {
    title: "Celestial Bodies Database",
    repo: "https://github.com/m-amroune/celestial-bodies-database",
    image: "/projects/celestial_bodies_database.png",
    description:
      "Normalized PostgreSQL database modeling galaxies, stars, planets and moons.",
    tech: ["PostgreSQL", "SQL", "Linux", "Bash"],
  },
];

export default function Projets() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-4 py-20 bg-[#020617]">
        <section className="max-w-6xl mx-auto">
          {/* Page header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Projets
            </h1>

            <p className="text-sm md:text-base text-slate-300/80 max-w-2xl mx-auto">
              Une sélection de projets front-end, back-end et bases de données,
              réalisés avec JavaScript, React, Next.js, Node.js, PostgreSQL et MongoDB,
              issus des parcours OpenClassrooms et FreeCodeCamp.
            </p>
          </header>

          {/* Project grid with staggered animations */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <ProjectBlock project={project} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </>
  );
}










