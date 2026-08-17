import type { Metadata } from "next";
import { Sparkles, ArrowUpRight, Phone } from "lucide-react";
import heroSizzler from "@/assets/hero-royal-sizzler.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { SignatureDishesSection } from "@/components/royal/SignatureDishesSection";
import { RoyalExperienceSection } from "@/components/royal/RoyalExperienceSection";
import { ContactCTASection } from "@/components/royal/ContactCTASection";

export const metadata: Metadata = {
  title: "Specialties & Signature Dishes | Royal Chaska Dubai",
  description:
    "Taste the chef's highlights at Royal Chaska Dubai. Sizzling charcoal tandoori mixed grills, authentic dum biryanis, and flaming Indo-Chinese favorites in Al Karama.",
};

export default function SpecialtiesPage() {
  return (
    <div className="relative min-h-screen bg-[#FCFBF8] text-[#1D151C]">
      <Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          eyebrow="Chef's Selection"
          title={
            <>
              Taste Our Favorites <br />
              <span className="text-[#FDE047]">In Al Karama, Dubai</span>
            </>
          }
          description="Explore our most celebrated Indian tandoor grills, rich handi dum biryanis, and authentic wok-tossed Indo-Chinese dishes."
          imageSrc={heroSizzler}
          imageAlt="Royal Chaska signature mixed sizzler and biryani"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Specialties" }]}
        >
          <a
            href={restaurant.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E0C058] to-[#C9A227] px-6 py-3.5 text-xs font-extrabold text-[#2A0E24] shadow-md hover:brightness-110 transition-all"
          >
            <Phone className="size-4" />
            Order on {restaurant.phone}
          </a>
        </PageHeader>

        {/* Signature Dishes Showcase */}
        <SignatureDishesSection />

        {/* Royal Experience Section */}
        <RoyalExperienceSection />

        {/* Final CTA */}
        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
}
