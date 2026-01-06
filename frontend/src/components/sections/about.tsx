import React from "react";
import { Container } from "../Container";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 ">
        <div>
            <Image></Image>
        </div>
        <div>Col 2</div>
      </div>
    </Container>
  );
};

export default About;
