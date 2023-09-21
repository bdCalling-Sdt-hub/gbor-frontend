import { Button, Input } from "antd";
import React, { useState } from "react";
import colors from "../../../Constant/colors";
import MessageTable from "./MessageTable";

const Message = () => {
  const [hoveredCol, setHoveredCol] = useState(null);
  const style = {
    cardStyle: {
      border: `1px solid ${colors.primaryColor}`,

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
      <textarea className="border w-full" rows="10"></textarea>
      <h2
        style={{ fontSize: "25px", marginBottom: "10px", fontWeight: "normal" }}
      >
        Search creator
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Input
          placeholder="search by Name/Id"
          style={{ height: "44px", border: `1px solid ${colors.primaryColor}` }}
        />
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
        Creator List
      </h2>

      <MessageTable />
    </div>
  );
};

export default Message;
