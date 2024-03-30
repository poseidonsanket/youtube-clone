import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestions, setIsSuggestions] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(searchQuery);
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const searchSuggestions = () => {
    setIsSuggestions(false);
  };

  return (
    <div className="grid grid-flow-col shadow-lg-black items-center gap-28 p-3">
      <div className="flex items-center col-span-1 gap-6">
        <GiHamburgerMenu
          onClick={toggleMenuHandler}
          className="ml-2 text-3xl"
        />
        <p className="flex items-center gap-2 font-bold text-xl">
          <FaYoutube className="text-3xl" />
          YouTube
        </p>
      </div>
      <div className="col-span-10 px-10">
        <div className="w-full flex items-center">
          <input
            className="w-1/2 border p-2 pl-3 border-gray-400 rounded-l-full bg-black"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSuggestions(true);
            }}
            onBlur={() => setIsSuggestions(false)}
          />
          <button
            className="px-4 py-2 border border-gray-400 rounded-r-full"
            onClick={searchSuggestions}
          >
            <IoSearch className="text-2xl" />
          </button>
        </div>

        {isSuggestions && (
          <div className="fixed bg-black py-6 px-2 rounded-lg w-[38rem] shadow-lg border border-gray-400 ml-1">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="flex gap-4 shadow-black shadow-md items-center py-1 px-3 hover:bg-gray-900 rounded-lg"
                >
                  <IoSearch className="text-xl" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <CgProfile className="text-4xl" />
      </div>
    </div>
  );
};

export default Head;
