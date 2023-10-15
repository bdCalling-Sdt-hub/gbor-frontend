import { message } from "antd";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Images/monGBOR.com.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [searchData, setSearchData] = useState("");
  const location = useLocation();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSearch = (value) => {
    messageApi
      .open({
        type: "loading",
        content: "Search will be applicable after API integration",
        duration: 2.5,
      })
      .then(() => message.success("Loading finished", 2.5))
      .then(() => message.info("Loading finished", 2.5));
  };

  return (
    <nav className="lg:flex items-center w-full justify-between lg:px-16 py-1 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] sticky top-0 z-50">
      {contextHolder}
      <div className="flex items-center justify-between px-2 py-2">
        <Link to="/">
          <img className="w-16 md:w-36" src={logo} alt="logo" />
        </Link>
        <div
          className="lg:hidden cursor-pointer text-white active:duration-300"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <HiOutlineMenuAlt1 style={{ fontSize: "35px" }} />
          ) : (
            <AiOutlineClose style={{ fontSize: "35px" }} />
          )}
        </div>
      </div>

      <ul
        className={` space-y-5 lg:space-y-0 lg:flex gap-10  items-center bg-[#fda16e] lg:bg-transparent p-4 lg:p-0 absolute lg:static duration-500 h-screen lg:h-auto ${
          open ? "left-0 top-0" : "-left-96 top-0"
        }`}
      >
        <li className="link-nav">
          <Link to="/our-creators">Our Creators</Link>
        </li>
        <li className="link-nav">
          <Link to="/who-we-are">Who are we</Link>
        </li>
        <li className="link-nav">
          <Link to="/how-it-work">How it works</Link>
        </li>
        <li className="link-nav">
          <Link to="/contact">Contact</Link>
        </li>

        {location?.pathname === "/" && (
          <li>
            <div className="border border-[#6e7174] flex items-center rounded-md ">
              <input
                type="text"
                className=" outline-none bg-transparent p-3 px-2 w-5/6"
                onBlur={(e) => setSearchData(e.target.value)}
                placeholder="Search creator"
                name=""
                id=""
              />
              <button
                style={{ marginLeft: "auto" }}
                className="pr-2  hover:scale-125 transition"
                onClick={handleSearch}
              >
                <FiSearch style={{ fontSize: "20px", color: "#4B5563" }} />
              </button>
            </div>
          </li>
        )}
        <li
          className="text-white bg-[#fb7c29] px-4 py-3 rounded-md hover:bg-[#ef4444] transition img-shadow cursor-pointer"
          onClick={() => navigate("/become-content-creator")}
        >
          Become a Content Creator
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
