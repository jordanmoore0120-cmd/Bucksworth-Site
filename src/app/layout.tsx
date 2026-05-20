import type { Metadata } from "next";
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
      <head>
        <link
          rel="preload"
          as="image"
          href="https://getyourbucksworth.com/wp-content/uploads/bucksworth2-e1759741638670.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
