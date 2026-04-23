import type { ReactNode } from "react";
import { Montserrat, Open_Sans } from "next/font/google";

const headingFont = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

type Bubble = {
  icon: ReactNode;
  size: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
  highlight?: boolean;
};

const bubbles: Bubble[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a6 6 0 00-3.813 10.633c.551.463.938 1.104.938 1.824v.293a2.625 2.625 0 005.25 0v-.293c0-.72.387-1.36.938-1.824A6 6 0 0012 2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 20.25h4.5" />
      </svg>
    ),
    size: 98,
    top: "8%",
    left: "56%",
    delay: "-0.8s",
    duration: "8.2s",
    highlight: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 16.5l5.25-5.25 3.75 3.75 6-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25h3.75V9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5h15" />
      </svg>
    ),
    size: 80,
    top: "20%",
    left: "16%",
    delay: "-2.2s",
    duration: "9.1s",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.95 3.95L18.3 7.6l-3.15 3.05.74 4.35L12 12.95 8.11 15l.74-4.35L5.7 7.6l4.35-.65L12 3z" />
      </svg>
    ),
    size: 90,
    top: "34%",
    left: "70%",
    delay: "-1.2s",
    duration: "8.7s",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25l8.25 3.75v5.25c0 5.107-3.482 9.857-8.25 10.5-4.768-.643-8.25-5.393-8.25-10.5V6l8.25-3.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 12l1.5 1.5 3-3" />
      </svg>
    ),
    size: 84,
    top: "50%",
    left: "24%",
    delay: "-3.1s",
    duration: "10s",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 10.5h16.5M7.5 6.75h9M7.5 14.25h9M12 18.75h.008v.008H12v-.008z" />
      </svg>
    ),
    size: 88,
    top: "64%",
    left: "74%",
    delay: "-1.7s",
    duration: "9.3s",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18l7.5-12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6.75l6.75 1.5-1.5 6.75-6.75-1.5 1.5-6.75z" />
      </svg>
    ),
    size: 82,
    top: "78%",
    left: "44%",
    delay: "-2.7s",
    duration: "8.9s",
  },
];

export default function ProblemStatementSection() {
  return (
    <section className="w-full py-20 md:py-24">
      <div className="xentro-section-rise w-full border-y border-[#d8dfef] bg-[linear-gradient(140deg,#f7f9fd_0%,#eff3fb_55%,#edf2fa_100%)]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 py-14 sm:px-10 md:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-16">
          <div className="max-w-[62ch]">
            <p className={`${headingFont.className} mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[#63708a]`}>
              Problem statement
            </p>

            <h2 className={`${headingFont.className} mb-6 text-[2.05rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#0f1630] sm:text-[2.55rem] lg:text-[3.1rem]`}>
              This is a heading sample
            </h2>

            <p className={`${bodyFont.className} text-[1.04rem] leading-[1.85] text-[#1d2b4a]/85 sm:text-[1.15rem]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="relative mx-auto h-[320px] w-full max-w-[500px] sm:h-[380px] lg:h-[430px]">
            <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(43,64,246,0.09)_0%,rgba(43,64,246,0)_72%)]" />

            {bubbles.map((bubble, index) => (
              <div
                key={`bubble-${index}`}
                className={`xentro-bubble-float absolute flex items-center justify-center rounded-full border shadow-[0_10px_26px_rgba(15,23,42,0.08)] backdrop-blur-sm ${
                  bubble.highlight
                    ? "border-[#c8d3f7] bg-white/92 text-[#2b40f6]"
                    : "border-[#d4dbe9] bg-[#f7f9fc]/94 text-[#2f3d5a]"
                }`}
                style={{
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  top: bubble.top,
                  left: bubble.left,
                  animationDelay: bubble.delay,
                  animationDuration: bubble.duration,
                }}
              >
                <span aria-hidden="true">
                  {bubble.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}