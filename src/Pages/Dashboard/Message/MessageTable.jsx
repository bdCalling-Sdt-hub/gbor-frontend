import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { RiMessage2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import img from "../../../Images/user.png";
const { Title, Text } = Typography;

const MessageTable = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("../fakeDB.json")
      .then((res) => res.json())
      .then((data) => {
        setCreators(data);
        setLoading(false);
      });
  }, []);

  const data = creators.map((creator) => {
    return {
      profile: <img width="45px" src={img} />,
      username: creator.name,
      creatorId: (
        <p className="text-gray-400">
          Creator ID: <span className="text-black">{creator.id}</span>
        </p>
      ),
      message: creator,
    };
  });

  const handleMessage = (e) => {
    navigate(`/dashboard/message/${e.message.id}`);
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
        loading={loading}
      />
    </div>
  );
};

export default MessageTable;
