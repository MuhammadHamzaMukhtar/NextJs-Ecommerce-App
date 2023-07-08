import { FeaturedImage, NavItem, Product } from "./types";
import p1 from "/public/p1.png";
import p2 from "/public/p2.png";
import p3 from "/public/p3.png";
import p4 from "/public/p10.png";
import p5 from "/public/p4.png";
import p6 from "/public/p5.png";
import p7 from "/public/p6.png";
import p8 from "/public/p7.png";
import p9 from "/public/p8.png";
import p10 from "/public/p9.png";
import p11 from "/public/p11.png";
import f1 from "/public/Featured1.webp";
import f2 from "/public/Featured2.webp";
import f3 from "/public/Featured3.webp";
import f4 from "/public/Featured4.webp";

export const NavItems: NavItem[] = [
  {
    id: 1,
    name: "Female",
    link: "/female",
  },
  {
    id: 2,
    name: "Male",
    link: "/male",
  },
  {
    id: 3,
    name: "Kids",
    link: "/kids",
  },
  {
    id: 4,
    name: "All Products",
    link: "/products",
  },
];

export const FeaturedImages: FeaturedImage[] = [
  {
    id: 1,
    name: "Featured1",
    image: f1,
  },
  {
    id: 2,
    name: "Featured2",
    image: f2,
  },
  {
    id: 3,
    name: "Featured3",
    image: f3,
  },
  {
    id: 4,
    name: "Featured4",
    image: f4,
  },
];

export const Products: Product[] = [
  {
    id: 1,
    name: "Brushed Raglan Sweatshirt",
    slug: "brushed-raglan-sweatshirt",
    price: 195.0,
    category: "female",
    tagline: "Sweater",
    quantity: 1,
    image: p1,
  },
  {
    id: 2,
    name: "Flex Sweatshirt",
    slug: "flex-sweatshirt",
    price: 175.0,
    tagline: "Sweater",
    quantity: 1,
    category: "female",
    image: p2,
  },
  {
    id: 3,
    name: "Flex Sweatpants",
    slug: "flex-sweatpants",
    price: 125.0,
    tagline: "Pants",
    quantity: 1,
    category: "male",
    image: p3,
  },
  {
    id: 4,
    name: "Cameryn Sash Tie Dress",
    slug: "cameryn-sash-tie-dress",
    price: 545.0,
    tagline: "Dress",
    quantity: 1,
    category: "female",
    image: p4,
  },
  {
    id: 5,
    name: "Pink Fleece Sweatpants",
    slug: "pink-fleece-sweatpants",
    tagline: "Pants",
    price: 195.0,
    quantity: 1,
    category: "female",
    image: p5,
  },
  {
    id: 6,
    name: "Lite Sweatpants",
    slug: "lite-sweatpants",
    tagline: "Pants",
    price: 150.0,
    quantity: 1,
    category: "female",
    image: p6,
  },
  {
    id: 7,
    name: "Imperial Alpaca Hoodie",
    slug: "imperial-alpaca-hoodie",
    price: 525.0,
    tagline: "Jackets",
    quantity: 1,
    category: "female",
    image: p7,
  },
  {
    id: 8,
    name: "Flex Push Button Bomber",
    slug: "flex-push-button-bomber",
    tagline: "Jackets",
    price: 225.0,
    quantity: 1,
    category: "male",
    image: p8,
  },
  {
    id: 9,
    name: "Muscle Tank",
    slug: "muscle-tank",
    price: 75.0,
    tagline: "T Shirts",
    quantity: 1,
    category: "female",
    image: p9,
  },
  {
    id: 10,
    name: "Brushed Bomber",
    tagline: "Jackets",
    slug: "brushed-bomber",
    price: 225.0,
    quantity: 1,
    category: "female",
    image: p10,
  },
  {
    id: 11,
    name: "T shirt",
    tagline: "T shirts",
    slug: "t-shirt",
    price: 70.0,
    quantity: 1,
    category: "male",
    image: p11,
  },
];

export const companyItems = [
  "About",
  "Terms of Use",
  "Privacy Policy",
  "How it Works",
  "Contact Us",
];

export const sizes = ["XS", "S", "M", "L", "XL"];

export const supportItems = ["Support Career", "24h Service", "Quick Chat"];

export const contactItems = ["Whatsapp", "Support 24h"];
