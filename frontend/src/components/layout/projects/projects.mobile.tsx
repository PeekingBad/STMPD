import { Container } from "@/components/Container";
import Button from "@/components/ui/button.component";
import Icon from "@/components/ui/icon.component";
import Image from "next/image";
import React from "react";

const ProjectsMobile = () => {
  return (
    <section className="bg-black">
      <Container className="px-8">
        <div className="flex flex-col gap-[4px]">
          <h2 className="font-sans text-[1.25rem]">WORK</h2>
          <p className="text-[1rem] opacity-30">1/3</p>
        </div>
        <div className="flex flex-col">
          <h3 className=" whitespace-nowrap">
            MARTIN GARRIX
            <span className="relative">FT. JEX JORDYN</span>
            <Image 
              src=""
              alt=""

            />
            <span className="underline">TOLD YOU SO</span>
          </h3>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsMobile;
