import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_ACCESS_KEY;
const PRODUCT = "/api/products";
// const PRODUCT_ID = "1";

// console.log("BASE_URL: ", BASE_URL + PRODUCT);

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct",
  async (id) => {
    try {
      const response = await axios.request(`${BASE_URL}${PRODUCT}/${id}?populate=*`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  product: [],
  status: "idle",
  error: null,
};
// console.log("datafetch", initialState.product);
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.status = "successful";
      state.product = action.payload.data;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
