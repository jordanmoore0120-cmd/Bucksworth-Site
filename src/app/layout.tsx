import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Bucksworth Home Services | Pest Control, HVAC & Plumbing in Phoenix & Tucson AZ",
  description:
    "Family-owned pest control, HVAC, plumbing & insulation serving Phoenix and Tucson, Arizona since 2013. Same-day service. Call (480) 422-8388.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
