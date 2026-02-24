"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Props for a project card displayed in the home carousel
type CarouselProps = {
  title: string;
  image: string;
  demo?: string;
  repo?: string;
  description?: string;
  tech?: string[];
};

export default function CarouselCard({
  title,
  image,
  demo,
  repo,
  description,
  tech,
}: CarouselProps) {
  // Path to dedicated project page (only for personal projects)
  const path =
    title === "Admin Dashboard"
      ? "/projects/admin-dashboard"
      : title === "Job Tracker"
        ? "/projects/job-tracker"
        : title === "GitHub Resume Generator"
          ? "/projects/github-resume-generator"
          : null;

  return (
    <motion.div
      className="
        snap-center min-w-[300px] max-w-[300px] sm:min-w-[340px] sm:max-w-[340px]
        rounded-2xl overflow-hidden
        bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-md
        border border-white/40
        hover:border-blue-400/70
        shadow-[0_0_0_1px_rgba(255,255,255,0.08),_0_10px_30px_rgba(15,23,42,0.85)]
        hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4),_0_14px_50px_rgba(59,130,246,0.4)]
        transition-all duration-400
        flex flex-col
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Project preview image */}
      <div className="p-3 border-b border-white/10">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-40 object-contain rounded-lg bg-white/5"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        {/* Project title */}
        <h3 className="text-white text-lg font-semibold mb-2 text-center">
          {title}
        </h3>

        {/* Project description */}
        <div className="min-h-[72px] mb-3">
          <p
            className="text-[15px] text-white/70 leading-relaxed overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description ?? ""}
          </p>
        </div>

        {/* Technology stack */}
        {tech && tech.length > 0 && (
          <div className="min-h-[44px] mb-3 flex flex-wrap items-center justify-center gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm text-white/80 leading-none"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-auto space-y-3">
          {path && (
            <Link
              href={path}
              className="
        block w-full text-center py-2 rounded-md
        border border-white/30
        hover:bg-white/10
        text-sm text-white
        transition
      "
            >
              Présentation
            </Link>
          )}

          <div className="flex gap-3">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
          flex-1 text-center py-2 rounded-md
          bg-blue-600/85 hover:bg-blue-500
          text-white text-sm font-medium
          transition
        "
              >
                Démo
              </a>
            )}

            {repo && (
              <a
                href={repo}
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
      </div>
    </motion.div>
  );
}
