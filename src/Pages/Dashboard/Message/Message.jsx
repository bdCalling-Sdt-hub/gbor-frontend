import { Button, Input } from "antd";
import React from "react";
import { CiSearch } from "react-icons/ci";
import colors from "../../../Constant/colors";
import MessageTable from "./MessageTable";

const Message = () => {
  return (
    <div style={{ padding: "0px 60px" }}>
      <div>
        <textarea
          placeholder="Write your message here"
          className="border border-[#fb7c29] w-full h-56 rounded-md outline-none p-2 text-[#fb7c29]"
          rows="10"
        ></textarea>
        <button className="w-full bg-[#fb7c29] text-white py-3 rounded-sm mt-2 mb-2">
          Send To All Creator
        </button>
      </div>
      <h2 style={{ fontSize: "25px", margin: "10px 0", fontWeight: "normal" }}>
        Search creator
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Input
          prefix={<CiSearch style={{ fontSize: "18px" }} />}
          placeholder="Search by Name/Id"
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
