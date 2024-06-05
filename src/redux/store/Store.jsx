import rootReducer from "../rootReducer/RootReducer";
import CommonFetchSlice from "../slice/CommonFetchSlice";
import { configureStore } from "@reduxjs/toolkit";




const Store = configureStore({
  reducer: rootReducer,
});

export default Store;