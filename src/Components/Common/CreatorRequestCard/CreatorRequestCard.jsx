import { Button, Col } from "antd";
import React from "react";
import img from "../../../Images/Photo.png";

const CreatorRequestCard = () => {
  return (
    <Col span={6}>
      <div className="border-2 border-[#fb7c29] rounded-md text-center shadow-[0px 0px 4px 0px rgba(0, 0, 0, 0.20)] p-5 space-y-2">
        <img src={img} className="block mx-auto" alt="" />
        <h2 className="text-xl text-[#FB7C29]">Fahim</h2>
        <p>fahim@gmail.com</p>
        <div className="space-x-2">
          <Button className="border border-[#FB7C29] text-[#FB7C29] px-6">
            Cancel
          </Button>
          <Button className="bg-[#FB7C29] text-white px-6">Approve</Button>
        </div>
      </div>
    </Col>
  );
};

export default CreatorRequestCard;
