"use client";

import { ArrowUp, MapPin, Phone, ArrowUpRight, Navigation, Sparkles } from "lucide-react";
import Link from "next/link";

import { restaurant, navLinks } from "@/data/restaurant";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#C9A227]/30 bg-[#2A0E24] text-[#FAF7F2]">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#4B164C] border border-[#C9A227] text-[#FDE047]">
                <span className="font-serif text-lg font-black">R</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase group-hover:text-[#FDE047] transition-colors">
                Royal Chaska
              </span>
            </Link>
            <p className="text-xs font-bold text-[#FDE047] tracking-widest uppercase">
              &quot;{restaurant.tagline}&quot;
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-[#FAF7F2]/70">
              {restaurant.description}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#FDE047] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-[#FAF7F2]/80 transition-colors hover:text-[#FDE047] flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#FDE047] uppercase tracking-wider">
              Contact &amp; Location
            </h4>
            <ul className="mt-4 space-y-3 text-xs sm:text-sm text-[#FAF7F2]/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-[#C9A227]" />
                <span>
                  {restaurant.address.shop}, {restaurant.address.street},{" "}
                  {restaurant.address.landmark}, {restaurant.address.area},{" "}
                  {restaurant.address.city}, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-[#C9A227]" />
                <a
                  href={restaurant.phoneHref}
                  className="transition-colors hover:text-[#FDE047] font-semibold text-[#FAF7F2]"
                >
                  {restaurant.phone}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FDE047] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Hours */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#FDE047] uppercase tracking-wider">
              Dining &amp; Takeaway
            </h4>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#FAF7F2]/80">
              Open 7 days a week: <br />
              <strong className="text-white">10:00 AM – 3:00 AM Daily</strong>
            </p>
            <p className="mt-3 text-xs text-[#FAF7F2]/60">
              Dine-in • Takeaway • Fast Delivery across Dubai
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#C9A227]/20 pt-8 text-xs text-[#FAF7F2]/60 sm:flex-row">
          <p>&copy; 2026 {restaurant.name}. All Rights Reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-[#4B164C]/50 px-4 py-2 text-xs font-semibold text-[#FDE047] transition-colors hover:bg-[#4B164C]"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
