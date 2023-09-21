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
      creatorId: creator.id,
      message: "button",
    };
  });

  const handleMessage = (id) => {
    navigate(`/dashboard/message/${id}`);
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
            onClick={() => handleMessage(record.creatorId)}
            type="text"
            className="bg-[#fb7c29] p-1 px-2 rounded"
          >
            <RiMessage2Line style={{ fontSize: "20px", color: "#fff" }} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        className="no-hover"
      />
    </div>
  );
};

export default MessageTable;
