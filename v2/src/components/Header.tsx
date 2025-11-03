"use client";
import { motion } from 'framer-motion';

const FADE_IN_EASE = [0.25, 0.1, 0.25, 1] as const;

interface HeaderProps {
  show: boolean;
}

export default function Header({ show }: HeaderProps) {
  if (!show) return null;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 w-full px-8 py-8 font-[530] text-[#111] tracking-[0.08em] text-[clamp(18px,3vw,28px)] z-50 bg-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: FADE_IN_EASE }}
      >
        GAVIN
      </motion.header>
      {/* Spacer to prevent content overlap */}
      <div className="h-[clamp(74px,calc(3vw+64px),92px)]" />
    </>
  );
}



