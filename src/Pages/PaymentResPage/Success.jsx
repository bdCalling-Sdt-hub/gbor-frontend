import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import axios from "../../../Config";
import img from "../../Images/success.svg";

const Success = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const value = JSON.parse(localStorage.getItem("paymentInfo"));

  useEffect(() => {
    if (value) {
      axios
        .post("/api/payment", value, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {})
        .catch((err) => console.log(err));
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const clearTime = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    if (count === 11) {
      navigate("/");
      localStorage.removeItem("paymentInfo");
      setCount(1);
      return () => clearInterval(clearTime);
    }
  }, [count]);

  return (
    <div className="pt-12 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-48 w-full h-screen flex items-center justify-center">
      {value && (
        <>
          <div className="text-center  w-2/4 mx-auto">
            <img className="mx-auto" width="40%" src={img} alt="" />
            <h2 className="text-4xl mt-12">Payment Successful</h2>
            <p className="my-3 text-xl">Thank you! Your payment is completed</p>
            <p>
              Please wait 10 seconds{" "}
              <span className="font-bold">( {count}s )</span> we will redirect
              you to the home page
            </p>
          </div>
          <Confetti />
        </>
      )}
    </div>
  );
};

export default Success;
