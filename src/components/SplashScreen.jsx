import { useEffect, useRef, useState } from "react";
import "./SplashScreen.css";

/**
 * SplashScreen
 *
 * Usage in App.jsx:
 *
 *   import { useState } from "react";
 *   import SplashScreen from "./SplashScreen";
 *
 *   function App() {
 *     const [showSplash, setShowSplash] = useState(true);
 *     return (
 *       <>
 *         {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
 *         <MainSite />
 *       </>
 *     );
 *   }
 *
 * The splash sits as a fixed overlay on top of MainSite, which is already
 * mounted underneath it. When the splash fades out at the end, the real
 * homepage is simply revealed -- that's the "smooth transition".
 */

const PHASE_ORDER = ["terminal", "loader", "blur", "notfound", "exit"];

const PHASE_DURATIONS = {
  terminal: 2000,
  loader: 1400,
  blur: 300,
  notfound: 1300,
  exit: 500,
};

export default function SplashScreen({ onFinish, storageKey = "splash-seen" }) {
  const [phase, setPhase] = useState("terminal");
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef(null);
  const rafRef = useRef(null);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Skip entirely on repeat visits within the same tab session
  useEffect(() => {
    if (storageKey && sessionStorage.getItem(storageKey)) {
      setVisible(false);
      onFinish?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function finish() {
    setPhase("exit");
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      if (storageKey) sessionStorage.setItem(storageKey, "1");
      onFinish?.();
    }, PHASE_DURATIONS.exit);
  }

  // Drive the phase sequence
  useEffect(() => {
    if (!visible) return;

    if (reducedMotion) {
      const id = setTimeout(finish, 300);
      timeoutRef.current = id;
      // Clear the *local* id on cleanup, not whatever timeoutRef.current
      // happens to hold later (finish() reassigns the ref for the exit
      // timer, so clearing via the ref here could cancel that instead).
      return () => clearTimeout(id);
    }

    if (phase === "exit") return;

    const currentIndex = PHASE_ORDER.indexOf(phase);
    const id = setTimeout(() => {
      const next = PHASE_ORDER[currentIndex + 1];
      if (!next || next === "exit") {
        finish();
      } else {
        setPhase(next);
      }
    }, PHASE_DURATIONS[phase]);
    timeoutRef.current = id;

    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, visible]);

  // Animate the percentage counter during the loader phase
  useEffect(() => {
    if (phase !== "loader") return;
    const start = performance.now();
    const duration = PHASE_DURATIONS.loader - 100;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setPercent(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase]);

  function skip() {
    clearTimeout(timeoutRef.current);
    cancelAnimationFrame(rafRef.current);
    finish();
  }

  if (!visible) return null;

  return (
    <div
      className={`splash-overlay fixed inset-0 z-50 flex items-center justify-center bg-black ${
        phase === "exit" ? "splash-exit pointer-events-none" : ""
      }`}
    >
      {phase === "terminal" && (
        <div key="terminal" className="font-mono text-[15px] text-left">
          <p className="splash-type-line1 whitespace-nowrap overflow-hidden text-emerald-400">
            $ init adhika.dev
          </p>
          <p className="splash-type-line2 whitespace-nowrap overflow-hidden text-emerald-400">
            $ status: ready<span className="splash-cursor">_</span>
          </p>
        </div>
      )}

      {phase === "loader" && (
        <div key="loader" className="text-center">
          <div className="font-mono text-4xl text-white tabular-nums">
            {percent}%
          </div>
          <div className="mx-auto mt-4 h-[2px] w-36 overflow-hidden rounded-full bg-neutral-800">
            <div
              className="h-full bg-white"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      )}

      {phase === "blur" && (
        <div key="blur" className="splash-blur-frame absolute inset-0 bg-white" />
      )}

      {phase === "notfound" && (
        <div key="notfound" className="splash-notfound text-center">
          <div className="font-mono text-5xl font-semibold text-white">404</div>
          <p className="mt-2 text-sm text-neutral-400">page not found</p>
          <p className="splash-notfound-wink mt-4 text-xs text-neutral-500">
            kidding — taking you home
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={skip}
        className="absolute bottom-6 right-6 rounded px-2 py-1 text-xs text-neutral-500 transition-colors hover:text-neutral-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
      >
        skip
      </button>
    </div>
  );
}
