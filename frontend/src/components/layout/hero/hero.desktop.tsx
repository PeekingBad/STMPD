"use client";

import { Container } from "@/components/Container";
import Icon from "@/components/ui/icon.component";
import React from "react";

const HeroDesktop = () => {
  return (
    <section>
      <video className="absolute object-cover h-screen w-full" src="/video/hero_video.mp4" autoPlay loop muted={true} playsInline poster="/img/hero_thumbnail.jpg"></video>
    <Container className="h-screen flex flex-col justify-center relative">
      <div className="flex items-center justify-center">
        <h1 className="text-white text-[7.5rem] uppercase text-center md:max-w-[9.5ch] md:leading-[7.5rem] md:-tracking-[2] drop-shadow-[0_.25rem_.625rem_rgba(0,0,0,0.5)]">
          your creative partner in sound & story.
        </h1>
      </div>
      <div className="absolute bottom-9 inset-x-0">
        <div
          className="flex flex-col md:grid md:grid-cols-3 items-center">
          <p className="hidden md:block text-left md:max-w-[21.25rem]">
            STMPD recording studios is Amsterdam&apos;s largest recording studio
            facility. Designed as the ultimate playground for music and audio
            post-production.
          </p>

          <div className="flex justify-center h-full items-end order-3 md:order-2">
            <Icon icon="arrow-down" />  
          </div>

          <p className="flex flex-col text-center md:text-right uppercase leading-tight font-maharlika text-[1rem] md:text-[1.25rem] order-2 md:order-3">
          <span>Amsterdam&apos;s</span>
          <span>Largest</span>
          <span>Recording</span>
          <span>Studio</span>
          </p>
        </div>
        <div className="absolute bottom-9 inset-x-0">
          <div className="flex flex-col md:grid md:grid-cols-3 items-center">
            <p className="hidden md:block text-left md:max-w-[21.25rem]">
              STMPD recording studios is Amsterdam&apos;s largest recording
              studio facility. Designed as the ultimate playground for music and
              audio post-production.
            </p>

            <div className="flex justify-center h-full items-end order-3 md:order-2">
              <Icon icon="arrow-down" />
            </div>

            <p className="flex flex-col text-center md:text-right uppercase leading-tight font-maharlika text-[1rem] md:text-[1.25rem] order-2 md:order-3">
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

export default HeroDesktop;
