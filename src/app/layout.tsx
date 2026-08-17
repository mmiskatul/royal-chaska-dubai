import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles.css";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Royal Chaska | Indian & Indo-Chinese Restaurant in Al Karama, Dubai",
    template: "%s | Royal Chaska Dubai",
  },
  description:
    "Discover Royal Chaska in Al Karama, Dubai — serving Indian and Indo-Chinese favorites with a royal touch. Visit us at Shop 97, Sheikh Khalifa Bin Zayed St, beside President Hotel.",
  keywords: [
    "Royal Chaska",
    "Royal Chaska Dubai",
    "Indian Restaurant Karama",
    "Indo-Chinese Restaurant Dubai",
    "Tandoori Sizzlers Karama",
    "Biryani Karama Dubai",
    "Hakka Noodles Dubai",
    "President Hotel Karama Restaurants",
  ],
  authors: [{ name: "Royal Chaska" }],
  openGraph: {
    title: "Royal Chaska | Indian & Indo-Chinese Restaurant in Al Karama, Dubai",
    description:
      "Authentic Indian and Indo-Chinese flavors served with warmth in the heart of Al Karama, Dubai. Sizzling grills, handi biryani, and wok favorites.",
    url: "https://royalchaska.ae",
    siteName: "Royal Chaska",
    locale: "en_AE",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#4B164C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Royal Chaska",
  image: "https://royalchaska.ae/hero-royal-sizzler.jpg",
  telephone: "+971568306501",
  url: "https://royalchaska.ae",
  servesCuisine: ["Indian", "Indo-Chinese"],
  priceRange: "AED 1–50",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop 97, Sheikh Khalifa Bin Zayed St, Beside President Hotel",
    addressLocality: "Al Karama",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2474,
    longitude: 55.3015,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "03:00",
    },
  ],
  hasMap: "https://maps.app.goo.gl/i1ansFFmvXWMU8vm6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${sansFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#FCFBF8] font-sans text-[#1D151C] antialiased selection:bg-[#4B164C] selection:text-[#FDE047]"
      >
        {children}
      </body>
    </html>
  );
}
