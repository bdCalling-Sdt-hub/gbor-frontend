import { Col, Row } from "antd";
import React from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import EarnHistoryTable from "./EarnHistoryTable";

const Earning = () => (
  <div style={{ padding: "0px 50px" }}>
    <Row
      gutter={{
        xs: 8,
        sm: 18,
        md: 24,
        lg: 45,
      }}
      style={{ marginTop: "20px" }}
    >
      <Col className="gutter-row" span={8}>
        <div className="bg-[#fb7c29] p-8 text-center flex flex-col items-center rounded-md space-y-4 text-white select-none">
          <HiOutlineCurrencyDollar style={{ width: "28px", height: "28px" }} />
          <h2 className="text-2xl">Today's income</h2>
          <h3 className="text-2xl">$ 250.00</h3>
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div className="bg-[#fb7c29] p-8 text-center flex flex-col items-center rounded-md space-y-4 text-white select-none">
          <HiOutlineCurrencyDollar style={{ width: "28px", height: "28px" }} />
          <h2 className="text-2xl">Weekly income</h2>
          <h3 className="text-2xl">$ 250.00</h3>
        </div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div className="bg-[#fb7c29] p-8 text-center flex flex-col items-center rounded-md space-y-4 text-white select-none">
          <HiOutlineCurrencyDollar style={{ width: "28px", height: "28px" }} />
          <h2 className="text-2xl">Monthly income</h2>
          <h3 className="text-2xl">$ 250.00</h3>
        </div>
      </Col>
    </Row>
    <h2 style={{ fontSize: "25px", margin: "30px 0px", fontWeight: "normal" }}>
      Daily Earnings
    </h2>

    <EarnHistoryTable />
  </div>
);

export default Earning;
