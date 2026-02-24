import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { iconMap } from "@/lib/site";
import type { ProjectStatus } from "@/lib/site";

interface HomeProjectsCardProps {
  name: string;
  description: string;
  status: ProjectStatus;
  link?: string;
  icon: string;
}

const statusLabels: Record<ProjectStatus, string> = {
  active: "Active",
  sold: "Sold",
  development: "In development",
};

const statusVariantStyles: Record<ProjectStatus, string> = {
  active: "bg-green-500/15 text-green-400 border-0",
  sold: "bg-orange-500/15 text-orange-400 border-0",
  development: "bg-indigo-500/15 text-indigo-400 border-0",
};

export function HomeProjectsCard({
  name,
  description,
  status,
  link,
  icon,
}: HomeProjectsCardProps) {
  const Component = link ? "a" : "div";
  const iconSrc = iconMap[icon] || iconMap.analytics;

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
        <div className="shrink-0 grid place-content-center size-6 bg-secondary border border-border rounded-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={iconSrc}
            alt=""
            className="size-4"
          />
        </div>

        <h3 className="font-medium text-sm">{name}</h3>
        <Badge
          className={cn(
            "rounded-full font-medium text-xs capitalize",
            statusVariantStyles[status]
          )}
        >
          {statusLabels[status]}
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground">{description}</p>

      {link && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="/icons/huge/icon-link-square-02.svg"
          alt=""
          className="absolute top-3 right-3 size-3.5 invert opacity-0 transition-opacity transform-gpu duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        />
      )}
    </Component>
  );
}
