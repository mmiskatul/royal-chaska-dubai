/**
 * Single source of truth for Royal Chaska Dubai.
 * Verified Information:
 * Name: Royal Chaska
 * Address: Shop 97, Sheikh Khalifa Bin Zayed St, Beside President Hotel, Al Karama, Dubai, UAE
 * Phone: +971 56 830 6501
 * Google Maps: https://maps.app.goo.gl/i1ansFFmvXWMU8vm6
 * Cuisine: Indian / Indo-Chinese
 * Price Range: AED 1–50
 * Google Rating: ~4.0/5 based on public listing
 */

export interface SocialLink {
  label: string;
  href: string | null;
}

export const restaurant = {
  name: "Royal Chaska",
  nativeName: "رویال چسکا",
  shortName: "Royal Chaska",
  tagline: "A Royal Taste of India",
  cuisine: "Indian & Indo-Chinese Cuisine",
  description:
    "Authentic Indian and Indo-Chinese flavors served with warmth in the heart of Al Karama, Dubai. Sizzling tandoori kebabs, rich handi biryanis, wok-tossed Hakka noodles, and comforting curries beside President Hotel.",
  address: {
    shop: "Shop 97",
    street: "Sheikh Khalifa Bin Zayed St",
    landmark: "Beside President Hotel",
    area: "Al Karama",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    full: "Shop 97, Sheikh Khalifa Bin Zayed St, Beside President Hotel, Al Karama, Dubai, UAE",
  },
  phone: "+971 56 830 6501",
  phoneHref: "tel:+971568306501",
  whatsapp: "+971 56 830 6501",
  whatsappHref:
    "https://wa.me/971568306501?text=Hello%20Royal%20Chaska%2C%20I%20would%20like%20to%20place%20an%20order.",
  mapsUrl: "https://maps.app.goo.gl/i1ansFFmvXWMU8vm6",
  mapEmbedQuery:
    "Royal Chaska, Shop 97, Sheikh Khalifa Bin Zayed St, beside President Hotel, Al Karama, Dubai",
  orderUrl: "tel:+971568306501",
  orderPlatform: "Phone & WhatsApp",
  priceRange: "AED 1–50",
  services: ["Dine-in", "Takeaway", "Home Delivery"],
  rating: { value: 4.0, max: 5, count: 480, source: "Google Maps" },
  socials: [] as SocialLink[],
} as const;

export const navLinks = [
  { label: "Home", to: "/", hash: "#home" },
  { label: "Our Story", to: "/story", hash: "#story" },
  { label: "Menu", to: "/menu", hash: "#menu" },
  { label: "Specialties", to: "/specialties", hash: "#specialties" },
  { label: "Packaging", to: "/packaging", hash: "#packaging" },
  { label: "Gallery", to: "/gallery", hash: "#gallery" },
  { label: "Contact", to: "/location", hash: "#contact" },
] as const;
