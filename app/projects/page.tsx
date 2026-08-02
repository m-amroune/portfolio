"use client";

import { motion } from "framer-motion";

import Navbar from "../../components/Navbar";
import ProjectBlock from "../../components/ProjectBlock";
import { projects } from "./projects-data";

export default function Projets() {
  // Separate personal projects and training projects
  const personalProjects = projects.filter((p) => p.type === "personal");
  const trainingProjects = projects.filter((p) => p.type !== "personal");

  return (
  <>
    <Navbar />

    <main className="min-h-screen bg-[var(--background)] px-6 pb-24 pt-32 text-[var(--foreground)]">
      <section className="mx-auto max-w-6xl">
        {/* Page header */}
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="mb-5 text-4xl font-extrabold md:text-5xl">
            Projets
          </h1>

          <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Sélection de projets personnels ou réalisés dans le cadre de mes
            parcours de formation.
          </p>
        </header>

        {/* Personal projects section */}
<section aria-labelledby="personal-projects" className="mb-24">
  <div className="mb-10 flex items-center gap-4">
    <span className="h-8 w-1 rounded-full bg-[var(--accent)]" />

    <h2
      id="personal-projects"
      className="text-3xl font-bold text-[var(--foreground)] md:text-4xl"
    >
      Projets personnels
    </h2>
  </div>

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
    className="grid gap-8"
  >
    {personalProjects.map((project) => (
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

{/* Training projects section */}
<section aria-labelledby="training-projects">
  <div className="mb-10 flex items-center gap-4">
    <span className="h-8 w-1 rounded-full bg-[var(--accent)]" />

    <h2
      id="training-projects"
      className="text-3xl font-bold text-[var(--foreground)] md:text-4xl"
    >
      Projets de formation
    </h2>
  </div>

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
    className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3"
  >
    {trainingProjects.map((project) => (
      <motion.div
        key={project.title}
        className="h-full"
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
</section>
      </main>
    </>
  );
}
