"use client";
import { motion } from 'framer-motion';

const FADE_IN_EASE = [0.25, 0.1, 0.25, 1] as const;

interface HeaderProps {
  show: boolean;
  reserveSpace?: boolean;
  onLogoClick?: () => void;
}

export default function Header({ show, reserveSpace = false, onLogoClick }: HeaderProps) {
  if (!show) return null;

  return (
    <>
      <motion.header
        className={[
          "fixed top-0 left-0 right-0 w-full px-8 py-8 font-[530] text-[#111] tracking-[0.08em] text-[clamp(18px,3vw,28px)] z-50",
          onLogoClick ? "cursor-pointer" : ""
        ].filter(Boolean).join(" ")}
        style={{ backgroundColor: '#ffffff' }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: FADE_IN_EASE }}
        onClick={onLogoClick}
        role={onLogoClick ? "button" : undefined}
        tabIndex={onLogoClick ? 0 : undefined}
        onKeyDown={(e) => {
          if (!onLogoClick) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onLogoClick();
          }
        }}
      >
        <span className="focus-visible:outline focus-visible:outline-black/40 focus-visible:outline-offset-4">
          GAVIN
        </span>
      </motion.header>
      {/* Spacer to prevent content overlap when the main layout is visible */}
      {reserveSpace && (
        <div className="h-[clamp(74px,calc(3vw+64px),92px)]" />
      )}
    </>
  );
}
