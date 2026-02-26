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
        "block rounded-lg border border-border/80 bg-card p-3.5 sm:p-4",
        link &&
          "group relative cursor-pointer outline-none ring-2 ring-transparent transition-[border-color,box-shadow] duration-200 hover:border-border hover:ring-ring/25 focus-visible:border-border focus-visible:ring-ring/45"
      )}
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
    >
      <div className="mb-2.5 flex items-center gap-2.5">
        <div className="shrink-0 grid place-content-center size-6 bg-secondary border border-border rounded-sm overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconSrc}
            alt=""
            className="size-4 object-contain"
          />
        </div>

        <h3 className="flex-1 text-sm font-medium leading-5">{role}</h3>
        <span className="whitespace-nowrap text-xs text-muted-foreground">{period}</span>
      </div>

      <p className="text-sm leading-6">
        <span className="text-foreground">{company}</span>
        {location ? (
          <span className="text-muted-foreground">{` \u00b7 ${location}`}</span>
        ) : null}
      </p>
    </Component>
  );
}
