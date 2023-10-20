import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { RiMessage2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { ContentCreators } from "../../../../ReduxSlice/creatorsSlice";
const { Title, Text } = Typography;

const MessageTable = () => {
  const [creators, setCreators] = useState([]);
  const { creatorsData } = useSelector((state) => state.creators);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = JSON.parse(localStorage.yourInfo);

  useEffect(() => {
    dispatch(ContentCreators());
  }, []);

  console.log(creatorsData);

  const data = creatorsData?.map((creator) => {
    return {
      profile: (
        <img
          style={{ width: "50px", height: "50px", borderRadius: "100%" }}
          src={creator.uploadId}
        />
      ),
      username: creator.fName,
      creatorId: (
        <p className="text-gray-400">
          Creator ID: <span className="text-black">{creator._id}</span>
        </p>
      ),
      message: creator,
    };
  });

  const handleMessage = (e) => {
    let socket = io("http://192.168.10.18:10000");

    socket.on("connect", () => {
      console.log("Connected");
    });

    const chatInfo = {
      participants: [e.message._id, userInfo._id],
    };

    const data = {
      chatInfo,
      uid: userInfo._id,
    };

    socket.emit("add-new-chat", data);
    socket.on("chat-id-check", (data) => {
      console.log(data);
      navigate(`/dashboard/message/${data._id}`);
    });
  };

  const columns = [
    {
      title: "PROFILE",
      dataIndex: "profile",
      key: "profile",
    },
    {
      title: "USER NAME",
      dataIndex: "username",
      key: "username",
      responsive: ["lg"],
    },
    {
      title: "CREATOR ID",
      dataIndex: "creatorId",
      key: "creatorId",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      responsive: ["lg"],
      render: (
        _,
        record // Use the second parameter 'record'
      ) => (
        <div className="text-right ">
          <button
            onClick={() => handleMessage(record)}
            type="text"
            className="bg-[#fb7c29] p-1 px-2 rounded"
          >
            <RiMessage2Line style={{ fontSize: "25px", color: "#fff" }} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table
        rowClassName={"rowMessage"}
        showHeader={false}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default MessageTable;
