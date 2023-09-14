import { Button, Col, Input, Pagination, Row, Table } from "antd";
import React,{useState} from "react";
import img from "../../../Images/Photo.png";
import colors from "../../../Constant/colors";
const HostRequest = () => {
  const [hoveredCol, setHoveredCol] = useState(null);
  const style = {
    cardStyle: {
      border:`1px solid ${colors.primaryColor}`,
      
      cursor:"pointer",
      padding: "15px",
      textAlign: "center",
      borderRadius: "10px",
      transition:".5s"
    },
    cardBtn: {
      color: "white",
    },
    cardHoverStyle:{
       boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
     
    }
  };
  const items = [
    [
      {
        id: 1,
        name: "Fahim",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
      {
        id: 2,
        name: "Kate",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
      {
        id: 3,
        name: "Berlin",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
      {
        id: 4,
        name: "Tokyo",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
      {
        id: 5,
        name: "Nairobi",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
      {
        id: 6,
        name: "Denver",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
      {
        id: 7,
        name: "Hulk",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
      {
        id: 8,
        name: "Harry",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
      {
        id: 9,
        name: "Jack",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
      {
        id: 10,
        name: "Sparrow",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
      {
        id: 11,
        name: "Professor",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
      {
        id: 12,
        name: "M",
        email: "fahim25@gmail.com",
        contact: "05454154154",
        img: { img },
      },
    ],
  ];
  return (
    <div style={{ padding: "0px 60px" }}>
      <h2
        style={{ fontSize: "25px", marginBottom: "10px", fontWeight: "normal" }}
      >
        Search creator
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Input placeholder="search by Name/Id" style={{ height: "44px",border:`1px solid ${colors.primaryColor}` }} />
        <Button
          style={{
            background: "#fb7c29",
            color: "white",
            height: 45,
            width: "180px",
          }}
        >
          Search
        </Button>
      </div>

      <h2
        style={{
          fontSize: "25px",
          marginTop: "50px",
          marginBottom: "20px",
          fontWeight: "normal",
        }}
      >
        Creator Request
      </h2>
      
      <div
        
       
      >
        <Row gutter={[16, 16]}>
          {[...Array(12).keys()].map((item) => {
            return (
              <>
                <Col span={6} >
                  <div style={{ ...style.cardStyle, ...(hoveredCol === item?style.cardHoverStyle:{}) }}  onMouseEnter={() => setHoveredCol(item)} onMouseLeave={() => setHoveredCol(null)}>
                    <img src={img} alt="" />
                    <h2 style={{ color: "#fb7c29", marginBottom: "5px" }}>
                      Jack Sparrow
                    </h2>
                    <p>jacks20@gmail.com</p>
                    <p style={{ margin: "8px 0" }}>+8478448548</p>
                    <div>
                      <Button
                        className={style.cardBtn}
                        style={{
                          background: "#D7263D",
                          ...style.cardBtn,
                          marginRight: "10px",
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        style={{ background: "#fb7c29", ...style.cardBtn }}
                      >
                        Approve
                      </Button>
                    </div>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>

        <Row style={{justifyContent:"center",marginTop:"30px"}}>
          <Col>
          <Pagination
               total={85}
               responsive={true}
               defaultCurrent={1}
               showTotal={(total) => `Total ${total} items`}
               showSizeChanger={false}
           />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HostRequest;
