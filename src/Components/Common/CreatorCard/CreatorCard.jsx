import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./creatorCard.css";

const CreatorCard = ({ data }) => {
  const {
    _id,
    fName,
    lName,
    userName,
    uploadId,
    website,
    socialLink,
    total_amount,
  } = data;
  const navigate = useNavigate();

  const handleContentCreator = (value) => {
    navigate(`/creators/${value}`);
  };

  return (
    <div className="border border-[#596575] p-2 rounded-lg text-center whoAreImg img-shadow card-container">
      <div className="overflow-hidden rounded-xl relative">
        <Link to={`/creators/${userName}`}>
          <img
            width="100%"
            style={{ height: "350px" }}
            className="transition duration-300"
            src={uploadId}
            alt=""
          />
        </Link>

        <div className="flex gap-2 icons">
          {socialLink?.youtube && (
            <a
              href={`https://www.youtube.com/@${socialLink?.youtube}`}
              target="_blank"
            >
              <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                <FaYoutube fontSize={28} color="#ff0000" />
              </div>
            </a>
          )}
          {socialLink?.instagram && (
            <a
              href={`https://www.instagram.com/${socialLink?.instagram}`}
              target="_blank"
            >
              <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                <FaInstagram fontSize={28} color="#ff3725" />
              </div>
            </a>
          )}
          {socialLink?.tiktok && (
            <a
              href={`https://www.tiktok.com/@${socialLink?.tiktok}`}
              target="_blank"
            >
              <div className="bg-black p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                <FaTiktok fontSize={28} color="#fff" />
              </div>
            </a>
          )}
          {socialLink?.facebook && (
            <a
              href={`https://www.facebook.com/${socialLink?.facebook}`}
              target="_blank"
            >
              <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                <FaFacebookF fontSize={28} color="#1877f2" />
              </div>
            </a>
          )}
        </div>
      </div>
      <div className="my-5">
        <h2 className="font-bold text-lg">{userName}</h2>
        <p className="font-medium">
          Gbôr reçu: <span className="font-normal">{total_amount}</span>
        </p>
      </div>
      <button
        className="bg-[#fb7c29] text-white px-4 w-full group py-3 rounded-md hover:bg-[#ef4444] transition"
        onClick={() => handleContentCreator(userName)}
      >
        Donner un Gbôr{" "}
        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-100">
          👊🏽
        </span>
      </button>
    </div>
  );
};

export default CreatorCard;
