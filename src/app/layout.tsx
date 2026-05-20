import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Pest Control in Phoenix & Tucson, AZ | Bucksworth Home Services",
    template: "%s | Bucksworth Home Services",
  },
  description:
    "Bucksworth Home Services offers expert pest control, HVAC, plumbing, and home services in Phoenix & Tucson, AZ. Family-owned since 2013.",
  metadataBase: new URL("https://getyourbucksworth.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
