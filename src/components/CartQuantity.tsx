"use client";
import React, { useState } from "react";
import Quantity from "./Quantity";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/Slice/CartSlice";

const CartQuantity = (props: { productId: number; quantity: number }) => {
  const { productId, quantity } = props;
  const dispatch = useDispatch();
  const [count, setCount] = useState(quantity);
  const descreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(cartActions.decreamentTotalQuantity(productId));
    }
  };
  const increaseCount = () => {
    setCount(count + 1);
    dispatch(cartActions.increamentTotalQuantity(productId));
  };
  return (
    <Quantity
      count={count}
      descreaseCount={descreaseCount}
      increaseCount={increaseCount}
    />
  );
};

export default CartQuantity;
