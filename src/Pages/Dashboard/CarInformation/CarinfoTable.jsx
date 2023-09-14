import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;

const data = [
  {
    key: "1",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
  {
    key: "2",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
  {
    key: "3",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
  {
    key: "4",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
  {
    key: "5",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
  {
    key: "6",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
  {
    key: "7",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
  {
    key: "8",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
  {
    key: "9",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
  {
    key: "10",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
  {
    key: "11",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
  {
    key: "12",
    carmodel: "toyota 120",
    lincenseno: "kkk12396",
    registerdate: "18 Aug 2023",
    owner: "Tushar",
    status: "Active",
    printView: "Button",
  },
];

const CarInfoTable = () => {
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

  const columns = [
    {
      title: "Car Model",
      dataIndex: "carmodel",
      key: "invoiceNo",
    },
    {
      title: "Lincense No",
      dataIndex: "lincenseno",
      key: "lincenseno",
      responsive: ["md"],
    },
    {
      title: "Register Date",
      dataIndex: "registerdate",
      key: "registerdate",
      responsive: ["lg"],
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      responsive: ["md"],
    },

    {
      title: "PRINT/VIEW",
      dataIndex: "printView",
      key: "printView",
      responsive: ["lg"],
      render: (_, record) => (
        <div style={{}}>
          <Button
            type="text"
            style={{ marginRight: "10px", paddingBottom: "35px" }}
          >
            <AiOutlinePrinter style={{ fontSize: "30px", color: "#999999" }} />
          </Button>
          <Button
            onClick={() => showDrawer(record)}
            type="text"
            style={{ paddingBottom: "35px" }}
          >
            <LiaSaveSolid style={{ fontSize: "30px", color: "#999999" }} />
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    // Fetch data from the server when the current page changes
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    // Replace this with your actual API request to fetch data based on pagination
    try {
      const response = await fetch(
        `/api/data?page=${currentPage}&pageSize=${pageSize}`
      );
      const result = await response.json();

      setData(result.data);
      setTotalItems(result.totalItems);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(currentPage);
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize,
          showSizeChanger: false,
          total: 300,
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
    </div>
  );
};
export default CarInfoTable;
