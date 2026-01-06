'use client;'

import React from "react";
import { Container } from "../Container";

const Hero = () => {
  return (
    <section>
      <video className="absolute object-cover h-screen w-full" src="/video/hero_video.mp4" autoPlay loop muted={true} playsInline poster="/img/hero_thumbnail.jpg"></video>
    <Container className="h-screen flex flex-col justify-center relative">
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-white text-[120px] uppercase text-center max-w-[9.5ch] leading-[128px] -tracking-[2] drop-shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
          your creative partner in sound & story.
        </h1>
      </div>
      <div className="absolute bottom-9 inset-x-0">
        <div
          className="grid grid-cols-3 items-center">
          <p className="text-left max-w-[340px]">
            STMPD recording studios is Amsterdam&apos;s largest recording studio
            facility. Designed as the ultimate playground for music and audio
            post-production.
          </p>

          <p className="text-center">↓</p>

          <p className="flex flex-col text-right uppercase leading-tight max-w-[340px] font-maharlika">
          <span>Amsterdam&apos;s</span>
          <span>Largest</span>
          <span>Recording</span>
          <span>Studio</span>
          </p>
        </div>
      </div>
    </Container>
    </section>
  );
};

export default Hero;
