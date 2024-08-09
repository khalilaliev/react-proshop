import { createSlice } from "@reduxjs/toolkit";
import { updatedCard } from "../../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const item = action.payload;
      const isExist = state.cartItems.find((i) => i._id === item._id);

      if (isExist) {
        state.cartItems = state.cartItems.map((i) =>
          i._id === isExist._id ? item : i
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updatedCard(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i._id !== action.payload);
      return updatedCard(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updatedCard(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updatedCard(state);
    },
  },
});

export const {
  addToCard,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
} = cartSlice.actions;
export default cartSlice.reducer;
