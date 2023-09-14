import { Button, Form, Input, Typography } from "antd";
import React from "react";
import logo from "../../Images/Logo.png";
import style from "./Email.module.css";

const { Title, Paragraph, Text, Link } = Typography;

const Email = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className={style.emailContainer}>
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
          Email Verification
        </Title>
        <Paragraph style={{ marginBottom: "30px" }}>
          We'll send a verification code to your email. Check your inbox and
          enter the code here.
        </Paragraph>

        <Form>
          <div>
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <Form.Item
              name="email"
              id="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                className={style.input}
              />
            </Form.Item>
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
      </div>
    </div>
  );
};

export default Email;
