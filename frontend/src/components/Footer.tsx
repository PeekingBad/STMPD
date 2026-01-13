"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { Container } from "@/components/Container";
import { gsap } from "gsap";

export function Footer() {
  const letters = "STMPD".split("");
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Set initial position of letters to be halfway down
    gsap.set(letterRefs.current, { y: "50%", overwrite: "auto" });
  }, []);

  const handleMouseEnter = (index: number) => {
    gsap.to(letterRefs.current[index], {
      y: "0%",
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(letterRefs.current[index], {
      y: "50%",
      duration: 0.3,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-footer)" }}
    >
      <Container>
        <div className="py-20">
          <hr className="border-t border-white/35 rounded" />
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 text-[#6F6F6F] md:mt-20">
            {/* Column 1: Disclaimer */}
            <div className="max-w-xs flex flex-col gap-2">
              <h2 className="font-maharlika text-4xl md:text-[64px] text-white leading-[1.1]">
                YOUR CREATIVE PARTNER IN SOUND & STORY
              </h2>
              <p className="text-base leading-relaxed">
                Please note this is not the contact <br></br> for STMPD RCRDS or Martin Garrix.
              </p>
              <p className="text-base leading-relaxed"> 
                <Link
                  href="#"
                  className="underline hover:text-white transition-colors"
                >
                 Demos for STMPD RCRDS <br></br> can be submitted here
                </Link>
                .</p>
            </div>

            {/* Column 2: STMPD STUDIOS */}
            <div>
              <h3 className="font-maharlika text-[30px] whitespace-nowrap text-white mb-2">
                STMPD STUDIOS
              </h3>
              <p className="text-base leading-relaxed">
                H.J.E. Wenckebachweg 68
                <br />
                1114 AD Amsterdam
              </p>
              <a
                href="tel:+31206686161"
                className="text-base mt-2 inline-block hover:text-white transition-colors"
              >
                +31(0)20 668 61 61
              </a>
            </div>

            {/* Column 3: DOWNLOADS */}
            <div className="justify-self-end">
              <h3 className="font-maharlika text-[30px] text-white mb-2">
                DOWNLOADS
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-base hover:text-white transition-colors"
                  >
                    Factsheet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base hover:text-white transition-colors"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base hover:text-white transition-colors"
                  >
                    Getting There
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base hover:text-white transition-colors"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: NAVIGATION */}
            <div className="justify-self-end">
              <h3 className="font-maharlika text-[30px] text-white mb-2">
                NAVIGATION
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-base hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="text-base hover:text-white transition-colors"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/studio"
                    className="text-base hover:text-white transition-colors"
                  >
                    Studio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-base hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/approach"
                    className="text-base hover:text-white transition-colors"
                  >
                    Approach
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-base hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* --- Lower Footer --- */}
      <div className="relative pb-4">
        {/* Centered Animated STMPD Text */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex items-center justify-center">
          {letters.map((letter, index) => (
            <div
              key={index}
              className="h-[135px] overflow-visible" // A container to capture hover events for the top half of the letter
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <span
                ref={(el) => {
                  letterRefs.current[index] = el;
                }}
                className="font-maharlika font-normal text-[270px] leading-none text-white relative select-none"
              >
                {letter}
              </span>
            </div>
          ))}
        </div>

        <Container className="relative z-10 flex items-end justify-between">
          {/* Left Section - Copyright */}
          <div className="text-sm text-[#6F6F6F]">
            <p>© 2025 STMPD studios</p>
            <p className="leading-tight">All rights reserved</p>
          </div>

          {/* Right Section - Credit */}
          <div className="text-sm text-[#6F6F6F]">
            <p>design and realisation by Jambased</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
