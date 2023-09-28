import { Button, Input, Switch } from "antd";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import MessageTable from "./MessageTable";

const Message = () => {
  const [messageOpen, setMessageOpen] = useState(localStorage.message || true);
  const handleMessageSend = (e) => {
    setMessageOpen(e);
    localStorage.setItem("message", e);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-1 mb-2">
        {messageOpen ? (
          <p
            style={{
              fontSize: "25px",
              margin: "10px 0",
              fontWeight: "normal",
              color: "#fb7c29",
            }}
          >
            Send message to all creators
          </p>
        ) : (
          <h2
            style={{ fontSize: "25px", margin: "10px 0", fontWeight: "normal" }}
          >
            Search creator
          </h2>
        )}
        <Switch
          defaultChecked={messageOpen}
          onChange={handleMessageSend}
          checkedChildren="Hide"
          unCheckedChildren="Show"
          style={{ background: "#fb7c29" }}
        />
      </div>
      {messageOpen && (
        <div className="mb-8">
          <textarea
            placeholder="Write your message here"
            className="border border-[#fb7c29] w-full h-56 rounded-md outline-none p-2 text-[#fb7c29]"
            rows="10"
          ></textarea>
          <button className="w-full bg-[#fb7c29] text-white py-3 rounded-sm mt-2 mb-2">
            Send To All Creator
          </button>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Input
          prefix={<CiSearch style={{ fontSize: "18px" }} />}
          placeholder="Search creator by Name/Id"
          style={{ height: "50px", border: `1px solid #fb7c29` }}
        />
        <Button
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
