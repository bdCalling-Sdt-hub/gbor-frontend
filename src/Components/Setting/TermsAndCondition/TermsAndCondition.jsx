import { Button, Col, Row, notification } from "antd";
import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { default as axios, default as baseAxios } from "../../../../Config";

const TermsAndCondition = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [api, contextHolder] = notification.useNotification();

  const token = localStorage.token;

  const successNotify = (placement) => {
    api.success({
      message: "Updated",
      description: "Successfully updated term and condition content",
      placement,
    });
  };
  const errorNotify = (placement) => {
    api.success({
      message: "Opps!",
      description: "Not updated term and condition content",
      placement,
    });
  };

  useEffect(() => {
    baseAxios
      .get("api/term-and-condition", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setContent(res.data?.data["Term and condition"]?.termAndCondition);
      });
  }, []);

  const handleTermCondition = () => {
    const values = {
      termAndCondition: content,
    };
    axios
      .post("api/term-and-condition", values, {
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
            onClick={handleTermCondition}
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

export default TermsAndCondition;
