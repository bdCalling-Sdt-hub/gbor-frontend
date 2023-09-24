import React, { useEffect, useState } from "react";
import PreviousDonatorCard from "./PreviousDonatorCard";

const PreviousDonator = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../fakeDB.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1 className=" w-3/4 mx-auto text-center text-5xl font-bold pb-4 mt-24">
        Previous Donators
      </h1>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 w-full  lg:w-3/4 mx-auto gap-4 mt-10 p-4 lg:p-0">
        {data.map((creator) => (
          <PreviousDonatorCard key={creator.id} data={creator} />
        ))}
      </div>
    </div>
  );
};

export default PreviousDonator;
