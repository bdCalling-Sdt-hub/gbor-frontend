import { Avatar } from "antd";
import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CreatorMessage = () => {
  const chat = [
    {
      id: 1,
      sender: true,
      image: "https://picsum.photos/200/300",
      message:
        "I apologize for the misunderstanding. If you're looking for a message to be displayed on the router's interface to inform the user about the administrator's access",
      time: "1 hr ago",
    },
    {
      id: 2,
      sender: false,
      image: "https://picsum.photos/200/300",
      message:
        "Thank you for your understanding, and we appreciate your cooperation in maintaining the network's functionality.",
      time: "2 hr ago",
    },
    {
      id: 3,
      sender: true,
      image: "https://picsum.photos/200/300",
      message:
        "I apologize for the misunderstanding. If you're looking for a message to be displayed on the router's interface to inform the user about the administrator's access",
      time: "1 hr ago",
    },
    {
      id: 4,
      sender: false,
      image: "https://picsum.photos/200/300",
      message:
        "Thank you for your understanding, and we appreciate your cooperation in maintaining the network's functionality.",
      time: "2 hr ago",
    },
    {
      id: 5,
      sender: true,
      image: "https://picsum.photos/200/300",
      message:
        "Thank you for your understanding, and we appreciate your cooperation in maintaining the network's functionality.",
      time: "2 hr ago",
    },
    {
      id: 6,
      sender: false,
      image: "https://picsum.photos/200/300",
      message:
        "Thank you for your understanding, and we appreciate your cooperation in maintaining the network's functionality.",
      time: "2 hr ago",
    },
  ];

  const handleMessage = () => {
    console.log(ongoingMessage);
  };

  return (
    <>
      <Link
        to="/dashboard"
        className="my-4 text-xl flex items-center "
        style={{ color: "black" }}
      >
        <IoIosArrowBack style={{ fontSize: "20px" }} /> <span>Fahim</span>
      </Link>
      <div className="border border-[#fb7c29] w-full rounded-md  bg-orange-50">
        <div className="w-full h-[570px] overflow-y-auto flex flex-col scrollbar rounded p-1 px-5">
          {chat.map((chatData) =>
            chatData.sender ? (
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
                    src={chatData.image}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <p className="text-gray-400  text-right mr-12 mt-1">
                  {chatData.time}
                </p>
              </div>
            ) : (
              <div className="mb-4">
                <div className="flex gap-2">
                  <Avatar
                    size={40}
                    src={chatData.image}
                    style={{ borderRadius: "50%" }}
                  />
                  <p className="border-2 border-orange-500 w-1/2 rounded-r-xl rounded-bl-xl p-4  relative">
                    {chatData.message}
                  </p>
                </div>
                <p className="text-gray-400 ml-12 mt-1"> {chatData.time}</p>
              </div>
            )
          )}
        </div>
        <div className="flex gap-2 p-1 bg-orange-100 rounded">
          <input
            type="text"
            onChange={(e) => setOngoingMessage(e.target.value)}
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

export default CreatorMessage;
