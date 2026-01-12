import React from "react";
import { Container } from "../Container";
import Image from "next/image";
import Button from "../ui/button.component";
import Icon from "../ui/icon.component";

const About = () => {
  return (
    <section className="relative mb-20">
      <Container>
        <Image
          src="/img/Experience.jpg"
          alt=""
          width={625}
          height={712}
          className="z-0 absolute"
        ></Image>
        <div className="mx-[15rem]">
          <div className="flex flex-col w-[50%] pt-[18.75rem] ml-auto">
            <div className="flex flex-col gap-6 z-10">
              <h2 className="font-sans font-medium text-[16px] tracking-[.25rem] opacity-30">
                ABOUT & APPROACH
              </h2>
              <p className="text-2xl">
                STMPD recording studios is Amsterdam&apos;s largest recording
                studio facility. Designed as the ultimate playground for music
                and audio post-production.
              </p>
            </div>
          </div>
          <div className="relative z-10 flex justify-between mt-[-1.5rem] w-full">
            <h3 className="relative left-[-6.25rem] text-[6.25rem] leading-[6.25rem]">
              THE STMPD<span className="pl-10">EXPERIENCE</span>
            </h3>
            <ul className="flex flex-col gap-4 justify-end items-end">
              <li className="flex gap-3 items-center">
                <Button>ABOUT</Button>
                <Icon icon="arrow-right" />
              </li>
              <li className="flex gap-3 items-center">
                <Button>APPROACH</Button>
                <Icon icon="arrow-right" />
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="grid grid-cols-2">
          <div className="w-full h-full">
            <Image
              src="/img/Experience.jpg"
              alt=""
              width={625}
              height={712}
              className="z-0"
            ></Image>
            <h2 className="absolute left-[18.75rem] top-[65%] z-10 text-[6.25rem] leading-[5.9375rem]">
              THE STMPD <br />
              <span className="pl-10">EXPERIENCE</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 justify-center pt-[1.5rem]">
            <h3 className="font-sans font-medium text-[16px] tracking-[.25rem] opacity-30">
              ABOUT & APPROACH
            </h3>
            <p className="text-2xl">
              STMPD recording studios is Amsterdam&apos;s largest recording
              studio facility. Designed as the ultimate playground for music and
              audio post-production.
            </p>
            <ul>
              <li className="flex gap-3 items-center"><Button>ABOUT</Button><Icon icon="arrow-right"/></li>
            <li className="flex gap-3 items-center"><Button>APPROACH</Button><Icon icon="arrow-right"/></li>
              
            </ul>
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default About;
