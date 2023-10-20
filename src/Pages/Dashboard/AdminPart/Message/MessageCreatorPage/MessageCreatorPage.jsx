import { Avatar } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";

const MessageCreatorPage = () => {
  const { id } = useParams();
  const [fieldData, setFieldData] = useState("");
  const { userInfo } = JSON.parse(localStorage.yourInfo);
  const [chat, setChat] = useState([]);
  const chatContainerRef = useRef(null);
  const navigate = useNavigate();
  let socket = io("http://192.168.10.18:10000");

  socket.on("connect", () => {
    console.log("Connected");
  });

  const data = {
    uid: id,
  };

  useEffect(() => {
    socket.emit("join-chat", data);
    socket.on("all-messages", (data) => {
      setChat(data);
    });
  }, []);

  console.log(chat);

  const handleMessage = (e) => {
    e.preventDefault();
    console.log("click", fieldData);
    const data = {
      message: fieldData,
      chat: id,
      sender: userInfo._id,
    };
    socket.emit("add-new-message", data);

    //empty filed
    setFieldData("");
  };

  const handleBack = () => {
    socket.emit("leave-j");
    navigate("/dashboard/message");
  };

  function getTimeAgo(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);

    const secondsAgo = Math.floor((now - date) / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const yearsAgo = Math.floor(daysAgo / 365);

    if (yearsAgo > 0) {
      return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
    } else if (daysAgo > 0) {
      return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
    } else if (hoursAgo > 0) {
      return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
    } else if (minutesAgo > 0) {
      return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
    } else {
      return "Just now";
    }
  }

  return (
    <>
      <button
        type="text"
        onClick={handleBack}
        className="my-4 text-xl flex items-center "
        style={{ color: "black" }}
      >
        <IoIosArrowBack style={{ fontSize: "20px" }} /> <span>Fahim</span>
      </button>
      <div className="border border-[#fb7c29] w-full rounded-md  bg-orange-50 ">
        <div
          className="w-full h-[570px] overflow-y-auto flex flex-col scrollbar rounded p-1 px-5"
          ref={chatContainerRef}
        >
          {chat.map((chatData) =>
            chatData?.sender?._id === userInfo._id ? (
              <div className="mb-4">
                <div
                  className="flex gap-2"
                  style={{ justifyContent: "flex-end" }}
                >
                  <p className="bg-orange-500 w-1/2 rounded-l-xl rounded-br-xl p-4 text-white relative">
                    {chatData.message}
                  </p>
                  <Avatar
                    size={40}
                    src={chatData.sender?.uploadId}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <p className="text-gray-400  text-right mr-12 mt-1">
                  {getTimeAgo(chatData.createdAt)}
                </p>
              </div>
            ) : (
              <div className="mb-4">
                <div className="flex gap-2">
                  <Avatar
                    size={40}
                    src={chatData.sender?.uploadId}
                    style={{ borderRadius: "50%" }}
                  />
                  <p className="border-2 border-orange-500 w-1/2 rounded-r-xl rounded-bl-xl p-4  relative">
                    {chatData.message}
                  </p>
                </div>
                <p className="text-gray-400 ml-12 mt-1">
                  {" "}
                  {getTimeAgo(chatData.createdAt)}
                </p>
              </div>
            )
          )}
        </div>
        <div className="flex gap-2 p-1 bg-orange-100 rounded">
          <input
            type="text"
            onBlur={(e) => setFieldData(e.target.value)}
            name="message"
            placeholder="Type message..."
            className="w-full h-12 border border-orange-300 rounded px-3 outline-none text-lg text-orange-500 placeholder:text-orange-200"
          />
          <button className="px-2" onClick={handleMessage}>
            <BsFillSendFill fontSize={30} color="#fb7c29" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MessageCreatorPage;
