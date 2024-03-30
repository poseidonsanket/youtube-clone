import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import youtubeImg from "../img/youtube.png";
import { FaYoutube } from "react-icons/fa";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg-black items-center gap-28 p-3">
      <div className="flex items-center col-span-1 gap-6">
        <GiHamburgerMenu
          onClick={toggleMenuHandler}
          className="ml-2 text-3xl"
        />
        <p className="flex items-center gap-2 font-bold text-xl"><FaYoutube className="text-3xl"/>YouTube</p>
        
      </div>
      <div className="col-span-10 flex items-center">
        <input
          className="w-1/2 border p-2 border-gray-400 rounded-l-full bg-black"
          type="text"
          placeholder="Search"
        />
        <button className="px-4 py-2 border border-gray-400 rounded-r-full">
          <IoSearch className="text-2xl" />
        </button>
      </div>
      <div className="col-span-1">
        <CgProfile className="text-4xl" />
      </div>
    </div>
  );
};

export default Head;
