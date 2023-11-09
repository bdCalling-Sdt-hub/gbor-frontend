import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, Table, Typography } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { BsPrinter } from "react-icons/bs";
import { RxDownload } from "react-icons/rx";
import DrawerPage from "../../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;

const CreatorEarnTodayTable = ({ incomes, pagination, handlePagination }) => {
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const pageSize = 2;
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [creatorEarningData, setCreatorEarningData] = useState(null);

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setCreatorEarningData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setCreatorEarningData(null);
  };

  const data = incomes.map((item) => {
    return {
      date: moment(item.createdAt).format("llll"),
      donarName: item.donarName,
      amount: item.amount,
      action: item,
    };
  });

  const columns = [
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
    handlePagination(page);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize,
          showSizeChanger: false,
          total: pagination?.totalDocuments,
          current: currentPage,
          onChange: handlePageChange,
        }}
      />
      <Drawer
        title={
          <div>
            <Typography>
              <Title level={5} style={{ color: "white" }} strong>
                {creatorEarningData?.donarName}
              </Title>
              <Text style={{ color: "white" }}>
                See all information about the {creatorEarningData?.donarName}
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
        {creatorEarningData && (
          <DrawerPage creatorEarningData={creatorEarningData} />
        )}
      </Drawer>
    </>
  );
};
export default CreatorEarnTodayTable;
