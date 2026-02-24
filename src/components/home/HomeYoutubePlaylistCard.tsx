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
        "group relative block p-3 bg-card border border-border rounded-lg",
        "ring-[3px] ring-transparent outline-none cursor-pointer transition-all duration-300",
        "hover:border-muted-foreground/25 hover:ring-accent",
        "focus-visible:border-muted-foreground/25 focus-visible:ring-accent"
      )}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${title} playlist`}
        className="absolute inset-0 rounded-lg z-10"
      />

      <div className="flex gap-3">
        <div className="shrink-0 w-30 h-17 rounded-md border border-border bg-secondary overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail || fallbackThumbnail}
            alt={`${title} playlist thumbnail`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-2 mb-1.5">
            <h3 className="font-medium text-sm">{title}</h3>
            <Badge className="rounded-full font-medium text-xs bg-indigo-500/15 text-indigo-400 border-0">
              {tag}
            </Badge>
          </div>

          <p className="text-xs text-muted-foreground mb-2">{description}</p>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{videoCount} videos</span>
            <span className="text-muted-foreground/60">|</span>
            <span>By Sumeet Rohra</span>
          </div>

          <div className="mt-2.5 flex flex-wrap items-center gap-2">
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
        className="absolute top-3 right-3 size-3.5 invert opacity-0 transition-opacity transform-gpu duration-300 group-hover:opacity-100 group-focus-within:opacity-100 z-20"
      />
    </article>
  );
}
