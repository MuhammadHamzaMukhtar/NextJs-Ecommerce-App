"use client";
import React from "react";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import getStripePromise from "@/lib/stripe";
import toast from "react-hot-toast";
import { useAuth, SignInButton } from "@clerk/nextjs";

const Checkout = () => {
  const { userId } = useAuth();
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
  return userId ? (
    <Button className="bg-black mb-14 text-white" onClick={handleCheckout}>
      Proceed to Checkout
    </Button>
  ) : (
    <SignInButton mode="modal" afterSignInUrl={`/cart`}>
      <Button className="bg-black mb-14 text-white">Proceed to Checkout</Button>
    </SignInButton>
  );
};

export default Checkout;
