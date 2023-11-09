import { Button, Col, Row, notification } from "antd";
import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/pagination";
import axios from "../../../../../Config";
import { BannerApi } from "../../../../ReduxSlice/bannerSlice";
import "./Banners.css";

function Banners() {
  const [load, setLoad] = useState(1);
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.banners);
  const [api, contextHolder] = notification.useNotification();

  const contentStyle = {
    height: "500px",
    width: "100%",
    borderRadius: "15px",
  };

  const token = localStorage.token;

  const successNotify = (placement) => {
    api.success({
      message: "Completed",
      description: "Successfully upload image",
      placement,
    });
  };
  const errorNotify = (placement) => {
    api.error({
      message: "Mistake",
      description: "Not uploaded image",
      placement,
    });
  };

  const getImageFileObject = (imageFile) => {
    const formData = new FormData();

    formData.append("bannerImage", imageFile.file);

    axios
      .post("api/banner", formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          setLoad((prev) => prev + 1);
          successNotify("bottomRight");
        }
      })
      .catch((err) => {
        errorNotify("bottomRight");
      });
  };

  useEffect(() => {
    dispatch(BannerApi());
  }, [load]);

  const handleBannerDelete = (id) => {
    axios
      .delete(`/api/banner/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire("Opps!", res.data.message, "success");
        }
        setLoad((prev) => prev + 1);
      });
  };

  return (
    <>
      {contextHolder}
      <Row style={{ marginBottom: 30 }}>
        <Col lg={{ span: 24 }}>
          <h2 className="text-xl font-medium"> Current Banners</h2>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col lg={{ span: 24 }}>
          {banners.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              style={contentStyle}
            >
              {banners?.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img
                      style={contentStyle}
                      className="object-cover"
                      src={image.bannerImage}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className="relative">
              <img
                style={contentStyle}
                className="object-cover rounded"
                src="https://www.local-training.com/images/n_noimg.jpg"
              />
            </div>
          )}
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col lg={{ span: 24 }}>
          <h2 className="text-xl font-medium"> Upload New Banners</h2>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col lg={{ span: 24 }} style={{ display: "flex", gap: 15 }}>
          {[...Array(4).keys()].map((item, index) => (
            <ImageUploader
              key={index}
              onFileAdded={(img) => getImageFileObject(img)}
              style={{
                height: 130,
                width: 130,
                background: "#ebebeb",
                borderRadius: "5px",
              }}
              uploadIcon={<FiPlusCircle fontSize={25} />}
            />
          ))}
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col lg={{ span: 24 }}>
          <h2 className="text-xl font-medium">Previously Upload</h2>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col lg={{ span: 24 }} style={{ display: "flex", gap: 15 }}>
          {banners.slice(0, 4).map((item) => (
            <div
              key={item._id}
              style={{
                position: "relative",
                width: "130px",
                height: "130px",
                borderRadius: "5px",
              }}
            >
              <img
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "10px",
                }}
                src={item.bannerImage}
              />
              <Button
                style={{
                  position: "absolute",
                  bottom: 45,
                  left: 23,
                  color: "#fb7c29",
                  background: "#fff",
                  opacity: 0.8,
                  fontWeight: "bold",
                }}
                onClick={() => handleBannerDelete(item._id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
}

export default Banners;
