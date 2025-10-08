"use client";
import { useEffect } from "react";
import { useMachine } from '@xstate/react';
import IntroSequence from "../components/Intro/IntroSequence";
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

  return (
    <main className="min-h-screen bg-white">
      {!showMain && (
        <IntroSequence
          state={state}
          send={send}
        />
      )}

      <section
        aria-hidden={!showMain}
        className={[
          "grid min-h-screen place-items-center text-[#111] font-sans transition-opacity duration-300",
          showMain ? "opacity-100 visible" : "opacity-0 invisible",
        ].join(" ")}
      >
        <div className="max-w-[720px] p-6">
          <h1 className="m-0 font-medium tracking-[0.04em]">GAVIN</h1>
          <p className="mt-3 opacity-80">Main content lives here.</p>
        </div>
      </section>
    </main>
  );
}
