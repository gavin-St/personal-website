"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: "Fullstack Engineer Intern",
    company: "ZipRecruiter",
    period: "May 2026 (Incoming)",
    description: "Joining ZipRecruiter to work on large scale job marketplace products and matching intelligence systems.",
    highlights: [
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Leap Tools",
    period: "May 2025 - Aug 2025",
    description: "Built production features for Leap Tools' home visualization platform used by retailers and interior designers.",
    highlights: [
      "Launched 3D room-measurement tools that reduced merchant onboarding time by 35%",
      "Implemented image-processing jobs in Go + Python to improve model accuracy for large product catalogs"
    ]
  },
  {
    title: "Backend Engineer Intern",
    company: "Faire",
    period: "Sep 2024 - Dec 2024",
    description: "Worked on Faire's wholesale marketplace backend with a focus on product discovery systems.",
    highlights: [
      "Led the product display feature experiment, coordinating DS + frontend teams",
      "Ran A/B tests on product attributes to boost retailer impressions"
    ]
  },
  {
    title: "Frontend Engineer Intern",
    company: "Faire",
    period: "Jan 2024 - Apr 2024",
    description: "Owned key UI surfaces for Faire's pilot AI recommendation engine.",
    highlights: [
      "Engineered user flows for AI generated product titles and descriptions",
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Chatsimple Ltd",
    period: "May 2023 - Aug 2023",
    description: "First engineering hire working on Chatsimple's AI chatbot builder.",
    highlights: [
      "Led the full-stack development of the AI chatbot product from prototype to launch",
    ]
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="experience" 
      ref={ref}
      className="min-h-screen bg-white py-32 px-8 md:px-16 lg:px-24"
      style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-5xl md:text-5xl font-medium tracking-tight text-black mb-8">
            EXPERIENCE
          </h2>
          
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative pl-12"
              >
                <div className="absolute w-4 h-4 bg-black rounded-full left-2 top-2"></div>
                
                <div className="mb-2">
                  <h3 className="text-2xl font-medium text-black">{exp.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-lg text-black/70">{exp.company}</span>
                    <span className="text-black/40">•</span>
                    <span className="text-sm text-black/50 tracking-wide">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-black/60">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black/30 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
