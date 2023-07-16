import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import header from "/public/header.webp";
import { FeaturedImages } from "@/utils/mock";

const Hero = () => {
  return (
    <section className="lg:flex lg:mt-20 lg:mb-7 ">
      <div className="flex-1 pr-10">
        <Badge className="bg-blue-100 text-blue-700 text-md lg:mt-16 mt-6 mb-4 lg:mb-10">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:my-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link href={"/category/products"}>
          <Button className="bg-black mb-14 text-white">
            <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
          </Button>
        </Link>
        <div className="flex justify-between">
          {FeaturedImages.map((image) => (
            <Image key={image.id} src={image.image} alt={image.name} />
          ))}
        </div>
      </div>
      <div className="lg:flex-1">
        <div className="bg-[#ffece3] rounded-full p-64 lg:top-[20px] top-[104px] relative"></div>
        <Image
          src={header}
          alt="Header"
          className="absolute lg:top-[90px] top-[472px]"
        />
      </div>
    </section>
  );
};

export default Hero;
