"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import { StrapiImage } from "./StrapiImage";
import { gsap } from "gsap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Container } from "./Container";

interface LinkProps {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

interface SocialProps {
  id: number;
  href: string;
  icon: React.ReactNode;
  name: string;
}

interface HeaderProps {
  logoLink: {
    id: number;
    text: string;
    href: string;
    image: {
      id: number;
      url: string;
      alternativeText: string | null;
      name: string;
    };
  };
  links: LinkProps[];
  cta: LinkProps;
}

export function Header({ logoLink, links, cta }: Readonly<HeaderProps>) {
  const [open, setOpen] = useState(false);
  const [barsCount, setBarsCount] = useState(18);
  const [currentLocale, setCurrentLocale] = useState("nl");

  const menuRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  const router = useRouter();

  useEffect(() => {
    const savedLocale = Cookies.get("NEXT_LOCALE");
    if (savedLocale) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentLocale(savedLocale);
    }
  }, []);

  function handleLocaleChange() {
    const newLocale = currentLocale === "en" ? "nl" : "en";
    setCurrentLocale(newLocale);
    Cookies.set("NEXT_LOCALE", newLocale, { expires: 365 });
    router.refresh();
  }

  const socials: SocialProps[] = [
    {
      id: 1,
      href: "https://facebook.com",
      icon: <FaFacebookF />,
      name: "Facebook",
    },
    {
      id: 2,
      href: "https://twitter.com",
      icon: <FaTwitter />,
      name: "Twitter",
    },
    {
      id: 3,
      href: "https://instagram.com",
      icon: <FaInstagram />,
      name: "Instagram",
    },
    {
      id: 4,
      href: "https://instagram.com",
      icon: <FaInstagram />,
      name: "LinkedIN",
    },
  ];

  useLayoutEffect(() => {
    const updateBars = () => setBarsCount(window.innerWidth < 768 ? 7 : 18);
    updateBars();
    window.addEventListener("resize", updateBars);
    return () => window.removeEventListener("resize", updateBars);
  }, []);

  useLayoutEffect(() => {
    if (
      !menuRef.current ||
      !barsRef.current ||
      !linksRef.current ||
      !socialsRef.current
    )
      return;

    menuRef.current.classList.remove("invisible");

    const bars = gsap.utils.toArray<HTMLElement>(barsRef.current.children);
    const linksEls = gsap.utils.toArray<HTMLElement>(linksRef.current.children);
    const socialsEls = gsap.utils.toArray<HTMLElement>(
      socialsRef.current.children
    );

    gsap.set(menuRef.current, {
      yPercent: 100,
      autoAlpha: 0,
      pointerEvents: "none",
    });
    gsap.set(bars, { scaleY: 0, transformOrigin: "bottom" });
    gsap.set(linksEls, { y: 40, opacity: 0 });
    gsap.set(socialsEls, { y: 40, opacity: 0 });

    tl.current = gsap.timeline({
      paused: true,
      onStart: () => {
        if (menuRef.current)
          gsap.set(menuRef.current, { pointerEvents: "auto" });
      },
      onReverseComplete: () => {
        if (menuRef.current)
          gsap.set(menuRef.current, { pointerEvents: "none" });
      },
    });

    tl.current
      .to(menuRef.current, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(
        bars,
        {
          scaleY: 1,
          duration: 0.8,
          stagger: {
            each: 0.02,
            from: "random",
          },
          ease: "power3.inOut",
        },
        "-=0.5"
      )
      .to(
        linksEls,
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .to(
        socialsEls,
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.7"
      );

    return () => {
      tl.current?.kill();
    };
  }, [barsCount]);

  useLayoutEffect(() => {
    if (open) {
      window.dispatchEvent(new Event("stop-scroll"));
      document.documentElement.style.overflow = "hidden";
    } else {
      window.dispatchEvent(new Event("start-scroll"));
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    if (!tl.current) return;
    if (open) {
      tl.current.timeScale(1);
      tl.current.play();
    } else {
      tl.current.timeScale(2);
      tl.current.reverse();
    }
  }, [open]);

  return (
    <header className="absolute top-0 left-0 w-full">
      <Container className="flex items-center justify-between p-8 xl:px-0 relative z-[60]">
        <Link
          href={logoLink.href || "/"}
          className="block"
          onClick={() => setOpen(false)}
        >
          <StrapiImage
            src={logoLink.image.url}
            alt={logoLink.image.alternativeText || logoLink.image.name}
            width={32}
            height={32}
            className="w-7 h-8"
          />
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={handleLocaleChange}
            className="w-8 h-8 sm:w-7 sm:h-7 relative flex items-center justify-center text-white"
            aria-label="Toggle language"
          >
            {currentLocale === "nl" ? "NL" : "EN"}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-8 h-8 sm:w-7 sm:h-7 relative flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 sm:w-5 sm:h-5 relative">
              <span
                className={`absolute w-full h-[2px] transition-all duration-300 ${
                  open
                    ? "bg-white rotate-45 top-1/2 -translate-y-1/2"
                    : "bg-white top-[35%]"
                }`}
              />
              <span
                className={`absolute w-full h-[2px] transition-all duration-300 ${
                  open
                    ? "bg-white -rotate-45 top-1/2 -translate-y-1/2"
                    : "bg-white top-[65%]"
                }`}
              />
            </div>
          </button>
        </div>
      </Container>

      <div
        ref={menuRef}
        className="fixed inset-0 z-40 overflow-hidden invisible"
      >
        <div ref={barsRef} className="absolute inset-0 flex">
          {Array.from({ length: barsCount }).map((_, i) => (
            <div key={i} className="flex-1 bg-[var(--color-secondary)]" />
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col md:flex-row md:items-start text-[85px] w-full leading-[128px] px-8 pt-40 md:pt-56 md:px-11 md:justify-between font-maharlika md:gap-x-20">
          <div
            ref={linksRef}
            className="flex flex-col space-y-2 md:space-y-8 w-full h-full md:w-auto md:ml-0"
          >
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-lg sm:text-xl md:text-[85px] text-white uppercase"
                target={link.external ? "_blank" : "_self"}
                onClick={() => setOpen(false)}
              >
                {link.text}
              </Link>
            ))}

            <Link
              href={cta.href}
              className="px-6 py-3 text-base sm:text-lg md:text-xl font-maharlika bg-white text-black w-fit uppercase"
              target={cta.external ? "_blank" : "_self"}
              onClick={() => setOpen(false)}
            >
              {cta.text}
            </Link>
          </div>

          <div
            ref={socialsRef}
            className="-mt-0 md:mt-0 w-full md:w-auto flex flex-col space-y-1 text-white/40 uppercase text-xs sm:text-sm md:text-base md:h-full md:flex md:flex-col md:justify-end md:pb-12"
          >
            <span className="font-bold md:text-2xl sm:text-lg text-white font-sans">
              SOCIALS
            </span>
            {socials.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                className="flex items-center font-sans space-x-2 hover:opacity-80 transition md:text-base"
                target="_blank"
                onClick={() => setOpen(false)}
              >
                {social.icon}
                <span>{social.name.toUpperCase()}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
