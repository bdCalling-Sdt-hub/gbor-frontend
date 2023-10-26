import React, { useEffect, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../Config";
import CreatorCard from "../../Components/Common/CreatorCard/CreatorCard";

const SearchPage = () => {
  const navigate = useNavigate();
  const { text } = useParams();
  const location = JSON.parse(localStorage.location);
  const [data, setData] = useState([]);

  const handleBackSearch = () => {
    const uri = location?.pathname;
    navigate(uri);
  };

  useEffect(() => {
    axios
      .get(`api/auth/search-creator/${text}`)
      .then((res) => setData(res.data?.data?.searchData));
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] h-full">
      <div className="flex items-center bg-red-400">
        <button onClick={handleBackSearch} className="px-4 pr-3">
          <MdKeyboardBackspace fontSize={25} color="#fff" />
        </button>
        <input
          className="min-w-full h-16 bg-transparent outline-none text-white"
          type="search"
          value={text}
        />
      </div>

      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 w-full p-4 lg:p-0  lg:w-3/4 mx-auto gap-4 mt-10 lg:pb-[400px]">
        {data.map((creator) => (
          <CreatorCard key={creator.id} data={creator} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
