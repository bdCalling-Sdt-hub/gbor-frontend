import { Col, Row } from "antd";

import React, { useEffect } from "react";
import { CiDollar } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Payment } from "../../../../ReduxSlice/paymentSlice";
import CreatorEarnMonthlyTable from "./CreatorEarnMonthlyTable";
import CreatorEarnTodayTable from "./CreatorEarnTodayTable";
import CreatorEarnWeaklyTable from "./CreatorEarnWekklyTable";

const CreatorEarning = () => {
  const { income } = useParams();
  const dispatch = useDispatch();

  console.log(income);

  useEffect(() => {
    const value = {
      gborAmount: "",
      search: "",
      page: 1,
      limit: 1,
      type: income,
    };

    dispatch(Payment(value));
  }, [income]);

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

      {income === "today-income" && <CreatorEarnTodayTable />}
      {income === "weekly-income" && <CreatorEarnWeaklyTable />}
      {income === "monthly-income" && <CreatorEarnMonthlyTable />}
    </div>
  );
};

export default CreatorEarning;
