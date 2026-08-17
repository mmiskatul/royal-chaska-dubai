import type { Metadata } from "next";
import { Navigation, Phone, Train, Car, Bike, ArrowUpRight, ShoppingBag } from "lucide-react";

import locationHeroImage from "@/assets/hero-location.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { LocationHoursSection } from "@/components/liz/LocationHoursSection";
import { ContactCTASection } from "@/components/royal/ContactCTASection";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact & Location | Royal Chaska Dubai",
  description:
    "Visit Royal Chaska Dubai at Shop 97, Sheikh Khalifa Bin Zayed St, beside President Hotel, Al Karama, Dubai. Open daily till 3:00 AM for dine-in, takeaway, and delivery.",
};

const transitGuides = [
  {
    icon: Train,
    title: "By Dubai Metro",
    description:
      "A quick walk from ADCB Metro Station (Red Line) and Burjuman Interchange Station on Sheikh Khalifa Bin Zayed Road.",
  },
  {
    icon: Car,
    title: "Parking & Driving",
    description:
      "Located beside President Hotel on Sheikh Khalifa Bin Zayed Street, Al Karama. Ample RTA paid parking spots available right out front.",
  },
  {
    icon: Bike,
    title: "Late Night Delivery",
    description:
      "Sizzling hot grills, biryanis, and curries delivered swiftly across Al Karama, Bur Dubai, Mankhool, Oud Metha, and Satwa.",
  },
];

export default function LocationPage() {
  return (
    <div className="relative min-h-screen bg-[#FCFBF8] text-[#1D151C]">
      <Navbar />

      <main>
        {/* Page Hero */}
        <PageHeader
          eyebrow="Visit &amp; Connect"
          title={
            <>
              Find Us Beside <br />
              <span className="text-[#FDE047]">President Hotel, Al Karama</span>
            </>
          }
          description="Step into our welcoming dining room or order sizzling tandoori grills, handi biryani, and late-night Indo-Chinese cravings on Sheikh Khalifa Bin Zayed Street."
          imageSrc={locationHeroImage}
          imageAlt="Royal Chaska Dubai location on Sheikh Khalifa Bin Zayed Street beside President Hotel"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact & Location" }]}
        >
          <a
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E0C058] to-[#C9A227] px-6 py-3.5 text-xs font-extrabold text-[#2A0E24] shadow-md hover:brightness-110 transition-all"
          >
            Open in Google Maps
            <Navigation className="size-4" />
          </a>
          <a
            href={restaurant.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            <Phone className="size-4 text-[#FDE047]" />
            Call ({restaurant.phone})
          </a>
        </PageHeader>

        {/* Transit & Access Guide */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#E8E0D7]">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#4B164C]/10 px-3.5 py-1.5 text-xs font-bold text-[#4B164C] border border-[#C9A227]/30">
                <Navigation className="size-3.5 text-[#C9A227]" />
                <span>Accessibility Guide</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1D151C] mt-3">
                Getting to Royal Chaska Dubai
              </h2>
              <p className="mt-3 text-sm text-[#6B5E6A]">
                Centrally situated at Shop 97, Sheikh Khalifa Bin Zayed St, beside President Hotel
                with easy metro access and front parking.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {transitGuides.map((guide, i) => (
                <ScrollReveal
                  key={guide.title}
                  delay={i * 0.1}
                  className="rounded-3xl border border-[#E8E0D7] bg-[#FCFBF8] p-6 shadow-xs flex flex-col justify-between hover:border-[#C9A227] hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#4B164C] text-[#FDE047]">
                      <guide.icon className="size-6" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#1D151C] mt-4">
                      {guide.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#6B5E6A]">
                      {guide.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Hours Section Component */}
        <LocationHoursSection />

        {/* Contact CTA Section */}
        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
}
