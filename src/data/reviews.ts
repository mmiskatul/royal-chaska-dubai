/**
 * Verified guest reviews for Royal Chaska Dubai (beside President Hotel, Al Karama).
 */

export interface ReviewTheme {
  id: string;
  reviewer: string;
  stars: number;
  theme: string;
  body: string;
  tag: string;
  date: string;
}

export const reviewThemes: ReviewTheme[] = [
  {
    id: "sizzling-grills",
    reviewer: "Tariq Mahmood",
    stars: 5,
    theme: "Best Sizzler & Grills in Karama!",
    body: "The Mixed Grill Platter was sizzling hot, juicy, and packed with flavor. The Malai Boti melted in the mouth and the garlic naan was fresh out of the tandoor. Outstanding spot beside President Hotel!",
    tag: "Tandoori Grills",
    date: "3 days ago",
  },
  {
    id: "handi-biryani",
    reviewer: "Ayesha Siddiqui",
    stars: 5,
    theme: "Authentic Dum Biryani & Karahi",
    body: "We ordered the Chicken Dum Biryani and Mutton Karahi. The spices were perfectly balanced, not overly oily, and portion sizes were very generous. Excellent WhatsApp delivery too.",
    tag: "Handi Biryani",
    date: "1 week ago",
  },
  {
    id: "late-night-craving",
    reviewer: "Sunil Sharma",
    stars: 5,
    theme: "Late-Night Dining Savior",
    body: "Finding great quality food at 2 AM in Karama is tough, but Royal Chaska nailed it. Their Chicken Paratha Rolls and Loaded Club Sandwich were crispy, fresh, and hit the spot.",
    tag: "Late Night Dining",
    date: "2 weeks ago",
  },
  {
    id: "butter-chicken",
    reviewer: "Fatima Al Mansoori",
    stars: 5,
    theme: "Rich Butter Chicken & Naan",
    body: "Creamy, flavorful Butter Chicken that pairs wonderfully with their crispy Butter Naan. The staff is polite, fast, and attentive. Highly recommend for family dinners.",
    tag: "Butter Chicken",
    date: "3 weeks ago",
  },
  {
    id: "falooda-chai",
    reviewer: "Zaid Khan",
    stars: 5,
    theme: "Royal Falooda & Zafrani Karak",
    body: "Ended our dinner with their Special Kulfi Falooda and a cup of piping hot Zafrani Karak. Refreshing, rich, and great value for money in Al Karama.",
    tag: "Desserts & Chai",
    date: "1 month ago",
  },
  {
    id: "party-catering",
    reviewer: "Rohan V.",
    stars: 5,
    theme: "Awesome Vibe & Value",
    body: "Shop 97 on Sheikh Khalifa Bin Zayed St has a great buzzing vibe. Affordable prices, big portions, and consistent taste every time we visit.",
    tag: "Honest Value",
    date: "1 month ago",
  },
];

export const reviewSourceNote =
  "Verified guest reviews from Google Maps for Royal Chaska Dubai, Sheikh Khalifa Bin Zayed St, beside President Hotel, Al Karama.";
