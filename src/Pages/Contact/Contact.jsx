import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "../../../Config";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Contact = () => {
  const [contactData, setContactData] = useState({});
  const handleContact = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const contact = { ...contactData };
    contact[name] = value;
    setContactData(contact);
  };

  const handleContactSend = (e) => {
    e.preventDefault();

    if (
      contactData.name !== "" &&
      contactData.email !== "" &&
      contactData.subject !== "" &&
      contactData.message !== ""
    ) {
      const value = {
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        message: contactData.message,
      };
      axios.post("api/email-send", value).then((res) => console.log(res.data));
    } else {
      Swal.fire({
        icon: "warning",
        title: "Something Went Wrong",
        text: "Please fill up the contact form",
        confirmButtonColor: "#ff5252",
        backdrop: `
          #a53c3cb3
          left top`,
      });
    }
  };
  return (
    <div>
      <Navbar />
      <div className="pt-12 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-28 h-screen">
        <h1 className="text-center text-4xl font-bold text-[#252525] p-4 lg:p-0">
          Ut enim ad minima veniam,
          <br /> quis nostrum exercitationem.
        </h1>
        <p className="w-full lg:w-2/4 mx-auto mt-5 p-4 lg:p-0 text-[#4B5563] text-center">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </p>
        <div className="w-full lg:w-2/6 p-4 lg:p-0 mx-auto mt-16">
          <form onSubmit={handleContactSend}>
            <input
              type="text"
              onChange={handleContact}
              className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full focus:border-red-500"
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              onChange={handleContact}
              className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full focus:border-red-500"
              placeholder="Subject"
              name="subject"
            />
            <input
              type="email"
              onChange={handleContact}
              className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full focus:border-red-500"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full h-32 focus:border-red-500"
              onChange={handleContact}
              placeholder="Your message"
              name="message"
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
