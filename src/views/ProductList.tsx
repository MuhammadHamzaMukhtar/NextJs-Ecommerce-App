import React from "react";
import ProductCard from "@/components/ProductCard";
import { client } from "../../sanity/lib/client";
import { Product } from "@/utils/types";
import { HomeCarasoul } from "@/components/shares/HomeCarasoul";

export const getProductsData = async () => {
  const products = await client.fetch(`*[_type=="product"]{
    id, name, "slug": slug.current, price, "type": type->title, quantity, images[], "category": category->name, "images": images[].asset->url
  }`);
  return products;
};
const ProductList = async () => {
  const products: Product[] = await getProductsData();
  return (
    <section>
      <h2 className="scroll-m-20 pb-2 text-xl text-center text-blue-700 font-semibold tracking-tight transition-colors first:mt-0">
        PRODUCTS
      </h2>
      <h2 className="scroll-m-20 pb-7 text-3xl text-center font-extrabold tracking-tight transition-colors first:mt-0">
        Check What We Have
      </h2>
      <HomeCarasoul products={products} />
      {/* <div className="flex justify-between">
        {products.slice(0, 3).map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            type={product.type}
            slug={product.slug}
            images={product.images}
            category={product.category}
          />
        ))}
      </div> */}
    </section>
  );
};

export default ProductList;
