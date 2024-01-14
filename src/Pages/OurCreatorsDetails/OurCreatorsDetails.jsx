import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import axios from "../../../Config";
import PreviousDonator from "../../Components/PreviousDonator/PreviousDonator";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const OurCreatorsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [paymentData, setPaymentData] = useState({});
  const [totalCost, setTotalCost] = useState(null);
  const uid = uuidv4();

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

  //handle payment form here
  const handlePayment = (e) => {
    e.preventDefault();

    const value = {
      creator: data._id,
      amount: totalCost,
      donarName: paymentData.donarName,
      message: paymentData.message,
      gborAmount: paymentData.amount,
      c_userName: data.userName,
    };

    if (
      value.amount !== null &&
      value.donarName !== undefined &&
      value.message !== undefined &&
      id !== ""
    ) {
      let order_number = uid;
      let agency_code = "CMZON10707";
      let secure_code = "BYnD42M2utVxAScoN4zeSGgT46sJf4fnm3PApico5Asl92tYRB";
      let domain_name = "mongbor.com";
      let url_redirection_success = "https://mongbor.com/payment/success";
      let url_redirection_failed = "https://mongbor.com/payment/failed";
      let amount = value.amount;
      let city = "";
      let email = data.email;
      let donarName = value.donarName;
      let creatorName = value.c_userName;
      let donarPhone = "";

      // Call the TouchPay function with the correct name and parameters
      sendPaymentInfos(
        order_number,
        agency_code,
        secure_code,
        domain_name,
        url_redirection_success,
        url_redirection_failed,
        amount,
        city,
        email,
        donarName,
        creatorName,
        donarPhone
      );

      //add localStorage
      localStorage.setItem("paymentInfo", JSON.stringify(value));
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

  return (
    <div>
      <Navbar />
      <div className="pt-12 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-32">
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-3/4 mx-auto justify-between">
          <div className="w-full lg:w-3/4 p-3">
            <img
              className="mx-auto rounded-xl bg-white w-full lg:w-[75%] h-[350px] lg:h-[630px]"
              src={data?.uploadId}
              alt=""
            />
          </div>
          <div className="w-full lg:w-2/4 p-4 lg:p-0">
            <h1 className="text-2xl font-bold text-[#252525] md:mt-8">
              {data?.userName}
            </h1>
            <p className="mt-2 mb-8 text-[#4B5563]">{data?.description}</p>

            <div className="p-4 border border-black rounded-md w-full lg:w-5/6">
              <p className="text-right text-[#4B5563] mb-2">
                1Gbor = <span>{"500FR"}</span>{" "}
              </p>
              <form onSubmit={handlePayment}>
                <input
                  type="number"
                  className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full focus:border focus:border-red-500"
                  placeholder="Entrez le nombre de Gbôr"
                  name="amount"
                  onChange={getInputValue}
                />
                <input
                  type="text"
                  className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full focus:border focus:border-red-500"
                  placeholder="Nom du donateur"
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
                    Montant à payer=
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
                  Soutenir
                </button>
              </form>
            </div>
          </div>
        </div>
        <PreviousDonator id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default OurCreatorsDetails;
