"use client";

import { useState } from "react";
import Link from "next/link";

import Navbar from "../components/Navbar";
import CarouselCard from "../components/CarouselCard";
import Footer from "../components/Footer";

import {
  Code2,
  Layers,
  Database,
  Wrench,
  MonitorSmartphone,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

export default function Home() {
  // Controls the active slide in the hero text card
  const [aboutIndex, setAboutIndex] = useState(0);

  // Hero text slides (content only, no dates)
 const aboutSlides = [
   { label: null, text: "Approfondissement continu à travers des projets personnels et des certifications en ligne, avec un focus sur React, Next.js, JavaScript moderne et la consolidation des fondamentaux du développement web.", },
   { label: "OpenClassrooms", text: "Formation en développement front-end axée sur la conception de sites responsives, l’intégration front-end, la consommation d’API et la réalisation de projets professionnalisants.", },
   { label: "FreeCodeCamp", text: "Parcours orienté pratique avec de nombreux projets couvrant le front-end, le back-end et les bases de données, dans une logique de rigueur et d’autonomie.", }, ];

  return (
    <>
      <Navbar />

      <main className="bg-[#0A0F1F] text-white">
        {/* ===================== HERO ===================== */}
        <section
          id="accueil"
          className="relative min-h-[80vh] flex items-center px-6 md:px-12"
        >
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-[-100px] left-[-150px]" />
            <div className="absolute w-[450px] h-[450px] bg-indigo-500/20 rounded-full blur-2xl bottom-[-150px] right-[-100px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
            {/* Left column: identity and hero content */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
                Moustapha Amroune
              </h1>

              <h2 className="text-blue-400 text-xl md:text-3xl font-semibold">
                Développeur{" "}
                <span className="whitespace-nowrap">Front-End</span> —{" "}
                <span className="whitespace-nowrap">React · Next.js</span>
              </h2>

              {/* Sliding text card */}
              <div
                className="
                  max-w-lg
                  rounded-2xl p-5
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  shadow-[0_18px_50px_rgba(0,0,0,0.35)]
                "
              >
                {aboutSlides[aboutIndex].label ? (
                  <div className="text-white/80 text-base font-semibold mb-2">
                    {aboutSlides[aboutIndex].label}
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="inline-block w-10 h-1 rounded-full bg-blue-400/80" />
                  </div>
                )}

                <p className="text-blue-100/90 leading-relaxed">
                  {aboutSlides[aboutIndex].text}
                </p>

                {/* Slide indicators */}
                <div className="flex gap-3 mt-4">
                  {aboutSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setAboutIndex(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        i === aboutIndex
                          ? "bg-white"
                          : "bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Primary actions */}
              <div className="flex gap-4 mt-6">
                <Link
                  href="/projects"
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-medium transition"
                >
                  Voir mes projets
                </Link>

                <button
                  onClick={() =>
                    window.dispatchEvent(new Event("open-contact"))
                  }
                  className="px-6 py-3 rounded-lg border border-blue-500 text-blue-300 hover:bg-blue-900/40 transition font-medium"
                >
                  Me contacter
                </button>
              </div>
            </div>

            {/* Right column: social / contact cards */}
            <div className="flex justify-center md:justify-start md:pl-10">
              <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                <a
                  href="https://github.com/m-amroune"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    rounded-2xl p-8
                    bg-white/5 border border-white/10
                    backdrop-blur-md
                    shadow-[0_20px_45px_rgba(0,0,0,0.55)]
                    hover:bg-white/10 hover:border-white/20
                    transition
                    flex items-center justify-center
                    cursor-pointer
                    hover:scale-[1.03]
                  "
                >
                  <Github size={56} className="text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/moustapha-amroune"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    rounded-2xl p-8
                    bg-white/5 border border-white/10
                    backdrop-blur-md
                    shadow-[0_20px_45px_rgba(0,0,0,0.55)]
                    hover:bg-white/10 hover:border-white/20
                    transition
                    flex items-center justify-center
                    cursor-pointer
                    hover:scale-[1.03]
                  "
                >
                  <Linkedin size={56} className="text-white" />
                </a>

                <button
                  onClick={() =>
                    window.dispatchEvent(new Event("open-contact"))
                  }
                  aria-label="Contact"
                  className="
                    col-span-2
                    rounded-2xl p-8
                    bg-white/5 border border-white/10
                    backdrop-blur-md
                    shadow-[0_20px_45px_rgba(0,0,0,0.55)]
                    hover:bg-white/10 hover:border-white/20
                    transition
                    flex items-center justify-center
                    cursor-pointer
                    hover:scale-[1.03]
                  "
                >
                  <Mail size={64} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SKILLS ===================== */}
        <section className="py-16 px-6 bg-[#0D1326] border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Compétences</h2>

            <p className="text-white/70 max-w-2xl mx-auto">
              Conception d’interfaces, intégration, logique front-end, APIs et
              bases de données.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
            <SkillCard
              icon={<Code2 size={28} className="text-blue-400" />}
              title="Langages"
              text="JavaScript, TypeScript, HTML, CSS, SQL"
            />
            <SkillCard
              icon={<Layers size={28} className="text-indigo-400" />}
              title="Stack technique"
              text="React, Next.js, Redux, Node.js, Express"
            />
            <SkillCard
              icon={<Database size={28} className="text-green-400" />}
              title="Bases de données"
              text="MongoDB (Atlas), PostgreSQL"
            />
            <SkillCard
              icon={<Wrench size={28} className="text-orange-400" />}
              title="Outils"
              text="Git, GitHub, Vite, Docker, Replit, Linux, Bash"
            />
            <SkillCard
              icon={<MonitorSmartphone size={28} className="text-purple-400" />}
              title="UX / UI"
              text="Figma, Responsive Design"
            />
          </div>
        </section>

        {/* ===================== PROJECTS ===================== */}
        <section
          id="projets"
          className="px-6 py-16 bg-[#0B0E1A] text-white border-t border-white/10"
        >
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Mes projets</h2>

            <div className="overflow-x-auto flex gap-8 snap-x snap-mandatory pb-6 scrollbar-none">
              <CarouselCard
                title="Random Quote Machine"
                image="/projects/random_quote_machine.png"
                demo="https://m-a-random-quote-machine.netlify.app/"
                repo="https://github.com/m-amroune/random-quote-machine"
                description="Random quote generator with refresh and sharing."
                tech={["React", "Vite", "JavaScript", "CSS"]}
              />

              <CarouselCard
                title="Drum Machine"
                image="/projects/drum_machine.png"
                demo="https://m-a-drum-machine.netlify.app/"
                repo="https://github.com/m-amroune/drum-machine"
                description="Interactive drum machine controlled by mouse and keyboard."
                tech={["React", "Vite", "JavaScript", "CSS"]}
              />

              <CarouselCard
                title="Markdown Previewer"
                image="/projects/markdown_previewer.png"
                demo="https://m-a-markdown-previewer.netlify.app/"
                repo="https://github.com/m-amroune/markdown-previewer"
                description="Live Markdown editor with real-time HTML preview."
                tech={["React", "Vite", "JavaScript", "CSS"]}
              />
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600/80 hover:bg-blue-700 transition border border-white/10 shadow-md hover:shadow-blue-900/30"
            >
              Voir tous les projets →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ===================== SKILL CARD ===================== */
// Simple presentational component for skill blocks
function SkillCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/10 transition hover:-translate-y-1">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-white/70 text-sm">{text}</p>
    </div>
  );
}

