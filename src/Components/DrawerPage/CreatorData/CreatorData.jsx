import { Button, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import Swal from "sweetalert2";
import axios from "../../../../Config";

const CreatorData = ({ data, setReload, setIsDrawerVisible }) => {
  const [edit, setEdit] = useState(false);
  const { TextArea } = Input;
  const { socialLink, _id } = data.action;
  const token = localStorage.token;

  const initialFormValues = {
    email: data.action?.email,
    website: data?.webLink,
    username: data?.action?.userName,
    description: data?.action?.description,
    tiktok: socialLink?.tiktok,
    youtube: socialLink?.youtube,
    facebook: socialLink?.facebook,
    instagram: socialLink?.instagram,
  };

  const handleUpdateCreator = (values) => {
    const value = {
      userName: values.username,
      description: values.description,
      socialLink: {
        youtube: values.youtube,
        tiktok: values.tiktok,
        facebook: values.facebook,
        instagram: values.instagram,
      },
    };

    axios
      .put(`/api/auth/profile-update-by-admin/${_id}`, value, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire(
            "Update successful",
            "The creator has been updated.",
            "success"
          );
          setIsDrawerVisible(false);
          setReload((prev) => prev + 1);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteCreator = (id) => {
    Swal.fire({
      title: "Are you sure, you want to delete?",
      text: "Creator will not show on this page",
      showCancelButton: true,
      confirmButtonText: "Yes,Delete it",
      confirmButtonColor: "#FB7C29",
      cancelButtonColor: "#ffba8d",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `api/auth/delete-user/${id}`,
            {},
            {
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            if (res.data.status === 200) {
              Swal.fire(
                "Deletion successful",
                "The user has been removed.",
                "success"
              );
              setIsDrawerVisible(false);
              setReload((prev) => prev + 1);
            }
          });
      }
    });
  };

  return (
    <>
      {!edit ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              borderBottom: "1px solid #ffba8d",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
                className="rounded"
                src={data.action?.uploadId}
                alt="creator"
              />
              <div>
                <h2 className="text-xl font-medium">{data.action?.userName}</h2>
                <p>Gbor Received: {data.action?.total_amount}</p>
                <div className="flex gap-2 mt-2">
                  {socialLink?.youtube && (
                    <a
                      href={`https://www.youtube.com/@${socialLink?.youtube}`}
                      target="_blank"
                    >
                      <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                        <FaYoutube fontSize={28} color="#ff0000" />
                      </div>
                    </a>
                  )}
                  {socialLink?.instagram && (
                    <a
                      href={`https://www.instagram.com/${socialLink?.instagram}`}
                      target="_blank"
                    >
                      <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                        <FaInstagram fontSize={28} color="#ff3725" />
                      </div>
                    </a>
                  )}
                  {socialLink?.tiktok && (
                    <a
                      href={`https://www.tiktok.com/@${socialLink?.tiktok}`}
                      target="_blank"
                    >
                      <div className="bg-black p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                        <FaTiktok fontSize={28} color="#fff" />
                      </div>
                    </a>
                  )}
                  {socialLink?.facebook && (
                    <a
                      href={`https://www.facebook.com/${socialLink?.facebook}`}
                      target="_blank"
                    >
                      <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                        <FaFacebookF fontSize={28} color="#1877f2" />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <Button
              className="flex items-center bg-[#FB7C29] text-white hover:bg-red-500"
              onClick={() => {
                setEdit(true);
              }}
              style={{ color: "white", border: "none" }}
            >
              <LiaEditSolid fontSize={16} />
              Edit
            </Button>
          </div>

          <Form
            layout="vertical"
            initialValues={initialFormValues}
            style={{ marginTop: "10px" }}
          >
            <Form.Item label="Email" style={{ marginBottom: 5 }} name="email">
              <Input className="h-12" readOnly />
            </Form.Item>

            <Form.Item
              label="Website"
              name="website"
              style={{ marginBottom: 5 }}
            >
              <Input className="h-12" readOnly />
            </Form.Item>
          </Form>

          <div
            style={{
              display: "flex",
              gap: 10,
              position: "absolute",
              bottom: 10,
            }}
          >
            <button
              className="border border-[#FB7C29] text-[#FB7C29] px-6 py-2 rounded hover:bg-red-500 hover:text-white duration-200"
              style={{ height: 50, width: "270px" }}
              onClick={() => handleDeleteCreator(data.action?._id)}
            >
              Delete
            </button>

            <button
              className=" bg-[#FB7C29] text-white px-6 py-2 rounded hover:bg-orange-400 duration-200"
              style={{ height: 50, width: "270px" }}
              onClick={() => setIsDrawerVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              borderBottom: "1px solid #ffba8d",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
                className="rounded"
                src={data.action?.uploadId}
                alt="creator"
              />
              <div>
                <p className="text-xl">
                  Gbor Received: {data.action?.total_amount}
                </p>
              </div>
            </div>
          </div>

          <Form
            layout="vertical"
            initialValues={initialFormValues}
            style={{ marginTop: "10px" }}
            onFinish={handleUpdateCreator}
          >
            <Form.Item
              label="Username"
              style={{ marginBottom: 5 }}
              name="username"
            >
              <Input className="h-12" />
            </Form.Item>
            <Form.Item label="Email" style={{ marginBottom: 5 }} name="email">
              <Input className="h-12" disabled />
            </Form.Item>

            <Form.Item
              label="Website"
              name="website"
              style={{ marginBottom: 5 }}
            >
              <Input className="h-12" disabled />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              style={{ marginBottom: 5 }}
            >
              <TextArea
                placeholder="Description"
                autoSize={{
                  minRows: 4,
                  maxRows: 5,
                }}
              />
            </Form.Item>
            <Row gutter={15} style={{ marginTop: "20px" }}>
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
            <Row gutter={15} style={{ marginBottom: "0px" }}>
              <Col span={12}>
                <Form.Item
                  name="facebook"
                  label="Facebook"
                  labelCol={{ span: 24 }}
                >
                  <Input style={{ height: "45px" }} placeholder="@username" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="youtube"
                  label="Youtube"
                  labelCol={{ span: 24 }}
                >
                  <Input style={{ height: "45px" }} placeholder="@username" />
                </Form.Item>
              </Col>
            </Row>
            <div
              style={{
                position: "absolute",
                bottom: -5,
              }}
            >
              <Form.Item>
                <Button
                  htmlType="submit"
                  className="login-form-button bg-[#fb7c29] hover:bg-red-500"
                  block
                  style={{
                    height: "45px",
                    width: "554px",
                    fontWeight: "400px",
                    border: 0,
                    color: "#fff",
                  }}
                >
                  Save Changes
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      )}
    </>
  );
};

export default CreatorData;
