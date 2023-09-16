import React from "react";
import img1 from "../../../Images/intro1.png";
import img2 from "../../../Images/intro2.png";

const WhoWeAre = () => {
  return (
    <div className="bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f] pb-28  ">
      <h1 className=" w-3/4 mx-auto text-center text-5xl font-bold pb-4">
        Who we are
      </h1>
      <div className="flex items-center w-3/4 mx-auto mt-10 gap-20">
        <div className="w-2/4">
          <h1 className="text-2xl  font-bold">
            Quis autem vel eum iure <br />
            reprehenderit qui in ea voluptate
          </h1>
          <p className="text-[#4B5563] mt-3">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderi.
          </p>
          <p className="text-[#4B5563] mt-3">
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-[#4B5563] mt-3">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderi.
          </p>
          <p className="text-[#4B5563] mt-3">
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-[#4B5563] mt-3">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderi.
          </p>
        </div>
        <div className="w-2/4 space-y-12">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
