import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const buildYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "sticky top-[100vh] mx-auto mt-3 flex flex-col items-center gap-3 border-t border-border/80 pt-8 pb-12 sm:mt-6 sm:flex-row sm:justify-between sm:gap-8 sm:border-none sm:pt-10 sm:pb-8",
        className
      )}
    >
      <p className="group flex items-center gap-1.5 text-sm text-muted-foreground sm:text-xs">
        <span>
          &copy; {buildYear} Built with
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/huge/icon-favourite.svg"
          alt=""
          className="shrink-0 size-3 invert transition-transform duration-300 will-change-transform group-hover:scale-110"
          aria-hidden
        />
        <span>by {site.profile.firstName}</span>
      </p>

      <p className="inline-flex items-center gap-1 text-sm text-muted-foreground sm:text-xs">
        This website is
        <a
          className="group ml-0.75 inline-flex items-center gap-1 font-medium text-foreground"
          href={site.links.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-amber-500 after:transition-all after:duration-300 group-hover:after:h-0.5">
            open source
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/huge/icon-git-fork.svg"
            alt=""
            className="shrink-0 size-3.5 invert"
            aria-hidden
          />
        </a>
      </p>
    </footer>
  );
}
