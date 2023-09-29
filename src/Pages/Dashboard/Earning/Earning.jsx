import { Button, Col, Input, Popover, Radio, Row, Space } from "antd";

import React, { useState } from "react";
import { CiDollar, CiSearch } from "react-icons/ci";
import { HiOutlineAdjustments } from "react-icons/hi";
import { useParams } from "react-router-dom";
import EarnMonthlyTable from "./EarnMonthlyTable";
import EarnTodayTable from "./EarnTodayTable";
import EarnWeaklyTable from "./EarnWeaklyTable";

const Earning = () => {
  const [donationAmount, setDonationAmount] = useState(1);
  const [timePeriod, setTimePeriod] = useState(1);
  const { income } = useParams();

  console.log(income);

  const handleAdjustSearch = () => {
    console.log(donationAmount, timePeriod);
  };

  //search filter content here---->
  const content = (
    <div>
      <p
        style={{
          fontSize: "15px",
          color: "#fb7c29",
        }}
      >
        Donation Amount (GBOR)
      </p>
      <Radio.Group
        onChange={(e) => setDonationAmount(e.target.value)}
        value={donationAmount}
        className="mt-3 "
      >
        <Space direction="vertical">
          <Radio value={1}>0-5</Radio>
          <Radio value={2}>51-100</Radio>
          <Radio value={3}>101-150</Radio>
          <Radio value={4}>151-201-250</Radio>
          <Radio value={5}>250+</Radio>
        </Space>
      </Radio.Group>
      <p
        className="my-3 "
        style={{
          fontSize: "15px",
          color: "#fb7c29",
        }}
      >
        Time Period
      </p>
      <Radio.Group
        onChange={(e) => setTimePeriod(e.target.value)}
        value={timePeriod}
      >
        <Space direction="vertical">
          <Radio value={1}>5days</Radio>
          <Radio value={2}>10days</Radio>
          <Radio value={3}>15days</Radio>
          <Radio value={4}>20days</Radio>
          <Radio value={5}>25days</Radio>
          <Radio value={5}>30days</Radio>
        </Space>
      </Radio.Group>
      <button
        onClick={handleAdjustSearch}
        className="w-full my-3 text-center rounded py-2 text-[#fb7c29] hover:bg-orange-500 hover:text-white block"
        style={{
          fontSize: "15px",
          border: "1px solid #fb7c29",
        }}
      >
        Apply Changes
      </button>
    </div>
  );

  return (
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
          <div
            className={`${
              income === "today-income"
                ? "bg-white border text-orange-500 border-orange-500"
                : "text-white "
            } bg-[#fb7c29] p-8  text-center flex flex-col items-center rounded-md space-y-4 select-none drop-shadow duration-200`}
          >
            <CiDollar style={{ width: "28px", height: "28px" }} />
            <h2 className="text-2xl">Today's Earning</h2>
            <h3 className="text-2xl font-medium">$ 250.00</h3>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div
            className={`${
              income === "weekly-income"
                ? "bg-white border text-orange-500 border-orange-500"
                : "text-white "
            } bg-[#fb7c29] p-8  text-center flex flex-col items-center rounded-md space-y-4 select-none drop-shadow duration-200`}
          >
            <CiDollar style={{ width: "28px", height: "28px" }} />
            <h2 className="text-2xl">Weekly Earning</h2>
            <h3 className="text-2xl font-medium">$ 250.00</h3>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div
            className={`${
              income === "monthly-income"
                ? "bg-white border text-orange-500 border-orange-500"
                : "text-white "
            } bg-[#fb7c29] p-8  text-center flex flex-col items-center rounded-md space-y-4 select-none drop-shadow duration-200`}
          >
            <CiDollar style={{ width: "28px", height: "28px" }} />
            <h2 className="text-2xl">Monthly Earning</h2>
            <h3 className="text-2xl font-medium">$ 250.00</h3>
          </div>
        </Col>
      </Row>
      <h2
        style={{ fontSize: "25px", margin: "30px 0px", fontWeight: "normal" }}
      >
        {income === "today-income"
          ? "Daily Earnings"
          : income === "weekly-income"
          ? "Weekly Earnings"
          : "Monthly Earnings"}
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <Input
          prefix={<CiSearch style={{ fontSize: "20px" }} />}
          suffix={
            <Popover
              placement="bottomRight"
              title={
                <div
                  style={{
                    fontSize: "18px",
                    color: "#fb7c29",
                    borderBottom: "1px solid #fb7c29",
                    paddingBottom: "5px",
                  }}
                >
                  Filter
                </div>
              }
              content={content}
              trigger="click"
              overlayClassName="w-96"
            >
              <HiOutlineAdjustments
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "#fb7c29",
                }}
              />
            </Popover>
          }
          placeholder="Search by Name/Id"
          style={{ height: "50px", border: `1px solid #fb7c29` }}
        />

        <Button
          style={{
            background: "#fb7c29",
            color: "white",
            height: 50,
            width: "180px",
            border: "none",
          }}
        >
          Search
        </Button>
      </div>

      {income === "today-income" && <EarnTodayTable />}
      {income === "weekly-income" && <EarnWeaklyTable />}
      {income === "monthly-income" && <EarnMonthlyTable />}
    </div>
  );
};

export default Earning;
