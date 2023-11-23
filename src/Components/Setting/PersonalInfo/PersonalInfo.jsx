import { Button, Col, DatePicker, Form, Image, Input, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import moment from "moment";
import React, { useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import { LuCopy } from "react-icons/lu";
import Swal from "sweetalert2";
import axios from "../../../../Config";

const PersonalInfo = () => {
  const [profileEdit, setProfileEdit] = useState(false);
  const { userInfo } = JSON.parse(localStorage.getItem("yourInfo"));
  const {
    fName,
    lName,
    userName,
    email,
    dateOfBirth,
    uploadId,
    website,
    socialLink,
  } = userInfo;
  const [img, setImg] = useState();
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: uploadId,
    },
  ]);
  const inputRef = useRef(null);

  const handleCopyClick = () => {
    inputRef.current.select();
    document.execCommand("copy");
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setImg(newFileList[0]?.originFileObj);
  };

  const initialFormValues = {
    fullName: fName + " " + lName,
    fName: fName,
    lName: lName,
    email: email,
    dateOfBirth: dateOfBirth ? moment(dateOfBirth, "YYYY-MM-DD") : null,
    website: website,
    tiktok: socialLink?.tiktok,
    youtube: socialLink?.youtube,
    facebook: socialLink?.facebook,
    instagram: socialLink?.instagram,
  };

  const handleChange = () => {
    setProfileEdit(true);
  };

  const handleUpdateProfile = (values) => {
    const formData = new FormData();
    const webLink = values.website === undefined ? "" : values.website;

    // Create the socialLinks object
    let socialLinks = {
      youtube: values.youtube,
      tiktok: values.tiktok,
      facebook: values.facebook,
      instagram: values.instagram,
    };

    // Append the socialLinks to formData
    formData.append("socialLink", JSON.stringify(socialLinks));
    formData.append("fName", values.fName);
    formData.append("lName", values.lName);
    formData.append("website", webLink);

    if (img) {
      formData.append("uploadId", img);
    }

    axios
      .patch(`api/auth/profile-update/${userInfo._id}`, formData)
      .then((res) => {
        if (res.data.status === 200) {
          Swal.fire("Good!", res.data?.message, "success");

          localStorage.setItem("yourInfo", JSON.stringify(res.data.data));
          setProfileEdit(false);
        }
      })
      .catch((err) => {
        Swal.fire("😒", err.response.data.message, "error");
      });
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

                <div className="mt-2">
                  {userInfo.website && (
                    <div className="flex items-center">
                      <input
                        type="text"
                        ref={inputRef}
                        className="border border-orange-500 text-gray-500 rounded py-2 outline-none px-2 w-56"
                        value={website}
                      />
                      <button
                        className="bg-orange-500 text-white  w-10 h-10  ml-2 rounded flex justify-center items-center duration-2 hover:bg-red-500"
                        onClick={handleCopyClick}
                      >
                        <LuCopy fontSize={20} />
                      </button>
                    </div>
                  )}
                  {userInfo.socialLink && (
                    <>
                      <p className="text-[16px] my-3">View public profile</p>
                      <div className="flex gap-2">
                        {userInfo.socialLink.youtube && (
                          <a
                            href={`https://www.youtube.com/@${userInfo.socialLink.youtube}`}
                            target="_blank"
                          >
                            <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                              <FaYoutube fontSize={28} color="#ff0000" />
                            </div>
                          </a>
                        )}
                        {userInfo.socialLink.instagram && (
                          <a
                            href={`https://www.instagram.com/${userInfo.socialLink.instagram}`}
                            target="_blank"
                          >
                            <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                              <FaInstagram fontSize={28} color="#ff3725" />
                            </div>
                          </a>
                        )}
                        {userInfo.socialLink.tiktok && (
                          <a
                            href={`https://www.tiktok.com/@${userInfo.socialLink.tiktok}`}
                            target="_blank"
                          >
                            <div className="bg-black p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                              <FaTiktok fontSize={28} color="#fff" />
                            </div>
                          </a>
                        )}
                        {userInfo.socialLink.facebook && (
                          <a
                            href={`https://www.facebook.com/${userInfo.socialLink.facebook}`}
                            target="_blank"
                          >
                            <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                              <FaFacebookF fontSize={28} color="#1877f2" />
                            </div>
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
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
                borderBottom: "1px solid #d9d9d9",
                marginBottom: "15px",
              }}
            >
              <div>
                <ImgCrop
                  rotationSlider
                  modalOk="Save"
                  modalCancel="Cancel"
                  style={{ width: "100%", color: "red" }}
                >
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
            </div>
          </div>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={initialFormValues}
            onFinish={handleUpdateProfile}
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
              <Col span={12}>
                <Form.Item name="email" label="Email" labelCol={{ span: 24 }}>
                  <Input style={{ height: "45px" }} disabled />
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
            <Row>
              <Col span={24}>
                <Form.Item
                  name="website"
                  label="Website"
                  labelCol={{ span: 24 }}
                >
                  <Input
                    style={{ height: "45px" }}
                    placeholder="Website link"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={15} style={{ marginBottom: "0px" }}>
              <Col span={12}>
                <Form.Item
                  name="youtube"
                  label="Youtube"
                  labelCol={{ span: 24 }}
                >
                  <Input style={{ height: "45px" }} placeholder="@username" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="facebook"
                  label="Facebook"
                  labelCol={{ span: 24 }}
                >
                  <Input style={{ height: "45px" }} placeholder="@username" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={15} style={{ marginBottom: "0px" }}>
              <Col span={12}>
                <Form.Item
                  name="instagram"
                  label="Instagram"
                  labelCol={{ span: 24 }}
                >
                  <Input style={{ height: "45px" }} placeholder="@username" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="tiktok" label="TikTok" labelCol={{ span: 24 }}>
                  <Input style={{ height: "45px" }} placeholder="@username" />
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
