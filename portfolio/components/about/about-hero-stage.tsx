"use client";

import type { RefObject } from "react";
import { AsciiArt } from "@/components/ui/ascii-art";

type AboutHeroStageProps = {
  heroRef: RefObject<HTMLDivElement | null>;
};

export function AboutHeroStage({ heroRef }: AboutHeroStageProps) {
  return (
    <div ref={heroRef} className="absolute inset-0 will-change-transform">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.04),transparent_18%),linear-gradient(180deg,#07080d_0%,#05060a_56%,#040509_100%)]" />

      <div className="absolute left-1/2 top-[18vh] h-[46vh] w-[74vw] max-w-[1100px] -translate-x-1/2 md:top-[17vh] md:h-[52vh] md:w-[70vw]">
        <div className="absolute inset-0 rounded-[50%] border border-white/4 blur-[2px]" />
        <div className="absolute inset-x-[24%] top-[10%] h-[16%] rounded-full bg-white/6 blur-3xl" />
        <div className="absolute left-1/2 top-[42%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <AsciiArt
          src="/alo.jpg.webp"
          resolution={188}
          color="rgba(255,255,255,0.8)"
          animationStyle="fade"
          animationDuration={1.5}
          animateOnView={false}
          objectFit="contain"
          className="h-full w-full opacity-[0.82] [mask-image:radial-gradient(ellipse_at_center,black_22%,rgba(0,0,0,0.96)_56%,transparent_84%)]"
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_14%,rgba(5,6,8,0.14)_48%,rgba(5,6,8,0.88)_100%)]" />

      <div className="relative z-10 flex min-h-screen items-end px-6 pb-6 pt-32 md:px-12 md:pb-8 md:pt-36">
        <h1 className="text-[clamp(5.75rem,15vw,11.5rem)] font-light leading-[0.8] tracking-[-0.1em] text-white">
          About
        </h1>
      </div>
    </div>
  );
}
