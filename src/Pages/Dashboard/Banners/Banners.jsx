import { Button, Col, Row } from "antd";
import React, { useState } from "react";
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

import "swiper/css";
import "swiper/css/pagination";
import "./Banners.css";

function Banners() {
  const [bannerImage, setBannerImage] = useState([]);

  const contentStyle = {
    height: "500px",
    width: "100%",
    borderRadius: "15px",
  };

  function getImageFileObject(imageFile) {
    setBannerImage([...bannerImage, imageFile]);
  }

  function runAfterImageDelete(file) {
    console.log({ file });
  }

  return (
    <>
      <Row style={{ marginBottom: 30 }}>
        <Col lg={{ span: 24 }}>
          <h2 className="text-xl font-medium"> Current Banners</h2>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col lg={{ span: 24 }}>
          {bannerImage.length > 0 ? (
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
              {bannerImage?.map((item) => {
                return (
                  <SwiperSlide>
                    <img style={contentStyle} src={item.dataUrl} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div>
              <img
                style={contentStyle}
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
          <ImageUploader
            style={{ borderRadius: "10px" }}
            onFileAdded={(img) => getImageFileObject(img)}
            onFileRemoved={(img) => runAfterImageDelete(img)}
          />
          <ImageUploader
            style={{ borderRadius: "10px" }}
            onFileAdded={(img) => getImageFileObject(img)}
            onFileRemoved={(img) => runAfterImageDelete(img)}
          />
          <ImageUploader
            style={{ borderRadius: "10px" }}
            onFileAdded={(img) => getImageFileObject(img)}
            onFileRemoved={(img) => runAfterImageDelete(img)}
          />
          <ImageUploader
            style={{ borderRadius: "10px" }}
            onFileAdded={(img) => getImageFileObject(img)}
            onFileRemoved={(img) => runAfterImageDelete(img)}
          />
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col lg={{ span: 24 }}>
          <h2 className="text-xl font-medium">Previously Upload</h2>
        </Col>
      </Row>

      <Row style={{ marginBottom: 30 }}>
        <Col lg={{ span: 24 }} style={{ display: "flex", gap: 15 }}>
          <div
            style={{
              position: "relative",
              width: "130px",
              height: "130px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <img
              style={{ width: "130px", height: "130px", borderRadius: "10px" }}
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
            <Button
              style={{
                position: "absolute",
                top: "40%",
                left: "20%",
                color: "#fb7c29",
                background: "#fff",
                opacity: 0.8,
              }}
            >
              Remove
            </Button>
          </div>

          <div
            style={{
              position: "relative",
              width: "130px",
              height: "130px",
              borderRadius: "10px",
              marginBottom: "20px",
              opacity: 0.8,
            }}
          >
            <img
              style={{ width: "130px", height: "130px", borderRadius: "10px" }}
              src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
            <Button
              style={{
                position: "absolute",
                top: "40%",
                left: "20%",

                color: "#fb7c29",
                background: "#fff",
                opacity: 0.8,
              }}
            >
              Remove
            </Button>
          </div>

          <div
            style={{
              position: "relative",
              width: "130px",
              height: "130px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <img
              style={{ width: "130px", height: "130px", borderRadius: "10px" }}
              src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
            <Button
              style={{
                position: "absolute",
                top: "40%",
                left: "20%",

                color: "#fb7c29",
                background: "#fff",
                opacity: 0.8,
              }}
            >
              Remove
            </Button>
          </div>

          <div
            style={{
              position: "relative",
              width: "130px",
              height: "130px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <img
              style={{ width: "130px", height: "130px", borderRadius: "10px" }}
              src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
            />
            <Button
              style={{
                position: "absolute",
                top: "40%",
                left: "20%",

                color: "#fb7c29",
                background: "#fff",
                opacity: 0.8,
              }}
            >
              Remove
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Banners;
