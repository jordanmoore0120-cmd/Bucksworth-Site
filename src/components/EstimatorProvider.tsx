"use client";

import { useState, useCallback, useEffect, ReactNode } from "react";
import dynamic from "next/dynamic";

/* ── Lazy-load estimator to keep initial bundle small ────── */
const loadEstimator = () => import("./InstantEstimator");
const InstantEstimator = dynamic(loadEstimator, {
  ssr: false,
});

/* ── Global event bus — any component can fire "open-estimator" ── */
const ESTIMATOR_EVENT = "open-estimator";

/**
 * Call this from any client component to open the estimator.
 * Works across the tree without React context (avoids server/client boundary issues).
 */
export function openEstimator() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(ESTIMATOR_EVENT));
  }
}

/* ── Provider wraps the app in layout.tsx ────────────────── */
export default function EstimatorProvider({
  children,
  mapsApiKey,
}: {
  children: ReactNode;
  mapsApiKey: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  /* Mount the estimator only once it has been opened, so its chunk is not
     downloaded and evaluated during page load (keeps it off the main thread
     while the page becomes interactive). Stays mounted after first open. */
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    const handler = () => {
      setHasOpened(true);
      setIsOpen(true);
    };
    window.addEventListener(ESTIMATOR_EVENT, handler);
    return () => window.removeEventListener(ESTIMATOR_EVENT, handler);
  }, []);

  /* Warm the chunk when the browser is idle so the first open is instant */
  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId: number | undefined;
    const timer = window.setTimeout(() => {
      if (w.requestIdleCallback) {
        idleId = w.requestIdleCallback(() => void loadEstimator(), { timeout: 5000 });
      } else {
        void loadEstimator();
      }
    }, 4000);
    return () => {
      window.clearTimeout(timer);
      if (idleId !== undefined) w.cancelIdleCallback?.(idleId);
    };
  }, []);

  const closeEstimator = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {children}
      {hasOpened && (
        <InstantEstimator
          isOpen={isOpen}
          onClose={closeEstimator}
          mapsApiKey={mapsApiKey}
        />
      )}
    </>
  );
}
