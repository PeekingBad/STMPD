"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import styles from "./offer.module.css";
import Image from "next/image";
import Icon from "@/components/ui/icon.component";

type Service = {
  id: number;
  number: string;
  title: string;
  image: string;
};

const services: Service[] = [
  { id: 1, number: "01", title: "Music production", image: "/img/stmpd-img-1.jpg" },
  { id: 2, number: "02", title: "Film & commercials", image: "/img/stmpd-img-2.jpg" },
  { id: 3, number: "03", title: "Dolby Atmos", image: "/img/stmpd-img-3.jpg" },
  { id: 4, number: "04", title: "In-house production", image: "/img/stmpd-img-4.jpg" },
  { id: 5, number: "05", title: "Events", image: "/img/stmpd.jpg" },
];

const Offer = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cursorImageRef = useRef<HTMLImageElement | null>(null);
  const last = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cursorImageRef.current) return;

    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;

    last.current = { x: e.clientX, y: e.clientY };

    gsap.to(cursorImageRef.current, {
      left: e.clientX,
      top: e.clientY,
      rotationY: dx * 0.15,
      rotationX: -dy * 0.15,
      duration: 0.4,
      ease: "power3.out",
      transformPerspective: 800,
    });
  };

  const showImage = (index: number) => {
    setActiveIndex(index);

    if (!cursorImageRef.current) return;

    gsap.fromTo(
      cursorImageRef.current,
      { scale: 0.9 },
      { scale: 1, duration: 0.4, ease: "power3.out" }
    );
  };

  const hideImage = () => {
    setActiveIndex(null);
  };

  return (
    <section
      className="px-20 py-32"
      onMouseMove={handleMouseMove}
    >
      <Image
        ref={cursorImageRef}
        src={activeIndex !== null ? services[activeIndex].image : ""}
        width={420}
        height={420}
        alt=""
        className={`pointer-events-none fixed left-0 top-0 z-10 h-[420px] w-[420px]
        -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-200
        ${activeIndex !== null ? "opacity-100" : "opacity-0"}`}
      />

      <div className={styles.wrapper}>
        <h2 className={styles.kicker}>WHAT WE DO</h2>

        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.id}
              className={`${styles.row} ${isActive ? styles.active : ""} ${
                isActive ? "relative z-20" : "relative z-0"
              }`}
              onMouseEnter={() => showImage(index)}
              onMouseLeave={hideImage}
            >
              <span className={styles.number}>{service.number}</span>

              <div className="flex items-center gap-4">
                <span className={styles.title}>{service.title}</span>
                {isActive && <Icon icon="arrow-right" className="h-[24px] w-[24px]"/>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offer;
