import { Button, Col, Row } from "antd";
import React from "react";
import img from "../../../Images/Photo.png";

const BlockList = () => {
  const style = {
    cardStyle: {
      background: "#E6E7F4",
      padding: "15px",
      textAlign: "center",
      borderRadius: "10px",
    },
    cardBtn: {
      color: "white",
    },
  };
  return (
    <div style={{ background: "white", padding: "30px", borderRadius: "10px" }}>
      <Row gutter={[16, 16]}>
        {[...Array(12).keys()].map((item) => {
          return (
            <>
              <Col span={6}>
                <div style={style.cardStyle}>
                  <img src={img} alt="" />
                  <h2 style={{ color: "#fb7c29", marginBottom: "5px" }}>
                    Jack Sparrow
                  </h2>
                  <p>jacks20@gmail.com</p>
                  <p style={{ margin: "8px 0" }}>+8478448548</p>
                  <div>
                    <Button
                      className={style.cardBtn}
                      style={{
                        background: "#D7263D",
                        ...style.cardBtn,
                        marginRight: "10px",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button style={{ background: "#fb7c29", ...style.cardBtn }}>
                      Approve
                    </Button>
                  </div>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default BlockList;
