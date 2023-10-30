import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../../Config";
import logo from "../../Images/Logo.png";
import email from "../../Images/email.png";

const { Title, Paragraph, Text } = Typography;

const Email = () => {
  const navigate = useNavigate();
  const handleEmail = (values) => {
    const email = values.email;
    axios
      .post("api/auth/send-reset-password-email", { email: email })
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire("✅", "Successfully Send OTP on your email", "success");
          navigate(`/forget-password/${values.email}`);
        }
      })
      .catch((err) => Swal.fire("🤢", `${err.message}`, "error"));
  };
  return (
    <Row className="flex items-center justify-center px-16 h-screen">
      <Col span={12} className="border-r">
        <img width="100px" className="mx-auto" src={logo} alt="" />
        <img src={email} className="mx-auto" alt="" />
      </Col>
      <Col span={7} className="p-6">
        <Link
          className="login-form-forgot text-xl mb-2 flex items-center gap-1 font-bold"
          style={{ color: "black" }}
          to="/signin"
        >
          <AiOutlineLeft style={{ fontSize: "16px" }} />
          Forgot password
        </Link>

        <Paragraph style={{ marginBottom: "30px" }}>
          We'll send a verification code to your email. Check your inbox and
          enter the code here.
        </Paragraph>

        <Form name="normal_login" className="login-form" onFinish={handleEmail}>
          <Form.Item
            name="email"
            id="email"
            label="Email"
            labelCol={{ span: 24 }}
            style={{ borderBottom: "1px solid black" }}
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              type="email"
              bordered={false}
            />
          </Form.Item>

          <Form.Item className="block text-center mt-10">
            <Button
              htmlType="submit"
              type="text"
              className="login-form-button bg-[#fb7c29] text-white w-28 h-10"
            >
              Send OTP
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Email;
