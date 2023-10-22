/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { Button, Col, Row, Select, Typography, message } from "antd";
import React, { useState } from "react";
import img from "../../Images/creator1.png";
import CreatorData from "./CreatorData/CreatorData";
const { Title } = Typography;
const { Option } = Select;

const DrawerPage = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [approve, setApprove] = useState(false);

  console.log(props);

  const handleDonarMessage = () => {
    messageApi.open({
      type: "success",
      content: "Message Approved",
    });
    setApprove(true);
  };
  return (
    <>
      {contextHolder}
      {props.transactionData && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              borderBottom: "1px solid #ffba8d",
              paddingBottom: "20px",
            }}
          >
            <img width={120} className="rounded" src={img} alt="creator" />
            <div>
              <h2 className="text-xl font-medium">Amrin Amena</h2>
              <p>Gbor Received: 145</p>
            </div>
          </div>

          <div
            style={{
              margin: "15px 0",
              borderBottom: "1px solid  #ffba8d",
              paddingBottom: "15px",
            }}
          >
            <h2 className="text-xl font-medium mb-2">
              Transaction Information
            </h2>
            <Row>
              <Col span={12} style={{ textAlign: "left" }}>
                <p className="text-lg font-light">Time</p>
                <p className="text-lg font-light">Date</p>
                <p className="text-lg font-light">Payment Method</p>
                <p className="text-lg font-light">Payment Amount</p>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <p className="text-lg font-light">11:00pm</p>
                <p className="text-lg font-light">10/5/2023</p>
                <p className="text-lg font-light">Visa Card</p>
                <p className="text-lg font-light">45</p>
              </Col>
            </Row>
          </div>
          <div
            style={{
              margin: "15px 0",
            }}
          >
            <h2 className="text-xl font-medium mb-2">Donar Information</h2>
            <Row>
              <Col span={12} style={{ textAlign: "left" }}>
                <p className="text-lg font-light">Name</p>
                <p className="text-lg font-light">Message</p>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <p className="text-lg font-light">Lisa</p>
              </Col>
              <Col span={24}>
                <textarea
                  name=""
                  id=""
                  rows="6"
                  className="border border-[#fb7c29] w-full rounded outline-none p-2 mt-2"
                >
                  Amrin, your unwavering commitment to your creative endeavors
                  is truly inspiring. Before immersing ourselves in your
                  content, here's a donation as a token of appreciation, along
                  with wishes for your continued success and innovation. 🌟
                </textarea>
              </Col>
            </Row>
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
                border: "1px solid #fb7c29",
                color: "#fb7c29",
                height: 50,
                width: "555px",
              }}
            >
              Download
            </Button>
          </div>
        </>
      )}
      {props.earningData && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              borderBottom: "1px solid #ffba8d",
              paddingBottom: "20px",
            }}
          >
            <img width={120} className="rounded" src={img} alt="creator" />
            <div>
              <h2 className="text-xl font-medium">Amrin Amena</h2>
              <p>Gbor Received: 145</p>
            </div>
          </div>

          <div
            style={{
              margin: "15px 0",
              borderBottom: "1px solid  #ffba8d",
              paddingBottom: "15px",
            }}
          >
            <h2 className="text-xl font-medium mb-2">
              Transaction Information
            </h2>
            <Row>
              <Col span={12} style={{ textAlign: "left" }}>
                <p className="text-lg font-light">Time</p>
                <p className="text-lg font-light">Date</p>
                <p className="text-lg font-light">Payment Method</p>
                <p className="text-lg font-light">Payment Amount</p>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <p className="text-lg font-light">11:00pm</p>
                <p className="text-lg font-light">10/5/2023</p>
                <p className="text-lg font-light">Visa Card</p>
                <p className="text-lg font-light">45</p>
              </Col>
            </Row>
          </div>
          <div
            style={{
              margin: "15px 0",
            }}
          >
            <h2 className="text-xl font-medium mb-2">Donar Information</h2>
            <Row>
              <Col span={12} style={{ textAlign: "left" }}>
                <p className="text-lg font-light">Name</p>
                <p className="text-lg font-light">Message</p>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <p className="text-lg font-light">Lisa</p>
              </Col>
              <Col span={24}>
                <textarea
                  name=""
                  id=""
                  rows="6"
                  className="border border-[#fb7c29] w-full rounded outline-none p-2 mt-2"
                >
                  Amrin, your unwavering commitment to your creative endeavors
                  is truly inspiring. Before immersing ourselves in your
                  content, here's a donation as a token of appreciation, along
                  with wishes for your continued success and innovation. 🌟
                </textarea>
                {approve ? (
                  <button
                    disabled
                    style={{
                      border: "1px solid #fb7c29",
                      color: "#fb7c29",
                      height: 50,
                      width: "100%",
                      borderRadius: "3px",
                    }}
                  >
                    Approved
                  </button>
                ) : (
                  <button
                    onClick={handleDonarMessage}
                    className=" w-full h-12 bg-[#FB7C29] text-white hover:bg-red-500 rounded duration-200"
                    style={{ color: "white", border: "none" }}
                  >
                    Approve Message
                  </button>
                )}
              </Col>
            </Row>
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
                border: "1px solid #fb7c29",
                color: "#fb7c29",
                height: 50,
                width: "270px",
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
                width: "270px",
              }}
            >
              Print
            </Button>
          </div>
        </>
      )}
      {props.creatorData && <CreatorData data={props.creatorData} />}
    </>
  );
};

export default DrawerPage;
