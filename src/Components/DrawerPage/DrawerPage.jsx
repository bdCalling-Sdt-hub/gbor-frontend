/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { Badge, Button, Form, Input, Select, Typography } from "antd";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import cardImg from "../../Images/Cards.png";
import img from "../../Images/image 1.png";
const { Title } = Typography;

const { Option } = Select;

const DrawerPage = (props) => {
  const style = {
    cardType: {
      height: "150px",
      width: "250px",
      background: props.cardBg,
      borderRadius: "10px",
      position: "relative",
    },
    icon: {
      position: "absolute",
      bottom: "10px",
      left: "10px",
      background: "#fff",
      padding: "0 8px",
      paddingTop: "8px",
      borderRadius: "3px",
    },
    title: {
      color: "#8d8d8d",
      fontWeight: "normal",
    },
    editInput: {
      height: "45px",
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 100,
          height: "45px",
        }}
      >
        <Option value="86">🏳️‍🌈</Option>
        <Option value="87">🏳️‍⚧️</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      {props.editedCardData && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              borderBottom: "1px solid #ebe6e6",
              paddingBottom: "20px",
            }}
          >
            <div style={style.cardType}>
              <div style={style.icon}>
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <div style={{ marginBottom: "8px" }}>
                <h4 style={style.title}>Valid Date</h4>
                <h4
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {props.editedCardData.validDate}
                </h4>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <h4 style={style.title}>Card Holder</h4>
                <h4
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {props.editedCardData.cardHolder}
                </h4>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <h4 style={style.title}>Card Number</h4>
                <h4
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {props.editedCardData.cardNumber}
                </h4>
              </div>
            </div>
          </div>

          <div>
            <Form onFinish={onFinish}>
              <div>
                <label htmlFor="">Your Name</label>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input
                    style={style.editInput}
                    defaultValue={props.editedCardData.cardHolder}
                  />
                </Form.Item>
              </div>
              <div>
                <label htmlFor="">Email</label>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input
                    style={style.editInput}
                    defaultValue={"siffahim25@gmail.com"}
                  />
                </Form.Item>
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
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
                    addonBefore={prefixSelector}
                    style={{ height: "45px" }}
                    defaultValue={"01646524028"}
                  />
                </Form.Item>
              </div>
              <div>
                <label htmlFor="">Card Number</label>
                <Form.Item
                  name="cardNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your card number!",
                    },
                  ]}
                >
                  <Input
                    style={style.editInput}
                    defaultValue={props.editedCardData.cardNumber}
                  />
                </Form.Item>
              </div>
              <div>
                <label htmlFor="">CVC</label>
                <Form.Item
                  name="cvc"
                  rules={[
                    {
                      required: true,
                      message: "Please input your cvc!",
                    },
                  ]}
                >
                  <Input style={style.editInput} defaultValue={548} />
                </Form.Item>
              </div>
              <div>
                <label htmlFor="">Expire Date</label>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Expire Date!",
                    },
                  ]}
                >
                  <Input
                    style={style.editInput}
                    defaultValue={props.editedCardData.validDate}
                  />
                </Form.Item>
              </div>

              <Form.Item>
                <Button
                  style={{
                    background: "#000890",
                    color: "white",
                    width: "100%",
                    height: "45px",
                    marginTop: "100px",
                  }}
                  htmlType="submit"
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          </div>
        </>
      )}
      {props.earningData && (
        <div>
          <div style={{ display: "flex", gap: "15px" }}>
            <div>
              <img width={120} src="https://i.imgur.com/JFHjdNr.jpg" alt="" />
            </div>
            <div style={{ marginTop: "-7px" }}>
              <p style={{ fontSize: "20px" }}>{props.earningData.username}</p>
              <p>INE: SNHRM570818MDFPM10</p>
              <p>Trip Completes:{props.earningData.status.length}</p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                <AiFillStar color="#fba91d" />
                <span>4.8</span>
              </div>
            </div>
          </div>
          <div>
            <Title level={4}>
              Trip Details{" "}
              <Badge
                className="site-badge-count-109"
                count={"complete"}
                style={{ backgroundColor: "#E6F6F4", color: "#00A991" }}
              />
            </Title>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              position: "absolute",
              bottom: 10,
            }}
          >
            <Button
              block
              style={{
                background: "#fb7c29",
                color: "white",
                height: 50,
                width: "220px",
              }}
            >
              Download
            </Button>
            <Button
              block
              style={{
                background: "#fb7c29",
                color: "white",
                height: 50,
                width: "220px",
              }}
            >
              Print
            </Button>
          </div>
        </div>
      )}
      {props.hostData && (
        <div>
          <div
            style={{
              display: "flex",
              gap: "15px",
              borderBottom: "1px solid #B0B3DD",
            }}
          >
            <div>
              <img width={120} src="https://i.imgur.com/JFHjdNr.jpg" alt="" />
            </div>
            <div style={{ marginTop: "-7px" }}>
              <p style={{ fontSize: "20px" }}>{props.hostData?.name}</p>
              <p>INE: SNHRM570818MDFPM10</p>
              <p>Trip Completes: 5</p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                <AiFillStar color="#fba91d" />
                <span>4.8</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "10px" }}>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="">Email</label>
              <Input readOnly style={{ height: "45px" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="">Phone</label>
              <Input readOnly style={{ height: "45px" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="">Address</label>
              <Input readOnly style={{ height: "45px" }} />
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h3>Payment Method</h3>
            <img width="80" style={{ margin: "10px 0" }} src={cardImg} alt="" />
            <div style={{ marginTop: "10px" }}>
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="">Credit Card Number</label>
                <Input readOnly style={{ height: "45px" }} />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="">Account Number</label>
                <Input readOnly style={{ height: "45px" }} />
              </div>
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="">Account Holder Name</label>
                <Input readOnly style={{ height: "45px" }} />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              position: "absolute",
              bottom: 10,
            }}
          >
            <Button
              block
              style={{
                background: "#fb7c29",
                color: "white",
                height: 50,
                width: "270px",
              }}
            >
              Block
            </Button>
            <Button
              block
              style={{
                background: "#fb7c29",
                color: "white",
                height: 50,
                width: "270px",
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      )}

      {props.invoiceData && (
        <div>
          <div style={{ display: "flex", gap: "15px" }}>
            <div>
              <img width={120} src="https://i.imgur.com/JFHjdNr.jpg" alt="" />
            </div>
            <div style={{ marginTop: "-7px" }}>
              <p style={{ fontSize: "20px" }}>{props.invoiceData.username}</p>
              <p>INE: SNHRM570818MDFPM10</p>
              <p>Trip Completes:{props.invoiceData.status.length}</p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                <AiFillStar color="#fba91d" />
                <span>4.8</span>
              </div>
            </div>
          </div>
          <div>
            <Title level={4}>
              Trip Details{" "}
              <Badge
                className="site-badge-count-109"
                count={"complete"}
                style={{ backgroundColor: "#E6F6F4", color: "#00A991" }}
              />
            </Title>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              position: "absolute",
              bottom: 10,
            }}
          >
            <Button
              block
              style={{
                background: "#fb7c29",
                color: "white",
                height: 50,
                width: "220px",
              }}
            >
              Download
            </Button>
            <Button
              block
              style={{
                background: "#fb7c29",
                color: "white",
                height: 50,
                width: "220px",
              }}
            >
              Print
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default DrawerPage;
