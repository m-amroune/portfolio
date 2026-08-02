"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span aria-hidden className="h-10 w-10" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        isDark ? "Activer le mode clair" : "Activer le mode sombre"
      }
      className="
        flex h-10 w-10 cursor-pointer items-center justify-center
        rounded-full border border-[var(--border)]
        text-[var(--muted)] transition
        hover:border-[var(--accent)]
        hover:bg-[var(--background)]
        hover:text-[var(--accent)]
      "
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}