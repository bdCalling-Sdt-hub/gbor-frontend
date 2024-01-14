import { Button } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../Images/fail.png";

const Failed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.paymentInfo) {
      setTimeout(() => {
        navigate("/");
        localStorage.removeItem("paymentInfo");
      }, 3000);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="pt-12 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-48 w-full h-screen flex items-center justify-center">
      <div className="text-center  w-2/4 mx-auto">
        <img className="mx-auto" width="50%" src={img} alt="" />
        <h2 className="text-4xl mt-2">Payment failed</h2>
        <p className="text-lg mt-2">
          The payment was unsuccessful due to an abnormality.
          <br /> Please try again later or user another payment method
        </p>
        <Button
          onClick={() => navigate("/our-creators")}
          style={{
            color: "#fff",
            border: 0,
          }}
          className="bg-[#fb7c29] hover:bg-red-500 mt-5 h-11 font-normal"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default Failed;
