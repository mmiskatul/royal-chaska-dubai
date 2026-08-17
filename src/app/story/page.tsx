import type { Metadata } from "next";
import { ArrowUpRight, Flame, Leaf, Award, HeartHandshake, Utensils } from "lucide-react";

import storyHeroImage from "@/assets/hero-story.jpg";
import feastImage from "@/assets/dish-indochinese.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { StorySection } from "@/components/liz/StorySection";
import { ImageWithFallback } from "@/components/liz/ImageWithFallback";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Story & Indian Culinary Heritage",
  description:
    "Discover the story of Royal Chaska Dubai in Al Karama. Bringing live charcoal tandoor ovens, handi dum biryani, and Indo-Chinese favorites beside President Hotel.",
};

const culinarySecrets = [
  {
    icon: Flame,
    title: "Charcoal Clay Tandoor",
    description:
      "Live charcoal clay ovens that infuse intense smoky flavors into our succulent tandoori chicken, seekh kebabs, and crisp butter naans.",
  },
  {
    icon: Leaf,
    title: "In-House Royal Spices",
    description:
      "Hand-selected royal spices, Kashmiri chillies, pure saffron, and whole black peppercorns freshly roasted and ground for every batch.",
  },
  {
    icon: Award,
    title: "Slow Dum Handi Cooking",
    description:
      "Our signature chicken and mutton biryanis are sealed in pots on low heat to lock in succulent juices and rich aromatics.",
  },
  {
    icon: HeartHandshake,
    title: "Late Night Comfort",
    description:
      "We cater to Dubai's late-night cravings, serving fresh hot sizzlers, paratha rolls, and chilled kulfi faloodas till 3:00 AM daily.",
  },
];

export default function StoryPage() {
  return (
    <div className="relative min-h-screen bg-[#FCFBF8] text-[#1D151C]">
      <Navbar />

      <main>
        {/* Page Hero with New Heritage Tandoor Background */}
        <PageHeader
          eyebrow="Our Story &amp; Heritage"
          title={
            <>
              Flavours with a Royal Touch <br />
              <span className="text-[#FDE047]">Beside President Hotel, Karama</span>
            </>
          }
          description="A celebration of rich Indian heritage, live clay charcoal tandoors, slow dum biryanis, and beloved Indo-Chinese favorites in Dubai."
          imageSrc={storyHeroImage}
          imageAlt="Traditional royal kitchen with live charcoal tandoor and copper handis at Royal Chaska"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Story" }]}
        >
          <a
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E0C058] to-[#C9A227] px-6 py-3.5 text-xs font-extrabold text-[#2A0E24] shadow-md hover:brightness-110 transition-all"
          >
            Explore Our Menu
            <Utensils className="size-4" />
          </a>
          <a
            href="/location"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            Visit in Al Karama
          </a>
        </PageHeader>

        {/* Detailed Narrative Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <p className="eyebrow text-[#4B164C]">The Heritage</p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D151C] mt-3">
                  The True Passion Behind <br />
                  <span className="text-[#4B164C]">Royal Chaska Dubai.</span>
                </h2>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#6B5E6A] sm:text-base">
                  <p className="font-medium text-[#1D151C]">
                    When <strong>{restaurant.name}</strong> opened its doors at Shop 97 on Sheikh
                    Khalifa Bin Zayed Street, our mission was clear: to bring the authentic energy
                    of live charcoal tandoor grills, rich handi curries, and comforting Indo-Chinese
                    favorites together under one welcoming roof.
                  </p>
                  <p>
                    From our sizzling mixed grill platters loaded with tender malai boti and juicy
                    seekh kebabs, to slow-cooked handi biryanis and velvety butter chicken, every
                    dish is prepared fresh on order with high-quality spices and ingredients.
                  </p>
                  <p>
                    Whether you are dining in with family, grabbing a quick paratha roll on the go,
                    or ordering late-night takeaway with friends, Royal Chaska welcomes you with
                    generous portions and unforgettable flavours.
                  </p>
                </div>
              </div>

              <ScrollReveal direction="scale" className="relative">
                <div className="overflow-hidden rounded-3xl shadow-xl border border-[#E8E0D7] bg-[#2A0E24]">
                  <ImageWithFallback
                    src={feastImage}
                    alt="Royal Chaska Indo-Chinese and Indian dining feast with noodles and chilli chicken"
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>
                <div className="glass-card absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 rounded-2xl p-4 sm:p-5 max-w-xs shadow-lg bg-white/95 border border-[#C9A227]/40">
                  <p className="font-serif text-sm font-bold text-[#4B164C]">
                    Shop 97, Sheikh Khalifa Bin Zayed St
                  </p>
                  <p className="mt-0.5 text-xs text-[#6B5E6A]">
                    Beside President Hotel • Open daily till 3:00 AM.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Kitchen Craft & Secrets */}
        <section className="py-20 sm:py-28 bg-[#FCFBF8] border-t border-[#E8E0D7]">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="eyebrow text-[#4B164C]">Culinary Craftsmanship</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1D151C] mt-2">
                How We Craft Royal Flavours
              </h2>
              <p className="mt-4 text-sm text-[#6B5E6A] leading-relaxed">
                We combine traditional clay tandoors, slow dum cooking methods, and premium whole
                spices to give you an authentic dining experience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {culinarySecrets.map((secret, i) => (
                <ScrollReveal
                  key={secret.title}
                  delay={i * 0.1}
                  className="rounded-3xl border border-[#E8E0D7] bg-white p-6 shadow-xs transition-all hover:border-[#C9A227] hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#4B164C] text-[#FDE047]">
                    <secret.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-base font-bold text-[#1D151C]">
                    {secret.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6B5E6A]">
                    {secret.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section Component */}
        <StorySection />

        {/* Call to action */}
        <section className="py-20 bg-gradient-to-r from-[#2A0E24] via-[#4B164C] to-[#2A0E24] text-[#FAF7F2] border-t border-[#C9A227]/30">
          <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
            <h3 className="font-serif text-2xl font-bold sm:text-4xl">
              Ready for Your Royal Chaska Experience?
            </h3>
            <p className="mt-3 text-sm text-[#FAF7F2]/80 sm:text-base">
              Join us beside President Hotel, Al Karama, or order directly on WhatsApp for
              late-night delivery.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={restaurant.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E0C058] to-[#C9A227] px-6 py-3.5 text-xs font-extrabold text-[#2A0E24] shadow-md hover:brightness-110 transition-all"
              >
                Order on WhatsApp ({restaurant.phone})
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="/menu"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                View Full Menu
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
