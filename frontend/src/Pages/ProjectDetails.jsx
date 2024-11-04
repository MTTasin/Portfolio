import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function ProjectDetails() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper mt-60 w-1/2"
      >
        <SwiperSlide>
          <img
            src="https://picsum.photos/id/237/1200/600"
            alt=""
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/id/238/1200/600"
            alt=""
            className="mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/id/239/1200/600"
            alt=""
            className="mx-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
