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
