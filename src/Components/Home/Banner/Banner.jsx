import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../../../Images/banner.png";

import "swiper/css";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const Banner = () => {
  const contentStyle = {
    height: "600px",
    width: "100%",
    borderRadius: "15px",
    overflow: "hidden",
  };
  return (
    <div className="pt-12 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-28 text-center">
      <div className="w-full p-4 lg:p-0 lg:w-3/4 mx-auto">
        <div>
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-md">
              Support and guide your{" "}
              <span className="text-[#ef4444]">content </span>
              <br />
              <span className="text-[#ef4444]">creators</span> for their success
              through
              <br />
              collaboration and assistance.
            </h1>
            <p className="mx-auto mt-5 text-[#4B5563]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              <br /> Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className=" mt-10 w-full overflow-hidden">
            <Swiper
              spaceBetween={30}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide>
                <img className="mx-auto" src={banner} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="mx-auto" src={banner} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="mx-auto" src={banner} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
