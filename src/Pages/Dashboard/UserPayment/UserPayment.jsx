import { Col, Row } from "antd";
import React from "react";
import PaymentListTable from "./PaymentListTable";
import UserPaymentRatioChart from "./UserPaymentRatioChart";

function UserPayment() {
  return (
    <div style={{ padding: "0 60px" }}>
      <Row>
        <h2
          style={{
            fontSize: "25px",
            marginBottom: "10px",
            fontWeight: "normal",
          }}
        >
          User Payment Ratio
        </h2>

        <Col lg={{ span: 24 }}>
          <UserPaymentRatioChart />
        </Col>
        <h2
          style={{ fontSize: "25px", margin: "30px 0px", fontWeight: "normal" }}
        >
          Payment list
        </h2>
      </Row>
      <Row>
        <Col lg={{ span: 24 }}>
          <PaymentListTable />
        </Col>
      </Row>
    </div>
  );
}

export default UserPayment;
