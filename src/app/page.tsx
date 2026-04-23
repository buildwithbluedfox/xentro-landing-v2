import FeatureRibbon from "@/components/FeatureRibbon";
import FeaturesShowcaseSection from "@/components/FeaturesShowcaseSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";

export default function Home() {
  const navItems = ["Home", "Services", "Project", "About Us"];

  const metrics = [
    { value: "12 +", label: "Years of\nExperience" },
    { value: "83K +", label: "Completed\nProject" },
    { value: "4.2K +", label: "Trusted\nCompanies" },
  ];

  const partners = ["Spotify", "Microsoft", "Google", "YouTube", "Discord"];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Top Navy blue Background Section */}
      <div className="bg-[#0b192c] text-white pt-8 pb-[280px] px-6 md:px-12 lg:px-24 rounded-b-3xl relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        {/* Navbar */}
        <nav className="flex items-center justify-between mb-24 md:mb-32 max-w-7xl mx-auto relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-teal-accent flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0b192c]">
                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-semibold text-xl tracking-tight">Digiboost</span>
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
            <a href="#" className="bg-teal-accent text-[#0b192c] px-6 py-2.5 hover:bg-[#32d0aa] transition-colors rounded-lg">
              Get Started
            </a>
            <a href="#" className="border border-gray-500 text-white px-6 py-2.5 hover:bg-white/10 transition-colors rounded-lg">
              Let&apos;s Talk
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 max-w-[1100px] mx-auto relative z-10">
          {/* Left Hero */}
          <div className="flex-[1.2]">
            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-bold leading-[1.05] tracking-[-0.02em] mb-4">
              We Are <span className="text-teal-accent tracking-normal">Creative</span>
            </h1>
            <div className="flex items-center gap-4 lg:gap-6 mt-4">
              <div className="flex flex-col border-r border-gray-600/60 pr-4 lg:pr-6 h-full py-1">
                <span className="text-[11px] text-gray-400 font-medium">Establish</span>
                <span className="text-xl lg:text-2xl font-bold mt-1">2011</span>
              </div>
              <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-bold leading-none tracking-[-0.02em]">
                Digital Agency
              </h1>
            </div>
          </div>

          {/* Right Hero */}
          <div className="flex-[1] lg:pl-16 lg:border-l border-gray-700/60 pt-6 pb-2 flex flex-col justify-between self-stretch">
            <p className="text-gray-300 text-[15px] leading-relaxed mb-6 lg:mb-0 max-w-[340px]">
              we are a creative agency with several services that focused on quality and innovations for your business
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

      {/* Partners Section */}
      <div className="max-w-[1000px] mx-auto pb-16 px-6 flex flex-wrap justify-between items-center gap-8 text-gray-400 font-bold text-lg lg:text-xl">
        {partners.map((partner) => (
          <div key={partner} className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="w-5 h-5 bg-gray-400 rounded-[4px]"></div>
            <span className="tracking-wide">{partner}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
