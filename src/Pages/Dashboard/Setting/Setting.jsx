import {
  Button,
  Form,
  Input,
  Modal,
  Space,
  Spin,
  Switch,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { LiaAngleRightSolid, LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../../../Config";
import { Category } from "../../../ReduxSlice/categorySlice";
import { notifyOnOff } from "../../../ReduxSlice/notificationOnOffSlice";
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
  const dispatch = useDispatch();
  const notifyOnOffValue = useSelector(
    (state) => state.NotifyOnOff?.notifyShow
  );
  const [categoryModelOpen, setCategoryModelOpen] = useState(false);
  const [categoryUpdateModelOpen, setCategoryUpdateModelOpen] = useState(false);
  const { categoryLists } = useSelector((state) => state.category);
  const [writeCategory, setWriteCategory] = useState("");
  const [categoryUpdateValue, setCategoryUpdateValue] = useState("");
  const [reload, setReload] = useState(1);
  const [updateCategoryId, setUpdateCategoryId] = useState("");

  const defaultNotificationValue =
    notifyOnOffValue === "true"
      ? true
      : notifyOnOffValue === "false"
      ? false
      : "" || notifyOnOffValue;

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
      title: "Category Options",
      link: "category-options",
    },
    {
      key: "4",
      title: "Privacy Policy",
      link: "privacy-policy",
    },
    {
      key: "5",
      title: "Terms and Condition",
      link: "terms-condition",
    },
    {
      key: "6",
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

  const token = localStorage.token;

  const handleNavigate = (value) => {
    if (value === "change-password") {
      setOpenChangePassModel(true);
    } else if (value === "category-options") {
      setCategoryModelOpen(true);
    } else {
      navigate(`/dashboard/setting/${value}`);
    }
  };

  useEffect(() => {
    dispatch(Category());
  }, [reload]);

  const handleNotification = (e) => {
    dispatch(notifyOnOff({ value: e }));
  };

  const handleChangePassword = (values) => {
    const { currentPassword, password, confirmPassword } = values;

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
      currentPass: currentPassword,
      password: password,
      confirmPass: confirmPassword,
    };

    axios
      .post("api/auth/changeexistingpassword", value, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire("✅", `Updated password successfully`, "success");
          setOpenChangePassModel(false);
        }
      })
      .catch((err) => Swal.fire("🤢", `${err.message}`, "error"));
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

  //handle category
  const handleCreateCategory = () => {
    if (!writeCategory) {
      setErr("Empty category is not add");
      return;
    }
    const value = {
      categoryName: writeCategory,
    };
    axios
      .post("api/category", value, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setReload((p) => p + 1);
          setWriteCategory("");
          setErr("");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCategoryDelete = (id) => {
    axios
      .delete(`api/category/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setReload((p) => p + 1);
          setWriteCategory("");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSaveUpdateValue = () => {
    const value = {
      categoryName: categoryUpdateValue,
    };
    axios
      .patch(`api/category/${updateCategoryId}`, value, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setReload((p) => p + 1);
          setCategoryUpdateModelOpen(false);
          setErr("");
        }
      })
      .catch((err) => setErr(err.response?.data?.message));
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
            defaultChecked={defaultNotificationValue}
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
              name="password"
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
              name="confirmPassword"
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

            {/* showing error */}
            <label style={{ color: "red" }}>{err}</label>

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

        {/* category*/}
        <Modal
          title={<p style={{ marginBottom: "30px" }}>Add Category</p>}
          centered
          open={categoryModelOpen}
          onCancel={() => setCategoryModelOpen(false)}
          width={500}
          footer={[]}
        >
          <Space direction="horizontal">
            <Input
              onChange={(e) => setWriteCategory(e.target.value)}
              style={{ width: "390px", height: "40px" }}
              placeholder="add category"
              value={writeCategory}
            />
            <Button
              className="login-form-button bg-[#fb7c29] hover:bg-red-500"
              block
              onClick={handleCreateCategory}
              style={{
                height: "40px",
                fontWeight: "400px",
                border: 0,
                color: "#fff",
              }}
            >
              <CiCirclePlus fontSize={25} />
            </Button>
          </Space>
          {err && <p className="text-red-500 mt-2">{err}</p>}

          <div className="mt-5">
            {categoryLists.map((category) => (
              <div className="flex items-center gap-2 justify-between bg-white px-2 py-1 rounded-sm drop-shadow mb-2">
                <p className="text-[16px]">{category.categoryName}</p>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleCategoryDelete(category._id)}>
                    <RiDeleteBinLine fontSize={22} className="text-red-400" />
                  </button>
                  <button
                    onClick={() => {
                      setCategoryUpdateModelOpen(true);
                      setCategoryUpdateValue(category.categoryName);
                      setUpdateCategoryId(category._id);
                    }}
                  >
                    <LiaEditSolid fontSize={22} className="text-orange-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Modal>

        {/* category update*/}
        <Modal
          title={<p style={{ marginBottom: "30px" }}>Update Category</p>}
          centered
          open={categoryUpdateModelOpen}
          onCancel={() => setCategoryUpdateModelOpen(false)}
          width={500}
          footer={[]}
        >
          <Space direction="horizontal">
            <Input
              style={{ width: "390px", height: "40px" }}
              placeholder="update category"
              value={categoryUpdateValue}
              onChange={(e) => setCategoryUpdateValue(e.target.value)}
            />
            <Button
              className="login-form-button bg-[#fb7c29] hover:bg-red-500"
              block
              style={{
                height: "40px",
                fontWeight: "400px",
                border: 0,
                color: "#fff",
              }}
              onClick={handleSaveUpdateValue}
            >
              Save
            </Button>
          </Space>
          {err && <p className="text-red-500 mt-2">{err}</p>}
        </Modal>
      </div>
    </div>
  );
};

export default Setting;
