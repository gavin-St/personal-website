"use client";
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

type Stint = {
  title: string;
  period: string;
  highlights: string[];
};

type CompanyGroup = {
  company: string;
  stints: Stint[];
};

type YearGroup = {
  year: string;
  companies: CompanyGroup[];
};

const timeline: YearGroup[] = [
  {
    year: "",
    companies: [
      {
        company: "Kikoff",
        stints: [
          {
            title: "Software Engineer Intern",
            period: "Incoming",
            highlights: [],
          },
        ],
      },
    ],
  },
  {
    year: "2026",
    companies: [
      {
        company: "ZipRecruiter",
        stints: [
          {
            title: "Fullstack Engineer Intern",
            period: "May — Aug 2026",
            highlights: [
              "Designed an internal observability and distributed tracing platform with OpenTelemetry",
              "Constructed a custom dashboard app with latency visualizations and interactive trace drilldowns for error propagation",
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2025",
    companies: [
      {
        company: "Leap Tools",
        stints: [
          {
            title: "Software Engineer Intern",
            period: "May — Aug 2025",
            highlights: [
              "Migrated Django models and architected gRPC endpoints for new vendor microservice in Roomvo's crm tool.",
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2024",
    companies: [
      {
        company: "Faire",
        stints: [
          {
            title: "Backend Engineer Intern",
            period: "Sep — Dec 2024",
            highlights: [
              "Led the product display feature experiment, coordinating DS + frontend teams",
              "Ran A/B tests on product attributes to boost retailer impressions",
            ],
          },
          {
            title: "Frontend Engineer Intern",
            period: "Jan — Apr 2024",
            highlights: [
              "Engineered user flows for AI generated product titles and descriptions",
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2023",
    companies: [
      {
        company: "Chatsimple Ltd",
        stints: [
          {
            title: "Software Engineer Intern",
            period: "May — Aug 2023",
            highlights: [
              "Led the full-stack development of the AI chatbot product from prototype to launch",
            ],
          },
        ],
      },
    ],
  },
];

function StintMeta({ stint }: { stint: Stint }) {
  return (
    <div className="relative">
      {/* tick off the spine */}
      <div className="absolute -left-8 md:-left-16 top-1.5 h-px w-4 md:w-8 bg-black transition-all duration-300 group-hover:w-6 md:group-hover:w-12" />
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-black/45">
        {stint.period}
        <span className="mx-3 text-black/20">/</span>
        {stint.title}
      </p>
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-5 space-y-3">
      {items.map((highlight, hIndex) => (
        <li
          key={hIndex}
          className="flex items-start gap-3 max-w-xl text-black/60 leading-relaxed"
        >
          <span className="mt-[0.7em] h-px w-3 flex-shrink-0 bg-black/40" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.55"],
  });
  const spineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section
      id="experience"
      className="min-h-screen bg-transparent py-96 px-8 md:px-16 lg:px-24"
      style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl font-semibold tracking-tight text-black"
        >
          EXPERIENCE
        </motion.h2>

        <div ref={timelineRef} className="relative mt-24">
          {/* spine track + scroll-drawn spine */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10" />
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px bg-black origin-top"
            style={{ scaleY: prefersReducedMotion ? 1 : spineScale }}
          />

          {timeline.map((group, groupIndex) => (
            <div key={group.year || groupIndex} className="relative mt-20 first:mt-0">
              {/* hollow year milestone, cut through by the spine */}
              {group.year && (
                <motion.p
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                  className="select-none text-transparent font-bold leading-[0.85] tracking-tighter text-[clamp(3.25rem,11vw,8.5rem)] -ml-1"
                  style={{ WebkitTextStroke: '1.5px rgba(0,0,0,0.22)' }}
                >
                  {group.year}
                </motion.p>
              )}

              <div className="mt-6">
                {group.companies.map((companyGroup) => {
                  const [firstStint, ...laterStints] = companyGroup.stints;
                  return (
                    <motion.article
                      key={companyGroup.company + firstStint.period}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                      className="group relative pl-8 md:pl-16 py-8"
                    >
                      <StintMeta stint={firstStint} />

                      <h3
                        className="mt-3 w-fit text-black uppercase font-bold tracking-tighter leading-[0.95] text-[clamp(1.75rem,5.5vw,3.75rem)]"
                      >
                        {companyGroup.company}
                      </h3>

                      <Highlights items={firstStint.highlights} />

                      {laterStints.map((stint) => (
                        <div key={stint.period} className="mt-12">
                          <StintMeta stint={stint} />
                          <Highlights items={stint.highlights} />
                        </div>
                      ))}
                    </motion.article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
