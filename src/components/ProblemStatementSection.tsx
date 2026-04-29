"use client";

import { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const lines = [
  "No roadmap. No mentor. No platform.",
  "The system wasn't built for you.",
  "Xentro was built for this.",
  "Your idea. Your shot.",
  "Join Xentro.",
];

const bubbles = [
  { size: 18, left: "18%", delay: "0s", duration: "9s", opacity: 0.18 },
  { size: 24, left: "32%", delay: "2.2s", duration: "11s", opacity: 0.14 },
  { size: 14, left: "52%", delay: "1.1s", duration: "10.5s", opacity: 0.12 },
  { size: 20, left: "68%", delay: "3.6s", duration: "12s", opacity: 0.16 },
  { size: 16, left: "82%", delay: "4.8s", duration: "9.8s", opacity: 0.13 },
];

export default function ProblemStatementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineElements = gsap.utils.toArray<HTMLParagraphElement>(".problem-line");
      gsap.set(lineElements, {
        opacity: 0,
        y: 28,
        filter: "blur(8px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1400",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      lineElements.forEach((line, index) => {
        tl.to(
          line,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power2.out",
          },
          index * 2.5,
        );

        tl.to(
          line,
          {
            opacity: 0,
            y: -28,
            filter: "blur(8px)",
            duration: 0.6,
            ease: "power2.in",
          },
          index * 2.5 + 1.6,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="problem" ref={sectionRef} className="relative overflow-hidden bg-[#1B17FF] h-screen">
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-100 opacity-0" />
      <div className="relative mx-auto flex h-full max-w-5xl items-center justify-center px-6 text-center">
        <div className="absolute inset-0 overflow-hidden">
          {bubbles.map((bubble, index) => (
            <span
              key={index}
              className="absolute rounded-full bg-white/15 xentro-bubble-rise"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: bubble.left,
                bottom: `-${bubble.size * 0.5}px`,
                animationDelay: bubble.delay,
                animationDuration: bubble.duration,
                opacity: bubble.opacity,
              }}
            />
          ))}
        </div>
        <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
          {lines.map((text) => (
            <p
              key={text}
              className={`${headingFont.className} problem-line absolute inset-0 flex items-center justify-center mx-auto w-full text-center text-[2rem] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-[2.8rem] md:text-[3.4rem]`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
