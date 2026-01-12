import React from "react";
import { Container } from "../../Container";
import Image from "next/image";
import Button from "../../ui/button.component";
import Icon from "../../ui/icon.component";

const AboutDesktop = () => {
  return (
    <section className="">
      <Container className="">
        <div className="grid grid-cols-2">
          <div className="relative w-[80%]">
            <Image
              src="/img/Experience.jpg"
              alt=""
              width={625}
              height={712}
              className="object-cover"
            />
            <div className="absolute flex left-[5rem] bottom-6 w-full">
              <h3 className=" text-[6.25rem] leading-[6.25rem]">
                THE STMPD <br />
                <span className="relative left-[9.375rem]">EXPERIENCE</span>
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-[13.5rem]">
            <div className="flex flex-col gap-5">
            <h2 className="font-sans text-2 opacity-30">ABOUT & APPROACH</h2>
            <p className="text-2xl">
              STMPD recording studios is Amsterdam&apos;s largest recording
              studio facility. Designed as the ultimate playground for music and
              audio post-production.
            </p>
            </div>
            <ul className="flex flex-col items-end gap-3 mt-[8.75rem]">
                <li className="flex items-center gap-2">
                  <Button>ABOUT</Button><Icon icon="arrow-right" className="h-[1rem] w-[1.5rem] fill-white"/>
                </li>
                <li className="flex items-center gap-2">
                  <Button>APPROACH</Button><Icon icon="arrow-right" className="h-[1rem] w-[1.5rem] fill-white"/>
                </li>
              </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutDesktop;
