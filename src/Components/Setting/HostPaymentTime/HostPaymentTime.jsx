import { Button, Input, Radio, Space } from "antd";
import React, { useState } from "react";

const HostPaymentTime = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div
      style={{
        textAlign: "center",
        background: "#f9f9ff",
        padding: "20px",
        borderRadius: "6px",
      }}
    >
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>1 Week</Radio>
          <Radio value={2}>2 Week</Radio>
          <Radio value={3}>3 Week</Radio>
          <Radio value={4}>4 Week</Radio>
          <Radio value={5}>5 Week</Radio>
          <Radio value={6}>
            More...
            {value === 6 ? (
              <Input
                style={{
                  width: 100,
                  marginLeft: 10,
                }}
              />
            ) : null}
          </Radio>
        </Space>
      </Radio.Group>
      <Button
        style={{
          background: "#000b92",
          color: "#fff",
          marginTop: "80px",
          height: "45px",
          fontWeight: "300",
        }}
        block
      >
        SET PAYMENT TIME
      </Button>
    </div>
  );
};

export default HostPaymentTime;
