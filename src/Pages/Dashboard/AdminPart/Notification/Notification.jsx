import { Col, Modal, Pagination, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../../../Config";
import { Notifications } from "../../../../ReduxSlice/notificationSlice";
import "./Notification.css";

function Notification() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { allNotification, pagination } = useSelector(
    (state) => state.notification.allNotification
  );
  const dispatch = useDispatch();
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [modalData, setModalData] = useState();

  console.log(pagination);
  const token = localStorage.token;

  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData(data);
    console.log(data);
    axios
      .patch(
        `/api/notifications/${data._id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const data = {
          limit: 10,
          page: 1,
        };
        dispatch(Notifications(data));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function getTimeAgo(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);

    const secondsAgo = Math.floor((now - date) / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const yearsAgo = Math.floor(daysAgo / 365);

    if (yearsAgo > 0) {
      return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
    } else if (daysAgo > 0) {
      return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
    } else if (hoursAgo > 0) {
      return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
    } else if (minutesAgo > 0) {
      return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
    } else {
      return "Just now";
    }
  }

  const handlePagination = (page) => {
    const data = {
      limit: 10,
      page: page,
    };
    dispatch(Notifications(data));
  };

  const onChangePage = (page) => {
    setCurrentPage(page);
    handlePagination(page);
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

        {allNotification?.map((item) => {
          return (
            <Col
              className="notification"
              lg={{ span: 24 }}
              style={{
                cursor: "pointer",
              }}
              onClick={() => showModal(item)}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="user-image" style={{ marginRight: "50px" }}>
                  <img
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                    }}
                    src={item.image}
                  />
                </div>
                <div className="lowercase font-sans">
                  <p
                    style={{
                      fontWeight: item.viewStatus ? "normal" : "bold",
                      fontSize: item.viewStatus ? "15px" : "18px",
                      color: "#4d4d4d",
                    }}
                  >
                    {item.message}
                  </p>
                  <p style={{ color: "gray", marginTop: "10px" }}>
                    {getTimeAgo(item.createdAt)}
                  </p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row style={{ marginTop: "20px", marginBottom: "30px" }}>
        <Col lg={{ span: 12 }}></Col>
        <Col lg={{ span: 8, offset: 4 }} style={{ textAlign: "right" }}>
          <Pagination
            pageSize={pageSize}
            current={currentPage}
            onChange={onChangePage}
            total={pagination?.totalDocuments}
          />
        </Col>
      </Row>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
        width={"60%"}
      >
        <div>
          <h2 style={{ marginBottom: "10px" }}>{modalData?.message}</h2>

          <img
            style={{ borderRadius: "10px" }}
            width="100%"
            src={modalData?.image}
            alt=""
          />
        </div>
      </Modal>
    </div>
  );
}

export default Notification;
