import { Col } from "antd";
import React from "react";
import img from "../../../Images/Photo.png";

const CreatorRequestCard = () => {
  return (
    <Col span={6}>
      <div className="border border-[#fb7c29] bg-orange-50 rounded-md text-center shadow-[0px 0px 4px 0px rgba(0, 0, 0, 0.20)] p-5">
        <img src={img} className="block mx-auto" alt="" />
        <h2 className="text-xl text-[#FB7C29] mt-2">Fahim</h2>
        <p>fahim@gmail.com</p>
        <div className="space-x-2 mt-4">
          <button className="border border-[#FB7C29] text-[#FB7C29] px-6 py-2 rounded">
            Cancel
          </button>
          <button className="border border-[#FB7C29] bg-[#FB7C29] text-white px-6 py-2 rounded">
            Approve
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CreatorRequestCard;
