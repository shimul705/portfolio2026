"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Check, Moon, Palette, Sun } from "./ui/icons";

const options = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "digitalvai", label: "DigitalVai", Icon: Palette },
] as const;

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // true on the client, false during SSR — avoids a theme-icon hydration mismatch.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const active = options.find((o) => o.value === (theme === "system" ? resolvedTheme : theme)) ?? options[0];
  const ActiveIcon = active.Icon;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change theme"
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--nav-muted)]/25 text-[color:var(--nav-fg)] transition-colors hover:border-[color:var(--nav-muted)]/60"
      >
        {mounted ? <ActiveIcon size={16} /> : <span className="h-4 w-4" />}
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-surface p-1 text-foreground shadow-xl"
        >
          {options.map(({ value, label, Icon }) => (
            <button
              key={value}
              role="menuitemradio"
              aria-checked={active.value === value}
              onClick={() => {
                setTheme(value);
                setOpen(false);
              }}
              className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-surface-2"
            >
              <Icon size={15} className="text-muted" />
              <span className="flex-1">{label}</span>
              {active.value === value && <Check size={14} className="text-accent" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
