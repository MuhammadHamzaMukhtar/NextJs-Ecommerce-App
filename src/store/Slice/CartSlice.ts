import { Product } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  totalQuantity: number;
  totalPrice: number;
  cartItems: Array<any>;
}

const initialState: CartState = {
  totalQuantity: 0,
  totalPrice: 0,
  cartItems: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const newItem: Product = action.payload.product;
      const quantity = action.payload.quantity;
      const existingProduct = state.cartItems.find(
        (item: Product) => item.id === newItem.id
      );
      let subTotal = 0;
      if (!existingProduct) {
        subTotal = newItem.price * quantity;
        newItem.quantity = quantity;
        state.cartItems.push(newItem);
        state.totalQuantity += quantity;
        state.totalPrice += subTotal;
      } else {
        subTotal = existingProduct.price * quantity;
        existingProduct.quantity += quantity;
        state.totalQuantity += quantity;
        state.totalPrice += subTotal;
      }
    },

    increamentTotalQuantity: (state, action: PayloadAction<any>) => {
      const productId = action.payload;
      const existingProductId = state.cartItems.find(
        (product) => product.id === productId
      );
      if (existingProductId) {
        existingProductId.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += existingProductId.price;
      }
    },

    decreamentTotalQuantity: (state, action: PayloadAction<any>) => {
      const productId = action.payload;
      const existingProductId = state.cartItems.find(
        (product) => product.id === productId
      );
      if (existingProductId) {
        existingProductId.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingProductId.price;
      }
    },

    removeItem: (state, action: PayloadAction<any>) => {
      const productId = action.payload;
      const existingProduct = state.cartItems.find(
        (product) => product.id === productId
      );
      if (existingProduct) {
        state.totalQuantity -= existingProduct.quantity;
        state.totalPrice -= existingProduct.price;
        state.cartItems.splice(existingProduct, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = CartSlice.actions;

export default CartSlice.reducer;
