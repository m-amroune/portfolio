"use client";

import { motion } from "framer-motion";

import Navbar from "../../components/Navbar";
import ProjectBlock from "../../components/ProjectBlock";
import ContactModal from "../../components/ContactModal";
import { projects } from "./projects-data";

export default function Projets() {
  // Separate personal projects and training projects
  const personalProjects = projects.filter((p) => p.type === "personal");
  const trainingProjects = projects.filter((p) => p.type !== "personal");

  return (
    <>
      <Navbar />
      <ContactModal />
      <main className="min-h-screen px-4 py-20 bg-[#020617]">
        <section className="max-w-6xl mx-auto">
          {/* Page header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Projets
            </h1>

            <p className="text-sm md:text-base text-slate-300/80 max-w-2xl mx-auto">
              Sélection de projets personnels ou réalisés dans le cadre de mes
              parcours de formation.
            </p>
          </header>

          {/* Personal projects section */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Projets personnels
          </h2>

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
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 items-stretch mb-20"
          >
            {personalProjects.map((project) => (
              <motion.div
                className="h-full"
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

          {/* Training projects section */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Projets de formation
          </h2>

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
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 items-stretch"
          >
            {trainingProjects.map((project) => (
              <motion.div
                className="h-full"
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
