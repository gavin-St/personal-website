"use client";
import { motion } from 'framer-motion';

const FADE_IN_EASE = [0.25, 0.1, 0.25, 1] as const;

interface SidebarProps {
  show: boolean;
}

export default function Sidebar({ show }: SidebarProps) {
  if (!show) return null;

  const navigationItems = [
    [
      { label: 'about', href: '#about' },
      { label: 'projects', href: '#projects' },
      { label: 'experience', href: '#experience' },
      { label: 'media', href: '#media' },
    ],
    [
      { label: 'resume', href: 'https://drive.google.com/file/d/1l5BpnXd55grFQTzSuCTOFjmH3mwWKz0s/view?usp=sharing', external: true },
      { label: 'linkedin', href: 'https://www.linkedin.com/in/gavin-song/', external: true },
      { label: 'email', href: 'mailto:g2song@uwaterloo.ca', external: true },
    ],
  ];

  return (
    <>
      <motion.aside
        className="fixed top-24 left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: FADE_IN_EASE, delay: 0.2 }}
      >
        <nav className="flex flex-col">
          {navigationItems.map((section, sectionIndex) => (
            <div 
              key={sectionIndex} 
              className={sectionIndex > 0 ? 'mt-10' : 'mt-4'}
            >
              {section.map((item, itemIndex) => (
                <a
                  key={itemIndex}
                  href={item.href}
                  target={'external' in item && item.external ? "_blank" : undefined}
                  rel={'external' in item && item.external ? "noopener noreferrer" : undefined}
                  className="block text-[clamp(14px,1.5vw,16px)] tracking-[0.04em] text-black/60
                             hover:text-black/90 hover:translate-x-2
                             transition-all duration-200 ease-out
                             focus-visible:outline focus-visible:outline-black/40 focus-visible:outline-offset-4"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </motion.aside>

      <motion.aside
        className="fixed bottom-8 left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: FADE_IN_EASE, delay: 0.2 }}
      >
        <a
          href="https://github.com/gavin-St/personal-website/tree/main/v2"
          target="_blank"
          rel="noopener noreferrer"
          className="block py-1 text-[clamp(14px,1.5vw,16px)] tracking-[0.04em] text-black/60
                     hover:text-black/90 hover:translate-x-2
                     transition-all duration-200 ease-out
                     focus-visible:outline focus-visible:outline-black/40 focus-visible:outline-offset-4"
        >
          github
        </a>
      </motion.aside>

    </>
  );
}
