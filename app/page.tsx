import { HeroSection } from "@/components/home/HeroSection";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { BananaBrandsSection } from "@/components/home/BananaBrandsSection";
import { AgriInputSection } from "@/components/home/AgriInputSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ValueChainSection } from "@/components/home/ValueChainSection";
import { JourneySection } from "@/components/home/JourneySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyIntro />
      <BananaBrandsSection />
      <AgriInputSection />
      <ExpertiseSection />
      <ValueChainSection />
      <JourneySection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
