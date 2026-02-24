import { cn } from "@/lib/utils";
import { iconMap } from "@/lib/site";

interface HomeExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location?: string;
  icon: string;
  link?: string;
}

const fallbackIcon = "/logos/experience/logo-company-generic.svg";

export function HomeExperienceCard({
  company,
  role,
  period,
  location,
  icon,
  link,
}: HomeExperienceCardProps) {
  const Component = link ? "a" : "div";
  const iconSrc = iconMap[icon] || fallbackIcon;

  return (
    <Component
      className={cn(
        "block p-3 bg-card border border-border rounded-lg",
        link &&
          "group relative ring-[3px] ring-transparent outline-none cursor-pointer transition-all duration-300 hover:border-muted-foreground/25 hover:ring-accent focus-visible:border-muted-foreground/25 focus-visible:ring-accent"
      )}
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="shrink-0 grid place-content-center size-6 bg-secondary border border-border rounded-sm overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconSrc}
            alt=""
            className="size-4 object-contain"
          />
        </div>

        <h3 className="font-medium text-sm flex-1">{role}</h3>
        <span className="text-xs text-muted-foreground whitespace-nowrap">{period}</span>
      </div>

      <p className="text-sm">
        <span className="text-foreground">{company}</span>
        {location ? (
          <span className="text-muted-foreground">{` \u00b7 ${location}`}</span>
        ) : null}
      </p>
    </Component>
  );
}
