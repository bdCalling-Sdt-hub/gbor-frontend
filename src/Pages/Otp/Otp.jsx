import { Button, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import OTPInput from "react-otp-input";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../../Config";
import logo from "../../Images/Logo.png";
import otpImg from "../../Images/otp.png";
import style from "./Otp.module.css";

const { Title, Paragraph, Text } = Typography;

const Otp = () => {
  const [otp, setOtp] = useState();
  const navigate = useNavigate();
  const { email } = useParams();
  const handleOtp = () => {
    const value = {
      verifyCode: otp,
      email: email,
    };
    axios
      .post("api/auth/verify-code-reset-password", value, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          navigate(`/update-password/${email}`);
        }
      })
      .catch((err) => Swal.fire("🤢", `${err.message}`, "error"));
  };
  return (
    <Row className="flex items-center justify-center px-16 h-screen">
      <Col span={12} className="border-r">
        <img width="100px" className="mx-auto mb-5" src={logo} alt="" />
        <img className="mx-auto" src={otpImg} alt="" />
      </Col>
      <Col span={7} className="p-6">
        <Link
          className="login-form-forgot text-xl mb-2 flex items-center gap-1 font-bold"
          style={{ color: "black" }}
          to="/signin"
        >
          <AiOutlineLeft style={{ fontSize: "16px" }} />
          Verify OTP
        </Link>
        <Paragraph style={{ marginBottom: "30px" }}>
          Please enter the 4-digit verification code that was sent.{" "}
          <span style={{ fontWeight: "bold", color: "orange" }}>{email}</span>.{" "}
          the code is valid for 15 minute.{" "}
        </Paragraph>

        <div>
          <div className="">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              inputStyle={{
                height: "80px",
                width: "90px",
                padding: "10px",
                marginRight: "38px",
                fontSize: "20px",
                borderBottom: "1px solid #fb7c29",
                color: "#fb7c29",
              }}
              shouldAutoFocus={true}
              renderInput={(props) => <input {...props} />}
            />
          </div>

          <div className={style.rememberAndPass}>
            <Text>Don't received code?</Text>

            <a
              className="login-form-forgot"
              style={{ color: "#fb7c29" }}
              href=""
            >
              Resend
            </a>
          </div>

          <Button
            type="primary"
            className="login-form-button"
            onClick={handleOtp}
            block
            style={{
              height: "45px",
              fontWeight: "400px",
              fontSize: "18px",
              background: "#fb7c29",
              alignSelf: "bottom",
              marginTop: "130px",
            }}
          >
            Verify
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Otp;
