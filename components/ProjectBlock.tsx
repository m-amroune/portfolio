"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Project card used on the Projects page grid
type Project = {
  title: string;
  demo?: string;
  repo?: string;
  image: string;
  description?: string;
  tech?: string[];
};

export default function ProjectBlock({ project }: { project: Project }) {
  const path =
    project.title === "Admin Dashboard"
      ? "/projects/admin-dashboard"
      : project.title === "Job Tracker"
        ? "/projects/job-tracker"
        : project.title === "GitHub Resume Generator"
          ? "/projects/github-resume-generator"
          : null;

  // Alternate the image position for personal projects
  const reverseLayout = project.title === "Job Tracker";

  if (path) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="group border-b border-white/20 py-10 md:py-14"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Project preview */}
          <div className={reverseLayout ? "lg:order-2" : ""}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-blue-400/70 hover:shadow-[0_0_0_1px_rgba(96,165,250,0.45),_0_0_28px_rgba(59,130,246,0.35),_0_20px_50px_rgba(0,0,0,0.3)]">
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={560}
                className="h-full w-full rounded-xl object-contain brightness-90 contrast-105 transition duration-500 group-hover:brightness-100"
              />

              <div className="pointer-events-none absolute inset-0 bg-[#020617]/5" />
            </div>
          </div>

          {/* Project content */}
          <div className={`text-left ${reverseLayout ? "lg:order-1" : ""}`}>
            <h3 className="mb-4 text-center text-2xl font-bold text-white md:text-3xl">
              {project.title}
            </h3>

            <p className="mb-5 leading-relaxed text-white/70">
              {project.description ?? ""}
            </p>

            {/* Technology stack */}
            {project.tech && project.tech.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Project actions */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={path}
                className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white/10"
              >
                Présentation
              </Link>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  Démo
                </a>
              )}

              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 text-sm text-white/60 transition hover:text-white"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex h-full flex-col"
    >
      {/* Project preview */}
      <div
        className="
    relative h-52 overflow-hidden rounded-2xl
    border border-white/10 bg-white/[0.04] p-2
    shadow-[0_16px_40px_rgba(0,0,0,0.25)]
    transition-all duration-300
    hover:border-blue-400/60
    hover:shadow-[0_0_24px_rgba(59,130,246,0.25)]
  "
      >
        <Image
          src={project.image}
          alt={project.title}
          width={640}
          height={400}
          className="
      h-full w-full rounded-xl object-contain
      brightness-90 contrast-105
      transition duration-500
      group-hover:scale-[1.01] group-hover:brightness-100
    "
        />

        <div className="pointer-events-none absolute inset-0 bg-[#020617]/15" />
      </div>

      {/* Project content */}
      <div className="flex flex-1 flex-col pt-5 text-center">
        <h3 className="mb-2 text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-white/65">
          {project.description ?? ""}
        </p>

        {/* Technology stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                rounded-full border border-white/10
                bg-white/[0.05] px-3 py-1
                text-xs text-white/65
              "
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Project actions */}
        <div className="mt-auto flex items-center justify-center gap-4 border-t border-white/10 pt-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
              rounded-lg bg-blue-600 px-4 py-2
              text-sm font-medium text-white
              transition hover:bg-blue-500
            "
            >
              Démo
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-sm text-white/55
              transition hover:text-white
            "
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
