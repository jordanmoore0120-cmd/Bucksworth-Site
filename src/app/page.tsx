import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import HomeScripts from "@/components/HomeScripts";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.getyourbucksworth.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeContent />
      <HomeScripts />
    </>
  );
}
