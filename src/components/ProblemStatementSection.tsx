"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import { ribbonFeatures } from "@/components/FeatureRibbon";

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const lines = [
  "No roadmap. No mentor. No platform.",
  "The system wasn't built for you.",
  "Xentro was built for this.",
  "Your idea. Your shot.",
  "Join Xentro.",
];

type Bubble = {
  label: string;
  icon: ReactNode;
  angle: number;
  radius: number;
  size: number;
  color: string;
  delay: number;
};

const bubbles: Bubble[] = [
  { label: "Guided Learning", icon: ribbonFeatures[0].icon, angle: -120, radius: 250, size: 170, color: "#dbeafe", delay: 120 },
  { label: "Mentor Connect", icon: ribbonFeatures[1].icon, angle: -20, radius: 270, size: 150, color: "#93c5fd", delay: 260 },
  { label: "Startup Showcase", icon: ribbonFeatures[2].icon, angle: 190, radius: 220, size: 140, color: "#ebf8ff", delay: 820 },
  { label: "Events & Cohorts", icon: ribbonFeatures[3].icon, angle: 135, radius: 260, size: 190, color: "#bfdbfe", delay: 400 },
  { label: "Community Spaces", icon: ribbonFeatures[4].icon, angle: 60, radius: 285, size: 180, color: "#7dd3fc", delay: 540 },
  { label: "Progress Tools", icon: ribbonFeatures[5].icon, angle: 100, radius: 230, size: 175, color: "#60a5fa", delay: 680 },
];

export default function ProblemStatementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [bubblesRevealed, setBubblesRevealed] = useState(false);
  const [visibleLine, setVisibleLine] = useState(0);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting || animationStarted) return;

        setAnimationStarted(true);
        setBubblesRevealed(true);
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach(window.clearTimeout);
      timeoutsRef.current = [];
    };
  }, [animationStarted]);

  useEffect(() => {
    if (!animationStarted) return;

    timeoutsRef.current.forEach(window.clearTimeout);
    timeoutsRef.current = [];

    let currentIndex = 0;

    const scheduleLine = () => {
      setVisibleLine(currentIndex);
      setLineVisible(true);

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setLineVisible(false);
        }, 5200),
      );

      currentIndex = (currentIndex + 1) % lines.length;

      timeoutsRef.current.push(
        window.setTimeout(() => {
          scheduleLine();
        }, 5600),
      );
    };

    scheduleLine();

    return () => {
      timeoutsRef.current.forEach(window.clearTimeout);
      timeoutsRef.current = [];
    };
  }, [animationStarted]);

  return (
    <section id="problem" ref={sectionRef} className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-100 opacity-100" />
      <div className="relative mx-auto flex min-h-180 max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          {lines.map((text, index) => {
            const isActive = visibleLine === index;
            return (
              <p
                key={text}
                className={`${headingFont.className} absolute inset-x-0 top-1/2 mx-auto w-full max-w-225 -translate-y-1/2 text-center text-[2rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[#0f2f72] sm:text-[2.8rem] md:text-[3.4rem] transition-all duration-500 ease-out`}
                style={{
                  opacity: isActive && lineVisible ? 1 : 0,
                  transform: isActive && lineVisible ? "translateY(-50%)" : "translateY(calc(-50% + 24px))",
                  filter: isActive && lineVisible ? "blur(0)" : "blur(8px)",
                }}
              >
                {text}
              </p>
            );
          })}
        </div>

        <div
          className={`absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 ${bubblesRevealed ? "xentro-spin-slow" : ""}`}
          style={{ width: 760, height: 760 }}
        >
          {bubbles.map((bubble, index) => (
            <div
              key={bubble.label}
              className="absolute flex items-center justify-center text-center"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                top: "50%",
                left: "50%",
                opacity: bubblesRevealed ? 1 : 0,
                transform: bubblesRevealed
                  ? `translate(-50%, -50%) rotate(${bubble.angle}deg) translateX(${bubble.radius}px) scale(1)`
                  : "translate(-50%, -50%) scale(0.24)",
                transition: `opacity 360ms ease ${bubble.delay}ms, transform 900ms cubic-bezier(0.22, 0.8, 0.32, 1) ${bubble.delay}ms`,
              }}
            >
              <div className="flex items-center justify-center px-4" style={{ transform: `rotate(${-bubble.angle}deg)` }}>
                <div className="xentro-spin-counter flex flex-col items-center justify-center text-center text-slate-950">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-slate-950 shadow-sm">
                    {bubble.icon}
                  </div>
                  <span className="sr-only">{bubble.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
