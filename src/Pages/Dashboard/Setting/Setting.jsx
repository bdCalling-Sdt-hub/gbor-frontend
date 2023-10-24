import { Button, Form, Input, Modal, Spin, Switch, Typography } from "antd";
import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../../../Config";

const { Paragraph, Title, Text } = Typography;

const Setting = () => {
  const navigate = useNavigate();
  const [openChangePassModel, setOpenChangePassModel] = useState(false);
  const [verify, setVerify] = useState(false);
  const [updatePassword, setUpdatePassword] = useState(false);
  const [otp, setOtp] = useState();
  const { identity, userInfo } = JSON.parse(localStorage.yourInfo);
  const [err, setErr] = useState("");
  const [forgetBtnLoader, setForgetBtnLoader] = useState(false);

  const style = {
    btn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "50px",
      marginBottom: "10px",
      color: "#856f6f",
      fontSize: "14px",
      fontWeight: "500",
    },
    notification: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "50px",
      marginTop: "10px",
      backgroundColor: "#ffffff",
      border: "1px solid #d9d9d9",
      boxShadow: "0 2px 0 rgba(0, 0, 0, 0.02)",
      borderRadius: "6px",
      padding: "4px 15px",
      color: "#856f6f",
      fontSize: "14px",
      fontWeight: "500",
    },
    input: {
      height: "45px",
    },
    otpInput: {
      width: "50px",
      height: "70px",
    },
  };

  const adminSettings = [
    {
      key: "1",
      title: "Personal Information",
      link: "personal-information",
    },
    {
      key: "2",
      title: "Change Password",
      link: "change-password",
    },
    {
      key: "3",
      title: "Privacy Policy",
      link: "privacy-policy",
    },
    {
      key: "4",
      title: "Terms and Condition",
      link: "terms-condition",
    },
    {
      key: "5",
      title: "About Us",
      link: "about-us",
    },
  ];

  const creatorSettings = [
    {
      key: "1",
      title: "Personal Information",
      link: "personal-information",
    },
    {
      key: "2",
      title: "Change Password",
      link: "change-password",
    },
  ];

  const handleNavigate = (value) => {
    if (value === "change-password") {
      setOpenChangePassModel(true);
    } else {
      navigate(`/dashboard/setting/${value}`);
    }
  };

  const handleNotification = (e) => {
    console.log(e);
  };

  const handleChangePassword = (values) => {
    console.log("Received values of form: ", values);
  };

  //forget password button
  const handleForgetPassword = () => {
    setForgetBtnLoader(true);
    const email = userInfo.email;
    axios
      .post("api/auth/send-reset-password-email", { email: email })
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire("✅", "Successfully Send OTP on your email", "success");
          setOpenChangePassModel(false);
          setVerify(true);
          setForgetBtnLoader(false);
        }
      })
      .catch((err) => Swal.fire("🤢", `${err.message}`, "error"));
  };

  //verify otp modal
  const handelVerifyOtp = () => {
    const value = {
      verifyCode: otp,
      email: userInfo.email,
    };

    axios
      .post("api/auth/verify-code-reset-password", value, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          setVerify(false);
          setUpdatePassword(true);
        }
      })
      .catch((err) => Swal.fire("🤢", `${err.message}`, "error"));
  };

  //update password
  const handleUpdated = (values) => {
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
    if (!/(?=.*[a-z].*[a-z])/.test(password)) {
      setErr("Ensure string has two lowercase letters.");
      return;
    }
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setErr("Ensure string has two digits");
      return;
    }

    const value = {
      password: password,
      confirmPass: confirmPassword,
      email: userInfo.email,
    };

    axios
      .post("api/auth/reset-password", value)
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire("✅", `Updated password successfully`, "success");
          setUpdatePassword(false);
        }
      })
      .catch((err) => Swal.fire("🤢", `${err.message}`, "error"));
  };

  return (
    <div>
      <h2 className="text-2xl">Settings</h2>
      <div className="mt-4">
        {identity
          ? adminSettings.map((item) => (
              <Button
                onClick={() => handleNavigate(item.link)}
                key={item.key}
                block
                style={style.btn}
              >
                <span>{item.title}</span>
                <LiaAngleRightSolid fontSize={20} />
              </Button>
            ))
          : creatorSettings.map((item) => (
              <Button
                onClick={() => handleNavigate(item.link)}
                key={item.key}
                block
                style={style.btn}
              >
                <span>{item.title}</span>
                <LiaAngleRightSolid fontSize={20} />
              </Button>
            ))}
        {/* notification */}
        <div style={style.notification}>
          <span>Notification</span>
          <Switch
            onChange={(e) => handleNotification(e)}
            checkedChildren="ON"
            unCheckedChildren="OFF"
            style={{ background: "#FB7C29" }}
            defaultChecked
          />
        </div>

        {/* change password*/}
        <Modal
          title={<p style={{ marginBottom: "30px" }}>Change password</p>}
          centered
          open={openChangePassModel}
          onCancel={() => setOpenChangePassModel(false)}
          width={500}
          footer={[]}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={handleChangePassword}
            labelCol={{ span: 24 }}
          >
            <Form.Item
              name="currentPassword"
              label="Current password"
              style={{ marginBottom: "5px" }}
              rules={[
                {
                  required: true,
                  message: "Please input your current password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Enter Password"
                type="password"
                style={style.input}
              />
            </Form.Item>

            <Form.Item
              name="newPassword"
              label="New password"
              style={{ marginBottom: "5px" }}
              rules={[
                {
                  required: true,
                  message: "Please input your new Password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter password"
                style={style.input}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Confirm password"
              style={{ marginBottom: "0px" }}
              rules={[
                {
                  required: true,
                  message: "Please input your Re-type Password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter password"
                style={style.input}
              />
            </Form.Item>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              {forgetBtnLoader ? (
                <div className="flex items-center gap-1">
                  <Spin size="small" />
                  <p className="text-orange-500">Loading...</p>
                </div>
              ) : (
                <div
                  type=""
                  className="login-form-forgot"
                  style={{ color: "#fb7c29", cursor: "pointer" }}
                  onClick={handleForgetPassword}
                >
                  Forgot password
                </div>
              )}
            </div>

            <Form.Item>
              <Button
                type="text"
                htmlType="submit"
                className="login-form-button bg-orange-500 "
                block
                style={{
                  height: "45px",
                  fontWeight: "400px",
                  fontSize: "18px",
                  marginTop: "60px",
                }}
              >
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        {/* Verify otp */}
        <Modal
          title={
            <Title
              level={3}
              style={{
                color: "#fb7c29",
                fontWeight: "bold",
                marginBottom: "30px",
              }}
            >
              Verify OTP
            </Title>
          }
          centered
          open={verify}
          onCancel={() => {
            setVerify(false);
          }}
          width={500}
          footer={[]}
        >
          <div>
            <Paragraph style={{ marginBottom: "30px" }}>
              Please enter the 4-digit verification code that was sent.{" "}
              <span style={{ fontWeight: "bold", color: "orange" }}>
                {userInfo.email}
              </span>
              . the code is valid for 15 minute.{" "}
            </Paragraph>

            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              inputStyle={{
                height: "80px",
                width: "100px",
                padding: "10px",
                marginRight: "17px",
                borderRadius: "3px",
                fontSize: "20px",
                border: "1px solid #fb7c29",
                color: "#fb7c29",
              }}
              shouldAutoFocus={true}
              renderInput={(props) => <input {...props} />}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
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
                type="text"
                onClick={handelVerifyOtp}
                htmlType="submit"
                className="login-form-button bg-orange-500 "
                block
                style={{
                  height: "45px",
                  fontWeight: "400px",
                  fontSize: "18px",
                  marginTop: "130px",
                }}
              >
                Continue
              </Button>
            </Form.Item>
          </div>
        </Modal>

        {/* Update Password */}
        <Modal
          title={
            <Title
              level={3}
              style={{
                color: "#fb7c29",
                fontWeight: "bold",
                marginBottom: "30px",
              }}
            >
              Update password
            </Title>
          }
          centered
          open={updatePassword}
          onCancel={() => {
            setUpdatePassword(false);
          }}
          width={500}
          footer={[]}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={handleUpdated}
            labelCol={{ span: 24 }}
          >
            <Form.Item
              name="password"
              label="New password"
              style={{ marginBottom: "10px" }}
              rules={[
                {
                  required: true,
                  message: "Please enter new password!",
                },
              ]}
            >
              <Input.Password
                type="text"
                placeholder="Password"
                style={style.input}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm password"
              rules={[
                {
                  required: true,
                  message: "Please enter confirm Password!",
                },
              ]}
            >
              <Input.Password
                type="text"
                placeholder="Confirm password"
                style={style.input}
              />
            </Form.Item>

            {/* showing error */}
            <label style={{ color: "red" }}>{err}</label>

            <Form.Item>
              <Button
                type="text"
                htmlType="submit"
                className="login-form-button bg-orange-500 "
                block
                style={{
                  height: "45px",
                  fontWeight: "400px",
                  fontSize: "18px",
                  marginTop: "120px",
                }}
              >
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Setting;
