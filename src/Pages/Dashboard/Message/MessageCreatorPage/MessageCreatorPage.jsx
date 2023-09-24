import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const MessageCreatorPage = () => {
  return (
    <>
      <Link
        to="/dashboard/message"
        className="my-4 text-xl flex items-center "
        style={{ color: "black" }}
      >
        <IoIosArrowBack style={{ fontSize: "20px" }} /> Fahim
      </Link>
      <div className="border border-[#fb7c29] w-full h-96 rounded-md">
        <marquee>
          <h2 className="text-2xl text-orange-500">
            Chat system Under Construction
          </h2>
        </marquee>
      </div>
    </>
  );
};

export default MessageCreatorPage;
