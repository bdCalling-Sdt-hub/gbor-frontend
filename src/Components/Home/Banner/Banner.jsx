import React from "react";
import banner from "../../../Images/banner.png";

const Banner = () => {
  return (
    <div className="pt-12 text-center bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f] pb-28">
      <h1 className="text-center text-6xl font-bold text-[#252525]">
        Support and guide your <span className="text-[#ef4444]">content </span>
        <br />
        <span className="text-[#ef4444]">creators</span> for their success
        through
        <br />
        collaboration and assistance.
      </h1>
      <p className="w-2/4 mx-auto mt-5 text-[#4B5563]">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="w-3/4 mx-auto mt-10">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
