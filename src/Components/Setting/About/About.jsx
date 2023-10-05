import { Button, Col, Row, message } from "antd";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";

import Swal from "sweetalert2";
import axios from "../../../../Config";
import "./About.css";

const About = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const token = localStorage.token;

  const aboutDataSave = () => {
    console.log(content);
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
          Swal.fire("", "Successfully updated about information", "success");
        }
      })
      .catch((err) => Swal.fire("🤢", `${err.message}`, "error"));
  };
  return (
    <div>
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
            onClick={aboutDataSave}
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
