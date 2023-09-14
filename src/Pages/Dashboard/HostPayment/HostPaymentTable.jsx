import { Button, Drawer, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;
import {
 
  CloseOutlined,
  
} from '@ant-design/icons';


const data = [
  {
    key: "1",
    tripno: "10",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "2",
    tripno: "11",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "3",
    tripno: "12",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "4",
    tripno: "13",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "5",
    tripno: "14",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "6",
    tripno: "15",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "7",
    tripno: "16",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "8",
    tripno: "17",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "9",
    tripno: "15",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "10",
    tripno: "16",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "11",
    tripno: "17",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "12",
    tripno: "15",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "13",
    tripno: "16",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "14",
    tripno: "17",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "15",
    tripno: "15",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "16",
    tripno: "16",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "17",
    tripno: "17",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  }
];
const HostPaymentTable = () =>{
    const [rentData, setRentData] = useState([]); // Data fetched from the server
    const [totalItems, setTotalItems] = useState(0); // Total number of items
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const pageSize = 10;


    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [userInfoData, setUserInfoData] = useState(null);
  
    const showDrawer = (record) => {
      setIsDrawerVisible(true);
      console.log(record)
      setUserInfoData(record);
    };
  
    const closeDrawer = () => {
      setIsDrawerVisible(false);
      setInvoiceData(null);
    };


    const columns = [
      {
        title: "Trip No",
        dataIndex: "tripno",
        key: "tripno",
      },
      {
        title: "Time",
        dataIndex: "time",
        key: "time",
        responsive: ["md"],
      },
      {
        title: "User Name",
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
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
        responsive: ["md"],
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
      },
     
      {
        title: "PRINT/VIEW",
        dataIndex: "printView",
        key: "printView",
        responsive: ["lg"],
        render: (_,record) => (
          <div style={{}}>
              <Button type="text" style={{ marginRight: "10px",paddingBottom:"35px" }}>
                <AiOutlinePrinter style={{ fontSize: "30px", color: "#999999" }} />
              </Button>
              <Button onClick={() => showDrawer(record)} type="text" style={{paddingBottom:"35px"}}>
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
          const response = await fetch(`/api/data?page=${currentPage}&pageSize=${pageSize}`);
          const result = await response.json();
    
          setData(result.data);
          setTotalItems(result.totalItems);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

    const handlePageChange=(page)=>{
        setCurrentPage(page);
        console.log(currentPage)
    }

    return(
      <>
        <Table columns={columns} dataSource={data} pagination={{
            pageSize,
            showSizeChanger:false,
            total: 5000,
            current: currentPage,
            onChange: handlePageChange,
          }}/>
          <Drawer
          
          title={
            <div>
              <Typography>
                <Title level={5} strong>
                  Invoice # trip no.- {userInfoData && userInfoData.tripno}
                </Title>
                <Text>See all information about the trip no. - {userInfoData && userInfoData.tripno}</Text>
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
              <Button style={{borderRadius:"100%",backgroundColor:"white",color:"red",height:"50px",width:"50px",textAlign:"center"}} onClick={closeDrawer}><CloseOutlined /></Button>
             
            </Space>
          }

        >
          {userInfoData && <DrawerPage userInfoData={userInfoData} />}
        </Drawer>

        </>
    )

};
export default HostPaymentTable;
