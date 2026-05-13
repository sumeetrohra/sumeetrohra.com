import { HomeContact } from "@/components/home/HomeContact";
import { HomeExperience } from "@/components/home/HomeExperience";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeProjects } from "@/components/home/HomeProjects";
import { HomeSocials } from "@/components/home/HomeSocials";
import { HomeYoutube } from "@/components/home/HomeYoutube";

export default function Home() {
  return (
    <div className="mx-auto max-w-[40rem] pt-8 pb-16 space-y-14 sm:pt-10 sm:pb-20 sm:space-y-16">
      <HomeHero />
      <HomeYoutube />
      <HomeExperience />
      <HomeProjects />
      <HomeSocials />
      <HomeContact />
    </div>
  );
}
