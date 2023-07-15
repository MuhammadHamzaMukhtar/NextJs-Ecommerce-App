import { FeaturedImage, NavItem } from "./types";
import f1 from "/public/Featured1.webp";
import f2 from "/public/Featured2.webp";
import f3 from "/public/Featured3.webp";
import f4 from "/public/Featured4.webp";

export const NavItems: NavItem[] = [
  {
    id: 1,
    name: "Female",
    link: "/category/female",
  },
  {
    id: 2,
    name: "Male",
    link: "/category/male",
  },
  {
    id: 3,
    name: "Kids",
    link: "/category/kids",
  },
  {
    id: 4,
    name: "All Products",
    link: "/category/products",
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
