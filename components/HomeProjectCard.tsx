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
    border border-[var(--border)]
    bg-[var(--surface)]
    shadow-[0_18px_50px_rgba(0,0,0,0.28)]
    transition duration-300
    hover:-translate-y-1
    hover:border-[var(--accent)]
    hover:bg-[var(--surface-soft)]
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
    bg-[var(--background)] p-3
    ${
      isTall
        ? "border-b border-[var(--border)]"
        : "border-b border-[var(--border)] lg:border-b-0 lg:border-r"
    }
  `}
        >
          <div className="relative overflow-hidden rounded-xl bg-[var(--surface-soft)]">
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
        <p className="mb-5 text-base leading-relaxed text-[var(--muted)]">
  {description}
</p>
          {/* Technology stack */}
          {tech && tech.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-base font-medium text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Project actions */}
    <div
  className={`flex flex-wrap gap-3 ${
    isTall ? "mt-auto pt-6" : ""
  }`}
>
  {path && (
    <Link
      href={path}
      className="
        cursor-pointer rounded-xl
        border border-[var(--border)]
        px-5 py-2.5 text-base font-medium
        text-[var(--foreground)] transition
        hover:border-[var(--accent)] hover:bg-white/[0.05]
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
        bg-[var(--accent-strong)] px-5 py-2.5
        text-base font-medium text-white
        transition hover:brightness-110
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
