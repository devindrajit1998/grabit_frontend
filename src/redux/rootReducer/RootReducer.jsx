import { combineReducers } from "@reduxjs/toolkit";
import CommonFetchSlice from "../slice/CommonFetchSlice";
import CommonSlice from "../slice/CommonSlice";
import productSlice from "../slice/ProductSlice";
import cartSlice from "../slice/CartSlice";

const rootReducer = combineReducers({
  commonFetch: CommonFetchSlice,
  commonSlice: CommonSlice,
  productSlice: productSlice,
  cartSlice: cartSlice,
});

export default rootReducer;
