import { cn } from "@/lib/utils";

interface HomeYoutubeVideoCardProps {
  title: string;
  url: string;
  thumbnail?: string;
  duration: string;
  publishedAt: string;
}

const fallbackThumbnail = "/logos/youtube/thumb-placeholder.svg";

export function HomeYoutubeVideoCard({
  title,
  url,
  thumbnail,
  duration,
  publishedAt,
}: HomeYoutubeVideoCardProps) {
  return (
    <a
      className={cn(
        "group relative block p-3 bg-card border border-border rounded-lg",
        "ring-[3px] ring-transparent outline-none cursor-pointer transition-all duration-300",
        "hover:border-muted-foreground/25 hover:ring-accent",
        "focus-visible:border-muted-foreground/25 focus-visible:ring-accent"
      )}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative mb-2.5 rounded-md border border-border bg-secondary overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail || fallbackThumbnail}
          alt={`${title} thumbnail`}
          className="w-full aspect-video object-cover"
        />
        <span className="absolute right-1.5 bottom-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-medium text-white">
          {duration}
        </span>
      </div>

      <h3 className="text-sm font-medium leading-5 max-h-10 overflow-hidden">{title}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{publishedAt}</p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/huge/icon-link-square-02.svg"
        alt=""
        className="absolute top-3 right-3 size-3.5 invert opacity-0 transition-opacity transform-gpu duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
      />
    </a>
  );
}
