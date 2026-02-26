import { SectionHeader } from "@/components/layout/SectionHeader";
import { site } from "@/lib/site";
import { HomeYoutubePlaylistCard } from "./HomeYoutubePlaylistCard";
import { HomeYoutubeVideoCard } from "./HomeYoutubeVideoCard";

export function HomeYoutube() {
  const { youtube } = site;

  return (
    <section id="youtube" className="@container/youtube">
      <SectionHeader
        heading="YouTube"
        text="JS and React tutorials"
      />

      <div className="space-y-4 sm:space-y-5">
        <HomeYoutubePlaylistCard
          title={youtube.playlist.title}
          description={youtube.playlist.description}
          videoCount={youtube.playlist.videoCount}
          url={youtube.playlist.url}
          channelUrl={youtube.channelUrl}
          thumbnail={youtube.playlist.thumbnail}
          tag={youtube.playlist.tag}
        />

        <ul className="grid gap-4 @lg/youtube:grid-cols-2">
          {youtube.videos.map((video) => (
            <li key={video.url}>
              <HomeYoutubeVideoCard
                title={video.title}
                url={video.url}
                thumbnail={video.thumbnail}
                duration={video.duration}
                publishedAt={video.publishedAt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
