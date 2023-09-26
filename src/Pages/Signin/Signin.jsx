import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../Images/Logo.png";
import signin from "../../Images/signin.png";
import style from "./Signin.module.css";
import axios from "axios"
const Signin = () => {
  const onFinish = async(values) => {
    console.log("Received values of form: ", values);
    const response=await axios.post("http://localhost:8000/pay");
        let data=response.data;
        console.log(data)
     
  };

  const navigate = useNavigate();

  const handleForget = () => {
    navigate("/forget-password");
  };

  return (
    <Row className="flex items-center justify-center px-16 h-screen">
      <Col span={12} className="border-r">
        <img width="100px" className="mx-auto" src={logo} alt="" />
        <img width="95%" className="mx-auto" src={signin} alt="" />
      </Col>
      <Col span={7} className="p-6">
        <h2 className="text-black text-center text-3xl font-bold mb-4">
          Welcome
        </h2>
        <h2 className="text-xl text-gray-700 font-bold mb-4">Expert sign In</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
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
              className={style.input}
              bordered={false}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            labelCol={{ span: 24 }}
            style={{ borderBottom: "1px solid black" }}
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Enter your password"
              className={style.input}
              bordered={false}
            />
          </Form.Item>

          <Form.Item className={style.rememberAndPass}>
            <Link
              className="login-form-forgot text-lg"
              style={{ color: "black" }}
              to="/email"
            >
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item className="block text-center">
            <Button
            onClick={onFinish}
              htmlType="submit"
              className="login-form-button bg-[#fb7c29] text-white w-28 h-10"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Signin;
