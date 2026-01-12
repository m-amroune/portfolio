"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

        {/* Project description (reserved height for layout stability) */}
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

        {/* Technology stack (wrap enabled, fixed vertical space) */}
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
        <div className="flex gap-3 mt-auto">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
            >
              Démo
            </a>
          )}

          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900 transition"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
