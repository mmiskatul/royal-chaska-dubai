"use client";

import { Sparkles, ArrowRight, Flame, Utensils, Coffee } from "lucide-react";
import Link from "next/link";
import { signatureDishes } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import { ScrollReveal } from "@/components/liz/ScrollReveal";
import { ImageWithFallback } from "@/components/liz/ImageWithFallback";

export function SignatureDishesSection() {
  return (
    <section id="specialties" className="relative py-20 sm:py-28 lg:py-36 bg-[#FCFBF8]">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#4B164C]/10 px-3.5 py-1.5 text-xs font-bold text-[#4B164C] border border-[#C9A227]/30">
              <Sparkles className="size-3.5 text-[#C9A227]" />
              <span>Chef&apos;s Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D151C] mt-3">
              Taste Our Favorites
            </h2>
            <p className="mt-3 text-sm text-[#6B5E6A] max-w-xl leading-relaxed">
              Explore our most popular Indian tandoori grills, dum biryanis, and wok-tossed
              Indo-Chinese dishes prepared fresh on order.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-[#4B164C] px-6 py-3 text-xs font-bold text-[#4B164C] hover:bg-[#4B164C] hover:text-[#FAF7F2] transition-all self-start sm:self-auto"
          >
            <span>View Full Menu</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Signature Dishes Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish, idx) => (
            <ScrollReveal
              key={dish.id}
              delay={idx * 0.08}
              className="group overflow-hidden rounded-3xl border border-[#E8E0D7] bg-white shadow-sm transition-all duration-300 hover:border-[#C9A227] hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#2A0E24]">
                  <ImageWithFallback
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#4B164C]/90 px-3 py-1 text-[0.6875rem] font-bold text-[#FDE047] backdrop-blur-md border border-[#C9A227]/40 shadow-sm">
                      <Sparkles className="size-3" />
                      {dish.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-[#1D151C] group-hover:text-[#4B164C] transition-colors">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-[#6B5E6A] leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {dish.ingredients.slice(0, 3).map((ing) => (
                      <span
                        key={ing}
                        className="rounded-lg bg-[#F6F1E9] px-2 py-0.5 text-[0.6875rem] font-medium text-[#4B164C]"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={restaurant.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F6F1E9] py-2.5 text-xs font-bold text-[#4B164C] group-hover:bg-[#4B164C] group-hover:text-[#FAF7F2] transition-colors border border-[#C9A227]/20"
                >
                  Order on WhatsApp
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
