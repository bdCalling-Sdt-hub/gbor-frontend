import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../Images/Logo.png";
import otp from "../../Images/otp.png";
import style from "./Otp.module.css";

const { Title, Paragraph, Text } = Typography;

const Otp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Row className="flex items-center justify-center px-16 h-screen">
      <Col span={12} className="border-r">
        <img width="100px" className="mx-auto mb-5" src={logo} alt="" />
        <img className="mx-auto" src={otp} alt="" />
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
          We'll send a verification code to your email. Check your inbox and
          enter the code here.
        </Paragraph>

        <Form>
          <Input.Group
            style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
          >
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
          </Input.Group>

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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
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
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Otp;
