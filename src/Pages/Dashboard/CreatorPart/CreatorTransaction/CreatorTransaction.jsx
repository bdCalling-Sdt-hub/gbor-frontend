import React from "react";
import CreatorTransactionChart from "./CreatorTransactionChart";
import CreatorTransactionTable from "./CreatorTransactionTable";

const CreatorTransaction = () => {
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
      <CreatorTransactionTable />
    </div>
  );
};

export default CreatorTransaction;
