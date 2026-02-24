import { HomeContact } from "@/components/home/HomeContact";
import { HomeExperience } from "@/components/home/HomeExperience";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeProjects } from "@/components/home/HomeProjects";
import { HomeSocials } from "@/components/home/HomeSocials";
import { HomeYoutube } from "@/components/home/HomeYoutube";

export default function Home() {
  return (
    <div className="mx-auto pt-6 pb-12 max-w-[40rem] space-y-12 sm:py-10">
      <HomeHero />
      <HomeYoutube />
      <HomeExperience />
      <HomeProjects />
      <HomeSocials />
      <HomeContact />
    </div>
  );
}
