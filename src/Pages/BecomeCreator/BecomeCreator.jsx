import React from "react";
import { Link } from "react-router-dom";
import img from "../../Images/become-creator.png";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const BecomeCreator = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f] pb-28 ">
        <div className="w-full lg:w-3/4 mx-auto p-4 lg:p-0">
          <div>
            <h1 className="text-center text-4xl font-bold text-[#252525] p-4 lg:p-0">
              Ut enim ad minima veniam,
              <br /> quis nostrum exercitationem.
            </h1>
            <p className="w-full lg:w-2/4 mx-auto mt-5 text-[#4B5563] text-center p-4 lg:p-0">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum.
            </p>
          </div>
          <div className="grid grid-cols lg:grid-cols-2 gap-6 mt-16">
            <div className="order-2 lg:order-1">
              <form>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    className="border border-black outline-none mb-2 bg-transparent rounded-md p-3 px-2 w-full"
                    placeholder="First Name"
                    name="firstName"
                    id=""
                  />
                  <input
                    type="text"
                    className="border border-black outline-none mb-2 bg-transparent rounded-md p-3 px-2 w-full"
                    placeholder="Last Name"
                    name="lastName"
                    id=""
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="email"
                    className="border border-black outline-none mb-2 bg-transparent rounded-md p-3 px-2 w-full"
                    placeholder="Email"
                    name="email"
                    id=""
                  />
                  <input
                    type="text"
                    className="border border-black outline-none mb-2 bg-transparent rounded-md p-3 px-2 w-full"
                    placeholder="Username"
                    name="username"
                    id=""
                  />
                </div>

                <input
                  type="text"
                  className="border border-black outline-none mb-2 bg-transparent rounded-md p-3 px-2 w-full"
                  placeholder="Date of Birth (DD/MM/YYYY)"
                  name="dateOfBirth"
                  id=""
                />
                <input
                  type="password"
                  className="border border-black outline-none mb-2 bg-transparent rounded-md p-3 px-2 w-full"
                  placeholder="Password"
                  name=""
                  id=""
                />
                <input
                  type="password"
                  className="border border-black outline-none mb-2 bg-transparent rounded-md p-3 px-2 w-full"
                  placeholder="Confirm password"
                  name=""
                  id=""
                />
                <div className="flex items-center justify-between border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full select-none">
                  <p className="text-[#a4a6ac]">Upload your ID</p>
                  <div>
                    <label
                      htmlFor="file"
                      className="bg-[#fb7c29] text-white px-5 py-1 rounded-sm cursor-pointer"
                    >
                      Browse file
                    </label>
                    <input
                      type="file"
                      className="hidden"
                      placeholder="Confirm password"
                      name=""
                      id="file"
                    />
                  </div>
                </div>

                <div className="mt-3 mb-8">
                  <input type="checkbox" className="hidden" name="" id="term" />
                  <label
                    htmlFor="term"
                    className="cursor-pointer label relative"
                  >
                    I accept the{" "}
                    <Link className="text-[#ff7044]">terms and conditions</Link>
                  </label>
                </div>

                <button
                  className="bg-[#fb7c29] text-white px-4 w-full py-3 rounded-md"
                  type="submit"
                >
                  Create Account
                </button>
              </form>
              <p className="text-center mt-8">
                Already have an account?{" "}
                <Link to="" className="text-[#ff7044]">
                  Login
                </Link>
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img width="100%" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BecomeCreator;
