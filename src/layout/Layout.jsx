import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { register } from "swiper/element/bundle";
import Header from "../components/Header";
import Cart from "../components/Cart";
import ProductModal from "../components/ProductModal";
import BackToTop from "../components/BackToTop";
import Loader from "../components/Loader";

import { useDispatch, useSelector } from "react-redux";
import {fetchBanner,fetchCategory,fetchSale} from "../redux/slice/CommonFetchSlice";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
// import { fetchSingleProduct } from "../redux/slice/ProductSlice";

// import ShopPage from "../pages/ShopPage";
// import CartPage from "../pages/CartPage";
// import ProductPage from "../pages/ProductPage";
// import ErrorPage from "../pages/ErrorPage";

register();

export default function Layout() {
  const dispatch = useDispatch();
  // const commonFetch = useSelector((state) => state.data);
  const Status = useSelector((state) => state.status);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchBanner());
    dispatch(fetchSale());
    // dispatch(fetchSingleProduct());
  }, []);

  if (Status === "idle") {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Cart />
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </>
      <ProductModal />
      <BackToTop />
    </>
  );
}
