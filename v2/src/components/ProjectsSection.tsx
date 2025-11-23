"use client";
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
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
    title: "UWNests",
    description: "Waterloo-based social network that helps students find community and campus opportunities.",
    tags: ["Social", "Student Life", "Community"],
    image: "/images/uwnests-social.png",
    link: "https://github.com/gavin-St/project-program",
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
    title: "Synesthesify",
    description: "Generates bespoke Spotify playlist artwork by blending music data with creative coding.",
    tags: ["Spotify", "Generative Art", "Creative Coding"],
    image: "/images/synesthesify-generator.png",
    link: "https://github.com/gavin-St/synesthesify",
  },
  {
    title: "Cambio Solver",
    description: "End-to-end simulator for the Cambio card game with optimal move recommendations.",
    tags: ["Algorithms", "Gaming", "Optimization"],
    image: "/images/cambio-solver.jpg",
    link: "https://github.com/gavin-St/cambio-bot",
  },
  {
    title: "More Coming Soon",
    description: "Creating new tools that push my craft forward. Stay tuned for the next drop.",
    tags: ["Exploration", "R&D"],
    image: "/images/coming-soon.png",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="projects" 
      ref={ref}
      className="bg-gray-50 py-24 px-8 md:px-16 lg:px-24"
      style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black mb-8">
            PROJECTS
          </h2>
          
          <div className="space-y-12 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start group">
                  <div className="relative w-full md:w-[32%] aspect-video overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 35vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-white/30 mix-blend-multiply" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold tracking-tight text-black/60">
                      {project.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-black/60 hover:text-black/80"
                    >
                      View project
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
