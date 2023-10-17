import { Col, Row } from "antd";
import React from "react";

import { HiOutlineCurrencyDollar } from "react-icons/hi";

import "swiper/css";
import "swiper/css/pagination";
import CreatorTransactionTable from "./CreatorTransactionTable";

function CreatorDashboardHome() {
  const contentStyle = {
    height: "450px",
    width: "100%",
    borderRadius: "15px",
  };

  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  return (
    <div>
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
            <HiOutlineCurrencyDollar
              style={{ width: "28px", height: "28px" }}
            />
            <h2 className="text-2xl">Today's income</h2>
            <h3 className="text-2xl">$ 250.00</h3>
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
            <HiOutlineCurrencyDollar
              style={{ width: "28px", height: "28px" }}
            />
            <h2 className="text-2xl">Weekly income</h2>
            <h3 className="text-2xl">$ 250.00</h3>
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
            <HiOutlineCurrencyDollar
              style={{ width: "28px", height: "28px" }}
            />
            <h2 className="text-2xl">Monthly income</h2>
            <h3 className="text-2xl">$ 250.00</h3>
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
      <CreatorTransactionTable />
    </div>
  );
}

export default CreatorDashboardHome;
