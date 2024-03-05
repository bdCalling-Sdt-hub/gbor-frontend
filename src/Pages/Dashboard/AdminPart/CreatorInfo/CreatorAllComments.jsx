import { Button, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import baseAxios from "../../../../../Config";

const CreatorAllComments = () => {
  const { id } = useParams();
  const [creatorComments, setCreatorComments] = useState([]);
  const [reload, setReload] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    baseAxios
      .get(`/api/payment/message-list/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.token}`,
        },
      })
      .then((res) => setCreatorComments(res.data?.data));
  }, [id, reload]);

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
            `api/payment/${id.action._id}`,
            {},
            {
              headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.token}`,
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

  const data = creatorComments.map((item) => {
    return {
      comment: item.message,
      action: item,
    };
  });

  const columns = [
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: (
        <div className="text-right">
          <p>ACTION</p>
        </div>
      ),
      dataIndex: "action",
      key: "action",
      responsive: ["lg"],
      render: (_, record) => (
        <div style={{ textAlign: "right" }}>
          <Button onClick={() => handleMessage(record)} type="text">
            <RiDeleteBin6Line style={{ fontSize: "20px", color: "#595959" }} />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      {contextHolder}
      <div className="text-2xl flex items-center justify-between mb-5">
        <h2>All Comments</h2>
        <h2 className="text-orange-500">
          {creatorComments[0]?.creator.userName}
        </h2>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default CreatorAllComments;
