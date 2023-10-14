import { Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const MessageCreatorPage = () => {
  const { dynamic } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/fakeDB.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const filterData = data.find((item) => item.id.toString() === dynamic);

  return (
    <>
      <Link
        to="/dashboard/message"
        className="my-4 text-xl flex items-center "
        style={{ color: "black" }}
      >
        <IoIosArrowBack style={{ fontSize: "20px" }} />{" "}
        <span>{filterData?.name}</span>
      </Link>
      <div className="border border-[#fb7c29] w-full rounded-md p-8">
        <div className="w-full h-[510px] overflow-y-auto flex flex-col scrollbar">
          {[...Array(10).keys()].map((index) => {
            return (
              <>
                {/* First Section (Left) */}
                <div className="mb-4">
                  <div className="flex gap-2">
                    <Avatar
                      size={35}
                      src="https://avatars.githubusercontent.com/u/49217418?v=4"
                      style={{ borderRadius: "50%" }}
                    />
                    <div className="bg-orange-500 w-1/2 rounded-r-xl rounded-bl-xl p-4 text-white relative">
                      IncomingFait divin beauté sincere pieds tout m'enivre
                      divines vaincu, morceau genoux masque pour vit, volupté
                      qu'un haut grâces vécu vainqueur. morceau genoux masque
                      pour vit, volupté qu'un haut grâces vécu vainqueur.
                    </div>
                  </div>
                  <p className="text-gray-400 ml-12 mt-1">50 min ago</p>
                </div>

                {/* Second Section (Right) */}
                <div className="mb-4">
                  <div
                    className="flex gap-2"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <div className="bg-orange-400 w-1/2 rounded-l-xl rounded-br-xl p-4 text-white relative">
                      IncomingFait divin beauté sincere pieds tout m'enivre
                      divines vaincu, morceau genoux masque pour vit, volupté
                      qu'un haut grâces vécu vainqueur. morceau genoux masque
                      pour vit, volupté qu'un haut grâces vécu vainqueur.
                    </div>
                    <Avatar
                      size={35}
                      src="https://avatars.githubusercontent.com/u/6828924?v=4"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <p className="text-gray-400  text-right mr-12 mt-1">
                    1 hour ago
                  </p>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex gap-2 p-1">
          <input
            type="text"
            placeholder="Type message"
            className="w-full h-12 border border-orange-400 rounded px-3 outline-none text-lg"
            name=""
            id=""
          />
          <button className="px-2">
            <BsFillSendFill fontSize={30} color="#fb7c29" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MessageCreatorPage;
