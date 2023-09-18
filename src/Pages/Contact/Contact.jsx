import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-12 bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f] pb-48">
        <h1 className="text-center text-4xl font-bold text-[#252525] p-4 md:p-0">
          Ut enim ad minima veniam,
          <br /> quis nostrum exercitationem.
        </h1>
        <p className="w-full md:w-2/4 mx-auto mt-5 p-4 md:p-0 text-[#4B5563] text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </p>
        <div className="w-full md:w-2/6 p-4 md:p-0 mx-auto mt-16">
          <form>
            <input
              type="text"
              className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full"
              placeholder="Name"
              name=""
              id=""
            />
            <input
              type="text"
              className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full"
              placeholder="Subject"
              name=""
              id=""
            />
            <input
              type="text"
              className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full"
              placeholder="Email"
              name=""
              id=""
            />
            <textarea
              className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full h-32"
              placeholder="Your message"
            />

            <button
              className="bg-[#fb7c29] text-white px-4 w-full py-3 rounded-md hover:bg-[#ef4444] transition img-shadow"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
