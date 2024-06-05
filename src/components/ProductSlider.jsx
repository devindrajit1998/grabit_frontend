import React from "react";
import ProductCard from "./ProductCard";

export default function ProductSlider(props) {
  const sliderdata = props.sliderdata;
  return (
    <swiper-container
      autoplay="true"
      loop="true"
      space-between="20"
      pause-on-mouse-enter="true"
      breakpoints={JSON.stringify({
        1024: { slidesPerView: 5 },
        768: { slidesPerView: 3 },
        575: { slidesPerView: 1 },
      })}
    >
      {sliderdata?.attributes?.products?.data?.map((items) => {
        return (
          <swiper-slide key={items.id}>
            <ProductCard product={items} />
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
}
