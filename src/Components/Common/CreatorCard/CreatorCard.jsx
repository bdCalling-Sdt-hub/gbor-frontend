import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import img from "../../../Images/creator.png";
import "./creatorCard.css";

const CreatorCard = ({ data }) => {
  const { id, name, received } = data;
  const navigate = useNavigate();
  const handleContentCreator = (id) => {
    navigate(`/our-creators/${id}`);
  };
  return (
    <div className="border border-[#596575] p-2 rounded-lg text-center whoAreImg img-shadow card-container">
      <div className="overflow-hidden rounded-xl relative">
        <div>
          <img
            width="100%"
            className="transition duration-300"
            src={img}
            alt=""
          />
        </div>
        <div className="flex gap-2 icons">
          <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer">
            <GrLinkedinOption fontSize={28} color="#0a66c2" />
          </div>
          <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer">
            <FaInstagram fontSize={28} color="#ff3725" />
          </div>
          <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer">
            <FaTwitter fontSize={28} color="#1da1f2" />
          </div>
          <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer">
            <FaFacebookF fontSize={28} color="#1877f2" />
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="font-bold">
          Gbor Received: <span className="font-normal">{received}</span>
        </p>
      </div>
      <button
        className="bg-[#fb7c29] text-white px-4 w-full py-3 rounded-md hover:bg-[#ef4444] transition"
        onClick={() => handleContentCreator(id)}
      >
        Give a Shot
      </button>
    </div>
  );
};

export default CreatorCard;
