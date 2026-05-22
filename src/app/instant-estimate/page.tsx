import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instant Estimate — Free Online Quote",
  description:
    "Get an instant estimate for pest control, AC repair, plumbing, or weed control in Phoenix & Tucson, AZ. Free, no-obligation quotes in under 60 seconds.",
  alternates: { canonical: "https://getyourbucksworth.com/instant-estimate" },
};

/**
 * /instant-estimate — Landing page that auto-opens the estimator modal.
 * We render a simple page that fires the open event on mount.
 */
export default function InstantEstimatePage() {
  return (
    <main id="main-content" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <InstantEstimateOpener />
    </main>
  );
}

/* Client component to auto-open the modal */
function InstantEstimateOpener() {
  "use client";
  return <InstantEstimateClient />;
}

/* Separate client file needed — inline "use client" doesn't work in a server page */
import InstantEstimateClient from "./InstantEstimateClient";
