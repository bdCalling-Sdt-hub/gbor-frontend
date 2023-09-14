import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import React from "react";
import UserInfoTable from "./UserInfoTable";

function UserInfo() {
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
          All user info
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

      <Row>
        <h2
          style={{ fontSize: "25px", margin: "30px 0px", fontWeight: "normal" }}
        >
          Users information
        </h2>
      </Row>

      <Row>
        <Col lg={{ span: 24 }}>
          <UserInfoTable />
        </Col>
      </Row>
    </div>
  );
}

export default UserInfo;
