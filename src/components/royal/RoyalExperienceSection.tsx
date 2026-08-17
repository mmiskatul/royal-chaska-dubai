"use client";

import { Sparkles, Utensils, MapPin, Flame } from "lucide-react";
import heroSizzler from "@/assets/hero-royal-sizzler.jpg";
import indochinese from "@/assets/dish-indochinese.jpg";
import { ScrollReveal } from "@/components/liz/ScrollReveal";
import { ImageWithFallback } from "@/components/liz/ImageWithFallback";

const pillars = [
  {
    icon: Flame,
    title: "Authentic Flavors",
    description:
      "Indian-inspired dishes with bold, aromatic tandoori spices and comforting homestyle curries.",
  },
  {
    icon: Utensils,
    title: "Indo-Chinese Favorites",
    description:
      "A popular selection of wok-tossed Hakka noodles, fiery Schezwan fried rice, and crispy Chilli Chicken.",
  },
  {
    icon: MapPin,
    title: "Al Karama Favorite",
    description:
      "Conveniently located at Shop 97, Sheikh Khalifa Bin Zayed St, beside President Hotel in Al Karama, Dubai.",
  },
];

export function RoyalExperienceSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-[#2A0E24] via-[#381239] to-[#2A0E24] text-[#FAF7F2] border-y border-[#C9A227]/30">
      {/* Decorative Gold Arch Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-[#C9A227] flex items-center justify-center gap-2">
            <Sparkles className="size-3.5" />
            <span>The Royal Standard</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-[#FAF7F2]">
            More Than a Meal. <br />
            <span className="text-[#FDE047]">It&apos;s a Royal Chaska.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed max-w-2xl mx-auto">
            Where rich Indian culinary heritage meets sizzling charcoal tandoors and wok-fired
            Indo-Chinese favorites, prepared fresh daily for the Dubai community.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((item, idx) => (
            <ScrollReveal
              key={item.title}
              delay={idx * 0.1}
              className="group relative overflow-hidden rounded-3xl border border-[#C9A227]/30 bg-[#4B164C]/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#C9A227] hover:bg-[#4B164C]/70 hover:-translate-y-1 shadow-xl"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#9E7B15] text-[#2A0E24] shadow-md">
                <item.icon className="size-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FAF7F2] mt-6 group-hover:text-[#FDE047] transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#FAF7F2]/75">{item.description}</p>
              <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-[#C9A227] to-transparent group-hover:w-full transition-all duration-500" />
            </ScrollReveal>
          ))}
        </div>

        {/* Visual Dual Showcase Banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ScrollReveal
            direction="left"
            className="relative overflow-hidden rounded-3xl border border-[#C9A227]/30 shadow-2xl"
          >
            <ImageWithFallback
              src={heroSizzler}
              alt="Royal Tandoori Sizzler and Biryani Handi"
              className="aspect-16/10 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E24]/90 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FDE047] font-bold">
                  Indian Specialty
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  Charcoal Sizzlers &amp; Dum Biryani
                </h4>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            className="relative overflow-hidden rounded-3xl border border-[#C9A227]/30 shadow-2xl"
          >
            <ImageWithFallback
              src={indochinese}
              alt="Wok Tossed Hakka Noodles and Chilli Chicken"
              className="aspect-16/10 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E24]/90 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FDE047] font-bold">
                  Indo-Chinese Specialty
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  Wok-Tossed Noodles &amp; Manchurian
                </h4>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
