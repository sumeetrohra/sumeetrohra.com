import { SectionHeader } from "@/components/layout/SectionHeader";
import { site } from "@/lib/site";

export function HomeContact() {
  const { links } = site;

  return (
    <section id="contact">
      <SectionHeader heading="Get in touch" />

      <p className="text-sm leading-6 text-muted-foreground">
        You can reach me{" "}
        <span className="hidden min-[480px]:inline">anytime</span> at{" "}
        <a
          className="group inline-flex items-center gap-1 font-medium text-foreground"
          href={`mailto:${links.email}`}
        >
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-amber-500 after:transition-all after:duration-300 group-hover:after:h-0.5">
            {links.email}
          </span>
        </a>
      </p>
    </section>
  );
}
