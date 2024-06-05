import React from 'react'

export default function SideBar() {
  return (
    <div className="gi-shop-sidebar sticky top-[24px] min-[992px]:order-[-1] min-[768px]:order-[6] min-[992px]:w-[25%] min-[768px]:w-full w-full max-[991px]:mt-[30px] px-[12px]">
              <div id="shop_sidebar">
                <div className="gi-sidebar-wrap p-[15px] rounded-[5px] border-[1px] border-solid border-[#eee]">
                  {/* Sidebar Category Block */}
                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Category
                      </h3>
                    </div>
                    <div className="gi-sb-block-content mt-[15px]">
                      <ul>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                              defaultChecked=""
                            />
                            <a
                              href="javascript:void(0)"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              <span className="flex">
                                <i className="fi-rr-cupcake w-[20px] h-[20px] mr-[7px] text-[17px]" />
                                Dairy &amp; Bakery
                              </span>
                            </a>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <a
                              href="javascript:void(0)"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              <span className="flex">
                                <i className="fi fi-rs-apple-whole w-[20px] h-[20px] mr-[7px] text-[17px]" />
                                Fruits &amp; Vegetable
                              </span>
                            </a>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <a
                              href="javascript:void(0)"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              <span className="flex">
                                <i className="fi fi-rr-popcorn w-[20px] h-[20px] mr-[7px] text-[17px]" />
                                Snack &amp; Spice
                              </span>
                            </a>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <a
                              href="javascript:void(0)"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              <span className="flex">
                                <i className="fi fi-rr-drink-alt w-[20px] h-[20px] mr-[7px] text-[17px]" />
                                Juice &amp; Drinks
                              </span>
                            </a>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Sidebar Weight Block */}
                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Weight
                      </h3>
                    </div>
                    <div className="gi-sb-block-content mt-[15px]">
                      <ul>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                              defaultChecked=""
                            />
                            <a
                              href="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              500gm Pack
                            </a>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <a
                              href="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              1kg Pack
                            </a>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <a
                              href="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              2kg Pack
                            </a>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <a
                              href="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              5kg Pack
                            </a>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li>
                          <div className="gi-sidebar-block-item py-[15px] relative flex flex-row">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-full h-[calc(100% - 5px)] absolute opacity-[0] cursor-pointer z-[9] top-[50%] translate-y-[-50%]"
                            />
                            <a
                              href="#"
                              className="w-full text-[#777] text-[14px] mt-[0] leading-[20px] font-normal capitalize cursor-pointer flex justify-between pl-[30px]"
                            >
                              10kg Pack
                            </a>
                            <span className="checked absolute top-[50%] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Sidebar Color item */}
                  <div className="gi-sidebar-block mb-[15px] color-block gi-sidebar-block-clr">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Color
                      </h3>
                    </div>
                    <div className="gi-sb-block-content mt-[20px]">
                      <ul className="w-full flex flex-wrap flex-row">
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#c4d6f9" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#ff748b" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#000000" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="active mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#2bff4a" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#ff7c5e" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#f155ff" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#ffef00" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#c89fff" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#7bfffa" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#56ffc1" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#ffdb9f" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#9f9f9f" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                        <li className="mr-[10px]">
                          <div className="gi-sidebar-block-item py-[5px] border-[0] flex flex-row relative">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="w-[20px] h-[20px] absolute opacity-[0] cursor-pointer z-[9] top-[50%] left-[0] translate-y-[-50%]"
                            />
                            <span
                              className="gi-clr-block transition-all duration-[0.3s] ease-in-out w-[22px] h-[22px] rounded-[50%] opacity-[0.7] bg-transparent cursor-pointer tracking-[0.02rem]"
                              style={{ backgroundColor: "#6556ff" }}
                            />
                            <span className="checked w-[20px] h-[20px] bg-transparent border-[0] absolute top-[50%] left-[0] transition-all duration-[300ms] linear translate-y-[-50%] rounded-[5px] overflow-hidden" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Sidebar Price Block */}
                  <div className="gi-sidebar-block mb-[15px]">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Price
                      </h3>
                    </div>
                    <div className="gi-sb-block-content gi-price-range-slider es-price-slider mt-[20px]">
                      <div className="gi-price-filter flex justify-between flex-col">
                        <div className="gi-price-input mb-[15px] p-[10px] flex justify-center items-center rounded-[5px] bg-[#f8f8fb]">
                          <label className="filter__label text-[14px] text-[#777] flex flex-col justify-center items-center">
                            From
                            <input
                              type="text"
                              className="filter__input rounded-[5px] h-[30px] border-[0] p-[0] max-w-[48px] leading-[30px] bg-[#fff] text-center text-[14px] text-[#777] outline-[0]"
                            />
                          </label>
                          <span className="gi-price-divider relative border-b-[1px] border-solid border-[#777] w-[10px] h-[1px] mx-[10px]" />
                          <label className="filter__label text-[14px] text-[#777] flex flex-col justify-center items-center">
                            To
                            <input
                              type="text"
                              className="filter__input rounded-[5px] h-[30px] border-[0] p-[0] max-w-[48px] leading-[30px] bg-[#fff] text-center text-[14px] text-[#777] outline-[0]"
                            />
                          </label>
                        </div>
                        <div
                          id="gi-sliderPrice"
                          className="filter__slider-price"
                          data-min={0}
                          data-max={250}
                          data-step={10}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Sidebar tags */}
                  <div className="gi-sidebar-block">
                    <div className="gi-sb-title border-b-[1px] border-solid border-[#eee] pb-[15px]">
                      <h3 className="gi-sidebar-title font-semibold tracking-[0] relative text-[#4b5966] w-full flex justify-between font-Poppins text-[17px] leading-[1.2]">
                        Tags
                      </h3>
                    </div>
                    <div className="gi-tag-block gi-sb-block-content mt-[15px]">
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem] bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                      >
                        Clothes
                      </a>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem] bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                      >
                        Fruits
                      </a>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem] bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                      >
                        Snacks
                      </a>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem] bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                      >
                        Dairy
                      </a>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem] bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                      >
                        Seafood
                      </a>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem] bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                      >
                        Fastfood
                      </a>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem] bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                      >
                        Toys
                      </a>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem] bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                      >
                        perfume
                      </a>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem] bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                      >
                        jewelry
                      </a>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out my-[2px] py-[3px] px-[8px] inline-flex flex-row flex-wrap capitalize font-light text-[13px] tracking-[0.02rem] bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                      >
                        Bags
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}
