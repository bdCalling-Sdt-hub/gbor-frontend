import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../Images/creator.png";

const CreatorCard = ({ data }) => {
  const { id, name, received } = data;
  const navigate = useNavigate();
  const handleContentCreator = (id) => {
    navigate(`/our-creators/${id}`);
  };
  return (
    <div className="border border-[#596575] p-2 rounded-lg text-center whoAreImg img-shadow">
      <div className="overflow-hidden rounded-xl">
        <img
          width="100%"
          className="transition duration-300"
          src={img}
          alt=""
        />
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
