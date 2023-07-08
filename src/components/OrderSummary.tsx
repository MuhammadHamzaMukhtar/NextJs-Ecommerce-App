"use client";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import Checkout from "./Checkout";

const OrderSummary = () => {
  const quantity = useSelector(
    (state: RootState) => state.CartSlice.totalQuantity
  );
  const price = useSelector((state: RootState) => state.CartSlice.totalPrice);
  return (
    <div className="space-y-6">
      <div className="flex gap-x-10">
        <p>Quantity:</p> <span>{quantity}</span>
      </div>
      <div className="flex gap-x-10">
        <p>SubTotal: </p> <span>${price}</span>
      </div>
      <Checkout />
    </div>
  );
};

export default OrderSummary;
