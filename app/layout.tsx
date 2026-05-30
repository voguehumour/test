import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-body-face",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://animeshjaiswal.com"),
  title: {
    default: "Animesh Jaiswal — AI Consultant",
    template: "%s — Animesh Jaiswal",
  },
  description:
    "Animesh Jaiswal is an AI consultant who helps companies design, build, and ship AI products that actually work — from strategy to production.",
  openGraph: {
    title: "Animesh Jaiswal — AI Consultant",
    description:
      "I help companies build with AI — strategy, custom models, and production systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        <div className="grain" aria-hidden />
        <div className="vignette" aria-hidden />
        <Header />
        <main id="top">{children}</main>
      </body>
    </html>
  );
}
