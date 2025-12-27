import React, { useEffect, useState } from "react";

const STORAGE_KEY = "theme"; // "dark" | "light"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggle}
      className="rounded-full border border-border/70 bg-surface px-4 py-2 text-xs text-text/80 hover:text-text transition-colors"
      aria-label="Toggle theme"
      type="button"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}

