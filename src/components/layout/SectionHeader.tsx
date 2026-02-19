import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  heading: string;
  text?: string;
  className?: string;
}

export function SectionHeader({ heading, text, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      <h2 className="font-sans font-medium text-xs text-muted-foreground tracking-[0.02em] uppercase">
        {heading}
      </h2>
      {text && <p className="mt-3 text-sm">{text}</p>}
    </div>
  );
}
