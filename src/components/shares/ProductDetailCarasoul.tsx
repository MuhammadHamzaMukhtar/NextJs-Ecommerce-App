"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ProductDetailsCarousel({ images }: any) {
  return (
    <div>
      <div className="relative text-white text-[20px] w-full max-w-[1060px] mx-auto">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          {images.map((img: any, index: any) => (
            <div key={index}>
              <img
                alt="Image"
                src={img}
                width={100}
                height={100}
                className="aspect-auto md:aspect-auto object-contain w-200 h-100"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
