"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { Hotkey } from "./Hotkey";

export function HomeHero() {
  const { profile, links } = site;

  return (
    <section>
      <Image
        className="mb-4 size-11 rounded-full"
        src={profile.avatar}
        alt={profile.name}
        width={44}
        height={44}
        loading="eager"
        draggable={false}
      />

      <h1 className="mb-4 font-sans font-semibold text-[1.375rem] leading-7 tracking-[0.02em]">
        Hey, I&apos;m{" "}
        <span className="border-b-[0.09375rem] border-current text-amber-500">
          {profile.name}
        </span>
        !
      </h1>

      <div className="mb-5 text-sm leading-[1.75] space-y-3 sm:space-y-0">
        <p>
          <span className="sm:inline-block sm:mb-1.75">
            {profile.bio[0]}
            ,{" "}
            <span className="sm:hidden">{profile.location.split(", ")[1]}.</span>
            {profile.locationIcon && (
              <span className="hidden sm:inline-flex sm:items-center sm:gap-1.5">
                {profile.location.split(", ")[1]}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.locationIcon}
                  alt=""
                  className="shrink-0 w-3 h-2.25 rounded-xs drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]"
                />
              </span>
            )}
          </span>
        </p>

        <p>{profile.bio[1]}</p>
      </div>

      <div className="flex items-center gap-4">
        <Button
          asChild
          className="min-w-[8.25rem] rounded-full h-8 bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          <a
            href={links.calcom}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Hotkey
              shortcutKey={links.hotkeys.calcom}
              variant="secondary"
            />
            Book a call
          </a>
        </Button>

        <Button
          asChild
          variant="secondary"
          className="rounded-full h-8 border border-border bg-card text-card-foreground hover:bg-accent"
        >
          <a href={`mailto:${links.email}`}>
            <Hotkey
              shortcutKey={links.hotkeys.email}
              variant="secondary"
            />
            Send an email
          </a>
        </Button>
      </div>

      <p className="relative mt-4 pl-5 text-xs text-muted-foreground">
        <span
          className="absolute left-0 top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-green-500 border-4 border-green-500/20"
          aria-hidden
        />
        {profile.tagline}
      </p>
    </section>
  );
}
