import { Button, Drawer, Table, Typography } from "antd";
import React, { useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;

const data = [
  {
    tripNo: "1373700510",

    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "2",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "3",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
];

const EarnHistoryTable = () => {
  const columns = [
    {
      title: "TRIP NO.",
      dataIndex: "tripNo",
      key: "tripNO",
    },
    {
      title: "TIME",
      dataIndex: "time",
      key: "time",
      responsive: ["md"],
    },
    {
      title: "USER NAME",
      dataIndex: "username",
      key: "username",
      responsive: ["lg"],
    },
    {
      title: "METHOD",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
      responsive: ["md"],
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "PRINT/VIEW",
      dataIndex: "printView",
      key: "printView",
      responsive: ["lg"],
      render: (
        _,
        record // Use the second parameter 'record'
      ) => (
        <div style={{ textAlign: "center" }}>
          <Button type="text" style={{ marginRight: "10px" }}>
            <AiOutlinePrinter style={{ fontSize: "30px", color: "#999999" }} />
          </Button>
          <Button onClick={() => showDrawer(record)} type="text">
            <LiaSaveSolid style={{ fontSize: "30px", color: "#999999" }} />
          </Button>
        </div>
      ),
    },
  ];

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

  return (
    <div>
      <Table columns={columns} dataSource={data} />
      <Drawer
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>
              <Title level={5} strong>
                Invoice# Trip No.{earningData?.tripNo}
              </Title>
              <Text>See all information about the trip no. 68656</Text>
            </Typography>
            <Button type="text" onClick={closeDrawer}>
              <IoMdClose fontSize={25} />
            </Button>
          </div>
        }
        closable={false}
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        width={500}
      >
        {earningData && <DrawerPage earningData={earningData} />}
      </Drawer>
    </div>
  );
};

export default EarnHistoryTable;
