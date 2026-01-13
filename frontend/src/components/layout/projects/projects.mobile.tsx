import { Container } from "@/components/Container";
import Button from "@/components/ui/button.component";
import Icon from "@/components/ui/icon.component";
import Image from "next/image";
import React from "react";

const ProjectsMobile = () => {
  return (
    <section className="bg-black">
      <Container className="relative flex flex-col py-[7.5rem] gap-9 h-full justify-center">

      {/* Heading and counter */}
        <div className="flex flex-col">
          <h2 className="font-sans text-2 opacity-30">WORK</h2>
          <p className="text-[1.125rem]">1/3</p>
        </div>

      {/* Project details */}
      <div className="flex justify-center px-[5rem]">
        {/* Title */}
        <div className="w-[60%] z-10 flex flex-col justify-center">
          <h3 className="text-[7.5rem] leading-[7.125rem] whitespace-nowrap">
            MARTIN GARRIX <br />
            <span className="relative left-[18.75rem]">FT. JEX JORDYN</span>
            <br />
            <span className="underline">TOLD YOU SO</span>
          </h3>
        </div>

        {/* Image stack (current + next preview behind) */}
        <div className="relative w-full z-0 flex flex-col gap-2">
          {/* Next project preview (behind) */}
          <div className="absolute right-[-5rem] top-8 overflow-hidden  opacity-90 z-0">
            <Image
              src="/img/froukje.JPG"
              alt=""
              width={420}
              height={420}
              className="object-cover"
            />
            {/* subtle dark fade to match the comp */}
            <div className="pointer-events-none absolute inset-0 bg-black/30" />
          </div>

          {/* Current project (front) */}
          <div className="relative z-10 overflow-hidden">
            <Image
              src="/img/told_you_so.png"
              alt=""
              width={680}
              height={640}
              className="object-cover"
            />
          </div>

          {/* Meta row */}
          <div className="relative z-10 flex justify-between">
            <p className="opacity-30 max-w-[300px]">
              We mixed Martin Garrix&apos;s newest single with Jex Jordyn
              &apos;Told You So&apos; in Dolby Atmos.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button>VIEW ALL WORK</Button>
              <Icon icon="arrow-right" className="h-[1.5rem] w-[1.5rem] fill-white" />
            </div>
          </div>
        </div>
      </div>
        {/* section footer */}

        <div className="flex flex-col font-maharlika leading-[1.5rem] text-[1.25rem]">
          <span className="">RECORDED</span>
          <span>IN STMPD&apos;S</span>
          <span>DOLBY ATMOS</span>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsMobile;
