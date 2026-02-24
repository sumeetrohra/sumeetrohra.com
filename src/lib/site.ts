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
  experience: Array<{
    company: string;
    role: string;
    period: string;
    location?: string;
    icon: string;
    link?: string;
  }>;
  youtube: {
    channelUrl: string;
    playlist: {
      title: string;
      description: string;
      videoCount: number;
      url: string;
      thumbnail: string;
      tag: string;
    };
    videos: Array<{
      title: string;
      url: string;
      thumbnail?: string;
      duration: string;
      publishedAt: string;
      topic: "JavaScript" | "React";
    }>;
  };
  social: typeof siteData.social;
}

export const site: SiteConfig = siteData as SiteConfig;

export const iconMap: Record<string, string> = {
  npm: "/icons/huge/icon-npm.svg",
  "npm-social": "/icons/huge/icon-npm-social.svg",
  kognitos: "/logos/experience/logo-kognitos.png",
  alchemy: "/logos/experience/logo-alchemy.png",
  flextrade: "/logos/experience/logo-flextrade.png",
  proximity: "/logos/experience/logo-proximity.png",
  studyleague: "/logos/experience/logo-company-generic.svg",
  jio: "/logos/experience/logo-jio.png",
  "company-generic": "/logos/experience/logo-company-generic.svg",
  x: "/icons/huge/icon-new-twitter.svg",
  linkedin: "/icons/huge/icon-linkedin-01.svg",
  youtube: "/icons/huge/icon-youtube.svg",
  medium: "/icons/huge/icon-medium.svg",
  github: "/icons/huge/icon-github.svg",
  resume: "/icons/huge/icon-favourite.svg",
};
