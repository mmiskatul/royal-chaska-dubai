"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Check, ArrowRight, Search, Phone, ShoppingBag } from "lucide-react";

import { menu, menuCategories, type MenuCategory, type Diet, type MenuItem } from "@/data/menu";
import { restaurant } from "@/data/restaurant";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { ImageWithFallback } from "./ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("All");
  const [dietFilter, setDietFilter] = useState<"all" | Diet>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDish, setActiveDish] = useState<MenuItem | null>(null);

  const filteredDishes = menu.filter((dish) => {
    const matchesCategory = selectedCategory === "All" || dish.category === selectedCategory;
    const matchesDiet = dietFilter === "all" || dish.diet === dietFilter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesDiet && matchesSearch;
  });

  return (
    <section id="menu" className="relative py-20 sm:py-28 lg:py-36 bg-[#FCFBF8]">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4B164C]/10 px-3.5 py-1.5 text-xs font-bold text-[#4B164C] border border-[#C9A227]/30">
            <Sparkles className="size-3.5 text-[#C9A227]" />
            <span>Digital Menu Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D151C] mt-3">
            Explore Royal Chaska Menu
          </h2>
          <p className="mt-3 text-sm text-[#6B5E6A] leading-relaxed">
            Authentic Indian tandoori grills, dum biryanis, and comforting Indo-Chinese favorites
            prepared fresh daily in Al Karama, Dubai.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="mt-12 space-y-6">
          {/* Diet and Search row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 p-1.5 bg-white border border-[#E8E0D7] rounded-full shadow-xs w-full sm:w-auto overflow-x-auto">
              <button
                type="button"
                onClick={() => setDietFilter("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  dietFilter === "all"
                    ? "bg-[#4B164C] text-[#FAF7F2] shadow-xs"
                    : "text-[#6B5E6A] hover:text-[#1D151C]"
                }`}
              >
                All Dishes
              </button>
              <button
                type="button"
                onClick={() => setDietFilter("veg")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  dietFilter === "veg"
                    ? "bg-emerald-700 text-white shadow-xs"
                    : "text-[#6B5E6A] hover:text-[#1D151C]"
                }`}
              >
                <span className="size-2 rounded-full bg-emerald-400" />
                Pure Veg
              </button>
              <button
                type="button"
                onClick={() => setDietFilter("non-veg")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  dietFilter === "non-veg"
                    ? "bg-rose-700 text-white shadow-xs"
                    : "text-[#6B5E6A] hover:text-[#1D151C]"
                }`}
              >
                <span className="size-2 rounded-full bg-rose-400" />
                Non-Veg
              </button>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-[#6B5E6A]" />
              <input
                type="text"
                placeholder="Search dishes or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-full border border-[#E8E0D7] bg-white text-sm text-[#1D151C] placeholder:text-[#6B5E6A]/70 focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6B5E6A] hover:text-[#1D151C]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Categories Tab Scroll */}
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-2 pt-1">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#4B164C] text-[#FDE047] border border-[#C9A227]/40 shadow-sm"
                    : "bg-white border border-[#E8E0D7] text-[#6B5E6A] hover:border-[#C9A227]/50 hover:text-[#1D151C]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dish Grid */}
        <div className="mt-10">
          {filteredDishes.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-[#E8E0D7] p-12 text-center">
              <p className="font-serif text-lg font-bold text-[#1D151C]">No dishes found</p>
              <p className="mt-1 text-sm text-[#6B5E6A]">
                Try adjusting your search query or switching categories.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredDishes.map((dish, i) => (
                  <motion.div
                    key={dish.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
                    onClick={() => setActiveDish(dish)}
                    className="group cursor-pointer flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E8E0D7] bg-white shadow-xs transition-all duration-300 hover:border-[#C9A227] hover:shadow-xl"
                  >
                    <div>
                      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#2A0E24]">
                        <ImageWithFallback
                          src={dish.image}
                          alt={dish.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span
                            className={`size-2.5 rounded-full border border-white shadow-xs ${
                              dish.diet === "veg" ? "bg-emerald-600" : "bg-rose-600"
                            }`}
                          />
                          <span className="rounded-full bg-[#1D091A]/80 px-2.5 py-0.5 text-[0.6875rem] font-medium text-white backdrop-blur-md">
                            {dish.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="font-serif text-base font-bold text-[#1D151C] group-hover:text-[#4B164C] transition-colors">
                          {dish.name}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-xs text-[#6B5E6A] leading-relaxed">
                          {dish.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex items-center justify-between border-t border-[#F6F1E9] mt-2 pt-3">
                      <span className="text-xs font-semibold text-[#4B164C]">View Details</span>
                      <ArrowRight className="size-3.5 text-[#C9A227] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Order Strip */}
        <ScrollReveal delay={0.2} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2A0E24] via-[#4B164C] to-[#2A0E24] p-8 text-center text-[#FAF7F2] shadow-xl sm:p-12 border border-[#C9A227]/30">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h3 className="font-serif text-2xl font-bold sm:text-3xl">
                Craving Royal Flavours in Dubai?
              </h3>
              <p className="mt-3 text-sm text-[#FAF7F2]/80 sm:text-base">
                Call our team directly or order on WhatsApp for fast dine-in takeaway &amp;
                delivery.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={restaurant.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C9A227] via-[#E0C058] to-[#C9A227] px-6 py-3 text-xs font-extrabold text-[#2A0E24] shadow-md hover:brightness-110 transition-all"
                >
                  <Phone className="size-4" />
                  Call {restaurant.phone}
                </a>
                <a
                  href={restaurant.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/50 bg-[#4B164C] px-6 py-3 text-xs font-bold text-[#FDE047] hover:bg-[#381239] transition-all"
                >
                  <ShoppingBag className="size-4" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Dish Details Dialog Modal */}
      <Dialog open={Boolean(activeDish)} onOpenChange={(open) => !open && setActiveDish(null)}>
        {activeDish && (
          <DialogContent className="max-w-md p-0 overflow-hidden rounded-3xl border border-[#C9A227]/40 bg-white">
            <div className="relative aspect-16/10 w-full bg-[#2A0E24]">
              <ImageWithFallback
                src={activeDish.image}
                alt={activeDish.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <DialogHeader className="text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-[#4B164C] uppercase">
                    {activeDish.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-medium">
                    <span
                      className={`size-2.5 rounded-full ${
                        activeDish.diet === "veg" ? "bg-emerald-600" : "bg-rose-600"
                      }`}
                    />
                    {activeDish.diet === "veg" ? "Vegetarian" : "Non-Vegetarian"}
                  </div>
                </div>
                <DialogTitle className="font-serif text-2xl font-bold mt-1 text-[#1D151C]">
                  {activeDish.name}
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm leading-relaxed text-[#6B5E6A]">
                  {activeDish.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-[#1D151C] uppercase">
                    Ingredients
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeDish.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="inline-flex items-center gap-1 rounded-lg bg-[#F6F1E9] px-2.5 py-1 text-xs font-medium text-[#4B164C]"
                      >
                        <Check className="size-3 text-[#C9A227]" />
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-[#F6F1E9] p-3.5 text-xs text-[#6B5E6A]">
                  <span className="font-semibold text-[#1D151C]">Dietary Note: </span>
                  {activeDish.dietaryInfo}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#E8E0D7]">
                <a
                  href={restaurant.phoneHref}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4B164C] py-3 text-xs font-bold text-[#FAF7F2]"
                >
                  <Phone className="size-4 text-[#FDE047]" />
                  Call to Order
                </a>
                <a
                  href={restaurant.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0C058] py-3 text-xs font-extrabold text-[#2A0E24]"
                >
                  <ShoppingBag className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
