"use client";

import { useRef } from "react";
import useHotkeys from "use-hotkeys";
import { cn } from "@/lib/utils";

interface HotkeyProps {
  /** Keyboard key (e.g. "b", "e") - must be rendered inside an <a> */
  shortcutKey: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Hotkey({
  shortcutKey,
  variant = "primary",
  className,
}: HotkeyProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useHotkeys(
    (key, event) => {
      if (key === shortcutKey) {
        event.preventDefault();
        (ref.current?.closest("a") as HTMLAnchorElement | null)?.click();
      }
    },
    [shortcutKey],
    [shortcutKey]
  );

  return (
    <span
      ref={ref}
      className={cn(
        "shrink-0 inline-flex items-center justify-center size-4 border rounded font-mono text-[0.6875rem] leading-none uppercase",
        variant === "primary" &&
          "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground",
        variant === "secondary" &&
          "bg-muted border-border text-muted-foreground",
        className
      )}
    >
      {shortcutKey.toUpperCase()}
    </span>
  );
}
