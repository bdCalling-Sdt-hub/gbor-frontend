import { Button, Col, Input, Pagination, Row } from "antd";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import CreatorRequestCard from "../../../../Components/Common/CreatorRequestCard/CreatorRequestCard";

const CreatorRequest = () => {
  const [hoveredCol, setHoveredCol] = useState(null);
  const style = {
    cardStyle: {
      border: `1px solid orange`,

      cursor: "pointer",
      padding: "15px",
      textAlign: "center",
      borderRadius: "10px",
      transition: ".5s",
    },
    cardBtn: {
      color: "white",
    },
    cardHoverStyle: {
      boxShadow:
        "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    },
  };
  const items = [
    {
      id: 1,
      name: "Fahim",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
    {
      id: 2,
      name: "Kate",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
    {
      id: 3,
      name: "Berlin",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
    {
      id: 4,
      name: "Tokyo",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
    {
      id: 5,
      name: "Nairobi",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
    {
      id: 6,
      name: "Denver",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
    {
      id: 7,
      name: "Hulk",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
    {
      id: 8,
      name: "Harry",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
    {
      id: 9,
      name: "Jack",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
    {
      id: 10,
      name: "Sparrow",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
    {
      id: 11,
      name: "Professor",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
    {
      id: 12,
      name: "M",
      email: "fahim25@gmail.com",
      contact: "05454154154",
      img: "",
    },
  ];
  return (
    <div style={{ padding: "0px 60px" }}>
      <h2
        style={{ fontSize: "25px", marginBottom: "10px", fontWeight: "normal" }}
      >
        Search creator
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Input
          prefix={<CiSearch style={{ fontSize: "18px" }} />}
          placeholder="Search by Name/email"
          style={{
            height: "50px",
            border: `1px solid #fb7c29`,
          }}
        />
        <Button
          style={{
            background: "#fb7c29",
            color: "white",
            height: 50,
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

      <div>
        <Row gutter={[16, 16]}>
          {items.map((item) => (
            <CreatorRequestCard />
          ))}
        </Row>

        <Row className="justify-end mt-14 border py-4 rounded-b-md">
          <Col>
            <Pagination
              total={85}
              responsive={true}
              defaultCurrent={1}
              showTotal={(total) => (
                <h2 className="text-xl text-[#FB7C29] uppercase">
                  Total ${total} items
                </h2>
              )}
              showSizeChanger={false}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreatorRequest;
