import creatineImage from "../../imports/HomeDesktopWeb/creatine-monohydrate-nova-labs.webp";
import vitalityImage from "../../imports/HomeDesktopWeb/c2ca437d27f4f830ffdede88eec53b2ae6abb28e.webp";
import preWorkoutImage from "../../imports/HomeDesktopWeb/a8bc9982346d4c2fce4fcf9eded71f8615318efb.webp";
import wheyImage from "../../imports/HomeDesktopWeb/whey-isolate-pro-v2.webp";

export type ProductCategory = "protein" | "pre-workout" | "recovery";

export type Product = {
  id: string;
  name: string;
  variant: string;
  price: string;
  priceValue: number;
  rating: string;
  image: string;
  alt: string;
  badge?: string;
  category: ProductCategory;
};

export const PRODUCTS: Product[] = [
  {
    id: "whey-isolate-pro",
    name: "Whey Isolate Pro",
    variant: "Chocolate · 2 lb",
    price: "$34.99",
    priceValue: 34.99,
    rating: "4.8",
    image: wheyImage,
    alt: "Whey Isolate Pro tub against a dark green backdrop.",
    badge: "BESTSELLER",
    category: "protein",
  },
  {
    id: "creatine-monohydrate",
    name: "Creatine Monohydrate",
    variant: "Unflavored · 300g",
    price: "$19.99",
    priceValue: 19.99,
    rating: "4.9",
    image: creatineImage,
    alt: "Creatine Monohydrate jar on a neutral beige background.",
    badge: "BESTSELLER",
    category: "recovery",
  },
  {
    id: "pre-workout-ignite",
    name: "Pre-Workout Ignite",
    variant: "Citrus · 30 srv",
    price: "$29.99",
    priceValue: 29.99,
    rating: "4.7",
    image: preWorkoutImage,
    alt: "Pre-Workout Ignite tub on a bright orange background.",
    category: "pre-workout",
  },
  {
    id: "daily-vitality-pack",
    name: "Daily Vitality Pack",
    variant: "30-day supply",
    price: "$24.99",
    priceValue: 24.99,
    rating: "4.6",
    image: vitalityImage,
    alt: "Daily Vitality Pack supplement bottle on a light background.",
    category: "recovery",
  },
];
