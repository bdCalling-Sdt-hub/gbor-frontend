import { Empty } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentCreators } from "../../../ReduxSlice/creatorsSlice";
import CreatorCard from "../../Common/CreatorCard/CreatorCard";

const Creators = () => {
  const [title, setTitle] = useState("all");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { creatorsData, pagination } = useSelector((state) => state.creators);

  useEffect(() => {
    const data = {
      page: page,
      limit: 4,
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
    <div className="bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-28 text-center">
      <h1 className="w-3/4 mx-auto text-center text-5xl font-bold pb-4">
        Our Creators
      </h1>
      <div className="w-3/4 mx-auto mt-10 text-center flex flex-col lg:flex-row justify-center gap-2">
        <button
          onClick={() => setTitle("all")}
          className={`${
            title === "all" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-2 md:px-5 rounded-md`}
        >
          All Creators
        </button>
        <button
          onClick={() => setTitle("art")}
          className={`${
            title === "art" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-2 md:px-5 rounded-md`}
        >
          Arts and Culture
        </button>
        <button
          onClick={() => setTitle("dance")}
          className={`${
            title === "dance" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-2 md:px-5 rounded-md`}
        >
          Dance
        </button>
        <button
          onClick={() => setTitle("photography")}
          className={`${
            title === "photography" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-5 rounded-md`}
        >
          Photography
        </button>
        <button
          onClick={() => setTitle("entrepreneur")}
          className={`${
            title === "entrepreneur" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-2 md:px-5 rounded-md`}
        >
          Entrepreneur
        </button>
      </div>
      {filteringData.length === 0 ? (
        <div className="my-28">
          <Empty />
        </div>
      ) : (
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 w-full p-4 lg:p-0  lg:w-3/4 mx-auto gap-4 mt-10">
          {filteringData.map((creator, index) => (
            <CreatorCard key={index} data={creator} />
          ))}
        </div>
      )}
      <button
        className="bg-[#252525] text-white px-6 py-3 rounded-md mt-10 hover:bg-[#fb7c29] transition"
        onClick={handleLoadMore}
      >
        Discover more creators
      </button>
    </div>
  );
};

export default Creators;
