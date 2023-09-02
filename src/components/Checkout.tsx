"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import getStripePromise from "@/lib/stripe";
import toast from "react-hot-toast";
import { useAuth, SignInButton,useUser  } from "@clerk/nextjs";
import { cartActions } from "../store/Slice/CartSlice";

const Checkout = () => {
  const { userId } = useAuth();
  const dispatch = useDispatch();
  const {user}=useUser()
  const products = useSelector(
    (state: RootState) => state.persistedReducer.cartItems
  );
  const shouldCheckout = useSelector(
    (state: RootState) => state.persistedReducer.checkoutAfterLogin
  );

  useEffect(() => {
    if (userId && shouldCheckout && products.length > 0) {
      handleCheckout();
    }
  }, [userId, shouldCheckout, products]);

  const handleCheckout = async () => {
    if (shouldCheckout) {
      dispatch(cartActions.proceedAfterLogin(false));
    }
    toast.loading("Redirecting...");
    const stripe = await getStripePromise();
    const result = await fetch("/api/stripe-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({products: products, userEmail: user?.primaryEmailAddress?.emailAddress
      }),
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
      <Button
        className="bg-black mb-14 text-white"
        onClick={() => dispatch(cartActions.proceedAfterLogin(true))}
      >
        Proceed to Checkout
      </Button>
    </SignInButton>
  );
};

export default Checkout;
