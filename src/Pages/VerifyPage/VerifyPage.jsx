import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../Config";
import img from "../../Images/verify.png";

const VerifyPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("/api/auth/verifyemail", {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setTimeout(() => {
            navigate("/");
          }, 10000);
        }
      })
      .catch((err) => console.log(err.message));
  }, [token]);

  return (
    <>
      <div className="pt-12 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-48 w-full h-screen flex items-center justify-center">
        <div className="text-center space-y-2 w-2/4 mx-auto">
          <h2 className="text-2xl">
            Thank you for creating an account with us!{" "}
          </h2>
          <p>
            Your account is currently undergoing validation, and we will notify
            you shortly through your provided email address once the process is
            complete.
          </p>
          <img className="mx-auto" src={img} alt="" />
        </div>
        <Confetti />
      </div>
    </>
  );
};

export default VerifyPage;
