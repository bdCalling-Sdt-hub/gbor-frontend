import { Button, Drawer, Table, Typography,Badge } from "antd";
import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;

const data = [
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"#fb7c29",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Approve</div>
  },
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"red",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Cancel</div>
  },
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"#fb7c29",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Approve</div>
  },
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"red",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Cancel</div>
  },
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"#fb7c29",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Approve</div>
  },
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"red",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Cancel</div>
  },
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"#fb7c29",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Approve</div>
  },
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"red",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Cancel</div>
  },
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"#fb7c29",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Approve</div>
  },
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"red",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Cancel</div>
  },
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"#fb7c29",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Approve</div>
  },
  {
    name: "Kate Winslate",
    email: "kate@gmail.com",
    contact: " 014845454545",
    type: "pdf",
    status:<div style={{color:"white",backgroundColor:"red",textAlign:"center",padding:"10px",borderRadius:"5px",fontWeight:"bold"}}>Cancel</div>
  }
  
];

const HostKycTable = () => {
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
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      responsive: ["md"],
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
      key: "actions",
      responsive: ["lg"],
      render: (_, record) => (
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={() => showDrawer(record)}
            type="text"
            style={{ marginRight: "10px" }}
          >
            <BsEye style={{ fontSize: "25px", color: "#999999" }} />
          </Button>
          <Button type="text">
            <RiDeleteBin5Line style={{ fontSize: "25px", color: "#999999" }} />
          </Button>
        </div>
      ),
    },
  ];

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [hostData, setHostData] = useState(null);

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setHostData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setHostData(null);
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
                Invoice# Trip No.{hostData?.tripNo}
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
        width={600}
      >
        {hostData && <DrawerPage hostData={hostData} />}
      </Drawer>
    </div>
  );
};

export default HostKycTable;
