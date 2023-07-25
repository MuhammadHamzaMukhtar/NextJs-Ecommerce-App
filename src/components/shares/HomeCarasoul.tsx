"use client";
import { Product } from "@/utils/types";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard";

export const HomeCarasoul = (props: { products: Product[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <ChevronLeft size={24} color="#BC9B22" />,
    nextArrow: <ChevronRight size={24} color="#BC9B22" />,
  };

  return (
    <div className="h-full">
      <Slider {...settings}>
        {props &&
          props.products.map((product) => (
            <div
              className="hover:scale-110 transition-transform duration-300"
              key={product.id}
            >
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                type={product.type}
                slug={product.slug}
                images={product.images}
                category={product.category}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};
