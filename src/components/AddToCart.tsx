"use client";
import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, } from "@/store/Slice/CartSlice";
import toast from "react-hot-toast";

const AddToCart = (item: { product: Product; quantity: number }) => {
  const dispatch = useDispatch();
  // const products = useSelector((state: any) => state.CartSlice.cartItems);
  const { product, quantity } = item;
  // const existingProduct = (products || []).find(
  //   (i: Product) => i.id === product.id
  // );
  // let productQuantity: number;
  // if (!existingProduct) {
  //   productQuantity = quantity;
  // } else {
  //   productQuantity = quantity + parseInt(existingProduct.quantity);
  // }
  console.log("product", product);
  const addToCart = () => {
    let data = {
      product: product,
      quantity: quantity,
    };
    // const queryData = {
    //   product: product,
    //   productQuantity: productQuantity,
    // };
    // console.log("queryData", queryData);
    toast.success(`${quantity} ${product.name} added to cart`);
    // dispatch(storeCartData(queryData));
    dispatch(cartActions.addToCart(data));
  };
  return (
    <Button className="bg-black mb-14 text-white" onClick={addToCart}>
      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
    </Button>
  );
};

export default AddToCart;
