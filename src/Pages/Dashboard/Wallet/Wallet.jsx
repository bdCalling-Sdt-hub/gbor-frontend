import { Pie } from "@ant-design/plots";
import { Button, Col, Drawer, Modal, Progress, Row, Typography } from "antd";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import WalletCard from "./WalletCard";
const { Title, Text } = Typography;

const Wallet = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardTitle, setCardTitle] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDrawer = (value) => {
    setIsDrawerVisible(true);
    setCardTitle(value);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setCardTitle(null);
  };

  const cardData = [
    {
      id: "1",
      validDate: "12/23",
      cardHolder: "Sanchez Haro Manuel",
      cardNumber: "**********4584",
    },
    {
      id: "2",
      validDate: "14/28",
      cardHolder: "Captain Jack Sparrow",
      cardNumber: "**********4670",
    },
    {
      id: "3",
      validDate: "12/24",
      cardHolder: "Pirates of Caribbean",
      cardNumber: "**********3658",
    },
    {
      id: "4",
      validDate: "15/25",
      cardHolder: "Kate Winslate",
      cardNumber: "**********8989",
    },
  ];

  const style = {
    progContainer: {
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "15px",
      height: "300px",
      border: "2px solid #fb7c29",
    },
    cardContainer: {
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "15px",
      marginTop: "40px",
    },
    addCardBtn: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      background: "#fb7c29",
      color: "white",
      height: "40px",
    },

    title: {
      color: "#8d8d8d",
      marginBottom: "8px",
      fontWeight: "normal",
    },
    cardBtn: {
      width: "100%",
      border: "1px solid #dfdfdf",
      height: "35px",
    },
  };
  const data = [
    {
      type: "Total Income",
      value: 500000,
    },
    {
      type: "Total Cost",
      value: 451500,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 18,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
    legend: {
      position: "bottom",
      layout: "horizontal",
    },
    style: {
      height: "240px",
    },
  };
  const colors = ["#FF7426", "#1EAAE7", "#2BC155", "#6418C3"];

  return (
    <div style={{ padding: "0 60px" }}>
      <h2
        style={{ fontSize: "25px", marginBottom: "10px", fontWeight: "normal" }}
      >
        Renti's Wallet
      </h2>

      <Row style={{ marginTop: "20px" }} gutter={24}>
        <Col lg={{ span: 12 }}>
          <div style={style.progContainer}>
            <h4 style={{ marginBottom: "20px" }}>Main Balance</h4>
            <h3 style={{ marginBottom: "20px" }}>$567,856.00</h3>
            <Progress
              percent={50}
              size={["100%", 20]}
              showInfo={false}
              status="active"
              strokeColor={"#fb7c29"}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "50px",
              }}
            >
              <div>
                <h3 style={style.title}>Valid Date</h3>
                <h3 style={{ fontWeight: "normal" }}>12/23</h3>
              </div>
              <div>
                <h3 style={style.title}>Card Holder</h3>
                <h3 style={{ fontWeight: "normal" }}>Sanchez Haro Manuel</h3>
              </div>
              <div>
                <h3 style={style.title}>Card Number</h3>
                <h3 style={{ fontWeight: "normal" }}>**********1234</h3>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={{ span: 12 }}>
          <div
            className=""
            style={{
              padding: "30px",
              borderRadius: "15px",
              backgroundColor: "#fff",
              border: "2px solid #fb7c29",
            }}
          >
            <Pie {...config} />
          </div>
        </Col>
      </Row>
      <div style={style.cardContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <Title level={3} style={{ color: "#fb7c29" }}>
            Card List
          </Title>
          <Button style={style.addCardBtn} onClick={() => showModal()}>
            <AiOutlinePlus style={{ fontSize: "15px" }} /> Add Card
          </Button>
        </div>
        {cardData.map((data, index) => (
          <WalletCard key={data.id} cardBg={colors[index]} data={data} />
        ))}
      </div>
      <Modal
        title={
          <h3
            style={{
              textAlign: "center",
              fontWeight: "normal",
              marginBottom: "30px",
            }}
          >
            Payment Method
          </h3>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
      >
        <Button
          type="text"
          style={style.cardBtn}
          onClick={() => {
            showDrawer("credit");
            handleCancel();
          }}
        >
          Credit Card
        </Button>
        <Button
          type="text"
          style={{ ...style.cardBtn, marginTop: "8px" }}
          onClick={() => {
            showDrawer("debit");
            handleCancel();
          }}
        >
          Debit Card
        </Button>
      </Modal>
      <Drawer
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>
              <Text>{cardTitle}</Text>
            </Typography>
            <Button type="text" onClick={closeDrawer}>
              <IoMdClose fontSize={25} />
            </Button>
          </div>
        }
        closable={false}
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        width={500}
      >
        {cardTitle === "credit" && <h2>Credit Card</h2>}
        {cardTitle === "debit" && <h2>Debit Card</h2>}
      </Drawer>
    </div>
  );
};

export default Wallet;
