"use client";
import { useEffect, useState } from "react";
import { useMachine } from '@xstate/react';
import IntroSequence from "../components/Intro/IntroSequence";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { introMachine } from "../machines/introMachine";

const INTRO_CACHE_KEY = "intro:lastSeen";
const ONE_HOUR_MS = 1000 * 60 * 60;

// UFO Background Configuration - adjust these values to change size and position
const UFO_CONFIG = {
  size: '300px', // Change this to adjust image size (e.g., '400px', '800px', '50%', 'auto')
  position: '55% 40%', // CSS background-position value (e.g., 'center right', '60% 30%', 'top left')
};

export default function Page() {
  const [state, send] = useMachine(introMachine);
  const [shouldSkipIntro, setShouldSkipIntro] = useState(false);

  // Arrow key navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { 
        e.preventDefault();
        if (state.matches('splash')) send({ type: 'ENTER' });
        else if (state.matches('morph')) send({ type: 'ADVANCE' });
        else if (state.matches('done')) send({ type: 'ADVANCE' });
      }
      if (e.key === "ArrowLeft")  { 
        e.preventDefault();
        send({ type: 'BACK' });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state, send]);

  // Decide whether to skip the intro animation based on cache/hash
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lastSeenRaw = window.localStorage.getItem(INTRO_CACHE_KEY);
    if (!lastSeenRaw) return;
    const lastSeen = Number(lastSeenRaw);
    if (Number.isNaN(lastSeen)) return;
    const elapsed = Date.now() - lastSeen;
    if (elapsed < ONE_HOUR_MS) {
      setShouldSkipIntro(true);
    }
  }, []);

  // Fire skip event when needed
  useEffect(() => {
    if (!shouldSkipIntro) return;
    if (!state.matches('main')) {
      send({ type: 'SKIP' });
    }
  }, [shouldSkipIntro, state, send]);

  // Cache completion timestamp whenever the main view is reached
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (state.matches('main')) {
      window.localStorage.setItem(INTRO_CACHE_KEY, Date.now().toString());
    }
  }, [state]);

  const showMain = state.matches('main');
  const showHeader = state.matches('done') || state.matches('main');
  return (
    <main className="min-h-screen relative" style={{ backgroundColor: '#ffffff' }}>
      {/* <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/images/UFO.png)',
          backgroundPosition: UFO_CONFIG.position,
          backgroundRepeat: 'no-repeat',
          backgroundSize: UFO_CONFIG.size,
          backgroundAttachment: 'fixed',
        }}
      /> */}
      
      <div className="relative z-10">
        <Header
        show={showHeader}
        reserveSpace={showMain}
        onLogoClick={
          showMain
            ? () => {
                if (typeof window !== "undefined") {
                  window.localStorage.removeItem(INTRO_CACHE_KEY);
                }
                setShouldSkipIntro(false);
                send({ type: 'RESTART' });
              }
            : undefined
        }
      />
      <Sidebar show={showMain} />
      
      {!showMain && (
        <IntroSequence
          state={state}
          send={send}
        />
      )}

      {showMain && <MainContent />}
      </div>
    </main>
  );
}
