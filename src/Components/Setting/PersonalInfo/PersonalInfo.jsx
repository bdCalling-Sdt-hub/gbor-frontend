import { Button, Col, DatePicker, Form, Image, Input, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import { LuCopy } from "react-icons/lu";

const PersonalInfo = () => {
  const [profileEdit, setProfileEdit] = useState(false);
  const { userInfo } = JSON.parse(localStorage.getItem("yourInfo"));
  const [img, setImg] = useState();

  const {
    fName,
    lName,
    userName,
    address,
    phoneNumber,
    email,
    dateOfBirth,
    uploadId,
    role,
  } = userInfo;

  const initialFormValues = {
    fullName: fName + " " + lName,
    fName: fName,
    lName: lName,
    email: email,
    phoneNumber: "0184518744",
    dateOfBirth: dateOfBirth,
    address: "Moghbazer",
  };

  const handleChange = () => {
    setProfileEdit(true);
  };

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: uploadId,
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <>
      {!profileEdit ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #d9d9d9",
              paddingBottom: "30px",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Image
                width={150}
                style={{ borderRadius: "6px" }}
                src={uploadId}
              />
              <div>
                <h2 className="text-xl">{fName + " " + lName}</h2>
                <p>@{userName}</p>
                {userInfo.role === "c_creator" && (
                  <div className="mt-2">
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="border border-orange-500 rounded py-2 outline-none px-2"
                      />
                      <button className="bg-orange-500 text-white  w-10 h-10  ml-2 rounded flex justify-center items-center">
                        <LuCopy fontSize={20} />
                      </button>
                    </div>
                    <p className="text-[16px] my-3">View public profile</p>
                    <div className="flex gap-2">
                      <a href="https://www.youtube.com/" target="_blank">
                        <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                          <FaYoutube fontSize={28} color="#ff0000" />
                        </div>
                      </a>
                      <a href="https://www.instagram.com/" target="_blank">
                        <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                          <FaInstagram fontSize={28} color="#ff3725" />
                        </div>
                      </a>
                      <a href="https://www.tiktok.com/" target="_blank">
                        <div className="bg-black p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                          <FaTiktok fontSize={28} color="#fff" />
                        </div>
                      </a>
                      <a href="https://www.facebook.com/" target="_blank">
                        <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                          <FaFacebookF fontSize={28} color="#1877f2" />
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Button
              onClick={handleChange}
              style={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                border: 0,
              }}
              className="bg-[#fb7c29] hover:bg-red-500"
            >
              <LiaEditSolid fontSize={16} />
              Edit
            </Button>
          </div>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={initialFormValues}
          >
            <Form.Item
              name="fullName"
              label="Name"
              labelCol={{ span: 24 }}
              style={{ marginBottom: "15px" }}
            >
              <Input style={{ height: "45px" }} readOnly />
            </Form.Item>

            <Row gutter={15} style={{ marginBottom: "0px" }}>
              <Col span={24}>
                <Form.Item name="email" label="Email" labelCol={{ span: 24 }}>
                  <Input style={{ height: "45px" }} readOnly disabled />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={15} style={{ marginBottom: "0px" }}>
              <Col span={12}>
                <Form.Item
                  name="dateOfBirth"
                  label="Date of Birth"
                  labelCol={{ span: 24 }}
                >
                  <DatePicker
                    style={{ height: "45px", width: "100%" }}
                    disabled
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </>
      ) : (
        //edit profile section here
        <>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                borderBottom: "1px solid #d9d9d9",
                paddingBottom: "30px",
                marginBottom: "20px",
              }}
            >
              <div style={{ width: "150px" }}>
                <ImgCrop rotationSlider style={{ width: "100%" }}>
                  <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    style={{ width: "150px" }}
                  >
                    {fileList.length < 1 && "+ Upload"}
                  </Upload>
                </ImgCrop>
              </div>

              <div>
                <h2 className="text-2xl">{fName + " " + lName}</h2>
                <p>@{userName}</p>
              </div>
            </div>
          </div>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={initialFormValues}
          >
            <Row gutter={15}>
              <Col span={12}>
                <Form.Item
                  name="fName"
                  label="First Name"
                  labelCol={{ span: 24 }}
                  style={{ marginBottom: "15px" }}
                >
                  <Input style={{ height: "45px" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="lName"
                  label="Last Name"
                  labelCol={{ span: 24 }}
                  style={{ marginBottom: "15px" }}
                >
                  <Input style={{ height: "45px" }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={15} style={{ marginBottom: "0px" }}>
              <Col span={24}>
                <Form.Item name="email" label="Email" labelCol={{ span: 24 }}>
                  <Input style={{ height: "45px" }} disabled />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={15} style={{ marginBottom: "0px" }}>
              <Col span={12}>
                <Form.Item
                  name="dateOfBirth"
                  label="Date of Birth"
                  labelCol={{ span: 24 }}
                >
                  <DatePicker style={{ height: "45px", width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button
                htmlType="submit"
                className="login-form-button bg-[#fb7c29] hover:bg-red-500"
                block
                style={{
                  height: "45px",
                  fontWeight: "400px",
                  fontSize: "18px",
                  border: 0,
                  marginTop: "10px",
                  color: "#fff",
                }}
              >
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </>
  );
};

export default PersonalInfo;
