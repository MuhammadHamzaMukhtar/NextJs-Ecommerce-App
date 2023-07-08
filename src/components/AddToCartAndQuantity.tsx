"use client";
import { Product } from "@/utils/types";
import React, { useState } from "react";
import Quantity from "./Quantity";
import AddToCart from "./AddToCart";

const AddToCartAndQuantity = (props: { product: Product }) => {
  const { product } = props;
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const descreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="flex gap-x-8 mt-12">
        <h3 className="text-lg font-semibold">Quantity:</h3>
        <Quantity
          count={count}
          descreaseCount={descreaseCount}
          increaseCount={increaseCount}
        />
      </div>
      <div className="flex gap-x-8 mt-12">
        <AddToCart product={product} quantity={count} />
        <h3 className="text-2xl pt-3 font-semibold">${product.price}</h3>
      </div>
    </>
  );
};

export default AddToCartAndQuantity;
