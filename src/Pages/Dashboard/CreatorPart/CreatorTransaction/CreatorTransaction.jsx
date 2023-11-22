import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Payment } from "../../../../ReduxSlice/paymentSlice";
import CreatorTransactionChart from "./CreatorTransactionChart";
import CreatorTransactionTable from "./CreatorTransactionTable";

const CreatorTransaction = () => {
  const dispatch = useDispatch();
  const { incomes, pagination } = useSelector((state) => state.payment);

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
  }, []);

  return (
    <div>
      <h2
        style={{ fontSize: "25px", marginBottom: "30px", fontWeight: "normal" }}
      >
        Transaction Ratio
      </h2>
      <CreatorTransactionChart />
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
      <CreatorTransactionTable
        incomes={incomes}
        pagination={pagination}
        handlePagination={handlePagination}
      />
    </div>
  );
};

export default CreatorTransaction;
