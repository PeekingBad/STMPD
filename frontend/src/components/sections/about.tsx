import React from "react";
import { Container } from "../Container";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 ">
        <div>
            <Image src="/img/Experience.jpg" alt="" width={625} height={712}></Image>
        </div>
        <div>Col 2</div>
      </div>
    </Container>
  );
};

export default About;
