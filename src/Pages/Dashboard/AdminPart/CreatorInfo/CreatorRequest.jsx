import { Button, Col, Input, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import CreatorRequestCard from "../../../../Components/Common/CreatorRequestCard/CreatorRequestCard";
import { UnApproveCreators } from "../../../../ReduxSlice/unapproveCreators";

const CreatorRequest = () => {
  const dispatch = useDispatch();
  const { unApproveCreators, pagination } = useSelector(
    (state) => state.unApproveCreators
  );
  const [reload, setReload] = useState(1);
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const data = {
      page: 1,
      limit: 8,
    };
    dispatch(UnApproveCreators(data));
  }, [reload]);

  const onChangePage = (page) => {
    setCurrentPage(page);

    const data = {
      page: page,
      limit: 8,
    };
    dispatch(UnApproveCreators(data));
  };

  return (
    <div style={{ padding: "0px 60px" }}>
      <h2
        style={{ fontSize: "25px", marginBottom: "10px", fontWeight: "normal" }}
      >
        Search creator
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Input
          prefix={<CiSearch style={{ fontSize: "18px" }} />}
          placeholder="Search by Name/email"
          style={{
            height: "50px",
            border: `1px solid #fb7c29`,
          }}
        />
        <Button
          style={{
            background: "#fb7c29",
            color: "white",
            height: 50,
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
        Creator Request
      </h2>

      <div>
        <Row gutter={[16, 16]}>
          {unApproveCreators.map((data) => (
            <CreatorRequestCard
              key={data._id}
              data={data}
              setReload={setReload}
            />
          ))}
        </Row>

        <Row className="justify-end mt-14  py-4 rounded-b-md">
          <Col>
            <Pagination
              pageSize={pageSize}
              total={pagination?.totalDocuments}
              current={currentPage}
              onChange={onChangePage}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreatorRequest;
