import { Table, Typography, message } from "antd";
import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import baseAxios from "../../../../../Config";
const { Title, Text } = Typography;

const CommentTable = ({
  incomes,
  setReload,
  pagination,
  handlePagination,
  handleSearch,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [messageApi, contextHolder] = message.useMessage();

  const data = incomes?.map((item) => {
    return {
      creatorName: item.creator?.userName,
      donarName: item.donarName,
      messages: item.message,
      reportStatus: item.reportStatus ? (
        <p className="text-red-500 text-center">Active</p>
      ) : (
        ""
      ),
      action: item,
    };
  });
  const token = localStorage.token;

  const handleMessage = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FB7C29",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        baseAxios
          .patch(
            `api/payment/${id}`,
            {},
            {
              headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            if (res.data.status === 200) {
              messageApi.open({
                type: "success",
                content: "Message deleted successfully",
              });
              setReload((p) => p + 1);
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  const columns = [
    {
      title: "CREATOR NAME",
      dataIndex: "creatorName",
      key: "creatorName",
    },
    {
      title: "DONAR NAME",
      dataIndex: "donarName",
      key: "donarName",
      responsive: ["lg"],
    },
    {
      title: "MESSAGES",
      dataIndex: "messages",
      key: "messages",
    },
    {
      title: "REPORT STATUS",
      dataIndex: "reportStatus",
      key: "reportStatus",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      responsive: ["lg"],
      render: (
        _,
        record // Use the second parameter 'record'
      ) => (
        <div className="text-center">
          <button onClick={() => handleMessage(record.action._id)} type="text">
            <RiDeleteBin5Fill style={{ fontSize: "25px", color: "#ff0000" }} />
          </button>
        </div>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    handlePagination(page);
    handleSearch(page);
  };

  return (
    <>
      {contextHolder}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize,
          showSizeChanger: false,
          total: pagination?.total,
          current: currentPage,
          onChange: handlePageChange,
        }}
      />
    </>
  );
};
export default CommentTable;
