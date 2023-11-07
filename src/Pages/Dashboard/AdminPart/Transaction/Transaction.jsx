import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Payment } from "../../../../ReduxSlice/paymentSlice";
import TransactionChart from "./TransactionChart";
import TransactionTable from "./TransactionTable";

const Transaction = () => {
  const dispatch = useDispatch();
  const { incomes } = useSelector((state) => state.payment);

  useEffect(() => {
    const value = {
      type: "today-income",
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
      <TransactionTable incomes={incomes} />
    </div>
  );
};

export default Transaction;
