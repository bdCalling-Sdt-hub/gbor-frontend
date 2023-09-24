import { Button, Input } from "antd";
import React from "react";
import { CiSearch } from "react-icons/ci";
import colors from "../../../Constant/colors";
import CreatorInfoTable from "./CreatorInfoTable";

const CreatorInfo = () => (
  <div style={{ padding: "0px 60px" }}>
    <h2
      style={{ fontSize: "25px", marginBottom: "10px", fontWeight: "normal" }}
    >
      Search Creator
    </h2>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Input
        prefix={<CiSearch style={{ fontSize: "18px" }} />}
        style={{ height: "44px", borderColor: colors.primaryColor }}
        placeholder="Search by Name/Id"
      />
      <Button
        style={{
          background: "#fb7c29",
          color: "white",
          height: 45,
          width: "180px",
        }}
      >
        Search
      </Button>
    </div>

    <h2
      style={{
        fontSize: "25px",
        marginTop: "50px",
        marginBottom: "20px",
        fontWeight: "normal",
      }}
    >
      All Host List With Their Information
    </h2>
    <CreatorInfoTable />
  </div>
);

export default CreatorInfo;
