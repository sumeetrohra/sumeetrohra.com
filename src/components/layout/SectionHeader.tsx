import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  heading: string;
  text?: string;
  className?: string;
}

export function SectionHeader({ heading, text, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-5 sm:mb-6", className)}>
      <h2 className="font-sans text-[0.69rem] font-medium uppercase tracking-[0.08em] text-muted-foreground/80">
        {heading}
      </h2>
      {text && <p className="mt-3.5 text-sm leading-6 text-muted-foreground">{text}</p>}
    </div>
  );
}
