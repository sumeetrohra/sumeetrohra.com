import { SectionHeader } from "@/components/layout/SectionHeader";
import { HomeProjectsCard } from "./HomeProjectsCard";
import { site } from "@/lib/site";

export function HomeProjects() {
  const { projects } = site;

  return (
    <section id="projects" className="@container/projects">
      <SectionHeader
        heading="Projects"
        text="A featured open-source package I built:"
      />

      <ul className="grid gap-3.5 sm:gap-4 @lg/projects:grid-cols-1">
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
