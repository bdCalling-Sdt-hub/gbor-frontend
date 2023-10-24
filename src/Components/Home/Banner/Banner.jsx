import { Skeleton } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BannerApi } from "../../../ReduxSlice/bannerSlice";

const Banner = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.banners);

  const contentStyle = {
    height: "600px",
    width: "100%",
    borderRadius: "15px",
  };

  useEffect(() => {
    dispatch(BannerApi());
  }, []);
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
            {banners.length > 0 ? (
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
                style={contentStyle}
              >
                {banners.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="mx-auto object-cover"
                      style={{ width: "100%", height: "100%" }}
                      src={image.bannerImage}
                      alt="banner image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div>
                <Skeleton.Image
                  active
                  style={{ width: "1400px", height: "600px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
