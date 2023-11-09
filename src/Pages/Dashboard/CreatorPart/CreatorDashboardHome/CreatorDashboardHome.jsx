import { Col, Row } from "antd";
import React, { useEffect } from "react";

import { HiOutlineCurrencyDollar } from "react-icons/hi";

import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import { Payment } from "../../../../ReduxSlice/paymentSlice";
import CreatorTransactionTable from "./CreatorTransactionTable";

function CreatorDashboardHome() {
  const dispatch = useDispatch();
  const { incomesTotal, incomes, pagination } = useSelector(
    (state) => state.payment
  );

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
      limit: 2,
      type: "dashboard",
    };
    dispatch(Payment(value));
  };

  useEffect(() => {
    const value = {
      gborAmount: "",
      search: "",
      page: 1,
      limit: 2,
      type: "dashboard",
    };

    dispatch(Payment(value));
  }, []);

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
            <h3 className="text-2xl">$ {incomesTotal?.today}</h3>
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
            <h3 className="text-2xl">$ {incomesTotal?.lastWeek}</h3>
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
            <h3 className="text-2xl">$ {incomesTotal?.lastMonth}</h3>
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
      <CreatorTransactionTable
        incomes={incomes}
        pagination={pagination}
        handlePagination={handlePagination}
      />
    </div>
  );
}

export default CreatorDashboardHome;
