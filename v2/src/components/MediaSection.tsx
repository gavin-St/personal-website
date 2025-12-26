"use client";
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MediaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const channels = [
    {
      title: "Gav1n",
      description: ["commentary, travel, not serious"],
      link: "https://www.youtube.com/@Gavin-S11",
    },
    {
      title: "GAV2N",
      description: ["piano", "possibly serious"],
      image: "/images/piano.jpg",
      link: "https://www.youtube.com/@Gavin-piano",
    },
  ];

  return (
    <section 
      id="media" 
      ref={ref}
      className="py-24 px-4 md:px-8 lg:px-12"
      style={{ fontFamily: 'Helvetica, sans-serif', backgroundColor: '#ffffff' }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-4xl font-semibold tracking-tight text-black mb-12">
            MEDIA (YT)
          </h2>
          
          <div className="space-y-16">
            {channels.map((channel, index) => (
              <motion.a
                key={index}
                href={channel.link}
                target={channel.link !== "#" ? "_blank" : undefined}
                rel={channel.link !== "#" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center group focus-visible:outline focus-visible:outline-black/40 focus-visible:outline-offset-4 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <div className="relative w-full md:w-[55%] aspect-video overflow-hidden bg-gray-100">
                  {channel.image && (
                    <>
                      <div className="relative w-full h-full transition-all duration-500 blur-[3px] group-hover:blur-[1px] group-hover:scale-[1.03]">
                        <Image
                          src={channel.image}
                          alt={channel.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 55vw"
                          className="object-cover transition-opacity duration-500"
                          priority={index === 0}
                        />
                      </div>
                      <div className="absolute inset-0 bg-white/30 mix-blend-multiply pointer-events-none" />
                    </>
                  )}
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="transition-all duration-300 group-hover:scale-110">
                      <div className="w-0 h-0 border-l-[24px] md:border-l-[32px] border-l-white border-t-[14px] md:border-t-[18px] border-t-transparent border-b-[14px] md:border-b-[18px] border-b-transparent drop-shadow-lg"></div>
                    </div>
                  </div>
                </div>

                <div className={`flex-1 space-y-4 ${index === 1 ? 'text-right' : ''}`}>
                  <h3 className="text-2xl font-semibold tracking-tight text-black group-hover:font-bold transition-all">
                    {channel.title}
                  </h3>
                  <ul className="text-lg text-black/70 leading-relaxed group-hover:text-black/80 space-y-0">
                    {channel.description.map((item, i) => (
                      <li key={i} className={index === 1 ? "after:content-['—'] after:ml-2" : "before:content-['—'] before:mr-2"}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

