import { SectionHeader } from "@/components/layout/SectionHeader";
import { site } from "@/lib/site";

export function HomeTechStack() {
  const { techStack } = site;

  return (
    <section id="tech-stack" className="@container/tech-stack">
      <SectionHeader
        heading="Tech Stack"
        text="Tools and technologies I work with:"
      />

      <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
        {Object.entries(techStack).map(([category, items]) => (
          <div
            key={category}
            className="rounded-lg border border-border/80 bg-card p-3.5 sm:p-4"
          >
            <h3 className="mb-3 text-sm font-medium leading-5 text-foreground">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center rounded bg-secondary/80 px-2 py-0.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
