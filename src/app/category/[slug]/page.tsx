import ProductCard from "@/components/ProductCard";
import React from "react";
import { client } from "../../../../sanity/lib/client";

// export async function generateStaticParams() {
//   const slugs: string[] = ["female", "male", "kids", "products"];

//   return slugs.map((slug) => ({
//     slug: slug,
//   }));
// }

const getProductsByCategory = async (category: string) => {
  if (category === "products") {
    return await client.fetch(`*[_type=="product"]{
      id, name, "slug": slug.current, price, "type": type->title, quantity, images[], "category": category->name, "images": images[].asset->url
    }`);
  }
  return await client.fetch(`*[_type=="product" && category->name=="${category}"]{
    id, name, "slug": slug.current, price, "type": type->title, quantity, images[], "category": category->name, "images": images[].asset->url
  }`);
};

const AllProducts = async ({ params }: { params: { slug: string } }) => {
  const filteredData = await getProductsByCategory(params.slug);

  return (
    <div className="py-10 flex justify-evenly flex-wrap">
      {filteredData.length > 0 ? (
        filteredData.map((product: any) => (
          <div className="py-8" key={1}>
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              type={product.type}
              slug={product.slug}
              images={product.images}
              category={product.category}
            />
          </div>
        ))
      ) : (
        <div className="p-20 border shadow-2xl shadow-black rounded-xl bg-gray-100">
          <p className="text-5xl text-gray-400">No Products Found</p>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
