import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { InteractiveBoilerTriage } from "@/components/InteractiveBoilerTriage";
import { GasSafeTrustBadges } from "@/components/GasSafeTrustBadges";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BoilerBrandMatrix } from "@/components/BoilerBrandMatrix";
import { SuburbCoverage } from "@/components/SuburbCoverage";
import { TransparentPricing } from "@/components/TransparentPricing";
import { VerifiedReviews } from "@/components/VerifiedReviews";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      <HeroSection />
      <InteractiveBoilerTriage />
      <GasSafeTrustBadges />
      <ServicesGrid />
      <BoilerBrandMatrix />
      <SuburbCoverage />
      <TransparentPricing />
      <VerifiedReviews />
      <Footer />
    </main>
  );
}
