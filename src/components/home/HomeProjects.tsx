import { SectionHeader } from "@/components/layout/SectionHeader";
import { HomeProjectsCard } from "./HomeProjectsCard";
import { site } from "@/lib/site";

export function HomeProjects() {
  const { projects } = site;

  return (
    <section className="@container/projects">
      <SectionHeader
        heading="Projects"
        text="These are my personal projects, both past and ongoing:"
      />

      <ul className="grid gap-3 @lg/projects:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <HomeProjectsCard
              name={project.name}
              description={project.description}
              status={project.status}
              link={project.link}
              icon={project.icon}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
