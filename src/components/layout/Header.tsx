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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="m9.942 18.25 4.126-16.5h3.201l-4.125 16.5zm-7.212 0 4.125-16.5h3.202l-4.125 16.5z" />
          </svg>
        </span>
        <span className="font-bold text-[1.0625rem] leading-5 tracking-[0.025em] text-foreground uppercase">
          {site.profile.initials}
        </span>
      </div>
    </header>
  );
}
