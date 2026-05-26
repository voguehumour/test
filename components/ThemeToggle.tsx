"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme");
    setTheme(t === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      data-cursor="link"
      data-cursor-label={theme === "dark" ? "light" : "dark"}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="font-mono text-step--1 tracking-wide"
      style={{ color: "var(--fg)" }}
    >
      {theme === "dark" ? "☾" : "☀"}
    </button>
  );
}
