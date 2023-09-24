import { Button, Table, Typography } from "antd";
import React from "react";
import { BsPrinter } from "react-icons/bs";
import { RxDownload } from "react-icons/rx";
const { Title, Text } = Typography;

const DonarList = () => {
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
          <Button type="text" style={{ marginRight: "10px" }}>
            <RxDownload style={{ fontSize: "20px", color: "#595959" }} />
          </Button>
          <Button type="text">
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
    </div>
  );
};

export default DonarList;
