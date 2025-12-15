"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        flex flex-col
      "
    >
      {/* Project logo / preview */}
      <div className="relative w-full h-40 flex items-center justify-center bg-white/5 border-b border-white/10">
        <Image
          src={project.image}
          alt={project.title}
          width={320}
          height={200}
          className="max-h-full max-w-full object-contain opacity-95"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Project title */}
        <h3 className="text-lg font-semibold text-white mb-2 text-center">
          {project.title}
        </h3>

        {/* Short description with line clamp */}
        {project.description && (
          <p
            className="text-[15px] text-white/70 leading-relaxed text-left mb-3 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {project.description}
          </p>
        )}

        {/* Technology stack (horizontal scroll if needed) */}
        {project.tech && project.tech.length > 0 && (
          <div
            className="
              flex flex-nowrap items-center justify-center gap-2
              overflow-x-auto pb-1 mb-4
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {project.tech.map((t) => (
              <span
                key={t}
                className="
                  shrink-0 inline-flex items-center justify-center
                  px-3 py-1.5 rounded-full
                  bg-white/10 border border-white/15
                  text-xs text-white/80 leading-none whitespace-nowrap
                "
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 mt-auto">
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
              Démo
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









