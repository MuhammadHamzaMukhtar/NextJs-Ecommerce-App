"use client";
import CartQuantity from "@/components/CartQuantity";
import OrderSummary from "@/components/OrderSummary";
import { cartActions } from "@/store/Slice/CartSlice";
import { RootState } from "@/store/store";
import { ShoppingBagIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.CartSlice.cartItems);
  const totalQuantity = useSelector(
    (state: RootState) => state.CartSlice.totalQuantity
  );
  const handleRemoveItem = (id: number) => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <div className="mt-20">
      {totalQuantity > 0 ? (
        <>
          <h2 className="scroll-m-20 pb-7 text-2xl font-bold tracking-tight transition-colors first:mt-0">
            Shopping Cart
          </h2>
          <div className="flex justify-between items-center">
            <div>
              {items.map((item) => (
                <div className="flex items-center gap-x-16 mb-5" key={item.id}>
                  <div>
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h2 className="text-lg">{item.name}</h2>
                      <div
                        onClick={() => handleRemoveItem(item.id)}
                        className="cursor-pointer"
                      >
                        <Trash2Icon />
                      </div>
                    </div>
                    <p className="font-semibold text-slate-500 tracking-wide">
                      {item.tagline}
                    </p>
                    <h2 className="text-lg font-semibold">
                      Delivery Estimation
                    </h2>
                    <h2 className="text-lg font-semibold tracking-wide text-yellow-600">
                      5 Working Days
                    </h2>
                    <div className="flex justify-between">
                      <h3 className="text-lg pt-3 font-semibold">
                        ${item.price}
                      </h3>
                      <CartQuantity
                        productId={item.id}
                        quantity={item.quantity}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-12 py-5 bg-slate-200 rounded-xl flex flex-col items-center">
              <h2 className="scroll-m-20 pb-7 text-xl font-bold tracking-tight transition-colors first:mt-0">
                Order Summary
              </h2>
              <OrderSummary />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-y-7 justify-center items-center">
          <ShoppingBagIcon size={100} />
          <h2 className="scroll-m-20 pb-7 text-3xl font-bold tracking-tight transition-colors first:mt-0">
            Your shopping bag is empty
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
