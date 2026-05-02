import LoadingOverlay from "@/components/LoadingOverlay";
import HeroSection from "@/components/HeroSection";
import FooterCTA from "@/components/FooterCTA";
// import FeatureRibbon from "@/components/FeatureRibbon";
import FounderNoteSection from "@/components/FounderNoteSection";
import FeaturesShowcaseSection from "@/components/FeaturesShowcaseSection";
import PricingSection from "@/components/PricingSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <LoadingOverlay />
      <div className="w-full min-h-screen">
        <HeroSection />

      {/* Feature Ribbon */}
      {/* <FeatureRibbon /> */}

      {/* Problem Statement Section */}
      <ProblemStatementSection />

      {/* Features Showcase Section */}
      <FeaturesShowcaseSection />

      {/* Founder Note Section */}
      {/* <FounderNoteSection /> */}

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer CTA */}
      <FooterCTA />
    </div>
    </>
  );
}
