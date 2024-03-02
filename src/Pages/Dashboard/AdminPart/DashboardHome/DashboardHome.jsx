import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
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
import { BannerApi } from "../../../../ReduxSlice/bannerSlice";
import { Payment } from "../../../../ReduxSlice/paymentSlice";
import "./DashboardHome.css";
import TransactionTable from "./TransactionTable";

function DashboardHome() {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.banners);
  const { incomesTotal, incomes, pagination } = useSelector(
    (state) => state.payment
  );
  const [reload, setReload] = useState(0);

  const contentStyle = {
    height: "450px",
    width: "100%",
    borderRadius: "15px",
  };

  const handlePagination = (page) => {
    const value = {
      gborAmount: "",
      search: "",
      page: page,
      limit: 10,
      type: "dashboard",
    };
    dispatch(Payment(value));
  };

  useEffect(() => {
    const value = {
      gborAmount: "",
      search: "",
      page: 1,
      limit: 10,
      type: "dashboard",
    };

    dispatch(Payment(value));
  }, [reload]);

  useEffect(() => {
    dispatch(BannerApi());
  }, []);

  return (
    <div>
      <Row style={{ marginBottom: 30 }}>
        <Col>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            style={contentStyle}
          >
            {banners.map((item) => (
              <SwiperSlide key={item._id}>
                <img style={contentStyle} src={item.bannerImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginBottom: "20px" }}>
        <Col
          className="gutter-row"
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div className="bg-[#fb7c29] p-8 text-center flex flex-col items-center rounded-md space-y-4 text-white select-none">
            {/* <HiOutlineCurrencyDollar
              style={{ width: "28px", height: "28px" }}
            /> */}
            <svg
              className="w-[28px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="france"
            >
              <ellipse
                cx="32"
                cy="32"
                fill="transparent"
                stroke="white"
                stroke-miterlimit="10"
                stroke-width="4"
                rx="29.71"
                ry="29"
              ></ellipse>
              <path
                fill="transparent"
                stroke="white"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="4"
                d="M27.44,47.1V18.93a2.06,2.06,0,0,1,2.08-2H43.18"
              ></path>
              <line
                x1="27.44"
                x2="39.4"
                y1="29.67"
                y2="29.67"
                fill="transparent"
                stroke="white"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="4"
              ></line>
              <line
                x1="20.82"
                x2="34.47"
                y1="37.14"
                y2="37.14"
                fill="transition"
                stroke="white"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="4"
              ></line>
            </svg>
            <h2 className="text-2xl">Today's income</h2>
            <h3 className="text-2xl inline-flex">
              {" "}
              <svg
                className="w-[32px] mt-[1px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="france"
              >
                <ellipse
                  cx="32"
                  cy="32"
                  fill="transparent"
                  stroke="transparent"
                  stroke-miterlimit="10"
                  stroke-width="4"
                  rx="29.71"
                  ry="29"
                ></ellipse>
                <path
                  fill="transparent"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                  d="M27.44,47.1V18.93a2.06,2.06,0,0,1,2.08-2H43.18"
                ></path>
                <line
                  x1="27.44"
                  x2="39.4"
                  y1="29.67"
                  y2="29.67"
                  fill="transparent"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                ></line>
                <line
                  x1="20.82"
                  x2="34.47"
                  y1="37.14"
                  y2="37.14"
                  fill="transition"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                ></line>
              </svg>{" "}
              {incomesTotal?.today}
            </h3>
          </div>
        </Col>
        <Col
          className="gutter-row"
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div className="bg-[#fb7c29] p-8 text-center flex flex-col items-center rounded-md space-y-4 text-white select-none">
            <svg
              className="w-[28px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="france"
            >
              <ellipse
                cx="32"
                cy="32"
                fill="transparent"
                stroke="white"
                stroke-miterlimit="10"
                stroke-width="4"
                rx="29.71"
                ry="29"
              ></ellipse>
              <path
                fill="transparent"
                stroke="white"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="4"
                d="M27.44,47.1V18.93a2.06,2.06,0,0,1,2.08-2H43.18"
              ></path>
              <line
                x1="27.44"
                x2="39.4"
                y1="29.67"
                y2="29.67"
                fill="transparent"
                stroke="white"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="4"
              ></line>
              <line
                x1="20.82"
                x2="34.47"
                y1="37.14"
                y2="37.14"
                fill="transition"
                stroke="white"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="4"
              ></line>
            </svg>
            <h2 className="text-2xl">Weekly income</h2>
            <h3 className="text-2xl inline-flex">
              {" "}
              <svg
                className="w-[32px] mt-[1px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="france"
              >
                <ellipse
                  cx="32"
                  cy="32"
                  fill="transparent"
                  stroke="transparent"
                  stroke-miterlimit="10"
                  stroke-width="4"
                  rx="29.71"
                  ry="29"
                ></ellipse>
                <path
                  fill="transparent"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                  d="M27.44,47.1V18.93a2.06,2.06,0,0,1,2.08-2H43.18"
                ></path>
                <line
                  x1="27.44"
                  x2="39.4"
                  y1="29.67"
                  y2="29.67"
                  fill="transparent"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                ></line>
                <line
                  x1="20.82"
                  x2="34.47"
                  y1="37.14"
                  y2="37.14"
                  fill="transition"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                ></line>
              </svg>{" "}
              {incomesTotal?.lastWeek}
            </h3>
          </div>
        </Col>
        <Col
          className="gutter-row"
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div className="bg-[#fb7c29] p-8 text-center flex flex-col items-center rounded-md space-y-4 text-white select-none">
            <svg
              className="w-[28px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="france"
            >
              <ellipse
                cx="32"
                cy="32"
                fill="transparent"
                stroke="white"
                stroke-miterlimit="10"
                stroke-width="4"
                rx="29.71"
                ry="29"
              ></ellipse>
              <path
                fill="transparent"
                stroke="white"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="4"
                d="M27.44,47.1V18.93a2.06,2.06,0,0,1,2.08-2H43.18"
              ></path>
              <line
                x1="27.44"
                x2="39.4"
                y1="29.67"
                y2="29.67"
                fill="transparent"
                stroke="white"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="4"
              ></line>
              <line
                x1="20.82"
                x2="34.47"
                y1="37.14"
                y2="37.14"
                fill="transition"
                stroke="white"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="4"
              ></line>
            </svg>
            <h2 className="text-2xl">Monthly income</h2>
            <h3 className="text-2xl inline-flex">
              {" "}
              <svg
                className="w-[32px] mt-[1px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="france"
              >
                <ellipse
                  cx="32"
                  cy="32"
                  fill="transparent"
                  stroke="transparent"
                  stroke-miterlimit="10"
                  stroke-width="4"
                  rx="29.71"
                  ry="29"
                ></ellipse>
                <path
                  fill="transparent"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                  d="M27.44,47.1V18.93a2.06,2.06,0,0,1,2.08-2H43.18"
                ></path>
                <line
                  x1="27.44"
                  x2="39.4"
                  y1="29.67"
                  y2="29.67"
                  fill="transparent"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                ></line>
                <line
                  x1="20.82"
                  x2="34.47"
                  y1="37.14"
                  y2="37.14"
                  fill="transition"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                ></line>
              </svg>{" "}
              {incomesTotal?.lastMonth}
            </h3>
          </div>
        </Col>
      </Row>
      <Row>
        <h2
          style={{ fontSize: "25px", margin: "30px 0px", fontWeight: "normal" }}
        >
          Transaction histroy
        </h2>
      </Row>
      <TransactionTable
        incomes={incomes}
        handlePagination={handlePagination}
        pagination={pagination}
        setReload={setReload}
      />
    </div>
  );
}

export default DashboardHome;
