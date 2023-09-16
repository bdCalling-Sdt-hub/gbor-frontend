import React from "react";
import img1 from "../../Images/intro1.png";
import img2 from "../../Images/intro2.png";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const WhoWe = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-12 bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f] pb-28">
        <h1 className="text-center text-4xl font-bold text-[#252525]">
          Ut enim ad minima veniam,
          <br /> quis nostrum exercitationem.
        </h1>
        <p className="w-2/4 mx-auto mt-5 text-[#4B5563] text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </p>
        <div className="flex items-center w-3/4 mx-auto mt-16 gap-20">
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
              Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-[#4B5563] mt-3">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderi.
            </p>
            <p className="text-[#4B5563] mt-3">
              Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
      <Footer />
    </div>
  );
};

export default WhoWe;
