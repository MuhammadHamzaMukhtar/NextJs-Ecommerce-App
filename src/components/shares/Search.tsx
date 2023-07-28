"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useState } from "react";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

const getProducts = async (slug: string) => {
  return await client.fetch(`*[_type=="product" && slug.current match "${slug}*"]{
      id, name, "slug": slug.current, price, "type": type->title, quantity, "category": category->name, "images": images[].asset->url
    }`);
};

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const handleSearchProducts = async (e: any) => {
    setIsLoading(true);
    const products = await getProducts(e.target.value);
    setData(products);
    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger>Search</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
          <DialogDescription>
            <Input
              onChange={handleSearchProducts}
              className="border-gray-200"
            />
            <div className="border border-gray-200 border-t-0 max-h-48 overflow-auto">
              {isLoading ? (
                <div className="flex items-center space-x-4 p-5">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ) : data.length > 0 ? (
                data.map((product: any) => (
                  <Link href={`/product/${product.slug}`}>
                    <div className="hover:bg-gray-200 cursor-pointer py-2">
                      <div className="grid grid-cols-4 items-center px-5">
                        <Image
                          src={product.images?.[0]}
                          alt={product.name}
                          width={50}
                          height={50}
                          className="rounded-full col-span-1"
                        />
                        <div className="col-span-2 flex flex-col">
                          <span>{product.name}</span>
                          <span>{product.type}</span>
                        </div>
                        <div className="col-span-1 font-medium">
                          ${product.price}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-md p-5">No product found</div>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
