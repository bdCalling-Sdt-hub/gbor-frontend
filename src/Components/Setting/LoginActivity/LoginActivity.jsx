import { Col, Row } from "antd";
import React from "react";
import LoginActivityTable from "./LoginActivityTable";

const LoginActivity = () => {
  return (
    <div>
      <Row>
        <Col lg={{span:24}}>
          <LoginActivityTable/>
        </Col>
      </Row>
    </div>
  );
};

export default LoginActivity;
