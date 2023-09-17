import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center w-full justify-between px-16 py-2 bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f]">
      <Link to="/">
        <img width="80%" src={logo} alt="logo" />
      </Link>

      <div className="flex items-center gap-10">
        <ul className="flex gap-10 text-white">
          <Link active to="/our-creators" className="">
            Our Creators
          </Link>
          <Link to="/who-we-are" className="">
            Who are we
          </Link>
          <Link to="/how-it-work" className="">
            How it works
          </Link>
          <Link to="/contact" className="">
            Contact
          </Link>
        </ul>
        <button
          className="text-white bg-[#fb7c29] px-4 py-3 rounded-md hover:bg-[#ef4444] transition"
          onClick={() => navigate("/become-content-creator")}
        >
          Become a Content Creator
        </button>
      </div>
    </div>
  );
};

export default Navbar;
