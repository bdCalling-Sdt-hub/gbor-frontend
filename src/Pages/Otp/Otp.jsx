import { Button, Form, Input, Typography } from "antd";
import React from "react";
import logo from "../../Images/Logo.png";
import style from "./Otp.module.css";

const { Title, Paragraph, Text, Link } = Typography;

const Otp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className={style.otpContainer}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={style.formContainer}>
        <Title
          level={2}
          style={{
            color: "#fb7c29",
            fontWeight: "normal",
            marginBottom: "10px",
            textShadow: "#bfbfbf 2px 2px 4px",
          }}
        >
          Verify OTP
        </Title>
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
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Otp;
