import { SectionHeader } from "@/components/layout/SectionHeader";
import { site } from "@/lib/site";
import { HomeExperienceCard } from "./HomeExperienceCard";

export function HomeExperience() {
  const { experience } = site;

  return (
    <section id="experience" className="@container/experience">
      <SectionHeader
        heading="Experience"
        text="A snapshot of my recent roles:"
      />

      <ul className="grid gap-3.5 sm:gap-4">
        {experience.map((item) => (
          <li key={`${item.company}-${item.role}-${item.period}`}>
            <HomeExperienceCard
              company={item.company}
              role={item.role}
              period={item.period}
              location={item.location}
              icon={item.icon}
              link={item.link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
