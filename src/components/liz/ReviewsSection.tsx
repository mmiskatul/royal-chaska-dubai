"use client";

import { Star, MessageSquareQuote, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { reviewThemes, reviewSourceNote } from "@/data/reviews";
import { restaurant } from "@/data/restaurant";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { LizLink } from "./LizButton";

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-20 sm:py-28 lg:py-36 bg-background">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Guest Testimonials"
          title={
            <>
              Loved by {restaurant.rating.count.toLocaleString()}+ Diners in{" "}
              <br className="hidden sm:inline" />
              <span className="text-primary">Al Karama &amp; Beyond</span>
            </>
          }
          copy="See what our community says about our steaming hot Kerala kanji sets, fiery seafood, and homely hospitality."
          align="center"
        />

        {/* Rating summary bar */}
        <ScrollReveal delay={0.15} className="mt-12">
          <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-left">
              <div className="flex items-center gap-4">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Star className="size-8 fill-gold text-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-3xl font-extrabold text-foreground">
                      {restaurant.rating.value}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      / {restaurant.rating.max}.0
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-gold text-gold" />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-muted-foreground">
                      ({restaurant.rating.count.toLocaleString()} Google Reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <LizLink
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  View on Google Maps
                  <ArrowUpRight className="size-4" />
                </LizLink>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Review Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviewThemes.map((rev, index) => (
            <ScrollReveal
              key={rev.id}
              delay={0.06 * (index + 1)}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: rev.stars }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.6875rem] font-semibold text-primary">
                    {rev.tag}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {rev.theme}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">"{rev.body}"</p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/60 text-xs">
                <div className="flex items-center gap-1.5 font-medium text-foreground">
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary text-[0.625rem] font-bold text-primary-foreground">
                    {rev.reviewer.charAt(0)}
                  </span>
                  <span>{rev.reviewer}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 font-medium text-[0.6875rem]">
                  <CheckCircle2 className="size-3" />
                  <span>Google Review • {rev.date}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">{reviewSourceNote}</p>
      </div>
    </section>
  );
}
