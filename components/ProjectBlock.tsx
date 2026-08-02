"use client";

import Image from "next/image";

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

  const reverseLayout = project.title === "Job Tracker";

  if (path) {
    return (
      <article
        className="
          group overflow-hidden rounded-3xl
          border border-[var(--border)]
          bg-[var(--surface)]
          shadow-[var(--card-shadow)]
transition-shadow duration-500
hover:shadow-[var(--card-shadow-hover)]
        "
      >
        <div className="grid lg:grid-cols-2">
          {/* Project preview */}
          <div
            className={`p-4 md:p-5 ${
              reverseLayout ? "lg:order-2" : ""
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--background)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="
                  object-contain
                  transition-transform duration-700 ease-out
                  group-hover:scale-[1.025]
                "
              />
            </div>
          </div>

          {/* Project content */}
          <div
            className={`flex flex-col justify-center p-6 md:p-8 ${
              reverseLayout ? "lg:order-1" : ""
            }`}
          >
            <h3 className="mb-4 text-2xl font-bold text-[var(--foreground)] md:text-3xl">
              {project.title}
            </h3>

            <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {project.description ?? ""}
            </p>

            {/* Technology stack */}
            {project.tech && project.tech.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full border border-[var(--border)]
                      bg-[var(--background)] px-3 py-1.5
                      text-base text-[var(--muted)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Project actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={path}
                className="
                  cursor-pointer rounded-xl
                  border border-[var(--border)]
                  px-5 py-2.5 text-base font-medium
                  text-[var(--foreground)] transition
                  hover:border-[var(--accent)]
                  hover:bg-white/[0.05]
                "
              >
                Présentation
              </Link>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    cursor-pointer rounded-xl
                    bg-[var(--accent-strong)] px-5 py-2.5
                    text-base font-medium text-white
                    transition hover:brightness-110
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
                    cursor-pointer px-3 py-2.5
                    text-base font-medium text-[var(--muted)]
                    transition hover:text-[var(--accent)]
                  "
                >
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden
        rounded-3xl border border-[var(--border)]
        bg-[var(--surface)]
        shadow-[var(--card-shadow)]
transition-shadow duration-500
hover:shadow-[var(--card-shadow-hover)]
      "
    >
      {/* Project preview */}
      <div className="p-3">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--background)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="
              object-contain
              transition-transform duration-700 ease-out
              group-hover:scale-[1.03]
            "
          />
        </div>
      </div>

      {/* Project content */}
      <div className="flex flex-1 flex-col p-6 pt-4">
        <h3 className="mb-3 text-2xl font-semibold text-[var(--foreground)]">
          {project.title}
        </h3>

        <p className="text-base leading-relaxed text-[var(--muted)]">
          {project.description ?? ""}
        </p>

        {/* Technology stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full border border-[var(--border)]
                  bg-[var(--background)] px-3 py-1.5
                  text-base text-[var(--muted)]
                "
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Project actions */}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                cursor-pointer rounded-xl
                bg-[var(--accent-strong)] px-5 py-2.5
                text-base font-medium text-white
                transition hover:brightness-110
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
                cursor-pointer px-3 py-2.5
                text-base font-medium text-[var(--muted)]
                transition hover:text-[var(--accent)]
              "
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
