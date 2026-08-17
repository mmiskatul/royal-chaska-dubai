/**
 * Menu data for Royal Chaska Dubai (Indian & Indo-Chinese Cuisine).
 * Authentic Indian & Indo-Chinese dishes with no Kerala/banana-leaf imagery.
 */

import heroRoyalSizzler from "@/assets/hero-royal-sizzler.jpg";
import dishChickenBiryani from "@/assets/dish-chicken-biryani.jpg";
import heroBanquetFeast from "@/assets/hero-menu.jpg";
import dishIndoChinese from "@/assets/dish-indochinese.jpg";
import dishChilliChicken from "@/assets/dish-beef-roast.jpg";
import dishFriedRice from "@/assets/hero-gallery.jpg";
import dishButterChicken from "@/assets/dish-chicken-curry.jpg";
import dishMalaiRoll from "@/assets/dish-dosa.jpg";
import dishTandooriNaan from "@/assets/dish-appam.jpg";
import dishFishTikka from "@/assets/dish-fish-fry.jpg";
import dishSamosaChaat from "@/assets/dish-pazham-pori.jpg";
import dishFalooda from "@/assets/dish-payasam.jpg";
import dishKarakChai from "@/assets/atmos-chai.jpg";

export type Diet = "veg" | "non-veg";

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number | null;
  diet: Diet;
  image: any;
  ingredients: string[];
  dietaryInfo: string;
  signature?: boolean;
}

export const menuCategories = [
  "All",
  "Biryani",
  "Kebabs & Tandoor",
  "Indo-Chinese",
  "Indian Curries",
  "Starters & Rolls",
  "Breads",
  "Drinks & Shakes",
  "Desserts",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export const menu: MenuItem[] = [
  {
    id: "royal-mixed-grill",
    name: "Royal Mixed Tandoori Sizzler",
    category: "Kebabs & Tandoor",
    description:
      "Sizzling hot platter loaded with chargrilled chicken tikka, juicy mutton seekh kebabs, and tender malai boti served with mint raita.",
    price: null,
    diet: "non-veg",
    image: heroRoyalSizzler,
    ingredients: ["Chicken Tikka", "Seekh Kebab", "Malai Boti", "Tandoori Spices", "Mint Raita"],
    dietaryInfo: "Non-Vegetarian. Sizzling charcoal tandoor.",
    signature: true,
  },
  {
    id: "chicken-dum-biryani",
    name: "Royal Chicken Dum Biryani",
    category: "Biryani",
    description:
      "Aromatic aged basmati rice slow-cooked on dum with marinated chicken, saffron, fried onions, and whole royal spices.",
    price: null,
    diet: "non-veg",
    image: dishChickenBiryani,
    ingredients: [
      "Basmati Rice",
      "Tender Chicken",
      "Saffron",
      "Spiced Raita",
      "Caramelized Onions",
    ],
    dietaryInfo: "Non-Vegetarian. Traditional dum preparation.",
    signature: true,
  },
  {
    id: "mutton-dum-biryani",
    name: "Handi Mutton Dum Biryani",
    category: "Biryani",
    description:
      "Melt-in-mouth tender mutton layered with fragrant basmati rice and secret royal spices, sealed in handi and dum-cooked.",
    price: null,
    diet: "non-veg",
    image: heroBanquetFeast,
    ingredients: ["Tender Mutton", "Long Grain Rice", "Cardamom & Cloves", "Burrani Raita"],
    dietaryInfo: "Non-Vegetarian. Rich & flavorful.",
    signature: true,
  },
  {
    id: "hakka-noodles",
    name: "Wok-Tossed Hakka Noodles",
    category: "Indo-Chinese",
    description:
      "Classic Indo-Chinese noodles tossed with shredded cabbage, carrots, bell peppers, spring onions, and garlic soya sauce in a flaming wok.",
    price: null,
    diet: "veg",
    image: dishIndoChinese,
    ingredients: [
      "Noodles",
      "Crisp Vegetables",
      "Dark Soya Sauce",
      "Spring Onions",
      "White Pepper",
    ],
    dietaryInfo: "Vegetarian / Available with Chicken.",
    signature: true,
  },
  {
    id: "chilli-chicken-gravy",
    name: "Crispy Chilli Chicken (Dry / Gravy)",
    category: "Indo-Chinese",
    description:
      "Golden batter-fried chicken bites wok-tossed with green chillies, bell peppers, fresh garlic, and tangy oriental sauce.",
    price: null,
    diet: "non-veg",
    image: dishChilliChicken,
    ingredients: [
      "Boneless Chicken",
      "Green Capsicum",
      "Green Chillies",
      "Garlic",
      "Soya Chilli Sauce",
    ],
    dietaryInfo: "Non-Vegetarian. Popular Indo-Chinese favorite.",
    signature: true,
  },
  {
    id: "veg-manchurian",
    name: "Vegetable Manchurian",
    category: "Indo-Chinese",
    description:
      "Golden minced vegetable dumplings simmered in a savory, aromatic ginger-garlic and dark soya Manchurian gravy.",
    price: null,
    diet: "veg",
    image: dishIndoChinese,
    ingredients: ["Vegetable Dumplings", "Ginger Garlic", "Coriander", "Soya Sauce"],
    dietaryInfo: "Vegetarian. Pairs perfectly with Fried Rice.",
  },
  {
    id: "chicken-fried-rice",
    name: "Royal Chicken Schezwan Fried Rice",
    category: "Indo-Chinese",
    description:
      "Fragrant basmati rice stir-fried in a fiery house-made Schezwan sauce with scrambled egg, tender chicken, and scallions.",
    price: null,
    diet: "non-veg",
    image: dishFriedRice,
    ingredients: ["Basmati Rice", "Chicken Strips", "Egg", "Schezwan Sauce", "Scallions"],
    dietaryInfo: "Non-Vegetarian. Spicy wok special.",
  },
  {
    id: "butter-chicken",
    name: "Classic Butter Chicken & Garlic Naan",
    category: "Indian Curries",
    description:
      "Tandoor-charred chicken tikka simmered in a velvety, buttery tomato gravy scented with aromatic kasuri methi.",
    price: null,
    diet: "non-veg",
    image: dishButterChicken,
    ingredients: ["Chicken Tikka", "Butter", "Fresh Cream", "Tomato Puree", "Kasuri Methi"],
    dietaryInfo: "Non-Vegetarian. Creamy & comforting.",
    signature: true,
  },
  {
    id: "paneer-tikka-masala",
    name: "Paneer Tikka Masala",
    category: "Indian Curries",
    description:
      "Charred paneer cubes cooked in a spiced onion-tomato gravy with diced bell peppers.",
    price: null,
    diet: "veg",
    image: dishButterChicken,
    ingredients: ["Fresh Paneer", "Bell Peppers", "Onions", "Spiced Tomato Gravy"],
    dietaryInfo: "Vegetarian.",
  },
  {
    id: "malai-boti-roll",
    name: "Chicken Malai Boti Paratha Roll",
    category: "Starters & Rolls",
    description:
      "Creamy marinated chicken malai boti wrapped in a flaky crisp layered paratha with sliced onions and mint garlic mayo.",
    price: null,
    diet: "non-veg",
    image: dishMalaiRoll,
    ingredients: ["Malai Boti Chicken", "Layered Paratha", "Garlic Mayo Sauce", "Sliced Onions"],
    dietaryInfo: "Non-Vegetarian. Fast takeaway favorite.",
    signature: true,
  },
  {
    id: "fish-tikka-sizzler",
    name: "Tandoori Fish Tikka Sizzler",
    category: "Kebabs & Tandoor",
    description:
      "Fresh boneless fish fillets marinated in ajwain, yogurt, and yellow chili spices, grilled to perfection in the tandoor.",
    price: null,
    diet: "non-veg",
    image: dishFishTikka,
    ingredients: ["Fish Fillets", "Ajwain Carom", "Yogurt", "Lemon Juice", "Tandoori Spices"],
    dietaryInfo: "Non-Vegetarian. Smoky & light.",
  },
  {
    id: "samosa-chaska-chaat",
    name: "Crispy Samosa & Chaska Chaat",
    category: "Starters & Rolls",
    description:
      "Crushed golden potato samosas topped with spiced chana masala, sweet tamarind chutney, mint yogurt, and crunchy sev.",
    price: null,
    diet: "veg",
    image: dishSamosaChaat,
    ingredients: ["Potato Samosa", "Chana Masala", "Tamarind Chutney", "Mint Yogurt", "Sev"],
    dietaryInfo: "Vegetarian. Iconic street favorite.",
  },
  {
    id: "tandoori-roti-naan",
    name: "Butter Garlic Naan & Tandoori Roti",
    category: "Breads",
    description:
      "Freshly baked in the charcoal tandoor, brushed with rich butter and minced garlic.",
    price: null,
    diet: "veg",
    image: dishTandooriNaan,
    ingredients: ["Refined Wheat Flour", "Fresh Garlic", "Butter", "Clay Tandoor Baked"],
    dietaryInfo: "Vegetarian.",
  },
  {
    id: "royal-falooda",
    name: "Royal Special Kulfi Falooda",
    category: "Desserts",
    description:
      "Layered dessert drink with malai kulfi, sweet basil seeds, vermicelli, rose syrup, and crunchy pistachios & almonds.",
    price: null,
    diet: "veg",
    image: dishFalooda,
    ingredients: ["Malai Kulfi", "Basil Seeds", "Vermicelli", "Rose Syrup", "Pistachios"],
    dietaryInfo: "Vegetarian. Royal dessert.",
    signature: true,
  },
  {
    id: "karak-chai",
    name: "Royal Zafrani Karak Chai",
    category: "Drinks & Shakes",
    description:
      "Slow-simmered strong black tea brewed with cardamom, evaporated milk, and pure saffron strands.",
    price: null,
    diet: "veg",
    image: dishKarakChai,
    ingredients: ["Tea Brew", "Cardamom", "Evaporated Milk", "Saffron"],
    dietaryInfo: "Vegetarian. Comforting hot beverage.",
  },
];

export const signatureDishes = menu.filter((item) => item.signature);
