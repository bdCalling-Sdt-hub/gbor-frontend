import React from "react";
import img1 from "../../Images/intro1.png";
import img2 from "../../Images/intro2.png";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const HowWork = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-10 bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f] pb-28">
        <h1 className="p-4 md:p-0 text-center text-4xl font-bold text-[#252525]">
          Ut enim ad minima veniam,
          <br /> quis nostrum exercitationem.
        </h1>
        <p className="w-full md:w-2/4 p-4 md:p-0 mx-auto mt-5 text-[#4B5563] text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </p>

        <div className="flex flex-col md:flex-row items-center w-full p-4 md:p-0 md:w-3/4 mx-auto mt-24 gap-20">
          <div className="w-full md:w-2/4">
            <h1 className="text-2xl  font-bold">
              <span className="text-white text-5xl">01 </span> Quis autem vel
              eum iure <br />
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
          </div>
          <div className="w-full md:w-2/4 space-y-12">
            <img className="img-shadow" src={img1} width="100%" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full p-4 md:p-0 md:w-3/4 mx-auto mt-24 gap-20">
          <div className="w-full md:w-2/4 space-y-12 order-2 md:order-1">
            <img className="img-shadow" src={img2} width="100%" alt="" />
          </div>
          <div className="w-full md:w-2/4 order-1 md:order-2">
            <h1 className="text-2xl  font-bold">
              <span className="text-white text-5xl">02 </span> Quis autem vel
              eum iure <br />
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
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full p-4 md:p-0 md:w-3/4 mx-auto mt-24 gap-20">
          <div className="w-full md:w-2/4">
            <h1 className="text-2xl  font-bold">
              <span className="text-white text-5xl">03 </span> Quis autem vel
              eum iure <br />
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
          </div>
          <div className="w-full md:w-2/4 space-y-12">
            <img className="img-shadow" src={img2} width="100%" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full p-4 md:p-0 md:w-3/4 mx-auto mt-24 gap-20">
          <div className="w-full md:w-2/4 space-y-12 order-2 md:order-1">
            <img className="img-shadow" src={img1} width="100%" alt="" />
          </div>
          <div className="w-full md:w-2/4 order-1 md:order-2">
            <h1 className="text-2xl  font-bold">
              <span className="text-white text-5xl">04 </span> Quis autem vel
              eum iure <br />
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowWork;
