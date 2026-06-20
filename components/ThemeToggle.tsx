"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const cur = (document.documentElement.dataset.theme as "dark" | "light") || "dark";
    setTheme(cur);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* ignore */ }
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle light and dark theme" title="Toggle theme">
      <Icon name={theme === "dark" ? "sun" : "moon"} />
    </button>
  );
}
