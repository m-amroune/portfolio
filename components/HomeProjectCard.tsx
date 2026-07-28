import Image from "next/image";
import Link from "next/link";

type HomeProjectCardProps = {
  title: string;
  image: string;
  demo?: string;
  repo?: string;
  description?: string;
  tech?: string[];
  variant?: "tall" | "wide";
};

export default function HomeProjectCard({
  title,
  image,
  demo,
  description,
  tech,
  variant = "wide",
}: HomeProjectCardProps) {
  const path =
    title === "Admin Dashboard"
      ? "/projects/admin-dashboard"
      : title === "Job Tracker"
        ? "/projects/job-tracker"
        : title === "GitHub Resume Generator"
          ? "/projects/github-resume-generator"
          : null;

  const isTall = variant === "tall";

  return (
    <article
      className={`
        group overflow-hidden rounded-3xl
        border border-white/15 bg-[#111827]
        shadow-[0_22px_70px_rgba(0,0,0,0.55)]
        ring-1 ring-white/[0.03]
        transition duration-300 hover:border-blue-400/35 hover:bg-[#141b2a]
        ${isTall ? "h-full" : ""}
      `}
    >
      <div
        className={`
          h-full
          ${isTall ? "flex flex-col" : "grid lg:grid-cols-[42%_1fr]"}
        `}
      >
        {/* Project screenshot */}
        <div
          className={`
            bg-white/[0.035] p-4
            ${isTall ? "border-b border-white/10" : "border-b border-white/10 lg:border-b-0 lg:border-r"}
          `}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#020617]">
            <Image
              src={image}
              alt={title}
              width={900}
              height={520}
              className={`
    w-full object-contain
    ${isTall ? "h-[230px]" : "h-[210px]"}
  `}
            />
          </div>
        </div>

        {/* Project content */}
        <div
          className={`
    flex flex-col text-left
    ${isTall ? "flex-1 justify-start p-7" : "justify-center p-7"}
  `}
        >
          {/* Project title */}
          <h3 className="mb-3 text-2xl font-bold leading-tight text-white">
            {title}
          </h3>

          {/* Project description */}
          <p className="mb-5 text-white/65 leading-relaxed">{description}</p>

          {/* Technology stack */}
          {tech && tech.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Project actions */}
          <div
            className={`flex flex-wrap gap-3 ${isTall ? "mt-auto pt-6" : ""}`}
          >
            {path && (
              <Link
                href={path}
                className="
                  rounded-lg border border-white/15 bg-white/5
                  px-4 py-2 text-white/85
                  hover:bg-white/10 transition
                "
              >
                Présentation
              </Link>
            )}

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-lg bg-blue-600
                  px-5 py-2 font-medium text-white
                  hover:bg-blue-500 transition
                "
              >
                Démo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
