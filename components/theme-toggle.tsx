"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-16 rounded-md border border-neutral-300 dark:border-neutral-700" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex items-center gap-1 rounded-md border border-neutral-300 p-1 dark:border-neutral-700"
    >
      <span
        className={`rounded px-1.5 py-1 text-xs ${
          !isDark
            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
            : "text-neutral-400"
        }`}
      >
        Light
      </span>
      <span
        className={`rounded px-1.5 py-1 text-xs ${
          isDark
            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
            : "text-neutral-400"
        }`}
      >
        Dark
      </span>
    </button>
  );
}
