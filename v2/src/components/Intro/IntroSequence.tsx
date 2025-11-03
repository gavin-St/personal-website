"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ActorRefFrom } from 'xstate';
import type { introMachine } from '../../machines/introMachine';

type IntroState = ReturnType<ActorRefFrom<typeof introMachine>['getSnapshot']>;
type IntroSend = ActorRefFrom<typeof introMachine>['send'];

const FADE_IN_EASE = [0.25, 0.1, 0.25, 1] as const;

export default function IntroSequence({
  state,
  send,
}: {
  state: IntroState;
  send: IntroSend;
}) {
  const stage = state.context.currentStage;
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (state.matches('splash')) {
      send({ type: 'ENTER' });
    } else if (state.matches('morph') && !state.context.fadeOutOthers) {
      send({ type: 'ADVANCE' });
    } else if (state.matches('done')) {
      send({ type: 'ADVANCE' });
    }
  };

  const getWordmarkText = () => {
    return "GAV1N";
  };

  const getLetterVariants = (index: number) => {
    if (stage === "splash") {
      if (index === 2) return { 
        initial: { opacity: 0, y: 2 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.8, duration: 0.6, ease: FADE_IN_EASE }
      }; // V
      if (index === 3) return { 
        initial: { opacity: 0, y: 2 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 1.6, duration: 0.6, ease: FADE_IN_EASE }
      }; // 1
      return { 
        initial: { opacity: 0 },
        animate: { opacity: 0 }
      }; // G, A, N (hidden initially)
    } else if (stage === "morph" && state.context.fadeOutOthers) {
      if (index === 3) return {
        initial: { opacity: 1 },
        animate: { opacity: 1 }
      }; // Keep "1" visible
      return {
        initial: { opacity: 1 },
        animate: { opacity: 0 },
        transition: { duration: 1, ease: FADE_IN_EASE }
      }; // Fade out G, A, V, N
    } else if (stage === "morph" && state.context.showGAN) {
      if (index === 0 || index === 1) return {
        initial: { opacity: 0, y: 2 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1, duration: 1.2, ease: FADE_IN_EASE }
      }; // G, A
      if (index === 4) return {
        initial: { opacity: 0, y: 2 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.6, duration: 1.2, ease: FADE_IN_EASE }
      }; // N
      return { initial: { opacity: 1 }, animate: { opacity: 1 } }; // V, 1 (already visible)
    } else if (stage === "done") {
      if (index === 3) return { initial: { opacity: 1 }, animate: { opacity: 1 } }; // Keep "1" visible in center
      return { initial: { opacity: 0 }, animate: { opacity: 0 } }; // Hide G,A,V,N from main wordmark
    }
    return { initial: { opacity: 1 }, animate: { opacity: 1 } };
  };

  return (
    <div
      onClick={handleClick}
      className="relative min-h-screen bg-white text-black font-sans overflow-hidden cursor-pointer"
      role="button"
      aria-label={stage === "splash" ? "Enter" : "Advance"}
    >
      <div className="pointer-events-none absolute inset-0 vignette" />

      <h1
        aria-live="polite"
        className={[
          "absolute font-medium text-[#111] tracking-[0.08em]",
          "transition-[transform,letter-spacing,opacity] ease-[cubic-bezier(.2,.9,.2,1)] duration-[600ms]",
          stage === "splash" && "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(40px,8vw,96px)] tracking-[0.12em]",
          stage === "morph" && "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(40px,8vw,96px)] tracking-[0.12em] transition-opacity duration-300",
          stage === "done" && "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(40px,8vw,96px)] tracking-[0.12em]",
        ].filter(Boolean).join(" ")}
        style={{
          opacity: 1
        }}
      >
        <span className="inline-flex">
          {getWordmarkText().split('').map((letter, index) => {
            const variants = getLetterVariants(index);
            return (
              <motion.span 
                key={`${letter}-${index}`}
                initial={variants.initial}
                animate={variants.animate}
                transition={variants.transition as any}
              >
                {letter}
              </motion.span>
            );
          })}
        </span>
      </h1>

      <AnimatePresence mode="wait">
        {state.matches('splash') && (
          <motion.div
            key="click-text"
            className="absolute left-1/2 top-[calc(50%+56px)] -translate-x-1/2
                       text-[12px] tracking-[0.18em] text-black/50 select-none"
            initial={{ opacity: 0, y: 2 }}
            animate={{ 
              opacity: [0, 1, 0.4, 1], 
              y: 0 
            }}
            transition={{ 
              delay: 4, 
              duration: 2.5,
              ease: [0.45, 0, 0.5, 1],
              repeat: Infinity,
              repeatType: "mirror"
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            CLICK ANYWHERE TO ENTER
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {stage === "done" && (
          <motion.button
            className="absolute top-1/2 -translate-y-1/2 left-[calc(50%+4em)] border-0 bg-transparent text-black/90
                       text-[clamp(16px,2vw,22px)] tracking-[0.02em] cursor-pointer px-2 py-1
                       transition-transform duration-200 hover:-translate-y-[1px]
                       focus-visible:outline focus-visible:outline-black/40"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: FADE_IN_EASE }}
            exit={{ opacity: 0, x: 20 }}
            onClick={(e) => { e.stopPropagation(); send({ type: 'ADVANCE' }); }}
          >
            want to see the future{'.'.repeat(dotCount)}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
