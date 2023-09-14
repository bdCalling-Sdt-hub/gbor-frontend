/* eslint-disable react/prop-types */
import { Button, Col, Drawer, Dropdown, Row, Typography } from "antd";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
import img from "../../../Images/image 1.png";

const { Text } = Typography;

const WalletCard = ({ data, cardBg }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [editedCardData, setEditedCardData] = useState(null);

  const { validDate, cardHolder, cardNumber } = data;

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setEditedCardData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setEditedCardData(null);
  };
  const style = {
    card: {
      marginBottom: "20px",
      borderBottom: "1px solid #ebe6e6",
      paddingBottom: "30px",
    },
    cardType: {
      height: "160px",
      background: cardBg,
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
    cardMenuBtn: {
      width: "100%",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    title: {
      color: "#8d8d8d",
      marginBottom: "8px",
      fontWeight: "normal",
    },
  };

  return (
    <div style={style.card}>
      <Row gutter={[10, 24]} style={{ display: "flex", alignItems: "center" }}>
        <Col span={6} style={style.cardType}>
          <div style={style.icon}>
            <img src={img} alt="" />
          </div>
        </Col>
        <Col span={4}>
          <h3 style={style.title}>Valid Date</h3>
          <h3
            style={{
              fontWeight: "normal",
            }}
          >
            {validDate}
          </h3>
        </Col>
        <Col span={6}>
          <h3 style={style.title}>Card Holder</h3>
          <h3
            style={{
              fontWeight: "normal",
            }}
          >
            {cardHolder}
          </h3>
        </Col>
        <Col span={6}>
          <h3 style={style.title}>Card Number</h3>
          <h3
            style={{
              fontWeight: "normal",
            }}
          >
            {cardNumber}
          </h3>
        </Col>
        <Col span={2}>
          <Dropdown
            overlay={
              <div
                style={{
                  background: "#fff",
                  borderRadius: "4px",
                  boxShadow: "0 0 5px #e3e2e2",
                  padding: "6px",
                }}
              >
                <Button
                  type="text"
                  onClick={() => showDrawer(data)}
                  style={style.cardMenuBtn}
                >
                  <LiaEditSolid fontSize={16} />
                  Edit Card
                </Button>
                <Button
                  type="text"
                  style={{ ...style.cardMenuBtn, color: "#D7263D" }}
                >
                  <RiDeleteBin6Line fontSize={16} />
                  Delete Card
                </Button>
              </div>
            }
            placement="bottomRight"
          >
            <Button type="text">
              <BsThreeDotsVertical style={{ fontSize: "20px" }} />
            </Button>
          </Dropdown>
        </Col>
      </Row>

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
              <Text>Edit Card</Text>
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
        width={600}
      >
        {editedCardData && (
          <DrawerPage editedCardData={editedCardData} cardBg={cardBg} />
        )}
      </Drawer>
    </div>
  );
};

export default WalletCard;
