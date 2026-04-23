import Image from "next/image";
import CTASection from "@/components/CTASection";
import FeatureRibbon from "@/components/FeatureRibbon";
import FounderNoteSection from "@/components/FounderNoteSection";
import FeaturesShowcaseSection from "@/components/FeaturesShowcaseSection";
import PricingSection from "@/components/PricingSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";

export default function Home() {
  const navItems = ["Home", "Services", "Project", "About Us"];

  const metrics = [
    { value: "12 +", label: "Years of\nExperience" },
    { value: "83K +", label: "Completed\nProject" },
    { value: "4.2K +", label: "Trusted\nCompanies" },
  ];


  return (
    <div className="w-full bg-white min-h-screen">
      {/* Top Hero Background Section */}
      <div className="bg-[#060b14] text-white pt-8 pb-[280px] px-6 md:px-12 lg:px-24 rounded-b-3xl relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6ed7ff]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5c7bfc]/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        {/* Navbar */}
        <nav className="flex items-center justify-between mb-24 md:mb-32 max-w-7xl mx-auto relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-nobgcopy.webp"
              alt="XENTRO"
              width={180}
              height={72}
              priority
              className="h-11 w-auto"
            />
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px]">
            {navItems.map((item) => (
              <div key={item} className="flex flex-col items-center">
                <a
                  href="#"
                  className={`transition-colors hover:text-white pb-1 ${item === "Home" ? "text-white font-medium" : "text-gray-300"}`}
                >
                  {item}
                </a>
                {item === "Home" && (
                  <div className="w-4 h-[3px] bg-teal-accent rounded-full -mt-1"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden sm:flex items-center gap-4 text-[13px] font-semibold">
            <a href="#pricing" className="bg-teal-accent text-[#031018] px-6 py-2.5 hover:bg-[#93e5ff] transition-colors rounded-lg">
              Get Started
            </a>
            <a href="#features" className="border border-gray-500 text-white px-6 py-2.5 hover:bg-white/10 transition-colors rounded-lg">
              Let&apos;s Talk
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 max-w-[1100px] mx-auto relative z-10">
          {/* Left Hero */}
          <div className="flex-[1.2]">
            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-bold leading-[1.05] tracking-[-0.02em] mb-4">
              We Are <span className="text-teal-accent tracking-normal">XENTRO</span>
            </h1>
            <div className="flex items-center gap-4 lg:gap-6 mt-4">
              <div className="flex flex-col border-r border-gray-600/60 pr-4 lg:pr-6 h-full py-1">
                <span className="text-[11px] text-gray-400 font-medium">Established</span>
                <span className="text-xl lg:text-2xl font-bold mt-1">2026</span>
              </div>
              <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-bold leading-none tracking-[-0.02em]">
                Digital Ecosystem
              </h1>
            </div>
          </div>

          {/* Right Hero */}
          <div className="flex-[1] lg:pl-16 lg:border-l border-gray-700/60 pt-6 pb-2 flex flex-col justify-between self-stretch">
            <p className="text-gray-300 text-[15px] leading-relaxed mb-6 lg:mb-0 max-w-[340px]">
              XENTRO is India&apos;s digital entrepreneurship ecosystem built for students, founders, mentors, and investors.
            </p>
            <div className="flex justify-between items-start gap-6 mt-auto">
              {metrics.map((metric, i) => (
                <div key={i}>
                  <div className="text-xl lg:text-[22px] font-bold mb-1.5 text-white">{metric.value}</div>
                  <div className="text-[11px] lg:text-xs text-gray-400 leading-relaxed whitespace-pre-line font-medium uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video / Card Overlay */}
      <div className="max-w-[1150px] mx-auto px-4 md:px-8 -mt-[220px] relative z-20 w-full mb-16">
        <div className="w-full aspect-[21/9] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-gray-900 border-[8px] border-[#0a1523]/50">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/SgmuplXU2iY?si=iXZIy2kpSYMcTnS7&autoplay=0"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Feature Ribbon */}
      <FeatureRibbon />

      {/* Problem Statement Section */}
      <ProblemStatementSection />

      {/* Features Showcase Section */}
      <FeaturesShowcaseSection />

      {/* Founder Note Section */}
      <FounderNoteSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <CTASection />

      <footer className="border-t border-white/10 bg-[#060b14] px-6 py-8 text-sm text-white/60 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-white">XENTRO</p>
          <p>Building India&apos;s digital entrepreneurship ecosystem.</p>
          <p>© 2026 XENTRO</p>
        </div>
      </footer>


    </div>
  );
}
