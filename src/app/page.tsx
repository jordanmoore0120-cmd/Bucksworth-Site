import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.getyourbucksworth.com",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
