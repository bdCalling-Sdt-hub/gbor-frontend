import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, Table, Typography } from "antd";
import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DrawerPage from "../../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;

const CreatorInfoTable = ({ handlePagination, setReload, handleSearch }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const { creatorsData, pagination } = useSelector((state) => state.creators);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [creatorData, setCreatorData] = useState(null);

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setCreatorData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setCreatorData(null);
  };

  const data = creatorsData.map((item) => {
    return {
      creatorId: item._id,
      name: item.userName,
      webLink: `mongbor.com/creators/${item.userName}`,
      allMessage: (
        <Link
          className="text-orange-500"
          to={`/dashboard/creator-messages/${item._id}`}
        >
          Click Here
        </Link>
      ),
      action: item,
    };
  });

  const columns = [
    {
      title: "CREATOR ID",
      dataIndex: "creatorId",
      key: "creatorId",
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "WEB LINK",
      dataIndex: "webLink",
      key: "webLink",
      responsive: ["lg"],
    },
    {
      title: "All Comments",
      dataIndex: "allMessage",
      key: "allMessage",
      responsive: ["lg"],
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
            <BsEye style={{ fontSize: "20px", color: "#595959" }} />
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
                Creator ID {creatorData?.action?._id}
              </Title>
              <Text style={{ color: "white" }}>
                See all details about creator{" "}
                <span className="text-lg">{creatorData?.action?.userName}</span>
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
        {creatorData && (
          <DrawerPage
            creatorData={creatorData}
            setReload={setReload}
            setIsDrawerVisible={setIsDrawerVisible}
          />
        )}
      </Drawer>
    </>
  );
};
export default CreatorInfoTable;
