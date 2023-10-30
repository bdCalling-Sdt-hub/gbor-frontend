import { Button, Col, Form, Input, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../Images/Logo.png";
import signin from "../../Images/signin.png";
import { SignIn, reset } from "../../ReduxSlice/signinSlice";
import style from "./Signin.module.css";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData, token, message, isSuccess, isError } = useSelector(
    (state) => state.signIn
  );

  useEffect(() => {
    if (isError === true) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: message,
        confirmButtonColor: "#fb7c29",
      });
    }
    if (isSuccess === true) {
      localStorage.setItem("yourInfo", JSON.stringify(userData));
      localStorage.setItem("token", token);

      window.location.href = "/dashboard";
    }
    dispatch(reset());
  }, [isError, isSuccess, token, dispatch, navigate]);

  const handleSignIn = (values) => {
    dispatch(SignIn(values));
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
          onFinish={handleSignIn}
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
              htmlType="submit"
              type="text"
              className="login-form-button bg-[#fb7c29] text-white w-28 h-10 hover:bg-red-500 duration-100"
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
