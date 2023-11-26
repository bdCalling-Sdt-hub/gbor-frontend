import { Empty } from "antd";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Category } from "../../ReduxSlice/categorySlice";
import { ContentCreators } from "../../ReduxSlice/creatorsSlice";
import CreatorCard from "../Common/CreatorCard/CreatorCard";

const OurCreatorsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("all");
  const dispatch = useDispatch();
  const { creatorsData, pagination } = useSelector((state) => state.creators);
  const [searchData, setSearchData] = useState("");
  const { categoryLists } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(Category());
  }, []);

  const handleSearch = () => {
    if (searchData !== "") {
      navigate(`/search/${searchData}`);
    }
    localStorage.setItem("location", JSON.stringify(location));
  };

  useEffect(() => {
    const data = {
      search: "",
      page: page,
      limit: 8,
    };

    dispatch(ContentCreators(data));
  }, [page]);

  let filteringData;

  if (title !== "all") {
    filteringData = creatorsData.filter(
      (data) => data.creator_category === title
    );
  } else {
    filteringData = creatorsData;
  }

  const handleLoadMore = () => {
    if (pagination.totalPage > pagination.currentPage) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  return (
    <div className="pt-12 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-28">
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-3/4 p-4 lg:p-0 mx-auto justify-between">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-[#252525] drop-shadow-xl">
            Ut enim ad minima veniam,
            <br /> quis nostrum exercitationem.
          </h1>
          <p className="mt-5 text-[#4B5563]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum.
          </p>
        </div>
        <div className="w-full lg:w-2/4 mt-4 lg:mt-0">
          <div className="border border-[#4B5563] flex items-center rounded-md ">
            <input
              type="text"
              className="border-0 outline-none bg-transparent p-3 px-2 w-5/6"
              placeholder="Search your favourite creator"
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button
              style={{ marginLeft: "auto" }}
              className="pr-2 hover:scale-125 transition"
              onClick={handleSearch}
            >
              <FiSearch style={{ fontSize: "20px", color: "#4B5563" }} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto mt-28 mb-16 text-center flex flex-col lg:flex-row justify-center gap-2">
        <button
          onClick={() => setTitle("all")}
          className={`${
            title === "all" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-5 rounded-md`}
        >
          All Creators
        </button>
        {categoryLists.map((category) => (
          <button
            key={category._id}
            onClick={() => setTitle(category.categoryName)}
            className={`${
              title === category.categoryName ? "bg-[#fb7c29] text-white" : ""
            } border py-3 px-2 md:px-5 rounded-md`}
          >
            {category.categoryName.charAt(0).toUpperCase() +
              category.categoryName.slice(1)}
          </button>
        ))}
      </div>
      {filteringData.length === 0 ? (
        <div className="my-28">
          <Empty />;
        </div>
      ) : (
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 w-full p-4 lg:p-0  lg:w-3/4 mx-auto gap-4 mt-10">
          {filteringData.map((creator, index) => (
            <CreatorCard key={index} data={creator} />
          ))}
        </div>
      )}
      {creatorsData.length >= 8 && (
        <div className="text-center">
          <button
            className="bg-[#252525] text-white px-6 py-3 rounded-md mt-10 hover:bg-[#fb7c29] transition"
            onClick={handleLoadMore}
          >
            Discover more creators
          </button>
        </div>
      )}
    </div>
  );
};

export default OurCreatorsPage;
