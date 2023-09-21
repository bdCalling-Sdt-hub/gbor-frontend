import React from "react";
import TransactionChart from "./TransactionChart";
import TransactionTable from "./TransactionTable";

const Transaction = () => {
  return (
    <div>
      <h2
        style={{ fontSize: "25px", marginBottom: "10px", fontWeight: "bold" }}
      >
        Transaction Ratio
      </h2>
      <TransactionChart />
      <h2
        style={{
          fontSize: "25px",
          marginTop: "50px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Transaction History
      </h2>
      <TransactionTable />
    </div>
  );
};

export default Transaction;
