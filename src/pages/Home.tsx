import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { MarketplacePreview } from "@/components/home/MarketplacePreview";
import { TrustSection } from "@/components/home/TrustSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <SolutionsSection />
      <MarketplacePreview />
      <TrustSection />
    </main>
  );
}