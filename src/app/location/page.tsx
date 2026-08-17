import type { Metadata } from "next";
import { Navigation, Phone, Train, Car, Bike, ArrowUpRight } from "lucide-react";

import locationHeroImage from "@/assets/hero-location.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { LocationHoursSection } from "@/components/liz/LocationHoursSection";
import { LizLink } from "@/components/liz/LizButton";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

export const metadata: Metadata = {
  title: "Location & Opening Hours",
  description:
    "Visit Royal Chaska Dubai at Shop 97, Sheikh Khalifa Bin Zayed St, beside President Hotel, Al Karama, Dubai. Open daily till late night (3:00 AM) for dine-in, takeaway, and delivery.",
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
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Hero */}
        <PageHeader
          eyebrow="Visit &amp; Connect"
          title={
            <>
              Find Us Beside <br />
              <span className="text-gold">President Hotel, Al Karama</span>
            </>
          }
          description="Step into our vibrant dining room or order sizzling tandoori grills, handi biryani, and late-night cravings in Dubai’s liveliest food street."
          imageSrc={locationHeroImage}
          imageAlt="Royal Chaska Dubai storefront in Al Karama Dubai beside President Hotel"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Location & Hours" }]}
        >
          <LizLink
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="md"
          >
            Open in Google Maps
            <Navigation className="size-4" />
          </LizLink>
          <LizLink href={restaurant.phoneHref} variant="ghostOnDark" size="md">
            <Phone className="size-4" />
            Call Front Desk ({restaurant.phone})
          </LizLink>
        </PageHeader>

        {/* Transit & Access Guide */}
        <section className="py-16 sm:py-20 bg-card border-b border-border">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="eyebrow text-primary">Easy Accessibility</p>
              <h2 className="display-md mt-2 text-foreground">Getting to Royal Chaska Dubai</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Centrally situated at Shop 97, Sheikh Khalifa Bin Zayed St, beside President Hotel
                with easy metro access and front parking.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {transitGuides.map((guide, i) => (
                <ScrollReveal
                  key={guide.title}
                  delay={i * 0.1}
                  className="rounded-3xl border border-border bg-background p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <guide.icon className="size-6" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mt-4">
                      {guide.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
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

        {/* Online Ordering CTA */}
        <section className="py-16 bg-primary-deep text-primary-foreground">
          <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Craving Late-Night Royal Flavours?
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/80">
              Get sizzling tandoori sizzlers, aromatic biryanis, fresh paratha rolls, and falooda
              delivered hot to your doorstep.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <LizLink
                href={restaurant.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="lg"
              >
                Order on WhatsApp ({restaurant.phone})
                <ArrowUpRight className="size-4" />
              </LizLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
