import React from "react";

const PreviousDonatorCard = ({ data }) => {
  const { name, received } = data;
  return (
    <div className="bg-gradient-to-r from-[#f07360] to-[#ec5961] p-4 rounded-md shadow hover:shadow-lg">
      <h1 className="font-bold text-lg">{name}</h1>
      <h2 className="font-bold mt-2 mb-1">GBOR GIVEN: {received}</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
      </p>
    </div>
  );
};

export default PreviousDonatorCard;
