import { createSlice } from "@reduxjs/toolkit";
import { updatedCard } from "../../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

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
  },
});

export const { addToCard } = cartSlice.actions;
export default cartSlice.reducer;
