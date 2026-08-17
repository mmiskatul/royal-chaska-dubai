import type { Metadata } from "next";
import { ArrowUpRight, Sparkles, UtensilsCrossed, Phone } from "lucide-react";

import menuHeroImage from "@/assets/hero-menu.jpg";
import { restaurant } from "@/data/restaurant";
import { Navbar } from "@/components/liz/Navbar";
import { Footer } from "@/components/liz/Footer";
import { PageHeader } from "@/components/liz/PageHeader";
import { MenuSection } from "@/components/liz/MenuSection";
import { LizLink } from "@/components/liz/LizButton";
import { ScrollReveal } from "@/components/liz/ScrollReveal";

export const metadata: Metadata = {
  title: "Royal Menu | Tandoori Grills, Handi Biryani & Desi Curries",
  description:
    "Explore the royal menu of Royal Chaska Dubai in Al Karama. Sizzling mixed grills, handi chicken and mutton biryani, Peshawari karahi, butter chicken, paratha rolls, and falooda.",
};

const featuredCombos = [
  {
    title: "Royal Mixed Sizzler Feast",
    badge: "Bestseller",
    description:
      "A sizzling platter of tender Chicken Tikka, Malai Boti, Seekh Kebabs, and tandoori chops served with hot butter naan and mint raita.",
    highlight: "Chef's Signature Sizzler",
  },
  {
    title: "Handi Dum Biryani Combo",
    badge: "Most Loved",
    description:
      "Aromatic chicken or mutton biryani slow-cooked on dum with saffron, served with spicy mirchi ka salan, spiced raita, and dessert.",
    highlight: "Slow Dum Cooked",
  },
  {
    title: "Peshawari Karahi & Naan Set",
    badge: "Wok Special",
    description:
      "Fresh mutton or chicken simmered with ripe tomatoes, green chillies, and ginger juliennes, served with 2 hot garlic butter naans.",
    highlight: "Authentic Wok Flavour",
  },
  {
    title: "Late-Night Chaska Roll Box",
    badge: "Late Night Fav",
    description:
      "Two crispy layered Chicken Malai Boti Paratha Rolls served with seasoned french fries and chilled beverage of choice.",
    highlight: "Perfect for Midnight Cravings",
  },
];

export default function MenuPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Dedicated Page Hero */}
        <PageHeader
          eyebrow="Tandoori Grills &amp; Royal Handi"
          title={
            <>
              Royal Desi Menu. <br />
              <span className="text-gold">Sizzling Grills &amp; Late Night Bites.</span>
            </>
          }
          description="Hand-crafted royal recipes prepared with fragrant basmati, live charcoal ovens, rich gravies, and unbeatable late-night comfort beside President Hotel."
          imageSrc={menuHeroImage}
          imageAlt="Royal Mughlai banquet feast with biryani handi, tandoori grills and curries"
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Menu" }]}
        >
          <LizLink
            href={restaurant.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="gold"
            size="md"
          >
            Order on WhatsApp
            <ArrowUpRight className="size-4" />
          </LizLink>
          <LizLink href={restaurant.phoneHref} variant="ghostOnDark" size="md">
            <Phone className="size-4" />
            Takeaway Hotline ({restaurant.phone})
          </LizLink>
        </PageHeader>

        {/* Featured Combos Showcase */}
        <section className="py-16 sm:py-20 bg-card border-b border-border">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow text-primary">Signature Combos</p>
                <h2 className="display-md mt-2 text-foreground">Royal Pairings Loved in Dubai</h2>
              </div>
              <p className="text-xs text-muted-foreground max-w-sm">
                Authentic Mughlai &amp; Desi street food pairings crafted fresh daily at Royal
                Chaska Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredCombos.map((combo, i) => (
                <ScrollReveal
                  key={combo.title}
                  delay={i * 0.08}
                  className="flex flex-col justify-between rounded-3xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-2.5 py-0.5 text-[0.6875rem] font-bold text-primary-deep">
                        <Sparkles className="size-3" />
                        {combo.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-foreground mt-4">
                      {combo.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {combo.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary">{combo.highlight}</span>
                    <UtensilsCrossed className="size-4 text-muted-foreground/60" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Full Interactive Menu Section */}
        <MenuSection />

        {/* Catering & Bulk Orders Banner */}
        <section className="py-16 sm:py-20 bg-background border-t border-border">
          <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8">
            <div className="rounded-3xl border border-primary/20 bg-linear-to-br from-primary/5 via-card to-background p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <span className="eyebrow text-primary">Party &amp; Event Catering</span>
                <h3 className="font-display text-2xl font-bold sm:text-3xl mt-2 text-foreground">
                  Royal Biryani &amp; BBQ Catering in Dubai
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Planning a birthday party, family get-together, or corporate gathering? We cater
                  fresh live tandoori grills, steaming dum biryani handis, and custom Mughlai
                  buffets anywhere in Dubai.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <LizLink
                  href={restaurant.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  <Phone className="size-4" />
                  WhatsApp Catering ({restaurant.phone})
                </LizLink>
                <LizLink
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  Visit Restaurant
                </LizLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
