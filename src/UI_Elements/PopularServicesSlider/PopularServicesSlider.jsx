import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./PopularServicesSlider.css";
import { Pagination, Navigation } from "swiper";

const PopularServicesSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  console.log(swiperRef);
  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col">
          <h3 className="fw-bold">Our Popular Services</h3>
        </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{ type: "fraction" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true} // Enable infinite loop
      >
        <SwiperSlide>
          <img src="https://picsum.photos/200" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/100" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/400" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/500" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/700" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/800" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/900" alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default PopularServicesSlider;
