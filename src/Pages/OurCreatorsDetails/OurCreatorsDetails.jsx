import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../../Config";
import PreviousDonator from "../../Components/PreviousDonator/PreviousDonator";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const OurCreatorsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [paymentData, setPaymentData] = useState({});
  const [totalCost, setTotalCost] = useState(null);

  console.log(id);

  useEffect(() => {
    axios
      .get(`api/auth/content-creator/${id}`)
      .then((res) => setData(res.data?.data["Creator Details"]));
  }, []);

  const getInputValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newData = { ...paymentData };
    newData[name] = value;
    setPaymentData(newData);
  };

  //total cost calculate
  useEffect(() => {
    if (!isNaN(paymentData.amount)) {
      const totalAmount = parseInt(paymentData.amount) * 500;
      setTotalCost(totalAmount);
    } else {
      setTotalCost(null);
    }
  }, [paymentData.amount]);

  const handlePayment = (e) => {
    e.preventDefault();

    const value = {
      amount: totalCost,
      donarName: paymentData.donarName,
      message: paymentData.message,
    };

    console.log(value);

    if (
      value.amount !== null &&
      value.donarName !== undefined &&
      value.message !== undefined
    ) {
      sendPaymentInfos(
        new Date().getTime(),
        "CMZON10707",
        "BYnD42M2utVxAScoN4zeSGgT46sJf4fnm3PApico5Asl92tYRB",
        "cmazon.com",
        "url_redirection_success",
        "url_redirection_failed",
        100,
        "dakar",
        "",
        "",
        "",
        ""
      );
    } else {
      Swal.fire({
        icon: "warning",
        title: "Sorry!",
        text: "Please enter the input value",
        confirmButtonColor: "#fb7c29",
        backdrop: `
          #a53c3cb3
          left top`,
      });
    }
  };

  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="pt-12 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-32">
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-3/4 mx-auto justify-between">
          <div className="w-full lg:w-3/4 ">
            <img
              style={{ width: "75%", height: "630px" }}
              className="mx-auto rounded-xl bg-white"
              src={data?.uploadId}
              alt=""
            />
          </div>
          <div className="w-full lg:w-2/4 p-4 lg:p-0">
            <h1 className="text-2xl font-bold text-[#252525] md:mt-8">
              Ut enim ad minima veniam, quis nostrum exercitationem.
            </h1>
            <p className="mt-2 mb-8 text-[#4B5563]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum.
            </p>

            <div className="p-4 border border-black rounded-md w-full lg:w-5/6">
              <p className="text-right text-[#4B5563] mb-2">
                1Gbor = <span>{"500FR"}</span>{" "}
              </p>
              <form onSubmit={handlePayment}>
                <input
                  type="number"
                  className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full focus:border focus:border-red-500"
                  placeholder="Enter Shot Amount"
                  name="amount"
                  onChange={getInputValue}
                />
                <input
                  type="text"
                  className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full focus:border focus:border-red-500"
                  placeholder="Name of Donar"
                  name="donarName"
                  onChange={getInputValue}
                />
                <textarea
                  className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full h-32 focus:border focus:border-red-500"
                  placeholder="Message"
                  name="message"
                  onChange={getInputValue}
                />
                <div className="flex justify-end items-center">
                  <label htmlFor="" className="mr-2 text-[#4B5563]">
                    Total Cost=
                  </label>
                  <input
                    className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-2/6 text-center cursor-not-allowed"
                    readOnly
                    value={totalCost || 0}
                    name="totalCost"
                  />
                </div>
                <button
                  className="bg-[#fb7c29] text-white px-4 w-full py-3 rounded-md hover:bg-[#ef4444] transition"
                  type="submit"
                >
                  Donate
                </button>
              </form>
            </div>
          </div>
        </div>
        <PreviousDonator />
      </div>
      <Footer />
    </div>
  );
};

export default OurCreatorsDetails;
