import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/slice/CommonSlice";
import { fetchSingleProduct } from "../redux/slice/ProductSlice";
import { addToCart } from "../redux/slice/CartSlice";

export default function ProductCard(props) {
  const productData = props.product?.attributes;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // calculate discount for card
  const mainPrice = productData?.price;
  const discount = productData?.offer / 100;
  const discountedPrice = mainPrice * discount;
  const finalPrice = (mainPrice - discountedPrice).toFixed(0);

  //get modal data
  const cardData = props.product;
  const getModalData = useSelector(
    (state) => state?.commonSlice?.data?.modalData
  );
  // console.log(cardData.id);

  const dispatch = useDispatch();

  // handle modal events
  const modalID = cardData?.id;
  const handleModal = () => {
    dispatch(fetchSingleProduct(`${modalID}`));
    dispatch(openModal());
  };

  // add to cart

  const getCartData = useSelector((state) => state.cardData);
  const cartProduct = props.product;
  const handleCart = () => {
    dispatch(addToCart(cartProduct));
  };

  // console.log("getCartData", productData);
  return (
    <>
      <div className="gi-product-content h-full px-[12px] flex">
        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
          <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
            <div className="gi-pro-image overflow-hidden">
              <a
                href="product-left-sidebar.html"
                className="image relative block overflow-hidden pointer-events-none"
              >
                <span className="label veg max-[991px]:hidden">
                  <span className="dot" />
                </span>
                <img
                  className="main-image max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                  src={`${baseUrl}${productData.thumbnail.data.attributes.url}`}
                  alt="Product"
                />
                <img
                  className="hover-image absolute z-[1] top-[0] left-[0] opacity-[0] transition-all duration-[0.3s] ease delay-[0s]"
                  src={`${baseUrl}${productData.alter.data[0].attributes.url}`}
                  alt="Product"
                />
              </a>
              <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
                <span className="sale px-[10px] py-[5px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#ff7070] text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                  Sale
                </span>
              </span>
              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-0">
                <a
                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]"
                  title="Wishlist"
                >
                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                </a>
                <button
                  className="gi-btn-group quickview transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] modal-toggle"
                  onClick={handleModal}
                >
                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                </button>
                <a
                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]"
                  title="Compare"
                >
                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                </a>
                <button
                  title="Add To Cart"
                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]"
                  onClick={handleCart}
                >
                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                </button>
              </div>
            </div>
          </div>
          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
            <a href="shop-left-sidebar-col-3.html">
              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] leading-[1.2] capitalize">
                {productData.category.data.attributes.name}
              </h6>
            </a>
            <h5 className="gi-pro-title h-full mb-[10px] text-[16px]">
              <a
                href="product-left-sidebar.html"
                className="block text-[14px] leading-[22px] font-normal text-[#4b5966] tracking-[0.85px] capitalize font-Poppins hover:text-[#5caf90] clamped_1"
              >
                {productData.title}
              </a>
            </h5>
            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]" />
                <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]" />
                <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]" />
                <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]" />
                <i className="gicon gi-star text-[14px] text-[#777] mr-[3px] float-left mr-[3px]" />
              </span>
              <span className="gi-price">
                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px]">
                  ₹{finalPrice}
                </span>
                <span className="old-price text-[14px] text-[#777] line-through">
                  ₹{productData.price}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
