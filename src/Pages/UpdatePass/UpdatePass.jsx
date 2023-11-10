import { Button, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../../Config";
import logo from "../../Images/Logo.png";
import update from "../../Images/updatePass.png";

const UpdatePass = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const { email } = useParams();
  const handleChangePassword = (values) => {
    const { password, confirmPassword } = values;

    if (password.length < 8) {
      setErr("Password must be 8 character");
      return;
    }
    if (password !== confirmPassword) {
      setErr("Please enter the same password!");
      return;
    }
    if (!password || !confirmPassword) {
      setErr("Please give your changes password");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setErr("Ensure string has one special case letter.");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setErr("Ensure string has one uppercase letters.");
      return;
    }
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setErr("Ensure string has two digits");
      return;
    }

    const value = {
      password: password,
      confirmPass: confirmPassword,
      email: email,
    };

    axios
      .post("api/auth/reset-password", value)
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire("✅", `Successfully updated password`, "success");
          navigate(`/signin`);
        }
      })
      .catch((err) => Swal.fire("🤢", `${err.message}`, "error"));
  };

  return (
    <Row className="flex items-center justify-center px-16 h-screen">
      <Col span={12} className="border-r">
        <img width="100px" src={logo} className="mx-auto" alt="" />
        <img className="mx-auto" src={update} alt="" />
      </Col>
      <Col span={7} className="p-6">
        <Link
          className="login-form-forgot text-xl mb-2 flex items-center gap-1 font-bold"
          style={{ color: "black" }}
          to="/signin"
        >
          <AiOutlineLeft style={{ fontSize: "16px" }} />
          Update password
        </Link>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleChangePassword}
        >
          <Form.Item
            name="password"
            label="New password"
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
              placeholder="Enter your new password"
              bordered={false}
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm password"
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
              placeholder="Enter your confirm password"
              bordered={false}
            />
          </Form.Item>

          {/* showing error */}
          <label style={{ color: "red" }}>{err}</label>

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
                marginTop: "100px",
              }}
            >
              Confirm
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default UpdatePass;
