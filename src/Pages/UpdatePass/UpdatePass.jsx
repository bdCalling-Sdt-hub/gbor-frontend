import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import GBORLOGO from "../../Images/GBORLOGO.png";
import style from "./UpdatePass.module.css";

const UpdatePass = () => {
  const [err, setErr] = useState("");
  const onFinish = (values) => {
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
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setErr("Ensure string has two uppercase letters.");
      return;
    }
    if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      setErr("Ensure string has three lowercase letters.");
      return;
    }
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setErr("Ensure string has two digits");
      return;
    }
  };

  return (
    <div className={style.updateContainer}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={style.formContainer}>
        <h1
          style={{
            color: "#fb7c29",
            fontWeight: "normal",
            marginBottom: "30px",
            textShadow: "#bfbfbf 2px 2px 4px",
          }}
        >
          Update Password
        </h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div>
            <label htmlFor="" className={style.label}>
              New Password
            </label>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter new password!",
                },
              ]}
            >
              <Input
                type="text"
                placeholder="Password"
                className={style.input}
              />
            </Form.Item>
          </div>

          <div>
            <label htmlFor="" className={style.label}>
              Re-type Password
            </label>
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please enter confirm Password!",
                },
              ]}
            >
              <Input
                type="text"
                placeholder="Confirm password"
                className={style.input}
              />
            </Form.Item>
          </div>

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
      </div>
    </div>
  );
};

export default UpdatePass;
