import { Col, Row } from "antd";
import React from "react";
import TrashDataTable from "./TrashDataTable";

const Trash = () => {
  return (
    <div>
      <Row>
          <Col lg={{span:24}}>
            <TrashDataTable/>
          </Col>
      </Row>
    </div>
  );
};

export default Trash;
