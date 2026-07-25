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
        className="group border-b border-white/20 py-14"
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
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
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
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="
        group relative rounded-2xl overflow-hidden
        bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-md
        border border-white/40
        hover:border-blue-400/70
        shadow-[0_0_0_1px_rgba(255,255,255,0.08),_0_10px_30px_rgba(15,23,42,0.85)]
        hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4),_0_14px_50px_rgba(59,130,246,0.4)]
        transition-all duration-400
        flex flex-col h-full
      "
    >
      {/* Project logo / preview */}
      <div className="p-3 border-b border-white/10">
        <div className="w-full h-40 flex items-center justify-center rounded-lg bg-white/5">
          <Image
            src={project.image}
            alt={project.title}
            width={320}
            height={200}
            className="max-h-full max-w-full object-contain opacity-95"
          />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Project title */}
        {path ? (
          <Link href={path} className="block text-center">
            <h3 className="text-lg font-semibold text-white mb-2 hover:underline">
              {project.title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-lg font-semibold text-white mb-2 text-center">
            {project.title}
          </h3>
        )}

        <div className="min-h-[72px] mb-3">
          <p
            className="text-[15px] text-white/70 leading-relaxed text-left overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {project.description ?? ""}
          </p>
        </div>

        {/* Technology stack  */}

        {project.tech && project.tech.length > 0 && (
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="
          px-3 py-1.5 rounded-full
          bg-white/10 border border-white/15
          text-xs text-white/80
        "
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto flex-wrap">
          {path && (
            <Link
              href={path}
              className="
                w-full text-center py-2 rounded-md
                bg-white/10 hover:bg-white/20
                text-sm text-white
                transition
              "
            >
              Présentation du projet
            </Link>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 text-center py-2 rounded-md
                bg-blue-600/85 hover:bg-blue-500
                text-white text-sm font-medium
                transition
              "
            >
              Demo
            </a>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 text-center py-2 rounded-md
                border border-white/30
                hover:bg-white/10
                text-sm text-white
                transition
              "
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
