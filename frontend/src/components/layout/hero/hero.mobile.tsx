"use client";

import { Container } from "@/components/Container";
import Icon from "@/components/ui/icon.component";
import React from "react";

const HeroMobile = () => {
  return (
    <section>
      <video
        className="absolute object-cover h-screen w-full"
        src="/video/hero_video.mp4"
        autoPlay
        loop
        muted={true}
        playsInline
        poster="/img/hero_thumbnail.jpg"
      ></video>
      <Container className="h-screen flex flex-col justify-center relative">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-[3.125rem] leading-[3rem] uppercase text-center drop-shadow-[0_.25rem_.625rem_rgba(0,0,0,0.5)]">
            your creative partner in sound & story.
          </h1>
          <hr className="w-[80%] rounded-sm" />
          <p className="flex flex-col text-center uppercase leading-tight font-maharlika text-[1.25rem]">
            <span>Amsterdam&apos;s</span>
            <span>Largest</span>
            <span>Recording</span>
            <span>Studio</span>
          </p>
        </div>
        <div className="absolute bottom-5 inset-x-0">
          <div className="flex justify-center h-full items-end order-3 ">
            <Icon icon="arrow-down" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroMobile;
