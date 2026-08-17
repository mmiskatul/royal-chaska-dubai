import { Navbar } from "@/components/liz/Navbar";
import { Hero } from "@/components/liz/Hero";
import { QuickInfoBar } from "@/components/royal/QuickInfoBar";
import { StorySection } from "@/components/liz/StorySection";
import { SignatureDishesSection } from "@/components/royal/SignatureDishesSection";
import { MenuSection } from "@/components/liz/MenuSection";
import { RoyalExperienceSection } from "@/components/royal/RoyalExperienceSection";
import { TakeawayPackagingSection } from "@/components/royal/TakeawayPackagingSection";
import { GallerySection } from "@/components/liz/GallerySection";
import { LocationHoursSection } from "@/components/liz/LocationHoursSection";
import { ContactCTASection } from "@/components/royal/ContactCTASection";
import { Footer } from "@/components/liz/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FCFBF8] text-[#1D151C] selection:bg-[#4B164C] selection:text-[#FDE047]">
      <Navbar />

      <main>
        {/* Section 7: Cinematic Hero */}
        <Hero />

        {/* Section 8: Quick Business Information Bar */}
        <QuickInfoBar />

        {/* Section 9: About / Our Story */}
        <StorySection />

        {/* Section 10: Signature Dishes Showcase */}
        <SignatureDishesSection />

        {/* Section 11: Structured Menu */}
        <MenuSection />

        {/* Section 13: Royal Experience Section */}
        <RoyalExperienceSection />

        {/* Section 14: Takeaway & Packaging Branding */}
        <TakeawayPackagingSection />

        {/* Section 12: Food & Atmosphere Gallery */}
        <GallerySection />

        {/* Section 15: Location & Hours */}
        <LocationHoursSection />

        {/* Section 16: Final Contact CTA */}
        <ContactCTASection />
      </main>

      {/* Section 17: Royal Purple & Gold Footer */}
      <Footer />
    </div>
  );
}
