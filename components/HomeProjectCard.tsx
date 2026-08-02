import Image from "next/image";
import Link from "next/link";

type HomeProjectCardProps = {
  title: string;
  image: string;
  demo?: string;
  repo?: string;
  description?: string;
  tech?: string[];
  featured?: boolean;
};

export default function HomeProjectCard({
  title,
  image,
  demo,
  description,
  tech,
  featured = false,
}: HomeProjectCardProps) {
  const path =
    title === "Admin Dashboard"
      ? "/projects/admin-dashboard"
      : title === "Job Tracker"
        ? "/projects/job-tracker"
        : title === "GitHub Resume Generator"
          ? "/projects/github-resume-generator"
          : null;

  return (
    <article
      className={`
        group flex h-full flex-col overflow-hidden
        rounded-3xl border border-[var(--border)]
        bg-[var(--surface)]
        shadow-[var(--card-shadow)]
       transition duration-500
       hover:shadow-[var(--card-shadow-hover)]
       ${featured ? "md:col-span-2 md:mx-auto md:w-full md:max-w-4xl" : ""}
      `}
    >
      {/* Project screenshot */}
      <div className="relative aspect-video overflow-hidden bg-[var(--background)] p-4 md:p-6">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes={
              featured
                ? "(min-width: 768px) 896px, 100vw"
                : "(min-width: 768px) 432px, 100vw"
            }
            className={`
  object-contain
  transition-transform duration-700 ease-out
  ${featured ? "group-hover:scale-[1.02]" : "group-hover:scale-[1.05]"}
`}
          />
        </div>

        {/* Desktop hover overlay */}
        <div
          className="
            pointer-events-none absolute inset-0 hidden
            bg-gradient-to-t from-black/75 via-black/20 to-transparent
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100 lg:block
          "
        />

        {/* Desktop hover actions */}
        <div
          className="
            absolute inset-0 hidden items-center justify-center gap-4
            opacity-0 transition-all duration-300
            group-hover:opacity-100 lg:flex
          "
        >
          {path && (
            <Link
              href={path}
              className="
                cursor-pointer rounded-xl
                border border-white/30 bg-black/45
                px-5 py-2.5 text-base font-medium text-white
                backdrop-blur-md transition
                hover:border-white/60 hover:bg-black/65
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
                cursor-pointer rounded-xl
                bg-[var(--accent-strong)]
                px-5 py-2.5 text-base font-medium text-white
                transition hover:brightness-110
              "
            >
              Démo
            </a>
          )}
        </div>
      </div>

      {/* Project content */}
      <div className="flex flex-1 flex-col items-center p-6 text-center md:p-7">
        <h3
          className="
            mb-3 text-2xl font-bold leading-tight
            text-[var(--foreground)] transition-colors duration-300
            group-hover:text-[var(--accent)]
          "
        >
          {title}
        </h3>

        <p className="w-full max-w-3xl text-left text-base leading-relaxed text-[var(--muted)]">
          {description}
        </p>

        {/* Technology stack */}
        {tech && tech.length > 0 && (
          <div className="mt-auto flex flex-wrap justify-center gap-2 pt-6">
            {tech.map((item) => (
              <span
                key={item}
                className="
                  rounded-full border border-[var(--border)]
                  bg-[var(--background)] px-3 py-1.5
                  text-base font-medium text-[var(--muted)]
                  transition
                  group-hover:border-[var(--accent)]/40
                "
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Mobile and tablet actions */}
        {/* Project actions */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {path && (
            <Link
              href={path}
              className="
                cursor-pointer rounded-xl
                border border-[var(--border)]
                px-5 py-2.5 text-base font-medium
                text-[var(--foreground)] transition
                hover:border-[var(--accent)]
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
                cursor-pointer rounded-xl
                bg-[var(--accent-strong)]
                px-5 py-2.5 text-base font-medium text-white
                transition hover:brightness-110
              "
            >
              Démo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
