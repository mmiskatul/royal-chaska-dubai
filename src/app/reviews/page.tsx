"use client";

import { useState } from "react";
import {
  Star,
  MessageSquareQuote,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  ShoppingBag,
} from "lucide-react";

import reviewsHeroImage from "@/assets/hero-reviews.jpg";
import { restaurant } from "@/data/restaurant";
import { reviewThemes, reviewSourceNote } from "@/data/reviews";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { ContactCTASection } from "@/components/royal/ContactCTASection";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

const sentimentTags = [
  "All",
  "Tandoori Grills",
  "Handi Biryani",
  "Late Night Dining",
  "Butter Chicken",
  "Desserts & Chai",
  "Honest Value",
];

export default function ReviewsPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const filteredReviews =
    selectedTag === "All" ? reviewThemes : reviewThemes.filter((r) => r.tag === selectedTag);

  return (
    <div className="relative min-h-screen bg-[#FCFBF8] text-[#1D151C]">
      <Navbar />

      <main>
        {/* Page Hero */}
        <PageHeader
          eyebrow="Guest Impressions"
          title={
            <>
              Rated {restaurant.rating.value} Stars on <br />
              <span className="text-[#FDE047]">Google in Al Karama</span>
            </>
          }
          description="Honest feedback from guests enjoying Indian and Indo-Chinese favorites beside President Hotel on Sheikh Khalifa Bin Zayed Street."
          imageSrc={reviewsHeroImage}
          imageAlt="Diners enjoying royal tandoori sizzlers and biryani"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Reviews" }]}
        >
          <a
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E0C058] to-[#C9A227] px-6 py-3.5 text-xs font-extrabold text-[#2A0E24] shadow-md hover:brightness-110 transition-all"
          >
            <span>View Google Listing</span>
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            Explore Menu
          </a>
        </PageHeader>

        {/* Rating Overview */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#E8E0D7]">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="max-w-3xl mx-auto rounded-3xl border border-[#E8E0D7] bg-[#FCFBF8] p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex size-20 items-center justify-center rounded-2xl bg-[#4B164C] text-[#FDE047] font-serif text-3xl font-bold shadow-md">
                  {restaurant.rating.value}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-[#C9A227] text-[#C9A227]" />
                    ))}
                    <Star className="size-4 text-[#C9A227]" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1D151C] mt-1">
                    Google Business Rating
                  </h3>
                  <p className="text-xs text-[#6B5E6A]">
                    Based on public Google Maps listing for Royal Chaska, Al Karama.
                  </p>
                </div>
              </div>

              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#4B164C] px-5 py-2.5 text-xs font-bold text-[#4B164C] hover:bg-[#4B164C] hover:text-white transition-all"
              >
                <span>Google Maps Profile</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Filterable Review Cards Section */}
        <section className="py-20 sm:py-28 bg-[#FCFBF8]">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#4B164C]/10 px-3.5 py-1.5 text-xs font-bold text-[#4B164C] border border-[#C9A227]/30">
                <MessageSquareQuote className="size-3.5 text-[#C9A227]" />
                <span>Guest Sentiments</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1D151C] mt-3">
                What Diners Appreciate
              </h2>
            </div>

            {/* Tags Scroll */}
            <div className="no-scrollbar flex items-center justify-center gap-2 overflow-x-auto pb-4">
              {sentimentTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`shrink-0 rounded-full px-5 py-2 text-xs font-bold transition-all ${
                    selectedTag === tag
                      ? "bg-[#4B164C] text-[#FDE047] shadow-sm scale-105"
                      : "bg-white border border-[#E8E0D7] text-[#6B5E6A] hover:text-[#1D151C]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Review Cards */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredReviews.map((rev, idx) => (
                <ScrollReveal
                  key={rev.id}
                  delay={idx * 0.08}
                  className="rounded-3xl border border-[#E8E0D7] bg-white p-6 shadow-xs flex flex-col justify-between hover:border-[#C9A227] hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: rev.stars }).map((_, i) => (
                          <Star key={i} className="size-3.5 fill-[#C9A227] text-[#C9A227]" />
                        ))}
                      </div>
                      <span className="rounded-full bg-[#4B164C]/10 px-2.5 py-0.5 text-[0.6875rem] font-bold text-[#4B164C]">
                        {rev.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-base font-bold text-[#1D151C]">
                      {rev.theme}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#6B5E6A]">
                      &quot;{rev.body}&quot;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E8E0D7] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-semibold text-[#1D151C]">
                      <span className="flex size-6 items-center justify-center rounded-full bg-[#4B164C] text-[0.625rem] font-bold text-white">
                        {rev.reviewer.charAt(0)}
                      </span>
                      <span>{rev.reviewer}</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-700 font-medium text-[0.6875rem]">
                      <CheckCircle2 className="size-3.5" />
                      <span>{rev.date}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <p className="mt-10 text-center text-xs text-[#6B5E6A]">{reviewSourceNote}</p>
          </div>
        </section>

        {/* Final CTA */}
        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
}
