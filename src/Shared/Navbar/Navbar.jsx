import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="lg:flex items-center w-full justify-between lg:px-16 py-2 bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f] sticky top-0 z-50">
      <div className="flex items-center justify-between px-2">
        <Link to="/">
          <img className="w-24 md:w-24" src={logo} alt="logo" />
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
        className={` space-y-5 lg:space-y-0 lg:flex gap-10 text-white items-center bg-[#fda16e] lg:bg-transparent p-4 lg:p-0 absolute lg:static duration-500 h-screen lg:h-auto ${
          open ? "left-0 top-0" : "-left-96 top-0"
        }`}
      >
        <li>
          <Link active to="/our-creators" className="">
            Our Creators
          </Link>
        </li>
        <li>
          <Link to="/who-we-are" className="">
            Who are we
          </Link>
        </li>
        <li>
          <Link to="/how-it-work" className="">
            How it works
          </Link>
        </li>
        <li>
          <Link to="/contact" className="">
            Contact
          </Link>
        </li>

        {location?.pathname === "/" && (
          <li>
            <div className="border border-[#4B5563] flex items-center rounded-md ">
              <input
                type="text"
                className="border-0 outline-none bg-transparent p-3 px-2 w-4/6"
                placeholder="Search your favourite creator"
                name=""
                id=""
              />
              <button
                style={{ marginLeft: "auto" }}
                className="pr-2 hover:scale-125 transition"
              >
                <FiSearch style={{ fontSize: "20px", color: "#4B5563" }} />
              </button>
            </div>
          </li>
        )}
        <li
          className="text-white bg-[#fb7c29] px-4 py-3 rounded-md hover:bg-[#ef4444] transition img-shadow"
          onClick={() => navigate("/become-content-creator")}
        >
          Become a Content Creator
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
