import AddToCart from "@/components/AddToCart";
import AddToCartAndQuantity from "@/components/AddToCartAndQuantity";
import Quantity from "@/components/Quantity";
import { Products, sizes } from "@/utils/mock";
import Image from "next/image";
import React from "react";
import { client } from "../../../../sanity/lib/client";
import { Product } from "@/utils/types";

const getProductDetail = async (slug: string) => {
  return await client.fetch(`*[_type=="product" && slug.current=="${slug}"]{
    id, name, "slug": slug.current, price, "type": type->title, quantity, "category": category->name, "images": images[].asset->url
  }`);
};

const AllProducts = async ({ params }: { params: { product: string } }) => {
  const filteredData = await getProductDetail(params.product);
  return (
    <div className="py-10 mt-16">
      {filteredData &&
        filteredData.map((item: Product) => (
          <div className="flex gap-x-5">
            <div>
              <Image
                src={item.images[0] as string}
                alt={item.name}
                width={400}
                height={400}
              />
            </div>
            <div className="mt-7">
              <h2 className="text-2xl">{item.name}</h2>
              <p className="font-semibold text-slate-500 tracking-wide">
                {item.type}
              </p>
              <h3 className="text-sm font-semibold mt-12 uppercase">
                Select Size
              </h3>
              <div className="flex gap-x-7 mt-3">
                {sizes.map((size) => (
                  <span className="font-semibold text-gray-500 text-[14px] w-8 h-8 cursor-pointer rounded-full border flex justify-center items-center hover:shadow-lg">
                    {size}
                  </span>
                ))}
              </div>
              <AddToCartAndQuantity product={item} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllProducts;
