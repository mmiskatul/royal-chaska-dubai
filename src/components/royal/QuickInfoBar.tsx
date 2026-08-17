"use client";

import { MapPin, Phone, Utensils, DollarSign, Clock } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const infoItems = [
  {
    icon: MapPin,
    title: "Al Karama, Dubai",
    subtitle: "Shop 97, beside President Hotel",
    href: restaurant.mapsUrl,
  },
  {
    icon: Phone,
    title: "+971 56 830 6501",
    subtitle: "Direct Hotline & WhatsApp",
    href: restaurant.phoneHref,
  },
  {
    icon: Utensils,
    title: "Indian & Indo-Chinese",
    subtitle: "Tandoori, Biryani & Wok Specials",
    href: "/menu",
  },
  {
    icon: DollarSign,
    title: "AED 1–50",
    subtitle: "Affordable Dining & Combos",
    href: "/menu",
  },
  {
    icon: Clock,
    title: "Open Daily",
    subtitle: "Dine-in, Takeaway & Delivery",
    href: "/location",
  },
];

export function QuickInfoBar() {
  return (
    <section aria-label="Quick Business Information" className="relative z-20 -mt-8 px-5 sm:px-8">
      <div className="mx-auto w-full max-w-[88rem]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 rounded-3xl bg-gradient-to-br from-[#2A0E24] via-[#3B123C] to-[#2A0E24] p-4 sm:p-6 shadow-2xl border border-[#C9A227]/35 text-[#FAF7F2]">
          {infoItems.map((item, idx) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-start gap-3 p-3 rounded-2xl transition-all duration-300 hover:bg-[#4B164C]/50 hover:scale-[1.02] ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#4B164C] border border-[#C9A227]/40 text-[#FDE047]">
                <item.icon className="size-4" />
              </div>
              <div className="overflow-hidden">
                <p className="font-serif text-sm font-bold text-[#FAF7F2] truncate group-hover:text-[#FDE047]">
                  {item.title}
                </p>
                <p className="text-[0.6875rem] text-[#FAF7F2]/70 truncate mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
