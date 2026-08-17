"use client";

import { useState } from "react";
import {
  MapPin,
  Clock,
  Phone,
  ArrowUpRight,
  Check,
  Copy,
  Navigation,
  Train,
  Car,
  ShoppingBag,
} from "lucide-react";

import { restaurant } from "@/data/restaurant";
import { openingHours, hoursNote, formatTime, isOpenNow } from "@/data/hours";
import { ScrollReveal } from "./ScrollReveal";

export function LocationHoursSection() {
  const [copied, setCopied] = useState(false);
  const openNow = isOpenNow();

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(restaurant.address.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36 bg-[#FCFBF8]">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4B164C]/10 px-3.5 py-1.5 text-xs font-bold text-[#4B164C] border border-[#C9A227]/30">
            <MapPin className="size-3.5 text-[#C9A227]" />
            <span>Visit &amp; Contact</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D151C] mt-3">
            Find Royal Chaska
          </h2>
          <p className="mt-3 text-sm text-[#6B5E6A] leading-relaxed">
            Conveniently situated on Sheikh Khalifa Bin Zayed Street beside President Hotel in Al
            Karama, Dubai.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-start">
          {/* Left Column: Map & Address */}
          <ScrollReveal direction="left" className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-[#E8E0D7] bg-white shadow-lg">
              {/* Google Maps Embed iframe */}
              <div className="relative aspect-16/10 w-full bg-[#2A0E24]">
                <iframe
                  title="Royal Chaska Dubai Location Map"
                  src="https://maps.google.com/maps?q=Royal+Chaska+Sheikh+Khalifa+Bin+Zayed+St+Al+Karama+Dubai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Map Card Details */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1D151C]">
                      {restaurant.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#6B5E6A]">
                      {restaurant.address.shop}, {restaurant.address.street},{" "}
                      {restaurant.address.landmark}, {restaurant.address.area},{" "}
                      {restaurant.address.city}, UAE
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={copyAddress}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E0D7] bg-white px-4 py-2 text-xs font-bold text-[#4B164C] hover:border-[#C9A227]"
                    >
                      {copied ? (
                        <>
                          <Check className="size-3.5 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href={restaurant.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#4B164C] px-5 py-2 text-xs font-bold text-[#FAF7F2] shadow-sm hover:brightness-110"
                    >
                      <span>Get Directions</span>
                      <Navigation className="size-3.5 text-[#FDE047]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & WhatsApp Strip */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={restaurant.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-[#E8E0D7] bg-white p-5 shadow-xs transition-all hover:border-[#C9A227] hover:shadow-md"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#4B164C] text-[#FDE047]">
                  <Phone className="size-5" />
                </div>
                <div>
                  <span className="text-[0.6875rem] font-bold text-[#6B5E6A] uppercase tracking-wider">
                    Direct Phone Line
                  </span>
                  <p className="font-serif text-sm font-bold text-[#1D151C]">{restaurant.phone}</p>
                </div>
              </a>

              <a
                href={restaurant.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#E8E0D7] bg-white p-5 shadow-xs transition-all hover:border-[#C9A227] hover:shadow-md"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#C9A227] to-[#9E7B15] text-[#2A0E24]">
                  <ShoppingBag className="size-5" />
                </div>
                <div>
                  <span className="text-[0.6875rem] font-bold text-[#6B5E6A] uppercase tracking-wider">
                    WhatsApp Orders
                  </span>
                  <p className="font-serif text-sm font-bold text-[#1D151C]">{restaurant.phone}</p>
                </div>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column: Opening Hours Card */}
          <ScrollReveal direction="right">
            <div className="rounded-3xl border border-[#E8E0D7] bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#E8E0D7] pb-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1D151C]">Opening Hours</h3>
                  <p className="text-xs text-[#6B5E6A] mt-1">Open 7 days a week</p>
                </div>

                <div className="flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold border border-[#E8E0D7] bg-[#FCFBF8]">
                  <span
                    className={`size-2.5 rounded-full ${
                      openNow ? "bg-emerald-600 animate-pulse" : "bg-amber-600"
                    }`}
                  />
                  <span className={openNow ? "text-emerald-700" : "text-amber-700"}>
                    {openNow ? "Open Now" : "Currently Closed"}
                  </span>
                </div>
              </div>

              {/* Hours List */}
              <ul className="mt-6 space-y-3 divide-y divide-[#F6F1E9]">
                {openingHours.map((item) => (
                  <li
                    key={item.day}
                    className="flex items-center justify-between pt-3 text-xs sm:text-sm"
                  >
                    <span className="font-medium text-[#1D151C]">{item.day}</span>
                    <span className="font-semibold text-[#4B164C]">
                      {item.opens && item.closes
                        ? `${formatTime(item.opens)} – ${formatTime(item.closes)}`
                        : "Closed"}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-[#6B5E6A] leading-relaxed border-t border-[#E8E0D7] pt-4">
                {hoursNote}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
