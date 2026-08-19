"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "StudyThread",
    description: "AI powered study and note taking app.",
    tags: ["AI", "Education", "Productivity"],
    image: "/images/studythread.png",
    link: "https://studythread.fly.dev",
  },
  {
    title: "UWNest",
    description: "Waterloo-based social network that helps students find community and campus opportunities.",
    tags: ["Social", "Student Life", "Community"],
    image: "/images/uwnests-social.png",
    link: "https://github.com/gavin-St/project-program",
  },
  {
    title: "NestTrade Trading Bot",
    description: "Multiple algorithmic live trading accounts running on custom automation infrastructure.",
    tags: ["Automation", "Trading", "Live Ops"],
    image: "/images/nesttrade-trading-bot.png",
    link: "https://github.com/gavin-St/trading-bot",
  },
  {
    title: "Cadence",
    description: "Elegant music licensing distributor that simplifies releases for independent artists.",
    tags: ["Music", "Licensing", "Platform"],
    image: "/images/cadence-platform.png",
    link: "https://github.com/gavin-St/Cadence",
  },
  {
    title: "Light Dance",
    description: "Motion-detection rhythm game inspired by Beat Saber with custom computer vision tracking.",
    tags: ["Computer Vision", "Gaming", "Experimental"],
    image: "/images/lightdance-game.png",
    link: "https://github.com/gavin-St/LightDance",
  },
  {
    title: "Home Security Tracker",
    description: "Security backend prototype that monitors remote devices and alerts homeowners in real time.",
    tags: ["IoT", "Security", "Prototyping"],
    image: "/images/home-security-tracker.png",
    link: "https://github.com/gavin-St/Home-Security-Tracker",
  },
  {
    title: "Snake Game AI",
    description: "Deep Q-network agent that learns to master the classic snake game with reinforcement learning.",
    tags: ["Reinforcement Learning", "Game AI", "Research"],
    image: "/images/snake-ai.png",
    link: "https://github.com/gavin-St/snake-game-ai-pytorch",
  },
  {
    title: "Cambio Solver",
    description: "End-to-end simulator for the Cambio card game with optimal move recommendations.",
    tags: ["Algorithms", "Gaming", "Optimization"],
    image: "/images/cambio-solver.jpg",
    link: "https://github.com/gavin-St/cambio-bot",
  },
  {
    title: "WLP C Compiler",
    description: "Parses, compiles, and optimizes C code into assembly language.",
    tags: ["Exploration", "R&D"],
    image: "/images/coming-soon.png",
    link: "https://github.com/gavin-St/basic-c-compiler",
  },
];

const pad = (n: number) => String(n + 1).padStart(2, "0");

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="pt-64 pb-[30rem] px-8 md:px-16 lg:px-24"
      style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-4xl font-semibold tracking-tight text-black"
        >
          PROJECTS
        </motion.h2>

        {/* brutalist hairline grid — image floods the cell on hover */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-black/15 border border-black/15">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: EASE, delay: (index % 2) * 0.08 }}
              className="group relative bg-white p-6 md:p-8 min-h-[16rem] md:min-h-[19rem] flex flex-col justify-between overflow-hidden focus-visible:outline focus-visible:outline-black/40 focus-visible:outline-offset-[-4px]"
            >
              {/* image floods the cell on hover (desktop only) */}
              <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/45" />
              </div>

              <div className="relative flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] tracking-[0.2em] text-black/35 md:group-hover:text-white/70 transition-colors duration-300">
                  {pad(index)}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/35 md:group-hover:text-white/70 transition-colors duration-300 text-right">
                  {project.tags[0]}
                </span>
              </div>

              <div className="relative">
                <h3 className="text-black md:group-hover:text-white uppercase font-bold tracking-tighter leading-[0.95] text-[clamp(1.5rem,2.75vw,2.25rem)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm text-black/55 md:group-hover:text-white/85 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}

          {/* placeholder cell so the grid stays even at 10 slots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.08 }}
            className="relative bg-white p-6 md:p-8 min-h-[16rem] md:min-h-[19rem] flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-black/25">
                {pad(projects.length)}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/25 text-right">
                TBD
              </span>
            </div>
            <h3
              className="text-transparent uppercase font-bold tracking-tighter leading-[0.95] text-[clamp(1.5rem,2.75vw,2.25rem)]"
              style={{ WebkitTextStroke: '1.25px rgba(0,0,0,0.2)' }}
            >
              Coming Soon
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
