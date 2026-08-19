"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

type Channel = {
  title: string;
  description: string[];
  image?: string;
  link: string;
};

const channels: Channel[] = [
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

const pad = (n: number) => String(n + 1).padStart(2, "0");

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function MediaSection() {
  return (
    <section
      id="media"
      className="pt-96 pb-12 px-8 md:px-16 lg:px-24"
      style={{ fontFamily: 'Helvetica, Arial, sans-serif', backgroundColor: '#ffffff' }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-4xl font-semibold tracking-tight text-black"
        >
          MEDIA
        </motion.h2>

        <div className="mt-20 space-y-24">
          {channels.map((channel, index) => {
            const flipped = index % 2 === 1;
            return (
              <motion.a
                key={channel.title}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE, delay: index * 0.1 }}
                className={`group flex flex-col md:flex-row gap-8 md:gap-12 items-center focus-visible:outline focus-visible:outline-black/40 focus-visible:outline-offset-4 ${
                  flipped ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="relative w-full md:w-[55%] aspect-video overflow-hidden bg-gray-100 border border-black/15">
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

                <div className={`flex-1 ${flipped ? 'md:text-right' : ''}`}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-black/45">
                    YouTube
                    <span className="mx-3 text-black/20">/</span>
                    Channel {pad(index)}
                  </p>
                  <h3 className="mt-3 w-fit text-black uppercase font-bold tracking-tighter leading-[0.95] text-[clamp(1.75rem,4vw,2.75rem)] transition-colors duration-200 group-hover:text-transparent group-hover:[-webkit-text-stroke:1.25px_black] inline-block">
                    {channel.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {channel.description.map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-3 text-black/60 leading-relaxed ${flipped ? 'md:flex-row-reverse' : ''}`}
                      >
                        <span className="h-px w-3 flex-shrink-0 bg-black/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
