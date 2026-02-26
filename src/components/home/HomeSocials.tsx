import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { site, iconMap } from "@/lib/site";

export function HomeSocials() {
  const { social } = site;

  return (
    <section id="social">
      <SectionHeader
        heading="Find me on"
        text="You can find me on the following social platforms:"
      />

      <ul className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        {social.map((link) => (
          <li key={link.label} className="group">
            <a
              className="inline-flex h-6.5 items-center gap-2 rounded-full bg-secondary px-3 text-xs font-medium text-secondary-foreground outline-none transition-all hover:bg-accent focus:ring-2 focus:ring-ring/45"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={iconMap[link.icon] || iconMap.x}
                alt=""
                className={cn(
                  "shrink-0 size-4",
                  link.invert === false ? null : "invert",
                  link.fill
                )}
              />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
