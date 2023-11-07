/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { Button, Col, Row, Select, Typography, message } from "antd";
import React, { useState } from "react";
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
            <img
              width={120}
              className="rounded"
              src={props.transactionData.action?.creator?.uploadId}
              alt="creator"
            />
            <div>
              <h2 className="text-xl font-medium">
                {" "}
                {props.transactionData.action?.creator?.fName +
                  " " +
                  props.transactionData.action?.creator?.lName}
              </h2>
              <p>Gbor Received: {props.transactionData?.received}</p>
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

                {/* <p className="text-lg font-light">Payment Method</p> */}
                <p className="text-lg font-light">Payment Amount</p>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <p className="text-lg font-light">
                  {props.transactionData?.date}
                </p>
                {/* <p className="text-lg font-light">Visa Card</p> */}
                <p className="text-lg font-light">
                  {props.transactionData?.received}
                </p>
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
                <p className="text-lg font-light">
                  {" "}
                  {props.transactionData?.donarName}
                </p>
              </Col>
              <Col span={24}>
                <textarea
                  name=""
                  id=""
                  rows="6"
                  className="border border-[#fb7c29] w-full rounded outline-none p-2 mt-2"
                >
                  {props.transactionData?.action?.message}
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
            <img
              width={120}
              className="rounded"
              src={props.earningData.action?.creator?.uploadId}
              alt="creator"
            />
            <div>
              <h2 className="text-xl font-medium">
                {props.earningData.action?.creator?.fName +
                  " " +
                  props.earningData.action?.creator?.lName}
              </h2>
              <p>Gbor Received: {props.earningData?.amount}</p>
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
                {/* <p className="text-lg font-light">Payment Method</p> */}
                <p className="text-lg font-light">Payment Amount</p>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <p className="text-lg font-light">{props.earningData?.date}</p>
                {/* <p className="text-lg font-light">Visa Card</p> */}
                <p className="text-lg font-light">
                  {props.earningData?.amount}
                </p>
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
                <p className="text-lg font-light">
                  {props.earningData?.donarName}
                </p>
              </Col>
              <Col span={24}>
                <textarea
                  name=""
                  id=""
                  rows="6"
                  className="border border-[#fb7c29] w-full rounded outline-none p-2 mt-2"
                >
                  {props.earningData?.action?.message}
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
      {props.creatorData && (
        <CreatorData
          data={props.creatorData}
          setReload={props.setReload}
          setIsDrawerVisible={props.setIsDrawerVisible}
        />
      )}
    </>
  );
};

export default DrawerPage;
