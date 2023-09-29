import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsPlusCircleDotted } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import ImageUploader from "react-image-upload";
import colors from "../../../Constant/colors";
import CreatorInfoTable from "./CreatorInfoTable";
const { Title, Text } = Typography;

const CreatorInfo = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [transactionData, setTransactionData] = useState(null);
  const [bannerImage, setBannerImage] = useState([]);
  const [socialLinks, setSocialLinks] = useState(1);

  function getImageFileObject(imageFile) {
    setBannerImage([...bannerImage, imageFile]);
  }

  function runAfterImageDelete(file) {
    console.log({ file });
  }

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setTransactionData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setTransactionData(null);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div style={{ padding: "0px 60px" }}>
      <h2
        style={{ fontSize: "25px", marginBottom: "10px", fontWeight: "normal" }}
      >
        Search Creator
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Input
          prefix={<CiSearch style={{ fontSize: "18px" }} />}
          style={{ height: "50px", borderColor: colors.primaryColor }}
          placeholder="Search by Name/Id"
        />
        <Button
          style={{
            background: "#fb7c29",
            color: "white",
            height: 50,
            width: "180px",
            border: 0,
          }}
        >
          Search
        </Button>
      </div>

      <div className="flex  items-center justify-between mt-10 mb-4">
        <h2
          style={{
            fontSize: "25px",

            fontWeight: "normal",
          }}
        >
          Creators List
        </h2>
        <button
          className="bg-[#fb7c29] text-white px-4 font-medium py-3 rounded flex items-center gap-1 text-md"
          onClick={showDrawer}
        >
          Add Creator <AiOutlineUserAdd fontSize={20} />
        </button>
      </div>
      <CreatorInfoTable />
      <Drawer
        title={
          <div>
            <Typography>
              <Title level={5} style={{ color: "white" }} strong>
                Add New Creator
              </Title>
              <Text style={{ color: "white" }}>Create a new creator ID</Text>
            </Typography>
          </div>
        }
        headerStyle={{ background: "#fb7c29", color: "#fff" }}
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        width={600}
        closable={false}
        extra={
          <Space>
            <Button
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "100%",
                backgroundColor: "#f5f5f5",
                color: "#fb7c29",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={closeDrawer}
            >
              <CloseOutlined />
            </Button>
          </Space>
        }
      >
        <div>
          <div
            style={{
              display: "flex",
              gap: "15px",
              borderBottom: "1px solid  #ffba8d",
              paddingBottom: "20px",
            }}
          >
            <div className="mx-auto">
              <ImageUploader
                style={{ borderRadius: "10px" }}
                onFileAdded={(img) => getImageFileObject(img)}
                onFileRemoved={(img) => runAfterImageDelete(img)}
              />
            </div>
          </div>

          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            onFinish={onFinish}
            autoComplete="off"
            style={{ marginTop: "10px", padding: "0" }}
          >
            <Form.Item
              label="Full Name"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              style={{ marginBottom: "4px" }}
            >
              <Input style={{ height: "45px" }} placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
              style={{ marginBottom: "4px" }}
            >
              <Input
                style={{ height: "45px" }}
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              label="Website"
              name="website"
              rules={[
                {
                  required: true,
                  message: "Please input your website link!",
                },
              ]}
              style={{ marginBottom: "4px" }}
            >
              <Input
                style={{ height: "45px" }}
                placeholder="Enter your website link"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              style={{ marginBottom: "4px" }}
            >
              <Input.Password
                style={{ height: "45px" }}
                placeholder="Enter your password"
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              style={{ marginBottom: "4px" }}
            >
              <Input.Password
                style={{ height: "45px" }}
                placeholder="Enter your password"
              />
            </Form.Item>
            {[...Array(socialLinks).keys()].map((link) => (
              <Form.Item
                label="Social Media link"
                name={`socialMedia${link.toString()}`}
                rules={[
                  {
                    required: true,
                    message: "Please input your social link!",
                  },
                ]}
                style={{ marginBottom: "4px" }}
              >
                <Input
                  style={{ height: "45px" }}
                  placeholder="Enter your social link"
                />
              </Form.Item>
            ))}
            <button
              className="bg-[#fb7c29] text-white px-4 font-medium py-3 rounded flex items-center gap-1 text-md"
              onClickCapture={() => setSocialLinks((prev) => prev + 1)}
            >
              <BsPlusCircleDotted fontSize={20} />
              Link
            </button>

            <Form.Item style={{ marginTop: "20px" }}>
              <Button
                htmlType="submit"
                block
                style={{
                  background: "#fb7c29",
                  color: "white",
                  height: 50,
                  width: "550px",
                }}
              >
                Create
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Drawer>
    </div>
  );
};

export default CreatorInfo;
