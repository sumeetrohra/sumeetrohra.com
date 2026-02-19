import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "group flex items-center mx-auto h-16",
        className
      )}
    >
      <div className="flex items-center gap-1 select-none">
        <span className="relative z-10 shrink-0 text-amber-500">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" className="size-5 invert" />
        </span>
        <span className="font-bold text-[1.0625rem] leading-5 tracking-[0.025em] text-foreground uppercase">
          {site.profile.initials}
        </span>
      </div>
    </header>
  );
}
