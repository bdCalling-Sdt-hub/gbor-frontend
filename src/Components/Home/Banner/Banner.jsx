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
              Soutenez vos <span className="text-[#ef4444]">créateurs de </span>
              <br />
              <span className="text-[#ef4444]">contenu favoris</span> et laissez{" "}
              <br />
              leurs un mot pour les encourager.
            </h1>
            <p className="mx-auto mt-5 text-[#4B5563]">
              Soutenir son créateur favori lui offre les moyens d'explorer
              davantage sa passion, d'investir dans des <br /> équipements et de
              consacrer plus de temps à l'innovation créative, stimulant ainsi
              son développement artistique.
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
                      className="mx-auto object-cover w-full h-[250px] md:h-[600px] lg:h-[600px]"
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
