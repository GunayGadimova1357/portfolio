"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Scene from "./Scene";

export function SpaceSections() {
  const aboutRef = useRef<HTMLElement>(null);
  const [moonProgress, setMoonProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setMoonProgress(value);
  });

  return (
    <div className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="sticky top-0 h-screen overflow-hidden">
          <Scene className="absolute inset-0" starOpacity={0.42} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.38)_65%,#000000_100%)]" />

          <div className="relative z-10 flex h-full items-end px-8 pb-10 md:px-16 md:pb-14">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/45">
                Full-Stack Engineer
              </p>
              <h1 className="max-w-2xl text-5xl font-light tracking-[-0.05em] md:text-7xl">
                I design systems from interface to infrastructure.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/62 md:text-lg">
                Full-stack development focused on performance, structure and
                long-term scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        className="relative min-h-[180vh] overflow-hidden bg-black"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <Scene
            className="absolute inset-0"
            starOpacity={0.1 + moonProgress * 0.12}
          />
          <div
            className="absolute inset-[-8%] z-0"
            style={{
              transform: `translate3d(${(0.5 - moonProgress) * 6}%, ${(0.5 - moonProgress) * -10}%, 0) scale(${1.18 + moonProgress * 0.1})`,
            }}
          >
            <Image
              src="/themoon.jpg"
              alt="Moon background"
              fill
              priority
              className="object-cover object-[58%_42%] select-none opacity-[0.94]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.38)_28%,rgba(0,0,0,0.64)_60%,rgba(0,0,0,0.9)_100%)]" />
          </div>

          <div className="absolute right-8 top-24 z-10 text-xs uppercase tracking-[0.35em] text-white/70 md:right-16">
            The Moon
          </div>

          <div className="relative z-10 flex h-full items-end px-8 pb-24 md:px-16 md:pb-28">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-light tracking-[-0.05em] md:text-7xl">
                About.
              </h2>
              <p className="mt-8 max-w-4xl text-lg leading-8 text-white/74 md:text-[1.75rem] md:leading-[1.45]">
                I design and engineer complete digital products — not just
                screens, but the logic behind them. Working with Next.js,
                backend services, databases and system architecture, I aim to
                create products that feel simple on the surface and powerful
                underneath.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
