import { Product } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const uniqueId = uuidv4();

export const fetchTotalQuantity: any = createAsyncThunk(
  "cart/fetchQuantity",
  async () => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      localStorage.setItem("user_id", uniqueId);
    }
    const response = await fetch(
      `/api/cart/${localStorage.getItem("user_id")}`
    );
    const data = await response.json();
    console.log("dat", data);
    if (response.status < 200 || response.status >= 300) {
      return "Something went wrong";
    }
    return data;
  }
);

export const storeCartData: any = createAsyncThunk(
  "cart/storeData",
  async (queryData: any, { rejectWithValue }) => {
    const query = {
      user_id: localStorage.getItem("user_id"),
      product: queryData.product,
      quantity: queryData.productQuantity,
    };
    console.log("query", query);
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(query),
    });
    const data = await response.json();
    console.log("data", data);
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  }
);

export interface CartState {
  totalQuantity: number;
  totalPrice: number;
  cartItems: Array<any>;
  status: string;
  data: string;
}

const initialState: CartState = {
  totalQuantity: 0,
  totalPrice: 0,
  cartItems: [],
  status: "",
  data: "",
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
      } else {
        subTotal = existingProduct.price * quantity;
        existingProduct.quantity += quantity;
      }
      state.totalQuantity += quantity;
      state.totalPrice += subTotal;
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
  extraReducers: (builder) => {
    // When our request is pending:
    // - store the 'pending' state as the status for the corresponding pokemon name
    builder.addCase(storeCartData.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchTotalQuantity.pending, (state, action) => {
      state.status = "pending";
    });
    // When our request is fulfilled:
    // - store the 'fulfilled' state as the status for the corresponding pokemon name
    // - and store the received payload as the data for the corresponding pokemon name
    builder.addCase(storeCartData.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.cartItems = action.payload;
    });
    builder.addCase(fetchTotalQuantity.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.totalQuantity = parseInt(action.payload[0].quantitySum);
      state.cartItems = action.payload;
    });
    // When our request is rejected:
    // - store the 'rejected' state as the status for the corresponding pokemon name
    builder.addCase(storeCartData.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(fetchTotalQuantity.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

// Action creators are generated for each case reducer function
export const cartActions = CartSlice.actions;

export default CartSlice.reducer;
