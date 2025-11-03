"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "Project One",
    description: "A beautiful web application built with modern technologies",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    title: "Project Two",
    description: "An innovative solution for complex problems",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Project Three",
    description: "Mobile-first design with seamless user experience",
    tags: ["React Native", "Firebase", "Redux"],
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="projects" 
      ref={ref}
      className="min-h-screen bg-gray-50 py-32 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-black mb-8">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  {/* Project image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-white/50 text-sm">Project Image</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm bg-gray-100 text-black/70 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

