"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const options = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "nft", label: "Vibrant" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-40 rounded-md border border-[var(--nav-border)]" />;
  }

  return (
    <div className="flex items-center gap-1 rounded-md border border-[var(--nav-border)] p-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className="rounded px-2 py-1 text-xs"
          style={
            theme === option.value
              ? { background: "var(--accent)", color: "var(--button-fg)" }
              : { color: "var(--muted)" }
          }
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
