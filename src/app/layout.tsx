import "@/styles/globals.css";

export const metadata = {
  title: "Pest Control in Phoenix & Tucson, AZ | Bucksworth Home Services",
  description: "Bucksworth Home Services offers expert pest control, HVAC, plumbing, and home services in Phoenix & Tucson, AZ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
