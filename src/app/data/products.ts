import creatineImage from "../../imports/HomeDesktopWeb/creatine-monohydrate-nova-labs.webp";
import vitalityImage from "../../imports/HomeDesktopWeb/c2ca437d27f4f830ffdede88eec53b2ae6abb28e.webp";
import preWorkoutImage from "../../imports/HomeDesktopWeb/a8bc9982346d4c2fce4fcf9eded71f8615318efb.webp";
import wheyImage from "../../imports/HomeDesktopWeb/whey-isolate-pro-v2.webp";
import plantProteinImage from "../../imports/HomeDesktopWeb/plant-protein-nova-labs.webp";
import caseinImage from "../../imports/HomeDesktopWeb/casein-night-protein-nova-labs.webp";
import preWorkoutFocusImage from "../../imports/HomeDesktopWeb/pre-workout-focus-nova-labs.webp";
import pumpImage from "../../imports/HomeDesktopWeb/pump-stim-free-nova-labs.webp";
import bcaaImage from "../../imports/HomeDesktopWeb/bcaa-recovery-blend-nova-labs.webp";
import electrolyteImage from "../../imports/HomeDesktopWeb/electrolyte-hydration-mix-nova-labs.webp";

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
  {
    id: "plant-protein",
    name: "Plant Protein",
    variant: "Vanilla · 2 lb",
    price: "$32.99",
    priceValue: 32.99,
    rating: "4.6",
    image: plantProteinImage,
    alt: "Plant Protein tub on a sage-green background.",
    category: "protein",
  },
  {
    id: "casein-night-protein",
    name: "Casein Night Protein",
    variant: "Slow-Release · Vanilla",
    price: "$36.99",
    priceValue: 36.99,
    rating: "4.7",
    image: caseinImage,
    alt: "Casein Night Protein tub on a deep plum background.",
    category: "protein",
  },
  {
    id: "pre-workout-focus",
    name: "Pre-Workout Focus",
    variant: "Blue Raspberry · 30 srv",
    price: "$31.99",
    priceValue: 31.99,
    rating: "4.6",
    image: preWorkoutFocusImage,
    alt: "Pre-Workout Focus tub on a teal background.",
    category: "pre-workout",
  },
  {
    id: "pump-stim-free",
    name: "Pump",
    variant: "Stim-Free · Watermelon",
    price: "$27.99",
    priceValue: 27.99,
    rating: "4.5",
    image: pumpImage,
    alt: "Pump stim-free pre-workout tub on a coral background.",
    category: "pre-workout",
  },
  {
    id: "bcaa-recovery-blend",
    name: "BCAA Recovery Blend",
    variant: "Watermelon · 30 srv",
    price: "$26.99",
    priceValue: 26.99,
    rating: "4.7",
    image: bcaaImage,
    alt: "BCAA Recovery Blend tub with a scoop of pink powder on a blush-pink background.",
    category: "recovery",
  },
  {
    id: "electrolyte-hydration-mix",
    name: "Electrolyte Hydration Mix",
    variant: "Citrus · 30 srv",
    price: "$22.99",
    priceValue: 22.99,
    rating: "4.8",
    image: electrolyteImage,
    alt: "Electrolyte Hydration Mix tub on a sky-blue background with citrus slices.",
    category: "recovery",
  },
];
