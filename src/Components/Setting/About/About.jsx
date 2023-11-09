import { Button, Col, Row, notification } from "antd";
import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";

import { default as axios } from "../../../../Config";
import "./About.css";

const About = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [api, contextHolder] = notification.useNotification();

  const token = localStorage.token;

  const successNotify = (placement) => {
    api.success({
      message: "Updated",
      description: "Successfully updated about us content",
      placement,
    });
  };

  const errorNotify = (placement) => {
    api.success({
      message: "Opps!",
      description: "Not updated about us content",
      placement,
    });
  };

  useEffect(() => {
    axios
      .get("api/aboutus", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setContent(res.data.data?.aboutus?.aboutUs);
      });
  }, []);

  const aboutChange = () => {
    const values = {
      aboutUs: content,
    };
    axios
      .post("api/aboutus", values, {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          successNotify("bottomRight");
        }
      })
      .catch((err) => errorNotify("bottomRight"));
  };

  return (
    <div>
      {contextHolder}
      <Row>
        <Col lg={{ span: 24 }}>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => {
              setContent(newContent);
            }}
          />

          <Button
            className=" bg-[#FB7C29]  hover:bg-red-500 duration-200"
            onClick={aboutChange}
            block
            style={{
              marginTop: "30px",
              color: "#fff",
              height: "45px",
              border: "none",
            }}
          >
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default About;
