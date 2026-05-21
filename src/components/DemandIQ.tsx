"use client";

import { useEffect } from "react";
import Script from "next/script";

/**
 * Demand IQ Journey Embed — renders the StickyBanner launcher site-wide.
 * This matches exactly how it's deployed on the old WordPress site (getyourbucksworth.com/schedule-now/).
 * The embed.js script injects the interactive estimate journey when the user clicks the sticky banner.
 */

const DEMAND_IQ_API_KEY = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkYjNmOGQ0Mi04NGFmLTExZWUtOWQxYS0wYTU4YTlmZWFjMDIiLCJjb21wYW55SWQiOiI5NjVlOGQzOS1mMjVjLTExZjAtYTc0ZS0wYTU4YTlmZWFjMDIiLCJyb2xlIjoiQWRtaW4iLCJjbGllbnRJZCI6InBvbGFyaXMiLCJyZWdpc3RlcmVkQ2xhaW1zIjp7ImF1ZCI6WyJwb2xhcmlzIiwiY29yZSJdLCJleHAiOjE5MjYyNzkwMjAsIm5iZiI6MTc2ODU5OTAyMCwiaWF0IjoxNzY4NTk5MDIwLCJqdGkiOiI4ZjMxMTQ2NS1mMzIyLTExZjAtYjYzNC0wYTU4YTlmZWFjMDIifX0.YAUpRkfAMfQUdU2PM2jZDBxxULfXhXWdqpP0WrcEL7cF4X-34w1iiIUFiwqblZiD7Qf6hp_QEHNyeqg6GBvSBA";
const DEMAND_IQ_JOURNEY_ID = "234e95cc-9a86-4ee1-9ab1-506d4920b402";

export default function DemandIQ() {
  useEffect(() => {
    /* Inject the journey div if it doesn't already exist */
    if (!document.getElementById("demand-iq-journey")) {
      const div = document.createElement("div");
      div.id = "demand-iq-journey";
      div.setAttribute("data-launcher-type", "StickyBanner");
      div.setAttribute("data-api-key", DEMAND_IQ_API_KEY);
      div.setAttribute("data-journey-id", DEMAND_IQ_JOURNEY_ID);
      document.body.insertAdjacentElement("afterbegin", div);
    }
  }, []);

  return (
    <Script
      src="https://journey.demand-iq.com/embed.js"
      strategy="afterInteractive"
    />
  );
}
