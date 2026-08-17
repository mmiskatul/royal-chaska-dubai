"use client";

import { motion } from "motion/react";
import { ArrowRight, MapPin, Star, Flame, Clock, Sparkles } from "lucide-react";

import heroSizzlerImage from "@/assets/hero-royal-sizzler.jpg";
import heroBgImage from "@/assets/hero-bg-texture.jpg";
import { restaurant } from "@/data/restaurant";
import { LizLink } from "./LizButton";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const imgSrc = (heroSizzlerImage as any)?.src || (heroSizzlerImage as any);
  const bgSrc = (heroBgImage as any)?.src || (heroBgImage as any);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 bg-background border-b border-border"
    >
      {/* Ambient background glow & luxury texture */}
      <div
        className="absolute inset-0 opacity-15 dark:opacity-25 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${bgSrc})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-background/90 via-background/95 to-background pointer-events-none" />

      <div className="relative z-10 mx-auto grid w-full max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-4 py-2 text-primary backdrop-blur shadow-xs"
          >
            <Flame className="size-3.5 text-gold animate-pulse" aria-hidden="true" />
            <span>Royal Chaska Dubai • Sizzling Grills &amp; Handi Biryani • Al Karama</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="display-xl mt-6 text-foreground"
          >
            Flavours with a Royal Touch.
            <span className="block text-primary">Sizzling Grills &amp; Handi Biryani.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Juicy tandoori sizzlers, aromatic handi dum biryanis, rich Peshawari karahi, and loaded
            paratha rolls — serving late night cravings beside President Hotel, Al Karama.
          </motion.p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
            >
              <LizLink href="/menu" size="lg" className="w-full sm:w-auto">
                Explore Menu
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </LizLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62, ease }}
            >
              <LizLink
                href={restaurant.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto"
              >
                Order on WhatsApp
              </LizLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
            >
              <LizLink
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Get Directions
              </LizLink>
            </motion.div>
          </div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-7"
          >
            {[
              { label: "Location", value: "Beside President Hotel" },
              { label: "Timings", value: "Open till 3:00 AM" },
              { label: "Delivery", value: "WhatsApp Direct" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="eyebrow text-muted-foreground">{item.label}</dt>
                <dd className="mt-1.5 text-sm font-semibold text-foreground sm:text-[0.9375rem]">
                  {item.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease }}
            className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)] sm:rounded-[2.5rem] border-2 border-primary/20"
          >
            <img
              src={imgSrc}
              alt="Sizzling hot Royal Mixed Tandoori Grill Platter with chicken tikka, malai boti, seekh kebab and biryani handi"
              width={1280}
              height={1600}
              fetchPriority="high"
              className="aspect-4/5 w-full object-cover sm:aspect-3/4"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
              aria-hidden="true"
            />
          </motion.div>

          {/* Floating badge 1: Google rating */}
          <motion.div
            initial={{ opacity: 0, x: -28, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="glass-card absolute -left-2 top-8 rounded-2xl px-4 py-3 sm:-left-6 sm:top-14 sm:px-5 sm:py-4 shadow-xl"
          >
            <p className="flex items-center gap-1.5 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              {restaurant.rating.value}
              <Star className="size-4 fill-gold text-gold" aria-hidden="true" />
            </p>
            <p className="mt-0.5 text-[0.6875rem] font-semibold text-muted-foreground">
              Google Rating ({restaurant.rating.count.toLocaleString()}+ reviews)
            </p>
          </motion.div>

          {/* Floating badge 2: Late night open */}
          <motion.div
            initial={{ opacity: 0, x: 28, y: -12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
            className="glass-card absolute -right-2 top-1/3 rounded-2xl px-4 py-3 sm:-right-6 sm:px-5 sm:py-4 shadow-xl"
          >
            <div className="flex items-center gap-1.5 text-gold font-bold text-sm">
              <Clock className="size-4" />
              <span>Late Night Food</span>
            </div>
            <p className="mt-0.5 text-[0.6875rem] font-medium text-muted-foreground">
              Open till 3:00 AM
            </p>
          </motion.div>

          {/* Floating badge 3: Signature Sizzler */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease }}
            className="glass-card absolute -bottom-5 left-6 rounded-2xl px-4 py-3 sm:left-10 sm:px-5 sm:py-4 shadow-xl"
          >
            <div className="flex items-center gap-1.5 font-display text-sm font-bold text-primary sm:text-base">
              <Sparkles className="size-4 text-gold" />
              <span>Live Charcoal Tandoor</span>
            </div>
            <p className="mt-0.5 text-[0.6875rem] font-medium text-muted-foreground">
              Charred on order
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
