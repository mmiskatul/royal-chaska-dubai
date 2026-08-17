"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, Sparkles, Camera } from "lucide-react";

import {
  gallery,
  galleryCategories,
  type GalleryCategory,
  type GalleryImage,
} from "@/data/gallery";
import { ScrollReveal } from "./ScrollReveal";
import { ImageWithFallback } from "./ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? gallery
      : gallery.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 lg:py-36 bg-[#FCFBF8]">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4B164C]/10 px-3.5 py-1.5 text-xs font-bold text-[#4B164C] border border-[#C9A227]/30">
            <Camera className="size-3.5 text-[#C9A227]" />
            <span>Food &amp; Atmosphere</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D151C] mt-3">
            Royal Chaska Gallery
          </h2>
          <p className="mt-3 text-sm text-[#6B5E6A] leading-relaxed">
            A visual showcase of our signature tandoori sizzlers, biryanis, Indo-Chinese dishes,
            packaging, and warm dining atmosphere.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 no-scrollbar flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full px-5 py-2 text-xs font-bold transition-all ${
                selectedCategory === category
                  ? "bg-[#4B164C] text-[#FDE047] border border-[#C9A227]/40 shadow-sm scale-105"
                  : "bg-white border border-[#E8E0D7] text-[#6B5E6A] hover:text-[#1D151C] hover:border-[#C9A227]/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry-Style Gallery Grid with Gold Frame on Hover */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:auto-rows-[220px]"
        >
          <AnimatePresence>
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className={`group relative overflow-hidden rounded-3xl border border-[#E8E0D7] bg-[#2A0E24] shadow-xs cursor-pointer ${
                  image.span ?? ""
                }`}
                onClick={() => setActiveImage(image)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Dark Overlay & Gold Frame Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E24]/90 via-[#2A0E24]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between p-5 border-2 border-[#C9A227]/60 rounded-3xl m-1 pointer-events-none">
                  <div className="flex justify-end">
                    <div className="flex size-9 items-center justify-center rounded-full bg-[#C9A227] text-[#2A0E24] shadow-md">
                      <Eye className="size-4" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[0.625rem] font-bold uppercase tracking-widest text-[#FDE047]">
                      {image.category}
                    </span>
                    <p className="font-serif text-sm font-bold text-white mt-0.5 line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Dialog Modal */}
      <Dialog open={Boolean(activeImage)} onOpenChange={(open) => !open && setActiveImage(null)}>
        {activeImage && (
          <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-3xl border border-[#C9A227]/40 bg-[#1D091A] text-white">
            <div className="relative aspect-16/10 w-full bg-black">
              <ImageWithFallback
                src={activeImage.src}
                alt={activeImage.alt}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="p-6 bg-gradient-to-t from-[#2A0E24] to-[#1D091A] flex items-center justify-between border-t border-[#C9A227]/20">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FDE047] font-bold">
                  {activeImage.category}
                </span>
                <DialogTitle className="font-serif text-lg font-bold text-white mt-1">
                  {activeImage.alt}
                </DialogTitle>
                <DialogDescription className="text-xs text-[#FAF7F2]/70 mt-0.5">
                  Royal Chaska • Shop 97, Sheikh Khalifa Bin Zayed St, Al Karama, Dubai
                </DialogDescription>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
