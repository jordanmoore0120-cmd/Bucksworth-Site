import { Metadata } from "next";
import RequestServiceClient from "./RequestServiceClient";

export const metadata: Metadata = {
  title: "Request Service | Free Estimate",
  description:
    "Request a free inspection or service estimate from Bucksworth Home Services. Pest control, AC repair, plumbing, and weed control across 33 Arizona cities. Call (480) 422-8388.",
  alternates: {
    canonical: "https://www.getyourbucksworth.com/request-service",
  },
  openGraph: {
    title: "Request Service | Bucksworth Home Services",
    description:
      "Get a free estimate for pest control, HVAC, plumbing, or weed control. Serving 33 cities in Phoenix & Tucson AZ.",
  },
};

export default function RequestServicePage() {
  return <RequestServiceClient />;
}
