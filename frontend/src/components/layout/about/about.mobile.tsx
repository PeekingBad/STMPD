import React from "react";
import { Container } from "../../Container";
import Image from "next/image";
import Button from "../../ui/button.component";
import Icon from "../../ui/icon.component";

const AboutMobile = () => {
  return (
    <section>
      <Container className="h-screen">
        <div className="relative w-full h-full">
          <Image
            src="/img/Experience.jpg"
            alt=""
            fill
            className="object-cover h-full w-full z-0"
          />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.5)_41%,rgba(102,102,102,0)_100%)]">
          <div className="flex flex-col h-full justify-center relative z-20 px-8 gap-3">
            <h2 className="font-sans text-2.5 drop-shadow-[0_.25rem_.625rem_rgba(0,0,0,0.5)] font-light">ABOUT & APPROACH</h2>
            <h3 className="text-[2.25rem] flex flex-col leading-[2.5rem]">
                <span>THE</span>
                <span>STMPD</span>
                <span>EXPERIENCE</span>
            </h3>
            <p className="text-[.875rem]">
                STMPD recording studios is Amsterdam&apos;s largest recording
                studio facility. Designed as the ultimate playground for music and
                audio post-production.
            </p>
            <p className="text-[.875rem]">
            Designed as the ultimate playground for music and audio post-production.
            </p>
            <ul className="flex flex-col gap-3 mt-4">
                <li className="flex gap-3 items-center"><Button className="text-black py-1 px-2.5 font-semibold bg-white">ABOUT</Button><Icon icon="arrow-right" className="h-[1rem] w-[1.5rem] fill-white"/></li>
                <li className="flex gap-3 items-center"><Button className="text-black py-1 px-2.5 font-semibold bg-white">APPROACH</Button><Icon icon="arrow-right" className="h-[1rem] w-[1.5rem] fill-white"/></li>
                
            </ul>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMobile;
