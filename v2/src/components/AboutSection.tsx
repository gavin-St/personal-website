"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      ref={ref}
      className="min-h-screen bg-transparent py-8 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-xl font-[550] text-black leading-relaxed mb-6">
                HI, I&apos;M A FULLSTACK ENGINEER FROM TORONTO.
              </h1>
            </div>

            <div className="pt-8 border-t border-black/10">
              <p className="text-lg text-black/70 leading-relaxed mb-4">
                I like to build things that look good and work well.
              </p>
              <p className="text-lg text-black/70 leading-relaxed">
              My name is Gavin and I&apos;m a 4th year Computer Science student at the University of Waterloo who specializes in full-stack applications made from React, Node, Python, Kotlin, and Go. Currently, I am building a platform for better research oppotunities in the pure sciences.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* UFO Image at bottom */}
        <div className="flex flex-col items-center mt-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-48 h-48"
          >
            <Image
              src="/images/UFO.png"
              alt="UFO"
              fill
              className="object-contain"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: [0, 1, 0],
              y: [0, -80, 0],
            } : { opacity: 0 }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
            className="text-base text-black/80 mt-2 -ml-6"
          >
            v1
          </motion.p>
        </div>
      </div>
    </section>
  );
}
