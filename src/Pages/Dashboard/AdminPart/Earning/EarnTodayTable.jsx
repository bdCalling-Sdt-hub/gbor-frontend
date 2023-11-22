import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, Table, Typography } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { BsPrinter } from "react-icons/bs";
import { RxDownload } from "react-icons/rx";
import DrawerPage from "../../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;

const EarnTodayTable = ({
  incomes,
  setReload,
  pagination,
  handlePagination,
  handleSearch,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
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

  const data = incomes.map((item) => {
    return {
      date: moment(item.createdAt).format("llll"),
      creatorName: item.creator?.fName + " " + item.creator?.lName,
      donarName: item.donarName,
      amount: item.amount,
      action: item,
    };
  });

  const columns = [
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
    handleSearch(page);
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
                Transaction ID
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
        {earningData && (
          <DrawerPage
            earningData={earningData}
            setReload={setReload}
            setIsDrawerVisible={setIsDrawerVisible}
          />
        )}
      </Drawer>
    </>
  );
};
export default EarnTodayTable;
