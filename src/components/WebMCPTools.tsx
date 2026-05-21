"use client";

import { useEffect } from "react";

/**
 * WebMCP Imperative Tool Registration
 * Registers tools that AI agents (Chrome agentic browsing, ChatGPT, etc.)
 * can discover and invoke programmatically.
 */
export default function WebMCPTools() {
  useEffect(() => {
    // Wait for navigator.modelContext to be available
    const registerTools = () => {
      const mc = (navigator as any).modelContext;
      if (!mc || typeof mc.registerTool !== "function") return;

      mc.registerTool({
        name: "call_bucksworth",
        description:
          "Call Bucksworth Home Services. Phoenix: (480) 422-8388, Tucson: (520) 284-9930",
        parameters: {
          type: "object",
          properties: {
            branch: {
              type: "string",
              enum: ["phoenix", "tucson"],
              description: "Which branch to call",
            },
          },
        },
        handler: ({ branch }: { branch: string }) => {
          const phone = branch === "tucson" ? "5202849930" : "4804228388";
          window.location.href = `tel:${phone}`;
        },
      });

      mc.registerTool({
        name: "get_online_estimate",
        description:
          "Start a free online estimate for pest control, HVAC, or other home services via the Demand IQ portal",
        parameters: {
          type: "object",
          properties: {
            service: {
              type: "string",
              enum: [
                "pest-and-termite",
                "air-conditioning-and-heating",
                "weed-and-lawn-care",
              ],
              description: "Which service to get an estimate for",
            },
          },
        },
        handler: () => {
          window.open("https://portal.hero.demand-iq.com", "_blank");
        },
      });

      mc.registerTool({
        name: "find_service_area",
        description:
          "Navigate to a specific city's service page to see what Bucksworth offers there. Serves 33 cities across Phoenix and Tucson metro areas.",
        parameters: {
          type: "object",
          properties: {
            city_slug: {
              type: "string",
              description:
                'City URL slug, e.g. "phoenix-az", "scottsdale-az", "tucson-az"',
            },
          },
          required: ["city_slug"],
        },
        handler: ({ city_slug }: { city_slug: string }) => {
          window.location.href = `/${city_slug}`;
        },
      });

      mc.registerTool({
        name: "book_service",
        description:
          "Navigate to the service page for a specific service in a specific city",
        parameters: {
          type: "object",
          properties: {
            city_slug: {
              type: "string",
              description: 'City URL slug, e.g. "phoenix-az"',
            },
            service_slug: {
              type: "string",
              enum: [
                "pest-and-termite",
                "air-conditioning-and-heating",
                "plumbing-and-water-heaters",
                "weed-and-lawn-care",
              ],
              description: "Service vertical slug",
            },
          },
          required: ["city_slug", "service_slug"],
        },
        handler: ({
          city_slug,
          service_slug,
        }: {
          city_slug: string;
          service_slug: string;
        }) => {
          window.location.href = `/${city_slug}/${service_slug}`;
        },
      });

      mc.registerTool({
        name: "register_termite_warranty",
        description:
          "Navigate to the termite warranty registration page for new construction homes. Builders who hired Bucksworth for pre-treatment need to transfer the warranty to the new homeowner.",
        parameters: { type: "object", properties: {} },
        handler: () => {
          window.location.href = "/termite-warranty";
        },
      });
    };

    // Try immediately, then poll briefly in case model context loads async
    registerTools();
    const timer = setInterval(registerTools, 1000);
    setTimeout(() => clearInterval(timer), 5000);

    return () => clearInterval(timer);
  }, []);

  return null; // No visual output
}
