"use client";

import { Flame, Utensils, Heart, Sparkles } from "lucide-react";
import heroStory from "@/assets/hero-story.jpg";
import heroSizzler from "@/assets/hero-royal-sizzler.jpg";
import { restaurant } from "@/data/restaurant";
import { ScrollReveal } from "./ScrollReveal";
import { ImageWithFallback } from "./ImageWithFallback";

const storyPillars = [
  {
    icon: Flame,
    title: "Authentic Charcoal Tandoor",
    description:
      "Live charcoal ovens searing chicken tikka, seekh kebabs, and malai boti with authentic smoky depth.",
  },
  {
    icon: Utensils,
    title: "Indo-Chinese Wok Mastery",
    description:
      "High-flame wok cooking for crisp Hakka noodles, Schezwan fried rice, and succulent Chilli Chicken.",
  },
  {
    icon: Sparkles,
    title: "Handi Dum Biryanis",
    description:
      "Fragrant aged basmati rice layered with tender meats, saffron, and whole royal spices.",
  },
  {
    icon: Heart,
    title: "Warm Karama Hospitality",
    description:
      "Welcoming dining atmosphere beside President Hotel, offering comforting meals and honest value.",
  },
];

export function StorySection() {
  return (
    <section
      id="story"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36 bg-[#FCFBF8] border-t border-[#E8E0D7]"
    >
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Visual Story Collage with New Heritage Background */}
          <div className="relative">
            <ScrollReveal direction="scale">
              <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#C9A227]/35 shadow-2xl bg-[#2A0E24]">
                <ImageWithFallback
                  src={heroStory}
                  alt="Authentic traditional royal kitchen with live charcoal tandoor and copper handis at Royal Chaska"
                  className="aspect-4/3 w-full object-cover sm:aspect-5/4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E24]/60 via-transparent to-transparent" />
              </div>
            </ScrollReveal>

            {/* Inset floating sizzler showcase card */}
            <ScrollReveal
              delay={0.2}
              direction="right"
              className="glass-card absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 max-w-[240px] sm:max-w-[280px] overflow-hidden rounded-3xl p-3 sm:p-4 shadow-xl bg-white/95 border border-[#C9A227]/40"
            >
              <div className="overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={heroSizzler}
                  alt="Sizzling tandoori mixed grill platter"
                  className="aspect-16/10 w-full object-cover"
                />
              </div>
              <p className="mt-3 font-serif text-sm font-bold text-[#4B164C]">
                Sizzling Tandoor Grills
              </p>
              <p className="mt-0.5 text-xs text-[#6B5E6A]">
                Freshly chargrilled in our live clay tandoors
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Text Narrative */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#4B164C]/10 px-3.5 py-1.5 text-xs font-bold text-[#4B164C] border border-[#C9A227]/30">
              <Sparkles className="size-3.5 text-[#C9A227]" />
              <span>About Royal Chaska</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D151C] mt-4">
              The Taste Behind <br />
              <span className="text-[#4B164C]">Royal Chaska</span>
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#6B5E6A] sm:text-base">
              <p className="font-medium text-[#1D151C]">
                Royal Chaska brings together comforting Indian flavors and Indo-Chinese favorites in
                a welcoming setting in Al Karama, Dubai.
              </p>
              <p>
                Situated at Shop 97 on Sheikh Khalifa Bin Zayed Street beside President Hotel, our
                kitchen celebrates the vibrant culinary traditions of India alongside beloved
                Indo-Chinese specialties. From smoking charcoal tandoori sizzlers and slow-cooked
                dum biryanis to flaming wok-tossed Hakka noodles and Manchurian gravies, every dish
                is prepared fresh with quality ingredients.
              </p>
              <p>
                Whether you are dining in with family, enjoying an evening gathering with friends,
                or ordering a late-night takeaway, Royal Chaska provides honest value, generous
                portions, and genuine hospitality.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {storyPillars.map((pillar, i) => (
                <ScrollReveal
                  key={pillar.title}
                  delay={0.1 * (i + 1)}
                  className="rounded-2xl border border-[#E8E0D7] bg-white p-4 transition-all hover:border-[#C9A227] hover:shadow-sm"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#4B164C] text-[#FDE047]">
                    <pillar.icon className="size-5" />
                  </div>
                  <h4 className="mt-3 font-serif text-sm font-bold text-[#1D151C]">
                    {pillar.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#6B5E6A]">
                    {pillar.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
