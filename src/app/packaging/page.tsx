import type { Metadata } from "next";
import { ShoppingBag, ArrowUpRight, Phone } from "lucide-react";
import packagingHero from "@/assets/royal-takeaway-bag.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { TakeawayPackagingSection } from "@/components/royal/TakeawayPackagingSection";
import { ContactCTASection } from "@/components/royal/ContactCTASection";
import { LizLink } from "@/components/liz/LizButton";

export const metadata: Metadata = {
  title: "Royal Takeaway & Delivery Packaging | Royal Chaska Dubai",
  description:
    "Explore the signature royal purple and gold takeaway packaging of Royal Chaska Dubai in Al Karama. Heat-sealed, premium paper bags and luxury containers for dining on the go.",
};

export default function PackagingPage() {
  return (
    <div className="relative min-h-screen bg-[#FCFBF8] text-[#1D151C]">
      <Navbar />

      <main>
        {/* Page Header */}
        <PageHeader
          eyebrow="Signature Packaging"
          title={
            <>
              Royal Taste, <br />
              <span className="text-[#FDE047]">Wherever You Go</span>
            </>
          }
          description="Bespoke deep royal-purple takeaway bags and luxury gold-filigree food containers designed to keep your Indian and Indo-Chinese favorites piping hot."
          imageSrc={packagingHero}
          imageAlt="Royal Chaska luxury royal purple and gold packaging mockup"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Packaging" }]}
        >
          <a
            href={restaurant.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E0C058] to-[#C9A227] px-6 py-3.5 text-xs font-extrabold text-[#2A0E24] shadow-md hover:brightness-110 transition-all"
          >
            <Phone className="size-4" />
            Call for Takeaway ({restaurant.phone})
          </a>
          <a
            href={restaurant.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/50 bg-[#4B164C] px-6 py-3.5 text-xs font-bold text-[#FDE047] hover:bg-[#381239] transition-all"
          >
            <ShoppingBag className="size-4" />
            WhatsApp Order
          </a>
        </PageHeader>

        {/* Takeaway Packaging Section */}
        <TakeawayPackagingSection />

        {/* Contact CTA */}
        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
}
