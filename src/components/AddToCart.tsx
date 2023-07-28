"use client";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, storeCartData } from "@/store/Slice/CartSlice";
import toast from "react-hot-toast";

const AddToCart = (item: { product: Product; quantity: number }) => {
  const dispatch = useDispatch();
  const { product, quantity } = item;
  const addToCart = () => {
    let data = {
      product: product,
      quantity: quantity,
    };
    toast.success(`${quantity} ${product.name} added to cart`);
    // dispatch(storeCartData("ok"));
    dispatch(cartActions.addToCart(data));
  };
  return (
    <Button className="bg-black mb-14 text-white" onClick={addToCart}>
      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
    </Button>
  );
};

export default AddToCart;
