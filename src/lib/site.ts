import siteData from "@/data/site.json";

export type ProjectStatus = "active" | "sold" | "development";

export interface SiteConfig {
  profile: typeof siteData.profile;
  seo: typeof siteData.seo;
  links: typeof siteData.links;
  projects: Array<{
    name: string;
    description: string;
    status: ProjectStatus;
    icon: string;
    link?: string;
  }>;
  social: typeof siteData.social;
}

export const site: SiteConfig = siteData as SiteConfig;

export const iconMap: Record<string, string> = {
  analytics: "/icons/huge/icon-analytics-01.svg",
  listingcat: "/logos/projects/logo-listingcat.svg",
  blueskymeter: "/logos/projects/logo-blueskymeter.svg",
  x: "/icons/huge/icon-new-twitter.svg",
  threads: "/icons/huge/icon-threads.svg",
  bluesky: "/icons/huge/icon-bluesky.svg",
  linkedin: "/icons/huge/icon-linkedin-01.svg",
  substack: "/icons/huge/icon-bookmark-01.svg",
};
