import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
  cartQuantity: 0,
  cartTotalPrice: 0,
  status: "idle",
  error: null,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const updateCart = { ...action.payload.attributes, inCart: 1 };
      const getData = action.payload;
      const currentID = getData?.id;
      const currentCart = state.cartData;
      const exsistingCart = currentCart.find((item) => item.id === currentID);
    
      state.cartData.push(getData);

      console.log("exsistingCart", exsistingCart);
    },
    
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
