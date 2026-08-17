import type { Metadata } from "next";
import { ArrowUpRight, Camera, Utensils, MapPin } from "lucide-react";

import galleryHeroImage from "@/assets/hero-gallery.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { GallerySection } from "@/components/liz/GallerySection";
import { LizLink } from "@/components/liz/LizButton";

export const metadata: Metadata = {
  title: "Food & Atmosphere Photo Gallery",
  description:
    "Explore the photo gallery of Royal Chaska Dubai in Al Karama. Sizzling mixed tandoori grills, steaming dum biryani handis, Peshawari karahi, and our vibrant late-night dining atmosphere.",
};

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Page Hero */}
        <PageHeader
          eyebrow="Visual Showcase"
          title={
            <>
              Royal Sizzlers &amp; Feast <br />
              <span className="text-gold">In Every Platter &amp; Sizzle</span>
            </>
          }
          description="Immerse yourself in the sizzling colors, aromatic tandoor platters, rich gravies, and late-night vibes at Royal Chaska Dubai."
          imageSrc={galleryHeroImage}
          imageAlt="Artistic overhead flatlay of sizzling mixed grill platter, biryani handi, and royal curries"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
        >
          <LizLink href="/menu" variant="gold" size="md">
            View Menu
            <Utensils className="size-4" />
          </LizLink>
          <LizLink href="/location" variant="ghostOnDark" size="md">
            <MapPin className="size-4" />
            Find Our Location
          </LizLink>
        </PageHeader>

        {/* Gallery Section Component */}
        <GallerySection />

        {/* Photography & Atmosphere note banner */}
        <section className="py-16 bg-card border-t border-border">
          <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Camera className="size-7" />
            </div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl mt-4 text-foreground">
              Tag Us in Your Dining Moments
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Share your sizzling grill platters, biryani moments, and late-night feasts with us on
              social media using{" "}
              <span className="font-semibold text-primary">#RoyalChaskaDubai</span>.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <LizLink
                href={restaurant.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                Order on WhatsApp ({restaurant.phone})
                <ArrowUpRight className="size-4" />
              </LizLink>
              <LizLink
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
              >
                Get Directions
              </LizLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
