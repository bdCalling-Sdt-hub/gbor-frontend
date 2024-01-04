import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { CiDollar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Payment } from "../../../../ReduxSlice/paymentSlice";
import CreatorEarnMonthlyTable from "./CreatorEarnMonthlyTable";
import CreatorEarnTodayTable from "./CreatorEarnTodayTable";
import CreatorEarnWeaklyTable from "./CreatorEarnWekklyTable";

const CreatorEarning = () => {
  const { income } = useParams();
  const dispatch = useDispatch();
  const { incomesTotal, incomes, pagination } = useSelector(
    (state) => state.payment
  );

  const handlePagination = (page) => {
    const value = {
      gborAmount: "",
      search: "",
      page: page,
      limit: 10,
      type: income,
    };
    dispatch(Payment(value));
  };

  useEffect(() => {
    const value = {
      gborAmount: "",
      search: "",
      page: 1,
      limit: 10,
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
            <h2 className="text-2xl">Today's Earning</h2>
            <h3 className="text-2xl font-medium">$ {incomesTotal?.today}</h3>
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
            <h2 className="text-2xl">Weekly Earning</h2>
            <h3 className="text-2xl font-medium">$ {incomesTotal?.lastWeek}</h3>
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
            <h2 className="text-2xl">Monthly Earning</h2>
            <h3 className="text-2xl font-medium">
              $ {incomesTotal?.lastMonth}
            </h3>
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

      {income === "today-income" && (
        <CreatorEarnTodayTable
          incomes={incomes}
          pagination={pagination}
          handlePagination={handlePagination}
        />
      )}
      {income === "weekly-income" && (
        <CreatorEarnWeaklyTable incomes={incomes} />
      )}
      {income === "monthly-income" && (
        <CreatorEarnMonthlyTable incomes={incomes} />
      )}
    </div>
  );
};

export default CreatorEarning;
