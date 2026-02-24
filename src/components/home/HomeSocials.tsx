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

      <ul className="flex flex-wrap items-center gap-2.5">
        {social.map((link) => (
          <li key={link.label} className="group">
            <a
              className="inline-flex items-center gap-2 px-2.5 h-6 bg-secondary rounded-full outline-none font-medium text-xs text-secondary-foreground transition-all hover:bg-accent focus:ring-[3px] focus:ring-ring"
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
