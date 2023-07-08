import { Product } from "@/utils/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = (props: Product) => {
  const { slug, images, name, type, price } = props;
  return (
    <div>
      <Link href={`/product/${slug}`}>
        <Image
          src={images[0] as string}
          height={350}
          width={300}
          alt="Product"
        />
      </Link>
      <span className="font-semibold text-lg">{name}</span>
      <p className="font-semibold text-slate-500 tracking-wide">{type}</p>
      <p className="font-semibold text-lg">${price}</p>
    </div>
  );
};

export default ProductCard;
