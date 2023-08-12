"use client";
import { RootState } from "@/store/store";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const totalQuantity = useSelector(
    (state: RootState) => state.persistedReducer.totalQuantity
  );
  return (
    <div className="bg-gray-200 p-3 rounded-full relative">
      {totalQuantity > 0 && (
        <div className="bg-red-600 rounded-full flex justify-center items-center absolute top-0 right-1 w-5 h-5">
          <span className="text-white text-sm">{totalQuantity}</span>
        </div>
      )}
      <ShoppingCart />
    </div>
  );
};

export default CartIcon;
