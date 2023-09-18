import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PreviousDonator from "../../Components/PreviousDonator/PreviousDonator";
import img from "../../Images/creator.png";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const OurCreatorsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../fakeDB.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const filteringData = data.find((dt) => dt.id === parseInt(id));
  console.log(filteringData);
  return (
    <div>
      <Navbar />
      <div className="pt-12 bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f] pb-32">
        <div className="flex items-center w-3/4 mx-auto justify-between">
          <div className="w-3/4">
            <img width="70%" src={img} alt="" />
          </div>
          <div className="w-2/4">
            <h1 className="text-2xl font-bold text-[#252525]">
              Ut enim ad minima veniam, quis nostrum exercitationem.
            </h1>
            <p className="mt-2 mb-8 text-[#4B5563]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum.
            </p>

            <div className="p-4 border border-black rounded-md w-5/6">
              <p className="text-right text-[#4B5563] mb-2">
                1Gbor = <span>{"500FR"}</span>{" "}
              </p>
              <form>
                <input
                  type="text"
                  className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full"
                  placeholder="Enter Gbor Amount"
                  name=""
                  id=""
                />
                <input
                  type="text"
                  className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full"
                  placeholder="Enter Gbor Amount"
                  name=""
                  id=""
                />
                <textarea className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full h-32" />
                <div className="flex justify-end items-center">
                  <label htmlFor="" className="mr-2 text-[#4B5563]">
                    Total Cost=
                  </label>
                  <input
                    type="text"
                    className="border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-2/6 text-center"
                    placeholder="OFR"
                    name=""
                    id=""
                  />
                </div>
                <button
                  className="bg-[#fb7c29] text-white px-4 w-full py-3 rounded-md hover:bg-[#ef4444] transition"
                  type="submit"
                >
                  Donate
                </button>
              </form>
            </div>
          </div>
        </div>
        <PreviousDonator />
      </div>
      <Footer />
    </div>
  );
};

export default OurCreatorsDetails;
