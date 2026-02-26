import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface HomeYoutubePlaylistCardProps {
  title: string;
  description: string;
  videoCount: number;
  url: string;
  channelUrl: string;
  thumbnail?: string;
  tag: string;
}

const fallbackThumbnail = "/logos/youtube/thumb-placeholder.svg";

export function HomeYoutubePlaylistCard({
  title,
  description,
  videoCount,
  url,
  channelUrl,
  thumbnail,
  tag,
}: HomeYoutubePlaylistCardProps) {
  return (
    <article
      className={cn(
        "group relative block rounded-lg border border-border/80 bg-card p-3.5 sm:p-4",
        "cursor-pointer outline-none ring-2 ring-transparent transition-[border-color,box-shadow] duration-200",
        "hover:border-border hover:ring-ring/25",
        "focus-visible:border-border focus-visible:ring-ring/45"
      )}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${title} playlist`}
        className="absolute inset-0 rounded-lg z-10"
      />

      <div className="flex gap-3.5 sm:gap-4">
        <div className="shrink-0 w-30 h-17 rounded-md border border-border bg-secondary overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail || fallbackThumbnail}
            alt={`${title} playlist thumbnail`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-start gap-2">
            <h3 className="text-sm font-medium leading-5">{title}</h3>
            <Badge className="rounded-full font-medium text-xs bg-indigo-500/15 text-indigo-400 border-0">
              {tag}
            </Badge>
          </div>

          <p className="mb-2.5 text-xs leading-5 text-muted-foreground">{description}</p>

          <div className="flex items-center gap-2 text-xs leading-5 text-muted-foreground">
            <span>{videoCount} videos</span>
            <span className="text-muted-foreground/60">|</span>
            <span>By Sumeet Rohra</span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-2 h-5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground relative z-20">
              Watch playlist
            </span>
            <a
              className="inline-flex items-center px-2 h-5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground hover:bg-accent relative z-20"
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View channel
            </a>
          </div>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/huge/icon-link-square-02.svg"
        alt=""
        className="absolute top-3.5 right-3.5 size-3.5 invert opacity-0 transition-opacity transform-gpu duration-200 group-hover:opacity-100 group-focus-within:opacity-100 z-20"
      />
    </article>
  );
}
