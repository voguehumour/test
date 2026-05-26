import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/cursor/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import AINetwork from "@/components/network/AINetwork";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TouchRipple from "@/components/cursor/TouchRipple";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://animeshjaiswal.com"),
  title: {
    default: "Animesh Jaiswal — AI consultant",
    template: "%s — Animesh Jaiswal",
  },
  description:
    "AI consultant who can design and ship the prototype himself. I help teams ship intelligent products that actually work.",
  openGraph: {
    title: "Animesh Jaiswal — AI consultant",
    description:
      "Thinks clearly about AI, then builds the thing. Consultant, product designer, creative engineer.",
    type: "website",
  },
};

const themeScript = `
(function(){try{
  var t = localStorage.getItem('theme');
  if(!t){ t = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'; }
  document.documentElement.setAttribute('data-theme', t);
}catch(e){ document.documentElement.setAttribute('data-theme','dark'); }})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${display.variable} ${mono.variable}`}>
        <div className="grain" aria-hidden />
        <SmoothScroll />
        <AINetwork />
        <Cursor />
        <TouchRipple />
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
