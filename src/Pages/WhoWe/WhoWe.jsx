import React from "react";
import img1 from "../../Images/intro1.png";
import img2 from "../../Images/intro2.png";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const WhoWe = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f] pb-28 ">
        <h1 className="text-center p-4 lg:p-0 text-4xl font-bold text-[#252525] drop-shadow-xl">
          Ut enim ad minima veniam,
          <br /> quis nostrum exercitationem.
        </h1>
        <p className="w-full lg:w-2/4 p-4 lg:p-0 mx-auto mt-5 text-[#4B5563] text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </p>
        <div className="flex flex-col lg:flex-row items-center w-full p-4 lg:p-0  lg:w-3/4 mx-auto mt-10 gap-20">
          <div className="w-full order-2 md:order-1">
            <h1 className="text-2xl  font-bold drop-shadow-xl">
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
          <div className="w-full space-y-12 order-1 md:order-2">
            <div className="whoAreImg overflow-hidden rounded-2xl">
              <img
                width="100%"
                className="transition duration-300 img-shadow"
                src={img1}
                alt=""
              />
            </div>
            <div className="whoAreImg overflow-hidden rounded-2xl">
              <img
                width="100%"
                className="transition duration-300 img-shadow"
                src={img2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhoWe;
