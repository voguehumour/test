import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Cormorant } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Cursor } from "@/components/Cursor";
import { Atmosphere } from "@/components/Atmosphere";
import { PageTransition } from "@/components/PageTransition";

const display = Cormorant({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Zach Shev — Painter",
    template: "%s · Zach Shev",
  },
  description:
    "The studio of Zach Shev — contemporary oil paintings, portraits, and landscape studies. A living digital exhibition for collectors, curators, and galleries.",
  keywords: [
    "Zach Shev",
    "oil painter",
    "contemporary portraits",
    "fine art",
    "commissioned portraits",
    "art gallery",
  ],
  openGraph: {
    title: "Zach Shev — Painter",
    description:
      "A living digital exhibition. Portraits, landscapes, and quiet interiors.",
    type: "website",
  },
  metadataBase: new URL("https://zachshev.studio"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${sans.variable}`}>
      <body className="canvas-texture grain antialiased font-serif text-ink">
        <Atmosphere />
        <Cursor />
        <SmoothScroll>
          <Navigation />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
