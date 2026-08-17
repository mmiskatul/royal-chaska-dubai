"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ShoppingBag, Sparkles } from "lucide-react";

import { restaurant, navLinks } from "@/data/restaurant";
import { LizLink } from "./LizButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#2A0E24]/95 backdrop-blur-md shadow-lg border-b border-[#C9A227]/25 py-2.5"
            : "bg-gradient-to-b from-[#2A0E24]/80 via-[#2A0E24]/40 to-transparent py-4"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between px-5 sm:px-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B164C] to-[#2A0E24] border border-[#C9A227]/50 shadow-md">
              <span className="font-serif text-lg font-black text-[#FDE047]">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider text-[#FAF7F2] sm:text-2xl uppercase group-hover:text-[#FDE047] transition-colors">
                Royal Chaska
              </span>
              <span className="text-[0.625rem] tracking-[0.25em] text-[#C9A227] uppercase font-semibold">
                Indian • Indo-Chinese
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-[#1D091A]/60 px-4 py-1.5 border border-[#C9A227]/20 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  href={link.to}
                  className={`relative px-4 py-2 text-xs font-semibold tracking-wider transition-all rounded-full ${
                    isActive
                      ? "text-[#FAF7F2] bg-[#4B164C] border border-[#C9A227]/40 shadow-xs"
                      : "text-[#FAF7F2]/80 hover:text-[#FDE047] hover:bg-[#4B164C]/40"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <a
              href={restaurant.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#4B164C]/50 px-4 py-2 text-xs font-bold text-[#FDE047] hover:bg-[#4B164C] hover:border-[#C9A227] transition-all shadow-xs"
            >
              <Phone className="size-3.5 text-[#C9A227]" />
              <span>{restaurant.phone}</span>
            </a>

            <a
              href={restaurant.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E0C058] to-[#C9A227] px-4 py-2 text-xs font-extrabold text-[#2A0E24] shadow-md hover:brightness-110 transition-all"
            >
              <ShoppingBag className="size-3.5" />
              <span>Order Now</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden flex size-10 items-center justify-center rounded-xl bg-[#4B164C]/60 border border-[#C9A227]/30 text-[#FAF7F2] hover:text-[#FDE047]"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A0817]/80 backdrop-blur-md lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-[#2A0E24] to-[#1D091A] p-6 text-[#FAF7F2] shadow-2xl border-l border-[#C9A227]/30 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#C9A227]/20">
                  <div className="flex items-center gap-2">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#4B164C] border border-[#C9A227]">
                      <span className="font-serif text-base font-bold text-[#FDE047]">R</span>
                    </div>
                    <span className="font-serif text-lg font-bold text-[#FAF7F2]">
                      Royal Chaska
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex size-9 items-center justify-center rounded-lg border border-[#C9A227]/30 text-[#FAF7F2]/80 hover:text-white"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <nav className="mt-8 space-y-2">
                  {navLinks.map((link) => {
                    const isActive =
                      link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
                    return (
                      <Link
                        key={link.to}
                        href={link.to}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                          isActive
                            ? "bg-[#4B164C] text-[#FDE047] border border-[#C9A227]/40 shadow-xs"
                            : "text-[#FAF7F2]/80 hover:bg-[#4B164C]/30 hover:text-[#FAF7F2]"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <Sparkles className="size-3.5 text-[#C9A227]" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#C9A227]/20 space-y-3">
                <a
                  href={restaurant.phoneHref}
                  className="flex items-center justify-center gap-2 w-full rounded-xl border border-[#C9A227]/50 bg-[#4B164C] py-3 text-sm font-bold text-[#FDE047]"
                >
                  <Phone className="size-4" />
                  Call {restaurant.phone}
                </a>
                <a
                  href={restaurant.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-[#C9A227] via-[#E0C058] to-[#C9A227] py-3 text-sm font-extrabold text-[#2A0E24]"
                >
                  <ShoppingBag className="size-4" />
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
