import { Button, Input, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import Swal from "sweetalert2";
import axios from "../../../../../Config";
import { ContentCreators } from "../../../../ReduxSlice/creatorsSlice";
import MessageTable from "./MessageTable";

const Message = () => {
  const [messageBox, setMessageBox] = useState(localStorage.box || true);
  const { userInfo } = JSON.parse(localStorage.yourInfo);
  const dispatch = useDispatch();
  const [messageForAll, setMessageForAll] = useState("");
  const [creatorsList, setCreatorList] = useState([]);
  const [searchData, setSearchData] = useState("");

  const handleShow = () => {
    setMessageBox(!messageBox);
    localStorage.setItem("box", messageBox);
  };

  const token = localStorage.token;

  //socket implement
  let socket = io("http://167.99.205.107:10000");

  socket.on("connect", () => {
    console.log("Connected");
  });

  const data = {
    uid: userInfo._id,
  };

  useEffect(() => {
    socket.emit("get-all-chats", data);
    socket.on("all-chats", (data) => {
      setCreatorList(data);
    });
  }, []);

  const handleSendMessageToAll = () => {
    // Ensure the required data is available
    if (
      !socket ||
      !creatorsList ||
      creatorsList.length === 0 ||
      !messageForAll ||
      !userInfo
    ) {
      console.error("Missing required data or socket connection.");
      return;
    }

    if (messageForAll !== "") {
      const chatMessages = creatorsList.map((creator) => ({
        message: messageForAll,
        sender: userInfo._id,
        chat: creator._id,
      }));

      axios
        .post("api/messages/multiple-messages", chatMessages, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.status === 200) {
            Swal.fire({
              title: "Successfully",
              text: "Send message to all",
              icon: "success",
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    const data = {
      search: searchData,
      limit: 6,
      page: 1,
    };
    if (searchData === "") {
      dispatch(ContentCreators(data));
    }
  }, [searchData]);

  const handlePagination = (page) => {
    const data = {
      search: searchData,
      limit: 6,
      page: page,
    };
    dispatch(ContentCreators(data));
  };

  const handleSearch = (page) => {
    const data = {
      search: searchData,
      limit: 6,
      page: page,
    };
    if (searchData !== "") {
      dispatch(ContentCreators(data));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-1 mb-2">
        {messageBox ? (
          <p
            style={{
              fontSize: "25px",
              margin: "10px 0",
              fontWeight: "normal",
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
          defaultChecked={messageBox}
          onChange={handleShow}
          checkedChildren="Hide"
          unCheckedChildren="Show"
          style={{ background: "#fb7c29" }}
        />
      </div>
      {messageBox && (
        <div className="mb-8">
          <textarea
            placeholder="Write your message here"
            className="border border-[#fb7c29] w-full h-56 rounded-md outline-none p-2 text-[#fb7c29]"
            rows="10"
            onChange={(e) => setMessageForAll(e.target.value)}
          ></textarea>
          <button
            className="w-full bg-[#fb7c29] text-white py-3 rounded-sm mt-2 mb-2"
            onClick={handleSendMessageToAll}
          >
            Send message to all creators
          </button>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Input
          prefix={<CiSearch style={{ fontSize: "18px" }} />}
          placeholder="Search creator by Name"
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

      <MessageTable
        handlePagination={handlePagination}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default Message;
