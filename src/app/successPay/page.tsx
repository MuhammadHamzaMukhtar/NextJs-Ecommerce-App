"use client";
import { Button } from "@/components/ui/button";
import { cartActions } from "@/store/Slice/CartSlice";
import { LucideShoppingBag } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartActions.resetCart());
  }, []);

  return (
    <div className="mt-10 w-full h-[520px] rounded-xl bg-gray-200 flex flex-col justify-center items-center gap-y-5">
      <LucideShoppingBag size={80} color="green" />
      <div className="text-center space-y-10">
        <h1 className="font-bold text-5xl">Thank you for your order!</h1>
        <p>Check your email inbox for the receipt</p>
      </div>
      <p>
        If you have any questions, please email{" "}
        <span className="text-red-500">dinemarket@example.com</span>
      </p>
      <Link href={"/category/products"}>
        <Button className="bg-black mt-10 rounded-xl text-white px-20 text-xl">
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
};

export default page;
