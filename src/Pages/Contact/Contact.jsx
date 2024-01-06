import { Spin } from "antd";
import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "../../../Config";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Contact = () => {
  const [contactData, setContactData] = useState({});
  const [reload, setReload] = useState(false);

  const handleContact = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const contact = { ...contactData };
    contact[name] = value;
    setContactData(contact);
  };

  const handleContactSend = (e) => {
    e.preventDefault();
    setReload(true);

    const value = {
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
    };

    if (
      value.name !== undefined &&
      value.email !== undefined &&
      value.subject !== undefined &&
      value.message !== undefined
    ) {
      axios.post("api/email-send", value).then((res) => {
        if (res.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Email sent successfully",
            text: "We've received your questions and will get back to you in a few hours.",
            confirmButtonColor: "#ff5252",
          });
          setContactData({});
          setReload(false);
        }
      });
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
      setReload(false);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="pt-12 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-28 h-screen">
        <h1 className="text-center text-4xl font-bold text-[#252525] p-4 lg:p-0">
          Contactez-nous
        </h1>
        <p className="w-full lg:w-2/4 mx-auto mt-5 p-4 lg:p-0 text-[#4B5563] text-center">
          Merci de remplir le formulaire ci-dessous afin de nous contacter
        </p>
        <div className="w-full lg:w-2/6 p-4 lg:p-0 mx-auto mt-16">
          {!reload ? (
            <form onSubmit={handleContactSend}>
              <input
                type="text"
                onChange={handleContact}
                className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full focus:border-red-500"
                placeholder="Nom"
                name="name"
              />
              <input
                type="text"
                onChange={handleContact}
                className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full focus:border-red-500"
                placeholder="Sujet"
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
                placeholder="Votre message"
                name="message"
              />

              <button
                className="bg-[#fb7c29] text-white px-4 w-full py-3 rounded-md hover:bg-[#ef4444] transition img-shadow"
                type="submit"
              >
                Envoyer
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center h-[100%]">
              <Spin />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
