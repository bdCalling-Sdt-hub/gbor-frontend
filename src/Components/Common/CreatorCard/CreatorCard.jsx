import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./creatorCard.css";

const CreatorCard = ({ data }) => {
  const { _id, fName, lName, uploadId } = data;
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
            style={{ height: "350px" }}
            className="transition duration-300"
            src={uploadId}
            alt=""
          />
        </div>
        <div className="flex gap-2 icons">
          <a href="https://www.youtube.com/" target="_blank">
            <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer">
              <FaYoutube fontSize={28} color="#ff0000" />
            </div>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer">
              <FaInstagram fontSize={28} color="#ff3725" />
            </div>
          </a>
          <a href="https://www.tiktok.com/" target="_blank">
            <div className="bg-black p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer">
              <FaTiktok fontSize={28} color="#fff" />
            </div>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer">
              <FaFacebookF fontSize={28} color="#1877f2" />
            </div>
          </a>
        </div>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-lg">{fName + " " + lName}</h2>
        <p className="font-medium">
          Gbor Received: <span className="font-normal">145</span>
        </p>
      </div>
      <button
        className="bg-[#fb7c29] text-white px-4 w-full py-3 rounded-md hover:bg-[#ef4444] transition"
        onClick={() => handleContentCreator(_id)}
      >
        Give a Shot
      </button>
    </div>
  );
};

export default CreatorCard;
