import React from "react";
import Breadcum from "../components/Breadcum";
import CategorySlider from "../components/CategorySlider";
import SideBar from "../components/SideBar";

export default function ShopPage() {
  return (
    <>
      <Breadcum title="Shop Page" />
      <CategorySlider />
      <section className="gi-category py-[40px] max-[767px]:py-[30px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="gi-shop-rightside min-[992px]:order-[6] min-[768px]:order-[-1] min-[992px]:w-[75%] min-[768px]:w-full w-full px-[12px]">
              {/* Shop Top Start */}
              <div className="gi-pro-list-top flex items-center justify-between text-[14px] border-[1px] border-solid border-[#eee] rounded-[5px] mb-[30px]">
                <div className="min-[768px]:w-[50%] w-full gi-grid-list">
                  <div className="gi-gl-btn ml-[5px] flex items-center flex-row">
                    <button
                      type="button"
                      className="grid-btn btn-grid-50 h-[40px] w-[40px] border-[0] rounded-[0] flex items-center justify-center flex-row active"
                    >
                      <i className="fi fi-rr-apps text-[20px] text-[#4b5966] leading-[0]" />
                    </button>
                    <button
                      type="button"
                      className="grid-btn btn-list-50 h-[40px] w-[40px] border-[0] rounded-[0] flex items-center justify-center flex-row"
                    >
                      <i className="fi fi-rr-list text-[20px] text-[#4b5966] leading-[0]" />
                    </button>
                  </div>
                </div>
                <div className="min-[768px]:w-[50%] w-full gi-sort-select flex justify-end items-center">
                  <div className="gi-select-inner relative flex w-[140px] h-[50px] leading-[1.5] bg-[#fff] overflow-hidden rounded-[0] border-l-[1px] border-solid border-[#eee]">
                    <select
                      name="gi-select"
                      id="gi-select"
                      className="appearance-none outline-[0] border-[0] bg-[#fff] grow-[1] px-[10px] text-[#777] cursor-pointer"
                    >
                      <option selected="" disabled="">
                        Sort by
                      </option>
                      <option value={1}>Position</option>
                      <option value={2}>Relevance</option>
                      <option value={3}>Name, A to Z</option>
                      <option value={4}>Name, Z to A</option>
                      <option value={5}>Price, low to high</option>
                      <option value={6}>Price, high to low</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Shop Top End */}
              {/* Select Bar Start */}
              <div className="gi-select-bar mt-[-5px] mx-[-5px] mb-[25px] flex flex-wrap justify-end ">
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  Clothes
                  <a
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    href="javascript:void(0)"
                  >
                    ×
                  </a>
                </span>
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  Fruits
                  <a
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    href="javascript:void(0)"
                  >
                    ×
                  </a>
                </span>
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  Snacks
                  <a
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    href="javascript:void(0)"
                  >
                    ×
                  </a>
                </span>
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  Dairy
                  <a
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    href="javascript:void(0)"
                  >
                    ×
                  </a>
                </span>
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  perfume
                  <a
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    href="javascript:void(0)"
                  >
                    ×
                  </a>
                </span>
                <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  jewelry
                  <a
                    className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
                    href="javascript:void(0)"
                  >
                    ×
                  </a>
                </span>
                <span className="gi-select-btn gi-select-btn-clear m-[5px] p-[0] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
                  <a
                    className="gi-select-clear transition-all duration-[0.3s] ease-in-out h-full m-[0] py-[3px] px-[10px] text-[14px] flex items-center bg-[#4b5966] text-[#fff] rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff]"
                    href="javascript:void(0)"
                  >
                    Clear All
                  </a>
                </span>
              </div>
              {/* Select Bar End */}
              {/* Shop content Start */}
              <div className="shop-pro-content">
                <div className="shop-pro-inner mx-[-12px]">
                  <div className="flex flex-wrap w-full">
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/2_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/2_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
                                <span className="sale py-[5px] px-[10px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#ff7070] text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                                  Sale
                                </span>
                              </span>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                Dried Fruits
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Dates Value Pack Pouch
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $78.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $85.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/1_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/1_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                chips &amp; fries
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Crunchy Triangle Chips Snacks
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $59.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $87.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/3_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/3_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
                                <span className="sale py-[5px] px-[10px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#ff7070] text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                                  Sale
                                </span>
                              </span>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                Dried Fruits
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Californian Almonds Value Pack
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $58.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $65.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/4_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/4_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
                                <span className="new py-[5px] px-[10px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#5caf90] text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                                  New
                                </span>
                              </span>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                Foods
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Banana Chips Snacks &amp; Spices
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $45.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $50.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/5_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/5_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
                                <span className="new py-[5px] px-[10px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#5caf90] text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                                  New
                                </span>
                              </span>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                Snacks
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Berry &amp; Graps Mix Snack
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $25.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $35.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/6_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/6_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
                                <span className="sale py-[5px] px-[10px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#ff7070] text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                                  Sale
                                </span>
                              </span>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                Dried Fruits
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Mixed Nuts Seeds &amp; Berries Pack
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $45.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $56.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/7_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/7_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                Foods
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Mixed Nuts &amp; Almonds Dry Fruits
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $49.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $65.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/8_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/8_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                Snacks
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Smoked Honey Spiced Nuts
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $32.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $45.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/2_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/2_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
                                <span className="sale py-[5px] px-[10px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#ff7070] text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                                  Sale
                                </span>
                              </span>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                Dried Fruits
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Dates Value Pack Pouch
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $78.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $85.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/3_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/3_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
                                <span className="sale py-[5px] px-[10px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#ff7070] text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                                  Sale
                                </span>
                              </span>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                Dried Fruits
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Californian Almonds Value Pack
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $58.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $65.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/6_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/6_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
                                <span className="sale py-[5px] px-[10px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#ff7070] text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                                  Sale
                                </span>
                              </span>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                Dried Fruits
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Mixed Nuts Seeds &amp; Berries Pack
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $45.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $56.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-[1200px]:w-[25%] min-[992px]:w-[33.33%] min-[768px]:w-[50%] min-[576px]:w-[50%] max-[420px]:w-full px-[12px] gi-product-box max-[575px]:w-[50%] max-[575px]:mx-auto pro-gl-content">
                      <div className="gi-product-content pb-[24px] h-full flex">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] ease delay-[0s] z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none transition-all duration-[0.3s] ease-in-out"
                              >
                                <span className="label veg max-[991px]:hidden">
                                  <span className="dot" />
                                </span>
                                <img
                                  className="main-image max-w-full z-[1] transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/2_1.jpg"
                                  alt="Product"
                                />
                                <img
                                  className="hover-image absolute z-[2] top-[0] left-[0] opacity-[0] max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="img/product-images/2_2.jpg"
                                  alt="Product"
                                />
                              </a>
                              <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
                                <span className="sale py-[5px] px-[10px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#ff7070] text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                                  Sale
                                </span>
                              </span>
                              <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-[0]">
                                <a
                                  className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Wishlist"
                                >
                                  <i className="fi-rr-heart transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group modal-toggle quickview transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-eye transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  className="gi-btn-group compare transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                  title="Compare"
                                >
                                  <i className="fi fi-rr-arrows-repeat transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                                <a
                                  href="javascript:void(0)"
                                  title="Add To Cart"
                                  className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:bg-[#5caf90]"
                                >
                                  <i className="fi-rr-shopping-basket transition-all duration-[0.3s] ease-in-out text-[#777] leading-[10px]" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <a href="shop-left-sidebar-col-3.html">
                              <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] capitalize font-manrope tracking-[0.01rem] leading-[1.2]">
                                Dried Fruits
                              </h6>
                            </a>
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px] tracking-[0.01rem] font-normal leading-[1.2]">
                              <a
                                href="product-left-sidebar.html"
                                className="text-[#4b5966] block text-[14px] leading-[22px] font-normal tracking-[0.85px] capitalize font-Poppins"
                              >
                                Dates Value Pack Pouch
                              </a>
                            </h5>
                            <p className="gi-info text-[15px] leading-[28px] font-light tracking-[0.02rem] mb-[16px] hidden">
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old.
                            </p>
                            <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
                              <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                                <i className="gicon gi-star inline-block text-[#777] float-left text-[14px] mr-[3px]" />
                              </span>
                              <span className="gi-price text-[18px] flex items-center justify-left text-[#4b5966] tracking-[0.4px]">
                                <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px] tracking-[0.02rem]">
                                  $78.00
                                </span>
                                <span className="old-price text-[14px] text-[#777] tracking-[0.02rem] line-through">
                                  $85.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Pagination Start */}
                <div className="gi-pro-pagination pt-[15px] flex justify-between items-center border-t-[1px] border-solid border-[#eee] max-[575px]:flex-col">
                  <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">
                    Showing 1-12 of 21 item(s)
                  </span>
                  <ul className="gi-pro-pagination-inner">
                    <li className="inline-block float-left mr-[5px]">
                      <a
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] active"
                        href="#"
                      >
                        1
                      </a>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <a
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
                        href="#"
                      >
                        2
                      </a>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <a
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
                        href="#"
                      >
                        3
                      </a>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <span className="w-[20px] text-[#777] block text-center text-[14px] tracking-[0.02rem] max-[575px]:mb-[10px]">
                        ...
                      </span>
                    </li>
                    <li className="inline-block float-left mr-[5px]">
                      <a
                        className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
                        href="#"
                      >
                        8
                      </a>
                    </li>
                    <li className="inline-block float-left">
                      <a
                        className="next w-auto px-[13px] text-[#fff] bg-[#5caf90] leading-[30px] h-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px]"
                        href="#"
                      >
                        Next{" "}
                        <i className="gicon gi-angle-right ml-[10px] transition-all duration-[0.3s] ease-in-out text-[#fff]" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Pagination End */}
              </div>
              {/*Shop content End */}
            </div>
            {/* Sidebar Area Start */}
            <SideBar/>  
          </div>
        </div>
      </section>
    </>
  );
}
