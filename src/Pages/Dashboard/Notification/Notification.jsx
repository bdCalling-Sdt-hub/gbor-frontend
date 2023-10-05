import { Col, Modal, Pagination, Row } from "antd";
import React, { useState } from "react";
import "./Notification.css";

function Notification() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Row>
        <h2
          style={{
            fontSize: "25px",
            marginBottom: "30px",
            fontWeight: "normal",
          }}
        >
          All Notifications
        </h2>

        {[...Array(5).keys()].map((_, index) => {
          return (
            <Col
              className="notification"
              lg={{ span: 24 }}
              style={{ cursor: "pointer" }}
              onClick={showModal}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="user-image" style={{ marginRight: "50px" }}>
                  <img
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                    }}
                    src="https://siffahim.github.io/MetaCGI-Tailwind/images/2.jpg"
                  />
                </div>
                <div className="">
                  <p>
                    <span style={{ fontWeight: "bold" }}>Professor Sergio</span>{" "}
                    start a new trip at 5pm. Trip No.56. Trip started from
                    Mexico city.....
                  </p>
                  <p style={{ color: "gray", marginTop: "10px" }}>1hr ago</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col lg={{ span: 12 }}>
          <h2 style={{ fontSize: "20px", color: "#fb7c29" }}>
            Showing 1-10 OF 250
          </h2>
        </Col>
        <Col lg={{ span: 8, offset: 4 }}>
          <Pagination
            defaultCurrent={1}
            total={50}
            showQuickJumper={false}
            showSizeChanger={false}
          />
        </Col>
      </Row>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
        width={"50%"}
      >
        <div>
          <h2
            style={{
              marginBottom: "10px",

              fontSize: "20px",
            }}
          >
            a new creator account has been registered on our platform. Please
            review the account details and take any necessary action if
            required.
          </h2>

          <img
            style={{ borderRadius: "10px" }}
            width="100%"
            src="https://media.glamourmagazine.co.uk/photos/61d41b63c5af0fe87af8fbb4/16:9/w_2560%2Cc_limit/EMMASHP040122_DEFAULT2GettyImages-476245909.jpg"
            alt=""
          />
        </div>
      </Modal>
    </div>
  );
}

export default Notification;
