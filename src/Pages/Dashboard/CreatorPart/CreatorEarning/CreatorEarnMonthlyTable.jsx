import { CloseOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Row, Space, Table, Typography } from "antd";
import React, { useState } from "react";
import { BsPrinter } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { RxDownload } from "react-icons/rx";
const { Title, Text } = Typography;

const CreatorEarnMonthlyTable = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const pageSize = 5;

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [earningData, setEarningData] = useState(null);

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setEarningData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setEarningData(null);
  };

  const data = [...Array(15).keys()].map((item) => {
    return {
      months: "Jan 23",
      totalDonar: 10,
      amount: 470.0,
      action: "button",
    };
  });

  const columns = [
    {
      title: "MONTHS",
      dataIndex: "months",
      key: "months",
    },
    {
      title: "TOTAL DONAR",
      dataIndex: "totalDonar",
      key: "totalDonar",
    },

    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: (
        <div className="text-right">
          <p>ACTION</p>
        </div>
      ),
      dataIndex: "action",
      key: "action",
      responsive: ["lg"],
      render: (_, record) => (
        <div style={{ textAlign: "right" }}>
          <Button
            onClick={() => showDrawer(record)}
            type="text"
            style={{ marginRight: "10px" }}
          >
            <BsPrinter style={{ fontSize: "20px", color: "#595959" }} />
          </Button>
          <Button onClick={() => showDrawer(record)} type="text">
            <RxDownload style={{ fontSize: "20px", color: "#595959" }} />
          </Button>
        </div>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(currentPage);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize,
          showSizeChanger: false,
          total: 15,
          current: currentPage,
          onChange: handlePageChange,
        }}
      />
      <Drawer
        title={
          <div>
            <Typography>
              <Title level={5} style={{ color: "white" }} strong>
                Monthly Income # July 23, 2023
              </Title>
              <Text style={{ color: "white" }}>
                See total income in July 23, 2023
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
        <Row>
          <Col span={12}>
            <p className="text-lg font-medium">Total Donar</p>
            <p className="text-lg font-medium">Payment Amount</p>
          </Col>
          <Col span={12} className="text-right">
            <p className="text-lg font-medium gap-1 flex items-center justify-end text-gray-500">
              <span>60</span> <HiUserGroup fontSize={20} color="#fb7c29" />
            </p>
            <p className="text-lg font-medium gap-1 flex items-center justify-end text-gray-500">
              <span>520056</span> <FiDollarSign fontSize={20} color="#fb7c29" />
            </p>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};
export default CreatorEarnMonthlyTable;
