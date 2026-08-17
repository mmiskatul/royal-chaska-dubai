import sizzler from "@/assets/hero-royal-sizzler.jpg";
import indochinese from "@/assets/dish-indochinese.jpg";
import chickenCurry from "@/assets/dish-chicken-curry.jpg";
import dosa from "@/assets/dish-dosa.jpg";
import fishFry from "@/assets/dish-fish-fry.jpg";
import biryani from "@/assets/hero-kerala-meal.jpg";
import packagingBag from "@/assets/royal-takeaway-bag.jpg";
import payasam from "@/assets/dish-payasam.jpg";
import interior from "@/assets/interior.jpg";
import spices from "@/assets/texture-spices.jpg";
import chai from "@/assets/atmos-chai.jpg";
import storyTable from "@/assets/story-table.jpg";

export const galleryCategories = [
  "All",
  "Food",
  "Indo-Chinese",
  "Restaurant",
  "Drinks",
  "Atmosphere",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryImage {
  id: string;
  src: any;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  span?: string;
}

export const gallery: GalleryImage[] = [
  {
    id: "g1",
    src: sizzler,
    alt: "Sizzling hot Royal Mixed Tandoori Grill Platter with chicken tikka and seekh kebabs",
    category: "Food",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    id: "g2",
    src: indochinese,
    alt: "Indo-Chinese feast with wok-tossed Hakka noodles, fried rice, and chilli chicken",
    category: "Indo-Chinese",
    span: "sm:col-span-2",
  },
  {
    id: "g3",
    src: interior,
    alt: "Welcoming dining ambiance at Royal Chaska Dubai beside President Hotel",
    category: "Restaurant",
  },
  {
    id: "g4",
    src: packagingBag,
    alt: "Royal Chaska deep royal purple and gold takeaway packaging",
    category: "Atmosphere",
  },
  {
    id: "g5",
    src: biryani,
    alt: "Aromatic Royal Handi Dum Biryani with saffron rice and raita",
    category: "Food",
    span: "sm:row-span-2",
  },
  {
    id: "g6",
    src: chickenCurry,
    alt: "Classic Butter Chicken and rich Mughlai gravies",
    category: "Food",
  },
  {
    id: "g7",
    src: storyTable,
    alt: "Royal dining banquet table spread with tandoori grills and biryanis",
    category: "Atmosphere",
  },
  {
    id: "g8",
    src: dosa,
    alt: "Crispy Chicken Malai Boti Paratha Roll",
    category: "Food",
  },
  {
    id: "g9",
    src: chai,
    alt: "Royal Zafrani Karak Chai brewed with saffron and cardamom",
    category: "Drinks",
  },
  {
    id: "g10",
    src: payasam,
    alt: "Special Kulfi Falooda with rose syrup and pistachios",
    category: "Drinks",
  },
  {
    id: "g11",
    src: spices,
    alt: "Authentic whole Indian spices, saffron and red chillies",
    category: "Atmosphere",
  },
  {
    id: "g12",
    src: fishFry,
    alt: "Tandoori Fish Tikka Sizzler with lemon and herbs",
    category: "Food",
  },
];
