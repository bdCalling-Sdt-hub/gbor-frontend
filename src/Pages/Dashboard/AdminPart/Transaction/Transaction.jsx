import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Payment } from "../../../../ReduxSlice/paymentSlice";
import TransactionChart from "./TransactionChart";
import TransactionTable from "./TransactionTable";

const Transaction = () => {
  const dispatch = useDispatch();
  const { incomes, pagination } = useSelector((state) => state.payment);

  useEffect(() => {
    const value = {
      page: 1,
      limit: 1,
      type: "today-income",
    };
    dispatch(Payment(value));
  }, []);

  const handlePagination = (page) => {
    const value = {
      page: page,
      limit: 1,
      type: "today-income",
    };
    dispatch(Payment(value));
  };

  return (
    <div>
      <h2
        style={{ fontSize: "25px", marginBottom: "30px", fontWeight: "normal" }}
      >
        Transaction Ratio
      </h2>
      <TransactionChart />
      <h2
        style={{
          fontSize: "25px",
          marginTop: "50px",
          marginBottom: "20px",
          fontWeight: "normal",
        }}
      >
        Transaction History
      </h2>
      <TransactionTable
        incomes={incomes}
        handlePagination={handlePagination}
        pagination={pagination}
      />
    </div>
  );
};

export default Transaction;
