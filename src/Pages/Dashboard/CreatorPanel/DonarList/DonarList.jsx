import { CloseOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Row, Space, Table, Typography } from "antd";
import React, { useState } from "react";
import { BsPrinter } from "react-icons/bs";
import { RxDownload } from "react-icons/rx";
const { Title, Text } = Typography;

const DonarList = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [transactionData, setTransactionData] = useState(null);

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setTransactionData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setTransactionData(null);
  };

  const data = [...Array(10).keys()].map((item) => {
    return {
      donarName: "Fahim",
      totalDonation: 4105,
      gbor: 50,
    };
  });
  const columns = [
    {
      title: "DONAR NAME",
      dataIndex: "donarName",
      key: "donarName",
    },
    {
      title: "Total Donation",
      dataIndex: "totalDonation",
      key: "totalDonation",
      responsive: ["md"],
    },
    {
      title: "GBOR",
      dataIndex: "gbor",
      key: "gbor",
      responsive: ["lg"],
    },
    {
      title: (
        <div style={{ textAlign: "right" }}>
          <p>ACTION</p>
        </div>
      ),
      dataIndex: "action",
      key: "action",
      responsive: ["lg"],
      render: (
        _,
        record // Use the second parameter 'record'
      ) => (
        <div style={{ textAlign: "right" }}>
          <Button
            onClick={() => showDrawer(record)}
            type="text"
            style={{ marginRight: "10px" }}
          >
            <RxDownload style={{ fontSize: "20px", color: "#595959" }} />
          </Button>
          <Button onClick={() => showDrawer(record)} type="text">
            <BsPrinter style={{ fontSize: "20px", color: "#595959" }} />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl mb-5">Donar List</h2>
      <Table columns={columns} dataSource={data} />
      <Drawer
        title={
          <div>
            <Typography>
              <Title level={5} style={{ color: "white" }} strong>
                Donor Information
              </Title>
              <Text style={{ color: "white" }}>
                See all information about the transaction id no. 68656
              </Text>
            </Typography>
          </div>
        }
        headerStyle={{ background: "#fb7c29", color: "#fff" }}
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        width={600}
        closable={false}
        extra={
          <Space>
            <Button
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "100%",
                backgroundColor: "#f5f5f5",
                color: "#fb7c29",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={closeDrawer}
            >
              <CloseOutlined />
            </Button>
          </Space>
        }
      >
        <>
          <div>
            <h2 className="text-2xl font-medium mb-2">Donar Information</h2>
            <Row>
              <Col span={12} style={{ textAlign: "left" }}>
                <p className="text-lg font-medium">Time</p>
                <p className="text-lg font-medium">Date</p>
                <p className="text-lg font-medium">Payment Method</p>
                <p className="text-lg font-medium">Payment Amount</p>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <p className="text-lg font-light">11:00pm</p>
                <p className="text-lg font-light">10/5/2023</p>
                <p className="text-lg font-light">Visa Card</p>
                <p className="text-lg font-light">45</p>
              </Col>
            </Row>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              position: "absolute",
              bottom: 10,
            }}
          >
            <Button
              block
              style={{
                border: "1px solid #fb7c29",
                color: "#fb7c29",
                height: 50,
                width: "270px",
              }}
            >
              Download
            </Button>
            <Button
              block
              style={{
                background: "#fb7c29",
                color: "white",
                height: 50,
                width: "270px",
              }}
            >
              Print
            </Button>
          </div>
        </>
      </Drawer>
    </div>
  );
};

export default DonarList;
