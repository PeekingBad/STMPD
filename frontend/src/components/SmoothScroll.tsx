"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const stopScroll = () => lenis.stop();
    const startScroll = () => lenis.start();

    window.addEventListener("stop-scroll", stopScroll);
    window.addEventListener("start-scroll", startScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.removeEventListener("stop-scroll", stopScroll);
      window.removeEventListener("start-scroll", startScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;
