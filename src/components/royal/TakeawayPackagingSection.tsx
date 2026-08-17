"use client";

import { ShoppingBag, Sparkles, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";
import takeawayBagImg from "@/assets/royal-takeaway-bag.jpg";
import { restaurant } from "@/data/restaurant";
import { ScrollReveal } from "@/components/liz/ScrollReveal";
import { ImageWithFallback } from "@/components/liz/ImageWithFallback";
import { LizLink } from "@/components/liz/LizButton";

const packagingFeatures = [
  {
    icon: Sparkles,
    title: "Signature Royal Purple & Gold",
    description:
      "Designed in our signature deep royal purple with metallic antique gold filigree and emblem.",
  },
  {
    icon: ShieldCheck,
    title: "Heat-Sealed & Fresh",
    description:
      "Multi-layered food containers keep biryanis steaming hot, sizzlers aromatic, and noodles crisp.",
  },
  {
    icon: Clock,
    title: "Fast Takeaway & Delivery",
    description:
      "Packaged efficiently for swift pickup or doorstep delivery across Karama and Dubai.",
  },
];

export function TakeawayPackagingSection() {
  return (
    <section
      id="packaging"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#FCFBF8] border-b border-[#E8E0D7]"
    >
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Packaging Mockup Visual */}
          <ScrollReveal direction="scale" className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#C9A227]/40 shadow-2xl bg-[#2A0E24]">
              <ImageWithFallback
                src={takeawayBagImg}
                alt="Royal Chaska luxury royal purple takeaway bag and packaging mockup with gold logo"
                className="aspect-4/3 w-full object-cover sm:aspect-5/4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E24]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Luxury Tag */}
            <div className="glass-card absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-6 rounded-2xl p-4 sm:p-5 max-w-xs shadow-xl border border-[#C9A227]/40 bg-white/90">
              <p className="font-serif text-sm font-bold text-[#4B164C] flex items-center gap-1.5">
                <Sparkles className="size-4 text-[#C9A227]" />
                Royal Takeaway Packaging
              </p>
              <p className="mt-1 text-xs text-[#6B5E6A] leading-relaxed">
                Premium royal purple paper bag with gold Indian filigree styling.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Narrative & Packaging Highlights */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#4B164C]/10 px-3.5 py-1.5 text-xs font-bold text-[#4B164C] border border-[#C9A227]/30">
              <ShoppingBag className="size-3.5 text-[#C9A227]" />
              <span>Premium Dining On The Go</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D151C] mt-4">
              Royal Taste, <br />
              <span className="text-[#4B164C]">Wherever You Go</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#6B5E6A] leading-relaxed">
              Experience the same royal dining standard at your home or office. Our bespoke takeaway
              packaging in deep royal purple and antique gold is crafted to keep your tandoori
              sizzlers, biryanis, and Indo-Chinese favorites fresh, fragrant, and piping hot.
            </p>

            {/* Feature Highlights Grid */}
            <div className="mt-8 space-y-4">
              {packagingFeatures.map((feat) => (
                <div
                  key={feat.title}
                  className="flex items-start gap-4 rounded-2xl bg-white p-4 border border-[#E8E0D7] shadow-xs hover:border-[#C9A227]/60 transition-colors"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#4B164C] text-[#FDE047]">
                    <feat.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1D151C]">{feat.title}</h4>
                    <p className="text-xs text-[#6B5E6A] mt-0.5 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={restaurant.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4B164C] to-[#2A0E24] px-6 py-3 text-xs font-bold text-[#FAF7F2] shadow-md hover:brightness-110 transition-all border border-[#C9A227]/40"
              >
                Call for Takeaway ({restaurant.phone})
                <ArrowUpRight className="size-4 text-[#FDE047]" />
              </a>
              <a
                href={restaurant.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E0C058] to-[#C9A227] px-6 py-3 text-xs font-extrabold text-[#2A0E24] shadow-md hover:brightness-110 transition-all"
              >
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
