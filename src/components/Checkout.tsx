"use client";
import React from "react";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import getStripePromise from "@/lib/stripe";
import toast from "react-hot-toast";

const Checkout = () => {
  const products = useSelector((state: RootState) => state.CartSlice.cartItems);
  const handleCheckout = async () => {
    toast.loading("Redirecting...");
    const stripe = await getStripePromise();
    const result = await fetch("/api/stripe-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(products),
      cache: "no-cache",
    });
    const response = await result.json();
    if (response.session) {
      stripe?.redirectToCheckout({ sessionId: response.session.id });
    }
  };
  return (
    <Button className="bg-black mb-14 text-white" onClick={handleCheckout}>
      Proceed to Checkout
    </Button>
  );
};

export default Checkout;
