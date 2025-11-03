"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of innovative web applications and mentoring junior developers.",
    highlights: [
      "Built scalable applications serving thousands of users",
      "Implemented modern development practices",
      "Collaborated with cross-functional teams"
    ]
  },
  {
    title: "Software Engineer",
    company: "StartUp Inc",
    period: "2020 - 2022",
    description: "Developed full-stack solutions and contributed to product strategy.",
    highlights: [
      "Developed key features for main product",
      "Optimized performance and user experience",
      "Worked with cutting-edge technologies"
    ]
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Started my journey building websites and learning best practices.",
    highlights: [
      "Created responsive web applications",
      "Learned modern development workflows",
      "Contributed to team success"
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
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-black mb-8">
            Experience
          </h2>
          
          <div className="mt-16 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative pl-8 border-l-2 border-gray-200"
              >
                <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-2"></div>
                
                <div className="mb-2">
                  <h3 className="text-2xl font-medium text-black">{exp.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-lg text-black/70">{exp.company}</span>
                    <span className="text-black/40">•</span>
                    <span className="text-sm text-black/50 tracking-wide">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-black/70 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <ul className="space-y-2">
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
        </motion.div>
      </div>
    </section>
  );
}

