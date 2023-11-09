import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import Swal from "sweetalert2";
import axios from "../../../../Config";

const CreatorData = ({ data, setReload, setIsDrawerVisible }) => {
  const [edit, setEdit] = useState(false);

  const { socialLink } = data.action;

  const token = localStorage.token;
  const initialFormValues = {
    email: data.action?.email,
    website: data?.webLink,
    password: data?.password,
  };

  const handleUpdateCreator = (value) => {
    console.log(value);
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
              Swal.fire("Opps!", "Creator deleted successfully", "success");
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
                style={{ width: "150px", height: "130px" }}
                className="rounded"
                src={data.action?.uploadId}
                alt="creator"
              />
              <div>
                <h2 className="text-xl font-medium">
                  {data.action?.fName + " " + data.action?.lName}
                </h2>
                <p>Gbor Received: 14</p>
                <div className="flex gap-2 mt-2">
                  {socialLink.youtube && (
                    <a
                      href={`https://www.youtube.com/@${socialLink.youtube}`}
                      target="_blank"
                    >
                      <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                        <FaYoutube fontSize={28} color="#ff0000" />
                      </div>
                    </a>
                  )}
                  {socialLink.instagram && (
                    <a
                      href={`https://www.instagram.com/${socialLink.instagram}`}
                      target="_blank"
                    >
                      <div className="bg-white p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                        <FaInstagram fontSize={28} color="#ff3725" />
                      </div>
                    </a>
                  )}
                  {socialLink.tiktok && (
                    <a
                      href={`https://www.tiktok.com/@${socialLink.tiktok}`}
                      target="_blank"
                    >
                      <div className="bg-black p-2 w-10 h-10 flex justify-center items-center rounded-md cursor-pointer drop-shadow">
                        <FaTiktok fontSize={28} color="#fff" />
                      </div>
                    </a>
                  )}
                  {socialLink.facebook && (
                    <a
                      href={`https://www.facebook.com/${socialLink.facebook}`}
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
            <Form.Item label="Password" name="password">
              <Input.Password className="h-12" readOnly />
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
            >
              Print
            </button>
          </div>
        </div>
      ) : (
        <>
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
                style={{ width: "150px", height: "130px" }}
                className="rounded"
                src={data.action?.uploadId}
                alt="creator"
              />
              <div>
                <h2 className="text-xl font-medium">
                  {data.action?.fName + " " + data.action?.lName}
                </h2>
                <p>Gbor Received: 14</p>
                <div className="flex gap-2 mt-5">
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
            </div>
          </div>

          <Form
            layout="vertical"
            style={{ marginTop: "10px" }}
            initialValues={initialFormValues}
            onFinish={handleUpdateCreator}
          >
            <Form.Item
              label="Email"
              style={{ marginBottom: 5 }}
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input className="h-12" />
            </Form.Item>

            <Form.Item
              label="Website"
              name="website"
              style={{ marginBottom: 5 }}
            >
              <Input className="h-12" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password className="h-12" />
            </Form.Item>

            <Form.Item>
              <button className="text-lg">Change password</button>
            </Form.Item>
            <Form.Item
              style={{
                position: "absolute",
                bottom: 0,
              }}
            >
              <Button
                className=" bg-[#FB7C29] text-white hover:bg-red-500 "
                style={{
                  height: 50,
                  width: "555px",
                  color: "white",
                  border: "none",
                }}
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </>
  );
};

export default CreatorData;
