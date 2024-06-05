import React from "react";
import HeroSlider from "../components/HeroSlider";
import CategorySlider from "../components/CategorySlider";
import NewsModal from "../components/NewsModal";
import SectionTitle from "../components/SectionTitle";
import ProductSlider from "../components/ProductSlider";
import { useSelector } from "react-redux";

export default function Home() {
  const salesData = useSelector((state) => state?.commonFetch?.data?.saleData);

  return (
    <>
      <HeroSlider />
      <CategorySlider />
      <section
        className="gi-deal-section py-[40px] max-[767px]:py-[30px] wow fadeInUp"
        data-wow-duration="2s"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
            <div className="gi-deal-section w-full">
              <div className="gi-products">
                <SectionTitle
                  t1="Day of the"
                  t2="deal"
                  sub="Don't wait. The time will never be just right."
                />
                <div
                  className="gi-deal-block mx-[-12px]"
                  data-aos="fade-up"
                  data-aos-duration={2000}
                  data-aos-delay={300}
                >
                  <div className=" gi-product-slider">
                    <ProductSlider sliderdata={salesData}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <NewsModal/> */}
    </>
  );
}
