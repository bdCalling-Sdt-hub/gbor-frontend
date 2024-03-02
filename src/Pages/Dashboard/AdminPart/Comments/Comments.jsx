import { Button, Input } from "antd";

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "../../../../ReduxSlice/commentSlice";
import CommentTable from "./CommentTable";

const Comments = () => {
  const dispatch = useDispatch();
  const { data, pagination } = useSelector((state) => state.comment);
  const [reload, setReload] = useState(1);
  const [searchData, setSearchData] = useState("");

  const handleSearch = (page) => {
    const value = {
      search: searchData,
      page: page,
      limit: 10,
    };
    if (searchData !== "") {
      dispatch(Comment(value));
    }
  };

  const handlePagination = (page) => {
    const value = {
      page: page,
      limit: 10,
      search: searchData,
    };
    if (searchData === "") {
      dispatch(Comment(value));
    }
  };

  useEffect(() => {
    const value = {
      page: 1,
      limit: 10,
      search: searchData,
    };
    if (searchData === "") {
      dispatch(Comment(value));
    }
  }, [reload, searchData]);

  return (
    <div style={{ padding: "0px 50px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <Input
          prefix={<CiSearch style={{ fontSize: "20px" }} />}
          placeholder="Search by Name"
          style={{ height: "50px", border: `1px solid #fb7c29` }}
          onChange={(e) => setSearchData(e.target.value)}
        />

        <Button
          onClick={handleSearch}
          style={{
            background: "#fb7c29",
            color: "white",
            height: 50,
            width: "180px",
            border: "none",
          }}
        >
          Search
        </Button>
      </div>

      <CommentTable
        incomes={data}
        setReload={setReload}
        handlePagination={handlePagination}
        handleSearch={handleSearch}
        pagination={pagination}
      />
    </div>
  );
};

export default Comments;
