"use client";

import { useState, useCallback, useEffect, ReactNode } from "react";
import dynamic from "next/dynamic";

/* ── Lazy-load estimator to keep initial bundle small ────── */
const InstantEstimator = dynamic(() => import("./InstantEstimator"), {
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

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener(ESTIMATOR_EVENT, handler);
    return () => window.removeEventListener(ESTIMATOR_EVENT, handler);
  }, []);

  const closeEstimator = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {children}
      <InstantEstimator
        isOpen={isOpen}
        onClose={closeEstimator}
        mapsApiKey={mapsApiKey}
      />
    </>
  );
}
