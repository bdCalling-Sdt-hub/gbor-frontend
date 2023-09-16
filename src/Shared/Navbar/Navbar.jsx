import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import Button from "../../Util/Button/Button";

const Navbar = () => {
  return (
    <div className="flex items-center w-full justify-between px-16 py-2 bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f]">
      <div>
        <img width="80%" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-10">
        <ul className="flex gap-10 text-white">
          <Link to="/our-creators" className="border-b-2 border-[#fb7c29]">
            Our Creators
          </Link>
          <Link to="/who-we-are" className="border-b-2 border-[#ec5961]">
            Who are we
          </Link>
          <Link to="/how-it-work" className="border-b-2 border-[#46413f]">
            How it works
          </Link>
          <Link to="/contact" className="border-b-2 border-[#46413f]">
            Contact
          </Link>
        </ul>
        <Button>Become a Content Creator</Button>
      </div>
    </div>
  );
};

export default Navbar;
