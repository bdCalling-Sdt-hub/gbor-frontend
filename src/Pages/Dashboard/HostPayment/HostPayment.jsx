import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Progress, Row } from "antd";
import React from "react";
import "./HostPayment.css";
import HostPaymentTable from "./HostPaymentTable";
function HostPayment() {
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
          Host Payments
        </h2>
        <Col lg={{ span: 24 }}>
          <div className="" style={{ display: "flex", gap: "15px" }}>
            <Input
              size="large"
              placeholder="Search by name/email/phone"
              prefix={<SearchOutlined style={{ color: "#cccccc" }} />}
            />
            <Button
              style={{
                height: "50px",
                width: "300px",
                backgroundColor: "#fb7c29",
                color: "#fff",
                fontSize: "20px",
              }}
            >
              Search
            </Button>
          </div>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginBottom: "20px", marginTop: "50px" }}>
        <Col
          className="gutter-row"
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <div
            className="host-payment-card payment"
            style={{ border: "1px solid #00a991" }}
          >
            <div className="progressbar">
              <Progress type="circle" percent={75} strokeColor="#00a991" />
            </div>
            <div className="total-payment">
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "300",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                Total Payments
              </h1>
              <h3
                style={{
                  fontSize: "1.5rem",
                  letterSpacing: ".2rem",
                  marginBottom: "15px",
                  color: "#00a991",
                }}
              >
                $ 25,50,20.00
              </h3>
            </div>
          </div>
        </Col>
        <Col
          className="gutter-row"
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <div
            className="host-payment-card pending"
            style={{ border: "1px solid red" }}
          >
            <div className="progressbar">
              <Progress type="circle" percent={22} strokeColor="red" />
            </div>
            <div className="total-payment">
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "300",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                Total Pendings
              </h1>
              <h3
                style={{
                  fontSize: "1.5rem",
                  letterSpacing: "1px",
                  marginBottom: "15px",
                  color: "red",
                }}
              >
                $ 505,202.00
              </h3>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={{ span: 24 }}>
          <HostPaymentTable />
        </Col>
      </Row>
    </div>
  );
}

export default HostPayment;
