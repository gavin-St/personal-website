"use client";
import { useEffect } from "react";
import { useMachine } from '@xstate/react';
import IntroSequence from "../components/Intro/IntroSequence";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { introMachine } from "../machines/introMachine";

export default function Page() {
  const [state, send] = useMachine(introMachine);

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
  }, [state.value, send]);

  const showMain = state.matches('main');
  const showHeader = state.matches('done') || state.matches('main');

  return (
    <main className="min-h-screen bg-white">
      <Header show={showHeader} />
      <Sidebar show={showMain} />
      
      {!showMain && (
        <IntroSequence
          state={state}
          send={send}
        />
      )}

      {showMain && <MainContent />}
    </main>
  );
}
