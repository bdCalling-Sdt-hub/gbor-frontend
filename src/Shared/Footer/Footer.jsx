import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f]   text-[#4B5563]">
      <div className="flex flex-col md:flex-row justify-between items-center pt-5 pb-9 mx-16 border-t border-black ">
        <ul className="flex flex-col md:flex-row items-center gap-5">
          <li>Term of us</li>
          <li>Privacy Policy</li>
        </ul>
        <p>&copy; All right reserved 2023</p>
      </div>
    </div>
  );
};

export default Footer;
