"use client";

import { useEffect } from "react";
import { openEstimator } from "@/components/EstimatorProvider";

export default function InstantEstimateClient() {
  useEffect(() => {
    /* Auto-open estimator when landing on /instant-estimate */
    const timer = setTimeout(() => openEstimator(), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f2337", marginBottom: "8px" }}>
        Get Your Instant Estimate
      </h1>
      <p style={{ color: "#64748b", marginBottom: "24px" }}>
        Free, no-obligation quotes for pest control, AC, plumbing & weed control.
      </p>
      <button
        onClick={openEstimator}
        style={{
          padding: "14px 32px",
          background: "#b91c1c",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          fontSize: "1rem",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Start My Estimate →
      </button>
    </div>
  );
}
