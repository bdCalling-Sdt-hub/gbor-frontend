import React, { useEffect } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CreatorCard from "../../Components/Common/CreatorCard/CreatorCard";
import { ContentCreators } from "../../ReduxSlice/creatorsSlice";

const SearchPage = () => {
  const navigate = useNavigate();
  const { text } = useParams();
  const location = JSON.parse(localStorage.location);
  const dispatch = useDispatch();
  const { creatorsData } = useSelector((state) => state.creators);

  const handleBackSearch = () => {
    const uri = location?.pathname;
    navigate(uri);
  };

  console.log(text);

  const filteredData = creatorsData.filter(
    (data) =>
      data.fName.toLowerCase().match(text.toLowerCase()) ||
      data.lName.toLowerCase().match(text.toLowerCase()) ||
      data.userName.toLowerCase().match(text.toLowerCase()) ||
      (data.fName + " " + data.lName).toLowerCase().match(text.toLowerCase())
  );

  console.log(filteredData);

  useEffect(() => {
    dispatch(ContentCreators());
  }, [text]);

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
        {filteredData.map((creator) => (
          <CreatorCard key={creator.id} data={creator} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
