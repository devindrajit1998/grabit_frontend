import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_ACCESS_KEY;

const CATEGORY = "/api/categories";
const BANNER = "/api/banner?populate=categories.thumbnail";
const SALE = "/api/sale?populate[products][populate]=thumbnail,category,alter";

const initialState = {
  data: {
    categories: [],
    banner: [],
    saleData: [],
  },
  status: "idle",
  error: null,
};

export const fetchBanner = createAsyncThunk("fetchBanner", async () => {
  try {
    const response = await axios.request(BASE_URL + BANNER, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    // console.log("fdfdf",response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
  try {
    const response = await axios.request(BASE_URL + CATEGORY, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const fetchSale = createAsyncThunk("fetchSale", async () => {
  try {
    const response = await axios.request(BASE_URL + SALE, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const CommonFetchSlice = createSlice({
  name: "commonFetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.status = "succedded";
      state.data.categories = action.payload.data;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(fetchBanner.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBanner.fulfilled, (state, action) => {
      state.status = "succedded";
      state.data.banner = action.payload.data;
    });
    builder.addCase(fetchBanner.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    builder.addCase(fetchSale.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSale.fulfilled, (state, action) => {
      state.status = "succedded";
      state.data.saleData = action.payload.data;
    });
  },
});

export default CommonFetchSlice.reducer;
