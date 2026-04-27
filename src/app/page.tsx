import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FeatureRibbon from "@/components/FeatureRibbon";
import FounderNoteSection from "@/components/FounderNoteSection";
import FeaturesShowcaseSection from "@/components/FeaturesShowcaseSection";
import PricingSection from "@/components/PricingSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />

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

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      <footer
        className="relative overflow-hidden bg-[#050812] px-4 pb-10 pt-6 sm:px-8 lg:px-10"
        style={{ fontFamily: "var(--font-red-hat-display)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-[#070c19] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:px-10 lg:py-12">
              <div className="flex items-start">
                <p
                  className="text-[2.45rem] font-medium tracking-[-0.03em] text-white sm:text-[3.15rem]"
                  style={{ fontFamily: "var(--font-red-hat-display)" }}
                >
                  xentro
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-9 text-white/86 sm:gap-x-12">
                <div>
                  <h3 className="mb-4 text-[1.65rem] font-semibold leading-none text-white">Navigation</h3>
                  <ul className="space-y-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white/80">
                    <li><a href="#" className="hover:text-white">Home</a></li>
                    <li><a href="#features" className="hover:text-white">Features</a></li>
                    <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                    <li><a href="#" className="hover:text-white">FAQ</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-[1.65rem] font-semibold leading-none text-white">Other</h3>
                  <ul className="space-y-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white/80">
                    <li><a href="#" className="hover:text-white">Projects</a></li>
                    <li><a href="#" className="hover:text-white">Founder Note</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-[1.65rem] font-semibold leading-none text-white">Resources</h3>
                  <ul className="space-y-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white/80">
                    <li><a href="#" className="hover:text-white">Guides</a></li>
                    <li><a href="#" className="hover:text-white">Support</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-[1.65rem] font-semibold leading-none text-white">Socials</h3>
                  <ul className="space-y-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white/80">
                    <li><a href="#" className="hover:text-white">Instagram</a></li>
                    <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-white">YouTube</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-white/12 pt-6 text-sm text-white/60">
            <p
              className="font-heading text-[1.8rem] font-semibold tracking-[-0.02em] text-white sm:text-[2rem]"
              style={{ fontFamily: "var(--font-red-hat-display)" }}
            >
              © 2026 XENTRO. All rights reserved
            </p>
            <p className="mt-3 max-w-5xl text-[0.95rem] leading-relaxed text-white/56">
              XENTRO is India&apos;s digital entrepreneurship ecosystem for students, founders, mentors, investors, and institutions. Designed and built to make startup journeys clearer, faster, and easier to act on.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
