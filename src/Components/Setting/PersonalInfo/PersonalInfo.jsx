import { Button, Col, DatePicker, Form, Image, Input, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";

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
  } = userInfo;

  const initialFormValues = {
    name: fName + " " + lName,
    email: email,
    phoneNumber: "0184518744",
    dateOfBirth: "",
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
              name="name"
              label="Name"
              labelCol={{ span: 24 }}
              style={{ marginBottom: "15px" }}
            >
              <Input style={{ height: "45px" }} readOnly />
            </Form.Item>

            <Row gutter={15} style={{ marginBottom: "0px" }}>
              <Col span={24}>
                <Form.Item name="email" label="Email" labelCol={{ span: 24 }}>
                  <Input style={{ height: "45px" }} readOnly />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={15} style={{ marginBottom: "0px" }}>
              <Col span={12}>
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  labelCol={{ span: 24 }}
                >
                  <Input style={{ height: "45px" }} readOnly />
                </Form.Item>
              </Col>
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

            <Form.Item
              name="address"
              label="Address"
              labelCol={{ span: 24 }}
              style={{ marginBottom: "10px" }}
            >
              <Input style={{ height: "45px" }} readOnly />
            </Form.Item>
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
                <h2 className="text-2xl">{fName}</h2>
                <p>@{userName}</p>
              </div>
            </div>
          </div>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={initialFormValues}
          >
            <Form.Item
              name="name"
              label="Name"
              labelCol={{ span: 24 }}
              style={{ marginBottom: "15px" }}
            >
              <Input style={{ height: "45px" }} />
            </Form.Item>

            <Row gutter={15} style={{ marginBottom: "0px" }}>
              <Col span={24}>
                <Form.Item name="email" label="Email" labelCol={{ span: 24 }}>
                  <Input style={{ height: "45px" }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={15} style={{ marginBottom: "0px" }}>
              <Col span={12}>
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  labelCol={{ span: 24 }}
                >
                  <Input style={{ height: "45px" }} />
                </Form.Item>
              </Col>
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

            <Form.Item
              name="address"
              label="Address"
              labelCol={{ span: 24 }}
              style={{ marginBottom: "10px" }}
            >
              <Input style={{ height: "45px" }} />
            </Form.Item>

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
