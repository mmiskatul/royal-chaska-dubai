"use client";

import { Phone, Navigation, Utensils, Sparkles, ShoppingBag } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

export function ContactCTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-r from-[#2A0E24] via-[#4B164C] to-[#2A0E24] text-[#FAF7F2] border-t border-[#C9A227]/30">
      {/* Decorative Gold Arch Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 sm:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C9A227]/20 px-3.5 py-1.5 text-xs font-bold text-[#FDE047] border border-[#C9A227]/40 mb-4">
            <Sparkles className="size-3.5" />
            <span>Al Karama, Dubai</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Ready for a Royal Chaska?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#FAF7F2]/80 max-w-xl mx-auto leading-relaxed">
            Visit us in Al Karama or get in touch with our team for dine-in, takeaway, and fast home
            delivery.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={restaurant.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E0C058] to-[#C9A227] px-6 py-3.5 text-xs font-extrabold text-[#2A0E24] shadow-lg hover:brightness-110 transition-all"
            >
              <Phone className="size-4" />
              Call Now ({restaurant.phone})
            </a>

            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/60 bg-[#2A0E24]/60 px-6 py-3.5 text-xs font-bold text-[#FAF7F2] hover:bg-[#2A0E24] transition-all backdrop-blur-sm"
            >
              <Navigation className="size-4 text-[#FDE047]" />
              Get Directions
            </a>

            <a
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              <Utensils className="size-4 text-[#C9A227]" />
              View Menu
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
