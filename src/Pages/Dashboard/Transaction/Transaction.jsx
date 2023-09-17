import React from "react";
import TransactionChart from "./TransactionChart";

const Transaction = () => {
  return (
    <div>
      <h2
        style={{ fontSize: "25px", marginBottom: "10px", fontWeight: "normal" }}
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
        All Host List With Their Information
      </h2>
    </div>
  );
};

export default Transaction;
