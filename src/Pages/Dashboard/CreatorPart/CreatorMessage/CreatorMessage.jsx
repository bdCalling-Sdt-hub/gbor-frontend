import { Avatar } from "antd";
import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const CreatorMessage = () => {
  const { dynamic } = useParams();
  const [data, setData] = useState([]);
  const [ongoingMessage, setOngoingMessage] = useState();
  const [incomingMessage, setIncomingMessage] = useState();

  const handleMessage = () => {
    console.log(ongoingMessage);
  };

  return (
    <>
      <Link
        to="/dashboard"
        className="my-4 text-xl flex items-center "
        style={{ color: "black" }}
      >
        <IoIosArrowBack style={{ fontSize: "20px" }} /> <span>Dashboard</span>
      </Link>
      <div className="border border-[#fb7c29] w-full rounded-md  bg-orange-50 p-8 pb-2">
        <div className="w-full h-[570px] overflow-y-auto flex flex-col scrollbar bg-orange-100 rounded p-1">
          {[...Array(10).keys()].map((index) => {
            return (
              <>
                {/* First Section (Left). it's receiver message section*/}
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

                {/* Second Section (Right).it's sender message section  */}
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
        <div className="flex gap-2 p-1 bg-orange-100 rounded">
          <input
            type="text"
            onChange={(e) => setOngoingMessage(e.target.value)}
            name="message"
            placeholder="Type message..."
            className="w-full h-12 border border-orange-300 rounded px-3 outline-none text-lg text-orange-500 placeholder:text-orange-200"
          />
          <button className="px-2" onClick={handleMessage}>
            <BsFillSendFill fontSize={30} color="#fb7c29" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatorMessage;
