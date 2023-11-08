import { Button, Col, Input, Popover, Radio, Row, Space } from "antd";

import React, { useEffect, useState } from "react";
import { CiDollar, CiSearch } from "react-icons/ci";
import { HiOutlineAdjustments } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Payment } from "../../../../ReduxSlice/paymentSlice";
import EarnMonthlyTable from "./EarnMonthlyTable";
import EarnTodayTable from "./EarnTodayTable";
import EarnWeaklyTable from "./EarnWeaklyTable";

const Earning = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const { income } = useParams();
  const dispatch = useDispatch();
  const { incomesTotal, incomes, pagination } = useSelector(
    (state) => state.payment
  );
  const [reload, setReload] = useState(1);
  const [searchData, setSearchData] = useState("");

  const handleAdjustSearch = () => {
    console.log(donationAmount);
    const value = {
      gborAmount: donationAmount,
      search: searchData,
      page: 1,
      limit: 1,
      type: income,
    };

    dispatch(Payment(value));
  };

  const handleSearch = () => {
    const value = {
      gborAmount: donationAmount,
      search: searchData,
      page: 1,
      limit: 1,
      type: income,
    };
    if (searchData !== "") {
      dispatch(Payment(value));
    }
  };

  const handlePagination = (page) => {
    const value = {
      gborAmount: donationAmount,
      search: searchData,
      page: page,
      limit: 1,
      type: income,
    };
    if (searchData === "") {
      dispatch(Payment(value));
    }
  };

  useEffect(() => {
    const value = {
      gborAmount: donationAmount,
      search: searchData,
      page: 1,
      limit: 1,
      type: income,
    };
    if (searchData === "") {
      dispatch(Payment(value));
    }
  }, [income, reload, searchData]);

  //search filter content here---->j
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
        className="mt-3"
      >
        <Space direction="vertical">
          <Radio value={"0-50"}>0-50</Radio>
          <Radio value={"51-100"}>51-100</Radio>
          <Radio value={"101-150"}>101-150</Radio>
          <Radio value={"151-200"}>151-200</Radio>
          <Radio value={"201-250"}>250+</Radio>
        </Space>
      </Radio.Group>
      <button
        onClick={handleAdjustSearch}
        className="w-full my-3 text-center rounded py-2 text-white bg-orange-500 hover:bg-white hover:text-orange-500 block"
        style={{
          fontSize: "15px",
          border: "1px solid #fb7c29",
        }}
      >
        Apply changes
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
            <CiDollar style={{ width: "28px", height: "28px" }} />
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
            <CiDollar style={{ width: "28px", height: "28px" }} />
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
            onChange={(e) => setSearchData(e.target.value)}
          />

          <Button
            onClick={handleSearch}
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
      )}

      {income === "today-income" && (
        <EarnTodayTable
          incomes={incomes}
          setReload={setReload}
          handlePagination={handlePagination}
          pagination={pagination}
        />
      )}
      {income === "weekly-income" && <EarnWeaklyTable incomes={incomes} />}
      {income === "monthly-income" && <EarnMonthlyTable incomes={incomes} />}
    </div>
  );
};

export default Earning;
