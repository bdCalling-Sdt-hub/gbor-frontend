import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, Table, Typography } from "antd";
import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { RxDownload } from "react-icons/rx";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;

const TransactionTable = () => {
  const [rentData, setRentData] = useState([]); // Data fetched from the server
  const [totalItems, setTotalItems] = useState(0); // Total number of items
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const pageSize = 5;

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setInvoiceData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setInvoiceData(null);
  };

  const data = [...Array(15).keys()].map((item) => {
    return {
      transactionId: 5645451521,
      creatorName: "Fahim",
      donarName: "Kate",
      date: "4/03/2015",
      received: 545,
      cfa: 7548,
      action: "button",
    };
  });

  const columns = [
    {
      title: "TRANSACTION ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "CREATOR NAME",
      dataIndex: "creatorName",
      key: "creatorName",
      responsive: ["md"],
    },
    {
      title: "DONAR NAME",
      dataIndex: "donarName",
      key: "donarName",
      responsive: ["lg"],
    },
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "RECEIVED",
      dataIndex: "received",
      key: "received",
      responsive: ["md"],
    },
    {
      title: "CFA",
      dataIndex: "cfa",
      key: "cfa",
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
          <Button type="text" style={{ marginRight: "10px" }}>
            <BsEye style={{ fontSize: "20px", color: "#595959" }} />
          </Button>
          <Button type="text">
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
              <Title level={5} strong>
                Invoice# Trip No.{invoiceData?.invoiceNo}
              </Title>
              <Text>See all information about the trip no. 68656</Text>
            </Typography>
          </div>
        }
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        width={500}
        closable={false}
        extra={
          <Space>
            <Button
              style={{
                borderRadius: "100%",
                backgroundColor: "white",
                color: "red",
                height: "50px",
                width: "50px",
                textAlign: "center",
              }}
              onClick={closeDrawer}
            >
              <CloseOutlined />
            </Button>
          </Space>
        }
      >
        {invoiceData && <DrawerPage invoiceData={invoiceData} />}
      </Drawer>
    </>
  );
};
export default TransactionTable;
