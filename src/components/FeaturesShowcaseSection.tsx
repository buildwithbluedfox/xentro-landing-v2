"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type AudienceKey = "mentors" | "founders" | "investors";

type FeatureData = {
  id: string;
  title: string;
  description: string;
  className?: string;
};

type AudienceLogo = {
  icon: ReactNode;
  glowColor: string;
};

type AudienceData = {
  label: string;
  logo: AudienceLogo;
  features: FeatureData[];
};

const audienceOrder: AudienceKey[] = ["mentors", "founders", "investors"];

const audienceContent: Record<AudienceKey, AudienceData> = {
  mentors: {
    label: "Mentors",
    logo: {
      glowColor: "rgba(255, 150, 42, 0.38)",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.9}
          className="h-20 w-20 text-[#ffb347] filter-[drop-shadow(0_0_18px_rgba(255,146,40,0.85))] sm:h-24 sm:w-24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.5 10.5V6.75c0-1.1.9-2 2-2h.5c.52 0 .97.38 1.06.89l.74 4.11h3.45c1 0 1.76.92 1.55 1.89l-1.03 4.62a1.5 1.5 0 01-1.46 1.17H9.5m0-7H6.5v7h3"
          />
        </svg>
      ),
    },
    features: [
      {
        id: "M-02",
        title: "Startup Discovery Feed",
        description: "Browse motivated startups matched to your expertise.",
        className: "col-span-2",
      },
      {
        id: "M-03",
        title: "Session Scheduling",
        description: "Plan calls and office hours without coordination chaos.",
      },
      {
        id: "M-04",
        title: "Feedback Workspace",
        description: "Deliver structured guidance founders can execute fast.",
      },
      {
        id: "M-05",
        title: "Impact Analytics",
        description: "Track mentor outcomes across startups and cohorts.",
        className: "col-span-2",
      },
    ],
  },
  founders: {
    label: "Founders",
    logo: {
      glowColor: "rgba(255, 255, 255, 0.34)",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-20 w-20 text-white filter-[drop-shadow(0_0_18px_rgba(255,255,255,0.82))] sm:h-24 sm:w-24"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    features: [
      {
        id: "F-02",
        title: "Guided Learning Paths",
        description: "Videos, templates, and checklists to build with clarity.",
        className: "col-span-2",
      },
      {
        id: "F-03",
        title: "Mentor Connect",
        description: "Get validation, pitch reviews, and direction quickly.",
      },
      {
        id: "F-04",
        title: "Startup Showcase",
        description: "Publish a profile investors can review in minutes.",
      },
      {
        id: "F-05",
        title: "Events & Cohorts",
        description: "Join sprints, pitch days, and growth-focused cohorts.",
        className: "col-span-2",
      },
    ],
  },
  investors: {
    label: "Investors",
    logo: {
      glowColor: "rgba(110, 215, 255, 0.34)",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="h-20 w-20 text-[#7ed7ff] filter-[drop-shadow(0_0_18px_rgba(90,198,255,0.76))] sm:h-24 sm:w-24"
        >
          <rect x="7" y="7" width="10" height="10" rx="1.7" transform="rotate(45 12 12)" />
        </svg>
      ),
    },
    features: [
      {
        id: "I-02",
        title: "Deal Flow Pipeline",
        description: "Track emerging startups in a clean pipeline view.",
        className: "col-span-2",
      },
      {
        id: "I-03",
        title: "Startup Analytics",
        description: "Review traction signals and core startup metrics.",
      },
      {
        id: "I-04",
        title: "Direct Founder Access",
        description: "Connect with founders without noisy intermediaries.",
      },
      {
        id: "I-05",
        title: "Portfolio Tracking",
        description: "Monitor portfolio founders and progress over time.",
        className: "col-span-2",
      },
    ],
  },
};

type FeatureCardProps = {
  id: string;
  title: string;
  description: string;
  className?: string;
  tag?: string;
};

type LogoPanelProps = {
  logo: AudienceLogo;
  label: string;
  panelRef?: React.RefObject<HTMLElement | null>;
};

function FeatureCard({ id, title, description, className = "", tag = "Module" }: FeatureCardProps) {
  const baseClass = "border-white/15 bg-[linear-gradient(170deg,rgba(20,29,45,0.86)_0%,rgba(10,14,24,0.9)_100%)]";

  return (
    <article
      className={`${baseClass} ${className} group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.1rem] border p-5 text-white transition-all duration-300 hover:border-white/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)] sm:p-6`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 12% 14%, rgba(100, 140, 255, 0.2), rgba(100, 140, 255, 0) 44%)",
        }}
      />

      <div className="relative z-10 flex items-center justify-between text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-white/55">
        <span>{id}</span>
        <span>{tag}</span>
      </div>

      <div className="relative z-10 mt-4">
        <h3 className="text-[1.12rem] font-semibold leading-tight text-white sm:text-[1.3rem]">
          {title}
        </h3>
        <p className="mt-3 text-[0.82rem] leading-relaxed text-white/72 sm:text-[0.9rem]">
          {description}
        </p>
      </div>
    </article>
  );
}

function LogoPanel({ logo, label, panelRef }: LogoPanelProps) {
  return (
    <article
      ref={panelRef}
      className="relative aspect-square w-full overflow-hidden rounded-[1.1rem] border border-white/35 bg-[linear-gradient(160deg,rgba(28,38,58,0.88)_0%,rgba(10,15,25,0.92)_68%,rgba(5,8,14,0.95)_100%)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 12%, rgba(255,255,255,0.2), rgba(255,255,255,0) 42%), radial-gradient(circle at 85% 84%, rgba(110,145,255,0.22), rgba(110,145,255,0) 38%)",
        }}
      />

      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <span
          key={`blob-${label}`}
          aria-hidden="true"
          className="xentro-icon-blob absolute h-30 w-30 rounded-[38%_62%_59%_41%/42%_39%_61%_58%] blur-xl"
          style={{ backgroundColor: logo.glowColor }}
        />

        <div key={`icon-${label}`} className="xentro-icon-swap relative z-10">
          <span className="sr-only">{label} logo</span>
          {logo.icon}
        </div>
      </div>
    </article>
  );
}

export default function FeaturesShowcaseSection() {
  const [activeAudience, setActiveAudience] = useState<AudienceKey>("founders");
  const [logoPanelHeight, setLogoPanelHeight] = useState(0);
  const logoPanelRef = useRef<HTMLElement | null>(null);
  const currentSection = audienceContent[activeAudience];

  useEffect(() => {
    const panel = logoPanelRef.current;

    if (!panel) return;

    const updateHeight = () => {
      setLogoPanelHeight(Math.round(panel.getBoundingClientRect().height));
    };

    updateHeight();

    const observer = new ResizeObserver(() => {
      updateHeight();
    });

    observer.observe(panel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const bentoWrapperStyle = logoPanelHeight
    ? ({ "--logo-panel-height": `${logoPanelHeight}px` } as CSSProperties)
    : undefined;

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#05070d] py-18 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 18%, rgba(92, 123, 252, 0.24), rgba(92, 123, 252, 0) 38%), radial-gradient(circle at 85% 8%, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0) 28%), linear-gradient(180deg, #05070d 0%, #070c16 62%, #05070d 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-280 px-6 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/55">
            Platform Features
          </p>

          <h2 className="mb-3 text-[2.2rem] font-semibold leading-none text-white sm:text-[2.85rem] lg:text-[3.2rem]">
            Engineered for Liftoff
          </h2>

          <p className="max-w-xl text-[0.95rem] leading-relaxed text-white/72 sm:text-[1.05rem]">
            Pick a role to view exactly what that audience gets inside XENTRO.
          </p>
        </div>

        <div
          className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.42fr)] lg:items-stretch"
          style={bentoWrapperStyle}
        >
          <LogoPanel logo={currentSection.logo} label={currentSection.label} panelRef={logoPanelRef} />

          <div className="grid grid-cols-3 auto-rows-[132px] gap-4 sm:auto-rows-[154px] sm:gap-5 lg:h-(--logo-panel-height) lg:auto-rows-auto lg:grid-rows-2 lg:min-h-0">
            {currentSection.features.map((feature) => (
              <FeatureCard
                key={`${activeAudience}-${feature.id}`}
                id={feature.id}
                title={feature.title}
                description={feature.description}
                className={feature.className}
                tag={currentSection.label}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
          {audienceOrder.map((audience) => {
            const isActive = audience === activeAudience;

            return (
              <button
                type="button"
                key={audience}
                onClick={() => setActiveAudience(audience)}
                aria-pressed={isActive}
                className={`h-12 w-full rounded-full border text-[0.69rem] font-semibold uppercase tracking-[0.19em] transition-all duration-200 ${
                  isActive
                    ? "border-white/70 bg-white text-[#070c16] shadow-[0_10px_25px_rgba(255,255,255,0.22)]"
                    : "border-white/35 bg-white/4 text-white/88 hover:border-white/55 hover:bg-white/10"
                }`}
              >
                {audienceContent[audience].label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}