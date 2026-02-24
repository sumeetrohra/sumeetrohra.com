import { site } from "@/lib/site";

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  const base = site.seo.url.replace(/\/$/, "");
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

export function StructuredData() {
  const sameAs = site.profile.sameAs || [];
  const resumeUrl = toAbsoluteUrl(site.links.resumeUrl);
  const personId = `${site.seo.url}#person`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.profile.name,
    givenName: site.profile.firstName,
    jobTitle: site.profile.jobTitle,
    email: `mailto:${site.links.email}`,
    image: toAbsoluteUrl(site.profile.avatar),
    url: site.seo.url,
    homeLocation: {
      "@type": "Place",
      name: site.profile.location,
    },
    sameAs,
    subjectOf: resumeUrl,
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.seo.url}#website`,
    name: site.seo.title,
    url: site.seo.url,
    description: site.seo.description,
    publisher: {
      "@id": personId,
    },
    inLanguage: "en",
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.seo.url}#profile`,
    url: site.seo.url,
    name: site.seo.title,
    description: site.seo.description,
    mainEntity: {
      "@id": personId,
    },
  };

  const projectList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site.seo.url}#projects`,
    name: "Projects",
    itemListElement: site.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        url: project.link ? toAbsoluteUrl(project.link) : site.seo.url,
      },
    })),
  };

  const experienceList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${site.seo.url}#experience`,
    name: "Experience",
    itemListElement: site.experience.map((role, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Role",
        roleName: role.role,
        description: role.period,
        worksFor: {
          "@type": "Organization",
          name: role.company,
          url: role.link ? toAbsoluteUrl(role.link) : undefined,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceList) }}
      />
    </>
  );
}
