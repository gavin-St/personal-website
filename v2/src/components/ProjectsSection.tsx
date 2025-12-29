"use client";
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
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

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featureProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <section 
      id="projects" 
      ref={ref}
      className="pt-96 pb-[30rem] px-8 md:px-16 lg:px-24"
      style={{ fontFamily: 'Helvetica, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-4xl font-semibold tracking-tight text-black mb-12">
            PROJECTS
          </h2>
          
          {/* Feature Projects - 2 giant square images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
            {featureProjects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group focus-visible:outline focus-visible:outline-black/40 focus-visible:outline-offset-4"
                whileHover={{ scale: 1.01 }}
              >
                <div className="relative w-full aspect-square overflow-hidden bg-gray-100 mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-white/30 mix-blend-multiply" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-black group-hover:font-bold transition-all">
                    {project.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed group-hover:text-black/80">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Other Projects */}
          <div className="space-y-12">
            {otherProjects.map((project, index) => (
              <motion.a
                key={index + 2}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 md:gap-12 items-start group rounded-2xl p-4 -m-4 focus-visible:outline focus-visible:outline-black/40 focus-visible:outline-offset-4"
                whileHover={{ scale: 1.01 }}
              >
                <div className="relative w-full md:w-[32%] aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 35vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-white/30 mix-blend-multiply" />
                </div>

                <div className="flex-1 space-y-4 transition-colors duration-300">
                  <h3 className="text-xl font-semibold tracking-tight text-black group-hover:font-bold">
                    {project.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed group-hover:text-black/80">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
