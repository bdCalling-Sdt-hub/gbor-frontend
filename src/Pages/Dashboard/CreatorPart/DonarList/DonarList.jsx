import { CloseOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Drawer,
  Input,
  Popover,
  Radio,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsPrinter } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustments } from "react-icons/hi";
import { RxDownload } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { DonarApi } from "../../../../ReduxSlice/donarSlice";
const { Title, Text } = Typography;

const DonarList = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const pageSize = 10;
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [transactionData, setTransactionData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { donar, pagination } = useSelector((state) => state.donar);
  const [searchData, setSearchData] = useState("");

  const handleAdjustSearch = () => {
    const data = {
      page: 1,
      limit: 10,
      search: searchData,
      gborAmount: donationAmount,
    };

    dispatch(DonarApi(data));
  };

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setTransactionData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setTransactionData(null);
  };

  const handleSearch = (page) => {
    const data = {
      page: page,
      limit: 10,
      search: searchData,
      gborAmount: donationAmount,
    };
    if (searchData !== "") {
      dispatch(DonarApi(data));
    }
  };

  const handlePagination = (page) => {
    const data = {
      page: page,
      limit: 10,
      search: searchData,
      gborAmount: donationAmount,
    };
    if (searchData === "") {
      dispatch(DonarApi(data));
    }
  };

  useEffect(() => {
    const data = {
      page: 1,
      limit: 10,
      search: searchData,
      gborAmount: donationAmount,
    };
    if (searchData === "") {
      dispatch(DonarApi(data));
    }
  }, [searchData]);

  const data = donar.map((item) => {
    return {
      donarName: item.donarName,
      totalDonation: item.amount,
      gbor: item.gborAmount,
      action: item,
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

  //search filter content here---->
  const content = (
    <div>
      <p
        style={{
          fontSize: "15px",
          color: "#fb7c29",
        }}
      >
        Donation Amount (GBOR)
      </p>
      <Radio.Group
        onChange={(e) => setDonationAmount(e.target.value)}
        value={donationAmount}
        className="mt-3 "
      >
        <Space direction="vertical">
          <Radio value={"0-50"}>0-50</Radio>
          <Radio value={"51-100"}>51-100</Radio>
          <Radio value={"101-150"}>101-150</Radio>
          <Radio value={"151-200"}>151-200</Radio>
          <Radio value={"200-250"}>200-250</Radio>
        </Space>
      </Radio.Group>
      <button
        onClick={handleAdjustSearch}
        className="w-full my-3 text-center rounded py-2 text-[#fb7c29] hover:bg-orange-500 hover:text-white block"
        style={{
          fontSize: "15px",
          border: "1px solid #fb7c29",
        }}
      >
        Apply
      </button>
    </div>
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    handlePagination(page);
    handleSearch(page);
  };

  return (
    <div>
      <h2 className="text-2xl mb-5">Search</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <Input
          prefix={<CiSearch style={{ fontSize: "20px" }} />}
          suffix={
            <Popover
              placement="bottomRight"
              title={
                <div
                  style={{
                    fontSize: "18px",
                    color: "#fb7c29",
                    borderBottom: "1px solid #fb7c29",
                    paddingBottom: "5px",
                  }}
                >
                  Filter
                </div>
              }
              content={content}
              trigger="click"
              overlayClassName="w-96"
            >
              <HiOutlineAdjustments
                style={{
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "#fb7c29",
                }}
              />
            </Popover>
          }
          placeholder="Search by Name"
          style={{ height: "50px", border: `1px solid #fb7c29` }}
          onChange={(e) => setSearchData(e.target.value)}
        />

        <Button
          onClick={handleSearch}
          style={{
            background: "#fb7c29",
            color: "white",
            height: 50,
            width: "180px",
            border: "none",
          }}
        >
          Search
        </Button>
      </div>
      <h2 className="text-2xl mb-5">Donor List</h2>
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
                Donor Information
              </Title>
              <Text style={{ color: "white" }}>
                See all information about the {transactionData?.donarName}
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
                <p className="text-lg font-medium">Payment Amount</p>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <p className="text-lg font-light">
                  {moment(transactionData?.action.createdAt).format("llll")}
                </p>

                <p className="text-lg font-light">
                  {transactionData?.totalDonation}
                </p>
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
