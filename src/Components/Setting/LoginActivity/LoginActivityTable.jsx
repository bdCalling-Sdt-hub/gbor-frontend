import { Table, Typography, message } from "antd";
import React from "react";
const { Title, Text } = Typography;

const LoginActivityTable = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info("Now! Sign Out will not work.😎");
  };

  const data = [
    {
      browser: "Chrome",
      device: "Windows 11",
      location: "Rampura",
      time: "22/05/2023",
      actions: "Button",
    },
    {
      browser: "Firefox",
      device: "Windows 10",
      location: "Moghbazer",
      time: "22/05/2023",
      actions: "Button",
    },
    {
      browser: "Microsoft Eadg",
      device: "Huawei Y9",
      location: "Comilla",
      time: "22/05/2023",
      actions: "Button",
    },
    {
      browser: "Safari",
      device: "Iphone 14 pro",
      location: "Mohakhali",
      time: "22/05/2023",
      actions: "Button",
    },
  ];

  const columns = [
    {
      title: "BROWSER",
      dataIndex: "browser",
      key: "browser",
    },
    {
      title: "DEVICE",
      dataIndex: "device",
      key: "device",
      responsive: ["md"],
    },
    {
      title: "LOCATION",
      dataIndex: "location",
      key: "location",
      responsive: ["lg"],
    },
    {
      title: "TIME",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
      key: "actions",
      responsive: ["lg"],
      render: (_, record) => (
        <div style={{ textAlign: "center" }}>
          <button
            type="text"
            style={style.signOutBtn}
            onClick={handleSignOutDevice}
          >
            Sign Out
          </button>
        </div>
      ),
    },
  ];

  const style = {
    signOutBtn: {
      background: "#ffe1cd",
      color: "#ff8a0d",
      borderRadius: "3px",
      padding: "7px 20px",
      border: 0,
      cursor: "pointer",
    },
  };

  const handleSignOutDevice = () => {
    info();
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
      {contextHolder}
    </div>
  );
};

export default LoginActivityTable;
