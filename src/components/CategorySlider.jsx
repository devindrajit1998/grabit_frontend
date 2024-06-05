import React from "react";
import { useSelector } from "react-redux";

export default function CategorySlider() {
  const categoryData = useSelector((state) => state?.commonFetch?.data?.categories);

  return (
    <section
      className="gi-category body-bg py-[40px] max-[767px]:py-[30px] wow fadeInUp"
      data-wow-duration="2s"
    >
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap px-[12px] mb-[-15px]">
          <div className="min-[1200px]:w-full basis-auto max-w-full border-content-color">
            <div className="gi-category-block">
              <div className="gi-cat-box transition-all duration-[0.3s] ease-in-out p-[15px] rounded-[5px] relative bg-[#fff6ec] w-full">
                <swiper-container
                  autoplay="true"
                  loop="true"
                  space-between="20"
                  breakpoints={JSON.stringify({
                    1024: { slidesPerView: 6 },
                    768: { slidesPerView: 3 },
                    575: { slidesPerView: 1 },
                  })}
                >
                  {categoryData?.map((items) => {
                    return (
                      <swiper-slide key={items.id}>
                        <div className="gi-cat-box transition-all duration-[0.3s] ease-in-out p-[15px] rounded-[5px] relative bg-[#fde1f5]">
                          <div className="gi-cat-icon h-full p-[15px] flex flex-col items-center justify-center bg-[#fff] relative rounded-[5px] z-[5]">
                            {items.attributes.discount !== 0 ? (
                              <span className="gi-lbl px-[5px] absolute top-[0] right-[0] bg-[#5caf90] text-[#fff] text-[12px] font-semibold rounded-bl-[5px] rounded-tr-[5px]">
                                {items.attributes.discount}%
                              </span>
                            ) : (
                              <></>
                            )}
                            <i
                              className={`fi fi-tr-${items.attributes.icon} transition-all duration-[0.3s] ease-in-out text-[40px] my-[10px] text-[#5caf90] leading-[0]`}
                            />
                            <div className="gi-cat-detail text-center">
                              <a href="shop-left-sidebar-col-3.html">
                                <h4 className="gi-cat-title m-[0] text-[15px] leading-[22px] font-semibold text-[#4b5966] capitalize font-manrope">
                                  {items.attributes.name}
                                </h4>
                              </a>
                              <p className="items m-[0] text-[13px] leading-[28px] text-[#777]">
                                48 Items
                              </p>
                            </div>
                          </div>
                        </div>
                      </swiper-slide>
                    );
                  })}
                </swiper-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
