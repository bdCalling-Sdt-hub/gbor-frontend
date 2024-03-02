import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Payment } from "../../../../ReduxSlice/paymentSlice";
import TransactionTable from "./TransactionTable";

const Transaction = () => {
  const dispatch = useDispatch();
  const { incomes, pagination } = useSelector((state) => state.payment);
  const [reload, setReload] = useState(0);

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

  return (
    <div>
      {/* <h2
        style={{ fontSize: "25px", marginBottom: "30px", fontWeight: "normal" }}
      >
        Transaction Ratio
      </h2>
      <TransactionChart /> */}
      <h2
        style={{
          fontSize: "25px",

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
        setReload={setReload}
      />
    </div>
  );
};

export default Transaction;
