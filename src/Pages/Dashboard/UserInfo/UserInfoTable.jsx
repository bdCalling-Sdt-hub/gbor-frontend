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
    name: "tushar",
    email: "18 Jul, 2023  4:30pm",
    contact: "Tushar",
    joiningdate: "Credit Card",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "2",
    name: "tushar",
    email: "18 Jul, 2023  4:30pm",
    contact: "Tushar",
    joiningdate: "Credit Card",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "3",
    name: "tushar",
    email: "18 Jul, 2023  4:30pm",
    contact: "Tushar",
    joiningdate: "Credit Card",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "4",
    name: "tushar",
    email: "18 Jul, 2023  4:30pm",
    contact: "Tushar",
    joiningdate: "Credit Card",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "5",
    name: "tushar",
    email: "18 Jul, 2023  4:30pm",
    contact: "Tushar",
    joiningdate: "Credit Card",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "6",
    name: "tushar2",
    email: "18 Jul, 2023  4:30pm",
    contact: "Tushar",
    joiningdate: "Credit Card",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "7",
    name: "tushar",
    email: "18 Jul, 2023  4:30pm",
    contact: "Tushar",
    joiningdate: "Credit Card",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "8",
    name: "tushar",
    email: "18 Jul, 2023  4:30pm",
    contact: "Tushar",
    joiningdate: "Credit Card",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "9",
    name: "tushar",
    email: "18 Jul, 2023  4:30pm",
    contact: "Tushar",
    joiningdate: "Credit Card",
    trips: "$850.00",
    
    printView: "Button",
  },
  {
    key: "10",
    name: "tushar",
    email: "18 Jul, 2023  4:30pm",
    contact: "Tushar",
    joiningdate: "Credit Card",
    trips: "$850.00",
    
    printView: "Button",
  }
 
];

const UserInfoTable = () =>{
    const [rentData, setRentData] = useState([]); // Data fetched from the server
    const [totalItems, setTotalItems] = useState(0); // Total number of items
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const pageSize = 5;


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
        title: "NAME",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "EMAIL",
        dataIndex: "email",
        key: "email",
        responsive: ["md"],
      },
      {
        title: "CONTACT",
        dataIndex: "contact",
        key: "contact",
        responsive: ["lg"],
      },
      {
        title: "JOINING DATE",
        dataIndex: "joiningdate",
        key: "joiningdate",
      },
      {
        title: "TRIPS",
        dataIndex: "trips",
        key: "trips",
        responsive: ["md"],
      },
      
      {
        title: "ACTIONS",
        dataIndex: "actions",
        key: "actions",
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
                  User Information
                </Title>
                <Text>See all information about the user</Text>
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
export default UserInfoTable;
