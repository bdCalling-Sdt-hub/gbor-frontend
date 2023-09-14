import {
  Button,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Upload,
  message,
} from "antd";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
//import DatePicker from "react-multi-date-picker";
import styleForm from "./KycForm.module.css";
const { Option } = Select;
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const KycForm = () => {
  const [formType, setFormType] = useState("host");

  const [selectedCountry, setSelectedCountry] = useState("usa");

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const style = {
    formContainer: {
      background: "white",
      padding: "30px",
      borderRadius: "10px",
    },
    formNavigateBtn: {
      height: "50px",
    },
    input: {
      height: "45px",
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
          height: "45px",
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div style={{ padding: "0 60px" }}>
      <h2 style={{ marginBottom: "10px", fontWeight: "normal" }}>Kyc Form</h2>
      <div style={style.formContainer}>
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #cbcbcb",
            paddingBottom: "15px",
            gap: "10px",
          }}
        >
          <Button
            type="text"
            onClick={() => setFormType("host")}
            className={`${formType === "host" ? styleForm.navigateBtn : ""}`}
            style={style.formNavigateBtn}
            block
          >
            Host
          </Button>
          <Button
            type="text"
            onClick={() => setFormType("user")}
            className={`${formType === "user" ? styleForm.navigateBtn : ""}`}
            style={style.formNavigateBtn}
            block
          >
            User
          </Button>
          <Button
            type="text"
            onClick={() => setFormType("car")}
            className={`${formType === "car" ? styleForm.navigateBtn : ""}`}
            style={style.formNavigateBtn}
            block
          >
            Car
          </Button>
        </div>

        <div style={{ margin: "50px 0" }}>
          <Form>
            <Row gutter={16}>
              <Col span={12}>
                <div>
                  <label htmlFor="">Full Name</label>
                  <Form.Item name="name">
                    <Input
                      style={style.input}
                      placeholder="Type full name here"
                    />
                  </Form.Item>
                </div>
                <div>
                  <label
                    htmlFor=""
                    style={{ display: "block", marginBottom: "15px" }}
                  >
                    Gender
                  </label>
                  <Radio.Group>
                    <Radio value={1}>Male</Radio>
                    <Radio value={2}>Female</Radio>
                    <Radio value={3}>Others</Radio>
                  </Radio.Group>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="">Phone Number</label>
                  <div>
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="please enter your phone number"
                        style={style.input}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div>
                  <label htmlFor="">Address</label>
                  <Form.Item name="address">
                    <Input
                      style={style.input}
                      placeholder="Type address here"
                    />
                  </Form.Item>
                </div>
                <div>
                  <label htmlFor="">RFC</label>
                  <Form.Item name="rfc">
                    <Input style={style.input} placeholder="Type RFC here" />
                  </Form.Item>
                </div>
              </Col>

              <Col span={12}>
                <div>
                  <label htmlFor="">Email</label>
                  <Form.Item name="email">
                    <Input style={style.input} placeholder="Type email here" />
                  </Form.Item>
                </div>

                <div style={{ margin: "15px 0" }}>
                  <label htmlFor="">Date of Birth</label>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input style={{ height: "40px" }} format="DD" />
                    <Input
                      style={{ height: "40px" }}
                      format="MM"
                      onlyMonthPicker
                    />
                    <Input style={{ height: "40px" }} onlyYearPicker />
                  </div>
                </div>

                <div>
                  <label htmlFor="">Credit Card Number</label>
                  <Form.Item name="cardNumber">
                    <Input
                      style={style.input}
                      placeholder="Type card number here"
                    />
                  </Form.Item>
                </div>
                <div>
                  <label htmlFor="">Expire Date</label>
                  <Form.Item name="expireDate">
                    <Input style={style.input} placeholder="MM-YY" />
                  </Form.Item>
                </div>
                <div>
                  <label htmlFor="">CVV</label>
                  <Form.Item name="cvv">
                    <Input style={style.input} placeholder="Type CVV here" />
                  </Form.Item>
                </div>
              </Col>
            </Row>

            <Dragger
              style={{ background: "#E6E7F4", color: "#000b92" }}
              {...props}
            >
              <p className="ant-upload-drag-icon">
                <AiOutlineCloudUpload style={{ fontSize: "30px" }} />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default KycForm;
