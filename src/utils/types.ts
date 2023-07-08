import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  type: string;
  category: string;
  quantity?: number;
  images: Array<Object>;
};

export type NavItem = {
  id: number;
  name: string;
  link: string;
};

export type FeaturedImage = {
  id: number;
  name: string;
  image: StaticImageData;
};
